X-Files Fan CCG
================

**NON-COMMERCIAL**, fan-created, collectible-style card game based on
_The X-Files_, which is Trademark and
[Copyright &copy; by](http://www.imdb.com/title/tt0106179/business)
Twentieth Century Fox Film Corporation.  This game is being produced
independently from, and in no way endorsed by or affiliated with 20th
Century Fox.  Also, it is completely unrelated to the
_[The X-Files Collectible Card Game](https://wikipedia.org/wiki/The_X-Files_Collectible_Card_Game)_
produced in 1996-97 by [US Playing Card Company(https://wikipedia.org/wiki/United_States_Playing_Card_Company).


The game is currently very early in development.  Follow its progress
and evolution on Twitter
[@XFilesFanCCG](https://twitter.com/XFilesFanCCG).

At the moment, the card set is defined by the
[JSON-format](https://wikipedia.org/wiki/JSON) data file
[`Cards/cards.js`](https://github.com/gleneivey/xfiles-fan-ccg/blob/master/Cards/cards.js).

To view the cards,
[clone](https://help.github.com/articles/cloning-a-repository/) this
repository to your computer, then use Open File in your web browser to
find and select the file `Cards/cards.html`.  `cards.html` contains
the JavaScript code that renders the card images from data in
`cards.js`, and `cards.css` contains the web browser layout rules that
`cards.html` depends on.

So far, card layout is being done only using the Chrome browser
(version 60) on Ubuntu Linux.  It's likely they'll look right in other
versions of Chrome and Firefox, with a reasonable chance they'll look
OK in Opera or Safari.  When the set grows and becomes more stable
(after some play testing) this site will host "release" PDF files of
the cards that can just be printed.
