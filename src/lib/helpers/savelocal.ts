import { IdCollection } from "./localvariable";
function save(data: string): any {
  localStorage.setItem("id", data);
}
const savelocal = (id: string) => {
  IdCollection.push(id);
  save(JSON.stringify(IdCollection));
};

export default savelocal;

// import { useState } from "react";

// let GlobalArray: string[] = [];
// function save(data: string): any {
//   localStorage.setItem("id", data);
// }
// function multipleSave() {
//   let array = ["tes 1", "tes 2", "tes 3"];
//   localStorage.setItem("Array", JSON.stringify(array));
// }
// function existsave(): any {
//   let items = get();
//   let showdata = localStorage.setItem("id", "ready before" + items);
//   return showdata;
// }

// function get(): any {
//   let showdata = localStorage.getItem("id");
//   return showdata;
// }
// function getArray(): any {
//   let arrayls = localStorage.getItem("Array");
//   let showdata;
//   if (typeof arrayls === "string") {
//     showdata = JSON.parse(arrayls);
//     console.log(showdata);
//     return showdata;
//   }
//   return null;
// }
// function AddtoArray(data: string) {
//   GlobalArray.push(data);
//   save(JSON.stringify(GlobalArray));
//   console.log(get());
// }
// function DeleteData() {
//   localStorage.removeItem("id");
//   GlobalArray = [];
// }
// function GetFilteredData() {
//   let array1: number[] = [1, 2, 3, 4, 5];
//   let array2 = JSON.parse(get());
//   let array2fix: number[] = [];
//   array2.map((data: number) => array2fix.push(+data));
//   let filteredArray1 = array1.filter((el) => !array2fix.includes(el));
//   console.log(filteredArray1);
// }
// export default GetFilteredData
// export default  get

// /**
//  *
//  *
//   // for (let i = 0; i <= array2.length; i++) {
//   //   if (array2[i] != array1[i]) {
//   //     filteredarray.push(array2[i]);
//   //   }
//   // }
//  */
