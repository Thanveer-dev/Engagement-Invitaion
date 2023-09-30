var Button_Clicked;
var btns = document.querySelectorAll('button');
for(i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        Button_Clicked = this.innerHTML
        console.log(Button_Clicked);
        if(Button_Clicked == 'Website'){
            window.location.href = 'http://www.seashellchennai.com/annanagar.html'
        }
    })
}


