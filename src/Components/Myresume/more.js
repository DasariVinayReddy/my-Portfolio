import React from "react";
import { motion } from "framer-motion";

const acheivements = [
  {
    id: 1,
    title: "THE BRAINIAC ",
    description: "THE BEST PERFORMER IN RISPOSTA.",
  },
];

const strengths = [
  {
    id: 1,
    title: "Work harder",
    description:
      "Hard work is not merely an obligation but an indispensable ingredient for success in any endeavor. ",
  },
  {
    id: 2,
    title: "Honest",
    description:
      "Maintaining honesty and professionalism is paramount in any endeavor.",
  },
  {
    id: 3,
    title: "Team player",
    description:
      "Being a team player means putting the success of the team ahead of your own individual goals",
  },
];
const Hobbies = [
  {
    id: 1,
    title: "Playing Cricket",
  },
  {
    id: 2,
    title: "Watching Movies",
  },
  {
    id: 3,
    title: "Music",
  },
];

const More = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#FF004F]">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {acheivements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-gray-100 p-4 rounded-md"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-lg font-bold mb-2 hover:text-[#FF004F]">
                {achievement.title}
              </h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#FF004F]">
            Hobbies and interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Hobbies.map((Hobbies) => (
              <motion.div
                key={Hobbies.id}
                className="bg-gray-100 p-4 rounded-md"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h3 className="text-lg font-bold mb-2 hover:text-[#FF004F]">
                  {Hobbies.title}
                </h3>
                <p className="">{Hobbies.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#FF004F]">Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strengths.map((strength) => (
            <motion.div
              key={strength.id}
              className="bg-gray-100 p-4 rounded-md"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-2 hover:text-[#FF004F]">
                {strength.title}
              </h3>
              <p className="">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
