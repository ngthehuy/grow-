// $('.benefit-img').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:true,
//     dots:false,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });
//bai tap the duc //
$(function () {
  $(".list-product-fitness").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
// san-pham //
$(function () {
  $(".list-product").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
// index//

  $(function() {
    $(".list-product-home").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
  
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
    });
  
// $$(".desc-item").click(function(){
//   $(".desc-item").addClass("active");
// });
// $(".desc-item").click(function(){
// $(".desc-item").each(function(i,e){
//   console.log(e);
//   let event = e;
// event.click(function(){
// console.log(event);
// });
// });
// });

// let allItem = document.querySelectorAll(".desc-item");
// allItem.forEach((item) => {
//   item.onClick = function(){
//     item.addClass("active")
//   }
// });

//CALORIES TOOL
const calculatorBmrTdee = function () {
  let gioiTinh = "";
  let chieuCao = 0;
  let tuoi = 0;
  let canNang = 0;
  let cuongDo = 0;

  let caloGiamCanNhe = 0;
  let caloGiamCan = 0;
  let caloGiamCanNhanh = 0;

  let caloTangCanNhe = 0;
  let caloTangCan = 0;
  let caloTangCanNhanh = 0;

  if ($("#radio-gender-nam").is(":checked")) gioiTinh = "nam";
  else gioiTinh = "nu";

  chieuCao = $("#input-chieu-cao").val();
  tuoi = $("#input-tuoi").val();
  canNang = $("#input-can-nang").val();

  if ($("#radio-van-dong-it").is(":checked")) cuongDo = 1.2;
  else if ($("#radio-van-dong-nhe").is(":checked")) cuongDo = 1.375;
  else if ($("#radio-van-dong-vua").is(":checked")) cuongDo = 1.55;
  else if ($("#radio-van-dong-nhieu").is(":checked")) cuongDo = 1.725;
  else cuongDo = 1.9;

  //Áp dụng công thức theo Nam/Nữ
  let bmr = 0;
  if (gioiTinh == "nu") bmr = 655 + 9.6 * canNang + 1.8 * chieuCao - 4.7 * tuoi;
  else bmr = 66 + 13.7 * canNang + 5 * chieuCao - 6.8 * tuoi;

  let tdee = bmr * cuongDo;

  //Làm tròn các số liệu
  bmr = Math.round(bmr);
  tdee = Math.round(tdee);

  //Tính mức độ giảm cân
  caloGiamCanNhe = tdee - 250;
  caloGiamCan = tdee - 500;
  caloGiamCanNhanh = tdee - 1000;

  //Tính mức độ tăng cân
  caloTangCanNhe = tdee + 250;
  caloTangCan = tdee + 500;
  caloTangCanNhanh = tdee + 1000;

  //Kiểm tra nếu nhập đủ các thông tin thì hiển thị các chỉ số
  if (chieuCao > 0 && canNang > 0 && tuoi > 0) {
    //Hiển thị lên màn hình
    $("#label-standard-bmr").html(bmr);
    $("#label-standard-tdee").html(tdee);
    $("#strong-standard-calories").html(tdee);

    //Hiển thị mức độ giảm cân
    $("#label-giam-can-nhe").html(caloGiamCanNhe);
    $("#label-giam-can").html(caloGiamCan);
    $("#label-giam-can-nhanh").html(caloGiamCanNhanh);

    //Hiển thị mức độ tăng cân
    $("#label-tang-can-nhe").html(caloTangCanNhe);
    $("#label-tang-can").html(caloTangCan);
    $("#label-tang-can-nhanh").html(caloTangCanNhanh);
  }
  //Ngược lại nếu nhập chưa đủ các thông tin thì hiển thị chỉ số 0
  else {
    //Hiển thị lên màn hình
    $("#label-standard-bmr").html(0);
    $("#label-standard-tdee").html(0);
    $("#strong-standard-calories").html(0);

    //Hiển thị mức độ giảm cân
    $("#label-giam-can-nhe").html(0);
    $("#label-giam-can").html(0);
    $("#label-giam-can-nhanh").html(0);

    //Hiển thị mức độ tăng cân
    $("#label-tang-can-nhe").html(0);
    $("#label-tang-can").html(0);
    $("#label-tang-can-nhanh").html(0);
  }
};

//Gán sự kiện cho các control tính chỉ số BMR và TDEE
$(
  "#radio-gender-nam, #radio-gender-nu, #input-chieu-cao, #input-tuoi, #input-can-nang"
).on("input", function () {
  calculatorBmrTdee();
});

//Gán sự kiện cho các radio cường độ vận động
$(".calories-tool [name='radio-van-dong']").on("input", function () {
  calculatorBmrTdee();
});
//BMI
let startCarousel = () => {
  console.log(">>>Check run carousel");
  $(".bmi-review-project").owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
};

// Sản phẩm dành cho mấy đứa gầy.
let arrThin = [
  {
    id: 1,
    name: "Sữa Natumil",
    img: "assets/img/milk/milk1.jpg",
    desc: "Sữa cho người gầy giúp tăng cân hiệu quả",
  },
  {
    id: 2,
    name: "Nhân hạt óc chó",
    img: "assets/img/milk/download.jpg",
    desc: "có nhiều chất béo giúp tăng căng nhanh",
  },
  {
    id: 3,
    name: "Sữa óc chó TH true NUT",
    img: "assets/img/milk/milk2.jpg",
    desc: "sữa óc chó có lượng chất béo cao",
  },
  {
    id: 4,
    name: "Phô mai con bò cười Vinamilk",
    img: "assets/img/milk/pho-mai.jpg",
    desc: "Sản phẩm chứa nhiều chất béo",
  },
  {
    id: 4,
    name: "Nhân hạt óc chó",
    img: "assets/img/milk/download.jpg",
    desc: "Sản phẩm chứa nhiều chất béo",
  },
];

// Sản phẩm dành cho mấy đứa mập.
let arrFat = [
  {
    id: 1,
    name: "Sữa hạt nhân Bio",
    img: "assets/img/milk/milk4.png",
    desc: "Sữa có lượng chất béo thấp",
  },
  {
    id: 2,
    name: "Gạo lứt đen",
    img: "assets/img/san-pham/gao-lut-den/gao.png",
    desc: "Bổ sung lượng chất xơ và Vitamin B2 cao",
  },
  {
    id: 3,
    name: "Bánh gạo giòn vị chocolate",
    img: "assets/img/san-pham/banh-gao-gion/chocolate.png",
    desc: "Bổ sung calo và giảm chất béo",
  },
  {
    id: 4,
    name: "Búa gạo lứt đen",
    img: "assets/img/san-pham/gao-lut-den/bun.png",
    desc: "Bổ sung lượng chất xơ và Vitamin B2 cao",
  },
];
// Sản phẩm dành cho mấy đứa bình thường.
let arrNormal = [
  {
    id: 1,
    name: "Bột rau má",
    img: "assets/img/milk/rau-ma.jpg",
    desc: "Thanh nhiệt cơ thể",
  },
  {
    id: 2,
    name: "Sữa chua Vinamilk",
    img: "assets/img/milk/sua-chua.jpg",
    desc: "hỗ trợ tiêu hóa",
  },
  {
    id: 3,
    name: "Bánh gạo mix hạt trái cây",
    img: "assets/img/san-pham/banh-gao-gion/mix-hat-trai-cay.png",
    desc: "Lượng calo và chất xơ vừa đủ cho người giữ cân",
  },
  
];

let male = false;
let female = false;
let bmi = 0;

const handleBMI = () => {
  let height = $(".input-height").val();
  let weight = $(".input-weight").val();
  let bmi = weight / (height * height);
  bmi = bmi * 10000;
  let kq = bmi.toFixed(2);
  console.log(">>>Check bmi: ", kq);
  handleCheckBMI(kq);
};

const handleCheckBMI = (bmi) => {
  if (bmi <= 18.5) {
    $("#number-bmi-result").html(bmi);
    $("#review-bmi-result").html("Chỉ số BMI ở trên cho thấy bạn đang bị gầy");
    $(".number-bmi").css("background-color", "#00ffff");
    
  } else if (bmi > 18.5 && bmi <= 24.9) {
    $("#number-bmi-result").html(bmi);
    $("#review-bmi-result").html(
      "Chỉ số BMI ở trên cho thấy bạn đang bình thường"
    );
    $(".number-bmi").css("background-color", "#80ff00");
   
  } else if (bmi > 25 && bmi <= 29.9) {
    $("#number-bmi-result").html(bmi);
    $("#review-bmi-result").html(
      "Chỉ số BMI ở trên cho thấy bạn đang bị thừa cân"
    );
    $(".number-bmi").css("background-color", "orange");
   
  } else if (bmi >= 30 && bmi <= 34.9) {
    $("#number-bmi-result").html(bmi);
    $("#review-bmi-result").html(
      "Chỉ số BMI ở trên cho thấy bạn đang bị béo phì"
    );
    $(".number-bmi").css("background-color", "red");
   
  } else if (bmi >= 35) {
    $("#number-bmi-result").html(bmi);
    $("#review-bmi-result").html(
      "Chỉ số BMI ở trên cho thấy bạn đang bị béo phì nghiêm trọng"
    );
    $(".number-bmi").css("background-color", "violet");

  }
};

$(".btn-checked").click(function () {
  $(".bmi-review-project").html("");
  handleBMI();
});
// reset //
$(".btn-reset").click(function(){
  clearCode();
  $(".bmi-review-project").html("");
  $("#number-bmi-result").html("0");
  $(".number-bmi").css("background-color", "#cefad3");
  $("#review-bmi-result").html("Hãy nhập thông tin phía trên để tính BMI");
});
// let resetBMI = document.querySelector('.btn-reset');
// resetBMI.addEventListener("click", function(){


// });


const clearCode = () => {
  $(".input-height").val("");
  $(".input-weight").val("");
  $(".check-male").prop("checked", false);
  $(".check-female").prop("checked", false);
};

const handleReviewProject = (bmi) => {
  console.log("Check bmi ở review", bmi);
  if (bmi <= 18.5) {
    $(".bmi-review-project").trigger("destroy.owl.carousel");
    arrThin.forEach((item) => {
      document.querySelector(
        ".bmi-review-project"
      ).innerHTML += `<div class="item">
        <div class="card" style="min-width: 290px">
          <img src=${item.img} class="card-img-top" alt="..." style="width: 100%;height:290px" />
          <div class="card-body" style="min-height:165px;">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text" style="min-height:48px">
              ${item.desc}
            </p>
            <a href="#" class="btn btn-primary">mua ngay</a>
          </div>
        </div>
      </div>`;
    });
    startCarousel();
  } else if (bmi > 18.5 && bmi < 25) {
    $(".bmi-review-project").trigger("destroy.owl.carousel");

    arrNormal.forEach((item) => {
      document.querySelector(
        ".bmi-review-project"
      ).innerHTML += `<div class="item">
      <div class="card" style="min-width: 290px">
      <img src=${item.img} class="card-img-top" alt="..." style="width: 100%;height:290px" />
      <div class="card-body" style="min-height:165px;">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text" style="min-height:48px">
              ${item.desc}
            </p>
            <a href="#" class="btn btn-primary">Mua ngay</a>
          </div>
        </div>
      </div>`;
    });
    startCarousel();
  } else if (bmi >= 25) {
    $(".bmi-review-project").trigger("destroy.owl.carousel");

    arrFat.forEach((item) => {
      document.querySelector(
        ".bmi-review-project"
      ).innerHTML += `<div class="item">
      <div class="card" style="min-width: 290px">
      <img src=${item.img} class="card-img-top" alt="..." style="width: 100%;height:290px" />
      <div class="card-body" style="min-height:165px;">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text" style="min-height:48px">
              ${item.desc}
            </p>
            <a href="#" class="btn btn-primary">Mua ngay</a>
          </div>
        </div>
      </div>`;
    });
    startCarousel();
  }
};

$(".male-wrap").click(function () {
  console.log(">>>Check onclick");
  $(".check-male").prop("checked", true);
  male = true;
});

$(".female-wrap").click(function () {
  console.log(">>>Check onclick");
  $(".check-female").prop("checked", true);
  female = true;
});

// index
// let banner = () => {
//   $(".owl-carousel-banner").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: false,
//     navText: [
//       '<i class="fa-solid fa-caret-left"></i>',
//       '<i class="fa-solid fa-caret-right"></i>',
//     ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       1000: {
//         items: 1,
//       },
//     },
//   });
// };
// banner();

// scroll bar //
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
    console.log("true");
  } else {
    scrollToTopBtn.style.display = "none";
    console.log("flase");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const scrollNavRight = document.querySelector(".nav-right");
var scrollHeight = document.documentElement.scrollHeight;
var windowHeight = window.innerHeight;
var scrollLengthToBottom = scrollHeight - windowHeight;
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 20 ||
    (document.documentElement.scrollTop > 20 &&
      document.documentElement.scrollTop < scrollLengthToBottom - 500)
  ) {
    scrollNavRight.style.position = "fixed";
    scrollNavRight.style.top = "170px";
    scrollNavRight.style.right = "54px";
  } else if (scrollLengthToBottom - document.documentElement.scrollTop <= 500) {
    scrollNavRight.style.position = "relative";
    scrollNavRight.style.top = "0px";
    scrollNavRight.style.right = "0px";
  }
});

// hieu ung gio hang //

let iconShop = document.querySelector(".nav-shopping");
let cartTab = document.querySelector(".cart-tab");
let remove = document.querySelector(".remove");
let iconDel = document.querySelector(".del-cart");
let listProductHTML = document.querySelector(".list-product-home");
let listCartHTML = document.querySelector(".list-cart");
let listCartSpan = document.querySelector(".icon-cart span");
let listProduct = [];
let cart = [];

iconShop.addEventListener("click", () => {
  cartTab.classList.toggle("show-cart");
});
remove.addEventListener("click", () => {
  cartTab.classList.toggle("show-cart");
});
iconDel.addEventListener("click", () => {
  cartTab.classList.toggle("show-cart");
});

// const addDataToHTML = () => {
//   listProductHTML.innerHTML = "";
//   if (listProduct.length > 0) {
//     listProduct.forEach((product) => {
//       let newProduct = document.createElement("div");
//       newProduct.classList.add("item");
//       newProduct.classList.add("card");
//       newProduct.dataset.id = product.id;
//       newProduct.innerHTML = `
        
//         <a href="#" class="info-product">
//             <div class="img-product">
//             <img src="${product.image}" alt="">
//         </div>
//         <span>${product.name}</span>
//         </a>
//         <div class="btn-buy">
//             <a href="" class="btn btn-info-product"><i class="fa-light fa-circle-dollar"></i>${product.price}.000 VND</a>
//             <a class="btn btn-success add-product" onclick="function hi(){handleBtnClick(${product.id})};hi()"><i class="fa-regular fa-cart-shopping "></i>Thêm vào giỏ hàng</a>
//         </div> 
       
   
//         `;
//       listProductHTML.appendChild(newProduct);
//     });
//   }
// };

// let cartProduct = [];

// const handleBtnClick = (id) => {
//   let product = listProduct.find((item) => id === item.id);

//   if (product) {
//     let existingProduct = cartProduct.find((item) => item.id === id);

//     if (existingProduct) {
//       existingProduct.quantity++; // Tăng số lượng nếu sản phẩm đã tồn tại trong giỏ hàng
//     } else {
//       cartProduct.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới vào giỏ hàng
//     }

//     // Cập nhật giao diện người dùng
//     updateCartUI();
//   }
// };

// const updateCartUI = () => {
//   listCartHTML.innerHTML = ""; // Xóa nội dung giỏ hàng để cập nhật lại
//   cartProduct.forEach((item, index) => {

//     const count = item.quantity;
//     if(count != 0){

    
//     const itemHTML = `
//       <div class="item">
//         <div class="img-item">
//           <img src="${item.image}" alt="">
//         </div>
//         <div class="name">
//           ${item.name}
//         </div> 
//         <div class="price">
//           ${item.price}.000 VND
//         </div>
//         <div class="quantity">
//           <span class="minus" data-index="${index}">-</span>
//           <span class="count">${count}</span>
//           <span class="plus" data-index="${index}">+</span>
//         </div>
//       </div>
//     `;
//     listCartHTML.innerHTML += itemHTML;}
//   });

//   $(".item").each(function () {
//     const index = $(this).find(".minus").data("index");
//     $(this)
//       .find(".minus")
//       .on("click", function () {
//         if (cartProduct[index].quantity > 0) {
//           cartProduct[index].quantity--;
//           $(this).siblings(".count").text(cartProduct[index].quantity);
//           if(cartProduct[index].quantity == 0){
//             updateCartUI() ;
//           }
//           // Thực hiện các hành động cần thiết khi giảm số lượng sản phẩm ở đây
//           // Ví dụ: Cập nhật giỏ hàng, tính toán tổng giá, v.v.
//         }
//       });

//     $(this)
//       .find(".plus")
//       .on("click", function () {
//         cartProduct[index].quantity++;
//         $(this).siblings(".count").text(cartProduct[index].quantity);
//         // Thực hiện các hành động cần thiết khi tăng số lượng sản phẩm ở đây
//         // Ví dụ: Cập nhật giỏ hàng, tính toán tổng giá, v.v.
//       });
//   });
// };

//   const addTocart =  (id) => {
//     let positionThisProductIncart = cart.findIndex((value) => value.product_id === id);
//     if(cart.length <= 0){
//       cart = [
//         {
//           product_id: id,
//           quantity:1
//         }
//       ]
//     }else if(positionThisProductIncart < 0 ){
//       cart.push({
//         product_id: id,
//         quantity: 1
//       });
//     }else{
//       cart[positionThisProductIncart].quantity = cart[positionThisProductIncart].quantity + 1;
//     }
//     addCartToHTML();
//   }
//   const addCartToHTML = () => {

//   if(cart.length > 0){
//     cart.forEach(carts => {
//       console.log(">>>cart: ", carts)
//       let newCart =document.createElement('div');
//       newCart.classList.add('item');

//       let positionProduct = listProduct.findIndex((value) => value.id == carts.id);
//       console.log(">>>Check pos: ", positionProduct)

//       let info = listProduct[positionProduct];
//       console.log(">>>Check data info: ", info);
//       newCart.innerHTML = `
//         <div class="img-item">
//           <img src="assets/img/san-pham/Ngũ cốc Granola Chocolate.png" alt="">
//         </div>
//        <div class="name">
//         Ngũ cốc Granola Chocolate
//        </div>
//        <div class="price">
//         ${carts.price}
//        </div>
//        <div class="quantity">
//         <span class="minus">-</span>
//         <span>${carts.quantity}</span>
//         <span class="plus">+</span>
//        </div>

//       `;
//       listCartHTML.appendChild(newCart);
//     })
//   }
// }
// listProductHTML.addEventListener('click', (event) => {
//   let positionClick = event.target;
//   if(positionClick.classList.contains('add-product')){
//     let product_id = positionClick.parentElement.dataset.id;
//     alert(product_id);
//   }
// });
const initApp = () => {
  console.log(">>>Check-pro");
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      listProduct = data;
      addDataToHTML();
      carousel();
    });
};
initApp();



