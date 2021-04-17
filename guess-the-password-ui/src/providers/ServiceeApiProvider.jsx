import React, { createContext, useContext } from 'react';
import { node, object } from 'prop-types';

const ServiceApiContext = createContext({});

export const ServiceApiProvider = ({ serviceApi, children }) => (
  <ServiceApiContext.Provider value={serviceApi}>
    {children}
  </ServiceApiContext.Provider>
);

ServiceApiProvider.propTypes = {
  serviceApi: object.isRequired,
  children: node.isRequired,
}

export const useServiceApi = () => useContext(ServiceApiContext);