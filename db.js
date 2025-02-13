const { format } = require("date-fns");

// Sample data
const date = format(new Date(), "EEE, MMMM dd, yyyy, H:MM bb");
const messages = [
  {
    text: "Hi there!",
    to: "Amando",
    added: date,
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    to: "Charles",
    added: date,
    id: crypto.randomUUID(),
  },
  {
    text: "I wish I could turn back time.",
    to: "Mark",
    added: date,
    id: crypto.randomUUID(),
  },
  {
    text: "How have you been?",
    to: "Katsuragi",
    added: date,
    id: crypto.randomUUID(),
  },
];

const appendData = async (data) => {
  // Add data of submission
  data.added = format(new Date(), "EEE, MMMM dd, yyyy, H:MM bb");
  data.id = crypto.randomUUID();
  messages.push(data);
};

const getMessage = async (id) => {
  return messages.find((message) => message.id === id);
};

module.exports = { messages, appendData, getMessage };
