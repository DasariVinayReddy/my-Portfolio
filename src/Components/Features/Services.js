import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactjs from "./../../asstes/reactjs.png";
import uiux from "./../../asstes/ui_ux-removebg-preview.png";
import techno from "./../../asstes/techno.png";
import devops from "./../../asstes/devops-1.png";
import figma from "./../../asstes/figma.svg";
import Ai from "./../../asstes/ai-removebg-preview.png";
import "./services.css";

// boxVariant is for animation on scroll
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const Services = () => {
  return (
    <section className="pb-12 pt-20 what">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap what-do ">
          <div className="w-full px-4">
            <div className=" mb-12 max-w-[510px]  lg:mb-20 ">
              <span className="mb-2 block text-lg font-semibold what-features">
                Features
              </span>
              <h2 className="text-5xl what-text">What I Do</h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Front-End Developer"
            details="As a frontend developer in ReactJS,I am well-versed in utilizing popular CSS frameworks such as TailwindCSS etc"
            icon={<img src={reactjs} alt="!" />}
          />
          <ServiceCard
            title="UI/UX Designer"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<img src={uiux} alt="!" />}
          />
          <ServiceCard
            title="Figma"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<img src={figma} alt="!" />}
          />
          <ServiceCard
            title="Illustrator"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<img src={Ai} alt="!" />}
          />
          <ServiceCard
            title="AWS DevOps"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<img src={devops} alt="!" />}
          />
          <ServiceCard
            title="Can learn any technology"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<img src={techno} alt="!" />}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, details }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <div
        className="w-full px-4 md:w-1/2 lg:w-1/3 "
        style={{ overflow: "scroll" }}
      >
        <motion.div
          className="mb-9 rounded-[20px]  what-card p-10 shadow-2  dark:bg-dark-2 md:px-7 xl:px-10"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            initial={{ y: 0 }}
          >
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl ">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold">{title}</h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
