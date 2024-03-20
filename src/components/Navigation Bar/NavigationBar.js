/**
 * @fileoverview This file contains the NavigationBar component.

 */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import NavigationTabs from "@/components/Navigation Tabs/NavigationTabs";

/**
 * The NavigationBar component displays the navigation tabs and the company logo.
 */
const NavigationBar = () => {
  return (
    <Card>
      <CardHeader>
        <div className={"flex gap-16 items-center"}>
          <div className={"flex gap-2 items-center"}>
            <Image
              src={"/main-logo.png"}
              alt={"logo"}
              className={"rounded-md w-auto h-auto"}
              priority={true}
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
        <Card className={"-mx-3"}>
          <CardContent className={"py-1.5 space-y-2 px-2  "}>
            {/*team navigation Tabs*/}
            <NavigationTabs
              title={"Designing Team"}
              icon={"/Navigation Icons/pen-tool.svg"}
            />
            <NavigationTabs
              title={"Marketing Team"}
              icon={"/Navigation Icons/megaphone.svg"}
            />
            <NavigationTabs
              title={"Development Team"}
              icon={"/Navigation Icons/code.svg"}
            />
            <div></div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default NavigationBar;
