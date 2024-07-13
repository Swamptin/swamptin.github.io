# Rust Learning Part 5

## Ah yes... this is fun

We have finally reached the end of Chapter 3 in the book/exercises. To say 03.12 is a proper challenge is to undersell exactly what's going on. The authors trust you to make a good go of this. They provide you with a short description of what is needed and the tests that need to pass. No more. So this is actually greenfield coding.

I mean, I say greenfield, obviously I'll be copying wholesale from earlier exercises, but that's expected. We've spent the last 11 parts of the chapter building up a Ticket class. Well, a Ticket module which can be used to create a Ticket object. And the request is to create a module for an Order. The order has a `product name`, a `unit_price` and a `quantity`. How this differs from the Ticket is that we use different types and we have different constraints.

Right. Time to get busy. I quickly copy over some things and build up the code. I then run the tests just to see what tests fail. The answer... well, none of them run. Turns out you can't use `is_empty()` on an i32. And there were other errors, but let's start there. I mean, it kinda doesn't make sense, except that i32 is not a string. It will never be a string, so there has to be an equivalent method to make sure you're not passing null, right? Maybe I'm thinking about this wrong, so I head to the definition for i32. And I am thinking about it wrong. There's nothing there, but that's irrelevant, because the description is a far better clue: "Unit price must be greater than zero". So that's the check we'll put in then, less than or equal to zero, panic. Done.

I add the method that it says it needs, the 'total' method. Simple enough, quantity * unit_price. And we run our tests. We're still failing, but now it's only two errors, which is really one error. I'm checking the size of product_name wrong. If you remember from [part 4](rust_part4.md) I said that I thought there was two ways to get the size of something using `std::mem::size_of` ? Well, seemingly I'm doing this slightly wrong still. This does not surprise me, but it  is an annoyance. Let's go back to that bit of the book/documentation and see if I can't figure out what I'm doing wrong here. 
There it is. I'm using the wrong method. So it turns out that while this book only makes reference to `size_of` there is an alternate method when you're testing the size of a specific value. Why? Because a value and a type are two different things. So what I need to use is `std::mem::size_of_val(&value)`. Of course I didn't cop that I needed to pass it a reference the first time, the compiler taught me that. See, we should love the compiler errors, they point out the little hiccups. The whole 'this is when a reference should be used' thing is still very new to me. I come from Bash/Python/Java style worlds. I just fling stuff around everywhere without regard to proper etiquette. I'll have to learn how to do it correctly, but with practice comes habit.

Okay, so we've got it running the tests. Now we can start seeing what behaviour I need to fix, where is my default approach cutting corners... run it and... 1 test failed. Test_long_product_name failed first run. But of  the 5 tests, it's the only one that failed. That's pretty good going in my book. Of course it's a problem with my size_of_val stuff... that there is sods law. The thing you're least comfortable with is the thing that breaks. Only until it becomes the thing you're more comfortable with, I guess? Let's open up our tests file and see what's going on.
```Rust
#[test]
#[should_panic]
fn test_long_product_name() {
    Order::new("a".repeat(301), 3, 2999);
}
```

This is what's failing... not a big issue. What's my check for it?
```Rust
if std::mem::size_of_val(&product_name) > 300 {
            panic!("Product name cannot exceed 300 bytes")
        }
```
Well... that should work surely? But there's obviously something I'm missing. Yes there is... I'm vastly over-complicating it. There is of course a `String.len()` but I had assumed that would return the number of characters, not the size in bytes. But based off the tests they're one and the same thing? Anyway, let's change that to just be a .len() check and run my tests... and we pass! Chapter 3 is done.

This was a bit of a slog. I'm hoping it gets a little faster. I'd rather not have a single chapter take up 3 blog posts, but I guess we might have that again, and maybe worse. But we're through it. Onwards and upwards. What I learned here was a lot of Rust syntax and attitudes towards objects. A fair amount of low level programming I normally don't think about and a whole bunch of personal approaches that I need to reconsider. Onwards we go, Chapter 4: Traits. 


[home](README.md)