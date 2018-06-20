class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
    };
    this.subscriptions = {};
    this.lastSubscriptionId =1;
  }
  mapIntoObject(arr){
    return arr.reduce((acc, curr)=> {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  lookUpAuthor = (authorId) => {
    return this.data.authors[authorId];
  };
  getState = () => {
    return this.data;
  };
  subscribe = (callback) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  };
  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };
  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  }
  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((element) => element());
  };
  setSearchTerm = (searchTerm) => {
    this.data.searchTerm = searchTerm;
    this.notifySubscribers();
  };
}

export default DataApi;