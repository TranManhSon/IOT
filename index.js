
//   // });

// // client.on("message", (topic, message) => {
// // // message is Buffer t
// // console.log(message.toString());
// // client.end();
// var getInfor = document.getElementById("get_infor");

// getInfor.addEventListener('click', async function () {
//   const orderId = 1;
//   const url = 'http://3.1.202.106:8080/goods/filter?id=' + orderId;
  
// try {
//   const response = await fetch(url, { mode: 'no-cors' });
//   var data = response.json()
//   console.log(data)
// } catch (error) {
// console.error(`Download error: ${error.message}`);
// }
// });
async function testf () {
  const orderId = 1;
  const url = 'http://3.1.202.106:8080/goods/filter?id=' + orderId;
  let header = new Headers();

  header.append('Access-Control-Allow-Origin', '*');
  header.append('Access-Control-Allow-Credentials', 'true');

  console.log(header)
  
  try {
      const response = await fetch( url, {
          headers: header,
      });
      var data = await response.json()
      console.log(data)
  } catch (error) {
      console.error(`Download error: ${error.message}`);
  }
}

// testf()