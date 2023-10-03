const redis = require("redis");

const client = redis.createClient({
  url: "rediss://red-ckdreasiibqc73efrvf0:4BbyTJOjnbZP1wyry2GxpITIvNFRooQI@oregon-redis.render.com:6379",
});

client.on("connect", () => console.log("redis connected"));

const r_connect = client.connect();
