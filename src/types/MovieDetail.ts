import { Genre } from "../types/Genre";
import { ProductionCompany } from "../types/ProductionCompany";

export interface MovieDetail {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  budget: number;
  revenue: number;
  genres: Genre[];
  production_companies: ProductionCompany[];
  video: boolean;
  runtime: number;
  backdrop_path: string;
}
