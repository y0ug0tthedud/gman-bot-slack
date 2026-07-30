require("dotenv").config();
const axios = require("axios");
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
app.command("/gman-catfact", async ({ ack, respond }) => {
  await ack();
const intros = [
  "*The G-Man adjusts his tie, unblinking.*",
  "*He pauses for exactly three seconds.*",
  "*The frozen world hums faintly as Gman adjusts his tie with deliberate precision. He doesn't blink.*",
  "*He pauses, staring through you like you're a mildly interesting spreadsheet.*"   
];

  try {
    const intro = intros[Math.floor(Math.random() * intros.length)];
    const response = await axios.get("");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/gman-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `...\nLatency: ${latency}ms` });
});
app.command("/gman-fact", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();

  const facts = [
    "The Civil Protection mask is based on the soviet PMG mask.",
    "Counter-Strike began as Half-Life: Counter-Strike.",
    "Half-Life was built on a heavily modified Quake engine.",
    "Gordon Freeman was originally Ivan The Space Biker."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  const latency = Date.now() - start;

  await respond({
  
  });
});
app.command("/gman-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/gman-ping - Check bot latency
/gman-catfact - Get a cat fact
/gman-fact - Get a random fact about The half-life franchise`
  });
});
(async () => {
  await app.start();
  console.log("This is beneath me.");
})();