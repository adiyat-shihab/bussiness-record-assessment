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
import NavigationTabs from "@/components/Navigation/Navigation Tabs/NavigationTabs";
import { cn } from "@/lib/utils";
import NavigationTeam from "@/components/Navigation/Navigation Team/NavigationTeam";
import NavigationMenu from "@/components/Navigation/Navigation Menu/NavigationMenu";

/**
 * The NavigationBar component displays the navigation tabs and the company logo.
 */
const NavigationBar = () => {
  return (
    <Card>
      <CardHeader className={"px-4 pt-2"}>
        <div className={"flex gap-16 items-center"}>
          <div className={"flex gap-2 items-center"}>
            <Image
              src={"/main-logo.png"}
              alt={"logo"}
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
    </Card>
  );
};

export default NavigationBar;
