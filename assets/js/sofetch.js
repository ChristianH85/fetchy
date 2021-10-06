let apiInput = document.getElementById('fetchy')
let fBtn = document.getElementById('fetchBtn')
let resDiv= document.getElementById('results')
const renderObj=(obj)=>{
    console.log(obj)
    resDiv.innerHTML =''
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
    resDiv.innerHTML =''
    console.log(err)
    let elem=document.createElement('div')
    elem.setAttribute('class', 'error')
    elem.textContent=err
    resDiv.appendChild(elem)
}
const fetchy=()=>{
    console.log(apiInput.value)

    fetch(apiInput.value).then(response=>{
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

