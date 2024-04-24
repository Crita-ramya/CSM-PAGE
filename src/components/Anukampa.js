import React from "react";
import { Box, Button, Image, Text, Flex } from "@chakra-ui/react";

export default function Anukampa() {
  return (
    <>
    <Box
      style={{
        background:
          "linear-gradient(117.5deg, transparent 20%, #1f1b17, #000000)",
      }}
      maxW="1330px"
      h="473px"
      position="relative"
      marginLeft="auto"
      marginRight="auto"
      display={{base:'none', md:'block'}}
    >
      <Image
        src="/happykid.jpg"
        h="473px"
        w="900px"
        objectFit="cover"
        position="absolute"
        zIndex={-1}
      />
      <Image
        src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1712031874/Rectangle_42296_vnwio7.png"
        alt="Image 2"
        objectFit="cover"
        position="absolute"
        right="0"
        top="0"
        bottom="0"
      />

      <Box
        position="absolute"
        top="50%"
        left="72%"
        transform="translate(-50%, -50%)"
        textAlign="left"
        fontFamily="FedraSansStd"
      >
        <Text
          size="lg"
          color="white"
          fontFamily="FedraSansStdMedium"
          fontSize="28px"
        >
          Anukampa 2023: Isha’s Annual Project Report
        </Text>
        <Text color="white" mt={2} fontSize="20px" py={"10px"}>
          Anukampa 2023 offers a glimpse into the lives of the people and
          communities touched and transformed by Isha’s programs.
        </Text>
        <Button
          bgColor="#BB3E03"
          color="#fff"
          fontSize="18px"
          fontFamily="FedraSansStd"
          py="28px"
          px="100px"
          mt="20px"
          width="180px"
          _hover='#BB3E03'
        >
          Download Now
        </Button>
      </Box>
    </Box>

    {/* for mobile devices */}
    <Box
      maxW="586px"
      maxH="100%"
      marginX="auto"
      display={{sm:'block', md:'none'}}
    >
      <Box>
        <Image src="/happykid.jpg" zIndex={-1} />
      </Box>
      <Box bgColor={'#1e1b17'}>
        <Box style={{ background: "linear-gradient(#352e29, #1f1b17)", transform: "skewY(-5deg)"}} h='50px' mt={'-20px'}>
        </Box>
        <Box textAlign="left" fontFamily="FedraSansStd" px='20px' mt={'20px'}>
        <Text
          size="lg"
          color="white"
          fontFamily="FedraSansStdMedium"
          fontSize="24px"
        >
          Anukampa 2023: Isha’s Annual Project Report
        </Text>
        <Text color="#FFFFFF" mt={2} fontSize="16px" py={"10px"}>
          Anukampa 2023 offers a glimpse into the lives of the people and
          communities touched and transformed by Isha’s programs.
        </Text>
        <Button
          bgColor="#BB3E03"
          color="#fff"
          fontSize="18px"
          fontFamily="FedraSansStd"
          py="28px"
          px="100px"
          mt="20px"
          mb='50px'
          width="180px"
          _hover='#BB3E03'
        >
          Download Now
        </Button>
      </Box>
      </Box>
    </Box>
    </>
  );
}
