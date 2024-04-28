// src/apollo.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // Endpoint GraphQL Trevorblades
  cache: new InMemoryCache()
});

export default client;
