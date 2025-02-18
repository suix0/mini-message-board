const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR (255) NOT NULL,
  receiver VARCHAR (255) NOT NULL,
  date VARCHAR (255) NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP, 'Month DD, YYYY at HH24:MI AM')
);

INSERT INTO messages (message, receiver)
VALUES 
('I wish I could turn back time...', 'Mark'),
('How are you?', 'Katsuragi'),
('I wish I could see you play before you retire', 'Steph Curry');
`;

async function main() {
  console.log("seeding");
  const client = new Client(argv[0]);
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
