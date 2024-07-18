export const checkValidation = (email,password,fullName)=>{

const isFullNameValid = fullName ? /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(fullName): true;
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(fullName && !isFullNameValid) return "Name is not valid";
if(!isEmailValid) return "Email is not valid";
if(!isPasswordValid) return "Password is not valid";

return null;
}