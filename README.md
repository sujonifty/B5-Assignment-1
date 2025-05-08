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


# 🆚 Interface vs Type: Key Differences
| Aspect  | Interface                      | Type Alias                      |
|---------------------------------------|---------------------------------|-----------------------------------|
| 🔁 Extension                        | Supports `extends` for inheritance | Uses intersection (`&`) for combining types |
| 🔄 Declaration Merging              | ✅ Supported                     | ❌ Not supported                  |
| 🧱 Use Cases                        | Best for object and class structures | Best for primitives, unions, and functions |
| ⚙️ Performance                      | Slightly more optimized during compile | More flexible for complex type definitions |


#  ✅ When Should You Use What? 

| Scenario                                          | Use          |
|---------------------------------------------------|--------------|
| Defining object shapes or class contracts         | `interface`  |
| Need union or intersection types                  | `type`       |
| Declaration merging is necessary                  | `interface`  |
| Representing primitives or functions              | `type`       |
| Working with external libraries (often preferred) | `interface`  |

* Both interface and type are essential tools in TypeScript, and knowing when to use each can significantly improve your code quality. While interface is great for describing object-oriented designs, type offers more flexibility and works well with complex types.

A smart TypeScript developer understands how to leverage both effectively, depending on the need.


# 🔑 What is the use of the keyof keyword in TypeScript? Provide an example.:

# Introduction:
* TypeScript is well-known for making JavaScript safer, more structured, and easier to manage in large codebases. Among its powerful features, one hidden gem is the keyof keyword. It might look small, but it plays a huge role in making your code type-safe and predictable.

In this blog, we’ll explore what keyof is, why it's useful, and how you can apply it in real-world code.

# What is keyof?
The keyof keyword in TypeScript is used to extract the keys of an object type and turn them into a union type.

* Example:

```
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
```
In this example, PersonKeys is a union type of the keys of Person, meaning you can only use either "name" or "age" where this type is expected.

# Why Use keyof?
* To create type-safe dynamic property access

* To build generic, reusable utility functions

* To limit user inputs to known object keys

* To avoid bugs caused by typos or incorrect keys


# Example:
```
type Product = {
  name: string;
  price: number;
};

type ProductKeys = keyof Product; // "name" | "price"
```

You can use keyof to write type-safe functions that only accept valid keys of an object.

# Common Use Cases:
* Form builders: Validate user input against allowed field names.

* UI components: Dynamically render properties based on keys.

* Reusable utilities: Access values without compromising type safety.

* Type-safe configuration objects.


The keyof keyword is a small but powerful feature in TypeScript that helps ensure our code only accesses valid object properties. By combining it with generics, you can build flexible and safe utilities that adapt to any object type.

When we're building large applications or working with dynamic data, keyof can be your best friend to prevent runtime errors and improve developer experience.