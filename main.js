let diemToan = '4';
let diemHoa = '5';
let diemLy = '6';

let diemTrungBinh = 0;

diemTrungBinh = (Number (diemToan + diemLy + diemHoa)) /3;
 ;

console.log('điểm trung bình', diemTrungBinh);

///tính chiều dài cạnh huyền
canh1 = 3;
canh3 = 4;

let binhPhuongCH = (canh1 * canh1) + (canh3 * canh3);
console.log('kết quả',binhPhuongCH)

let result = Math.sqrt(binhPhuongCH);

console.log('kết quả', result);


//function ham thuc thi

function handleClick () {
    
document.getElementById('txt').innerHTML = 'haiiii';

document.getElementById('iText').value = 'hello bc28';

}

function clickMe (){
    let tagP = document.getElementById('ptext');
    document.getElementById('h3Text').innerHTML = 'javascript dinh ghe';
   tagP.innerHTML = 'doi r nghe';
   tagP.style.color = 'red';
   tagP.style.fontSize = '10px';
   tagP.className = 'alert alert-danger';
}



let btnLamMo = document.getElementById('lamMo');

btnLamMo.onclick = function () {
    let tagH3 = document.getElementById('h3Vidu');

    tagH3.innerHTML = 'fe tai nha';
    tagH3.style.backgroundColor = 'orange'
    tagH3.style.opacity = '0.1';
    tagH3.style.border = '1px';
    document.getElementById('viDu').style.display = 'none';

}


//bai tap tinh tien TIP
let tinhTien = document.getElementById('btnTinh');
tinhTien.onclick = function () {
    let tongNhanVien = Number(document.getElementById('tongTienNhanVien').value);

    let phanTram = Number(document.getElementById('phanTranTip').value);

    let soTipNhanVien = Number(document.getElementById('soNhanVienTip').value);

    let tienTip = 0;

    tienTip = (tongNhanVien * soTipNhanVien) / phanTram ;

    document.getElementById('tienTip').innerHTML = tienTip;
  

}


let cal = document.getElementById('tinhTri');

cal.onclick = function() {
let num = Number(document.getElementById('number1').value);

let ouput = num;

if(num < 0 ) {
    ouput = -num;
}

document.getElementById('ketQuaCal').innerHTML = ouput;




}

let max = document.getElementById('btnInMax');

max.onclick = function() {
    let num1 = Number(document.getElementById('soMot').value);
    let numHai = Number(document.getElementById('soHai').value);

    let result = 0;

    if(num1 > numHai){
        result = num1;
    }else {
        result = numHai;
    }

    document.getElementById('ketQuaMax').innerHTML = result;

}


let btnDtb = document.getElementById('clickToTinh');

btnDtb.onclick = function () {
let toan = Number(document.getElementById('toan').value);
let ly = Number(document.getElementById('ly').value);
let hoa = Number(document.getElementById('hoa').value);

let dtb = 0;

dtb = (toan + ly + hoa) / 3;

let result = '';
if(dtb<5){
    result ="Kém";
}else if (dtb >= 5 && dtb <6.5) {
    result="Trung Bình" ;
}else if (dtb > 6.5 && dtb <8) {
    result= "Đạt ";
}else if (dtb >8 && dtb <10) {
    result= "Giỏi ";
}

document.getElementById('ketQuaDTB').innerHTML = 'Điểm'+ dtb + ' - xếp loại' + result;

}

let btnLuong = document.getElementById ('tinhLuong');

btnLuong.onclick = function () {
    let soGioLam = Number(document.getElementById('soGioLam').value);
    let luong = Number(document.getElementById('Luong').value);

    let result =0;

    if (soGioLam <= 40) {
        result = soGioLam * luong;
    }else {
        result = (luong * 40) + ((soGioLam -40 ) * luong * 1.5)
    }
    

    document.getElementById('ketQuaLuong').innerHTML = result + '$';
}


let tinhSl = document.getElementById('tinhPhanTram');
tinhSl.onclick = function () {
    let sanPham = document.getElementById('tenSp').value;
    let soLuong = Number(document.getElementById('soLuong').value);
    let donGia = Number(document.getElementById('donGia').value);

    let tong = 0;

    if(soLuong <= 50) {
        tong = soLuong * donGia;
    }else if (soLuong > 50 | soLuong <= 100) {
        tong = soLuong * donGia * 92 /100;
    } else if (soLuong >100) {
        tong = soLuong * donGia  * 88/100;
    }


    document.getElementById('KetQuaGia').innerHTML = sanPham + ' có giá là' + tong;

    
}

let btnDocSo = document.getElementById('btnDocSo');

btnDocSo.onclick = function () {
    let nhapSo = Number(document.getElementById('nhapSoDi').value);

    let result = '';

    // if(nhapSo === 1) {
    //     result = 'số 1';
    // }else if (nhapSo === 2) {
    //     result = 'số 2'
    // }else if (nhapSo === 3) {
    //     result = 'số 3'
    // }else if (nhapSo ===4) {
    //     result = 'số 4'
    // }else {
    //     result = 'số không hơp lệ nhập lại';
    // }

    switch(nhapSo){
        case  1:{
            result ='số 1';
        }; break;
        case 2: {
            result ='số 2';
        }; break;
        case 3: {
            result ='số 3';
        }; break;
        case 4: {
            result ='số 4';
        };break;
        default :{
            result = 'số không hợp lệ';
        }
    }


document.getElementById('ketQuaSo').innerHTML = result;

}

let txt1 = document.getElementById('text1');
txt1.innerHTML = 'hello ';
txt1.style.color = 'red';

let txt3 = document.getElementById('text3');
txt3.innerHTML = 'hello';
txt3.style.color = 'blue';

let txt4 = document.getElementById('text4');
txt4.innerHTML = 'hello';
txt4.style.color = 'violet';


function handleChange (id,content,color) {
    let txt1 = document.getElementById(id);
    txt1.innerHTML = content;
    txt1.style.color = color;
}

handleChange('text1','hello','red');
handleChange('text3','hello','blue');
handleChange('text4','hello','violet');


let btnUp = document.getElementById('btnUp');

btnUp.onclick = function() {
    changeSize('fa', 10)
}
let btnDown = document.getElementById('btnDown');

btnDown.onclick = function() {
    changeSize('fa', -10)
}


function changeSize(id,fontSize) {
    let size = document.getElementById(id).style.fontSize;
    console.log(size)
    size = Number(size.replace('px',''));
    console.log(size)
    size += fontSize;

    document.getElementById(id).style.fontSize = size + 'px';



} 

// tính tiền  xe

 let loaiXe = '';
 let soKM = 0;
 let thoiGian = 0;


 document.getElementById('grabCar').onclick = function() {
    loaiXe = document.getElementById('grabCar').id;
    console.log(loaiXe)
 }
 document.getElementById('grabSUV').onclick = function ()
 {
    loaiXe = document.getElementById('grabSUV').id;
    console.log(loaiXe)
 }

 document.getElementById('grabBlack').onclick = function(){
    loaiXe = document.getElementById('grabBlack').id;
    console.log(loaiXe)
 }
 let tongTien = 0;


 document.getElementById('btnTienXe').onclick = function () {
    soKM = Number(document.getElementById('soKM').value);
    thoiGian = Number(document.getElementById('thoiGian').value);

    //cách 1: dùng switch
    switch(loaiXe){
        case "grabCar": {
            // if (soKM = 1 ){
            //     tongTien = 8000 + thoiGian * 2000;
            // }else if (soKM > 1 && soKM <= 19) {
            //     tongTien = 7500 * soKM + thoiGian * 2000;

            // }else if (soKM > 19) {
            //     tongTien = 7000 * soKM + thoiGian * 2000;
            // }
           tongTien =  tinhTongTien(8000,7500,7000,2000);
        };break;
        case 'grabSUV': {
            // if(soKM = 1) {
            //     tongTien = 9000 + thoiGian *3000;
            // }else if (soKM > 1 && soKM <= 19) {
            //     tongTien = 8500 * soKM + thoiGian * 3000;
            // }else if (soKM > 19) {
            //     tongTien = 8000 * soKM + thoiGian * 3000;
            // }
            tongTien = tinhTongTien(9000,8500,8000,2000);
        };break;
        case 'grabBlack':{
            // if (soKM = 1) {
            //     tongTien = 10000 + thoiGian * 3500;
            // }else if (soKM > 1 && soKM <= 19) {
            //     tongTien = 9500 * soKM + thoiGian * 3500;
            // }else if (soKM > 19) {
            //     tongTien = 9000 * soKM + thoiGian * 3500;
            // }
            tongTien = tinhTongTien(10000,9500,9000,2000);
        };break;
        default: {
            console.log('chọn lại loại xe dùm đi ba :3')
        }
    }
    console.log(tongTien)

    document.getElementById('tienXe').innerHTML = tongTien + 'VNĐ';


 }
 function tinhTongTien (tien1KM,tienNhoHon19km,tienLonHon19km,tienCho) {
       if (soKM = 1 ){
                tongTien = tien1KM + thoiGian * tienCho;
            }else if (soKM > 1 && soKM <= 19) {
                tongTien = tienNhoHon19km * soKM + thoiGian * tienCho;

            }else if (soKM > 19) {
                tongTien = tienLonHon19km * soKM + thoiGian * tienCho;
            }
            return tongTien;
 }

 document.getElementById('btnIn').onclick = function () {
    document.getElementById('display').style.display = 'none';
    document.getElementById('printDiv').style.display = 'block';
    window.print();
 }



