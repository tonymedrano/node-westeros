## Strategy Design Pattern 
Is a type of behavioral design pattern that encapsulates a "family" of algorithms and selects one from the pool for use during runtime. The algorithms are interchangeable, meaning that they are substitutable for each other. The key idea is to create objects which represent various strategies. 


## Participants
* **Client:** The client code that uses the strategy.
* **Context:** The context object that holds the strategy.
* **Strategy:** The strategy object that encapsulates the algorithm.
* **ConcreteStrategy:** The concrete strategy objects that implement the algorithm.
* **StrategyFactory:** The factory that creates the strategy objects.
* **ConcreteStrategyFactory:** The factory that creates the concrete strategy objects.
* **StrategyHolder:** The holder that holds the strategy.
* **ConcreteStrategyHolder:** The holder that holds the concrete strategy.


## Use Cases
* **Use Case 1:** The client code needs to use a strategy to perform a particular task.
* **Use Case 2:** The client code needs to use a strategy to perform a particular task, but the strategy can be changed at runtime.







