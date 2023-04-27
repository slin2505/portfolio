import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { MotionBox } from "./Motion";
import HeroHeader from "./HeroHeader";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Image } from "@chakra-ui/image";

import typescript from "programming-languages-logos/src/typescript/typescript.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import c from "programming-languages-logos/src/c/c.svg";
import css from "programming-languages-logos/src/css/css.svg";
import html from "programming-languages-logos/src/html/html.svg";
import php from "programming-languages-logos/src/php/php.svg";
import python from "programming-languages-logos/src/python/python.svg";
import go from "programming-languages-logos/src/go/go.svg";
import node from "../assets/node-js.svg";
import docker from "../assets/docker.svg";
import git from "../assets/git.svg";
import mysql from "../assets/mysql.svg";
import react from "../assets/react.svg";
import github from "../assets/github.svg";
import mongodb from "../assets/mongodb.svg";

const Skills = () => {
  const languages = [
    { name: "html", url: html },
    { name: "css", url: css },
    { name: "javascript", url: javascript },
    { name: "typescript", url: typescript },
    { name: "php", url: php },
    { name: "python", url: python },
    { name: "c", url: c },
    { name: "go", url: go },
  ];

  const libsAndTools = [
    { name: "node", url: node },
    { name: "docker", url: docker },
    { name: "git", url: git },
    { name: "github", url: github },
    { name: "mysql", url: mysql },
    { name: "mongodb", url: mongodb },
    { name: "react", url: react },
  ];

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
            <Text as="h3">Skills</Text>
          </HeroHeader>
        </MotionBox>
      </Box>

      <Box as="article" mb={5}>
        <Text>
          As a developer, I am constantly learning and expanding my skillset to
          stay ahead of the curve. Here are some of the technologies and tools
          that I have experience with:
        </Text>
      </Box>

      <Flex as="article" direction={["column", "column", "row"]}>
        <Tabs defaultIndex={0} variant="enclosed">
          <TabList>
            <Tab>Programming Language</Tab>
            <Tab>Libs & Tools</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center">
                {languages.map((lang) => (
                  <Image
                    m={2}
                    width={100}
                    src={lang.url}
                    alt={`${lang.name}-logo`}
                    key={lang.name}
                  />
                ))}
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center">
                {libsAndTools.map((lang) => (
                  <Image
                    m={2}
                    width={100}
                    src={lang.url}
                    alt={`${lang.name}-logo`}
                    key={lang.name}
                  />
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
};

export default Skills;
