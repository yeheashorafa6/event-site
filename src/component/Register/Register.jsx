import "./Register.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Title from "../Title/Title";
import { useState } from "react";

function Register() {

  const [inputvalue , setInputValue] = useState({
    firstName: "",
    lastname : "",
    phoneNumber : "",
    email : ""
  })
  return (
    <section className="register-section section-y-margin" id="register">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-7 col-12">
            <div className="register-content">
              <Title
                className="title-start"
                title={"Register"}
                sub={"Here"}
                parag={
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut repellendus eligendi doloribus nam corrupti ab,veritatis ducimus,"
                }
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem sit repellendus id labore tempora voluptatum sint
                accusamus aut ipsam aperiam, facere fugit saepe sequi, optio
                iusto vitae laudantium aliquid. Maxime!
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <Box
            className="mt-5"
              component="form"
              sx={{
                "& > :not(style)": { m: 1,  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                id="first-name"
                label="Fist Name"
                variant="outlined"
                color="secondary"
                className="form-input"
                onChange={(event) => {setInputValue({ ...inputvalue, firstName: event.target.value })}}
                value={inputvalue.firstName}
              />
              <TextField
                fullWidth
                id="last-name"
                label="Last Name"
                variant="outlined"
                color="secondary"
                className="form-input"
                onChange={(event) => {setInputValue({ ...inputvalue, lastname: event.target.value })}}
                value={inputvalue.lastname}
              />
              <TextField
                fullWidth
                id="phone-number"
                type="number"
                label="Phone Number"
                variant="outlined"
                color="secondary"
                className="form-input"
                onChange={(event) => {setInputValue({ ...inputvalue, phoneNumber: event.target.value })}}
                value={inputvalue.phoneNumber}
              />
              <TextField
                fullWidth
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                color="secondary"
                className="form-input"
                onChange={(event) => {setInputValue({ ...inputvalue, email: event.target.value })}}
                value={inputvalue.email}
              />
              <Button variant="contained" style={{background : "#F05260" , fontSize : "18px"}} className="mt-3">Register</Button>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
