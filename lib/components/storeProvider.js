import React from 'react';
import PropTypes from 'prop-types';

/*High Order Component - receive a regular react Component
it will wrap it with a new component(WithStore) which if fetching the store
out of the context API and providing the store to the original
component as a prop*/
const storeProvider = (Component) => {
  return class extends React.Component {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
          store: PropTypes.object,
        };
        render(){
          return <Component {...this.props} store = {this.context.store} />; 
        }
  };
};

export default storeProvider;