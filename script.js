const converter = document.querySelector("#converter")
const konvBtn = document.querySelector(".conv")
const resetBtn = document.querySelector(".reset")
const changeBtn = document.querySelector(".change")
const p = document.querySelector("p")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const label = document.querySelector("label")





// const fun1 = () => console.log(converter.value);
// converter.addEventListener("keyup", fun1)

const convFun1 = () => {
    let result = (converter.value * 1.8) + 32
    // console.log(result);
    p.textContent = `${converter.value}°C to ${result}°F`
converter.value = ""
}

const convFun2 = () => {
    let result = (converter.value - 32) /1.8
    
    // console.log(result);
    p.textContent = `${converter.value}°F to ${result.toFixed(1)}°C`
converter.value = ""
}



const resFun = () => {
    p.textContent = ""
    converter.value = ""
} 

const changeFun = () =>{

    if (converter.value !== "") {
       if (one.textContent === "°C"){
    convFun1()
}
else {convFun2()}
}
else { p.textContent = "musisz podać jakaś wartość"}
}

const swap = () => {
    if (one.textContent === '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
        p.textContent = ""
    }
    else {
        one.textContent = '°C'
        two.textContent = '°F'
        p.textContent = ""
    }
}




konvBtn.addEventListener("click", changeFun)
resetBtn.addEventListener("click", resFun)
changeBtn.addEventListener("click", swap)

