"use client";
import { IconRocket } from "@tabler/icons-react";
import { Car } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const Animation4 = () => {
  const features: Feature[] = [
    {
      icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
      title: "Generate ultra realistic images",
      description:
        "With our state of the art AI, you can generate ultra realistic images of anything you can imagine.",
      content: (
        <div>
          <Image
            src="/images/animation-4/first.png"
            alt="car"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
      title: "Generate and get attention",
      description:
        "With our state of the art AI, you can generate ultra realistic images of anything you can imagine.",
      content: (
        <div>
          <Image
            src="/images/animation-4/second.png"
            alt="car"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
      title: "Generate what on your mind",
      description:
        "With our state of the art AI, you can generate ultra realistic images of anything you can imagine.",
      content: (
        <div>
          <Image
            src="/images/animation-4/third.png"
            alt="car"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-neutral-900">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
          {features.map((item, idx) => (
            <Card feature={item} key={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const translateContent = useSpring( useTransform(scrollYProgress, [0, 1], [200, -300]));
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);
  return (
    <>
      <div
        ref={ref}
        key={feature.title}
        className="grid grid-cols-2 items-center gap-20 py-40"
      >
        <motion.div
          style={{ filter: useMotionTemplate`blur(${blur}px)`, scale: scale }}
          className="flex max-w-lg flex-col items-start gap-4"
        >
          {feature.icon}
          <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
          <p className="text-lg text-neutral-400">{feature.description}</p>
        </motion.div>
        <motion.div
          style={{ y: translateContent, opacity: opacityContent }}
          className="w-96"
        >
          {feature.content}
        </motion.div>
      </div>
    </>
  );
};

export default Animation4;
