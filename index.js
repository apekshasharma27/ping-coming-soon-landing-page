function validation()
{
  let email = document.querySelector(".email");
  let errorMsg =document.querySelector("#error");
  if(!email.value)
  {
    email.setCustomValidity("Whoops! It looks like you forgot to add your email");
    error.innerHTML=email.validationMessage;
    return false;
  }
}
