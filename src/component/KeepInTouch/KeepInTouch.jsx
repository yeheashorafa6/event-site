import "./KeepInTouch.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState } from "react";



function KeepInTouch() {
    const [inputvalue, setInputValue] = useState({
        name: "",
        email: "",
        message : ""
      });

  return (
    <section className="keepInTouch-section section-y-margin" id="contact">
      <div className="container">
        <div className="row w-100 d-flex justify-content-evenly">
          <div className="col-lg-6 col-12">
            <div className="keepInTouch-content mt-5">
                <h1 className="title">New <span>Event</span></h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae vitae eaque reprehenderit quo officia praesentium
                laborum dolor placeat impedit non voluptate nobis perferendis unde
                ex voluptatem, a doloribus! Obcaecati, impedit?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                laudantium, ut magnam fuga, harum assumenda voluptatem, esse quam
                adipisci laborum suscipit ullam quaerat repellat sapiente veniam
                id voluptatibus officiis iste.
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
                magni, facere modi a praesentium? Hic eligendi at quas impedit
                eum, voluptate magnam officiis enim iusto quasi, quisquam vitae
                incidunt!
                </p>
                <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                style={{background : "#F05260"}}
              >
                Download Now
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            
            <Box
              className="mt-5 pe-5"
              component="form"
              sx={{
                "& > :not(style)": { m: 1},
              }}
              noValidate
              autoComplete="off"
              style={{background : "white" , padding : "20px" , borderRadius : "10px"}}
            >
              <div className="form-title my-4">
                <h1>Keep In <span>Touch</span></h1>
              </div>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                color="secondary"
                className="form-input"
                onChange={(event) => {
                  setInputValue({
                    ...inputvalue,
                    name: event.target.value,
                  });
                }}
                value={inputvalue.name}

              />
              <TextField
              fullWidth
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                color="secondary"
                className="form-input"
                onChange={(event) => {
                  setInputValue({ ...inputvalue, email: event.target.value });
                }}
                value={inputvalue.email}
              />
              <TextField
              fullWidth
                id="outlined-multiline-static"
                label="Meesage"
                variant="outlined"
                color="secondary"
                className="form-input"
                multiline
                rows={4}
                onChange={(event) => {
                  setInputValue({
                    ...inputvalue,
                    message: event.target.value,
                  });
                }}
                value={inputvalue.message}
              />
              <Button variant="contained" endIcon={<SendIcon />} style={{background : "black"}}>
              Send
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeepInTouch;
