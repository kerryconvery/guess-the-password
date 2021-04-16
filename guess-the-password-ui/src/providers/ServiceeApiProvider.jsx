import React, { createContext, useContext } from 'react';
import { node, object } from 'prop-types';

const SeerviceApiContext = createContext({});

export const ServiceApiProvider = ({ serviceApi, children }) => (
  <SeerviceApiContext.Provider value={serviceApi}>
    {children}
  </SeerviceApiContext.Provider>
);

ServiceApiProvider.propTypes = {
  serviceApi: object.isRequired,
  children: node.isRequired,
}

export const useServiceApi = () => useContext(ServiceApiContext);