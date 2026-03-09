async function checkEligibility(){

let age = document.getElementById("age").value
let income = document.getElementById("income").value

let response = await fetch("http://localhost:5000/check",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({age,income})
})

let data = await response.json()

document.getElementById("result").innerText = data.message

}