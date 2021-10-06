let apiInput = document.getElementById('fetchy')
let fBtn = document.getElementById('fetchBtn')
let resDiv= document.getElementById('results')
let errDiv= document.getElementById('errDiv')
let statusDiv= document.getElementById('status')
const renderObj=(obj)=>{
    console.log(obj)
    // console.log(Object.keys(obj))
    let elem= document.createElement('pre')
    elem.setAttribute('class', 'block')
    let code= document.createElement('code') 
    code.textContent=JSON.stringify(obj,null, 2)
    code.setAttribute('class', 'code')
    elem.appendChild(code)
    resDiv.appendChild(elem)


}
const renderERR=(err)=>{
    console.log(err)
    let elem=document.createElement('div')
    elem.setAttribute('class', 'error')
    elem.textContent=err
    errDiv.appendChild(elem)
}
const renderStatus=(status)=>{

    console.log(status)
    let elem=document.createElement('div')
    if(status>=200&&status<300){
    elem.setAttribute('class', 'good')
    }else{
    elem.setAttribute('class', 'bad')
    }
    elem.textContent=status
    statusDiv.appendChild(elem)
}
const fetchy=()=>{
    console.log(apiInput.value)
    resDiv.innerHTML =''
    errDiv.innerHTML =''
    statusDiv.innerHTML =''
    fetch(apiInput.value).then(response=>{
        console.log(response)
        renderStatus(response.status)
        return response.json()
    }).then(data=>{
        
        console.log(data)
        // console.log(typeof(data))
        renderObj(data);
            
    }).catch(err=>{
        renderERR(err)
        console.log(err)
    })
}

fBtn.addEventListener('click',fetchy)

///array link https://v2.jokeapi.dev/joke/Any?amount=5
///single link https://dog.ceo/api/breeds/image/random

