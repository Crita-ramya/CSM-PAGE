import React from 'react'
import { Box, Button, Center, Flex, Grid, Image, Text,Stack,GridItem } from '@chakra-ui/react'
import Project from './Project';

export default function UnitedNation(data) {
  console.log("my data:- ", data)
  return (
    <Box textAlign={"center"} backgroundColor={"#FFF9EA"} padding={50}>
      <Project content={data.data} />

      <Text fontSize={'16px'} fontWeight={'400'} py='40px'>
        Addressing thirteen of the seventeen Sustainable Development<br/> Goals
        (SDGs) by United Nations{" "}
      </Text>
      <Box mb={"30px"} textAlign={"center"}>
        {/* <Grid
          justifyContent={"center"}
          templateColumns="repeat(1, 1fr)"
          display={{ base: "none", md: "block" }}
        >
          <GridItem>
            <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711881625/UN_Logo_1_mvu83c.png" />
          </GridItem>
          <GridItem>
            <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711881702/UN_Logo_2_zohcke.png" />
          </GridItem>
          <GridItem>
            <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711881867/UN_Logo_3_gwqzef.png" />
          </GridItem>
        </Grid> */}
       
        <Grid
      templateColumns="repeat(1, 1fr)" // 3 columns
      gap={2} // Gap between grid items
      display={{ base: "none", md: "block" }}
    >
      {/* Grid Item 1 */}
      <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
        <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711881625/UN_Logo_1_mvu83c.png" alt="Image" />
      </GridItem>

      {/* Grid Item 2 */}
      <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
        <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711881702/UN_Logo_2_zohcke.png" alt="Image" />
      </GridItem>

      {/* Grid Item 3 */}
      <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
        <Image src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1711881867/UN_Logo_3_gwqzef.png" alt="Image" />
      </GridItem>
    </Grid>


        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign={"center"}
          justify="center"
          display={{ base: "block", md: "none" }}
        >
          <Image src="https://static.sadhguru.org/d/46272/1710831877-un_sdg-s_logo_mobile.png" />
        </Stack>
      </Box>
    </Box>
  );
}
