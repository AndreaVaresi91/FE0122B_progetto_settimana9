//import { Interface } from "readline";
import { InterFaccia } from "./inter-faccia";
let mozart:InterFaccia[]=[];


export function leggi(): Promise<InterFaccia[]> {
  return new Promise((res,rej)=> {
    setTimeout(() => {
      return mozart;
    }, 2000);
  })
}

export function aggiungi(x: Omit<InterFaccia, 'id'>): Promise<InterFaccia> {
  return new Promise ((res) => {
    setTimeout(() => {
     const newInterFaccia:InterFaccia = {...x, id:mozart.length + 1};
     mozart.push(newInterFaccia);
     res(newInterFaccia);
    }, 2000);
  })
}








