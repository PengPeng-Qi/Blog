"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const MyLogo = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#231815");
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setColor("white");
    } else {
      setColor("#231815");
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 12000); // 每 12 秒更新一次 key

    return () => clearInterval(interval); // 清除定时器
  }, []);

  return (
    <Link href={"/"}>
      <motion.svg
        key={key} // 使用 key 强制重新渲染
        id="帽子下方"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 285.84 286.68"
        initial="hidden"
        animate="visible"
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 15,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.polyline
          points="2.62 103.57 2.62 110.46 2.62 140.96 283.84 140.96 283.84 95.22 214.38 95.22"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="16"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M339.14,347.22l58.65,1.29V321l-58.31,2.26Z"
          transform="translate(-302.56 -241.55)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="16"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M517.19,336.71a113.33,113.33,0,0,0-8.14-30.54,110.45,110.45,0,0,0-16.67-27.57,101.26,101.26,0,0,0-17.17-16.17,113.44,113.44,0,0,0-20-11.47c-20.16-8.67-55.1-11.91-89,2.5-9.35,4-25,10.84-39,26.84-5,5.76-21.54,25.2-22.59,53.08a75.23,75.23,0,0,0,.58,12.46"
          transform="translate(-302.56 -241.55)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="16"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M334,382.51A265.85,265.85,0,0,0,337.31,457a180.9,180.9,0,0,0,19.77,45.18L378,518.55a155.05,155.05,0,0,0,23.1,5.68,129.2,129.2,0,0,0,21.3,2A117.18,117.18,0,0,0,454.21,522l13.55-6.77L478.49,505c5.25,3,10.74,6.35,16.38,10.17,3.53,2.39,6.88,4.79,10,7.17q8.19-11.11,16.5-23.55,6.36-9.56,12-18.79c-3.24-2.21-6.68-4.43-10.3-6.62-6.84-4.15-13.48-7.7-19.76-10.73l6.77-20.9,4-13c1.86-7.09,3.16-13.3,4.07-18.3.81-4.41,1.38-8.2,1.77-11.12.72-5.32,1.19-10.06,1.5-14.07l-8.7-2.8Z"
          transform="translate(-302.56 -241.55)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="16"
          variants={draw}
          custom={4}
        />
        <motion.path
          d="M378,382.51V399q.64,10.28,1.27,20.55,1.79,8.56,3.58,17.13,1.59,5.28,3.2,10.54,2,4.11,4.1,8.2l4.8,8.72,5.08,6.12,5.36,5.81,8.19,4.28,8.75,1.53h6.5l3.81-4,3-3.06-3-4.28-4.94-4.89-5.08-5.2-4.24-5.05,5.65-8.71,6.21-9.79,2.4-3.36,7.24,5.76,9.6,4.7h4.9a36.8,36.8,0,0,0,6.77-10.54q1.35-4.69,2.69-9.4l2-11.93V382.51"
          transform="translate(-302.56 -241.55)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="16"
          variants={draw}
          custom={5}
        />
      </motion.svg>
    </Link>
  );
};

export default MyLogo;
