const redis = require("redis");

const client = redis.createClient({
  url: "rediss://red-ckdreasiibqc73efrvf0:4BbyTJOjnbZP1wyry2GxpITIvNFRooQI@oregon-redis.render.com:6379",
});

client.on("connect", () => console.log("redis connected"));

export const addMsg = async(message) => {
  let messageKey = Math.floor(Math.random() * 10);
  const expirationTimeInSeconds = 3 * 24 * 60 * 60; // 3 days in seconds
  client.setex(messageKey,expirationTimeInSeconds,message, () => {
    console.log(`Message added successfully`);
  });
}

const r_connect = client.connect();
