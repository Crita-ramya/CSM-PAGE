import React from 'react'
import { Box, Button, Image, Text, Flex } from '@chakra-ui/react';

export default function PastPartner() {
  return (
  <Box mb={"30px"}>
    <Flex  direction={{base:'column',md:'row',lg:'row'}} textAlign={'center'} justify="center">
      <Image src='https://res.cloudinary.com/ddsus8zy7/image/upload/v1711883160/Screenshot_2023-05-15_at_12.25_2_b7fff9.jpg'></Image>
      <Image src='https://res.cloudinary.com/ddsus8zy7/image/upload/v1711883338/Screenshot_2023-05-15_at_12.25_3_cysei3.png'></Image>
      <Image src='https://res.cloudinary.com/ddsus8zy7/image/upload/v1711883160/Screenshot_2023-05-15_at_12.25_2_b7fff9.jpg'></Image>
    </Flex>
  </Box>
  )
}
