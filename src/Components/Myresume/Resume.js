import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Skills from "./Skills";
import More1 from "./more";
import "./resume.css";

export const Resume = () => {
  const data = [
    {
      label: "Education",
      value: "education",
      desc: <Tabs />,
    },
    {
      label: "Professional Skills",
      value: "Professional Skills",
      desc: <Skills />,
    },
    {
      label: "More",
      value: "More",
      desc: <More1 />,
    },
  ];

  const [activeTab, setActiveTab] = React.useState("education");

  return (
    <section
      className="pb-12 pt-20 portfolio dark:bg-dark lg:pb-[90px] lg:pt-[120px] "
      id="resume"
    >
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="-mx-4 flex  flex-wrap">
          <div className="w-full px-4">
            <div className=" mb-12 text-center mx-auto max-w-[510px] item-center lg:mb-20 ">
              <span className="mb-2 block text-lg font-semibold portfolio-name">
                {/* 3+ Year Experience */}
              </span>
              <h2 className="text-5xl portfolio-text">My Resume</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- component --> */}

      <div className="w-full container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex  mb-4 items-center justify-center ">
          {data.map(({ label, value }) => (
            <button
              key={value}
              className={`bg-gradient-to-r from-blue-gray-100 to-white shadow-md px-4 py-2 mr-2 font-medium text-[#FF004F]-900 focus:outline-none ${
                activeTab === value
                  ? "custom-background"
                  : "hover:text-[#FF004F]"
              }`}
              style={{ width: "400px", height: "80px" }}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="border-t">
          {data.map(({ value, desc }) =>
            activeTab === value ? (
              <div key={value} className="p-4 ">
                <p className="text-gray-700">{desc}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

const Tabs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0.5, 1, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 1]);

  const scale2 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0.5, 1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 1]);
  return (
    <>
      <div className="container  mx-auto w-full h-full">
        <h1 className="education">Education Quality</h1>
        <div className="relative flex overflow-hidden p-10 space-x-52">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <motion.div
                ref={ref}
                className="order-1 bg-gray-400 rounded-lg shadow-xl px-6 py-4 resume-card"
                style={{ opacity, scale }}
              >
                <div className="flex flex-wrap justify-between">
                  <div className="eduction_score_1">
                    <motion.h3
                      className="mb-2 font-bold text-gray-800 text-xl score_1"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      B.Tech in Electronics and Communication Engineering.
                    </motion.h3>
                    <motion.p
                      className="mb-3 score_1"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      From Geethanjali college(2016-20)
                    </motion.p>
                  </div>
                  <div className="flex items-center mb-4">
                    <button className="score rounded-lg font-bold">
                      6.7/10
                    </button>
                  </div>
                </div>
                <div className=" h-[2px] bg-gray-200 mb-3"></div>
                <motion.div
                  className="text-sm leading-normal md:leading-snug lg:leading-snug xl:leading-snug tracking-wide text-gray-800 text-opacity-100 score_1 break-words overflow-hidden px-2"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  I hold a Bachelor of Technology in Electronics and
                  Communication Engineering (ECE) obtained in September 2020
                  from Geethanjali College of Engineering. Throughout my
                  academic journey, I maintained a commendable cumulative grade
                  point average of 6.7, demonstrating my strong academic
                  capabilities and dedication to my field of study.
                </motion.div>
              </motion.div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <motion.div
                ref={ref}
                className="order-1 bg-gray-400 rounded-lg shadow-xl px-6 py-4 resume-card resume1"
                style={{ opacity1, scale1 }}
              >
                <div className="flex flex-wrap justify-between">
                  <div className="eduction_score_1">
                    <motion.h3
                      className="mb-2 font-bold text-gray-800 text-xl score_1"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Intermediate in MPC.
                    </motion.h3>
                    <motion.p
                      className="mb-3 score_1"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      From Sri Chaitanya Junior college(2014-16)
                    </motion.p>
                  </div>
                  <div className="flex items-center mb-5">
                    <button className="score rounded-lg font-bold ">
                      7/10
                    </button>
                  </div>
                </div>
                <div className="h-[2px] bg-gray-200 mb-3"></div>
                <motion.div
                  className="text-md leading-snug tracking-wide text-gray-800 text-opacity-100 score_1 "
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  I successfully completed my intermediate education in the year
                  2016, achieving an impressive score of 70%. Throughout my
                  studies, I dedicated myself to my academic pursuits on a
                  full-time basis.
                </motion.div>
              </motion.div>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <motion.div
                ref={ref}
                className="order-1 bg-gray-400 rounded-lg shadow-xl px-6 py-4 resume-card"
                style={{ opacity2, scale2 }}
              >
                <div className="flex flex-wrap justify-between">
                  <div className="eduction_score_1">
                    <motion.h3
                      className="mb-2 font-bold text-gray-800 text-xl score_1"
                      initial={{ x: -80, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      SSC in 10TH.
                    </motion.h3>
                    <motion.p
                      className="mb-3 score_1"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      From Sri Chaithanya techno school(2014)
                    </motion.p>
                  </div>
                  <div className="flex items-center mb-5">
                    <button className="score rounded-lg font-bold">
                      7.3/10
                    </button>
                  </div>
                </div>
                <div className="h-[2px] bg-gray-200 mb-3"></div>
                <motion.div
                  className="text-md leading-snug tracking-wide text-gray-800 text-opacity-100 score_1"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  I successfully completed my 10th grade in the year 2014 with
                  an impressive score of 73%. This accomplishment was a result
                  of my unwavering dedication and commitment to my studies.
                  Throughout my academic journey,
                </motion.div>
              </motion.div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
