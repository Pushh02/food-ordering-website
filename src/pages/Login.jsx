import { Box, Button, Container, Typography } from "@mui/material";
import "../index.css";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleUser = (e) => {
    e.preventDefault();
    const user1 = user;
    console.log(user1);
    setUser({ username: "", password: "" });
  };
  const handleUsename = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Box className="bgAdd">
      <Container sx={{ position: "relative" }}>
        <Box
          sx={{
            width: { xs: "100vw", lg: "35vw", xl: "28vw" },
            height: "80vh",
            position: "absolute",
            top: "63px",
            left: { xs: 0, lg: "33%", xl: "20%" },
            backgroundColor: "rgb(137 113 76 / 45%)",
            borderRadius: 4,
          }}
        >
          <form onSubmit={handleUser}>
            <Box sx={{ mt: "11vh", ml: 9 }}>
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  marginY={4}
                  sx={{ textAlign: "center", ml: -9 }}
                >
                  Login
                </Typography>
                <Typography variant="body" component="p">
                  Email Id
                </Typography>
                <input
                  className="loginForm"
                  type="email"
                  value={user.username}
                  name="username"
                  onChange={handleUsename}
                  required
                />
                <Typography variant="body" component="p" sx={{ mt: 5 }}>
                  Password
                </Typography>
                <input
                  className="loginForm"
                  type="password"
                  value={user.password}
                  name="password"
                  onChange={handlePassword}
                  required
                />
              </Box>
              <Box
                sx={{
                  display:"flex",
                  mt: { lg: 2, xl: 4 },
                  alignItems: "center",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 16 }, ml:0}}
                  />
                </FormGroup>
                <Typography component="span" ml={-3} fontSize={14}>
                  Remember Me
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems:'center' }}>
                  <Link style={{ textDecoration: "none" }}>
                    <Typography component="p" variant="body" m={1}>
                      Forgot password?
                    </Typography>
                  </Link>
                  <Link style={{ textDecoration: "none" }}>
                    <Typography component="p" variant="body" m={1}>
                      Create an account?
                    </Typography>
                  </Link>
                </Box>
                <input
                  type="submit"
                  className="submitBtn"
                  // variant="containted"
                  // sx={{
                  //   backgroundColor: "#ff8f00",
                  //   ":hover": { backgroundColor: "#e68100" },
                  //   m: 1,
                  //   mt: 3,
                  //   width: 120,
                  // }}
                  // disableRipple
                />
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
