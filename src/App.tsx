import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import LaunchCard from './Components/LaunchesCard'
 
const client = new ApolloClient({
  uri:'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

client 
  .query({
    query: gql`
      query GetLauches {
        launches(limit: 5) {
          launch_date_utc
          launch_success
          rocket {
            rocket_name
          }
          links {
            video_link
          }
          details
        }
      }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h1>My first Apollo app 🚀</h1>
        </div>
        <LaunchCard />
      </ApolloProvider>
    </div>
  );
}

export default App;
