function fun()
{
    var a = document.getElementById("bd").value;
    var dd=new Date(a);
    console.log(dd);
    var b=new Date()
    console.log(b);

    var year=b.getFullYear()-dd.getFullYear();
    console.log(year)
}