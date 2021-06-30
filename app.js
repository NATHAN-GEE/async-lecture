//async functions return a promise

async function myFix() {
  return "hello world"; //nothing happens because its a promise that hasn;t been executed
}
//only a promise no the return value
// console.log(myFix())
//to resolve the promis you need to use .then()
// myFix().then(console.log);

//AWAIT IS OPERATOR THAT WAITS FOR A PROMISE AND CAN ONLY BE USED INSIDE A ASYNC FUNCTION
//Traditional way of getting the API data information
let baseURL = `https://api.spacexdata.com/v3/history`;
// fetch(baseURL)
//     .then((Response) => Response.json()
// ).then(data => console.log(data))

async function fetchData() {
    const res = await fetch(baseURL)//use for example to wait for our data becuase of maybe internet connection etc
    const data = await res.json()
    // console.log(data)
}
fetchData()

