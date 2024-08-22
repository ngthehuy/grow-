//login
const block = $(".block");
block.on("click", function () {
  $(".password").each(function () {
    $(this).prop(
      "type",
      $(this).prop("type") === "password" ? "text" : "password"
    );
  });
  $(this).toggleClass("fa-eye");
  $(this).toggleClass("fa-eye-slash");
});

const btnLogin = $(".btn-login");
btnLogin.on("click", function () {
  let passWord = $(".password");
  const valPassword = passWord.val();
console.log(passWord);
  // if (valPassword == "123456") {
  //   window.location.href = "user.html";
  // }
  if(valPassword.length == 6){
 window.location.href = "user.html";
  }else{
    alert("Vui lòng nhập lại...");
  }
   

});