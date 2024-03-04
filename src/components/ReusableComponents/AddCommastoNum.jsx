// Helper function to add commas to deal signed value
const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

export default addCommasToNumber;