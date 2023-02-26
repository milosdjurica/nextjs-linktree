import Image from "next/image";

export default function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 
      mb-3 w-full bg-gray-100
      rounded-md hover:scale-105 transition-all max-w-3xl"
    >
      <div className="flex w-full">
        <div className="w-10 h-10 flex justify-center items-center">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={30}
              height={30}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}
