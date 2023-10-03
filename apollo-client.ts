import { ApolloClient, InMemoryCache, createHttpLink, DefaultOptions } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_CMS_API_HOST}/graphql`,
  });

const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    };
  });

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };

  
const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  });
};

export default createApolloClient;