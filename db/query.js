const pool = require("./db");

const getMessages = async () => {
  const messages = await pool.query("SELECT * FROM messages;");
  return messages;
};

const printMessages = async () => {
  const { rows } = await getMessages();
  console.log(rows);
};

printMessages();
