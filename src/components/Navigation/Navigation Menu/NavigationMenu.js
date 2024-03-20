import Image from "next/image";
import DropdownContainer from "@/components/Navigation/Navigation Dropdown/DropdownContainer";

const NavigationMenu = () => {
  const list1 = [
    "Roadmap",
    "Feedback",
    "Performance",
    "Team",
    "Analytics",
    "Add new sub",
  ];
  const list2 = ["Sales", "Products", "Add new sub"];
  return (
    <div>
      <div className={"flex justify-between pl-2 cursor-default  py-4"}>
        <h1 className={"font-semibold text-[0.85rem] text-gray-500 uppercase"}>
          Folders
        </h1>
        <Image
          src={"/Navigation Icons/plus.svg"}
          alt={"add "}
          width={18}
          height={18}
        />
      </div>

      <div className={"space-y-1.5"}>
        <DropdownContainer title={"Products"} list={list1} />
        <DropdownContainer title={"Sales"} list={list2} />
      </div>
    </div>
  );
};

export default NavigationMenu;
