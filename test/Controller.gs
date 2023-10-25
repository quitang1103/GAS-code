function Controller(valueArray) {

  const Sheet_ID_Control = "17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4"; // ID nguồn
  const Sheet_Name_Control ="Controller"; // Tên trang nguồn

  var valueArray = ["Sheet_ID","Sheet_Name","Sheet_IDCopy","Sheet_NameCopy"];

  var spreadsheet = SpreadsheetApp.openById(Sheet_ID_Control); // Thay 'ID_Nguồn' bằng ID thực tế của trang tính
  var sheet = spreadsheet.getSheetByName(Sheet_Name_Control); // Thay 'ID_Trang tính' bằng tên trang bảng tính

  var targetRow = 2; // Tham chiếu hàng cụ thể (ví dụ: hàng 3)
  var targetColumn = 2; // Tham chiếu cột cụ thể (ví dụ: cột C)
  var value0 = sheet.getRange(targetRow, targetColumn).getValue();
  valueArray[0] = value0;
  Logger.log('Giá trị tại hàng ' + targetRow + ', cột ' + targetColumn + ': ' + valueArray[1]);
  Logger.log('Sheet_ID : '+ valueArray[0]);


  var targetRow = 2; // Tham chiếu hàng cụ thể (ví dụ: hàng 3)
  var targetColumn = 3; // Tham chiếu cột cụ thể (ví dụ: cột C)
  var value1 = sheet.getRange(targetRow, targetColumn).getValue();
  valueArray[1] = value1;
  Logger.log('Giá trị tại hàng ' + targetRow + ', cột ' + targetColumn + ': ' + valueArray[1]);
  Logger.log('Sheet_Name : '+ valueArray[1]); 
  Logger.log('------- Process next Function'); 
  return valueArray;
}

function PrintArrayController(){
  
  var arrayFromFunction = Controller(); // Gọi hàm để nhận mảng
  for (var i = 0; i < arrayFromFunction.length; i++) 
    Logger.log('Element at index ' + i + ':' + arrayFromFunction[i]);
}

