import { Grid, Typography } from "@mui/material";
import React from "react";
import CollegeCard from "./CollegeCard";
import chennaiCollege from "../assets/images/chennai-college.png";
import consulatant from "../assets/images/consulatnt.png";
import fast from "../assets/images/fast.png";
import "../App.css";

const collegeArr = [
  {
    heading: "Best College in Chennai",
    desc: "Expert guidance for college selection. Personalized assistance for admission applications.",
    img: chennaiCollege,
  },
  {
    heading: "Consultation",
    desc: "Expert advice, guidance, problem-solving, collaboration, assessment, personalized solutions.",
    img: consulatant,
  },
  {
    heading: "Fast Admission",
    desc: "Efficient, streamlined, accelerated, prompt, hassle-free, expedited, swift.",
    img: fast,
  },
];

const Help = () => {
  return (
    <>
      <Grid conatiner justifyContent="center" style={{ marginBottom: "50px" }}>
        <Grid item xs={12} textAlign="center">
          <Typography style={{ color: "#e98aa0", fontWeight: "bold" }}>
            WHAT WE DO
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography color="primary" className="firstHeading">
            We help to search in
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" className="secondHeading">
          <Typography className="secondHeading" color="secondary">
            Best Colleges, Consultation, and Fast Admission.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        {collegeArr.map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <CollegeCard
              key={index}
              heading={item.heading}
              desc={item.desc}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
      <style jsx>{``}</style>
    </>
  );
};

export default Help;
