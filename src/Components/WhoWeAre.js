// create a react component called WhoWeAre

import React from "react";
import { Grid, Typography } from "@mui/material";
import img1 from "../assets/images/chennai-college.png";

const WhoWeAre = () => {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} sm={12} md={6}>
        <Grid className="whoWeAreFirstContainer">
          <Grid>
            <Typography
              style={{
                color: "#e98aa0",
                fontWeight: "bold",
                paddingBottom: "1rem",
              }}
            >
              Who We Are
            </Typography>
          </Grid>
          <Grid>
            <Typography
              color="primary"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                wordBreak: "break-word",
                paddingBottom: "1rem",
              }}
            >
              To get the most current and accurate information and other
              Chennai's University/Colleges, including admission procedures,
              courses offered, faculty details, and any recent developments.
            </Typography>
          </Grid>
          <Grid>
            <Typography
              color="secondary"
              style={{
                fontSize: "0.8rem",
                fontWeight: "400",
                wordBreak: "break-word",
                paddingBottom: "1rem",
              }}
            >
              Institute of Science and Technology ( IST) Chennai is one of the
              top colleges in India. It has been ranked as one of the best
              engineering colleges in Tamil Nadu. The placement department of
              IST Chennai plays a vital role in helping students get placed into
              reputed companies. It is known as the Career Centre.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Grid style={{ height: "100%" }}>
          <img
            src={img1}
            alt="college"
            style={{ width: "100%", height: "380px" }}
          />
        </Grid>
      </Grid>
      <style jsx="true">{`
        .whoWeAreFirstContainer {
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          padding: 25px;
          height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 450px) {
          .whoWeAreFirstContainer {
            height: 520px;
          }
        }
      `}</style>
    </Grid>
  );
};
export default WhoWeAre;
