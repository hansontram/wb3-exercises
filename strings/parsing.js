function parseAndDisplayName(fullName) {
  let space = fullName.indexOf(" ");
  let firstName = fullName.substring(0, space);
  let lastName = fullName.substring(space + 1);
  console.log("Name name: ", fullName);
  console.log("First name: ", firstName);
  console.log("Last name: ", lastName);
  console.log("")
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");