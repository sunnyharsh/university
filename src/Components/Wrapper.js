import { Box, Grid } from "@mui/material";
import React from "react";

function Wrapper({ children, isMargin }) {
  return (
    <Box style={{ width: "100%" }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={11}
            sm={11}
            md={11}
            xl={11}
            className="wrapperContainer"
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
      <style jsx>{`
        .wrapperContainer {
          margin-top: 75px;
        }
        @media (max-width: 900px) {
          .wrapperContainer {
            margin-top: 75px;
          }
        }
      `}</style>
    </Box>
  );
}

export default Wrapper;
