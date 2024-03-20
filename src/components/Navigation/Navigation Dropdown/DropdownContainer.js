"use client";
import NavigationTabs from "@/components/Navigation/Navigation Tabs/NavigationTabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Dropdown from "@/components/Navigation/Navigation Dropdown/Dropdown";
import { useState } from "react";

const DropdownContainer = ({ title, list = [] }) => {
  const [caret, setCaret] = useState(false);
  return (
    <div>
      <div
        className={
          "-mx-1.5 hover:bg-[#F4F5F6] rounded-[8px] transition duration-150 cursor-pointer flex items-center justify-between pr-2.5"
        }
        onClick={() => setCaret(!caret)}
      >
        <NavigationTabs title={title} icon={"/Navigation Icons/folder.svg"} />
        <Image
          src={"/Navigation Icons/caret-down.svg"}
          alt={"icon"}
          priority={true}
          width={12}
          height={12}
          className={cn(caret && "rotate-180", "transition duration-200 ")}
        />
      </div>
      <div
        className={`${
          caret || "hidden opacity-0"
        } mt-4 opacity-100 transition-opacity duration-1000`}
      >
        {list.map((item, index) => (
          <Dropdown key={index} title={item} />
        ))}
      </div>
    </div>
  );
};

export default DropdownContainer;
