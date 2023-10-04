import createApolloClient from "../../../apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";
import WithChakraComponent from '@/components/WithChakra';



interface FilmItemIP {
    releaseDate: string;
    title: string;
    director: string;
  }
  
interface FilmsIP {
    allFilms: {
        films: FilmItemIP[];
    };
}

export default async function WithChakra() {
  const data: FilmsIP = await getData();
  const films = data?.allFilms?.films || []; 
  
  return <WithChakraComponent films={films} />

}


async function getData() {
    const client = createApolloClient();
    const { data }: ApolloQueryResult<any> = await client.query({
      query: gql`query Query {
        allFilms {
          films {
            title
            director
            releaseDate
            speciesConnection {
              species {
                name
                classification
                homeworld {
                  name
                }
              }
            }
          }
        }
      }      
    `,
    });
  
    return data;
}
  