import React from 'react'
import { Box, Button, Image, Text, Flex, Center ,Link} from '@chakra-ui/react';

export default function OtherWays() {
  return (  
      <Flex direction={{base:'column',md:'row'}}  alignItems={'center'} pl={{base:'0px',md:'50px',lg:'260px'}} py="40px" backgroundImage={'https://res.cloudinary.com/ddsus8zy7/image/upload/v1711883840/Group_1171276326_chu1hd.png'}>
        <Flex direction={"column"} justify={'center'} pr="50px">
           <Text fontSize={38} fontWeight={"500"} >
                Other Ways to <br /> Contribute 
           </Text>
           <Image
              //  height={43}
              //  width={163}
               src='https://res.cloudinary.com/ddsus8zy7/image/upload/v1711883649/Group_1171277081_ztjk38.png'/>
               </Flex>
           <Flex direction={{base:'column',md:'row'}}>
             <Box backgroundColor={"#fff"} p={"40px"} textAlign={{base:"center",md:'left'}} margin={{base:'30px',md:'0'}} >
                 <Text fontSize={"20px"} fontWeight={"500"} mb={"10px"}>
                 Isha Foundation Corpus Fund
                 </Text>
                 <Text mb={"10px"} fontSize={"16px"}>
                 Your contribution will help us in continuing Isha's<br/> activities in the future.
                 </Text>
                 <Button  backgroundColor={"#bb3e03"} color={"#fff"} _hover='#BB3E03'>
                   Donate Now
                 </Button>
                 <Text mt={"20px"} fontSize={"16px"}>
                 You can also contribute to <Link textDecoration={"underline"} color={"#bb3e03"}> Isha’s General Donation.</Link>
                 </Text>
             </Box>
          
           </Flex>
           </Flex>
           
   
  )
}
