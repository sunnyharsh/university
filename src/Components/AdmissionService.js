import { Grid, Typography } from "@mui/material";
import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import MyCard from "./Mycard";
const data = [
  {
    title: "Direct Admission",
    description:
      "University offers direct admission to students with exemplary talent and merits.",
  },
  {
    title: "Career Councelling",
    description:
      "Career Counselling is a process that focuses on helping one understand one’s own self, as well as work trends, so that one can take an informed decision about career and education.",
  },
  {
    title: "Career Guidance",
    description:
      "More often than not, people find themselves in a state of dilemma before making important decisions in their lives. Generally, everyone seeks advice from parents and friends before deciding on what to wear.",
  },
  {
    title: "College / University Selection",
    description:
      "Study Free Consultancy has more than 700 Universities database from around the world. The country of destination is selected according to the student’s preferred course availability, financial capability, University Entry Requirements, and location.",
  },
];
const AdmissionService = () => {
  return (
    //   <Grid container justifyContent="space-between" spacing={3}>
    //     {data?.map((obj, index) => (
    //       <Grid item xs={12} sm={6} md={3} key={index}>
    //         <Grid className="cardConatiner">
    //           <Grid>
    //             <ForumIcon
    //               style={{ width: "90px", height: "90px", color: "#49488f" }}
    //             />
    //           </Grid>
    //           <Grid>
    //             <Typography
    //               style={{
    //                 fontSize: "1.5rem",
    //                 fontWeight: "bold",
    //                 lineHeight: 1.5,
    //               }}
    //             >
    //               {obj.title}
    //             </Typography>
    //           </Grid>
    //           <Grid>
    //             <Typography
    //               style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 }}
    //             >
    //               {obj.description}
    //             </Typography>
    //           </Grid>
    //           <Grid>
    //             <Typography> Chat Now</Typography>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     ))}
    //     <style jsx="true">{`
    //       .cardConatiner {
    //         background: radial-gradient(
    //           circle,
    //           rgba(0, 36, 15, 0.06628588935574231) 0%,
    //           rgb(139 139 139 / 55%) 100%,
    //           rgb(219 227 229) 100%
    //         );
    //         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    //         height: 450px;
    //         border-radius: 10px;
    //         display: flex;
    //         // justify-content: space-between;
    //         align-items: center;
    //         flex-direction: column;
    //         word-break: break-word;
    //       }
    //       .cardConatiner:hover {
    //         background-color: #e0dddd;
    //       }
    //     `}</style>
    //     ;
    //   </Grid>
    <Grid container justifyContent="space-between" spacing={3}>
      {data?.map((obj, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <MyCard obj={obj} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdmissionService;
