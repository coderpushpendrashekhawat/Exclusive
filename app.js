let arr = [];
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
function getRandomInt(max) {
  i = Math.floor(Math.random() * max);
  if (i > 3) {
    return i;
  } else {
    return 3;
  }
}
const fetchData = () => {
  fetch("https://buyby-backend.onrender.com/All-Products")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

fetchData();

const displayData = (data) => {
  let container = document.querySelectorAll(".swiper");
  container.forEach((el, x) => {
    for (let y = 1; y <= data.length; y++) {
      if (x == 1 || x == 2 || x == 0) {
        y = y + 4;
      }

      let istrue = 0;
      for (i in arr) {
        if (arr[i] == data[y]["id"]) {
          istrue = 1;
          break;
        }
      }
      if (istrue == 1) {
        continue;
      }
      arr.push(data[y]["id"]);
      let fcontainer = document.createElement("div");
      fcontainer.className = "fcontainer";
      let imgcontainer = document.createElement("div");
      imgcontainer.className = "imgcontainer";
      imgcontainer.style.backgroundImage = "url(" + data[y]["image"] + ")";
      imgcontainer.style.backgroundSize = "cover";
      let ndiv = document.createElement("div");
      let dsc = document.createElement("button");
      let discount = getRandomInt(50);
      dsc.innerHTML = "-" + discount + "%";
      dsc.className = "dsc";
      let wish = document.createElement("div");
      let wishicon = document.createElement("i");
      ndiv.append(dsc, wish);
      wishicon.className = "fa-regular fa-heart";
      wishicon.style.fontSize = "20px";
      wishicon.style.margin = "22%";
      wishicon.className = "fa-solid fa-heart";
      wishicon.style.color = "#DB4444";
      wish.addEventListener("click", (evt) => {
        evt.stopPropagation;
        wishicon.className = "fa-solid fa-heart";
        wishicon.style.color = "#DB4444";
        let item = data[y - 1]["id"];
        atw(y, data, "wishdata");
      });
      wish.append(wishicon);
      wish.style.backgroundColor = "white";
      wish.style.borderRadius = "100%";
      wish.style.height = "34px";
      wish.style.width = "34px";
      ndiv.style.display = "flex";
      ndiv.style.gap = "160px";
      wish.style.marginTop = "6px";
      fcontainer.addEventListener("mouseenter", (evt) => {
        let add = document.createElement("button");
        add.className = "add";
        add.innerText = "Add to cart";
        imgcontainer.append(add);
        add.style.height = "41px";
        add.style.width = "270px";
        add.style.backgroundColor = "black";
        add.style.color = "white";
        add.style.fontSize = "16px";
        add.style.fontWeight = "500";
        add.style.border = "none";
        add.style.marginTop = "180px";
        add.addEventListener("click", (e) => {
          e.stopPropagation();
          cartData.forEach((elem) => {
            if (data[y].id === elem.id) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already added to cart!",
              });
            } else {
              cartData = [...cartData, data[y]];
              localStorage.setItem("cartData", JSON.stringify(cartData));
              Swal.fire({
                title: "Done!",
                text: "Item added to cart",
                icon: "success",
              });
            }
          });
        });
        // fcontainer.addEventListener("mouseenter", atc(y, data, "cartdata"));
      });
      fcontainer.addEventListener("mouseleave", (evt) => {
        add2 = document.querySelector(".add");
        add2.remove();
      });

      let cardsdata = document.createElement("div");
      let name = document.createElement("p");
      name.innerHTML = data[y]["title"];
      let price = document.createElement("p");
      price.innerHTML = "Rs. " + data[y]["price"];
      let rating = getRandomInt(6);
      let ratingct = document.createElement("p");
      ratingct.innerHTML = "(" + getRandomInt(100) + ")";
      let rdiv = document.createElement("div");
      fcontainer.addEventListener("click", () => {
        location.href = "singleproduct.html";
        localStorage.setItem("sid", data[y]["id"]);
        localStorage.setItem("simage", data[y]["image"]);
        localStorage.setItem("sprice", data[y]["price"]);
        localStorage.setItem("sname", data[y]["title"]);
        localStorage.setItem("srating", rating);
        localStorage.setItem("sratingc", ratingct.innerHTML);
        localStorage.setItem("sdesc", data[y]["description"]);
      });

      for (let i = 1; i <= rating; i++) {
        let main3ch = document.createElement("i");
        main3ch.className = "fa-solid fa-star";
        main3ch.style.color = "#FFAD33";
        rdiv.append(main3ch);
      }
      rdiv.append(ratingct);
      {
        name.style.height = "24px";
        name.style.textOverflow = "ellipsis";
        name.style.overflowY = "hidden";
        cardsdata.style.padding = "10px";
        cardsdata.style.display = "flex";
        cardsdata.style.flexDirection = "column";
        cardsdata.style.gap = "8px";
        name.style.fontSize = "16px";
        name.style.fontWeight = "500";
        imgcontainer.style.height = "250px";
        imgcontainer.style.width = "270px";
        imgcontainer.style.backgroundColor = "#F5F5F5";
        container[x].style.display = "flex";
        container[x].style.gap = "80px";
        imgcontainer.style.borderRadius = "4px";
        price.style.color = "#DB4444";
        price.style.fontSize = "16px";
        price.style.fontWeight = "500";
        rdiv.style.display = "flex";
        rdiv.style.gap = "4px";
        rdiv.style.alignItems = "center";
        ratingct.style.color = "rgba(0,0,0,0.5)";
        ratingct.style.fontSize = "14px";
        ratingct.style.fontWeight = "600";
      }
      {
        fcontainer.append(imgcontainer, cardsdata);
        cardsdata.append(name, price, rdiv);
        imgcontainer.append(ndiv);
        container[x].append(fcontainer);
      }
      if (y % 4 == 0) {
        break;
      }
    }
  });
};

// add=document.querySelectorAll(".add")
// add.addEventListener("click",atc())
// document.querySelector(".add").addEventListener("click", (e) => {
//   console.log("....e", e);

// for (i in cartdat) {
//   if (cartdat[i] == y) {
//     console.log("yes");
//
//     t = 1;
//     break;
//   }
// }
// if (t == 0) {
//   if (cartdat == null) {
//     cartdat = [];
//     let item = maindata[y - 1]["id"];
//     cartdat.push(item);
//   } else {
//     let item = maindata[y - 1]["id"];
//     cartdat.push(item);
//   }
//   localStorage.setItem(cartdata, JSON.stringify(cartdat));

//
// }
// });

function viewall() {
  // location.href = "allproducts.html";
}

function atw(y, maindata, cartdata) {
  let t = 0;
  let cartdat = JSON.parse(localStorage.getItem(cartdata));
  for (i in cartdat) {
    if (cartdat[i] == y) {
      console.log("yes");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already added to wishlist!",
      });
      t = 1;
      break;
    }
  }
  if (t == 0) {
    if (cartdat == null) {
      cartdat = [];
      let item = maindata[y - 1]["id"];
      cartdat.push(item);
    } else {
      let item = maindata[y - 1]["id"];
      cartdat.push(item);
    }
    localStorage.setItem(cartdata, JSON.stringify(cartdat));

    Swal.fire({
      title: "Done!",
      text: "Item added to wishlist",
      icon: "success",
    });
  }
}
