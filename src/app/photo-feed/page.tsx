import { NextPage } from "next";
import destinations from "./destinations";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const PhotoFeedPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <main className="container mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">
          New Destinations of the World
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/photo-feed/${destination.id}`}>
              <Image
                alt={destination.name}
                src={destination.src}
                className="w-full object-cover aspect-square"
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PhotoFeedPage;
