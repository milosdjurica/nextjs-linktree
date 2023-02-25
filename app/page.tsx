import GithubIcon from "@/components/GithubIcon";
import LinkCard from "@/components/LinkCard";
import TwitterIcon from "@/components/TwitterIcon";
import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full mt-16 mb-40 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link: any) => {
        return <LinkCard key={link.href} {...link} />;
      })}
      <div className="text-white flex items-center gap-4 mt-8">
        {data.socials.map((icon: any) => {
          if (icon.title === "Twitter") {
            return <TwitterIcon key="twitterIcon" />;
          }
          if (icon.title === "Github") {
            return <GithubIcon key="githubIcon" />;
          }
        })}
      </div>
    </div>
  );
}
