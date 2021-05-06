import { Box } from "@chakra-ui/layout";
import Head  from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <title>Ki-analysix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Page;
