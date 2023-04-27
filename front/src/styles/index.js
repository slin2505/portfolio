import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: "quaternary",
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "tertiary",
            },
          },
        },
      },
    },
  },
  fonts: { body: "Kantumruy Pro" },
  colors: {
    primary: "#222831",
    secondary: "#393E46",
    tertiary: "#00ADB5",
    quaternary: "#EEEEEE",
  },
});

export default theme;
