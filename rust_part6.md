# Rust part 6
## But is this a good trait?

Chapter 4 of [100 Exercises to Learn Rust](https://github.com/mainmatter/100-exercises-to-learn-rust) is about traits. Traits are essentially the things you can do to a given object. So in order to see if Object1 is equal to Object2, we need to create an is_equal() trait. In exercise 04.01 we need to write a function that'll check if a u32 number is even. Simple enough logic. Let's see how we can actually implement what they're asking for.