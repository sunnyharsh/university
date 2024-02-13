import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import adopen from "../assets/images/ad-open.png";
import "../App.css";
const Introduction = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item xs={10} sm={9} md={6}>
        <Grid>
          <Typography color="primary" className="firstHeading">
            We Help in to get modern education for your better future
          </Typography>
          <Typography
            variant="h4"
            color="secondary"
            className="secondHeading"
            style={{ marginBottom: "20px" }}
          >
            We "website url come here" are premium direct college admission
            consultants with 15 years of experience in the field of education,
            we are located in Bangalore, Karnataka, Chennai. We provide career
            guidance as well as counseling and also assist the candidate in Spot
            Admission Guidance.
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={6} sm={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{
                  marginTop: "20px",
                  width: "100%",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Apply Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} sm={9} md={6}>
        <img src={adopen} alt="" width="100%" />
        <Grid style={{ position: "relative" }}>
          <Typography color="primary" className="number">
            XXXXXXXXXXX
          </Typography>
        </Grid>
      </Grid>

      <style jsx="true">{``}</style>
    </Grid>
  );
};

export default Introduction;
