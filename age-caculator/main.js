const btn = document.getElementById("btn")
const birthele = document.getElementById("birthday")
const resultele = document.getElementById("result")

function calculateAge(){
    const birthdayValue = birthele.value;
    if(birthdayValue === ""){
        alert("Please enter your birthday!")
    }else{
        const age = getAge(birthdayValue);
        resultele.innerText = `Your age is : ${age} ${age>1 ? "years" : "year"} old`;
    }
}


function getAge(birthday){
    const currentDate = new Date();
    const birthdayDate = new Date(birthday)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const month = currentDate.getMonth() - birthdayDate.getMonth()
    if(month<0 || (month === 0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;
    }
    return age;
}

btn.addEventListener("click", calculateAge);