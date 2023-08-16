import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  print(): string {
    return `Car ${this.name} created`
  } 
}