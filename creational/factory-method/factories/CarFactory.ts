import { Car } from "../../../classes/Car";
import { Vehicle } from "../../../classes/Vehicle";
import { VehicleFactory } from "./VehicleFactory";

export class CarFactory extends VehicleFactory {
  GetVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}