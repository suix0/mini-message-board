const pool = require("./pool");

const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
};

const getMessage = async (messageId) => {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE messages.id = ($1)",
    [messageId]
  );
  return rows;
};

const addMessages = async (receiver, message) => {
  await pool.query(
    "INERT INTO messages (receiver, message) VALUES (($1), ($2))",
    [receiver, message]
  );
};

module.exports = { getMessages, addMessages, getMessage };
