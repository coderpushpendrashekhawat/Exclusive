
let cartid = JSON.parse(localStorage.getItem("cartdata"))
let id=JSON.parse(localStorage.getItem("cartdata"))
const fetchData = () => {
  fetch("https://buyby-backend.onrender.com/All-Products")
    .then((res) => res.json())
    .then((data) => displayData(data));
};
console.log(localStorage)

fetchData();
let totalvalue=0;
const displayData = (data) => {
    console.log(id)

  for (let x in cartid) {
    let cotnetbap = document.querySelector(".cartcontents");
    let contnet = document.createElement("div");
    contnet.className = "cartcontent2";
    let imgname = document.createElement("div");
    imgname.className = "imgname";
    imgname.style.display = "flex";
    imgname.style.gap = "16px";
    let cartimg = document.createElement("img");
    let namec = document.createElement("p");
    let pricec = document.createElement("p");
    pricec.className = "pricec";
    let qtyc = document.createElement("input");
    qtyc.type = "number";
    let subc = document.createElement("p");
    let btn = document.createElement("button");
    btn.className = "dltbtn";
    subc.className = "subc";
    btn.innerText = "Delete";
    let rid = cartid[x];
    console.log(cartid)
    btn.addEventListener("click", (evt) => {
      contnet.remove();
      console.log(cartid)
      let t=0
      for(let z in cartid){
        if(cartid[z]==data[rid]["id"]-1){
          t=z
          break
        }
      }
      cartid.splice(t,1)
      console.log(cartid)
      localStorage.setItem("cartdata",JSON.stringify(cartid));
      if(cartid.length==0){
        localStorage.removeItem("cartdata")
      }
      update()
    });
    n=localStorage.getItem(rid)
    imgname.append(cartimg, namec);
    contnet.append(imgname, pricec, qtyc, subc, btn);
    cotnetbap.append(contnet);

    let rname = data[rid]["title"];
    let rimg = data[rid]["image"];
    cartimg.style.height = "54px";
    cartimg.style.width = "54px";
    cartimg.src = rimg;
    namec.innerHTML = rname;
    let rprice = data[rid]["price"];
    pricec.innerHTML = rprice;
    qtyc.value = 1;
    let quantity = qtyc.value;
    qtyc.className = "qtyc";
    let subtotal = rprice * quantity;
    subc.innerHTML = subtotal;
    totalvalue=totalvalue+subtotal
    qtyc.addEventListener("change", () => {
      let pricec = document.querySelectorAll(".pricec");
      let qtyc = document.querySelectorAll(".qtyc"); 
      let price = pricec[x].innerText;
      console.log(price)
      let subc = qtyc[x].value * price;
      let subcs = document.querySelectorAll(".subc");
      subcs[x].innerHTML = subc;
      if (qtyc[x].value <= 0) {
        qtyc[x].value = 1;
        subcs[x].innerHTML = price;
      }
      update()
    });
  }
};
setTimeout(function subc(){
  let totals=document.createElement("p")
  totals.className="total"
  let cotnetbap2 = document.querySelector(".cartcontents");
  cotnetbap2.append(totals)
  totals.innerHTML="Total Rs. "+totalvalue
  let btn=document.createElement("button")
  btn.className="proceed"
  btn.innerText="Proceed to Checkout"
  cotnetbap2.append(btn)
  cotnetbap2.append(btn)
},2000)

function update(){
  let loop=document.querySelectorAll(".subc")
  let total=0
  for(i=0;i<loop.length;i++){
    x=loop[i].innerText
    total=total+parseInt(x)
  }
  let cotnetbap2 = document.querySelector(".total");
  cotnetbap2.innerHTML="Total Rs. "+total
}



