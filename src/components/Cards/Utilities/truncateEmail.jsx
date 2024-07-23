const truncateEmail = (email, maxLength) =>
  email.length <= maxLength ? email : `${email.substring(0, maxLength - 3)}...`;

export default truncateEmail;
