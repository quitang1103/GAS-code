function createDailyTrigger() {
  ScriptApp.newTrigger("copySheetDaily")
      .timeBased()
      .everyMinutes(1) // Sử dụng .atHour(0).nearMinute(0) để thiết lập giờ và phút cụ thể
      .create();
}
