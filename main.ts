import { Context } from "./behaviour/strategies/Context";
import { ReverseDataStrategy } from "./behaviour/strategies/ReverseDataStrategy";
import { SortDataStrategy } from "./behaviour/strategies/SortDataStrategy";
import { BycicleFactory } from "./creational/factory-method/factories/BycicleFactory";
import { CarFactory } from "./creational/factory-method/factories/CarFactory";
import { EmailValidatorProtocol } from "./structural/adapter/EmailValidatorProtocol";
import { EmailValidatorProtocolAdapter } from "./structural/adapter/adapters/EmailValidatorProtocolAdapter";
import { ProductComposite, ProductLeaf } from "./structural/composite/ProductComposite";

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

// ----------COMPOSITE------------------------------------------------------------
const iphone = new ProductLeaf('Iphone 14 Pro', 8000)
const rtx3060 = new ProductLeaf('RTX 3060', 1800)
const tShirt = new ProductLeaf('Camisa Insider', 60)

const productBox = new ProductComposite()
productBox.add(iphone, rtx3060, tShirt)
console.log(productBox)
console.log(productBox.getPrice())

// Adicionando mais composites dentro de um composite criado acima
const anotherProductBox = new ProductComposite()
const acerNitro5 = new ProductLeaf('Acer Nitro 5', 4500)
const ps5 = new ProductLeaf('PlayStation 5', 4000)
anotherProductBox.add(acerNitro5, ps5)
productBox.add(anotherProductBox)

console.log(productBox)
console.log(productBox.getPrice())

// STRATEGY
const context = new Context(new SortDataStrategy())
context.doSomethingAlgorithm()
console.log('')

console.log('Reversing data...')
context.setStrategy(new ReverseDataStrategy())
context.doSomethingAlgorithm()



