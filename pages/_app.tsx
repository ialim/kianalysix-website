import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      brand: "#EE1D23",
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button", "Badge"],
  })
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
