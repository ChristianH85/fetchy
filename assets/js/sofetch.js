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

    // for(key in obj){
    //     // console.log(key, obj[key])
    //     console.log(Array.isArray(obj[key]))
    //     let elem= document.createElement('pre')
    //     let code= document.createElement('code')
        
    //     code.textContent=`${key} : ${Array.isArray(obj[key])?renderArray(obj[key]):obj[key]},` 
    //     elem.appendChild(code)
    //     resDiv.appendChild(elem)
    // }
}
// const renderArray=(arr)=>{
//     let elem= document.createElement('ul')
//     for(let i=0;i<arr.length;i++){
//         let li=document.createElement('ul')
//         if(typeof(arr[i])){
//            return renderObj(arr[i])
//             // console.log('obj in array')
//         }
//     }
// console.log(arr)
// }
// const swType=(data)=>{
//     switch(typeof(data)){
//         case 'object':
//             console.log('its an obj');
//             renderObj(data)
//             break;
//         case 'array':
//             console.log('its an array');
//             renderArray(data)
//             break;
//     }
// }
const fetchy=()=>{
    console.log(apiInput.value)

    fetch(apiInput.value).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
        // console.log(typeof(data))
        renderObj(data);
            
    }).catch(err=>{
        console.log(err)
    })
}

fBtn.addEventListener('click',fetchy)

///array link https://v2.jokeapi.dev/joke/Any?amount=5
///single link https://dog.ceo/api/breeds/image/random

