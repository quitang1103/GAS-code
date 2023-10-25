function Copy() {
  // Tên bảng tính và tên trang nguồn
  const Sheet_ID = "17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4";
  const Sheet_Name ="Câu trả lời biểu mẫu 1";
  const Sheet_IDCopy = "17nUkdKkC8G8YisFzEpwNwUNAoXLMf3vu41ixMPSntF4";
  const Sheet_NameCopy ="Trang tính2";
  
  var sourceSpreadsheet = SpreadsheetApp.openById(Sheet_ID);
  var sourceSheet = sourceSpreadsheet.getSheetByName(Sheet_Name);

  // Tên bảng tính và tên trang đích
  var targetSpreadsheet = SpreadsheetApp.openById(Sheet_IDCopy);
  var targetSheet = targetSpreadsheet.getSheetByName(Sheet_NameCopy);

  // Lấy dữ liệu từ trang nguồn
  var data = sourceSheet.getDataRange().getValues();

  // Xoá dữ liệu trang đích (nếu cần)
  targetSheet.clearContents();

  // Ghi dữ liệu vào trang đích
  targetSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}
