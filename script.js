var Button_Clicked;
var btns = document.querySelectorAll('button');
for(i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        Button_Clicked = this.innerHTML
        console.log(Button_Clicked);
        if(Button_Clicked == 'Website'){
            window.location.href = 'http://www.seashellchennai.com/annanagar.html'
        }
        else if(Button_Clicked == 'Location'){
            window.location.href = 'https://www.google.com/maps?q=sea+shell+anna+nagar&bih=605&biw=1280&hl=en&um=1&ie=UTF-8&sa=X&ved=2ahUKEwios4_axNCBAxXtoWMGHV8MAPMQ_AUoAXoECAQQAw'
        }
    })
}