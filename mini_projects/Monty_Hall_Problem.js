let wins = 0;
let losses = 0;

// Establishes the car and choice variables. This will hold which door is a car, and which choice is randomly chosen. This may also be the same door as the car, or it may not be.
let car = 0;
let choice = 0;

// Establishes 3 doors
let doors = 3;

function switch_function(choice, car, switch_boolean) {
  switch(switch_boolean) {
    case true:
      // If chosen door is the same as the door with the car.
      if (choice === car) {
        // If your chosen door is a car, and you switch, you automatically lose.
        losses += 1;
      } else {
        // If your chosen door is not a car, and you switch, you automatically win.
        wins += 1;
      }
      break;
    case false:
      // If chosen door is the same as the door with the car.
      if (choice === car) {
        // If your chosen door is a car, and you switch, you automatically win.
        wins += 1;
      } else {
        // If your chosen door is not a car, and you switch, you automatically lose.
        losses += 1;
      }
      break;
  }
}

function loop_function(switch_boolean) {
  // Resets wins and losses.
  wins = 0;
  losses = 0;
  
  // Runs this experiment 1000000 times. Can be run any number of times really, but a large number is a good idea.
  for (let i = 0; i < 1000000; i++) {
    
    // Gets a random door, and places a car behind it.
    car = Math.floor(Math.random()*doors);
    
    // Chooses a random door. This may or may not be the same door as the car.
    choice = Math.floor(Math.random()*doors);
    
    // If switching is turned on. Otherwise, they will keep their door.
    switch_function(choice, car, switch_boolean);
  }
  console.log(`Switching doors is: ${switch_boolean ? "enabled" : "disabled"}. Total wins: ${wins.toLocaleString()}  Total losses: ${losses.toLocaleString()}`);
}

// You can call this function with false for no switching doors, or true for switching doors.
loop_function(false);
loop_function(true);
