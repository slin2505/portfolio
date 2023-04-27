import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";

const SignUp = () => {
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [formResponse, setFormResponse] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      const user = {
        name: name.current,
        email: email.current,
        password: password.current,
      };

      const signUp = await axios.post("user/signup", user);
      console.log(signUp);
      if (signUp.data.msg) {
        onOpen();
        setFormResponse({
          type: "success",
          title: "Success",
          value: signUp.data.msg,
        });

        setTimeout(() => navigate("/signin"), 1500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex as="main" minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={8}>
        <Stack align={"center"}>
          {isVisible && (
            <Alert
              display="flex"
              rounded={"xl"}
              justifyContent="space-between"
              status={formResponse.type}
            >
              <Box display="flex" alignItems="center">
                <AlertIcon />
                <Box>
                  <AlertTitle>{formResponse.title}</AlertTitle>
                  <AlertDescription>{formResponse.value}</AlertDescription>
                </Box>
              </Box>

              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
              />
            </Alert>
          )}
          <Heading as="h1" fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text color="white" fontSize={"lg"}>
            and leave a cool comment ✌️
          </Text>
        </Stack>
        <Box rounded={"xl"} bg="white" boxShadow={"lg"} p={8}>
          <Stack as="form" spacing={4} minW="300px">
            <FormControl id="Name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                onChange={(e) => (name.current = e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => (email.current = e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => (password.current = e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    aria-label="showPassword"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"tertiary"}
                color={"white"}
                _hover={{
                  bg: "cyan.600",
                }}
                onClick={() => handleSignUp()}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link as={ReactLink} color={"tertiary"} to="/signin">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
