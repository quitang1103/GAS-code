// Sử dụng các Trích xuất để tạo một mảng 2 chiều với n hàng và m cột
function array(){
  const Sheet_ID = '17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4';
  const sheetName = "Controller2"; // Tên của trang tính chứa dữ liệu
  var rows = 20; // Số hàng
  var columns = 3; // Số cột
  var myArray = createArrayFromSheet(Sheet_ID,sheetName, rows, columns); // Lấy dữ liệu từ trang tính
  printArray(myArray); // In ra mảng
  Logger.log('--------------------------------'+myArray);
  /*var ID = [Sheet_ID, sheetName];*/
  return myArray; }
//---------------------
var myArray = array();
//------------------------
//Trích xuất dữ liệu từ một trang tính cụ thể
function createArrayFromSheet(Sheet_ID,sheetName, rows, columns) {
  var ss = SpreadsheetApp.openById(Sheet_ID);
  var sheet = ss.getSheetByName(sheetName);
  var data = sheet.getRange(1, 1, rows, columns).getValues();

  return data;}
//In ra mảng đã lấy từ trang tính.
function printArray(array) {
  for (var i = 0; i < array.length; i++)
   {
  
  for (var j = 0; j < array[i].length; j++) {
  Logger.log('Hàng ' + i + ', Cột ' + j + ': ' + array[i][j]); }}}
// lấy giá trị hàng
function getRowValues(array, rowIndex) {
  var rowValues = [];
  for (var i = 0; i < array[rowIndex].length; i++) {
    rowValues.push(array[rowIndex][i]);
  }
  return rowValues;}
// lấy giá trị cột
function getColumnValues(array, columnIndex) {
  var columnValues = [];
  for (var i = 0; i < array.length; i++) {
    columnValues.push(array[i][columnIndex]);
  }
  return columnValues;}

//Get 1 value nguồn từ hàng và cột
function value_nguồn(){
  var i = 1; // Hàng cần lấy
  var j = 2; // Cột cần lấy
  var value = myArray[i][j];
  Logger.log('-----------------------------------------------------');
  Logger.log('Giá trị ID_nguồn từ hàng ' + i + ', cột ' + j + ': ' + value);}

//Get 1 value đích từ hàng và cột
function value_đích(){
  var i = 2; // Hàng cần lấy
  var j = 2 // Cột cần lấy
  var value = myArray[i][j];
  Logger.log('-----------------------------------------------------');
  Logger.log('Giá trị ID_nguồn từ hàng ' + i + ', cột ' + j + ': ' + value);}



// // Lấy tất cả giá trị từ hàng
function Row_values(){
  var rowIndex = 1; // Hàng cần lấy
  var rowValues = getRowValues(myArray, rowIndex);
  Logger.log('-----------------------------------------------------');
  Logger.log('Giá trị từ hàng ' + rowIndex + ': ' + rowValues);}
// Lấy tất cả giá trị từ cột
function Column_values(){
  var myArray = array();
  var columnIndex = 2; // Cột cần lấy
  var columnValues = getColumnValues(myArray, columnIndex);
  Logger.log('-----------------------------------------------------');
  Logger.log('Giá trị từ cột ' + columnIndex + ': ' + columnValues);}

//------------------------------------------------------------------------------------------------------------------

function Controller() {

  var ID = array();
  var a = 2; // Số cột
  var b = 40; // Số hàng
  var m = 0;
  var n = 0;

  while (n <= a) {
    m = 0; // Đặt lại mỗi khi n tăng lên
    while (m <= b) {
      //Logger.log('n:'+n);
      var Sheet = ID[m][n];
      Logger.log('----SHEET----' + Sheet);
      Logger.log('Hàng:' + m + ' ' + 'Cột:' + n);
      if(Sheet ===""){break;
      }
      if(Sheet === ID[m][0]) {
      Logger.log('-----SHEET-------' + Sheet);

      }
      m++;
    }
    
    n++;
    
  }
 
}
  /*const Sheet = ID[1][0]; //[Hàng] Và [cột] trong array
  Logger.log('-----SHEET-------' + Sheet);
  const Sheet_ID = ID[1][1]; //[Hàng] Và [cột] trong array
  Logger.log('-----ID-------' + Sheet_ID);
  const Sheet_Name= ID[1][2]; // [Hàng] Và [cột] trong array
  Logger.log('-----NAME------' + Sheet_Name);
  const Sheet_Copy = ID[2][0]; //[Hàng] Và [cột] trong array
  Logger.log('-----SHEET_COPY-------' + Sheet_Copy);
  const Sheet_ID_Copy = ID[2][1]; //[Hàng] Và [cột] trong array
  Logger.log('-----ID_COPY-------' + Sheet_ID_Copy);
  const Sheet_Name_Copy = ID[2][2]; // [Hàng] Và [cột] trong array
  Logger.log('-----NAME_COPY------' + Sheet_Name_Copy);
  
  /*var spreadsheet = SpreadsheetApp.openById(Sheet_ID); // Thay 'ID_Nguồn' bằng ID thực tế của trang tính
  var sheet = spreadsheet.getSheetByName(Sheet_ID); // Thay 'ID_Trang tính' bằng tên trang bảng tính
  var spreadsheet = SpreadsheetApp.openById(Sheet_IDCopy); // Thay 'ID_Nguồn' bằng ID thực tế của trang tính
  var sheet = spreadsheet.getSheetByName(Sheet_NameCopy); // Thay 'ID_Trang tính' bằng tên trang bảng tính


  // Thay đổi ID_nguồn và ID_trang tính
  var value = [value1,value2];
  var targetRow = 2; // Tham chiếu hàng cụ thể (ví dụ: hàng 2)
  var targetColumn = 2; // Tham chiếu cột cụ thể (ví dụ: cột B)
  var value1 = sheet.getRange(targetRow, targetColumn).getValue();
  Sheet_ID = value1;

  Logger.log('Giá trị tại hàng ' + targetRow + ', cột ' + targetColumn + ': ' + value1);
  Logger.log('Sheet_ID nguồn : '+ Sheet_ID);

  var targetRow = 2; // Tham chiếu hàng cụ thể (ví dụ: hàng 3)
  var targetColumn = 3; // Tham chiếu cột cụ thể (ví dụ: cột C)
  var value2 = sheet.getRange(targetRow, targetColumn).getValue();
  Sheet_Name = value2;
  Logger.log('Giá trị tại hàng ' + targetRow + ', cột ' + targetColumn + ': ' + value2);
  Logger.log('Sheet_Name nguồn : '+ Sheet_Name);
  
   
  return value[value1,value2]  */

function copySheetDaily() {

  const Sheet_ID = Controller1(); // ID nguồn
  const Sheet_Name = Controller2(); // Tên trang nguồn
  const Sheet_IDCopy = Controller3(); // ID đích
  const Sheet_NameCopy =Controller4(); // Tên trang đích
  
 
  var sourceSpreadsheet = SpreadsheetApp.openById(Sheet_ID);
  Logger.log("Lấy dữ liệu từ ID_Nguồn " + Sheet_ID);
  var targetSpreadSheet = SpreadsheetApp.openById(Sheet_IDCopy);
  Logger.log("Lấy dữ liệu từ Trang nguồn " + Sheet_IDCopy);
  var sourceSheet = sourceSpreadsheet.getSheetByName(Sheet_Name);
  Logger.log("Lấy dữ liệu từ ID_đích "+ Sheet_Name );
  var targetSheet = targetSpreadSheet.getSheetByName(Sheet_NameCopy);
  Logger.log("Target đến dữ liệu trang đích "+ Sheet_NameCopy);

  if (sourceSpreadsheet && targetSpreadSheet) {
    // Lấy dữ liệu từ trang nguồn
    var data = sourceSheet.getDataRange().getValues();

    // Xoá dữ liệu trang đích (nếu cần)
    targetSheet.clearContents();

    // Ghi dữ liệu vào trang đích
    targetSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
    Logger.log("Đã update thành công");
  } else {
    Logger.log("Trang nguồn hoặc trang đích không tồn tại.");
  }
}



