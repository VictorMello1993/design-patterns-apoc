import { BycicleFactory } from "./creational/factory-method/factories/BycicleFactory";
import { CarFactory } from "./creational/factory-method/factories/CarFactory";

// ----------FACTORY METHOD------------------------------------------------------------
const carFactory = new CarFactory();
const bycicleFactory = new BycicleFactory();

const civic = carFactory.GetVehicle('Honda Civic')
const caloiVulcan = bycicleFactory.GetVehicle('Caloi Vulcan')

console.log(civic.print())
console.log(caloiVulcan.print())