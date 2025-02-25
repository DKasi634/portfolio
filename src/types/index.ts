import { ReactElement } from "react";

export interface Project {
    name: string; // Project name
    image: string; // Path to the project screenshot
    description: string; // Brief description of the project
    link: string; // Link to the live project or repository
  }

export type ContactItem =  {
  name:string,
  contact:string,
  icon:ReactElement
}


export interface Service {
  name: string; // Name of the service
  description: string; // Brief description of the service
  icon: ReactElement; // Icon representing the service
}