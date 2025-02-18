const { Client } = require("pg");

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
  const client = new Client({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
