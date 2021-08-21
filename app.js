const outputScreen = document.querySelector('#output-screen');


//clicked number shows in output screen
function display(num){
 outputScreen.value += num;
}

function Calculate(){
    outputScreen.value = eval(outputScreen.value)
}

function Clear(){
    outputScreen.value = '';
}

function del(){
    try{
       outputScreen.value = outputScreen.value.slice(0,-1)
    }
    catch(err){
        alert('Invalid')
    }
}