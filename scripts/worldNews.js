let arr = []
let display =(data) =>{
    document.querySelector("#news").innerHTML=""
    data.map((ele)=>{
        let img = document.createElement("img")
        img.src=ele.image

        let title = document.createElement("h3")
        title.innerHTML=ele.title
        
        let description = document.createElement("h4")
        description.innerHTML=ele.description

        let div =document.createElement("div")
        div.append(img,title,description)

        document.querySelector("#news").append(div)
    })
}

    fetch("http://localhost:3000/news")
    .then((ele)=>ele.json())
    .then((data)=>{
        arr=data
    })

    let get2 = async ()=>{
        fetch("http://localhost:3000/news")
        .then((ele)=>ele.json())
        .then((data)=>display(data))
    }
    get2()
    let handledesh = (pera)=>{
        let data = arr.filter((so)=>so.country == pera)
        display(data)
    }

    document.querySelector("#india").addEventListener("click",()=>get2())
    document.querySelector("#india").addEventListener("click",()=>handledesh("in"))
    document.querySelector("#china").addEventListener("click",()=>handledesh("ch"))
    document.querySelector("#usa").addEventListener("click",()=>handledesh("us"))
    document.querySelector("#uk").addEventListener("click",()=>handledesh("uk"))
    document.querySelector("#nz").addEventListener("click",()=>handledesh("nz"))


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

let search = () =>{
    let value = document.querySelector("#value").value
    let data = arr.filter((ele)=>ele.country == value)
    display(data)
}

document.querySelector("#search").addEventListener("click",search)

document.querySelector("#value").addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){

        search()
    }
})

let get = async ()=>{
    fetch("http://localhost:3000/signup")
    .then((ele)=>ele.json())
    .then((data)=>output(data))
}
get()