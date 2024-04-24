import React from 'react';
import { Image, Text, Button, Flex, Box } from '@chakra-ui/react';

const CardData = () => {
  return (
    <>
      {/* For smaller screens (base: display block, md: display none) */}
      <Box display={{ base: "block", md: 'none' }} px={'20px'} textAlign={'center'} backgroundImage={'https://res.cloudinary.com/ddsus8zy7/image/upload/v1712992870/Rectangle_24_ygthsi.png'}>
        <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1712992376/Vector_3_r82zmw.png" alt="" py="20px" m={'0 35%'}/>
        <Text
          color="#ffffff"
          fontSize="20px"
          fontFamily="FedraSansStd"
        >
          CREATE A CONSCIOUS PLANET
        </Text>
        <Text
          color="#fff"
          fontSize="16px"
          fontFamily="FedraSansStd"
          w={{ md: "38%" }}
          textAlign="center"
          paddingBottom="20px"
        >
          Isha implements several large-scale projects in environment,
          education, health and community revitalization as part of a
          global effort to raise human consciousness and inspire
          responsible action towards a Conscious Planet.
        </Text>
      </Box>

      {/* For larger screens (display flex) */}
      <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
        <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1712992376/Vector_3_r82zmw.png" alt="" py="5" />
        <Text
          color="#ffffff"
          fontSize="20px"
          fontFamily="FedraSansStd"
        >
          CREATE A CONSCIOUS PLANET
        </Text>
        <Text
          color="#fff"
          fontSize="16px"
          fontFamily="FedraSansStd"
          w={{ md: "38%" }}
          textAlign="center"
          paddingBottom="20px"
        >
          Isha implements several large-scale projects in environment,
          education, health and community revitalization as part of a
          global effort to raise human consciousness and inspire
          responsible action towards a Conscious Planet.
        </Text>
        <Button
          bgColor="#BB3E03"
          color="#fff"
          fontSize="20px"
          fontWeight="600"
          fontFamily="FedraSansStd"
          py="6"
          px="2"
          _hover={{ bg: "blue" }}
          width="230px"
        >
          Partner with us
        </Button>
      </Flex>
    </>
  );
};

export default CardData;
