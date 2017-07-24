# Rock Paper scissors

## Project Details

This was a Rock Paper Scissors daily assignment from The Iron Yard. Because I was familiar with DOM manipulation, I was able to take assignment well beyond the scope of expectation.

### Things to know

This was a paired assignment with Jeff Irwin. Jeff and I initially built out the RPS game to be used with prompts and alerts. We worked through all the logic to make the game fully functional.

I decided to add the DOM manipulation later. The playerName function selects the input received from the player and prints it on the screen.

The various buttons, scores, choices, and messages are assigned to variables initially. The clear function sets both scores to 0 and updates them to the DOM. As the playToSelection value changes, the clear function is invoked. The clear function is also invoked if the rest button is clicked.

Each selection button has an event listener, which saves either 'rock,' 'paper,' or 'scissors' to the userChoice. Then the playGame function is invoked. The playTo variable is assigned to the value of the #play-to input. The getCompChoice function is run, selecting the computerChoice at random. If userChoice equals computerChoice, it's a tie. If the computerChoice beats the userChoice, the message is displayed accordingly, and the computerScore increments by 1 and updates to the DOM. If computerScore equals the playTo value, the computer wins and the clear function is invoked.

The else statement implies the user won, so the same logic is run for the user, as was for the computer. 
