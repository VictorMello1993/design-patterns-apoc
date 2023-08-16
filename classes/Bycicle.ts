import { Vehicle } from "./Vehicle";

export class Bycicle extends Vehicle {
  print(): string {
   return `Bicicleta ${this.name} created` 
  }
}