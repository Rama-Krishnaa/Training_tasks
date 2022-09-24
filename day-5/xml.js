
let apiurl = 'https://jsonplaceholder.typicode.com/users';

let xhr = new XMLHttpRequest()


//  GET REQUEST

xhr.open('GET',apiurl,true)

xhr.onload = function(){
       let users = JSON.parse(xhr.responseText)
      if(xhr.status ==200){
         console.log(users)
         formatData(users)
      }
      else{
         console.log(users)
      }
}
xhr.send()

function createElementByTag(tagname){
    return document.createElement(tagname)
}



function formatData(users){
   
  for( let i in users){
       let trNode = createElementByTag('tr')
       let tdNode1 = createElementByTag('td')
       let tdNode2= createElementByTag('td')
       let tdNode3 = createElementByTag('td')
       let tdNode4 = createElementByTag('td')
       let tdNode5 = createElementByTag('td')

       let btnEdit = createElementByTag('button')
       btnEdit.innerHTML = 'Edit'
       btnEdit.setAttribute('data-id', parseInt(i)+1)
       let btnDelete = createElementByTag('button')
       btnDelete.innerHTML = 'Delete'
       
       btnEdit.onclick = editRecord
       
       tdNode5.appendChild(btnEdit)
       tdNode5.appendChild(btnDelete)
       


       tdNode1.innerHTML = users[i]['id']
       tdNode2.innerHTML = users[i]['name']
       tdNode3.innerHTML = users[i]['username']
       tdNode4.innerHTML = users[i]['email']
       trNode.appendChild(tdNode1)
       trNode.appendChild(tdNode2)
       trNode.appendChild(tdNode3)
       trNode.appendChild(tdNode4)
       trNode.appendChild(tdNode5)
       document.getElementById('tableData').appendChild(trNode)
  }
}

function editRecord(event){
    console.log(event);
    let singleRecord;
    let id = event.target.getAttribute('data-id')
    console.log(id)

      xhr.open('GET',apiurl+'/'+id,true)

      xhr.onload = function(){
          singleRecord = JSON.parse(xhr.responseText)
          let input1 = createElementByTag('input')
          let input2 = createElementByTag('input')
          let input3 = createElementByTag('input')
          let btnUpdate = createElementByTag('button')
          
          btnUpdate.innerHTML = 'Update'
          
          input1.value = singleRecord.name
          input2.value = singleRecord.username
          input3.value = singleRecord.email

          document.body.appendChild(input1)
          document.body.appendChild(input2)
          document.body.appendChild(input3)
          document.body.appendChild(btnUpdate)
      }
      xhr.send()
 
}
// let apiurl = 'http://localhost:3000/users'

// Post Request
// let data = {}
// data.name = 'PETER PARKER'
// data.email = 'peter@gmail.com'
// data.username = 'peter121345'
// let jsonData = JSON.stringify(data)

// xhr.open('POST',apiurl,true)
// xhr.setRequestHeader('Content-type','application/json')
// xhr.onload = function(){
//     let users = JSON.parse(xhr.responseText)
//     if(xhr.status ==200){
//        console.log(users)    
//     }
//     else{
//        console.log(users)
//     }
// }
// xhr.send(jsonData)


// PUT REQUEST

// let data = {}
// data.name = 'MIKE TYSON'
// data.email = 'mike@gmail.com'
// data.username = 'mike121345'
// let jsonData = JSON.stringify(data)

// xhr.open('PUT',apiurl+'/'+6, true)
// xhr.setRequestHeader('Content-type','application/json')
// xhr.onload = function(){
//     let users = JSON.parse(xhr.responseText)
//     if(xhr.status ==200){
//        console.log(users)    
//     }
//     else{
//        console.log(users)
//     }
// }
// xhr.send(jsonData) 


// Delete
// xhr.open('DELETE',apiurl+'/'+6, true)
// xhr.setRequestHeader('Content-type','application/json')
// xhr.onload = function(){
//     let users = JSON.parse(xhr.responseText)
//     if(xhr.status ==200){
//        console.log(users)    
//     }
//     else{
//        console.log(users)
//     }
// }
// xhr.send() 





// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => 
//   console.log(data));


//   function createElement(tagName) {
//    return document.createElement(tagName) 
//   }