// DIVS
let forget_password_parts = [
  document.querySelector("#forget-password-part-1"),
  document.querySelector("#forget-password-part-2"),
  document.querySelector("#forget-password-part-3")
];

// BTNS
let get_otp = document.querySelector("#get-otp");
let verify_otp = document.querySelector("#verify-otp");
let set_passwd = document.querySelector("#set-password");

// Function to handle displaying/hiding parts
function togglePasswordParts(partToShow) {
  forget_password_parts.forEach(part => {
    part.style.display = "none";
  });
  partToShow.style.display = "block";
}

// Event listeners
get_otp.addEventListener('click', function(event) {
  togglePasswordParts(forget_password_parts[1]);
});

verify_otp.addEventListener('click', function(event) {
  togglePasswordParts(forget_password_parts[2]);
});
