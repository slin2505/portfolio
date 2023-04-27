import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink";
import Logo from "../../assets/logo-icon.png";
import { useContext } from "react";
import { uidContext } from "../../../utils/uidContext";
import { Link } from "react-router-dom";

// We use a const Links here but usually in projects we make another file for routing properties

const links = ["Home", "Comment"];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { uid } = useContext(uidContext);

  return (
    <Box as="header" bg="secondary" px={4} py={2}>
      <Flex
        as="navbar"
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={"center"}>
          <Image src={Logo} alt="site-logo" width={90} />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link} link={link} />
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={"center"}>
          {uid === "no token" ? (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button
                as={Link}
                fontSize={"m"}
                fontWeight={400}
                color="white"
                variant={"link"}
                to="signin"
              >
                Sign In
              </Button>
              <Button
                as={Link}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"m"}
                fontWeight={600}
                color="white"
                bg={"tertiary"}
                to="signup"
                _hover={{
                  bg: "cyan.600",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                aria-label="account-button"
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} alt="avatar" />
              </MenuButton>
              <MenuList>
                <MenuItem>Account</MenuItem>
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink key={link} link={link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
