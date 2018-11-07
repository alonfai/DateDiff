import DateManger from "./dateManager";

const stdin = process.openStdin();

stdin.addListener("data", data => {
  const input = data.toString().trim();
  if (!input) {
    return;
  }
  try {
    const instance = new DateManger(input.toString().trim());
    console.log(`${instance.printOutput()}`);
  } catch (e) {
    console.log(`An exception has occured with message => ${e}`);
  }
});
