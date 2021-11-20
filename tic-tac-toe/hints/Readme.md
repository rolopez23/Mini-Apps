# Hints: Tic Tac Toe
## Topics:
The titles for each hint topic is listed below. Before you start the challenge, review this list of hint titles so that if you get stuck, you know what hints are available to you.

- Basic File Setup
- Initial Board Setup
- Event Listener Not Working
- Alternate between X and O
- Implement the rules of Tic Tac Toe
- Resetting the Game
- Separation of Concerns

If you are looking at these hints, it means you are struggling to meet the basic requirements. Below is a process you can follow to achieve the goals of the basic requirements. The hints are organized in a way that lets you ignore hints not related to your current step.




## Initial Board Setup
- Within index.html make a 3x3 table
- Inside app.js, add a click event listener for each square on the board.
- When a square is clicked, add an X to that square.

## Event Listener Not Working
- It's best to place the script tag for your app.js file just before the closing tag of your body (at the end of your index.html file) with all of your HTML above the script tag.
- A better approach is to listen for a DOM-Ready event and only add event listeners for the board when this event fires.

## Alternate between X and O

- Instead of placing an X each time the board is clicked, create a variable that keeps track of which player's turn is next. A boolean works but other options work too.
- After you place an X or O, swap the state of this variable for the next play.

## Implement the rules of Tic Tac Toe

- Before placing an X or O, ensure the clicked board square is empty. If the position is already occupied, don't place an X or O and do not move on to the next player's turn.
- After each play, look for 3 in a row, either diagonally, horizontally and vertically. Also be sure to check to see if the board is full.
- If either condition is met, display a message and do not allow any additional plays.

## Resetting the Game
- Add a button  and a corresponding event listener inside app.js. When clicked, reset the state of the player (X vs. O) and clear the board. Don't forget to clear the message too.

## Separation of Concerns
- Don't rely on the DOM to tell you if a square is occupied. Rather, use an object to track which player is where and ask that object if the next play is possible (the next play is being considered each time a click event fires on one of the squares). When you attempt to make a play, the function should report if the play was allowed.
- Don't modify the player turn inside the event handler. Rather, store this state in an object that encapsulates state and behavior (toggling player turn) and invoke that function before switching player turns. Use the information from the previous step to determine the appropriate course of action.
- Don't manipulate the DOM inside the event handler. Instead, write a function that places an X or O at a specific location and call that function from the event handler if the play is allowed. Obtain the appropriate value (X vs. O) from the object that is tracking player turns.