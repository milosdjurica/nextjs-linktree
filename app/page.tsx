import GithubIcon from "@/components/GithubIcon";
import LinkCard from "@/components/LinkCard";
import TwitterIcon from "@/components/TwitterIcon";
import Image from "next/image";
import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import LinkedinIcon from "@/components/LinkedinIcon";

// forces to reload data on every refresh
export const dynamic = "force-dynamic",
  runtime = "edge";

type DataType = {
  name: string;
  avatar: string;
  links: LinkType[];
  socials: SocialsType[];
};

type LinkType = {
  href: string;
  title: string;
  image?: string;
};

type SocialsType = {
  title: string;
  href: string;
};

export default async function HomePage() {
  const data: DataType | undefined = await get("linktree");

  if (!data) {
    redirect("https://github.com/milosdjurica");
  }

  return (
    <div className="flex items-center flex-col mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => {
        return <LinkCard key={link.href} {...link} />;
      })}
      <div className="text-white flex items-center gap-4 mt-8">
        {data.socials.map((social) => {
          if (social.title === "Linkedin") {
            return <LinkedinIcon key={social.title} />;
          }
          if (social.title === "Twitter") {
            return <TwitterIcon key={social.title} />;
          }
          if (social.title === "Github") {
            return <GithubIcon key={social.title} />;
          }
        })}
      </div>
    </div>
  );
}
