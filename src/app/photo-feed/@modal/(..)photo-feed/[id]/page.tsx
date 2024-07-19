import { NextPage } from "next";
import DestinationsImages, { DestinationsImage } from "../../../destinations";
import Image from "next/image";
import Modal from "@/components/modal";

interface Props {
  params: {
    id: string;
  };
}

const PhotoFeedModal: NextPage<Props> = ({ params }) => {
  const photo: DestinationsImage = DestinationsImages.find(
    (p) => p.id === params.id
  )!;
  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square p-4 rounded-sm"
        priority={true}
        quality={50}
        placeholder="blur"
        width={400}
        height={400}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
};

export default PhotoFeedModal;
