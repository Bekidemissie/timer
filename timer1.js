/*  
    
  Bereket Yehualashet  Alarm timer code cohort june 12,2023
edge cases.
 1 No numbers are provided: 
  It should just not beep at all and end immediately since no beeps should get scheduled.
 2 An input is a negative number:
 3 Ignore/skip any numbers that are negative.
  We can't schedule anything in the past.
  An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number. */

const beeps = () => process.stdout.write('\x07'); // it's function to give us beeps sound
const inputArgs = process.argv // input from the user
  .filter(time => !isNaN(time))  // skip if it's not a number
  //Ignore/skip any numbers that are negative.
  .filter(time => time >= 0);

inputArgs.forEach((time) => {
  setTimeout(() => {
    beeps(); //  beeps should get scheduled.
    process.stdout.write(`Setting timer for ${time} seconds \n`) // it show for user tell the the setting timer in secounds 
  }, time * 1000);
});

