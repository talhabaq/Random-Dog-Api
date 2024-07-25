// API (APPLICATION PROGRAMMING INTERFACE)
//https://dog.ceo/api/breeds/image/random
//.then - Promises
//.then ko promises kehty hyn
// asynchronus programming
// console.log("1st")// runs on 1st// intezer nahi karna prta 

// fetch k lie intezer krna prta hai


// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response=>response.json())// uper wali line se attached ha

  
// .then(json=>console.log("2nd",json))// runs on 3rd


// console.log("3rd")// it runs on 2nd 
// esa is lie ha kyu k usy pata ha k 1st and 3rd line k baray lekin 2nd line ko fetch karnay me 2 second lagtay hyn is lie wo last me print howa ha 

console.log('run 1st')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
    })
}

dogButton.onclick = () => getNewDog()
  
console.log('run 3rd')