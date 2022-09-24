

let img1Link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FBeI7k1HMUgATtfRTHAiHuf3WXqAauG25NfExtJo&s";
let img2Link = "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
let img3Link = "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1172207.jpg&fm=jpg";
let img4Link =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiWRXDEA4zzrs8BP6edh-YXS3I2N-2jsEND92v2XHzKuF-nkXKcK_5qKeWhvmCFHoh58&usqp=CAU";

let imgContainer = document.getElementById('img-container');
let imgArray = [img1Link, img2Link, img3Link, img4Link];
let i =-1;
window.onload = function(){

setInterval(show, 2000)
}
function show() {
    if(i < 3) {
        i =i+1;
    }    
    else {
        i = 0;
    }
    // console.log(imgArray[i])
    imgContainer.setAttribute('src', imgArray[i]);

}
