import { Link as ReactLink } from "react-router-dom";
import { Link } from "@chakra-ui/layout";
import PropTypes from "prop-types";

const NavLink = ({ link }) => {
  console.log(link);
  return (
    <Link
      as={ReactLink}
      px={2}
      py={1}
      rounded={"md"}
      color="white"
      sx={{ fontWeight: "bold" }}
      _hover={{
        textDecoration: "none",
        bg: "tertiary",
      }}
      to={link}
    >
      {link}
    </Link>
  );
};

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default NavLink;
