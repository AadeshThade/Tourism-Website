export interface Destination{
    name:string;
    location:string;
    description:string;
    image:string;
    hotels: Hotels[];
    activities:Activities[];
    images:images[];
}
export interface images{
    first:string;
    second:string;
    third:string;
    fourth:string
}
export interface Hotels{
    name:string;
    location:string;
    description:string;
    image:string;
    price:number;
    members:number;
    package1:Package[]
}

export interface Home{
    title:string;
    description:string;
    image:string;
}
export interface Tile{
    text:string;
         cols:number;
          rows:number ;
           image:string;
}

export interface Activities{
    activity:string;
    image:string;
}

export interface Package{
    name:string;
    image:string;
    members:number;

}
export interface Email{
    toEmail:string;
    body:string;
    subject:string;
}