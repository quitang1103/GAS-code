function main1(){
  const Sheet_ID = '17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4';
  const sheetName = "Controller2"; // Tên của trang tính chứa dữ liệu
  var rows = 5; // Số hàng
  var columns = 3; // Số cột
  var myArray = createArrayFromSheet(sheetName, rows, columns); // Lấy dữ liệu từ trang tính
  return myArray
}
function print(){;
  var myArray = main1()
Logger.log(myArray);}