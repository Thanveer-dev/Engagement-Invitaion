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
            window.location.href = 'https://www.google.com/maps/dir/13.05485,80.2667386/E+Block,+Savoury+Sea+Shell,+3,+3rd+Ave,+Block+E,+Annanagar+East,+Chennai,+Tamil+Nadu+600102/@13.0696123,80.2219885,14z/data=!3m2!4b1!5s0x3a526425b4be25c1:0x445266e4c1785cb!4m17!1m7!3m6!1s0x3a526424fd356a61:0x94aeb65ee2bf199a!2sSavoury+Sea+Shell!8m2!3d13.0875528!4d80.2182955!16s%2Fg%2F1tcv99kj!4m8!1m1!4e1!1m5!1m1!1s0x3a526424fd356a61:0x94aeb65ee2bf199a!2m2!1d80.2182955!2d13.0875528?entry=ttu'
        }
    })
}


var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})
var Hidden_Element = document.querySelectorAll('.hidden')
Hidden_Element.forEach((el) => observer.observe(el));
