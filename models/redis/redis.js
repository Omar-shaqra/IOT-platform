const { createClient } = require("redis");

const client = createClient({
  url: "rediss://red-ckdreasiibqc73efrvf0:4BbyTJOjnbZP1wyry2GxpITIvNFRooQI@oregon-redis.render.com:6379",
});
const r_connect = client.connect();

client.on("connect", () => console.log("redis connected"));

const addMsg = async (topic, message) => {
  await client.hSet("messages", topic, Buffer.from(message)).then(() => {
    console.log(`Message added successfully`);
  });
};

module.exports = { addMsg };
