// function day(ngay,thang){

//     console.log(`Hôm nay là ngày ${ngay} tháng ${thang} `);
// }
// day(9,5);

// const day2 = () => {
//     //do some thing
// }

// // const arr = [3, 8, 4, 10, 12, 11]
// // arr. sort(a,b) => {a-b} 
// function thu(a) {
//     switch (a) {
//         case 2:
//             console.log("Thứ 2");
//             break;
//         case 3:
//             console.log("Thứ 3");
//             break;
//         case 4:
//             console.log("Thứ 4");
//             break;
//         case 5:
//             console.log("Thứ 5");
//             break;
//         case 6:
//             console.log("Thứ 6");
//             break;
//         case 7:
//             console.log("Thứ 7");
//             break;
//         case 8:
//             console.log("Chủ Nhật");
//             break;
//         default:
//             break;
//     }


// }


// let a;

// do {

//     a = +prompt("Mời bạn nhập số từ 2-8");

// }
// while (a < 2 || a > 8)


// // thu(a);
// let c = +prompt("Nhập nhiệt độ theo độ C :  ");
// let K;

// function cToK(c) {
//     K = 273 + c;
//     return K;



// }


// if (K < 400)
//     console.log("bt");
// else {
//     console.log("Bị sốt");
// }

// cToK(c);


// Tự khai báo hai biến a, b ngẫu nhiên tùy thích;
// viết function tăng a, b lên 10 đơn vị; có return ra a,b;
// log a, b trước khi gọi hàm, trong hàm và sau khi gọi hàm


// let a = +prompt("Nhập số ngẫu nhiên :");
// let b = +prompt("Nhập số ngẫu nhiên :");
// console.log(a, b);

// function result(a, b) {
//     a += 10;
//     b += 10;
//     console.log(a, b);

// }


// result(a, b);
// console.log(a, b);


// Khai báo 1 mảng
// viết function sắp xếp theo chiều giảm dần có dùng sort
// log mảng trước , trong, sau khi gọi


let arr = [1, 5, 3, 4, 9, 7, 6, 8, 12];
console.log(arr);
function result(arr) {
    // arr.sort((a, b) => a - b)
    arr.sort();
    console.log(arr);
}
result(arr);
console.log(arr);