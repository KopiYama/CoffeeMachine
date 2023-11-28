// Import classes
import Tiger from './Tiger.js';
import Wolf from './Wolf.js';

// fight function as provided
const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

// Instances of Tiger and Wolf
const myTiger = new Tiger();
const myWolf = new Wolf();

// Fight result
const result = fight(myTiger, myWolf);

// Export all the required components
export { fight, myTiger, myWolf, result };

console.log(result);