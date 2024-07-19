import { NextPage } from "next";
import DestinationsImages, { DestinationsImage } from "../destinations";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const PhotoFeedPage: NextPage<Props> = ({ params }) => {
  const photo: DestinationsImage = DestinationsImages.find(
    (p) => p.id === params.id
  )!;
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto">
          <div>
            <h1 className="text-center text-3xl font-bold my-4">
              {photo.name}
            </h1>
          </div>
          <Image
            alt={photo.name}
            src={photo.src}
            className="w-full object-cover aspect-square "
            priority={true}
            quality={50}
            placeholder="blur"
            width={400}
            height={400}
          />
          <div className="bg-white py-4">
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFeedPage;
