import { Strategy } from "./Strategy";

export class SortDataStrategy implements Strategy{
  doSomething(data: string[]): string[] {
    return data.sort()
  }
}