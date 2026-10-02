function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('FPs Beauty Waste Generator')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

