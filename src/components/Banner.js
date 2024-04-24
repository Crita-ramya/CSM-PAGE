import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, IconButton, Button } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardData from "./cardData";

const Banner = () => {
  const data = [
    {
      id: "1",
      imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1711710724/Group_1171276275_1_tqfupa.png",
      heading: "Samskriti",
      description: "Become a patron for Indian art and culture",
    },
    {
      id:"2",
      imageUrl:"https://www.datocms-assets.com/46272/1711010095-csr_slider_05_desktop.jpg",
      heading:"Isha Crematoriums: Kayantha Sthanam",
      description:"Revive ancient death rituals to offer dignity in death"
  },
  {
    id:"3",
    imageUrl:"https://www.datocms-assets.com/46272/1711375123-csr_slider_06_desktop.jpg",
      "heading":"Isha Gramotsavam",
      description:"Support India’s biggest rural sporting event"
  },
  {
      id:"4",
      imageUrl:"https://www.datocms-assets.com/46272/1711010286-csr_slider_07_desktop.jpg",
      heading:"Action for Rural Rejuvenation",
      description:"Strengthen community healthcare in rural India"
  },
  {
      id:"5",
      imageUrl:"https://www.datocms-assets.com/46272/1711010117-csr_slider_08_desktop.jpg",
      heading:"Sadhanapada",
      description:"Facilitate a life-transforming program"
  },
  {
      id:"6",
      imageUrl:"https://www.datocms-assets.com/46272/1711010010-csr_slider_02_desktop.jpg",
      heading:"Save Soil - Thaaimann Kaakkum Vivasaayam",
      description:"Enable farmers to transition into regenerative agriculture"
  },
  {
      id:"7",
      imageUrl:"https://www.datocms-assets.com/46272/1712047838-csr_slider_03_desktop.jpg",
      heading:"Rally for Rivers - Cauvery Calling ",
      description:"Help Cauvery flow again "
  },
  {
      id:"8",
      imageUrl:"https://www.datocms-assets.com/46272/1711010076-csr_slider_04_desktop.jpg",
      heading:"Farmer Producer Organization",
      description:"Empower farmers to create profitable enterprises"
  }

  ];

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Box position="relative">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <Box
            key={item.id}
            w="100%"
            h={{ base: "300px", md: "620px" }}
            position="relative"
          >
            <Box
              w="100%"
              h={{ base: "300px", md: "620px" }}
              bgImage={`url(${item.imageUrl})`}
              bgPosition="center"
              bgRepeat="no-repeat"
              backgroundSize="cover"
            >
              {/* <Box position="absolute" top="0" left="0" w="100%" h="100%">
                Add overlay if needed
              </Box> */}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                // justifyContent="center"
                h="100%"
                pt={{ base: "100px", md: "170px" }}
              >
                <Text
                  color="#FFA800"
                  fontSize={{ base: "24px", md: "40px" }}
                  fontWeight="bold"
                  fontFamily="FedraSansStdMedium"
                  textAlign="center"
                  px={{ base: "20px", md: "0" }}
                >
                  {item.heading}
                </Text>
                <Text
                  color="#FFF"
                  fontSize={{ base: "18px", md: "28px" }}
                  fontWeight="400"
                  fontFamily="FedraSansStdMedium"
                  textAlign="center"
                  px={{ base: "20px", md: "0" }}
                >
                  {item.description}
                </Text>
              </Box>
              <Box mt={{ base: "-50px", md: "-330px" }}>
                <CardData />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box display={{ md: "none" }} bg={"#FFEBC7"} mt={"-55px"} py={"10px"}>
        <Button
          bgColor="#BB3E03"
          color="#fff"
          fontSize="20px"
          fontWeight="600"
          fontFamily="FedraSansStd"
          py="30px"
          px="10px"
          _hover={{ bg: "blue" }}
          width="230px"
        >
          Partner with us
        </Button>
      </Box>
      <IconButton
        isRound={true}
        variant="solid"
        aria-label="Previous"
        fontSize="20px"
        position="absolute"
        top="50%"
        left={{ base: "10px", sm: "60px" }}
        transform="translateY(-50%)"
        zIndex="1"
        icon={<FaChevronLeft />}
        onClick={goToPrev}
        display={{ base: "none", md:'flex'}}
      />
      <IconButton
        isRound={true}
        variant="solid"
        aria-label="Next"
        fontSize="20px"
        position="absolute"
        top="50%"
        right={{ base: "10px", sm: "60px" }}
        transform="translateY(-50%)"
        zIndex="1"
        icon={<FaChevronRight />}
        onClick={goToNext}
        display={{ base: "none", md:'flex'}}
      />
    </Box>
  );
};

export default Banner;
