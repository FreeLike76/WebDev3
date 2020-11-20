import {productPromise} from "./getdata.js"
import * as builder from "./mainPage/builder.js"

let header = document.querySelector("header")
let mainPage = document.querySelector("#mainPage")

let productList
productPromise.then(data=>{
    console.log("data received")
    productList = data
}).then(()=>{
    console.log("drawing")
mainPage.innerHTML=builder.drawMenu(productList)
})


window.addEventListener("scroll",function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})
