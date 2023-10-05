
const { createClient } = require('redis');

const client =  createClient({
  url: "rediss://red-ckdreasiibqc73efrvf0:4BbyTJOjnbZP1wyry2GxpITIvNFRooQI@oregon-redis.render.com:6379",
})
client.connect();


client.on("connect", () => console.log("redis connected"));

export const addMsg = async(message) => {
  let messageKey = Math.floor(Math.random() * 10);
  await client.hSet('messages', messageKey, Buffer.from(message))
          .then(()=>{
            console.log(`Message added successfully`);
          });
}

const r_connect = client.connect();
