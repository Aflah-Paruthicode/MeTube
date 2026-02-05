const names = [
  "Aflah",
  "Muhsin",
  "Fawas",
  "Anees",
  "Shahid",
  "Pranav",
  "Hashif",
  "Mridhul",
  "Nidhin",
  "Sharhan",
  "Rishal",
  "Devika",
  "Ashique",
  "Amar",
  "Ashikk",
  "Siddique",
  "Rasna",
  "Akshay",
  "Govind",
  "Hanish",
  "KrishnaDev",
  "Vipin Raj",
  "Hashir",
  "Jasim",
  "Jaseel",
  "Hisham Paloli",
];

export function generateRandomNames() {
  return names[Math.floor(Math.random() * names.length)];
}

let date = new Date();

const messages = [
  "hi guys 👋",
  "good morning ☕",
  "wonderful 🙂",
  "happy " + date.getDay + " everyone 😁",
  "discipline equels freedom 🚀",
  "my favorite video ❤️",
  "what 🤔",
  "hi",
  "hello",
  "favorite for me too",
  "wooww 😍",
  "whatt",
  "where are you bud ?",
  "rainny here ☔",
  "👋👋",
  "its gonna be cool 😂",
  "i didnt understood 😵‍💫",
  "time is " + date.getTime + " here 🕓",
  "whyy ??? ",
  "i am batman 🦇",
  "im iron man 🦸",
  "hiiiiiii 🙋‍♂️",
  "favorite 🤍🤍",
  "im confused 🥺",
  "ehhehhehhe 🤣🤣",
  "hahaha",
];

export function generateRandomMessages() {
  return messages[Math.floor(Math.random() * messages.length)];
}
