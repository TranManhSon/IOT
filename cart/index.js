
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
