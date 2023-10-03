const mqtt = require("mqtt");
const { addMsg } = require("./models/redis/redis");
const options = {
  protocol: "https",
  host: "mqtt.eclipseprojects.io",
  port: 1883,
};
const client = mqtt.connect(options);
console.log(client);

client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message}`);
  addMsg(message);

});

client.publish(
  "cluster/messages/node7",
  "Hello, HiveMQ!",
  { retain: true },
  (err) => {
    if (err) {
      console.error("Failed to publish message:", err);
    } else {
      console.log("Message published with retain flag set to true");
    }
  }
);
س

client.subscribe("location/gps/vehicle1");
client.subscribe("my_topic");
client.subscribe("temp");

setInterval(() => {
  client.publish("my_topic", "22", { topicAlias: 1 });
}, 5000);
