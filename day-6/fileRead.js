
// function onLoadImgFile() {
//     let images = document.getElementById('images');
//     const fileElement = document.getElementById('imgFile');

//     for(let i=0; i < fileElement.files.length; i++) {
//     const reader = new FileReader()
//         reader.onload = (e) => {
//             let img = document.createElement('img');
//             img.src = e.target.result;
//             images.appendChild(img)
//         }
    
//         reader.onerror = (event)=>{
//                   console.log('error while loading text file')
//         }
//         reader.readAsDataURL(fileElement.files[i])
//         console.log(fileElement.files);
//     } 

// }




// function onLoadPdfFile() {
//     const fileElement = document.getElementById('pdfFile');

//     const reader = new FileReader()
//         reader.onload = (e) => {
//             let pdfRef = document.getElementById('pdf')
//             pdfRef.src = e.target.result;
//         }
    
//         reader.onerror = (event)=>{
//                   console.log('error while loading text file')
//         }
//         reader.readAsDataURL(fileElement.files[0])
        // console.log(fileElement.files);

// }