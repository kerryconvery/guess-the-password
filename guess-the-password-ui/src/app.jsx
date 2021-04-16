import React from 'react';
import ApplicationTemplate from './application-template/applicationTemplate';
import ClientManagementPage from './play-guess-the-password-page/clientManagementPage';

const App = () => (
  <ApplicationTemplate>
    <ClientManagementPage path={routes.clientManagement} getClients={api.getClientsRequest} />
  </ApplicationTemplate>
)

export default App;