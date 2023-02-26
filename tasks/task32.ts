const current_users: string[] = ["alice", "bob", "charlie", "david", "eve"];
const new_users: string[] = ["charlie", "frank", "gary", "bob", "helen"];

for (const new_user of new_users) {
  const lowercase_new_user = new_user.toLowerCase();
  if (current_users.map(u => u.toLowerCase()).includes(lowercase_new_user)) {
    console.log(`Sorry, the username "${new_user}" is not available.`);
  } else {
    console.log(`The username "${new_user}" is available.`);
    current_users.push(new_user);
  }
}