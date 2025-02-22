"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const TestimonialsContent = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative hidden flex-1 lg:block">
        <Avatar className="absolute -left-12 top-4 h-8 w-8">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/2_preview_rev_1.png"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute bottom-20 right-12 h-8 w-8">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/3.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute bottom-28 left-2 h-10 w-10">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/1.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute right-4 top-5 h-16 w-16">
          <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <span className="absolute -left-28 bottom-24 h-8 w-8 rounded-full border-4 border-[#ca3333]"></span>
        <span className="absolute left-12 top-28 h-14 w-14 rounded-full border-4 border-[#ace72d]"></span>
        <span className="absolute bottom-2 left-11 h-6 w-6 rounded-full bg-[#e47c20]"></span>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="flex w-full flex-col justify-around lg:w-[60%]"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="flex flex-col space-y-12 p-5 lg:p-4">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="796 698 200 200"
                  className="h-12 w-12 lg:h-14 lg:w-14"
                  fill="#f75023"
                >
                  <g>
                    <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"></path>
                    <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"></path>
                  </g>
                </svg>
              </div>
              <p className="mt-10 text-center text-lg italic text-textSecondary lg:text-xl">
                Really the Code Quality, Customer Support, and design are awesome and its good
                support they are giving. They give an instant solution to our needs. Really awesome.
                I will strongly recommend to my friends. Simply amazing team and amazing theme!
                Thank you from United States of America!
              </p>
              <div className="my-9 flex w-full justify-center gap-5">
                <Avatar className="h-14 w-14">
                  <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
                  <AvatarFallback>VH</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-textColor lg:text-xl">Kafka Smith</p>
                  <p className="text-base text-textSecondary lg:text-lg">ABC Group</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="relative hidden flex-1 lg:block">
        <Avatar className="absolute left-12 top-4 h-8 w-8">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/5.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute bottom-4 left-2 h-10 w-10">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/6.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <Avatar className="absolute -right-2 bottom-20 h-16 w-16">
          <AvatarImage
            className="rounded-full"
            src="https://marketifythemes.net/html/dizme/img/testimonials/7.jpg"
          />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <span className="absolute -right-28 top-24 h-8 w-8 rounded-full border-4 border-[#ca3333]"></span>
        <span className="absolute right-11 top-28 h-14 w-14 rounded-full border-4 border-[#ac2fee]"></span>
        <span className="absolute -right-11 bottom-2 h-6 w-6 rounded-full bg-[#3fb5ff]"></span>
      </div>
    </div>
  );
};

export default TestimonialsContent;
