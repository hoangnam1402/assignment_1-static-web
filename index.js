let list = document.querySelectorAll(".list");

for(let i=0;i<list.length;i++) {
    list[i].addEventListener("click",function(){
        for(let j=0;j<list.length;j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}