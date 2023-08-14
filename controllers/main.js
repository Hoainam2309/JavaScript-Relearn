//MVC: mo hinh quan ly project
//M: models chua cac file class(prototype) - lop doi tuong, moi class doi tuong la 1 file
//v: view la noi chua cac file html
//C: controllers la noi chua file xu ly cho giao dien

let mangSinhVien = [];

document.querySelector('#btnThemSinhVien').onclick = function () {
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.ngaySinh = document.querySelector('#ngaySinh').value;
    sv.khoaHoc = document.querySelector('#khoaHoc').value;
    sv.matKhau = document.querySelector('#matKhau').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;

    mangSinhVien.push(sv);
    console.log(mangSinhVien);
    renderTableSinhVien(mangSinhVien);
}


function renderTableSinhVien(arrSinhVien) {
    console.log(arrSinhVien);
    let htmlContent = '';
    let sv = [];
    for (let index = 0; index < arrSinhVien.length; index++) {
       sv = arrSinhVien[index];
        console.log(sv);
        let tr = `
            <tr>
                <td>${sv.maSinhVien}<td/>
                <td>${sv.tenSinhVien}<td/>
                <td>${sv.email}<td/>
                <td>${sv.ngaySinh}<td/>
                <td>${sv.khoaHoc}<td/>
                <td>${sv.diemTrungBinh()}<td/>
                <td>
                <button id="xoaBTN" class="btn btn-danger" onclick="xoaTbl('${index}')">Xóa</button>
                <button id="suaBTN" class="btn btn-primary">Sửa</button>
                <button id="xoaMaSV" class="btn btn-primary" onclick="xoaMaSinhVien('${sv.maSinhVien}')">Xóa Mã Sinh Viên</button>
              </td>
            <tr/>
        `;
        htmlContent += tr;
        console.log(htmlContent)

        document.querySelector('#tblSinhVien').innerHTML = htmlContent;
    }


}
function xoaTbl(index){
    mangSinhVien.splice(index,1)
    renderTableSinhVien(mangSinhVien);
}

function xoaMaSinhVien(maSV){
    // alert('hellu')
    let viTri = -1;

    for(let index = 0; index < mangSinhVien.length; index++){
        let sv = mangSinhVien[index]
        if(sv.maSinhVien === maSV){
            viTri = index;
        }
    }
    mangSinhVien.splice(viTri,1)

    renderTableSinhVien(mangSinhVien);

}

