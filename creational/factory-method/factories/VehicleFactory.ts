import { Vehicle } from "../../../classes/Vehicle";

export abstract class VehicleFactory {
  //Factory Method
  abstract GetVehicle(vehicleName: string): Vehicle
}