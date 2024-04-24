import React from "react";
import {
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Text,
  IconButton,
  VStack,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Project from "./Project";

const subTab = [
  {
    icon: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712902620/Vector_1_pev2rd.png",
    text: "Environment",
  },
  {
    icon: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712934534/Group_2913_y6y9fm.png",
    text: "Education",
  },
  {
    icon: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712902713/Group_2915_j4z7lm.png",
    text: "Community Health And WellBeing",
  },
];

const subTabPanelsDeatils = [
  [
    {
      imgUrl: "/rfr.svg",
      title: "Rally for Rivers - Cauvery Calling",
      description:
        "Focused on revitalizing Cauvery River by helping 5.2 million farmers to plant 2.42 billion trees on private farmlands, potentially boosting farmer income by 300-800%.",
      impact: "Impact",
      impactDescription: [
        "97.5 million living trees planted",
        "192,000 farmers shifted to tree-based agriculture",
        "Rally for Rivers (RFR) policy supported by 162 million people",
        "Rs. 19,000 crore Govt. of India project to revive 13 rivers based on RFR Draft Policy",
      ],
      buttonText: "View Details",
      isIcons: 1,
      icons: [
        "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712057917/UNEP_1_6_bvrtxc.png",
        "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712057922/UNCCD_1_2_j1nvdv.png",
        "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712057927/IUCN_logo_1_2_mdvqes.png",
        "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712057933/Indira_gandhi_award-_Ministry_of_Environment_Forrest_and_climate_change_1_bdtx0m.png",
      ],
    },
    {
      imgUrl:
        "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058216/Group_1171277155_es7vpf.jpg",
      title: "Save Soil - Thaaimann Kaakkum Vivasaayam (SS-TKV)",
      description:
        "The on-ground action of the Save Soil movement, SS-TKV aims to transition farmers from using chemical fertilizers and pesticides to a natural and regenerative agriculture model.",
      impact: "Impact",
      impactDescription: [
        "20,800+ farmers trained",
        "3615+ farmers transitioned to regenerative agriculture",
        "215+ training programs",
        "16.1 million+ views of 236+ training videos on YouTube",
      ],
      buttonText: "View Details",
      isIcons: 0,
      icons: ["", "", "", ""],
    },
  ],
  [
    {
      imgUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058321/Group_1171276292_1_rqyray.jpg",
      title: "Sadhanapada",
      description:"Facilitate a transformational 7-month residential program at the Isha Yoga Center for those looking to establish balance, clarity, and intensity.",
      impact: "Impact",
      impactDescription: [
        "91% experienced heightened inner joy",
        "93% reported improved situational handling",
        "92% felt greater mental and emotional stability ",
        "89% noted improved health and wellbeing",
      ],
      buttonText: "View Details",
      isIcons: 0,
      icons: ["", "", "", ""],
    },
    {
      imgUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058327/Group_1171276292_2_aic422.jpg",
      title: "Samskriti - A part of Sadhguru Gurukulam",
      impact: "Impact",
      description:"Enables the overall development of children with an education system that helps them realize their full potential – physically, mentally and spiritually.",
      impactDescription: [
        "Yoga and Kalaripayattu",
        "Classical Music and Bharatanatyam",
        "Sanskrit, Mathematics and English",
      ],
      buttonText: "View Details",
      isIcons: 0,
      icons: ["", "", "", ""],
    },
  ],
  [
    {
      imgUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058422/Group_1171276292_4_oaejjn.jpg",
      title: "Isha Gramotsavam",
      description:"Aspires to transform rural India through sports and an elaborate display of rural culture to help break caste barriers, assist deaddiction, empower women and revive the resilient rural spirit",
      impact: "Impact",
      impactDescription: [
        "60,138+ players",
        "5,130+ teams",
        "25,000 villages",
        "Volleyball, Throwball, Kabaddi"
      ],
      buttonText: "View Details",
      isIcons: 1,
      icons: ["https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058537/Group_1171276325_jwuh3u.png", "", "", ""],
    },
    {
      imgUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712059010/Group_1171276292_6_rnbdrr.jpg",
      title: "Action for Rural Rejuvenation (ARR)",
      description:"A multi-pronged, holistic outreach program transforming the lives of India’s rural poor through a range of health, livelihood, and community revitalization programs.",
      impact: "Impact",
      impactDescription: [
        "11.3 million people impacted",
        "5.2 million patients treated",
        "7,500 villages covered in southern India",
        "2,000+ free medical camps"
      ],
      buttonText: "View Details",
      isIcons: 0,
      icons: ["", "", "", ""],
    },
    {
      imgUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058587/Group_1171276292_5_qq3k7w.jpg",
      title: "Farmer Producer Organization",
      description:"Bringing together small and marginal farmers into Farmer Producer Organizations (FPOs), and providing technical, financial, and marketing assistance to turn them into profitable enterprises. ",
      impact: "Impact",
      impactDescription: [
        "Mentoring 25 FPOs in Tamil Nadu and Karnataka",
        "29,000+ tons of produce aggregated and sold",
        "7800+ farmer members (77% SMFs, 18% women)",
      ],
      buttonText: "View Details",
      isIcons: 1,
      icons: ["https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058594/Group_1171276324_qfj5ul.png",
       "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058600/TN_Govt_Logo-removebg-preview_1_viankm.png", "", ""],
    },
    {
      imgUrl: "https://res.cloudinary.com/ddsus8zy7/image/upload/v1712058416/Group_1171276292_3_zpicdv.jpg",
      title: "Isha Crematoriums: Kayantha Sthanam",
      description:"Committed to adopt 1000-3000 crematoriums in India, revive ancient traditions and offer cremations in an eco-friendly manner, in a spirit of service rather than as a commercial venture",
      impact: "Impact",
      impactDescription: [
        "14 crematoriums in partnership with Tamil Nadu Government",
        "80,000+ cremations Cremations",
        "offered free of cost during COVID-19 pandemic",
        "Eco-friendly LPG system used instead of firewood",
      ],
      buttonText: "View Details",
      isIcons: 1,
      icons: ["", "", "", ""],
    },
  ],
];
const TabExample = ({ content }) => {
  return (
    <div>
      <Flex direction="row" justifyContent="center" my={"40px"}>
        <Box>
          <Project content={content} />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <IconButton
            fontSize="20px"
            mt="50px"
            ml="30px" // Adjust margin-left to move the icon to the right
            backgroundColor="#ffffff"
            icon={<FaChevronLeft />} // Change to FaChevronRight icon
          />
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Tabs position="relative" variant="unstyled" >
          <TabList justifyContent="center" alignItems="center" h={'100px'}>
            <Flex direction={{ md: "row" }} h="45px">
              {subTab.map((content, index) => (
                <>
                  <Tab>
                    <Text
                      display={{ base: "none", md: "flex" }}
                      fontWeight="500"
                      fontSize="20px"
                      w={index == 2 ? "200px" : ""}
                    >
                      {content.text}
                    </Text>
                    <Box display={{ base: "flex", md: "none" }}>
                      <Image
                        src={content.icon}
                        width="50px"
                        height={{ md: "50px" }}
                      />
                    </Box>
                  </Tab>
                  <Image
                    display={index == 2 ? "none" : "block"}
                    src="/Line 342.svg"
                    ml="8px"
                    width="56px"
                    height="40px"
                  />
                </>
              ))}
            </Flex>
            <TabIndicator
            mt="82.5px"
            height="3px"
            bg="#721B0F"
            borderRadius="1px"
          />
          </TabList>
          <TabPanels  maxH={{md:"600px"}}overflow={{md:"auto"}}> 
            {subTabPanelsDeatils.map((subItem, index) => (
              <TabPanel>
                <Box mt="20px" display={{ md: "none" }} fontFamily='FedraSansStdMedium' fontSize={'18px'}>
                  {subTab[index].text}
                </Box>
                {/* isha grouthvam */}
                {subItem.map((item, index) => (
                  <Box
                    backgroundColor="#F5F0E5"
                    p={{ base: "0px", md: "50px" }}
                    mt={"40px"}
                    w={{lg:'972px'}}
                  >
                    <Flex direction={{ base: "column", md: "row" }}>
                      <VStack>
                        <Image src={item.imgUrl} />
                        <Flex direction="row" justifyContent='space-between' my={"20px"} w={'100%'}>
                          {item.icons.map((itemIcon, index) => (
                            <Box>
                              <Image src={itemIcon} />
                            </Box>
                          ))}
                        </Flex>
                      </VStack>
                      <VStack>
                        <Box
                          pl={{ md: "62px" }}
                          textAlign={"left"}
                          p={{ base: "0px 44px 38px 27px", md: "" }}
                        >
                          <Text
                            fontFamily="FedraSansStdMedium"
                            fontWeight="bold"
                            fontSize="25px"
                            w={{ md: "400px" }}
                            pt="15px"
                          >
                            {item.title}
                          </Text>
                          <Text
                            fontFamily="FedraSansStd"
                            w={{ md: "400px" }}
                            pt="10px"
                          >
                            {item.description}
                          </Text>
                          <Text
                            fontFamily="FedraSansStdMedium"
                            fontWeight="500"
                            pt="10px"
                          >
                            {item.impact}
                          </Text>
                          <UnorderedList
                            // w={{md:"300px"}}
                            fontSize="16px"
                            pt="10px"
                            pb="15px"
                            styleType="disc"
                          >
                            {item.impactDescription.map((itemImpact, index) => (
                              <ListItem listStyleType="disc">
                                {itemImpact}
                              </ListItem>
                            ))}
                          </UnorderedList>
                          <Button
                            bgColor="#BB3E03"
                            color="#fff"
                            fontSize="20px"
                            fontWeight="600"
                            fontFamily="FedraSansStd"
                            py="6"
                            px="5"
                            mt="20px"
                            _hover={{ bg: "blue" }}
                            width="180px"
                          >
                            {item.buttonText}
                          </Button>
                        </Box>
                      </VStack>
                    </Flex>
                  </Box>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
};

export default TabExample;
