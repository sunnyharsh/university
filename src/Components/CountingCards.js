import { Grid, Typography } from "@mui/material";
import React from "react";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";

const cardData = [
  {
    count: 14232,
    title: "Happy Students",
    icon: (
      <TagFacesRoundedIcon
        style={{ color: "#ffac1d", height: "2rem", width: "2rem" }}
      />
    ),
  },
  {
    count: 121,
    title: "Courses",
    icon: (
      <LibraryBooksRoundedIcon
        style={{ color: "#ee6c20", height: "2rem", width: "2rem" }}
      />
    ),
  },
  {
    count: 24,
    title: "Hours of Support",
    icon: (
      <HeadsetMicRoundedIcon
        style={{ color: "#15be56", height: "2rem", width: "2rem" }}
      />
    ),
  },
  {
    count: 105,
    title: "Consultants",
    icon: (
      <PeopleOutlineRoundedIcon
        style={{ color: "#bb0852", height: "2rem", width: "2rem" }}
      />
    ),
  },
];

const CountingCards = () => {
  return (
    <Grid container spacing={3} justifyContent="space-between">
      {cardData.map((data, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Grid className="countCard">
            <Grid>{data.icon}</Grid>
            <Grid>
              <Typography variant="p" color="primary" className="countDigit">
                {data.count}
              </Typography>
              <Typography className="countString">{data.title}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <style jsx="true">{`
        .countCard {
          background-color: #f5f5f5;
          padding: 14px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
          font-size: 30px;
          border-radius: 10px;
        }
        .countDigit {
          text-align: start;
          font-weight: bold;
        }
        .countString {
          text-align: start;
        }
      `}</style>
    </Grid>
  );
};

export default CountingCards;
