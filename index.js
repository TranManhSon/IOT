import mqtt from 'mqtt';
const client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", () => {
  client.subscribe("dotruong", (err) => {
    if (!err) {
      client.publish("iot", "test IOT");
    }
  });
});


client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  var id = message.toString()
  console.log(id)
  client.end();
});
