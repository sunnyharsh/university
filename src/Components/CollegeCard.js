import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CollegeCard({ heading, desc, img }) {
  return (
    <Card style={{ minHeight: 300, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom color="primary" className="cardTitle">
            {heading}
          </Typography>
          <Typography variant="body2" color="secondary" className="cardDesc">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <style jsx>{`
        .cardTitle {
          font-size: 1.2rem !important;
          font-weight: 700;
        }
        .cardDesc {
          margin-top: 20px;
          font-size: 0.8rem;
        }
      `}</style>
    </Card>
  );
}
