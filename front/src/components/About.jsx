import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import HeroHeader from "./HeroHeader";
import { MotionBox } from "./Motion";
import aboutMeImage from "../assets/about-illustration.svg";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <Container maxW="5xl" color={"white"}>
      <Box as="header" position="relative">
        <MotionBox whileHover={{ translateY: -5 }} width="max-content">
          <HeroHeader
            underlineColor="tertiary"
            mt={0}
            cursor="pointer"
            width="max-content"
          >
            <Text as="h3">About me</Text>
          </HeroHeader>
        </MotionBox>
      </Box>
      <Flex direction={["column", "column", "row"]}>
        <Box as="article" p={8} mt={2} shadow="md" borderWidth="1px">
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Steven Lin
          </Text>
          <Text fontSize="lg" color="gray.500" mb={4}>
            Fullstack Developer
          </Text>
          <Text fontSize="md">
            Hi, I&apos;m Steven - a passionate web developer from France. I
            specialize in building dynamic and responsive web applications using
            a variety of programming languages and frameworks, including
            Javascript, Typescript, C, React, Node, mySQL, mongoDB, Docker, and
            Wordpress.
          </Text>
          <Text fontSize="md" mt={4}>
            In 2022, I was fortunate enough to land an internship at a leading
            web3 development company, where I had the opportunity to gain
            practical experience in the field. During my time there, I was
            exposed to a wide range of web & web3 development projects and had
            the opportunity to work with various programming languages and
            frameworks.
          </Text>
        </Box>
        <Image
          ml={{ lg: 4 }}
          src={aboutMeImage}
          height={500}
          alt="about-illustration-js-programming"
        />
      </Flex>
      <Button
        as={HashLink}
        variant="outline"
        size="lg"
        colorScheme="teal"
        color="tertiary"
        width={{ sm: "100%", lg: "30%" }}
        mt={6}
        to="#skills"
        smooth
      >
        Check my Skills
      </Button>
    </Container>
  );
};

export default About;
