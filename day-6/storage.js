let openReq = indexedDB.open('studentDB');

let db;
openReq.onsuccess = (event) => {
    db = event.target.result;
    console.log(db);
}

openReq.onerror = (event) => {
    alert(event.target.errorCode)
}

openReq.onupgradeneeded = (event) => {
    
}