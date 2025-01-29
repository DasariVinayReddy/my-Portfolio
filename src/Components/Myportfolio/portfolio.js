import React, { useEffect } from "react";
import todo from "./../../asstes/portfolio/todo.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import book from "./../../asstes/portfolio/books.jpg";
import cenimatic from "./../../asstes/portfolio/cinematic.jpg";
import clinic from "./../../asstes/portfolio/clinic.jpg";
import ebook from "./../../asstes/portfolio/ebook.jpg";
import store from "./../../asstes/portfolio/store.jpg";
import vinayproject from "./../../asstes/portfolio/vinayproject.jpg";
import "./portfolio.css";

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hidden: { opacity: 0, scale: 0 },
};

export const Portfolio = () => {
  const services = [
    {
      details: "Cinematic Application Development using Reactjs",
      icon: cenimatic,
      url: "https://cinematic-vinay.netlify.app/",
    },
    {
      details: "Clinic website using React.js and Tailwind CSS framework.",
      icon: clinic,
      url: "https://clinic-site-vinayreddy.netlify.app/",
    },
    {
      details: "E-Book E-Commerce Design Creativity & Application.",
      icon: book,
      url: "https://e-commerce-beta-khaki.vercel.app/",
    },
    {
      details: "Website using React.js and frameworks using Tailwind CSS.",
      icon: store,
      url: "https://cinematic-vinay.netlify.app/",
    },
    {
      details: "E-Book E-Commerce Application using React.js & Tailwind CSS.",
      icon: ebook,
      url: "https://codebook-nine.vercel.app/",
    },
    {
      details: "Todo Application using React.js & Tailwind CSS.",
      icon: todo,
      url: "https://vinay86-todomate-projects.netlify.app/",
    },
    {
      details: "My Portfolio Done by Me.",
      icon: vinayproject,
      url: "https://dasarivinayreddy.netlify.app/",
    },
  ];
  return (
    <section className="pb-12 pt-20 portfolio dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="-mx-4 flex  flex-wrap">
          <div className="w-full px-4">
            <div className=" mb-12 text-center mx-auto max-w-[510px] item-center lg:mb-20 ">
              <span className="mb-2 block text-lg font-semibold portfolio-name">
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
              </span>
              <h2 className="text-5xl portfolio-text" id="Portfolio">
                My Portfolio
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              details={service.details}
              icon={
                <img
                  src={service.icon}
                  className="w-full h-60 rounded-[20px] object-cover"
                  alt="Icon"
                />
              }
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, details, url }) => {
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
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <motion.div
          className="mb-9 rounded-[20px]  portfolio-card p-10 shadow-2  dark:bg-dark-2 md:px-7 xl:px-10"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <motion.div>
            <div
              className="mb-8 flex bg-white rounded-[20px] items-center justify-center transition-transform duration-300 hover:scale-110 hover:z-10"
              style={{
                transformOrigin: "center",
                transform: "scale(1)",
              }}
            >
              {icon}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-color dark:text-dark-6 text-xl  font-medium hover:text-[#FF004F]"
            >
              {details}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
