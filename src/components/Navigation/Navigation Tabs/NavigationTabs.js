import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavigationTabs = ({ icon = "", title, grayText }) => {
  return (
    <div
      className={
        "hover:bg-[#F4F5F6] w-full rounded-[8px] transition duration-150 cursor-pointer"
      }
    >
      <div className={"flex items-center gap-2  px-3 py-1.5"}>
        {/*  icons*/}
        <Image
          className={cn(icon || "hidden")}
          src={icon}
          alt={"icon"}
          width={19}
          height={19}
        />
        <h1 className={`font-semibold ${grayText}`}>{title}</h1>
      </div>
    </div>
  );
};

export default NavigationTabs;
