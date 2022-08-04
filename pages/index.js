import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from './utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3x1" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="1g" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}</Text>
      <Text fontSize="1g" paddingTop="3" paddingBottom="3" color="gray.700">{desc2}</Text>
      <Button fontSize="x1">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertiesForSale, propertiesFrRent}) {
  console.log(propertiesForSale, propertiesFrRent);

  return (
    <Box>
      <Banner 
        purpose="RENT A HOME"
        title="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them... */}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      />
        <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them... */}
        </Flex>
    </Box>
  )
}


// export async function  getStaticProps() {
//   const propertyForSale = await fetchApi('${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6')
//   const propertyForRent = await fetchApi('${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6')

// return {
//   props: {
//     propertiesForSale: propertyForSale?.hits,
//     propertiesFrRent: propertyForRent?.hits,
//   }
// }
// }