import { Strategy } from "./Strategy";

export class ReverseDataStrategy implements Strategy{
  doSomething(data: string[]): string[] {
    return data.reverse()
  }
}