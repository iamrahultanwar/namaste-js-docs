---
sidebar_position: 2
title: Episode 1 - Execution Context
---
# Episode 1 : Execution Context

### Everything in JS happens inside the execution context. 

Assume execution context to be a big box where everything takes place. It has 2 components in it:
- <strong>Memory : </strong>The place where all the variables and functions are stored as (key:value) pairs. Memory component is also known as <em>variable environment</em>.
- <strong>Code : </strong>The place where code is executed one line at a time. Code component is also known as <em>Thread of Execution</em>

### JS is a synchronous single-threaded language. 
- By single threaded, we mean JS can only run 1 command at a time
- By synchronous single threaded, we mean it can run 1 command at a time, <em>in a specific order</em>
