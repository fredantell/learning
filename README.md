# Learning JS

This repo contains random exercises I have written in the process of studying
JS.  Often there are better solutions to the problem at hand, but I wanted to
practice using a specific approach.

## What is in the different directories?

###bootstrapWebsite

This is an example site built alongside of a tutorial.  The original author
wrote everything in html and used php includes.  It was a very well
organized project, but the downside of the approach was that none of the
markup was dynamic.  That meant data was mixed in with HTML.  It also
meant that if there was 10 objects that needed to be represented, then
the snippet was copy pasted 10 times to do so.

I rewrote the project in node.js using express.  I chose not to use a
templating engine and instead used plain vanilla JS to construct the markup.
The upshot was not being restricted to the conventions of a subsetted
templating language.  There is admittedly a bit less readability using
plain JS, but it's much more flexible and I think for now I prefer this
approach.

By using node it was also easier to split out the data from the markup
and segregate it within JSON.  Where I could I tried to make things
dynamic.  I'm happy with how it turned out and what I learned.  Going
forward I'd like to incorporate some of this knowledge into a
CRUD oriented app since this project didn't really require much
problem solving for back end data.

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