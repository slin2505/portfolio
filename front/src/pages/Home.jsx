import { Box, Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <Box as="main">
      <Flex as="section" minH={"80vh"} align={"center"} justify={"center"}>
        <Hero />
      </Flex>

      <Flex
        as="section"
        id="aboutMe"
        minH={"80vh"}
        align={"center"}
        justify={"center"}
      >
        <About />
      </Flex>

      <Flex
        as="section"
        id="skills"
        minH={"80vh"}
        align={"center"}
        justify={"center"}
      >
        <Skills />
      </Flex>

      <Flex
        as="section"
        id="contact"
        minH={"80vh"}
        align={"center"}
        justify={"center"}
      >
        <Projects />
      </Flex>

      <Flex
        as="section"
        id="projects"
        minH={"80vh"}
        align={"center"}
        justify={"center"}
      >
        <Contact />
      </Flex>
    </Box>
  );
};

export default Home;
