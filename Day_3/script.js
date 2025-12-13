// var x=[];
// var a=new Array();
// a[0]=10
// a[1]="Amit Mishra"
// a[2]=12.345
// a[0]=30

// console.log(a.push());
// // Two 2D array
// var x=[[10,20,30],[40,50,60],[70,80,90]]
// console.log(x[0][2])


// Book Managementt Program 
document.writeln("Book Management System :")
books=[]
input =prompt("Which Operation You Want to Perform - Add | List | Exit ")
while(input !='exit')
{
    if(input== 'Add') {
        newBook=prompt("Enter a Book Name :")
        books.push(newBook);
    }
    else if(input =='List')
    {
        console.log(books);
    }
    else{
        console.log("Invalid Input :")
    }
    input =prompt("Which Operation You Want to Perform - Add | List | Exit ")

}
console.log("Completed")