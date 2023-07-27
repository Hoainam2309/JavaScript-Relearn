document.getElementById('btnInSao').onclick = function () {
    let soHang = Number(document.getElementById('soHang').value);
    let soCot = Number(document.getElementById('soCot').value);
    //output: string
    let output = '';
    //progress
    for(let soLanHang = 1; soLanHang <= soHang; soLanHang++) {
        // for(let soLan = 1; soLan <= soCot;soLan++) {
        //     output += ' * ';
        // }
        // let hangSao = inSao(soCot);
        let inHangSao = inSao(soCot);
        output += inHangSao;
        output += '<br/>'
    }
    document.getElementById('ketQua1').innerHTML = output;
}
function inSao(soCot){
    let output = '';

    for(let i = 1; i <= soCot; i++ ) {
        output += '*';
    }
    return output;
}



document.getElementById('btnInSoNguyen').onclick =function () {
    let nhapSo = Number(document.getElementById('nhapSo2').value);

    let result = ''; //'2357
    for(let i = 2; i<= nhapSo;i++) {
        let kiemTra = inSoNguyen(i);
        if(kiemTra) {
            result += i + ' ';
        }
    }
    document.getElementById('ketQua2').innerHTML = result;
   


}

function inSoNguyen (iSo) {
    let output = true;
    for(let i = 2; i <= Math.sqrt(iSo);iSo++) {
        if(iSo % 2 ==0 ) {
            output = false;
            break;
        }
    }

    return output;


}