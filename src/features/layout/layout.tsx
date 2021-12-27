import { Box, Container } from "@material-ui/core";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./footer";
import { Header } from "./header";

interface propsType {
  title: string;
}

export const LayoutComponent: FC<propsType> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title> {title} </title>
      </Helmet>
      <Box>
        <Header title={title} />
        <Container maxWidth="md">
          <div style={{ marginTop: "2rem" }}> {children} </div>
        </Container>
        {/* <Footer /> */}
      </Box>
    </>
  );
};
