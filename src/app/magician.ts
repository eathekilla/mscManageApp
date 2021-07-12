export interface Magician {
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth:string;
    yearOfBirth:any;
    ancestry: string;
    eyeColour: string;
    hairColour:string;
    wand:{
      wood:string;
      core:string;
      length:any;
    };
    patronus:string;
    hogwartsStudent:boolean;
    hogwartsStaff:boolean;
    actor:string;
    alive:boolean;
    image:string; 
  }