let slide = document.querySelectorAll(".slide")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let qiymat = 0
let timeline

next.addEventListener("click", ()=>{
    clearInterval(timeline)
    if(qiymat === slide.length - 1){
        qiymat = 0
    }
    else{
        qiymat++
    }

    slide.forEach(item =>{
        item.style.transform =`translateX(-${qiymat*100}%)`;
    })
    slideMove()
    
})
prev.addEventListener("click",()=>{
    clearInterval(timeline)
    if(qiymat === 0){
        qiymat = slide.length - 1
    }
    else{
        qiymat--
    }

    slide.forEach(item =>{
        item.style.transform =`translateX(-${qiymat*100}%)`;
    })
    slideMove()
})
slideMove()
function slideMove(){
    timeline = setInterval(() =>{
        if(qiymat === slide.length - 1){
            qiymat = 0
        }
        else{
            qiymat++
        }
    
        slide.forEach(item =>{
            item.style.transform =`translateX(-${qiymat*100}%)`;
        })
    },3000)
}


