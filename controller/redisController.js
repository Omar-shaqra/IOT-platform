
const { createClient } = require('redis');

const client =  createClient({
  url: "rediss://red-ckdreasiibqc73efrvf0:4BbyTJOjnbZP1wyry2GxpITIvNFRooQI@oregon-redis.render.com:6379",
})
client.connect();
client.on("connect", () => console.log("redis connected"));

const getAllMsg = async (req, res) => {
    let messages = await client.hGetAll('messages');
    res.json({messages: messages});
}

module.exports = { getAllMsg }