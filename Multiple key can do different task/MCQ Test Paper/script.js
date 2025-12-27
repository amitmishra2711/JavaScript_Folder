function total()
{
    let sum=0;
    var ans1=document.getElementsByName("Captain")
    for(i=0;i<ans1.length;i++)
    {
        if(ans1[i].checked && ans1[i].value=="director")
        {
            sum++;
        }
    }
 var ans2=document.getElementsByName("deepika")
    for(i=0;i<ans2.length;i++)
    {
        if(ans2[i].checked && ans2[i].value=="Actress")
        {
            sum++;
        }
    }
      document.getElementById("res").innerHTML=sum
}