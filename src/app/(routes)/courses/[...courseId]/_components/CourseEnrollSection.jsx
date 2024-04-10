import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";
import { useCreatePayment } from "@/hooks/course_hook";
function CourseEnrollSection({ course }) {
  const succesHandler = (data) => {
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY,
      name: "Study Sphere",
      currency: data?.data?.currency,
      amount: data?.data?.amount,
      order_id: data?.data?.id,
      description: "Thankyou for your test donation",
      image: data?.data?.thumbnail,
      handler: function (response) {
        console.log(response);
        
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const { mutate, data, status, isError } = useCreatePayment(succesHandler);
  console.log(status);
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const clickHandler = async (data) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    mutate({ courseId: data });
  };

  return (
    <div className="p-3 text-center bg-primary rounded-sm flex flex-col gap-3">
      <h2 className="text-[24px] font-bold text-white">Enroll To The Course</h2>
      <h2 className="text-white font-semibold">
        Enroll Now To Start Leaarning And Buildeing The Project
      </h2>
      <Button
        onClick={() => {
          clickHandler(course._id);
        }}
        disabled={status === "pending" && true}
        className={`bg-white  text-primary hover:bg-white hover:text-primary`}
      >
        <LoaderCircle
          className={`animate-spin  me-2 ${
            status == "pending" ? "block" : "hidden"
          }   `}
        />
        Enroll Now Just{" "}
        <span className="mx-2">
          <Image src="/rupee.png" alt="logo" height={15} width={15} />
        </span>{" "}
        {course?.price}
      </Button>
    </div>
  );
}

export default CourseEnrollSection;
