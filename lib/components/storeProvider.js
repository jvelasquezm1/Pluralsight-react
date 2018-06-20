import React from 'react';
import PropTypes from 'prop-types';

/*High Order Component - receive a regular react Component
it will wrap it with a new component(WithStore) which if fetching the store
out of the context API and providing the store to the original
component as a prop*/
const storeProvider =  (extraProps) =>(Component) => {
  //Although the global state is changing the PureComponent don't re render
  return class extends React.PureComponent {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
          store: PropTypes.object,
        };
        onStoreChange = () => {
          this.forceUpdate();
        };
        componentDidMount = () => {
          this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
        };
        componentWillUnmount = () => {
          this.context.store.unsubscribe(this.subscriptionId);
        };
        render(){
          return <Component {...this.props}
            {...extraProps(this.context.store, this.props)} 
            store = {this.context.store} />; 
        }
  };
};

export default storeProvider;