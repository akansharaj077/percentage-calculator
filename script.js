function per(){
    var a=parseInt(document.getElementById('num1').value);
    var b=parseInt(document.getElementById('num2').value);
    var c=a/b;
    document.getElementById("res").innerHTML="Result = "+ c+"%";
}