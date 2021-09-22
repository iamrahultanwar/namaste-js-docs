---
sidebar_position: 7
---

# Episode 6: Undefined vs Not Defined

- In first phase (mem alloc) JS assigns each variable to a placeholder called _undefined_
- _undefined_ is when memory is allocated for the variable, but no value is assigned yet.
- If an object/variable is not even declared/found in mem alloc phase, and tried to access it then it is _Not defined_

> When variable is declared but not assigned value, its current value is undefined. But when the variable itself is not declared but called in code, then it is not defined.

```js
console.log(x);
var x = 25;

console.log(x);
console.log(a);
```

> undefined <br/>
> 25 <br/>
> Uncaught ReferenceError: a is not defined

- JS is a loosely-typed / weakly-typed language. It doesn't attach variables to any datatype. We can say var a = 5, and then change the value to bool (a = true) or string
  (a = 'hello') later on.
- **Never** assign _undefined_ to a variable manually. Let it happen on it's own accord.
