//MVC: mo hinh quan ly project
//M: models chua cac file class(prototype) - lop doi tuong, moi class doi tuong la 1 file
//v: view la noi chua cac file html
//C: controllers la noi chua file xu ly cho giao dien

// document.querySelector('#btnThemSinhVien').onclick = function () {
//     var sv = new SinhVien();
//     sv.maSinhVien = document.querySelector('#maSinhVien').value;
//     sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
//     sv.email = document.querySelector('#email').value;
//     sv.ngaySinh = document.querySelector('#ngaySinh').value;
//     sv.khoaHoc = document.querySelector('#khoaHoc').value;
//     sv.matKhau = document.querySelector('#matKhau').value;
//     sv.diemToan = document.querySelector('#diemToan').value;
//     sv.diemLy = document.querySelector('#diemLy').value;
//     sv.diemHoa = document.querySelector('#diemHoa').value;

//     let sumDTB = sv.diemTrungBinh();

//     console.log(sv)
//     //cach 1: tao html = create element

//     //b1 tao the tr
//     let trSinhVien = document.createElement('tr');
//     //bhai : tao the td

//     let tdMaSinhVien = document.createElement('td');
//     tdMaSinhVien.innerHTML = sv.maSinhVien;

//     let tdTenSinhVien = document.createElement('td');
//     tdTenSinhVien.innerHTML = sv.tenSinhVien;

//     let tdEmail = document.createElement('td');
//     tdEmail.innerHTML = sv.email;

//     let tdNgaySinh = document.createElement('td');
//     tdNgaySinh.innerHTML = sv.ngaySinh;

//     let tdKhoaHoc = document.createElement('td');
//     tdKhoaHoc.innerHTML = sv.khoaHoc;

//     let tdTrungBinh = document.createElement('td');
//     tdTrungBinh.innerHTML = sv.diemTrungBinh();

//     //btn chucnang
//     let btnXoa = document.createElement('button')
//     btnXoa.innerHTML = 'xóa'
//     btnXoa.className = 'btn btn-danger'

//     let btnSua = document.createElement('button');
//     btnSua.innerHTML = 'sửa';
//     btnSua.className = "btn btn-primary"

//     let btnChucNang = document.createElement('td')
//     btnChucNang.appendChild(btnXoa);
//     btnChucNang.appendChild(btnSua);


//     //them noi dung vao tr
//     trSinhVien.appendChild(tdMaSinhVien);
//     trSinhVien.appendChild(tdTenSinhVien);
//     trSinhVien.appendChild(tdEmail);
//     trSinhVien.appendChild(tdNgaySinh);
//     trSinhVien.appendChild(tdKhoaHoc);
//     trSinhVien.appendChild(tdTrungBinh);
//     trSinhVien.appendChild(btnChucNang);
//     //them tr vao giao dien
//     let tBody = document.querySelector('#tblSinhVien');
//     tBody.appendChild(trSinhVien)

// }

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

    let sumDTB = sv.diemTrungBinh();

    let trSinhVien = document.createElement('tr');
    trSinhVien.innerHTML = `
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.email}</td>
        <td>${sv.ngaySinh}</td>
        <td>${sv.khoaHoc}</td>
        <td>${sumDTB}</td>
        <td>
            <button class="btn btn-danger">xóa</button>
            <button class="btn btn-primary">sửa</button>
        </td>
    `;

    document.querySelector('#tblSinhVien').appendChild(trSinhVien);
}
