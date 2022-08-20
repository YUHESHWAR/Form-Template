let data ={};
var form_ele = document.querySelector('form');
form_ele.addEventListener('submit',(e)=>{
    var inputs = e.target.elements;
    e.preventDefault();
    for(var i = 0;i<inputs.length;i++){
        if( inputs[i].nodeName === "INPUT" && inputs[i].type=='radio')
            data[inputs[i].name] = (document.querySelector(`input[type=radio][name=${inputs[i].name}]:checked`)).value;
        else if ( inputs[i].nodeName === "INPUT" || inputs[i].nodeName === "TEXTAREA")
            data[inputs[i].name] = inputs[i].value;
    }
    console.log(data);
})

//To control the theme of the form
var body = document.querySelector('body')
var themeFlag= false;
function change(){
    if(themeFlag){
        body.classList.replace('theme','white');
        themeFlag=false;
    }
    else{
        body.classList.replace('white','theme');
        themeFlag=true;
    }
}



