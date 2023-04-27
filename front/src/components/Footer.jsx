import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="secondary">
      <Stack
        p={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text color="white">© 2023 Steven Lin - All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Button
            colorScheme="blackAlpha"
            bg={"blackAlpha.800"}
            leftIcon={<FaGithub />}
          >
            <Link href="https://github.com/slin2505" isExternal>
              My Github
            </Link>
          </Button>
          <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
            <Link
              href="https://www.linkedin.com/in/steven-lin-293997231/"
              isExternal
            >
              My Linkedin
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
