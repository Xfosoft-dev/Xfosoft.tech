"use client";
import InfiniteLooper from "@/components/Global-Components/InfiniteLooper";
import Slideup from "@/components/Global-Components/SlideUp";
import SubServiceSlider from "@/components/Global-Components/SubServiceSlider";
import { data } from "@/config/data";
import { motion } from "framer-motion";

const ITRecruitmentSection = () => {
  return (
    <section className="flex flex-col items-center space-y-4">
      <motion.div
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: false }}
        // transition={{ duration: 0.2 }}
        // variants={{
        //   visible: { opacity: 1, scale: 1 },
        //   hidden: { opacity: 0, scale: 0 },
        // }}
        className="relative w-full h-full mt-6 landscape:md:h-[calc(100vh_+_20rem)] portrait:md:h-screen"
        id="recruiting-staffing"
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full lg:max-w-screen-2xl ">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4">
              <div className="flex flex-col items-center justify-center py-10 space-y-5  xl:w-[78.5rem] md:w-[48rem] sm:w-[30rem] w-80 px-4 lg:px-0">
                <div className="flex flex-wrap items-center justify-center space-x-4">
                  <h1 className="text-xl font-medium lg:text-4xl md:text-3xl">
                    {data.itRecuiting.title[0].toUpperCase()}
                  </h1>
                  <h1 className="text-xl font-medium lg:text-4xl md:text-3xl text-emerald-500">
                    {data.itRecuiting.title[1].toUpperCase()}
                  </h1>
                </div>
                <p className="text-sm text-center lg:text-lg md:text-base">
                  {data.itRecuiting.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6 lg:space-y-12">
                <SubServiceSlider data={data.itRecuiting.subServices} />
                <InfiniteLooper data={data.itRecuiting.languages} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ITRecruitmentSection;
