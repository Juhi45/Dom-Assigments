let input1 = document.getElementById("name")
    let input2 = document.getElementById("age")
    let submit = document.querySelector("form")
    submit.addEventListener("submit",function(event){
       localStorage.setItem("name", event.target.person.value)
       localStorage.setItem("age",event.target.years.value)
     })
     let retrieve = document.getElementById("retri")
     retrieve.addEventListener("click",function(){
        let table = document.querySelector("table")
        let tbody = document.createElement("tbody")
        let tablerow = document.createElement("tr")
        let tabledata1 = document.createElement("td")
        let tabledata2 = document.createElement("td")
        tabledata1.innerText = localStorage.getItem("name")
        tabledata2.innerText = localStorage.getItem("age")
        tablerow.append(tabledata1,tabledata2)
        tabledata1.className = "tab1"
        tabledata2.className = "tab2"
        tbody.append(tablerow)
        table.append(tbody)

     }) 