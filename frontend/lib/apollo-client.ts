import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://wordpress:80/index.php?graphql",
    }),
    credentials: "include",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
