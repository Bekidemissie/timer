
/*
The user can press b and it should beep right away
The user can input any number from 1 to 9 
The user can use ctrl + c to exit the program

*/
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
 // this beep function to give us sound 
const beep = () => process.stdout.write('\x07');
// this arrow function is beeps sound and only work when the key much 'b'
process.stdin.on('data', key => {
    if (key === 'b') {
        beep();
    }
    // this condtion work only one to nine to set alarm 
    else if (key >= 1 && key <= 9) {
        process.stdout.write(`Setting timer for ${key} seconds...\n`);
        setTimeout(() => {
            beep();
        }, key * 1000);
    }
    //  this condtion to  exit the program when the user enetr ctrl + c 
    else if (key === '\u0003') {
        process.stdout.write("Thanks for using me, ciao!\n");
        process.exit();
    }
});