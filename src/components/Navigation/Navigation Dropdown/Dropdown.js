import Image from "next/image";
import { cn } from "@/lib/utils";

const Dropdown = ({ title }) => {
  return (
    <div className={"ml-3.5 -mt-[25px]   "}>
      <div
        className={
          "border-l-[2.5px] w-full h-[45px] z-10  align-text-bottom relative px-2 border-[F8F8F9] rounded-bl-xl"
        }
      ></div>

      <p
        className={` -mt-4 font-semibold ml-4 w-full  z-50 flex items-center gap-1.5  hover:bg-[#F4F5F6] rounded-[8px] transition duration-150 cursor-pointer relative py-1 px-2 ${
          title === "Add new sub" && "text-gray-400"
        } `}
      >
        <Image
          src={"/Navigation Icons/add-circle-plus.svg"}
          alt={"Icons"}
          width={15}
          height={15}
          className={cn(title === "Add new sub" || "hidden")}
        />
        {title}
      </p>
    </div>
  );
};

export default Dropdown;
