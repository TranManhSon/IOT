
// var mqtt;

// hostname = "mqtt://test.mosquitto.org"
// var clientId = "webio4mqttexample";
// mqttClient = new Paho.MQTT.Client(hostname, clientId);
// mqttClient = new Paho.MQTT.Client(hostname, clientId);
// mqttClient.onMessageArrived = MessageArrived;
// mqttClient.onConnectionLost = ConnectionLost;
// Connect();

// function Connected() {
// 	console.log("Connected");
// 	mqttClient.subscribe(subscription);
// }



// import mqtt from 'mqtt';
// npm install mqtt --save

// const client = mqtt.connect("mqtt://test.mosquitto.org");

// client.on("connect", () => {
//   client.subscribe("presence", (err) => {
//     if (!err) {
//       client.publish("presence", "Hello mqtt");
//     }
//   });
// });

// client.on("message", (topic, message) => {
//   // message is Buffer
//   console.log(message.toString());
//   client.end();
// });



// let client;

// function connectMQTT() {
//     const brokerUrl = "mqtt://test.mosquitto.org"
//     const clientId = 'mqtt_client'
//     var top = "iot"

//     client = mqtt.connect(brokerUrl, { clientId: clientId });

//     client.on('connect', function () {
//         console.log('Connected to MQTT broker');
//         // Subscribe to a topic if needed: client.subscribe('your-topic');
//     });

//     client.on('message', function (topic, message) {
//         console.log(`Received message on topic ${topic}: ${message.toString()}`);
//         // Handle incoming message
//     });

//     client.on('error', function (error) {
//         console.error('MQTT Error:', error);
//     });
// }

// connectMQTT()

// function publishMessage() {
//     if (client && client.connected) {
//         const topic = 'iot'; // Thay thế bằng topic bạn muốn gửi tin nhắn đến
//         const message = 'Hello, MQTT!'; // Thay thế bằng nội dung tin nhắn của bạn
//         client.publish(topic, message);
//         console.log(`Published message to topic ${topic}: ${message}`);
//     } else {
//         console.error('Not connected to MQTT broker');
//     }
// }

// publishMessage()

// const client = mqtt.connect("mqtt://test.mosquitto.org");

// client.on("connect", () => {
//   client.subscribe("dotruong", (err) => {
//     if (!err) {
//       client.publish("dotruong", "test mqtt");
//     }
//   });
// });

// client.on("message", (topic, message) => {
//   // message is Buffer
//   console.log(message.toString());
//   client.end();
// });



// const apiGetAllPl = 'http://localhost:3000/api/user/addplaylist'

// function addElementPl(count) {
//       const htmls = `<div class="item col-lg-12 col-md-12 col-sm-12">
//                         <div class="image-product col-lg-1 col-md-1 col-sm-12 img-fluid">
//                             <img src="./images/Rectangle 10.png" alt="">
//                         </div>
//                         <div class="name-product col-lg-4 col-md-4 col-sm-12">
//                             <span>Tên sản phẩm</span><br>
//                             <p>Mô tả</p>
//                         </div>
//                         <div class="detail-product col-lg-7 col-md-7 col-sm-12">
//                             <span>259.000</span>
//                             <p>2</p>
//                             <span>259.000</span>
//                         </div>
//                         <i class="fas fa-times"></i>
//                     </div>`
//         document.getElementById("cart")[count].innerHTML = htmls;
//         count++;
//         html = `<i class="fa-solid fa-plus"></i>`
//         if(!document.getElementsByClassName("cart")[count]) {
//           return
//         }
//         return document.getElementsByClassName("cart")[count].innerHTML = html;
// }
// var getCart = document.getElementById("home")
// console.log(document.getElementById(getCart))
// var getInfor = window.document.getElementById("get_infor");
// console.log(getInfor)

// getInfor.addEventListener('click', async function () {
//     const orderId = 1;
//     const url = 'http://3.1.202.106:8080/goods/filter?id=' + orderId;
  
//     try {
//         const response = await fetch(url);
//         var data = response.json()
//         console.log(data)
//         console.log(getCart)
//         addElementPl(1)
//     } catch (error) {
//     console.error(`Download error: ${error.message}`);
//     }
// });
