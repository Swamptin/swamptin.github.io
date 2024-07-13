# Rust Learning Part 3

## Exercise 03 Continued...

So we rejoin this effort at Exercise 03 section 07, setters and getters. These are things that I feel like I should know. I have experience writing these things.
I've written them in Java. And yet, my first attempts aren't right. We return to the (Rust By Example)[https://doc.rust-lang.org/rust-by-example/] book to figure out what to do. I muddle around and eventually recognise I need to pass a reference to self, so we send `&self` off to save the day. Copy and paste the validation and run a check, and it passes.

And here's the rub, I've recognised I will need to do validation more than once. So by rights I should refactor it... So that's now another rabbit hole to fall down. I spent some time trying to work this out but, as I haven't learned how to reset the 'passed' flag, the tests no longer run. Mercifully I am forced to learn to walk before I can run. Let's just move on.

In [Part 2](rust_part2.md) I aluded to the many and varied ways I can scupper myself without meaning to. Above getting preoccupied with doing it right caused me to spend time thinking about something that I couldn't test, even if I had managed to implenent it. And as we take on Sections 8 and 9, the Stack and Heap respectively we come across yet another example.

03.08 begins it's notes with the below comment at the top of the file:
```
// TODO: based on what you learned in this section, replace `todo!()` with
// the correct **stack size** for the respective type
```
Below are a couple of tests. The idea being you use the sizeof() method to make the tests pass. The bit that caught me and made me take a second look was the reference to learning something in this section.

I have a bad habit. One I am working on addressing. I see a problem, I jump headlong in and expect that I can figure it out as I bumble along. In many cases this is perfectly acceptable. Where it isn't, really, is when you jump into the companion aspect of a learning tool and completely miss the folder labelled "BOOK". Turns out I've been missing some very *very* helpful notes and explainations of the concepts I've been learning.

If you do look at my Github repo for this, please don't judge me on the code for the first 3 and a half chapters. Or do, I mean, it's a pretty massive case of tunnel vision. Ah well, onto 03.09 and learning about the heap. Except this time, I __will__ learn first.

[Home](README.md)
