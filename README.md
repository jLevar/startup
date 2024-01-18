# Supreme Snail Speedway

## Specification Deliverable

### Elevator Pitch

Snail racing is the next big thing. With this snail racing application, you will be collaborating with your teammates from around the world to have your snails pull your team's crate to the end first. These races tend to take *hours*, so the opportunity is yours to swing the odds in your favor! With this application, you will be able to watch the race in real-time and take action to put your team in front. 

[Full Concept](early-concept/idea.md)

### Design
![Mockup Pg. 1](early-concept/mock1.JPG)
![Mockup Pg. 2](early-concept/mock2.JPG)

### Key features
- Display of current snail race standings
- Collaboration with fellow users in a competitive setting
- Poses users with strategic decisions to try and best help their team
- Ability to interact with the webpage and participate in the game
- Secure login over HTTPS
- Data is persistently stored 

### Technologies

The required technologies will be implemented in the following ways:

- **HTML** - Three HTML Pages. One for login, one for showing the race, and one for hiring beetles. Links between pages at the top of the screen.
- **CSS** - Styling for the webpage to make it look presentable. 
- **JavaScript** - Allow for interactive elements that allow users to log in, move their snail, and hire beetles.
- **Service** - Backend will handle things such as:
  - Calculating at what time each team will finish
  - Validating user requests to move snails or hire beetles
  - Updating the database to carry out user requests
  - Pulling from the database to show users the current state of the race
- **DB/Login** - Will store user's credentials, including their balance, as well as the number of snails in each position, and the distance each team has left in the race.
- **WebSocket** - Each client will be regularly updated with the current state of the race.
- **React** - The HTML, CSS, and Javascript will be ported to and wrapped up in React.
