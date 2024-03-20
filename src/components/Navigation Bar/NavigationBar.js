import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";

const NavigationBar = () => {
  return (
    <Card>
      <CardHeader>
        <div className={"flex gap-4"}>
          <div className={"flex gap-4"}>
            <Image
              src={"/main-logo.png"}
              alt={"logo"}
              className={""}
              width={70}
              height={60}
            />
            <div className={"flex flex-col-reverse"}>
              <CardTitle>Innovative Hub</CardTitle>
              <CardDescription>INC</CardDescription>
            </div>
          </div>
          <Image
            src={"/profile.png"}
            alt={"profile"}
            width={40}
            height={40}
            className={"rounded-full"}
          />
        </div>
      </CardHeader>
    </Card>
  );
};

export default NavigationBar;
