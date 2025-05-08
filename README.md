# Assignment_1
# Differences Between Interfaces and Types in TypeScript:
* TypeScript adds types to JavaScript.This helps find errors early.It makes apps stronger and easier to grow.Interface and type are common in TypeScript.They both define how data looks.
At first, they seem alike.But they have important differences.Knowing these differences helps write good TypeScript code.Good code is clean and easy to change.

# What is an Interface?
An interface defines the structure of an object. It is commonly used with classes or to describe object shapes.

```interface User {
  name: string;
  age: number;
}
```

Interfaces are ideal for describing the shape of an object, especially when working with object-oriented programming.

# What is a Type?
A type is a type alias, which means it can represent not only object shapes but also union types, intersections, primitives, tuples, and more.

```type User = {
  name: string;
  age: number;
};
```
type is more flexible than interface and can be used to create complex types.