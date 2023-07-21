// enum Days{
//     sun=1,mon,tue,wed,thus,fri
// }

// // let whichDays:Days;
// // whichDays = Days.sun
// let whichDays = Days.mon

// console.log(whichDays)

// enum Days{
//     sun="sunday",mon="monday",tue="tusday",wed="wednesday",thus="Thuday",fri="friday"
// }

// // let whichDays:Days;
// // whichDays = Days.sun
// let whichDays = Days.mon

// console.log(whichDays)

enum Days{
    // sun="sunday",mon="monday"
    sun=1,mon,tue,wed,thus,fri
}

const days = (days:Days) =>{
    return days

}
console.log(days(Days.mon))