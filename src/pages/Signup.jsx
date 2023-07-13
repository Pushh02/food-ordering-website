import { Box, Button, Container, Typography } from "@mui/material";
import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleUser = (e) => {
    e.preventDefault();
    const user1 = user;
    console.log(user1);
    setUser({
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
    });
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
            <Box sx={{ mt: "7vh", ml: { sm: 7, lg: 5, xl: 10 } }}>
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  marginY={4}
                  sx={{ textAlign: "center", ml: { lg: -5, xl: -10 } }}
                >
                  Sign up
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography variant="body" component="p" ml={0.5}>
                      First Name
                    </Typography>
                    <input
                      className="loginForm"
                      style={{ width: 150 }}
                      type="text"
                      value={user.fname}
                      onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                      }
                      name="fname"
                      required
                    />
                  </Box>
                  <Box ml={2}>
                    <Typography variant="body" component="p" ml={0.5}>
                      Last Name
                    </Typography>
                    <input
                      className="loginForm"
                      style={{ width: 150 }}
                      type="text"
                      value={user.lname}
                      onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.value })
                      }
                      name="lname"
                      required
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="body" component="p" ml={0.5} mt={1.5}>
                    Email Id
                  </Typography>
                  <input
                    className="loginForm"
                    style={{ width: 250 }}
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    name="email"
                    required
                  />
                  <Typography variant="body" component="p" ml={0.5} mt={1.5}>
                    Create Password
                  </Typography>
                  <input
                    className="loginForm"
                    style={{ width: 200 }}
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    name="password"
                    required
                  />
                  <Typography variant="body" component="p" ml={0.5} mt={1.5}>
                    Confirm Password
                  </Typography>
                  <input
                    className="loginForm"
                    style={{ width: 200 }}
                    type="password"
                    value={user.cpassword}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    name="cpassword"
                    required
                  />
                </Box>
              </Box>
              <Box>
                <Link style={{ textDecoration: "none" }}>
                  <Typography component="p" variant="body" ml={1} mt={1.5}>
                    Have an account?
                  </Typography>
                </Link>
                <input
                  type="submit"
                  className="submitBtn"
                  // variant="containted"
                  // component="submit"
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

export default Signup;
