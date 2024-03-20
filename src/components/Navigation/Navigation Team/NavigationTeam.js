import { Card, CardContent } from "@/components/ui/card";
import NavigationTabs from "@/components/Navigation/Navigation Tabs/NavigationTabs";

const NavigationTeam = () => {
  return (
    <Card className={"-mx-4"}>
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
        <hr className={"-mx-2"} />
        <NavigationTabs
          title={"Create a Team"}
          grayText={"text-[#ABACAF]"}
          icon={"/Navigation Icons/add-square.svg"}
        />
      </CardContent>
    </Card>
  );
};

export default NavigationTeam;
