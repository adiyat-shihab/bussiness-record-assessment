/**
 * @fileoverview This file contains the NavigationBar component.

 */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import NavigationTabs from "@/components/Navigation/Navigation Tabs/NavigationTabs";
import { cn } from "@/lib/utils";
import NavigationTeam from "@/components/Navigation/Navigation Team/NavigationTeam";
import NavigationMenu from "@/components/Navigation/Navigation Menu/NavigationMenu";
import { Button } from "@/components/ui/button";

/**
 * The NavigationBar component displays the navigation tabs and the company logo.
 */
const NavigationBar = () => {
  return (
    <Card className={"w-[382px] flex flex-col  "}>
      <CardHeader className={"px-4 pt-2"}>
        <div className={"flex gap-16 items-center justify-between"}>
          <div className={"flex gap-2 items-center"}>
            <Image
              src={"/main-logo.png"}
              alt={"logo"}
              priority={true}
              className={"rounded-md w-auto h-auto"}
              width={35}
              height={35}
            />
            <div className={"flex flex-col-reverse"}>
              <CardTitle className={"text-[0.990rem] tracking-tighter"}>
                InnovativeHub
              </CardTitle>
              <CardDescription>INC</CardDescription>
            </div>
          </div>
          <Image
            src={"/profile.png"}
            alt={"profile"}
            width={40}
            height={40}
            className={"rounded-full w-[32px]  h-[32px]"}
          />
        </div>
      </CardHeader>
      <CardContent>
        <NavigationTeam />
        <NavigationMenu />
      </CardContent>
      <CardFooter className={" mt-auto flex flex-col space-y-1.5  "}>
        <div
          className={
            "-mx-1.5 hover:bg-[#F4F5F6] w-full rounded-[8px] transition duration-150 cursor-pointer"
          }
        >
          <NavigationTabs
            title={"Invite Member"}
            icon={"/Navigation Icons/user-add.svg"}
          />
        </div>
        <div
          className={
            "-mx-4 hover:bg-[#F4F5F6] w-full rounded-[8px] transition duration-150 cursor-pointer"
          }
        >
          <NavigationTabs
            title={"Help and first steps"}
            icon={"/Navigation Icons/question-mark.svg"}
          />
        </div>
        <div
          className={
            "flex items-center  justify-between px-2  py-2 bg-[#F4F5F6]  hover:bg-[#F4F5F6] w-full rounded-[12px] transition duration-150 "
          }
        >
          <div className={"flex  gap-2 items-center"}>
            <div className={"px-2 py-0.5 bg-white rounded-lg"}>
              <p className={"font-semibold"}>7</p>
            </div>
            <h1 className={"font-semibold"}>days left on trail</h1>
          </div>
          <Button className={"rounded-[10px]"}>Add Billing</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NavigationBar;
