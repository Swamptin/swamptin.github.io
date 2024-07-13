# Rust Learning Part 4

## Let's slow down...

At the end of the last post I'd had a rude awakening and been reminded why I should always attempt to walk before I even consider moving even remotely more hastily. A jog to catch the bus seemingly leaves me oblivious to detail at times. I have learned to love lists as a coping mechanism, but there are better ways, I'm almost certain of it. On the plus side I have recognised me doing this, so let's rectify it and continue.

Section 9 refers to the heap. I've managed somehow to pass the `size_of` problem for the stack, but to say I understand it is... well, not true. I've passed the tests for section 8, read the chapter bit on section 8, and moved on to section 9. This is where it all goes a bit like hitting my head against a brick wall for me. As i read it, there were two different ways one can call `size_of`. I keep thinking you call size_of(type), but you can't. That's not how it works, so I do some reading, and some learning. It can only be called as `std::mem::size_of::Thing()`. Alright, thems the rules, we can go from here. We were told that usize is a type that's tied to the size of your system architecture, 32-bit or 64-bit, which makes sense. So the next section we've to do a call for `size_of::usize()` to get the size of our Ticket type, right? That's worked... except it hasn't.

So some concepts are difficult to get your head around. I got that string on the stack is a usize, I missed that it's actually 3 usize values. One for each thing that Rust stores on the stack (a pointer, the capacity, and the length). This is easily fixed by multiplying our usize by three. Okay, so now we need to think about this Ticket object. It contains 3 strings, which is 3 * 3 plus the thing itself, so that's 12 right? Let's try 12. But when I run the test it fails again. And the frustration builds.

Here is where the Rust error system kind of comes into it's own. I've been learning how to read it while I'm fumbling through these problems. It is pretty clear, tells you the line you want, what the error is... and in the case of tests, tells you what the left and right side values are at compile time. This is very useful, but far to easy to game. My output from 03.09 was giving me a result of 96, but the left side was 72. So... well, 96/12 = 8. 8 * 9 gives me 72. So I now know the answer. But, and here's what I want to know... Why don't I have to consider the object itself? It's constituent parts, okay, but if we have an object of type Ticket called Speeding it's created and popped on the stack. Why doesn't that get factored in? 

The answer is.... because it's not useful. So a quick search put me onto a [Stack Overflow Question](https://stackoverflow.com/questions/49185337/c-why-doesnt-sizeof-include-the-address-size-of-an-object-instance) for this very question but in C++. In that short thread someone asks a similar question to me and gets a rather beautifully concise response:
```
> From what I understand, if you create an instance of A, you create a 64-bit address and the data immediately follows that address in memory.

No. If you create an instance of A, you create an instance of A. That's it.

That object's address then tells you where that object is. If you obtain that that address (with `&`, as shown) and save it into a pointer, then the pointer variable itself takes up some space, sure. But otherwise, no.

`sizeof` gives you the size of an object. Not the size of an object, plus the size of a pointer.

There is no need for the size of a pointer to be added automatically. That would actually be really annoying, because you'd have to keep subtracting it all the time to get `sizeof` to do something useful.

I can't think of a single use case for getting the combined size of an object, and the size of a pointer to that object, in a single number.
```
Well that explains that, so let's keep moving. Make the tests pass, and keep plodding along. 03.10 is about references and 11 is about destructors. So we'll be through it an onto something else in no time. 

Sure enough the Destructors chapter really just explains how they work and where they are called. How they fit in terms of scope in Rust and what happens when you pass a variable from one function to the next. It's pretty obvious, as you read it, that it's good to have an understanding of it, it'll help you understand what bugs Rust aims to avoid, but do I need to know this day to day, nah. Just an overall understanding is enough. 

As frustrating as I've found this latter half of the chapter, and I've found it very frustrating and at times tough, it's really fun. Do I understand the stack vs the heap... I mean, maybe? Probably not, but certainly a little better than I used to. And exactly how much of this will I need to know in real life? Maybe not a lot... However, not to spoil part 5 but, it's gotten fun again. I'm back looking forward to learning from this book and, I'm sure plenty of people will agree, that is the most effective way to learn. 

[home](README.md)