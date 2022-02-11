import React, { useState } from "react";
import { Button, Container, Grid, Slider } from "@mui/material";
import banner_img from "../../img/bannerMan.png";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const Banner = () => {
  const [num, setNumber] = useState({});
  const handleNumber = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newNumber = { ...num };
    newNumber[field] = value;
    setNumber(newNumber);
  };

  return (
    <Container className="banner-container">
      <Box>
        <Grid container>
          <Grid item md={6} className="banner_left_side">
            <h1>
              The Developer <br /> shop in your Hub
            </h1>
            <p>
              DevWear prints a huge variety of custom clothing like T-shirts,
              hoodies and more, Your order is handled daily with a lot of love
              from BANGLADESH and delive#E67100 worldwide!
            </p>
            <Button variant="contained">
              <i className="fab fa-accessible-icon"></i>
              Shop Now
            </Button>
          </Grid>

          <Grid
            item
            md={6}
            className="banner-right-side"
            sx={{ border: "2px solid green", position: "relative" }}
          >
            <img src={banner_img?.src} className="banner_img" alt="" />
            <Paper
              sx={{
                width: "240px",
                height: "340px",
                position: "absolute",
                top: "70px",
                left: "110px",
                borderRadius: "30px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <FolderIcon
                sx={{ color: "#8743FF", width: "30px", zIndex: -1 }}
              />
              <h3 style={{ color: "black" }}> File Uploading ...</h3>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <InsertDriveFileOutlinedIcon
                  sx={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h4>design.psd </h4>
                  <Slider
                    name="first"
                    sx={{ color: "#4136F1 " }}
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleNumber}
                  />
                </div>
                <span> {num.first === 0 || num.first ? num.first : 70}% </span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <InsertDriveFileOutlinedIcon
                  sx={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h4>resume.docs </h4>
                  <Slider
                    name="second"
                    sx={{ color: "#4136F1 " }}
                    size="small"
                    defaultValue={32}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleNumber}
                  />
                </div>
                <span>{num.second === 0 || num.second ? num.second : 32}%</span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <InsertDriveFileOutlinedIcon
                  sx={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h4>message.docs </h4>
                  <Slider
                    name="third"
                    sx={{ color: "#4136F1 " }}
                    size="small"
                    defaultValue={21}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleNumber}
                  />
                </div>
                <span> {num.third === 0 || num.third ? num.third : 21}% </span>
              </Box>
            </Paper>
            <Paper
              style={{
                width: "290px",
                height: "90px",
                position: "absolute",
                bottom: "-220px",
                left: "200px",
                borderRadius: "24px",
                padding: "15px 0px",
                zIndex: 9999,
                color: "black",
              }}
            >
              <Grid container>
                <Grid item md={6}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <h1> 4.4</h1>
                      <span>32 reviews</span>
                    </div>
                    <div>
                      <StarOutlinedIcon
                        sx={{
                          fontSize: "26px",
                          color: "#E67100",
                          marginTop: "12px",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div style={{ padding: "0 9px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span> 5 </span>
                      <StarOutlinedIcon
                        sx={{
                          fontSize: "12px",
                          color: "#E67100",
                          margin: "2px",
                        }}
                      />
                      <hr
                        style={{
                          width: "100px",
                          border: "2px solid blue",
                          borderRadius: "5px",
                          marginRight: "auto",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span> 4 </span>
                      <StarOutlinedIcon
                        sx={{
                          fontSize: "12px",
                          color: "#E67100",
                          margin: "2px",
                        }}
                      />
                      <hr
                        style={{
                          width: "80px",
                          border: "2px solid blue",
                          borderRadius: "5px",
                          marginRight: "auto",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span> 3 </span>
                      <StarOutlinedIcon
                        sx={{
                          fontSize: "12px",
                          color: "#E67100",
                          margin: "2px",
                        }}
                      />
                      <hr
                        style={{
                          width: "60px",
                          border: "2px solid blue",
                          borderRadius: "5px",
                          marginRight: "auto",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span> 2 </span>
                      <StarOutlinedIcon
                        sx={{
                          fontSize: "12px",
                          color: "#E67100",
                          margin: "2px",
                        }}
                      />
                      <hr
                        style={{
                          width: "40px",
                          border: "2px solid blue",
                          borderRadius: "5px",
                          marginRight: "auto",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span> 1 </span>
                      <StarOutlinedIcon
                        sx={{
                          fontSize: "12px",
                          color: "#E67100",
                          margin: "2px",
                        }}
                      />
                      <hr
                        style={{
                          width: "20px",
                          border: "2px solid blue",
                          borderRadius: "5px",
                          marginRight: "auto",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
