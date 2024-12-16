"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-[105px] font-extrabold pb-6 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
        >
          Manage Your Finance <br />
          with Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "backOut" }}
          className="flex justify-center space-x-4"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Get Started
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/bittusingh14/">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="hero-image-wrapper mt-12 relative group"
        >
          <div className="absolute -inset-2 bg-blue-400/20 rounded-xl blur-xl group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
          <div className="hero-image relative">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl border-4 border-white mx-auto relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
