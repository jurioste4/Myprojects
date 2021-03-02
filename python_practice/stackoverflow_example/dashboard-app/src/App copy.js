import './body.css';
import 'antd/dist/antd.css';
import * as React from 'react';
import { useState } from 'react';
import MapGl from 'react-map-gl';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
const API_URL = 'http://localhost:4000';
const CUBEJS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTQ2NTU2NTAsImV4cCI6MTYxNDc0MjA1MH0.44B87HnN15TEhQaoBq1nrO6qMGkrK6siKLNir0WGoQc';
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`,
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: '100%',
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <ApolloProvider client={client}>
      <AppLayout>{children}</AppLayout>
    </ApolloProvider>
  </CubeProvider>
);

export default App;
