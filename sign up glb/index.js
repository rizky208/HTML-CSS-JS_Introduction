// // get
// fetch("https://63a962a3594f75dc1db4202f.mockapi.io/dataUSer")
//   .then((res) => {
//     if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// // post
// //data modifier
// let dataUserTemp = {
//   email: "RomeoXray@uvu.com",
//   password: "UQuJB6mIXsaLJOx",
//   phone: "800-345-4110",
// };
// // input
// let input = (param) => {
//   return document.getElementById(param);
// };

// input("email-input").onchange = (text) => {
//   dataUserTemp.email = input("email-input").value;
// };

// input("password-input").onchange = (text) => {
//   dataUserTemp.password = input("password-input").value;
// };

// input("phonenumber-input").onchange = (text) => {
//   dataUserTemp.phone = input("phonenumber-input").value;
// };
// console.log(dataUserTemp);

// const addNewData = () =>
//   fetch("https://63a962a3594f75dc1db4202f.mockapi.io/dataUSer", {
//     method: "POST",
//     body: dataUserTemp,
//   })
//     .then((res) => {
//       if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));

const formEl = document.querySelector(".form");

formEl.addEventListener("signUp", (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = new URLSearchParams(formData);

  fetch("https://63a962a3594f75dc1db4202f.mockapi.io/dataUSer", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
