---
---

Game Introduction
=================

_The X-Files Fan CCG_ is a two-player card game.  A game is made up of
turns, rounds, and periods:

* People take **turns** playing cards, with each card played changing
the constraints on which cards can be played next.
* A number of card plays make up a **round**.  At the end of each round
the cards are scored, and the round's score is added to the score of
the person who played the last card in the round.
* A **period** of play is the set of rounds that end with one or both
players' draw decks empty.  After the last round of a period, players
may adjust the content of their deck and then reshuffle their cards.
* A game lasts for three periods, and the winner is the player with
the highest score at the end of the last round of the last period.
Tie games are possible.

## Cards

There are a number of different types of cards in the game:

* **Environment** cards are played in a setup phase of the game, prior
to the first turn, and generally remain on the table throughout the
game.  The play of other cards can change the state of the environment
by affecting existing cards or changing the set of environment cards.
* Each round starts with the play of a **Case** or **Incident** card.
* Once the round has started, any number of **Following** cards can be
played.  Most following cards:
    * can be played only if already-played cards meet their requirements.
    * have a fixed point value (positive or negative contribution to
      the round's score), but **conflict** cards' values and effects
      are determined when played.
* A round ends either when someone plays a **Conclusion** card or when
the players' hands are full and they cannot legally play a card
following the ones already in the round.
* **Cover** cards are used so that other cards can be played in the
round face-down.  The cover card is played on top of the face-down
card, and remains there until the face-down card is turned or cards
are discarded at the end of the round.

_**Speculative:** There will likely be other card types, not yet
prototyped.  Ones that can be played during a turn, but which do not
become part of the round.  Ones that can be used outside the player's
turn, in response to other game occurrances._

## Decks

Before a game, each player assembles a number of decks from the cards
available in the set:

* A draw deck.  Most of the cards that the player will use, including
Case, Incident, Following, and Conclusion cards.  The players shuffle
their draw decks at the beginnning of each period.  Each card
indicates the maximum number of copies of that card that can be
included in the same draw deck.
* An environment deck.  At least three cards, environment-type only,
with no more than two cards that have identical all-capital portions
of their names.
* A cover deck.  Any number of any types of cover card the player
wants.  No need to shuffle the cover deck, as the player can take any
card from it as desired.  A player is _not_ required to let another
see their cover deck.
* A "sideboard" deck, of up to 13(????) cards.  A player can trade
cards between their draw deck and sideboard, one for one, between each
period of play.

_**Speculative:** At this point (before any play testing), I'm
thinking about using the number 13 a lot.  A hand size of 13 cards,
and a requirement that the draw deck have between 3x and 5x 13 cards
(39 to 65)._


## Set

_**Speculative:** This whole section...._

The set of cards will be created so that they could be produced in a
"traditional" collectible card game release.

A booster pack will be 13 cards, as follows:
* 2 cards randomly selected from the set's "rare" group
* 4 cards randomly selected from the set's "uncommon" group
* 7 cards randomly selected from the set's "common" group

A starter deck will consist of:
* a set of the (3) basic Environment cards.
* a full set of all cover cards.
* 39 fixed cards (fixed cards will occur only in starters; there will
be two separate, non-overlapping sets of fixed cards, 78 total)
* 13 randomly-selected cards (essentially, an booster)

The full set would then break down as:

```
  65 rare cards
  65 uncommon cards
  65 common cards
  39 cards in one fixed starter set
  39 cards in the other fixed starter set
   3 fixed environment cards
  16(??) cover cards
----
 292(????) cards
```

Although it could easily be adjusted by changing the size of the
rare/uncommon/common sets.

[Next &rarr; _Guide to Cards_](/xfiles-fan-ccg/rules/cards)
