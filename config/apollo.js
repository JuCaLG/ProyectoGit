import { ApolloClient, InMemoryCache } from '@apollo/client';
import {HttpLink} from 'apollo-link-http';
/*
const client= new ApolloClient ({
    cache: new InMemoryCache (),
    link : new HttpLink ({
        uri: 'http://10.0.2.2:4000/'
    })
});
*/

const client = new ApolloClient({
  uri: 'https://10.0.2.2:4000',
  cache: new InMemoryCache()
});

export default client;