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
import { getEventDateStatus, STATUS } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  is_online: Boolean;
  organisation_name: string | null;
  themes: Array<any>;
  registrations_count: Number;
  displayed_location: string | null;
  starts_at: string | null;
  ends_at: string | null;
}
export default function HackathonCard({
  themes,
  title,
  registrations_count,
  is_online,
  id,
  organisation_name,
  starts_at,
  ends_at,
}: Props) {
  const status = getEventDateStatus(starts_at, ends_at);
  return (
    <Card>
      <CardHeader>
        <CardDescription className="flex items-center text-blue-800">
          {is_online ? "Online" : "In-Person"}
          {status !== STATUS.ERROR ? (
            <>
              <Dot />
              {status}
            </>
          ) : null}
        </CardDescription>
        <CardTitle className="font-extrabold text-blue-900">{title}</CardTitle>
        <p className="font-medium text-blue-800">{organisation_name}</p>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row justify-between w-full gap-y-2">
        <div className="flex md:max-w-[80%] flex-wrap gap-2">
          <ThemeSection themes={themes} />
        </div>
        <div className="flex items-center md:flex-col w-full md:items-end gap-2 mt-2 md:mt-0">
          <AvatarGroup />
          <span className="text-balance text-base font-medium">
            +{registrations_count.toString()} participating
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-800 w-full hover:bg-blue-800" asChild>
          <Link href={`/discover/${id}`}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ThemeSection({ themes }: Pick<Props, "themes">) {
  if (!themes?.length)
    return (
      <Badge className="cursor-pointer text-base bg-transparent border-gray-400 rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-500 hover:border-blue-800">
        NO RESTRICTION
      </Badge>
    );

  return themes?.map((theme) => (
    <Badge className="cursor-pointer items-center text-base bg-transparent border-gray-400 rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-500 hover:border-blue-800">
      {theme?.name}
    </Badge>
  ));
}

function AvatarGroup() {
  return (
    <div className="flex -space-x-3 md:mr-12">
      <AvatarIcon className="w-9 h-9" />
      <AvatarIcon className="w-9 h-9" />
      <AvatarIcon className="w-9 h-9" />
    </div>
  );
}
