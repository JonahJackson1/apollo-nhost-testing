"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "@/components/App";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
