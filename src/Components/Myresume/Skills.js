import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="container  mx-auto w-full h-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mr-6 mb-8 md:mb-0">
          <p className="text-[#FF004F] mb-5">Features</p>
          <h1 className="education text-4xl mb-7">Design Skill</h1>

          {/* <!-- PhotoShop Skill --> */}
          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                PhotoShop
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.792 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* <!-- Figma Skill --> */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Figma
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                100%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1.0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* ADOBE ILLUSTRATOR */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                ADOBE ILLUSTRATOR
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                100%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1.0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* XD */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                ADOBE XD
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                60%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.6 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* Design */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Design
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.792 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>

        {/* <!-- DEVELOPMENT Skill --> */}

        <div className="flex-1 ml-6">
          <p className="text-[#FF004F] mb-5">Features</p>
          <h1 className="education text-4xl mb-7">Development Skill</h1>

          {/* <!-- HTML Skill --> */}
          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Html
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.792 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* <!-- CSS Skill --> */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                CSS
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                100%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1.0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* Reactjs */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Reactjs
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.792 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* Javascript */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Javascript
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                60%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.67 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* AWS */}

          <div className="mb-8">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                DeVops
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                60%
              </span>
            </div>
            <motion.svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              />
              <motion.path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.67 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
