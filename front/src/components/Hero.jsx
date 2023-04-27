import { Flex, Avatar, Box, Container, Text, Button } from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "./Motion";
import HeroHeader from "./HeroHeader";
import { HashLink } from "react-router-hash-link";

const ANIMATION_DURATION = 1;

const Hero = () => {
  const color = "tertiary";

  return (
    <Container color="white" maxW="5xl" p={{ base: 5, md: 12 }}>
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          as="figure"
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor={color}
              aria-label="steven-avatar"
            />
          </MotionBox>
        </MotionBox>

        <MotionFlex
          as="article"
          position="relative"
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <HeroHeader
                underlineColor={color}
                mt={0}
                cursor="pointer"
                width="max-content"
              >
                Hey !
              </HeroHeader>
            </MotionBox>
          </Box>
          <Box as="h1" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            {
              <Text as="span" fontWeight="bold">
                Steven Lin
              </Text>
            }
            <Box>
              I&apos;m a Full Stack Developer and i build thing on the web&nbsp;
            </Box>
            <Text as="span" whiteSpace="nowrap">
              from France
            </Text>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my portfolio, where I write about the things I worked on and
            share what I&apos;ve learned. I&apos;d love any feedback on the
            comment section. 😊
          </Box>

          <Button
            as={HashLink}
            variant="outline"
            size="lg"
            colorScheme="teal"
            color="tertiary"
            width={{ sm: "100%", lg: "30%" }}
            mt={6}
            to="#aboutMe"
            smooth
          >
            About me
          </Button>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default Hero;
