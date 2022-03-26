// create a function named input that asks for users input then returns it
function input() {
    var userInput = prompt("Enter the file name (must be in same directory)");
    var file = new File(userInput);
    // Check for error
    if (file.error) {
        console.log(file.error);
    } else {
        // Read the file
        var contents = file.read();
        // Check for error
        if (file.error) {
            console.log(file.error);
        } else {
            // Print the contents of the file
            console.log(contents);
        }
    }
}