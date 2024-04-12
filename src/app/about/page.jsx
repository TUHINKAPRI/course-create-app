"use client";

import React from "react";
import HighlightText from "../_components/HighlightText";
import CTAButton from "../_components/CTAButton";
import Footer from "../_components/Footer";
import Image from "next/image";
import Star from "../_components/Star";
import ContactUsForm from "../contact/_componenets/ContactUsForm";
function page() {
  const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    // {
    //   order: 2,
    //   heading: "Our Learning Methods",
    //   description:
    //     "Studynotion partners with more than 275+ leading universities and companies to bring",
    // },
    // {
    //   order: 3,
    //   heading: "Certification",
    //   description:
    //     "Studynotion partners with more than 275+ leading universities and companies to bring",
    // },
    // {
    //   order: 4,
    //   heading: `Rating "Auto-grading"`,
    //   description:
    //     "Studynotion partners with more than 275+ leading universities and companies to bring",
    // },
    // {
    //   order: 5,
    //   heading: "Ready to Work",
    //   description:
    //     "Studynotion partners with more than 275+ leading universities and companies to bring",
    // },
  ];

  return (
    <div>
      <section className=" text-black">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-black">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Image src="/aboutus1.webp" alt="" width={400} height={400} />
            <Image src="/aboutus2.webp" alt="" width={400} height={400} />
            <Image src="/aboutus3.webp" alt="" width={400} height={400} />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-black">
            We are passionate about revolutionizing the way we learn. Our
            innovative platform <HighlightText text={"combines technology"} />,{" "}
            <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
              {" "}
              expertise
            </span>
            , and community to create an
            <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
              {" "}
              unparalleled educational experience.
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <Image
                src="/foundingStory.png"
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Star />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex- justify-between gap-10 text-black">
        <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
         {LearningGridArray?.map((card, i) => {
            return (
              <div
                key={i}
                className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
                  card.order % 2 === 1
                    ? "bg-richblack-700 h-[294px]"
                    : card.order % 2 === 0
                    ? "bg-richblack-800 h-[294px]"
                    : "bg-transparent"
                } ${card.order === 3 && "xl:col-start-2"}  `}
              >
                {card.order < 0 ? (
                  <div className="xl:w-[90%] flex mx-auto flex-col gap-3 pb-10 xl:pb-0">
                    <div className="text-4xl font-semibold ">
                      {card.heading}
                      <HighlightText text={card.highlightText} />
                    </div>
                    <p className="text-richblack-300 font-medium">
                      {card.description}
                    </p>

                    <div className="w-fit mx-auto mt-2">
                      <CTAButton active={true} linkto={card.BtnLink}>
                        {card.BtnText}
                      </CTAButton>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 flex flex-col gap-8">
                    <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                    <p className="text-richblack-300 font-medium">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })} 
        </div>
        <div className="  hidden md:block mx-auto">
          <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
          <p className="text-center text-richblack-300 mt-3">
            We&apos;d love to here for you, Please fill out this form.
          </p>
          <div className="mt-12 hidden md:block mx-auto">
            <ContactUsForm />
          </div>
        </div>
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-black">
        <h1 className="text-center text-4xl font-semibold mt-8">
         Thank You
        </h1>
      </div>

      <Footer />
    </div>
  );
}

export default page;
