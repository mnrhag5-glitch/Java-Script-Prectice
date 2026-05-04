// document.getElementById("btn").addEventListener("click",function(){
// alert("button clicked")
// })


// document.getElementById("btn").onclick =function(){
// alert("button clicked")
// }

//---------------these are too method but use eventlistnere---------------------------



//-----improtant Events-----

//----Type.
//----timestamp.
//----target.
//----toElement.
//----currentTarget.
//----clientX.
//----clientY.
//----screenX.
//----ScreenY.
//-----altKey.
//----ctrlKey.
//----shiftKey.
//----keyCode.



//--------lets remove something with event----

document.querySelector(".div").addEventListener("click",function(e){
    console.log(e)
  let removeIt = e.target
  removeIt.remove()

})
