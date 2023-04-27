import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const HeroHeader = ({ children, underlineColor, ...props }) => (
  <Box
    as="h1"
    mt={10}
    mb={6}
    fontSize="3xl"
    lineHeight="shorter"
    fontWeight="bold"
    {...props}
    textAlign="left"
  >
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
  </Box>
);

HeroHeader.propTypes = {
  children: PropTypes.string.isRequired,
  underlineColor: PropTypes.string.isRequired,
};

const UnderlinedText = ({ children, color, h }) => (
  <Box as="span" display="inline-block" position="relative">
    {children}
    <Box
      as="span"
      display="block"
      position="absolute"
      bg={color || "gray.200"}
      w="100%"
      h={h || "1px"}
      bottom={-2}
    />
  </Box>
);

UnderlinedText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  h: PropTypes.string,
};

export default HeroHeader;
