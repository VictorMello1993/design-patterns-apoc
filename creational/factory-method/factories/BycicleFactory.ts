import { Bycicle } from "../../../classes/Bycicle";
import { Vehicle } from "../../../classes/Vehicle";
import { VehicleFactory } from "./VehicleFactory";

export class BycicleFactory extends VehicleFactory {
  GetVehicle(vehicleName: string): Vehicle {
    return new Bycicle(vehicleName);
  }
}