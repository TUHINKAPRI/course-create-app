"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "./_components/HighlightText";
import CTAButton from "./_components/CTAButton";
import CodeBlocks from "./_components/CodeBlocks";
import AboutUs from "./_components/AboutUs";
import OurTeam from "./_components/OurTeam";
import { MoveRight } from "lucide-react";
import { Carousels } from "./_components/Carousel";
import { useGetAllCourses } from "@/hooks/course_hook";
import Footer from "./_components/Footer";

function Home() {
  const [token, setToken] = useState(null);
  const { data: course, isLoading } = useGetAllCourses();
  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    setToken(tokens);
  }, []);
  return (
    <div>
      <div className=" mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black">
        <Link href="/sign-up">
          <div className="group mx-auto mt-16 w-fit rounded-full bg-purple-700  p-1 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-primary hover:text-white">
              {token ? <p>Start with us</p> : <p>Become an Instructor</p>}
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"coding skills"} />
        </div>
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/sign-up"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/log-in"}>
            Explore More
          </CTAButton>
        </div>
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[10px_10px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src="/banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-between ">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/sign-up",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/sign-up",
              active: false,
            }}
            codeColor={"text-"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        <div className="flex justify-between ">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/sign-up",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/sign-up",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
      </div>

      <AboutUs />

      <OurTeam />

      {/* start fro free */}

      <section id="Subscribes" className="text-center py-20 bg-blue-100">
        <div className="container px-4">
          <div className="flex justify-center mx-3">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h4 className="mb-3 text-4xl text-gray-700 font-bold tracking-wide">
                Start For Free
              </h4>
              <p className="mb-4 text-gray-600 leading-loose text-sm">
                Existing customized ideas through client-based deliverables.
                <br />
                Compellingly unleash fully tested outsourcing
              </p>
              <form>
                <div className="wow fadeInDown">
                  <input
                    type="Email"
                    className="
              w-full
              mb-5
              bg-white
              border border-blue-300
              rounded-full
              px-5
              py-3
              duration-300
              focus:border-blue-600
              outline-none
            "
                    name="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="
              border-0
              bg-blue-600
              text-white
              rounded-full
              w-12
              h-12
              duration-300
              hover:opacity-75
            "
                    type="button"
                  >
                    <MoveRight className="ms-3" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* course */}

      <div className="bg-pure-greys-5 mt-20 text-richblack-700">
        <div className="homepage_bg  hidden md:block">
          <Carousels course={course?.data?.course} />
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="h-[10px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/courses"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/courses"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto text-black flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10  flex flex-col justify-between gap-7 mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col justify-center items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudySphere is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/courses"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
