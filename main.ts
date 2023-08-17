import { BycicleFactory } from "./creational/factory-method/factories/BycicleFactory";
import { CarFactory } from "./creational/factory-method/factories/CarFactory";
import { EmailValidatorProtocol } from "./structural/adapter/EmailValidatorProtocol";
import { EmailValidatorProtocolAdapter } from "./structural/adapter/adapters/EmailValidatorProtocolAdapter";

// ----------FACTORY METHOD------------------------------------------------------------
const carFactory = new CarFactory();
const bycicleFactory = new BycicleFactory();

const civic = carFactory.GetVehicle('Honda Civic')
const caloiVulcan = bycicleFactory.GetVehicle('Caloi Vulcan')

console.log(civic.print())
console.log(caloiVulcan.print())
// -----------------------------------------------------------------------------------------------

// ----------ADAPTER------------------------------------------------------------
 const email = 'victorsmello@teste.com'
 const emailValidatorAdapter = new EmailValidatorProtocolAdapter()

  ValidateEmail(email, emailValidatorAdapter)

 function ValidateEmail(email: string, emailValidator: EmailValidatorProtocol)  {

    if(emailValidator.validate(email)) {
      console.log('Is valid e-mail')
    }
    else {
      console.log('Is not valid e-mail')
    }
 }


