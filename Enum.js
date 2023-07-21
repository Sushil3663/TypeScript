"use strict";
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
var Days;
(function (Days) {
    // sun="sunday",mon="monday"
    Days[Days["sun"] = 1] = "sun";
    Days[Days["mon"] = 2] = "mon";
    Days[Days["tue"] = 3] = "tue";
    Days[Days["wed"] = 4] = "wed";
    Days[Days["thus"] = 5] = "thus";
    Days[Days["fri"] = 6] = "fri";
})(Days || (Days = {}));
const days = (days) => {
    return days;
};
console.log(days(Days.mon));
