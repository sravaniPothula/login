import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center bg-dark text-dark">  <br/>
        <h2 className="bg-danger text-success">Hello Welcome to Profile screen </h2> <br />
        {user && user.email}
        <br />
        <h2>About Me</h2> <br/> 
        <p>I'm Sravani Pothulapally and i live in hyderabad. I completed my graduation from CVR college of engineering in Information Technology . I had done my intership at virtusa and also worked as a full time associate engineer at virtusa polaris . Presently am a full stack development trainee with mern specialization at nxtwave disruptive technologies. </p>
        <br/>
        <a
          href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Sravani_2023-03-20-190035.pdf"
          target="blank"
        >
          Resume
        </a>

        <br />
        <a
          href="www.linkedin.com/in/sravani-pothula"
          target="blank"
        >
          LinkedIn
        </a>

      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;