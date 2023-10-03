import { Center, Box} from '@chakra-ui/react'
import { Providers } from "../providers";
import createApolloClient from "../../../apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";
import Link from 'next/link';
import FilmCard from "@/components/FilmCard";
import AccordionTest from '@/components/AccordionTest';




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
  
  return (
    <>
        <Providers>
            <>
            <Center>
                <Box my={24}>
                    <Link href="/with-chakra">With Chakra</Link>
                </Box>
            </Center>
            <Center>
                <Box my={24} maxW='sm' borderWidth='1px' borderRadius='lg'>
                        <AccordionTest />
                </Box>
            </Center>
            {
                films.map((film, idx) => <FilmCard key={idx} film={film} />)
            }
            </>
        </Providers>
    </>
    )
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
  