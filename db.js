const { format } = require("date-fns");

const getDate = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEE, MMMM dd, yyyy, HH:mm a");
  return formattedDate;
};

// Sample data
const messages = [
  {
    text: "I wish I could turn back time.",
    to: "Mark",
    added: getDate(),
    id: crypto.randomUUID(),
  },
  {
    text: "How have you been?",
    to: "Katsuragi",
    added: getDate(),
    id: crypto.randomUUID(),
  },
  {
    text: "I wish I could see you play someday!!!",
    to: "Steph Curry",
    added: getDate(),
    id: crypto.randomUUID(),
  },
];

const appendData = (data) => {
  // Add data of submission
  data.added = getDate();
  data.id = crypto.randomUUID();
  console.log(messages);
  messages.push(data);
};

const getMessage = (id) => {
  return messages.find((message) => message.id === id);
};

module.exports = { messages, appendData, getMessage };
