import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carousels({ course }) {
  return (
    <div className=" w-full  md:max-w-5xl mt-9 mx-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full hiddlen md:block   md:max-w-5xl  "
      >
        <CarouselContent>
          {course?.map((course, index) => (
            <CarouselItem
              key={index}
              className=" sm:basic-1/4  md:basis-1/4 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square   justify-center p-1">
                    <Link href={`/courses/${course?._id}`}>
                      <div className=" h-[180px]">
                        <Image
                          src={course?.thumbnail}
                          height={400}
                          width={500}
                          alt="Banner Image"
                          className="rounded-md object-fill h-full "
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-2">
                        <p className="font-medium text-sm">
                          {course?.courseName?.slice(0, 23)}
                        </p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
