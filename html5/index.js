function validate(e)
{
    e.preventDefault()
    var ch = document.getElementById("box1");
    var numb = document.getElementById("box2");

    if(ch.value == "" || numb.value=="")
    {
        alert("No Blank Values allowed");
    }
    
    else if((numb.value !== (0-9)) && (ch.value == (a-zA-Z)))
    {
        text="Error!! Number";
    }
    
    else if((numb.value == (0-9)) && (ch.value !== (a-zA-Z)))
    {
        text="Error!! Character"
    }
   
    else
    {
        text="Input OK";
    }
    
    const box1 = input.value;
    const demo = document.createElement("demo");
    demo.innerText = demoel;
    demo.appendChild(demoel);
  //  document.getElementById("demo").innerHTML = text;

}