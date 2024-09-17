const btn = document.getElementById("btn")
const son = document.getElementById("input")
const limiti = document.getElementById("input_2")
const allusers = document.getElementById("all-user")
const users = document.getElementById("filter-user")

btn.addEventListener("click", () => {
    if (limiti.value > 0 && son.value > 0) {




        fetch(`https://dummyjson.com/users?limit=${limit.value}&skip=0&select=firstName,age`)
            .then(res => res.json())
            .then(json => userChizish(json.users));



    } else {
        alert("0 dan katta son kiriting")
    }


})

function userChizish(userlar) {
    for (let i = 0; i < userlar.length; i++) {
        const div = document.createElement("div")
        const ismi = document.createElement("h2")
        const email = document.createElement("h3")
        const manzil = document.createElement("p")
        const yosh = document.createElement("h2")
        const tel = document.createElement("p")
        const birth = document.createElement("p")

ismi.textContent=userlar[i].firstname+ " "+userlar[i].lastname
email.textContent="Email: "+userlar[i].email;
manzil.textContent="Address: "+userlar[i].address.address
yosh.textContent="Yoshi: "+userlar[i].age;
tel.textContent="Telefon: "+userlar[i].phone
birth.textContent="Birthday: "+userlar[i].birthday;

div.classList.add("user")
div.appendChild(ism)
div.appendChild(email)
div.appendChild(manzil)
div.appendChild(yosh)
div.appendChild(tel)
div.appendChild(birth)

allusers.appendChild(div)



    }
}















