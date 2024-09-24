let colors=["black","red","green","blue","orange","salmon","aqua","white"];

let body=document.querySelector("body");
let output=document.querySelector("#output");
let h1=document.querySelector("#h1")

for(let i=0; i<colors.length; i++){

output.innerHTML +=`<p><button class="btn"onclick="changColor(${i})">${colors[i]}</button></p>`

}

function changColor(index){
    console.log(index);
    body.style.backgroundColor=colors[index]
}
