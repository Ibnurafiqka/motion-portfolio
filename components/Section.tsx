"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { slowStagger } from "@/animations/variants";

interface Props {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  innerClassName = "",
  id,
}: Props) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={slowStagger}
      className={`relative py-24 ${className}`}
    >
      <div className={`max-w-6xl mx-auto px-6 ${innerClassName}`}>{children}</div>
    </motion.section>
  );
}
