import { Flex, Box, Text, Image } from "@chakra-ui/react";

function MyComponent({ content }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt={'45px'}>
        <Text
          px="10px"
          fontWeight={700}
          fontSize={"2xl"}
          fontFamily="FedraSansStdMedium"
        >
          {content.title}
        </Text>
      </Box>
      <Box pt={'15px'} mb={"20px"}>
        <Image src={content.url} />
      </Box>
    </Flex>
  );
}

export default MyComponent;
