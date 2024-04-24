import React from 'react';
import { Box, Text, Image, Flex, Center } from '@chakra-ui/react';

export default function Quote() {
  return (
    <Box
      bg="linear-gradient(to bottom, #29241F 50%, #ffffff 50%)"
      // px={90}
      py={50}
    >
      <Flex alignItems={"center"} justify={"center"}>
      < Image
      alt='quote-image' 
      mt={"-75px"} pl={"10px"} 
      src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711703715/Frame_wrk7nb.png"/>
      <Text
        style={{
          fontSize: "20px",
          fontStyle: "italic",
          color: "white",
          fontFamily: "ui-sans-serif",
          textAlign: "center",
          margin: "14px",
          maxWidth:"447px"
        }}
      >
        A world full of love light and laugher its time has come. 
        Let us make it happen.
      </Text>
      <Image
      alt='quote-image' 
      mb={"-60px"} pr={"10px"}
      src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711703945/Vector_hlqoba.png"/>
      </Flex>
      <Flex direction={"column-reverse"} alignItems={'center'}>
      <Box >
          
      <Image
       w={{  lg:'720px'}}
        p={{base:'0px 20px'}}
        // m={{base:'0px 1px',md:'0 50%'}}
        src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711685695/Group_1171276286_d87qje.png"
      />
      </Box>
      <Box  p={'0 20%'}>
      <Image
      //  ml={{base:'50px',md:'150px',lg:'225px'}}
        mb={10}

        src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711688781/SadhguruSignature_gemtnk.png"
      />
      </Box>
    </Flex>
      
     
      <Text mx={{base:'30px',md:"184px", lg:"350px"}}
        style={{
          // marginLeft: "217px",
          // marginRight: "137px",
          
          fontSize: "16px",
          // lineHeight: "28px",
          fontFamily: "system-ui",
          textAlign:'left'
        }}
      >
        Over the course of three decades, our path-breaking environmental and
        social initiatives have garnered global recognition from esteemed
        organizations, including the United Nations, the International Union for
        Conservation of Nature (IUCN), and the World Economic Forum (WEF),
        serving as thriving models for human empowerment and community
        revitalization worldwide.
      </Text>
    </Box>
  );
}
