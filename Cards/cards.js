var cards = [
  {
    "name": "Dana SCULLY",
    "episode": "01x00",
    "type": "environment",
    "drawValue": 2,
    "bio": "“You’re a medical doctor, you teach at the academy. You did your undergraduate degree in physics.”",
    "flavorText": "“I’m here to solve this case, Mulder, I want the truth.”",
    "imageFile": "danaScully-01x00.jpg",
    "imageReference": "01x00-d1944",
    "provides": [
      "FBI", "Agent", "MD", "ME", "religious", "scientist", "skeptic"
    ],
    "investmentText": "Agent of integrity",
    "investmentValue": 1
  },

  {
    "name": "Fox MULDER",
    "episode": "01x00",
    "type": "environment",
    "drawValue": 1,
    "bio": "“He’s an Oxford educated psychologist, who wrote a monograph on serial killers and the occult, that helped to catch Monty Props in 1988.”",
    "flavorText": "“The truth? I think those kids have been abducted.”",
    "imageFile": "foxMulder-01x00.jpg",
    "imageReference": "01x00-d2007",
    "provides": [
      "FBI", "Agent", "psychology", "behavioral criminology",
      "paranormal expertise", "believer"
    ],
    "investmentText": "On a mission",
    "investmentValue": 2,
  },

  {
    "name": "X-FILES",
    "episode": "01x00",
    "type": "environment",
    "drawValue": 2,
    "flavorText": "“the FBI’s most unwanted”",
    "imageFile": "xfiles-01x00.jpg",
    "imageReference": "01x00-d0509",
    "themes": [
      "Alien Encounters",
      "Gov Conspiracy",
      "Supernatural Phenomena",
      "Cryptozoology",
      "Law Enforcement"
    ]
  },

  {
    "name": "Fourth Dead in the Class of ’89",
    "episode": "01x00",
    "nameExtraStyles": "{'fontSize': '13px'}",
    "type": "case",
    "theme": [
      "Alien Encounter",
      "Law Enforcement"
    ],
    "pointValue": 5,
    "playOrdinality": null,
    "deckOrdinality": 3,
    "flavorText": "“How did she get there? What were those kids doing out there in the forest?”",
    "imageFile": "karenSwensonBody.jpg",
    "imageReference": "01x00-d0156",
    "description": [
      "Requires [believer].",
      "Provides [Homicide]."
    ],
    "establishesCircumstances": {
      "progress": true
    }
  },

  {
    "name": "#DF101364",
    "episode": "01x01",
    "type": "case",
    "theme": "Gov Conspiracy",
    "pointValue": 5,
    "playOrdinality": null,
    "deckOrdinality": 3,
    "flavorText": "“We got him but he’s gonna need a doctor... or something.”",
    "imageFile": "budahasWithBurns.jpg",
    "imageReference": "01x01-d0109",
    "description": [
      "Requires [FBI].",
      "Provides [Kidnapping]."
    ],
    "establishesCircumstances": {
      "progress": true,
      "opposition": true
    }
  },

  {
    "name": "With Their Liver Ripped Out",
    "nameExtraStyles": "{'fontSize': '14px'}",
    "episode": "01x02",
    "type": "case",
    "theme": [
      "Cryptozoology",
      "Law Enforcement"
    ],
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“Yeah, well, I’ve got this case that’s, out there.”",
    "imageFile": "bloodOnCarpet.jpg",
    "imageReference": "01x02-0242",
    "description": [
      "Requires [FBI].",
      "Provides [Homicide]."
    ],
    "establishesCircumstances": {
      "progress": true
    }
  },

  {
    "name": "Observation Changes Outcome",
    "nameExtraStyles": "{'fontSize': '13px'}",
    "episode": "01x00",
    "type": "conclusion",
    "drawValue": 4,
    "pointValue": 5,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“It was incredible.”",
    "imageFile": "billyMilesBrightLight.jpg",
    "imageReference": "01x00-d4107",
    "description": [
      "Requires [Right Place]."
    ],
    "requiresCircumstances": {
    }
  },

  {
    "name": "Vague Warning",
    "episode": "01x01",
    "type": "conclusion",
    "pointValue": 1,
    "playOrdinality": null,
    "deckOrdinality": null,
    "flavorText": "“Leave this case alone Agent Mulder.”",
    "imageFile": "deepThroatWarns.jpg",
    "imageReference": "01x01-d0511",
    "description": [
      "Requires [MULDER] with _Investment_ of +2 or less.",
      "Playable only immediately following a _Case_."
    ],
    "requiresCircumstances": {
    }
  },

  {
    "name": "We Don’t Know Anything!",
    "episode": "01x01",
    "type": "conclusion",
    "pointValue": 1,
    "playOrdinality": null,
    "deckOrdinality": 3,
    "flavorText": "“Let’s get out of here Mulder, as fast as we can.”",
    "imageFile": "weDontKnowAnything.jpg",
    "imageReference": "01x01-d4222",
    "description": [
      "Requires [SCULLY].",
      "Prevented by [Evidence]."
    ],
    "requiresCircumstances": {
      "progress": "not",
      "opposition": true
    }
  },

  {
    "name": "Inadequate Cell",
    "episode": "01x01",
    "type": "conclusion",
    "pointValue": 5,
    "playOrdinality": null,
    "deckOrdinality": 3,
    "flavorText": "“I look at this guy and I think, \"It ain't enough\".”",
    "imageFile": "inadequateCell.jpg",
    "imageReference": "01x01-4148",
    "description": [
      "Requires [Suspect]."
    ],
    "requiresCircumstances": {
      "progress": true,
      "jeopardy": "prev"
    }
  },

  {
    "name": "Definitely Not Human",
    "episode": "01x00",
    "type": "following",
    "drawValue": 2,
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“It’s probably a safe bet Ray Soames never made the varsity basketball team.”",
    "imageFile": "notANormalBody.jpg",
    "imageReference": "01x00-d1423",
    "description": "Provides [Body].",
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "Nasal Cavity Implant",
    "episode": "01x00",
    "type": "following",
    "drawValue": 1,
    "pointValue": 18,
    "playOrdinality": null,
    "deckOrdinality": null,
    "flavorText": "“However, does not account for small unidentified object found in subject’s nasal cavity. A grey metallic implant form...”",
    "imageFile": "nasalCavityImplant.jpg",
    "imageReference": "01x00-d1607",
    "description": [
      "Requires [Body], [ME].",
      "Provides [Evidence-physical]."
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "Evidence Lost",
    "episode": "01x00",
    "type": "following",
    "drawValue": 3,
    "pointValue": -20,
    "playOrdinality": 3,
    "deckOrdinality": "+",
    "flavorText": "“Damn it! The x-rays and pictures!”",
    "imageFile": "evidenceLostInFire.jpg",
    "imageReference": "01x00-d3143",
    "description": [
      "Requires [Evidence-physical].",
      "Negates all aspects of [Evidence-physical]-providing card(s) played earlier in this round."
    ],
    "requiresCircumstances": {
      "opposition": true
    },
    "establishesCircumstances": {
      "progress": "pass",
      "opposition": true,
      "jeopardy": "pass"
    }
  },

  {
    "name": "What are they?",
    "episode": "01x01",
    "type": "following",
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“Well, it can’t be aircraft. Aircraft can’t manoeuvre like that.” “What else could they be?”",
    "imageFile": "scullyMulderWatchCraft.jpg",
    "imageReference": "01x01-d1714",
    "description": "Provides [Sighting].",
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "I Saw It",
    "episode": "01x01",
    "type": "following",
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": null,
    "flavorText": "“And what about this other place you told me about, Yellow Base, where they hangar them.”",
    "imageFile": "mulderAndCraft.jpg",
    "imageReference": "01x01-d3326",
    "description": [
      "Requires [Sighting], [MULDER].",
      "Provides [Evidence-statement]."
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "Evidence Forgotten",
    "episode": "01x01",
    "type": "following",
    "pointValue": -10,
    "playOrdinality": 3,
    "deckOrdinality": "+",
    "flavorText": "“I did see something, but it’s gone, they took it from me, they erased it.”",
    "imageFile": "evidenceForgotten.jpg",
    "imageReference": "01x01-d3822",
    "description": [
      "Requires [Evidence-statement].",
      "Negates all aspects of [Evidence-statement]-providing card(s) played earlier in this round."
    ],
    "requiresCircumstances": {
      "opposition": true
    },
    "establishesCircumstances": {
      "progress": "pass",
      "opposition": true,
      "jeopardy": "pass"
    }
  },

  {
    "name": "Mulder Shares Confidence",
    "nameExtraStyles": "{'fontSize': '15px'}",
    "episode": "01x00",
    "type": "following",
    "drawValue": 5,
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“I was twelve when it happened. My sister was eight. She just disappeared out of her bed one night. Just gone, vanished. No note, no phone calls, no evidence of anything.”",
    "imageFile": "mulderSharesAConfidence.jpg",
    "imageReference": "01x00-d2751",
    "description": [
      "Requires [MULDER].",
      "70%)If player who played this card also plays the _Conclusion_ to end the round, then after determining score for the round, move this card to player’s side of [MULDER] and apply bonus to _Investment_ while it remains."
    ],
    "investmentText": "Trust in partner",
    "investmentValue": 1,
    "requiresCircumstances": {
      "progress": 2,
      "jeopardy": "not"
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass"
    }
  },

  {
    "name": "The Forest Controls Them",
    "nameExtraStyles": "{'fontSize': '15px'}",
    "episode": "01x00",
    "type": "following",
    "drawValue": 0,
    "pointValue": 15,
    "playOrdinality": null,
    "deckOrdinality": 3,
    "flavorText": "“That’s the reason the kids come to the forest, because the forest controls them and summons them there.”",
    "imageFile": "theForestControlsThem.jpg",
    "imageReference": "01x00-d3611",
    "description": [
      "Requires [believer].",
      "Provides [Right Place]."
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "Complicit Local LEO",
    "episode": "01x00",
    "type": "following",
    "drawValue": 4,
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": 4,
    "flavorText": "“I’m with the County Sheriff’s Department. You’re trespassing on private property here.”",
    "imageFile": "complicitSheriff.jpg",
    "imageReference": "01x00-d2202",
    "description": [
      "Requires [Law Enforcement].",
      "While in play, at least 3 {progress}-providing cards must be following before a _Conclusion_ may be played."
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "opposition": true,
      "jeopardy": "pass"
    }
  },

  {
    "name": "Paul Mossinger",
    "episode": "01x01",
    "type": "following",
    "pointValue": 5,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“I, er, work for the local paper.”",
    "imageFile": "paulMossinger.jpg",
    "imageReference": "01x01-d1241",
    "description": [
      "Requires [Gov Conspiracy].",
      "Provides [Mole Undercover]."
    ],
    "requiresCircumstances": {
      "opposition": true,
    },
    "establishesCircumstances": {
      "progress": "pass",
      "opposition": true,
      "jeopardy": "pass"
    }
  },

  {
    "name": "Caught Out",
    "episode": "01x01",
    "type": "following",
    "pointValue": -10,
    "playOrdinality": 2,
    "deckOrdinality": 3,
    "flavorText": "“Hi, I was just looking for you. I knocked, but I saw the door was open.”",
    "imageFile": "caughtOut.jpg",
    "imageReference": "01x01-d3630",
    "description": [
      "Requires [Mole Undercover].",
      "Provides [Mole Revealed]."
    ],
    "requiresCircumstances": {
    },
    "establishesCircumstances": {
      "progress": "pass",
      "opposition": null,
      "jeopardy": "pass"
    }
  },

  {
    "name": "Capture Inevitable",
    "episode": "01x01",
    "type": "following",
    "pointValue": "negative",
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“Hey, don’t go past the edge of the tall weeds.”",
    "imageFile": "captureInevitable.jpg",
    "imageReference": "01x01-3348",
    "description": [
      "Provides [Capture]",
      "80%)When played, move an {environment}_Character_ to this card’s location in the round. Return it if this card is negated. While it is with this card, new cards dependent on the _Character_ cannot be played, and already-played dependent cards do not score."
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "opposition": "pass",
      "jeopardy": true
    }
  },

  {
    "name": "Hostage Trade",
    "episode": "01x01",
    "type": "following",
    "pointValue": 10,
    "playOrdinality": null,
    "deckOrdinality": 2,
    "flavorText": "“Yeah, I’ve already seen where you get with tears and a sad story.”",
    "imageFile": "hostageTrade.jpg",
    "imageReference": "01x01-3953",
    "description": [
      "Requires [Capture], [*Uncovered]",
      "Negates [Capture]"
    ],
    "requiresCircumstances": {
      "jeopardy": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass"
    }
  },

  {
    "name": "Vague Encouragement",
    "episode": "01x01",
    "type": "following",
    "pointValue": "positive",
    "playOrdinality": null,
    "deckOrdinality": 3,
    "flavorText": "“As I said, I can provide you with information, but only so long as it’s in my best interest to do so.”",
    "imageFile": "vagueEncouragement.jpg",
    "imageReference": "01x01-d4420",
    "description": "When the round is over, determine the score ignoring this card. Then, if the score is negative, this card increases it to ++0.",
    "requiresCircumstances": {
      "progress": "prev",
      "opposition": "prev",
      "jeopardy": "prev"
    },
    "establishesCircumstances": {
      "progress": "pass",
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "Psych Profile",
    "episode": "01x02",
    "type": "following",
    "pointValue": 5,
    "playOrdinality": 2,
    "deckOrdinality": "+",
    "flavorText": "“The extraction of the liver is the most significant detail of these crimes. The liver possesses regenerative qualities…”",
    "imageFile": "psychProfile.jpg",
    "imageReference": "01x02-1141",
    "description": [
      "Provides [Right Place]."
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "Arrested",
    "episode": "01x02",
    "type": "following",
    "pointValue": 10,
    "playOrdinality": 2,
    "deckOrdinality": 4,
    "flavorText": "“Federal Agent, I'm armed. Proceed down the vent, slowly.”",
    "imageFile": "arrested.jpg",
    "imageReference": "01x02-1449",
    "description": [
      "Requires [Right Place]",
      "Provides [Suspect]"
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": "pass"
    }
  },

  {
    "name": "He Sees You",
    "episode": "01x02",
    "type": "following",
    "pointValue": -10,
    "playOrdinality": null,
    "deckOrdinality": 4,
    "flavorText": "“Oh, wait, I'm snagged on something. No, it's ok, I got it.”",
    "imageFile": "heSeesYou.jpg",
    "imageReference": "01x02-3420",
    "description": [
      "Provides [Evidence]"
    ],
    "requiresCircumstances": {
      "progress": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": true
    }
  },

  {
    "name": "Not Really Alone",
    "episode": "01x02",
    "type": "following",
    "pointValue": -10,
    "playOrdinality": null,
    "deckOrdinality": 4,
    "flavorText": "“Mulder, you must've gone out since Colton gave us the night off…”",
    "imageFile": "notReallyAlone.jpg",
    "imageReference": "01x02-3718",
    "description": [
      "Add --20 to the round's score unless a card is played between this card and the _Conclusion_ that removes {jeopardy}."
    ],
    "requiresCircumstances": {
      "jeopardy": true
    },
    "establishesCircumstances": {
      "progress": "pass",
      "opposition": "pass",
      "jeopardy": true
    }
  },

  {
    "name": "Too Close",
    "episode": "01x02",
    "type": "following",
    "pointValue": "negative",
    "playOrdinality": null,
    "deckOrdinality": 4,
    "flavorText": "“Err, that vent is six inches by about eighteen, even if a Reticulan could crawl through…”",
    "imageFile": "gotYourLeg.jpg",
    "imageReference": "01x02-3814",
    "description": [
      "Add --20 to the round's score unless a card is played between this card and the _Conclusion_ that removes {jeopardy}."
    ],
    "requiresCircumstances": {
      "jeopardy": "2prev"
    },
    "establishesCircumstances": {
      "progress": false,
      "opposition": "pass",
      "jeopardy": true
    }
  },

  {
    "name": "Disrupted Ambush",
    "episode": "01x02",
    "type": "following",
    "pointValue": "conflict",
    "playOrdinality": null,
    "deckOrdinality": 4,
    "flavorText": "“He's not gonna get his quota this year.”",
    "imageFile": "disruptedAmbush.jpg",
    "imageReference": "01x02-3846",
    "description": [
      "Pro: requires 2x[FBI]; {conflict}: player's choice 1 [Agent] + their arms.",
      "Anti: {conflict}: (#{jeopardy} -1) + player's arms.",
      "Success: provides [Suspect], ++10.",
      "Failure: chosen [Agent] disabled."
    ],
    "requiresCircumstances": {
      "jeopardy": true
    },
    "establishesCircumstances": {
      "progress": true,
      "opposition": "pass",
      "jeopardy": false
    }
  },


  //       cards to-do:
  //    Is there any way I can get it off my fingers quickly without betraying my cool exterior?
  //    Tooms' polygraph; requires believer, provides something
  //    maybe-fingerprint-match; something-something-evidence
];


var episodeTitles = {
  "01x00": "Pilot",
  "01x01": "Deep Throat",
  "01x02": "Squeeze",
  "01x03": "Conduit",
  "01x04": "The Jersey Devil",
  "01x05": "Shadows",
  "01x06": "Ghost in the Machine",
  "01x07": "Ice",
  "01x08": "Space",
  "01x09": "Fallen Angel",
  "01x10": "Eve",
  "01x11": "Fire",
  "01x12": "Beyone the Sea",
  "01x13": "Genderbender",
  "01x14": "Lazarus",
  "01x15": "Young at Heart",
  "01x16": "EBE",
  "01x17": "Miracle Man",
  "01x18": "Shapes",
  "01x19": "Darkness Falls",
  "01x20": "Tooms",
  "01x21": "Born Again",
  "01x22": "Roland",
  "01x23": "The Erlenmeyer Flask"
};

