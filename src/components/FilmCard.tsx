import Image from 'next/image'
import { Center, Box, Badge, Tooltip } from '@chakra-ui/react'


interface FilmIP {
    film: FilmItemIP;
  }

interface FilmItemIP {
    releaseDate: string;
    title: string;
    director: string;
  }
  


export default function FilmCard({film}: FilmIP) {
    return (
        <Center>
        <Box my={24} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
            backgroundColor='Snow'>
            <Box width="100%" height={250} >
                <Image width={316} height={250} src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750' alt={film.title} />
            </Box>
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                Released : {film.releaseDate}
                </Badge>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                    {film.director}
                </Box>
            </Box>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                >
                    <Tooltip label={film.title}>
                        {film.title}
                    </Tooltip>
            </Box>
            </Box>
        </Box>
        </Center>
    )
}
