let apiInput = document.getElementById('fetchy')
let fBtn = document.getElementById('fetchBtn')
let resDiv= document.getElementById('results')
let errDiv= document.getElementById('errDiv')
let statusDiv= document.getElementById('status')
let method= document.getElementById('method')
let headers= document.getElementById('fHead')
let body= document.getElementById('fBody')

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
const swType=(method,headers,body,url)=>{

    switch(method){
        case "GET":
            getFetch(headers,url);
            break;
        case "POST":
            otherFetch(headers,body,url);
            break;
        case "PUT":
            otherFetch(headers,body,url);
            break;
        case "PATCH":
            otherFetch(headers,body,url);
            break;
        case "DELETE":
            otherFetch(headers,body,url)
    }
}
const getFetch=(head,url)=>{   
    fetch(url,
        {
            method:"GET",
            headers:JSON.parse(head)
        }
        ).then(response=>{
        renderStatus(response.status)
        return response.json()
    }).then(data=>{
        renderObj(data);        
    }).catch(err=>{
        renderERR(err)
    })
}
const otherFetch=(method,head,body,url)=>{   
    console.log('other')
    console.log(method,head,body,url)
    // fetch(url,
    //     {
    //         method:method,
    //         body:JSON.parse(body),
    //         headers:JSON.parse(head)
    //     }
    //     ).then(response=>{
    //     renderStatus(response.status)
    //     return response.json()
    // }).then(data=>{
    //     renderObj(data);        
    // }).catch(err=>{
    //     renderERR(err)
    // })
}
const fetchy=()=>{
    swType(method.value,headers.value,body.value,apiInput.value)
    // console.log(method.value,JSON.parse(headers.value),JSON.parse(body.value),apiInput.value)
    
    resDiv.innerHTML =''
    errDiv.innerHTML =''
    statusDiv.innerHTML =''
}

fBtn.addEventListener('click',fetchy)

///array link https://v2.jokeapi.dev/joke/Any?amount=5
///single link https://dog.ceo/api/breeds/image/random

