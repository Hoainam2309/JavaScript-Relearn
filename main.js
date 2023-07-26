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
