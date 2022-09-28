import React, { useEffect, useRef } from "react";
import Bar from "./Bar";
import lottie from "lottie-web";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/lottie.json"),
    });
  }, []);

  return (
    <div>
      <Bar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "80vh",
          margin: "auto 5em",
        }}
      >
        <div
          className="container"
          ref={container}
          style={{ width: "35rem", marginLeft: "3em" }}
        />
        <div style={{ width: "35%", marginRight: "2em" }}>
          <h1>
            Mieux connaître <br /> sa scolarité
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore deserunt mollit anim id est
            laborum.
          </p>
          <Button
            variant="contained"
            style={{ width: "10em", height: "4em" }}
            onClick={() => navigate("/signup")}
          >
            Rejoindre !
          </Button>
        </div>
      </div>
    </div>
  );
}
