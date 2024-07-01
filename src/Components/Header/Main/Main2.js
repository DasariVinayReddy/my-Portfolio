import "./Main.css";
import Vinay from "../../../asstes/person.png";
import reactjs from "./../../../asstes/reactjs.png";
import { motion } from "framer-motion";
import React from "react";
import { ReactTyped } from "react-typed";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const skillsVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};
export const Section = () => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //     setScreenHeight(window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when component unmounts
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []); // Empty dependency array ensures that effect runs only once

  return (
    <div className="container1">
      <div
        className="container3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 "
        id="home"
      >
        <div className="hero">
          <motion.div
            className="hero_welcome"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {" "}
            <b className="hero_title">Welcome To My World</b> <br />
            Hi I'm <b className="vinay_title">Dasari Vinay Reddy</b>
            <br />
            <div className="animated-typing">
              <ReactTyped
                strings={[
                  "I'm a Front-end Developer",
                  "I Love UI/UX Desiger",
                  "DevOps",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              ></ReactTyped>
            </div>
            {/* <b className="vinay_sub">a Developer</b>
            <b className="vinay_sub">,Ui/Ux Designer</b> */}
            {/* <p>Screen Width: {screenWidth}px</p>
            <p>Screen Height: {screenHeight}px</p> */}
          </motion.div>
          <div className="hero_skill">
            <p className="best_skill">Best Skill On </p>
            <motion.div
              className="flex space-x-2 best_skill_icons "
              variants={skillsVariants}
              initial="initial"
              animate="animate"
            >
              <div className="h-[100px] bg-gray-100 rounded-lg shadow-md p-2 m-4 flex flex-col ">
                <div className="text-5xl text-blue-500 mb-4 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z"
                      opacity=".35"
                    ></path>
                    <path
                      fill="#f2f2f2"
                      d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"
                    ></path>
                    <polygon
                      fill="#2b59a1"
                      points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"
                    ></polygon>
                    <path
                      fill="#40396e"
                      d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"
                    ></path>
                    <polygon
                      fill="#2785bd"
                      points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"
                    ></polygon>
                    <polygon
                      fill="#d9eeff"
                      points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"
                    ></polygon>
                    <polygon
                      fill="#d9eeff"
                      points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"
                    ></polygon>
                    <polygon
                      fill="#d9eeff"
                      points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"
                    ></polygon>
                    <path
                      fill="#f2f2f2"
                      d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className=" bg-gray-100 rounded-lg shadow-md p-4 m-4 flex flex-col items-center h-[100px]">
                <div className="text-5xl text-green-500 mb-4">
                  <img src={reactjs} alt="" />
                </div>
              </div>
              <div className=" bg-gray-100 rounded-lg shadow-md p-4 m-4 flex flex-col items-center h-[100px]">
                <div className="text-5xl text-purple-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80"
                    height="80"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#e64a19"
                      d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                    ></path>
                    <path
                      fill="#7c4dff"
                      d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                    ></path>
                    <path
                      fill="#66bb6a"
                      d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                    ></path>
                    <path
                      fill="#ff7043"
                      d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                    ></path>
                    <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="section"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <div className="section__box mt-10">
            <div className="section__image">
              <img src={Vinay} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
