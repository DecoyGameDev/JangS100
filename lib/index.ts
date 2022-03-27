export default function lib() {
    // create array that holds js library commands
    const commands = ["libCreate", "unRemove", "deleteCommands"];
    // create function that returns a array named commands
    function libCreate() {
        return commands;
    }
    return true;
  }