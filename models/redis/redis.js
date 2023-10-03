
const { createClient } = require('redis');

const client =  createClient({
  url: "rediss://red-ckdreasiibqc73efrvf0:4BbyTJOjnbZP1wyry2GxpITIvNFRooQI@oregon-redis.render.com:6379",
})
client.connect();


client.on("connect", () => console.log("redis connected"));

export const addMsg = async(message) => {
  let messageKey = Math.floor(Math.random() * 10);
  const expirationTimeInSeconds = 3 * 24 * 60 * 60; // 3 days in seconds
  client.setEx(messageKey,expirationTimeInSeconds,message)
    .then(()=>{
      console.log(`Message added successfully`);
    });
}

const r_connect = client.connect();
