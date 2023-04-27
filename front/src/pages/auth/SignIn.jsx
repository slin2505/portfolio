import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useRef } from "react";
import { uidContext } from "../../../utils/uidContext";

const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const { setUid } = useContext(uidContext);

  const handleSignIn = async () => {
    try {
      const user = {
        email: email.current,
        password: password.current,
      };
      const signIn = await axios.post("/user/signin", user);
      if (signIn) {
        Cookies.set("jwt", signIn.data.token);
        const fetchUid = () => {
          axios({
            method: "get",
            url: "jwtuid",
          })
            .then((res) => setUid(res.data))
            .catch((err) => console.log(err));
        };

        fetchUid();
        console.log(signIn.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading as="h1" fontSize={"4xl"}>
            Sign In
          </Heading>
          <Text fontSize={"lg"} color={"white"}>
            and leave a cool comment ✌️
          </Text>
        </Stack>
        <Box rounded={"xl"} bg="white" boxShadow={"lg"} p={8}>
          <Stack as="form" spacing={4} minW="300px">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => (email.current = e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => (password.current = e.target.value)}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                bg={"tertiary"}
                color={"white"}
                size="lg"
                _hover={{
                  bg: "cyan.600",
                }}
                onClick={() => handleSignIn()}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
