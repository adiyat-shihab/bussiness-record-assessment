import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavigationTabs = ({ icon = "", title }) => {
  return (
    <div
      className={
        "hover:bg-[#F4F5F6] w-full hover:rounded-md transition duration-150 cursor-pointer"
      }
    >
      <div className={"flex items-center gap-2  px-3 py-1.5"}>
        {/*  icons*/}
        <Image
          className={cn(icon || "hidden")}
          src={icon}
          alt={"icon"}
          width={18}
          height={18}
        />
        <h1 className={"font-semibold tracking-tight"}>{title}</h1>
      </div>
    </div>
  );
};

export default NavigationTabs;
