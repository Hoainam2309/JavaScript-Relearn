// arrNum = [1,2,3,4,5,6,7,8];
// arrName = ['nam','nhi','an','vy','giau','dinh'];

// for(let index = 0; index <= 5;index++) {

//     console.log(arrName[index]);
// }
/// bài tập về mảng

arrNumber = [2,3,4,4,4,5,6,23,45,56,78];

let btnPush = document.getElementById('btnPush');

btnPush.onclick = function () {
    let nhapSo = Number(document.getElementById('pushArr').value)
    // let arrNum = Number(document.getElementById('arr').id)
    // let output =0;

    // for(let i = 0; i < arrNum.length){
    //     if(nhapSo !==arrNum[i]){
    //         output = output.push(nhapSo)
    //     }
    // }


   let x = nhapSo.push(arrNumber);

   console.log(x)

//    document.getElementById('arr').innerHTML = x;

}

//bài tập
document.getElementById('xoaNha').onclick = function () {
    let giaTri = Number(document.getElementById('giaTri').value);

    let index = -1;

    for(let i = 0; i < arrNumber.length; i++) {
        let ele = arrNumber[i];
        if(ele === giaTri) {
            index = i;
            break;
        }
    }
    if(index !== -1) {
        arrNumber.splice(index,1) 

        document.getElementById('arr').innerHTML = '[' + arrNumber + ']';
    }else {
        console.log('khong tim thay gia tri');
    }



}
//cach 2:

// document.getElementById('xoaNha').onclick = function () {
//     let giaTri = Number(document.getElementById('giaTri').value);
    
//     let index = -1;

//     for(let i = arrNumber.length -1; i >= 0; i--) {
//         let ele = arrNumber[i];
//         if(giaTri === ele){
//             index = i;
//             arrNumber.splice[index, 3]
//         }   
//     }
//     document.getElementById('arr').innerHTML = '[' + arrNumber + ']';
// }


let arrTagName = document.getElementsByTagName('section');

    // arrTagName[0].style.color = 'red';
    // arrTagName[1].style.color = 'red';
    // arrTagName[3].style.color = 'red';
    // arrTagName[4].style.color = 'red';
    // for(index = 0; index <= arrTagName.length; index ++) {
    // arrTagName[index].style.color = 'green';
    // }
    // }
// console.log(arrTagName)

// // let arrClass = document.getElementsByClassName('txt');

// // for(index = 0; index <= arrClass.length; index ++) {
// //     arrClass[index].style.color = 'red';
// // }



// console.log(arrClass)

let btn = document.querySelector('#btnSubmit');
btn.onclick = function() {
    alert('submit');
}
/*-------------------------quẻySelectorall*/
/* truy xuất tất cả các the chứa selector khớp với nó. kết quả trả về luôn*/

let btnLogin = document.getElementById('btnLogin');

btnLogin.onclick = function () {
    let login = document.querySelectorAll('#frmLogin input');

    taiKhoan = login[0].value;
    matKhau = login[1].value;

    console.log(taiKhoan);
    console.log(matKhau);


}
console.log(btnLogin)


arrMax = [1,6,11,15,16,33,55,66,5,7,8];

let btnMax = document.querySelector('.btnMax');
btnMax.onclick = function () {
    // alert('helloooo')
    let index = 0;
    let max = arrMax[0];
    for(let i = 0;i < arrMax.length; i++) {
        let num = arrMax[i];
        if(num > max){
            max = num;
            index = i;
        }
    }

    document.querySelector('.ketQuaMax').innerHTML = 'vi trí' + index +' số lớn nhất là :' + max;

}
