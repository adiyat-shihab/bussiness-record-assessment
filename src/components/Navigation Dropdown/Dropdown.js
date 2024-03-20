const Dropdown = ({ title }) => {
  return (
    <div className={"ml-3.5 -mt-[25px]   "}>
      <div
        className={
          "border-l-[2.5px] w-full h-[45px] z-10  align-text-bottom relative px-2 border-[F8F8F9] rounded-bl-xl"
        }
      ></div>
      <p
        className={
          " -mt-4 font-semibold ml-4 w-full  z-50  hover:bg-[#F4F5F6] rounded-[8px] transition duration-150 cursor-pointer relative py-1 px-2  "
        }
      >
        {title}
      </p>
    </div>
  );
};

export default Dropdown;
