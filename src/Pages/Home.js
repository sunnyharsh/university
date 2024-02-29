import React from "react";
import Introduction from "../Components/Introduction";
import Wrapper from "../Components/Wrapper";
import { Grid } from "@mui/material";
import Help from "../Components/Help";
import UserForm from "../Components/UserForm";
import WhoWeAre from "../Components/WhoWeAre";
import CountingCards from "../Components/CountingCards";
import AdmissionService from "../Components/AdmissionService";

const Home = () => {
  // const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div style={{ height: "100vh" }}>
      <Wrapper isMargin={false}>
        <Grid>
          <Introduction />
        </Grid>
      </Wrapper>
      <Wrapper isMargin={false}>
        <Help />
      </Wrapper>
      <Wrapper isMargin={false}>
        <UserForm />
      </Wrapper>
      <Wrapper isMargin={false}>
        <WhoWeAre />
      </Wrapper>
      <Wrapper isMargin={false}>
        <CountingCards />
      </Wrapper>
      <Wrapper isMargin={false}>
        <AdmissionService />
      </Wrapper>
      <Wrapper></Wrapper>
    </div>
  );
};

export default Home;
