let list = document.querySelectorAll(".list");

for(let i=0;i<list.length;i++) {
    list[i].addEventListener("click",function(){
        for(let j=0;j<list.length;j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}
const buttonsPagination = document.querySelectorAll(".pagination > button");

for (let i = 1; i < buttonsPagination.length-1; i++) {
    buttonsPagination[i].addEventListener("click", function () {
        for (let j = 0; j < buttonsPagination.length; j++) {
            buttonsPagination[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}