var screen=document.querySelector('#screen');
var button=document.querySelectorAll('.btn');
var arr=[];
var temp='';
var i=0;

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
    arr.push(screen.value);
}

function cos()
{
    screen.value=Math.cos(screen.value)
    arr.push(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value)
    arr.push(screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2)
    arr.push(screen.value);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value)
    arr.push(screen.value);
}

function log()
{
    screen.value=Math.log(screen.value)
    arr.push(screen.value);
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
    arr.push(screen.value);

}

function backspace()
{
    screen.value=screen.value.substr(0,screen.value.length-1)
}


function inverse()
{
    screen.value=1/(screen.value)
    arr.push(screen.value);
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
    arr.push(screen.value);
    
}

function minusm(){
    if(arr.length-i<=0)
    {
        i=i+1;
        screen.value='NO DATA'
    }
    else{
        i=i+1;
        screen.value=arr[arr.length-i];
        
    }
    
}

function plusm(){
    if(i<=1){
        if(i!=0)
        {
            i=i-1
        }
        screen.value="NO DATA"
    }
    else{
        i=i-1;
        screen.value=arr[arr.length-i];
        
    }
}

function mcbutton(){
    arr=[]

}