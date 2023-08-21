
let array = []

let output = (data) => {
    document.querySelector("#signui").innerHTML=""
    data.map((ele)=>{
        let img = document.createElement("img")
        img.src=ele.img

        let name = document.createElement("h2")
        name.innerHTML=ele.name
        
        let email = document.createElement("h2")
        email.innerHTML=ele.email
        
        let country = document.createElement("h4")
        country.innerHTML=ele.country

        let div =document.createElement("div")
        div.append(img,name,email,country)

        document.querySelector("#signui").append(div)
    })
}

let get = async ()=>{
    fetch("http://localhost:3000/signup")
    .then((ele)=>ele.json())
    .then((data)=>{
        output(data)
        array= data
    })
}
get()

document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let user ={
        img:document.querySelector("#img").value,
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        country:document.querySelector("#country").value
    }
    fetch("http://localhost:3000/signup",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(user)
    })
})