
  // --------------------------------------click bannner-----------------------------------
var headerMain = document.getElementsByClassName("header-main")[0];
var header = document.getElementsByClassName("header")[0];
var iconMenu = document.getElementsByClassName("iconMenu")[0];
document.getElementById("p6_3").style.display = "none";

  function menuDong() {
    headerMain.style.visibility = "hidden";
    headerMain.style.opacity = "0";
    headerMain.style.top =  "45%";
    headerMain.style.transition = "all 0.4s ease-in-out";

    header.style.height = "80px";
    header.style.visibility = "visible";  
    header.style.transition = "all 0.5s ease-in-out"
   document.getElementById("p6_4").style.display = "none";
   document.getElementById("p6_3").style.display = "block";
    
  }

  document.getElementById("p6_4").addEventListener("click",menuDong);

  function menuBanDau() {
    headerMain.style.background =" #3F3F3F ";
    headerMain.style.visibility = "visible ";
    headerMain.style.display = "block";
    headerMain.style.top = "64%";
    headerMain.style.opacity = "2";
    headerMain.style.position = "absolute";
    headerMain.style.transition = " all 0.5s ease-in-out";
    // headerMain.style.width = "100%";

    header.style.height = "122px";
    header.style.transition = "all 0.5s ease-in-out";
    header.style.visibility = "visible";
    document.getElementById("p6_3").style.display = "none";
    document.getElementById("p6_4").style.display = "block";
   

  }

  document.getElementById("p6_3").addEventListener("click", menuBanDau);

    

// ------------------------------------------banner------------------------------------

var kichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var chuyenSlide = document.getElementsByClassName("chuyenSlide")[0];
// alert(kichThuoc);
var img = chuyenSlide.getElementsByTagName("img");
var max = kichThuoc *( img.length -1);

var chuyen = 0;

function next() {
    chuyen += kichThuoc;
   if (chuyen > max) {
       chuyen = 0;
   }
    chuyenSlide.style.marginLeft = '-' +chuyen + 'px';
    chuyenSlide.style.transition = "all 1s ease-in-out";
}


function pre() {
    chuyen-= kichThuoc;
    if (chuyen < 0) {
        chuyen = max;
    }
    chuyenSlide.style.marginLeft = '-' +chuyen + 'px';
    chuyenSlide.style.transition = "all 1s ease-in-out";
}

setInterval(function () {
  next();
},3000);
// ------------------------------------------------







//------------------------------------------------banner 2------------------------------------------------

  
 //mỗi slide có 1 chỉ số riêng của nó ,để đơn giản chúng ta sẽ gán chỉ số mảng cho các slide
var slideIndex = 0;
var slideArray = [];
// mảng lưu trữ các slide của chúng ta
var currentSlideIndex = 0;
//hàm dưới đây sẽ giúp ta tạo ra các đối tượng slide
// bao gồm: tiêu đề, mô tả , ảnh, đường dẫn khi nhấp vào button trên slide, và id của mỗi slide
function Slide(title, subtitle, img, textSpan) {
    this.title = title;
    this.subtitle = subtitle;
    this.img = img;
    this.textSpan = textSpan;
//    chúng ta cần một id để nhắm mục tiêu sau này bằng cách sử dụng getElementById
    this.id2 = "slide" + slideIndex;
//tăng dần id lên
    slideIndex++;
// add slide to array
    slideArray.push(this);
}


//tạo các đối tượng slide

var clientsSay = new Slide(
    "CLIENTS SAY",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.",
    "../Assignment/img/logo_banner2.jpg",
    "Andrela"

);

var longChanh = new Slide(
    "Vũ Tiến Long",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.",
    "../Assignment/img/logo_banner2.jpg",
    "Andrela"

);

// Từ mảng slide đã tạo, ta tiến hành đưa nó vào source HTML
function buildSiver() {
//  Tạo một biến để giữ tất cả HTML của chúng ta
var  myHtml = "";
// bắt đầu thêm

    for (var j = 0; j < slideArray.length; j++) {
        myHtml+=
        "<div id='" + slideArray[j].id2 + "' class='singleSlide'>" +
        "<div class='slideOverlay' style= '  padding-top: 23px;'>"+
        "<h1 style='padding: 30px;font-weight: 600;font-size: 55px; '>" +
        slideArray[j].title +
        "</h1>" +
        "<h6 style = ' width: 783px;margin: auto;font-size: 14px; '>" +
        slideArray[j].subtitle +
        "</h6>" +
        "<img  src='" +
        slideArray[j].img +
        "'  style=' margin: auto;  padding: 21px; border-radius: 100%'>" +
        "<span>" +
        slideArray[j].textSpan +
        "</span>" +
        "</div>" +
      "</div>";
     
    }
  
      // Đưa HTML chúng ta vừa tạo vào id #mySlider
  document.getElementById("mySlider").innerHTML = myHtml;
 
 // Đồng thời hiển thị slide đầu tiên
 document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSiver();

// Xử lý bấm nút chuyển slide trước đó
function prevSlide() {
    // Tìm slide trước đó
    var nextSlideIndex;
    // Nếu chỉ số slide là 0, về slide cuối
    if (currentSlideIndex == 0) {
      nextSlideIndex = slideArray.length - 1;
    } else {
      // Nếu không thì giảm chỉ số đi 1
      nextSlideIndex = currentSlideIndex - 1;
    }
   
    // Ẩn slide hiện tại, hiện slide "currentSlideIndex"
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
   
    // Thêm class để chuyển slide có animation đã định nghĩa ở bước 3
      document
      .getElementById("slide" + nextSlideIndex)
      .setAttribute("class", "singleSlide slideInLeft");
    document
      .getElementById("slide" + currentSlideIndex)
      .setAttribute("class", "singleSlide slideOutRight");
   
    // Cập nhật giá trị slide hiện tại
    currentSlideIndex = nextSlideIndex;
  }
   
  // Xử lý bấm nút chuyển slide tiếp theo
  // Cách xử lý tương tự như prevSlide đã trình bày ở trên
  function nextSlide() {
    var nextSlideIndex;
    if (currentSlideIndex == slideArray.length - 1) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = currentSlideIndex + 1;
    }
   
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
  
    document
      .getElementById("slide" + nextSlideIndex)
      .setAttribute("class", "singleSlide slideInRight");
    document
      .getElementById("slide" + currentSlideIndex)
      .setAttribute("class", "singleSlide slideOutLeft");
    
    currentSlideIndex = nextSlideIndex;
  }


// ---------------------------------------------------------------

var chuyenSlide2 = document.getElementsByClassName("chuyenSlide_hotDeal")[0];
// var hot = ;

var max2 = 1172;
var kichThuoc2 = 293;
var chuyen2 = 0;

function next3() {
    chuyen2 += kichThuoc2;
  
   if (chuyen2 > max2) {
       chuyen2 = 0;
   }
   console.log(chuyen2);
   chuyenSlide2.style.marginLeft = '-' + chuyen2 + 'px';  
   chuyenSlide2.style.transition = "all 0.5s ease-in-out";
   
   
  
   
}


function pre3() {
    chuyen2 -= kichThuoc2;
    if (chuyen2 < 0) {
        chuyen2 = max2;
    }
    chuyenSlide2.style.marginLeft = '-' + chuyen2 + 'px';
    chuyenSlide2.style.transition = "all 0.5s ease-in-out";
}


// -------------------------product3-------------------------------------

var chuyenSlide3 = document.getElementsByClassName("chuyenSlide_product_Slide3")[0];


var max3 = 720;
var kichThuoc3 = 360;
var chuyen3 = 0;

function next4() {
    chuyen3 += kichThuoc3;
   if (chuyen3 > max3) {
       chuyen3 = 0;
   }
   console.log(chuyen3);
   chuyenSlide3.style.marginLeft = '-' + chuyen3 + 'px';
   chuyenSlide3.style.transition = "all 0.5s ease-in-out";
  
  
  
}


function pre4() {
    chuyen3 -= kichThuoc3;
    if (chuyen3 < 0) {
        chuyen3 = max3;
    }
    chuyenSlide3.style.marginLeft = '-' + chuyen3 + 'px';
    chuyenSlide3.style.transition = "all 0.5s ease-in-out";
}


// cột 2


var chuyenSlide4 = document.getElementsByClassName("chuyenSlide_product_Slide4")[0];


var max4 = 720;
var kichThuoc4 = 360;
var chuyen4 = 0;

function next5() {
    chuyen4 += kichThuoc4;
   if (chuyen4 > max4) {
       chuyen4 = 0;
   }
   console.log(chuyen4);
   chuyenSlide4.style.marginLeft = '-' + chuyen4 + 'px';
   chuyenSlide4.style.transition = "all 0.5s ease-in-out";
  
  
  
}


function pre5() {
    chuyen4 -= kichThuoc4;
    if (chuyen4 < 0) {
        chuyen4 = max4;
    }
    chuyenSlide4.style.marginLeft = '-' + chuyen4 + 'px';
    chuyenSlide4.style.transition = "all 0.5s ease-in-out";
}

// cột 3

var chuyenSlide5 = document.getElementsByClassName("chuyenSlide_product_Slide5")[0];


var max5 = 720;
var kichThuoc5 = 360;
var chuyen5 = 0;

function next6() {
    chuyen5 += kichThuoc5;
   if (chuyen5 > max5) {
       chuyen5 = 0;
   }
   console.log(chuyen5);
   chuyenSlide5.style.marginLeft = '-' + chuyen5 + 'px';
   chuyenSlide5.style.transition = "all 0.5s ease-in-out";
  
  
  
}


function pre6() {
    chuyen5 -= kichThuoc5;
    if (chuyen5 < 0) {
        chuyen5 = max5;
    }
    chuyenSlide5.style.marginLeft = '-' + chuyen5 + 'px';
    chuyenSlide5.style.transition = "all 0.5s ease-in-out";
}
