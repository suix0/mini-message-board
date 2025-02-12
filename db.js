// Sample data
const messages = [
  {
    text: "Hi there!",
    to: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    to: "Charles",
    added: new Date(),
  },
  {
    text: "I wish I could turn back time.",
    to: "Mark",
    added: new Date(),
  },
  {
    text: "How have you been? I regret my choices",
    to: "Jean",
    added: new Date(),
  },
];

const appendData = async (data) => {
  // Add data of submission
  data.added = new Date();

  messages.push(data);
  console.log(messages);
};

module.exports = { messages, appendData };
