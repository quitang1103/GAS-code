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



// // Lấy tất cả giá trị từ 1 hàng
function Row_values(){
  var rowIndex = 1; // Hàng cần lấy
  var rowValues = getRowValues(myArray, rowIndex);
  Logger.log('-----------------------------------------------------');
  Logger.log('Giá trị từ hàng ' + rowIndex + ': ' + rowValues);}
// Lấy tất cả giá trị từ 1 cột
function Column_values(){
  var myArray = array();
  var columnIndex = 2; // Cột cần lấy
  var columnValues = getColumnValues(myArray, columnIndex);
  Logger.log('-----------------------------------------------------');
  Logger.log('Giá trị từ cột ' + columnIndex + ': ' + columnValues);}

//------------------------------------------------------------------------------------------------------------------

function Controller() 
{

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
      m++;
    }
  
    n++;
  
  }
 
}






