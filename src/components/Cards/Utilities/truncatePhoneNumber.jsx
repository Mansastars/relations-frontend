const truncatePhoneNumber = (phoneNumber, maxLength) => {
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  if (digitsOnly.length <= maxLength) return phoneNumber;
  return "+" + digitsOnly.substring(0, maxLength - 1) + "...";
};

export default truncatePhoneNumber;
