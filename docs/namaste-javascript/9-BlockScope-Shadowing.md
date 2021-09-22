---
sidebar_position: 10
---

# Episode 9 : Block Scope and Shadowing

### What is a block?

- Block aka _compound statement_ is used to group JS statements together into 1 group. We group them within {...}
- The purpose is to group multiple statments at a place where JS expects only 1 statement.

```js
//code example 1

if(true)some statement
```

But if we want to write more statements to execute after if condition; then:

```js
//code example 2

if(true){
    statement 1
    statement 2
    ...
}
```

- The {} block treats all the statements as one statement.
- The if doesnt have any curly braces in syntax.

### **BLOCK SCOPE**

- What are the variables and functions that can be accessed inside the block.

```js
//code example 3

{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);
console.log(b);
```

Outputs:

> 10

> Uncaught ReferenceError: b is not defined

- Behind the Scenes:

  - In the BLOCK SCOPE; we get b and c inside it initialized as _undefined_ as a part of hoisting (in a seperate memory space called block)
  - While, a is stored inside a GLOBAL scope.

- Thus we say, _let_ and _const_ are BLOCK SCOPED. They are stored in a separate mem space which is reserved for this block. Also, they can't be accessed outside this block.
  But var a can be accessed anywhere as it is in global scope.
- Thus, we can't access them outside the Block.

### **What is SHADOWING in JS?**

```js
//code example 4

var a = 100;
{
  var a = 10; //same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 10 instead of the 100 we were expecting. So block "a" modified val of global "a" as well.
// In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.
```

- If one has same named variable outside the block, the variable inside the block _shadows_ the outside variable.
- So, a is reassigned to 10. Since both refers to same memory space i.e GLOBAL SPACE. **This happens only for var**

### Instead of var let us use let

```js
//code example 5

let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b);
}

console.log(b);
```

Outputs:

> 20

> 100 // this was what we were expecting in this first place. Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100))

- In the Scope, we have b in two places. The b outside of the block is in _Script_ SCOPE (seperate memory space for let and const)
- The b inside the block is in _Block_ scope.
- Thus, when in Block scope, 20 is printed and 100 when outside.
- This concept is called "Shadowing".
- It is also true for _const_ declarations.

### Same logic is true even for functions

```js
const c = 100;
function x() {
  const c = 10;
  console.log(c);
}
x();
console.log(c);
```

Output:

> 10

> 100

### **What is Illegal Shadowing?**

```js
// code example 6

let a = 20;
{
  var a = 20;
}
```

Outputs:

> Uncaught SyntaxError: Identifier 'a' has already been declared

- We cannot shadow let with var. But it is valid to shadow a let using a let.
- However, we can shadow var with let.
- All scope rules that work in function are same in arrow functions too.
- Since var is function scoped, it is not a problem with the code below.

```js
// code example 7

let a = 20;
function x() {
  var a = 20;
}
```
