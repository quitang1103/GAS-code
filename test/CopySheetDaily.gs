function copySheetDaily() {

  const Sheet_ID = "17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4"; // ID nguồn
  const Sheet_Name ="Câu trả lời biểu mẫu 1"; // Tên trang nguồn
  const Sheet_IDCopy = "17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4"; // ID đích
  const Sheet_NameCopy ="Trang tính1"; // Tên trang đích
  
 
  var spreadsheet = SpreadsheetApp.openById(Sheet_ID);
  var sourceSheet = spreadsheet.getSheetByName(Sheet_Name);
  var targetSpreadSheet = SpreadsheetApp.openById(Sheet_IDCopy);
  var targetSheet = targetSpreadSheet.getSheetByName(Sheet_NameCopy);

  if (sourceSheet && targetSheet) {
    // Lấy dữ liệu từ trang nguồn
    var data = sourceSheet.getDataRange().getValues();

    // Xoá dữ liệu trang đích (nếu cần)
    targetSheet.clearContents();

    // Ghi dữ liệu vào trang đích
    targetSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  } else {
    Logger.log("Trang nguồn hoặc trang đích không tồn tại.");
  }
}
