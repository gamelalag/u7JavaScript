inputdiemVatLy = prompt("Hay nhap diem Vat Li");
inputdiemHoa = prompt("Hay nhap diem Hoa");
inputdiemSinhHoc = prompt("Hay nhap diem Sinh Hoc");
let diemVatLy = parseInt(inputdiemVatLy);
let diemHoa = parseInt(inputdiemHoa);
let diemSinhHoc = parseInt(inputdiemSinhHoc);
let tb = (diemVatLy +diemHoa +diemSinhHoc)/3;
document.write("Diem trung binh 3 mon la "+ tb);
