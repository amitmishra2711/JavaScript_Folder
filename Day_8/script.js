// function outer()
// {
//     // inner()
//     console.log("This is Outer ")
//     // inner()
//     function inner()
//     {
//         console.log("This is Inner")
//     }
//     return inner;
// }
// let x=outer()
// x()
// x()
// x()
// x()
// x()


//Curring

// function add(a)
// {
//     function sum(b)
//     {
//         function total(c)
//         {
//             return a+b+c;
//         }
//         return total;
//     }
//     return sum;
// }
// let x= add(10)
// let y=x(10)
// console.log(y(30))


function Volume(length)
{
    return function(width)
    {
        return function(height)
        {
            return length*width*height;
        }
    }
}

// let x=Volume(2)(3)(5)
// console.log(x)
// seocnd Way

let length=Volume(2)
let width=length(3);
let height=width(5)
console.log(height)
