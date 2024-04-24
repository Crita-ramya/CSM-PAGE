import React from 'react';
import { Box, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';

export default function ImageCard(content) {
    console.log(content)
  return (
    <Box textAlign={'center'}>
      {/* <Flex direction={'row'} alignItems={Center}> */}
      <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}} gap={2} mb={50} px="20px">
        {content.content.map((item, index) => (
          <GridItem>
            <Image pl={{base:"59px",sm:"110px",md:"46px",lg:"68px"}} src={item.url}></Image>
            <Text
              fontSize={'18px'}
              fontWeight={700}
              color={'#000'}
              margin={'10px 20px'}
            >{item.title?item.title:""}</Text>
            <Text
              fontSize={'16px'}
              fontWeight={400}
            >{item.description}</Text>
          </GridItem>
        ))}
        
      </Grid>
      {/* </Flex> */}
    </Box>
  );
}
