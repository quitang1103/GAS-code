function createOnEditTrigger() {
  ScriptApp.newTrigger("Copy.gs")
      .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
      .onFormSubmit()
      .create();
}
