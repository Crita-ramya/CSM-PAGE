// import logo from './logo.svg';
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Quote from "./components/Quote";
import Banner from "./components/Banner";
import Project from "./components/Project";
import MainBox from "./components/LeftSlider";
import TabExample from "./components/Environment";
import ImageCard from "./components/ImageCard";
import Content from "./components/csr.json";
import Anukampa from "./components/Anukampa";
import UnitedNation from "./components/UnitedNation";
import PastPartner from "./components/PastPartner";
import OtherWays from "./components/OtherWays";
import SocialMedia from "./components/SocialMedia";
import StickyButton from "./components/StickyButton";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Banner />
        <StickyButton />
        <Quote />
        <MainBox />
        {/* <Project  content={Content.titleImage[0]}/> */}
        <TabExample content={Content.titleImage[0]} />
        {/* <Project  content={Content.titleImage[0]}/> */}
        <Project content={Content.titleImage[1]} />
        <ImageCard content={Content.imageCardWithTitle} />
        <Anukampa />
        <UnitedNation data={Content.titleImage[2]} />
        <Project content={Content.titleImage[3]} />
        <PastPartner />
        <OtherWays />
        <SocialMedia />
      </div>
    </ChakraProvider>
  );
}

export default App;
