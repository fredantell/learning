# Learning JS

This repo contains random exercises I have written in the process of studying
JS.  Often there are better solutions to the problem at hand, but I wanted to
practice using a specific approach.

## What is in the different directories?

###modalGallery

I put this together to practice absolute centering of an element inside a
parent div using CSS and some simple interaction using JS.

###rockPaperScissors

This is a simple RPS game.  I saw an original in a basic tutorial and it used
a lot of if/then statements, tying the data and the logic together.  I thought
it would be fun to write a new one and isolate the data in an object and keep
it separate from the flow.  I was also practicing using and understanding
closures at the time I wrote this.

###findPatternInText

This is a problem easily solved by regular expressions, but the point for me
was to gain practice using recursion to solve problems.  I had a lot of
diagnostic code in this to help me understand and visualize the call stack
and how it progressed throughout the operation.

###chooseYourAdventure

This was another refactor of a simple implementation that I ran into
when doing a tutorial on Codecademy.  They were using branched if statements
for everything and switch/case for multiple options.  Looking at this now,
I think my implememntation is a bit messy, but the point was to
practice creating some generalized functions.  I represented each question as
an object and gave it properties to describe how it should be handled by the
different functions.

# License

The contents of this repo are released under the [MIT License](https://github.com/oakmac/chessboardjs/blob/master/LICENSE).