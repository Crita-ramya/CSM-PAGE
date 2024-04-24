import React from 'react';
import { useRef } from "react";
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const MainBox = () => {
    const sliderRef = useRef(null);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     customPaging: function(i) {
//         return (
//             <button className="dot-style"></button>
//         );
//     }
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const awards = [
    {
      imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049169/UNEP_1_m1yptx.png",
      description: "Accredited by the United Nations Environment Programme (UNEP)"
    },
    {
      imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049266/UNCCD_1_nfbf6t.png",
      description: "Accredited by the United Nations Convention to Combat Desertification (UNCCD)"
    },
    {
      imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049442/IUCN_logo_1_n0ma0d.png",
      description: "Awarded the Rashtriya Khel Protsahan Puraskar (2018) (Government of India’s highest sports honor)"
    },
    {
      imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049486/TN_Govt_Logo-removebg-preview_2_esldmz.png",
      description: "Awarded best performing FPO by the Govt. of Tamil Nadu."
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049551/UNEP_1_1_ubhyeo.png",
        description: "Accredited as a CAF America (Charities Aid Foundation America) International Validated Organization"
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049591/UNEP_1_2_j2pemm.png",
        description: "Awarded the Webby People’s Voice Award, Social Media - Sustainability & Environment"
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049622/UNEP_1_3_gtpy99.png",
        description: "Sadhguru Center for a Conscious Planet, established at Harvard-affiliated teaching hospital, Beth Israel Deaconess Medical Center"
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049648/UNEP_1_4_fbmljt.png",
        description: "Awarded the Indira Gandhi Paryavaran Puraskar (Government of India’s highest environmental accolade )"
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049682/UNEP_1_5_d22u3q.png",
        description: "Member of the International Union for Conservation of Nature (IUCN)"
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049796/UNCCD_1_1_ppmer3.png",
        description: "Accredited as a Cluster Based Business Organization (CBBO) by the Government of India to support FPOs"
    },
    {
        imageUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712049832/IUCN_logo_1_1_m7dqvp.png",
        description: "Awarded Best Emerging Farmer Producer Organization by Indian Council of Agricultural Research - (ICAR - NAARM)"
    },
  ];

  return (
    <Box
      bgImage="url('https://res.cloudinary.com/ddsus8zy7/image/upload/v1711883840/Group_1171276326_chu1hd.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="620px"
      position="relative"
    >
      <Flex
        m={{base:'0px 15px',md:"0px 140px"}}
        flexDirection="row"
        justify="space-between"
        pt="50px"
        alignItems="center"
      >
        <Box>
          <Text color="#000" fontSize="3xl" fontWeight="bold" pb="20px">
            Awards & <br />Accreditations
          </Text>
        </Box>
        <Flex>
          <IconButton
            isRound={true}
            bgColor="white"
            variant="solid"
            aria-label="Previous"
            fontSize="20px"
            mr="20px"
            onClick={goToPrev}
            icon={<FaChevronLeft />}
          />
          <IconButton
            isRound={true}
            variant="solid"
            aria-label="Next"
            fontSize="20px"
            onClick={goToNext}
            icon={<FaChevronRight />}
          />
        </Flex>
      </Flex>
      {awards.length > 0 && (
        <Slider ref={sliderRef} {...settings}>
          {awards.map((award, index) => (
            <AwardCard
              key={index}
              imageUrl={award.imageUrl}
              description={award.description}
              index={index} // Pass the index as a prop
            />
          ))}
        </Slider>
      )}
    </Box>
  );
};

const AwardCard = ({ imageUrl, description, index }) => {
  return (
    <Box
      maxW={{base:"400px",sm:"500px", md:"380px", lg:"330px"}}
      overflow="hidden"
      boxShadow={{base:"none",md:"lg"}}
      mx="30px"
    //   mx={index === 0 ? "40px" : "60px"} // Add margin-left only to the first card
      bg={{base:"none",sm:"none",md:"white"}} // Set background color to white
      h="400px" // Set fixed height for the card
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems='center'
    >
      <Image src={imageUrl} alt="Award" maxH="200px" />
      <Box p="4">
        <Text color="gray.600" fontSize="lg" textAlign="center">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default MainBox;
