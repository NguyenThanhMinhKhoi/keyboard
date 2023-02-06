
let keyword=document.getElementById("randomword")

let input=document.getElementById("input")




//Kiểm tra
function Typeword(){

    if(input.value==keyword.innerHTML){
        keyword.innerHTML=arr[keywordrandom()] 
        console.log("đúng")
        input.  value=""
       
    }
    else{
        keyword.innerHTML=arr[keywordrandom()]
       console.log("sai")
        input.value=""
    }
}
input.addEventListener("keyup",({key}) =>{
    if(key==="Enter"){
        Typeword()
    }
})

function keywordrandom(){
    let randomword=Math.floor(Math.random()*arr.length);
    Math.floor(Math.random() * arr.length);
    return randomword;
}



let arr=["con cá", "con heo", "con gà", "con bò" , "con vịt","con cọp","con sư tử","con voi","con bạch tuộc"]
