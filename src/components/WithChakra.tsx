'use client'
import { Providers } from "@/app/providers";
import Link from 'next/link';
import FilmCard from "@/components/FilmCard";
import AccordionTest from '@/components/AccordionTest';
import { Center, Box} from '@chakra-ui/react'

interface FilmItemIP {
    releaseDate: string;
    title: string;
    director: string;
  }

interface FilmsList {
    films: FilmItemIP[];
}
export default function WithChakra(props: FilmsList) {
    const films = props.films;
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