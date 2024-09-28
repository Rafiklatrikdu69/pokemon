import { StatsDesBases } from "./states-de-base.model";

export interface Pokemon{
    
    id:number;
    nom:string;
    type:string[];
    statistiques_de_base:StatsDesBases
    image:string;
}
