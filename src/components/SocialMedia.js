import React from 'react'
import { Box, Button, Center, Flex, Image, Text,Link } from '@chakra-ui/react';

export default function SocialMedia() {
  return (
    <Box textAlign={"center"} padding={30}>
      <Text fontSize={"20px"} fontWeight="bold">
        Share with Your <br />
        Colleagues and Friends
      </Text>
      <Text fontSize={"18px"}>
        Inspire your colleagues and friends to
        <br /> learn more and contribute.
      </Text>
      <Box>
        <Flex justify={"center"} mt={"10px"}>
          <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711885262/icons8-whatsapp-48_bqowrj.png" />
          <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711885273/icons8-linkedin-48_z723dm.png" />
          <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711885282/X-Logo-removebg-preview_lwbt6o.png" />
          <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711885331/icons8-mail-48_sihcgg.png" />
          <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711885345/icons8-instagram-48_ophya5.png" />
          <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711885352/icons8-facebook-48_rqh7pa.png" />
        </Flex>
      </Box >
      <Box p={"30px"}>
      <Flex justify={"center"}>
        <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711851364/Vector_1_jztns3.png" />
      </Flex>
      </Box>
      <Box display={{base:"block",md:"none"}}>
        <Text 
        fontSize={"24px"}
        fontFamily="FedraSansStd" mb={"10px"}>Contact Us</Text>
        <Text fontSize={"20px"} mb={"10px"}>Isha CSR Team</Text>
        <Text fontSize={"24px"} mb={"10px"}>+91 94425 04672</Text>
        <Link textDecoration={"underline"} color={"#bb3e03"} fontSize={"24px"} mb={"10px"}>csr@ishaoutreach.org</Link>
      </Box>

      <Box p={"40px"} display={{base:"none",md:"block"}}>
        <Flex justify={"center"} >
         <Flex direction={"column"}>
         <Text>Contact</Text>
          <Text textAlign={"right"}>Us</Text>
         </Flex>
          <Image src="/Line 342.svg" ml="20px" />
          <Flex direction='column' ml="20px">
          <Text>+91 94425 04672</Text>
          <Link textDecoration={"underline"} color={"#bb3e03"}>csr@ishaoutreach.org</Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
