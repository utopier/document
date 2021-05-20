////// Handbook 
//// 1.Basic Type
// Boolean
let isDone: boolean = true;
// Number
let demical: number = 11;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let str: string = 'typescript';

// Array
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// Tuple
let myTuple:[string, number] = ['typescript', 0];

// Enum
enum Color {
    Red, 
    Green, 
    Blue
    };
let c: Color = Color.Green;
console.log(c);
console.log(Color[2]);

// Any
let notSure: any =4;
notSure = 'typescript';
notSure = false;

// Void
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;

// Null & Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Object
// Type Assertions

//// 2.Interfaces
// First Interface
// Optional Properties
// Readonly properties
// Function Types
// Indexable Types
// Extending Interfaces
// Hybrid Types
// Interfaces Extending Classes

//// 3.Function
// Function Types
// Optional and Default Parameter
// Rest Parameters
// this
// Overloads

//// 4.Literal Type
// Literal Narrowing
// String Literal Types
// Numeric Literal Types

//// 5.Unions and Intersections
// Union Types
// Unions with Common Fields
// Discriminating Unions
// Intersection Types
// Mixins via Intersections

//// 6.Classes
// Classes
// Inheritance
// Public, private, and protected modifiers
// Readonly modifier
// Parameter properties
// Accessors
// Static Properties
// Abstract Classes
// Constructor functions
// Using a class as an interface

//// 7.Enum
// Numeric enums
// String enums
// Heterogeneous enums
// Computed and constant members
// Union enums and enum member types
// Enums at runtime
// Enums at compile time
// Reverse mappings
// const enums
// Ambient enums

//// 8.Generics
// Working with Generic Type Variables
// Generic Types
// Generic Classes
// Generic Constraints
// Using Type Parameters in Generic Constraints
// Using Class Types in Generics

////// Handbook References
//// 1.Advanced Types
//// 2.Utility Types
//// 3.Decorators
//// 4.Declaration Merging
//// 5.Iterators and Generators
//// 6.JSX
//// 7.Mixins
//// 8.Modules
//// 9.Module Resolution
//// 10.Namespaces
//// 11.Namespaces and Modules
//// 12.Symbols
//// 13.Triple-Slash Directives
//// 14.Type Compatibility
//// 15.Type Inference
//// 16.Variable Declaration

////// Declaration Files

////// Project Configuration