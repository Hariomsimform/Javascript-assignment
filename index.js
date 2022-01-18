var screen=document.querySelector('#screen');
var button=document.querySelectorAll('.btn');

for(item of button)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='X')
        {
            btntext='*';
        }
        if(btntext=='%')
        {
            btntext='/';
        }
        if(btntext=='mod')
        {
            
            btntext='%';
        }
       
        screen.value+=btntext;
        
    })
}
function exponential(){
    btntext='**';
    screen.value+=btntext;
}
function sin()
{
    screen.value=Math.sin(screen.value)
}

function cos()
{
    screen.value=Math.cos(screen.value)
}

function tan()
{
    screen.value=Math.tan(screen.value)
}

function pow()
{
    screen.value=Math.pow(screen.value,2)
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value)
}

function log()
{
    screen.value=Math.log(screen.value)
}

function pi()
{
    screen.value=3.14159
}

function e()
{
    screen.value=2.718281828459045
}

function factorial()
{
    var tot=1
    var num=screen.value
    while(num>=1)
    {
        tot=tot*num
        num-=1
    }
    screen.value=tot

}

function backspace()
{
    screen.value=screen.value.substr(0,screen.value.length-1)
}


function inverse()
{
    screen.value=1/(screen.value)
}

function modedata()
{
    if(screen.value<0)
    {
        screen.value=screen.value*(-1)
    }
    else{
        screen.value=screen.value
    }

}

function powerten(){
    screen.value=Math.pow(10,screen.value)
    
}