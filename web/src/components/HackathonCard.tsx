import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import AvatarIcon from "@/icons/AvatarIcon";

const themes = ["Databases", "Web", "Machine Learning/AI"];
export default function HackathonCard() {
  return (
    <Card >
      <CardHeader>
        <CardDescription className="flex items-center text-blue-800">
          Online <Dot />
          Ongoing
        </CardDescription>
        <CardTitle className="font-extrabold text-blue-900">
          Zero to One Hackathon by Convex Vol 2
        </CardTitle>
        <p className="font-medium text-blue-800">Convex</p>
      </CardHeader>
      <CardContent className="flex justify-between w-full">
        <div className="flex max-w-[80%] flex-wrap gap-2">
          {themes.map((theme) => (
            <Badge className="cursor-pointer text-base bg-transparent border-gray-400 rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-500 hover:border-blue-800">
              {theme}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col w-full items-end gap-2">
            <AvatarGroup/>
            <span className="text-balance text-base font-medium">+1000 participating</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-800 w-full hover:bg-blue-800" asChild>
          <Link href="/login">Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function AvatarGroup(){
    return <div className="flex -space-x-3 mr-12">
        <AvatarIcon className="w-9 h-9"/>
        <AvatarIcon className="w-9 h-9"/>
        <AvatarIcon className="w-9 h-9"/>
    </div>
}