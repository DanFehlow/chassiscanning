import { Box, Typography } from "@mui/material";
import { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <Box
        sx={{
          overflowX: "hidden",
          height: "10rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "20px",
            marginBottom: "1rem",
          }}
        >
          Algumas Associadas
        </Typography>
        <Slider {...settings}>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2021/06/AUDI.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2020/01/bmw-1-1.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2020/01/FORD.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2021/09/novotoyota.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2020/10/vw.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2020/01/MERCEDES.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2020/01/HONDA.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2021/06/hyundai-1.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2021/06/jaguar.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2021/09/VOLVO.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2020/01/CAOA.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
          <div>
            <img
              src="https://k8t3b3j9.rocketcdn.me/site/wp-content/uploads/2021/06/renault.jpg.webp"
              width="100rem"
              style={{
                borderRadius: "3rem",
              }}
            />
          </div>
        </Slider>
      </Box>
    );
  }
}
