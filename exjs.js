

// console.log(a);

function fun() {
    const a = document.getElementById("1");
  a.style.textAlign = "center";
  a.innerHTML = "You are changed";
}


function fun2(){
    const bool =true;
    const para2=document.getElementById("para2");
    if(bool == true){
        bool = false;
        para2.style.display="none";
    }
    else{
        bool  = true;
        para2.style.display="show";
    }
}

function addItem() {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode('Masla dosa'));
    document.querySelector('ul').appendChild(node);
}

function change(){
    const inputField=document.getElementById('input').value;

    var node = document.createElement('li');
    node.appendChild(document.createTextNode(inputField));
    document.querySelector('ul').appendChild(node);



    document.getElementById("para").innerHTML=inputField; 
}
