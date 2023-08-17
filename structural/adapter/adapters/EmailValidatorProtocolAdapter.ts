import isEmail from "validator/lib/isEmail";
import { EmailValidatorProtocol } from "../EmailValidatorProtocol";

export class EmailValidatorProtocolAdapter implements EmailValidatorProtocol {
  validate(value: string): boolean {
    return isEmail(value)
  }
}