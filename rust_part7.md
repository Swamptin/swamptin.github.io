# Rust part 7
## However you slice it...

Welcome back to another bumble along with some exercises. So we're currently at Chapter 4, exercise 5 'Trait bounds'. What are trait bounds I hear me ask? Well, it
turns out that previously when we'd been adding functionality to a type we'd been being too specific and not generic enough. It made doing it a little tedious. I
want this to work with i32 and i64, I need to write a function for both types. Whereas, if we're more generic and say "This works on Types that implement thing" it
becomes easier to write. Well, I guess it makes it less arduous, but you do need to wrap your head around the abstraction first. That and you need to know what
'trait' applies to what functionality you want. In the case of exercise 5 it's partial ordering. Which is like partial comparison, but different. It's the thing that
allows you to do the whole greater than/equal to stuff but with generic things. I would say I get this, but I don't really. I got the answer right in the exercise,
and that's important. I get that there are traits I can call on generic objects to add functionality. But I'm still not entirely sure I get it. Maybe I'm thinking
it's more complicated than it actually is. Let's move on to exercise 04.06 instead.

So in this section we're doing the other thing that makes computing work, string manipulation... or maybe just a clarification about the differences between `&String`
and `&str` and why it's better to use `&str`. The answer being you're just saying "This is where the string starts, and you care about this many bits of it." rather
than "Here is the exact location to the characters. It is this long and is now owned by you". So I can definitely see the benefit of using &str more than &String. As
it happens, that kinda all that the section is about. Letting you know that when you see a 'string slice' what it means is an &str reference to a place in memory
with a length attached. Thus you get a reference. The actual exercise here was trivial, change the return types from &String to &str. But the explanation was very
good. It goes into more detail in the next section about why you can do that. This then implies we can call whatever &str method we want on an &String and it'll just
work. Sure enough, that's the way it works. Handy.



[Home](README.md)

