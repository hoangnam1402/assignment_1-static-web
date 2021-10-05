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

let now =  1;
for (let i = 0; i < buttonsPagination.length; i++) {
    if(i = 0 && now > 1){
        buttonsPagination[i].addEventListener("click", function () {
            for (let j = 0; j < buttonsPagination.length; j++) {
                buttonsPagination[j].classList.remove("active");
            }
            buttonsPagination[now-1].classList.add("active");
        })
    }
    else
        {buttonsPagination[i].addEventListener("click", function () {
            for (let j = 0; j < buttonsPagination.length; j++) {
                buttonsPagination[j].classList.remove("active");
            }
            this.classList.add("active");
            now =  i;
        })
    }
}