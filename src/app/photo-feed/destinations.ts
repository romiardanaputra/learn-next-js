import { StaticImageData } from "next/image";
import photo1 from "./photos/1.webp";
import photo2 from "./photos/2.webp";
import photo3 from "./photos/3.webp";

export interface DestinationsImage {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
}

const DestinationsImages: DestinationsImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
];

export default DestinationsImages;
