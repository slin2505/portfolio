import { Image } from "@chakra-ui/image";
import { Container, Flex } from "@chakra-ui/layout";
import errorImage from "../assets/404-illustration.svg";

const NotFound = () => {
  return (
    <Flex as="main" minH={"100vh"} align={"center"} justify={"center"}>
      <Container color="white" maxW="5xl" p={{ base: 5, md: 12 }}>
        <Image src={errorImage} alt="404-illustration" />
      </Container>
    </Flex>
  );
};

export default NotFound;
