const { format } = require("date-fns");

// Sample data
const date = format(new Date(), "EEE, MMMM dd, yyyy, H:MM bb");
const messages = [
  {
    text: "Hi there!",
    to: "Amando",
    added: date,
  },
  {
    text: "Hello World!",
    to: "Charles",
    added: date,
  },
  {
    text: "I wish I could turn back time.",
    to: "Mark",
    added: date,
  },
  {
    text: "How have you been?",
    to: "Jean",
    added: date,
  },
];

const appendData = async (data) => {
  // Add data of submission
  data.added = format(new Date(), "EEE, MMMM dd, yyyy, H:MM bb");

  messages.push(data);
  console.log(messages);
};

module.exports = { messages, appendData };
