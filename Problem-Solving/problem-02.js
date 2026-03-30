function validOtp(otp) {
 
  if (typeof otp !== 'string') {
    return 'Invalid';
  }

 
  else if (otp.length !== 8) {
    return false;
  }


  else if (!otp.startsWith("ph-")) {
    return false;
  }

  return true;
}
const confirmation = validOtp("ph-10985");
console.log(confirmation)