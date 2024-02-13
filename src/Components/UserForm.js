import React from "react";
import {
  Button,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import applyNow from "../assets/images/apply-now.jpg";

const currencies = [
  {
    value: "",
    label: "--Select Course--",
  },
  {
    value: "ENGINEERING",
    label: "ENGINEERING",
  },
  {
    value: "BTMSC",
    label: "MS",
  },
  {
    value: "MD",
    label: "MD",
  },
  {
    value: "BAMS",
    label: "BAMS",
  },
  {
    value: "BHMS",
    label: "BHMS",
  },
  {
    value: "BPT",
    label: "BPT",
  },
  {
    value: "B.VSC",
    label: "B.VSC",
  },
  {
    value: "BUMS",
    label: "BUMS",
  },
  {
    value: "BSMS",
    label: "BSMS",
  },
  {
    value: "AIEEE",
    label: "AIEEE",
  },
  {
    value: "MBBS",
    label: "MBBS",
  },
  {
    value: "VITEEE",
    label: "VITEEE",
  },
];
const useStyles = (theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  },
  textField: {
    // marginBottom: theme.spacing(2),
  },
  submitButton: {
    alignSelf: "flex-end",
  },
});
const fieldProps = [
  { name: "name", label: "User Name", type: "text" },
  { name: "email", label: "Email ID", type: "text" },
  { name: "Phone", label: "Phone Number", type: "text" },
  { name: "msg", label: "Message", type: "text" },
  { name: "msg", label: "Message", type: "select" },
];
function UserForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      justifyContent={"space-between"}
      // style={{ marginBottom: "50px" }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <img
          src={applyNow}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px 0px 0px 10px",
          }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} style={{}}>
        <Grid
          style={{
            padding: "20px",
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "0px 10px 10px 0px",
            height: "100%",
          }}
        >
          <Grid>
            <Typography
              style={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: "1.5rem",
                padding: "0 0 1.5rem 0",
              }}
              color={"primary"}
            >
              Apply Now
            </Typography>
          </Grid>
          {fieldProps.map((field, index) => (
            <Grid key="index" style={{ paddingBottom: "20px" }}>
              {field.type == "text" ? (
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label={field.label}
                  variant="outlined"
                />
              ) : field.type == "select" ? (
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-select-currency"
                  select
                  label="Select course"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                ""
              )}
            </Grid>
          ))}
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              size="large"
              variant="contained"
              color="success"
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Form submitted successfully"
        // action={action}
      />
    </Grid>
  );
}

// export default UserForm;
export default withStyles(useStyles)(UserForm);
