import { motion } from "framer-motion";
import cricket from "./../../asstes/portfolio/blogs/cricket.jpg";
import devOps from "./../../asstes/portfolio/blogs/devops.jpg";
const BlogSection = () => {
  return (
    <section className="pt-20 portfolio lg:pt-[120px] pb-10 lg:pb-20" id="blog">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="-mx-4 flex  flex-wrap">
          <div className="w-full px-4">
            <div className=" mb-12 text-center mx-auto max-w-[510px] item-center lg:mb-20 ">
              <span className="mb-2 block text-lg font-semibold portfolio-name">
                VISIT MY BLOG AND KEEP YOUR FEEDBACK
              </span>
              <h2 className="text-5xl portfolio-text">My Blog</h2>
            </div>
          </div>
        </div>
        <div className="flex  -mx-4">
          {/* Repeat this block for each blog post */}

          <div className="flex flex-col md:flex-row mb-9 mx-auto">
            <motion.div
              className=" mr-[25px] mb-8 md:mb-0 rounded-[20px] portfolio-card p-10 shadow-2 md:px-7 xl:px-10"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className=" max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="#"
                    className="w-[350px] h-[200px]"
                  />
                </div>
                <div>
                  <span className="bg-[#FF004F] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="!"
                      className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                    >
                      Meet Our Designs, the best
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Banners,posters,Websites Design
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Blog 2 */}

            <motion.div
              className="mr-[25px]  mb-8 md:mb-0 rounded-[20px] portfolio-card p-10 shadow-2 md:px-7 xl:px-10"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={cricket} alt="!" className="w-[350px] h-[200px]" />
                </div>
                <div>
                  <span className="bg-[#FF004F] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                    Jun 12, 2024
                  </span>
                  <h3>
                    <a
                      href="!"
                      className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                    >
                      The Rise of T20 Cricket
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    The game of cricket has undergone a seismic shift with the
                    advent of the Twenty20 (T20) format. Introduced in 2003, T20
                    cricket was initially met with skepticism,
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Blog 3 */}

            <motion.div
              className=" mr-[25px] rounded-[20px]  mb-8 md:mb-0 portfolio-card p-10 shadow-2 md:px-7 xl:px-10"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={devOps} alt="!" className="w-[350px] h-[200px]" />
                </div>
                <div>
                  <span className="bg-[#FF004F] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="!"
                      className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                    >
                      DevOps using ci/cd Documentation
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    I have completed DevOps using Ci/Cd with Jenkins
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Repeat this block for each blog post */}
          {/* End of blog post block */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
