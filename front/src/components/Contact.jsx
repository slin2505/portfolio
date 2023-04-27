import { Button, IconButton } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { FaChevronUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Textarea } from "@chakra-ui/textarea";
import { MotionBox } from "./Motion";
import HeroHeader from "./HeroHeader";
import { HashLink } from "react-router-hash-link";

const Contact = () => {
  return (
    <Container color="white" maxW="5xl" p={{ base: 5, md: 12 }}>
      <Flex>
        <Box
          color="white"
          border="1px"
          borderColor="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box as="header" position="relative">
                    <MotionBox
                      whileHover={{ translateY: -5 }}
                      width="max-content"
                    >
                      <HeroHeader
                        underlineColor="tertiary"
                        mt={0}
                        cursor="pointer"
                        width="max-content"
                      >
                        <Text as="h3">Contact</Text>
                      </HeroHeader>
                    </MotionBox>
                  </Box>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                    Fill up the form below to contact me !
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        as="a"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="outline"
                        color="tertiary"
                        _hover={{ border: "2px solid" }}
                        leftIcon={<MdEmail color="white" size="20px" />}
                        href="mailto:slin2505@gmail.com"
                        target="_blank"
                        referrerpolicy="no-referrer"
                      >
                        slin2505@gmail.com
                      </Button>
                      <Button
                        as="a"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="tertiary"
                        _hover={{ border: "2px solid  " }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                        href="https://www.linkedin.com/in/steven-lin-293997231/"
                        target="_blank"
                        referrerpolicy="no-referrer"
                      >
                        Paris, France
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "tertiary" }}
                      icon={<FaGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "tertiary" }}
                      icon={<FaLinkedin size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack as="form" spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="mail">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="tertiary"
                          color="white"
                          _hover={{
                            bg: "cyan.600",
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>

      <Center>
        <Button
          as={HashLink}
          variant="outline"
          size="lg"
          colorScheme="teal"
          color="tertiary"
          width={{ sm: "100%", lg: "30%" }}
          rightIcon={<FaChevronUp />}
          mt={6}
          to="#"
          smooth
        >
          Go back to the top
        </Button>
      </Center>
    </Container>
  );
};

export default Contact;
