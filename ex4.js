// bai 1
// let a = +prompt("Nhập số thứ nhất: ");
// let b = +prompt("Nhập số thứ hai: ");
// let c = +prompt("Nhập số thứ ba: ");
// function findMax() {
//     let max = a;
//     if (max < b) {
//         if (b < c) {
//             max = c
//         }
//         else {
//             max = b
//         }
//     }
//     alert("Số lớn nhất là :" + max)
// }
// findMax(a, b, c);


// // bai 2
// let isPrime = +prompt("Nhập số nguyên cần kiểm tra : ")
// function checkNumber(isPrime) {
//     let check = true;
//     for (let i = 2; i <= Math.sqrt(isPrime); i++) {
//         if (isPrime % i == 0) {
//             return false;
//         }
//     }
//     return check;
// }
// const result = checkNumber(isPrime);
// if (result) {
//     console.log("là số nguyên tố");
// }
// else {
//     console.log("Không là số nguyên tố");
// }

// bai 3

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function total(arr) {
//     let pairs = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 10) {
//                 pairs.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return pairs;
// }
// let result = total(arr)
// console.log("các cặp số có tổng bằng 10 là", result);

// bai 4
function countCharacterFrequency(str) {
    let frequency = {};

    // Tính tần suất xuất hiện của mỗi ký tự trong chuỗi
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }

    // In ra tần suất xuất hiện của mỗi ký tự
    for (let char in frequency) {
        console.log("'" + char + "': " + frequency[char] + " lần");
    }
}

let userInput = prompt("Nhập vào một chuỗi kí tự:");
countCharacterFrequency(userInput);


// function countCharacterFrequency() {

// }
// let str = prompt("Mời bạn nhập chuỗi :");
// let arr = str.split("")
// console.log(arr);
// // for (let i = 1; i <= arr.length; i++) {
//     if (arr[0])
// }


// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
//  Thực thi hàm vừa khởi tạo.



// let num = +prompt("Nhập 1 số nguyên bất kỳ : ");
// function tinhgiaithua(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     else {
//         let result = 1
//         for (let i = 2; i <= num; i++) {
//             result = result * i;
//         }
//         return result;


//     }

// }

// let giaithua = tinhgiaithua(num);
// console.log(giaithua);

// Bài 6: Cho người dùng nhập vào chuỗi số bất kì. 
// Viết hàm sắp xếp chuỗi số đó từ bé đến lớn

// let n = prompt("Nhập vào chuỗi số:")
// let arr = n.split("")
// console.log(arr);
// function arrangeNumber(a, b) {
//     return (a - b);



// }
// arrangeNumber(arr);
// console.log(arr.sort(arrangeNumber).join(""));

// Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không

function checkNamnhuan(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let year = +prompt(`Nhập số năm cần check : Năm nhuận(true); Không nhuận(false) `);
let result = checkNamnhuan(year);
alert(result)













