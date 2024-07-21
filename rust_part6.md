# Rust part 6 
## But is this a good trait?

Chapter 4 of [100 Exercises to Learn Rust](https://github.com/mainmatter/100-exercises-to-learn-rust) is about traits. Traits are essentially the things you can do
to a given object. So in order to see if Object1 is equal to Object2, we need to create an is_equal() trait. In exercise 04.01 we need to write a function that'll
check if a number is even. Simple enough logic. Let's see how we can actually implement what they're asking for. So as is to be expected for this stage it's not as
straight forward as the book section lets you think. Admittedly at the time of writing this, it's late in the day and I'm tired, so maybe I'm not seeing what's right
in front of my face. Might be a good time to pause and come back to it later.

So it's a new day. I'm sat in the laundromat waiting on a couple of washes to be done. Now is as good a time as any to get some coding done. So let's see whats going
wrong. We can't seem to get it to correctly implement the is_even function. It's not recognising it at all. Some searching about traits and how specifically to
implement them and I'm getting new and more interesting errors. I do the suggested corrections from the compiler but it's still not working. Except now it's
panicking at run-time. Which means I'm *something* right on some level anyway. A few days later I finally get to sit back down with the code. I run it again, reread
the chapter in the book. Make my code look exactly like that in the book, and then wonder if maybe I need to reference `self.{some property}/2 == 0` to get the code
to run.

The eagle eyed among you will immediately spot the issue I'm coming up against. In software to test the remainder, which is what we're testing in the case of even or
odd, we don't divide by two. We modulus by two. A search to see if there's some parameter I need happened to throw up the correct check and I immediately spotted the
issue. One change to the is_even() function to check `self % 2 == 0` and sure enough the code passed. I haven't coded regularly in a long time. I'm well aware that
all programming is either maths or string comparison. Doesn't matter how complex it is, that's the end result, but I'm very much out of practice it seems.

So we now progress through 04.02 to 04.05 with relative ease. Read the descriptions and make some silly errors. Like when they ask you to write a 'PartialEq' you
assume the function is of the same name, it's not. When I went back through the chapter the function is called 'eq'. And they're testing compound comparisons. But
not, as I'd assume thing is like thing2 OR thing3 is like thing 4. What they wanted, as the eq function might imply is a fully equal test. So lots of && checks
rather than ||. Like I say, simple mistakes. But we progress. As I'm starting exercise 5 however, life once again forces me to finish up.

These few sections have been a great way for me to learn about assumptions I'm prone to making. We're not yet half way through Chapter 4 and while I've found parts
very frustrating, I've also learned a lot. Or at least relearned a lot. Once this chapter is complete I'm 50% through the book/100 exercises. I'm looking forward to
hitting such a milestone. I'm still enjoying this, and I can see how bits of it will make sense and mean I can apply Rust to more and more projects going forward.
I'll finish out my TODO app before too long, don't you worry.

[Home](README.md)

