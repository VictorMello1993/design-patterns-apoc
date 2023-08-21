import { Strategy } from "./Strategy";

export class Context {
  private strategy: Strategy

  constructor(strategy: Strategy){
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy){
    this.strategy = strategy;
  }

  public doSomethingAlgorithm(): void {
    console.log("Context: Sorting data using Strategy")
    const result = this.strategy.doSomething(['a', 'b', 'c', 'd', 'e', 'f'])
  }
}