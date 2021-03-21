# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Melody Lo**

Time spent: **8** hours spent in total

Link to project: [memory game](https://pumped-twilight-raisin.glitch.me)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Alerts player when they make a mistake and displays how many tries they have left
- [x] Alerts player when they guess the correct sequence
- [x] Buttons are disabled until it's the player's turn (to prevent cheating)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

|                                      _player loses when time is up_                                      |
| :------------------------------------------------------------------------------------------------------: |
| ![time's up](https://cdn.glitch.com/abf70545-a6a3-4b66-ba8c-5d7478f63973%2Ftimes-up.gif?v=1616282167683) |

|                                   _player loses after third mistake_                                    |
| :-----------------------------------------------------------------------------------------------------: |
| ![mistakes](https://cdn.glitch.com/abf70545-a6a3-4b66-ba8c-5d7478f63973%2Fmistakes.gif?v=1616282173675) |

|                                          _player wins_                                           |
| :----------------------------------------------------------------------------------------------: |
| ![won 1](https://cdn.glitch.com/abf70545-a6a3-4b66-ba8c-5d7478f63973%2Fwon1.gif?v=1616282176898) |
| ![won 2](https://cdn.glitch.com/abf70545-a6a3-4b66-ba8c-5d7478f63973%2Fwon2.gif?v=1616282180500) |
| ![won 3](https://cdn.glitch.com/abf70545-a6a3-4b66-ba8c-5d7478f63973%2Fwon3.gif?v=1616282183370) |

| _new pattern every game_                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- |
| ![random patterns](https://cdn.glitch.com/abf70545-a6a3-4b66-ba8c-5d7478f63973%2Frandom-patterns.gif?v=1616283954635) |

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   - [math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
   - [breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)
   - [arrays](https://www.w3schools.com/js/js_arrays.asp)
   - [embed image in button](https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element)
   - [audio on click](https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click)
   - [restart audio](https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick)
   - [loop audio](https://www.w3schools.com/tags/att_audio_loop.asp)
   - [pass string to function](https://stackoverflow.com/questions/44438272/onclick-passing-string-as-parameter)
   - [tags](https://www.w3schools.com/TAGS/default.ASP)
   - [undefined](https://stackoverflow.com/questions/2647867/how-can-i-determine-if-a-variable-is-undefined-or-null)
   - [timer](https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown)
   - [stop setTimeout prematurely](https://stackoverflow.com/questions/8443151/how-to-stop-a-settimeout-loop)
   - [disable button](https://stackoverflow.com/questions/41176582/enable-disable-a-button-in-pure-javascript/41176769)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   > When I was trying to randomly generate a secret pattern, I couldn't figure out why my game would stop playing after a
   > few rounds. I overcame this issue by setting a breakpoint in the function where I created the secret pattern.
   > After debugging my code, I realized that the pattern not only contained invalid values (eg. 0), but also continued to
   > increase in size even after I started a new game.

   > The most time consuming challenge was finding bugs that either didn't occur all the time (despite performing the same actions) or only
   > occurred when the player did something out of the ordinary. One such bug showed up when the player entered the correct sequence,
   > followed by an incorrect button. This action confused the game into thinking that the player had both a correct and incorrect answer.
   > To solve this issue, I opted to cut the player off the moment they entered the right pattern.
   > I accomplished this by adding an alert that notified the player that they were correct. Dismissing the alert cued up the next clue sequence,
   > which effectively prevented the player from being able to make both a correct and incorrect answer. Another bug I encountered took place when
   > the player repeated the pattern while the clue sequence was still playing, essentially cheating their way to an easy win. This unexpected
   > behavior also messed up the the flow of the game, causing buttons to light up prematurely and sounds to play indefinitely. I solved this issue
   > by only enabling the buttons when it was the player's turn to repeat the pattern, making it impossible for the player to break the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   - How is the HTML file able to call functions from the JavaScript file without including a header file of some sort?
   - What separates JavaScript from languages such as Python, Java, or C++?
   - Why is the debugger built into the browser?
   - Why don't you need to import the libraries that you use?
   - What's the point of writing JavaScript in an HTML file when a separate JavaScript file already exists? In other words, what's the purpose of the script tag in HTML?
   - Does every image/audio file you use in your code need to have a web address to locate it? What if an image/audio file that I want to use does not have a web address (ie. a file located in the Downloads folder of my laptop)?
   - Why are multiline function definitions sometimes written inside function calls? Is this considered a standard/good practice in JavaScript?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   > If I had a few more hours, I would add a hint button for when the player gets stuck on what the next clue is. When the hint
   > button is selected, three game buttons light up and the player must execute the sequence based on the hint. A hint cannot be
   > used more than once in the same round and the player only gets three hints at the start of each game. I would also implement
   > a feature that allows the player to customize the game settings. The player can choose how long the secret pattern should be
   > (in the range 5-20), how many hints they get at the start of each game (in the range 0-5), how much time they get in each
   > round (in the range 3-200 seconds), and how long the clues are played (in the range 0.2-5 seconds). Lastly, I would perform
   > much more user testing to find as many hidden bugs as possible and try to resolve all or most of them. I already fixed a lot
   > of the bugs I did encounter, but I'm sure there could be more that I never thought of or even came across.

## License

    Copyright [Melody Lo]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
