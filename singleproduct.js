let src = localStorage.getItem("simage");
let image = document.querySelector("#pimage");
image.src = src;

let name = localStorage.getItem("sname");
let namec = document.querySelector("#name");
namec.innerText = name;

let price = localStorage.getItem("sprice");
let pricec = document.querySelector("#prices");
pricec.innerText = "Rs. " + price;

let desc = localStorage.getItem("sdesc");
let descc = document.querySelector("#desc");
descc.innerHTML = desc;

let rating = localStorage.getItem("srating");
let rdiv = document.querySelector(".ratings");
for (let i = 1; i <= rating; i++) {
  let main3ch = document.createElement("i");
  main3ch.className = "fa-solid fa-star";
  main3ch.style.color = "#FFAD33";
  rdiv.append(main3ch);
}

let ratingct = localStorage.getItem("sratingc");
let para = document.createElement("p");
para.innerText = ratingct;
rdiv.append(para);

let add = document.querySelector("#atc");
id = localStorage.getItem("sid");
add.addEventListener("click", ()=>{
  let t = 0;
  let cartdat = JSON.parse(localStorage.getItem("cartdata"));
  for (i in cartdat) {
    if (cartdat[i] == id-1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already added to cart!",
      });
      t = 1;
      break;
    }
  }
  if (t == 0) {
    if (cartdat == null) {
      cartdat = [];
      let item = id;
      cartdat.push(item);
    } else {
      let item = id;
      cartdat.push(item);
    }
    localStorage.setItem("cartdata", JSON.stringify(cartdat));

    Swal.fire({
      title: "Done!",
      text: "Item added to cart",
      icon: "success",
    });
  }
});

wish=document.querySelector(".fa-solid fa-heart")
wish.addEventListener("click",()=>{
  let t=0
  let cartdat=JSON.parse(localStorage.getItem("wishdata"))
  for(i in cartdat){
    if(cartdat[i]==id){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already added to wishlist!",
      });
      t=1
      break;
    }
  }
  if(t==0){
    if(cartdat==null){
      cartdat=[]
      let item = id;
      cartdat.push(item)
    }
    else{ 
      let item = id;
      cartdat.push(item)
    }
    localStorage.setItem("wishdata", JSON.stringify(cartdat));
      
    
    
    Swal.fire({
      title: "Done!",
      text: "Item added to wishlist",
      icon: "success",
    })
  }
})
