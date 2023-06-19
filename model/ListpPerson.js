import * as res from "../model/Class.js";
import removeVietnameseTones from "../js/help.js";

export default class Listperson {
  constructor() {
    this.arrListPerson = [];
  }
  themNguoiDung(employee) {
    this.arrListPerson.push(employee);
  }
  renderTable() {
    let content = this.arrListPerson.map((item, index) => {
      let person = new res.default.Employee();
      Object.assign(person, item);

      let { maDoiTuong, tenNguoiDung, email, diaChi, loai } = item;
      return `<tr>
        <td>${maDoiTuong}</td>
        <td>${tenNguoiDung}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${
          loai == "loai1" ? "Student" : loai == "loai2" ? "Employee" : "Custome"
        }</td>
        <td>
          <button class="bg-danger" onclick="xoaNguoiDung('${maDoiTuong}')">Xóa</button>
          <button class="bg-warning" onclick="layThongTin('${maDoiTuong}')">Cập Nhật</button>
        </td>
      </tr>`;
    });
    document.getElementById("tbodyDanhSach").innerHTML = content;
  }
  luulocal() {
    localStorage.setItem("arrListPerson", JSON.stringify(this.arrListPerson));
  }
  laylocal() {
    let personlocal = JSON.parse(localStorage.getItem("arrListPerson"));
    if (personlocal) {
      this.arrListPerson = [...personlocal];
      this.renderTable();
    }
  }
  xoaNguoiDung(ma) {
    let index = this.arrListPerson.findIndex((item) => item.maDoiTuong == ma);
    if (index != -1) {
      this.arrListPerson.splice(index, 1);
      this.renderTable();
      this.luulocal();
    }
  }
  layThongTin(ma) {
    let valuePerson = this.arrListPerson.find((item) => item.maDoiTuong == ma);
    if (valuePerson) {
      document.getElementById("btnThem").click();
      let arrInput = document.querySelectorAll(
        "#FormPerson input, #FormPerson select, #FormPerson textarea"
      );
      for (let item of arrInput) {
        let { id } = item;
        item.value = valuePerson[id];
      }
    }
  }
  capNhatThongTin(employee) {
    let index = this.arrListPerson.findIndex(
      (item) => item.maDoiTuong == employee.maDoiTuong
    );
    if (index != -1) {
      this.arrListPerson[index] = employee;
      this.renderTable();
      this.luulocal();
      document.getElementById("btnClose").click();
    }
  }

  timKiemNguoiDung(keyword) {
    let newKeyWord = removeVietnameseTones(keyword);
    let arrTimKiem = this.arrListPerson.filter((item) => {
      let loaiNguoiDung = removeVietnameseTones(item.loai);
      console.log(loaiNguoiDung);
      return loaiNguoiDung
        .toLowerCase()
        .trim()
        .includes(newKeyWord.toLowerCase().trim());
    });
    console.log(arrTimKiem);
  }
}
