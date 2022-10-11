import { ISpec } from "./ISpec";

export interface IProduct {
  id: string;
  imageUrl: string;
  images: string[];
  name: string;
  price: number;
  rating: number;
  testimonials: number;
  brand: string;
  memory: number;
  ram: number;
  cpuCores: number;
  screenSize: number;
  batteryCapacity: number;
  color: string;
  productCode: number;
  specifications: ISpec[];
  description: string;
  shortDesc: string;
}
