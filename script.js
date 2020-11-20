import {productPromise} from "./getdata.js"
import * as builder from "./mainPage/builder.js"

let header = document.querySelector("header")
let mainPage = document.querySelector("#mainPage")

let productList
productPromise.then(data=>{
    productList = data
}).then(()=>{
    mainPage.innerHTML=builder.drawMenu(productList)
})


window.addEventListener("scroll",function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})
