function doGet(e) {
  var p = e.parameter;
  var translatedText = LanguageApp.translate(p.text, p.source, p.target);

  var payload = {
    "source" : p.source,
    "target" : p.target,
    "transletedText" : translatedText,
  }
  
  var res = ContentService.createTextOutput();

  res = res.setMimeType(ContentService.MimeType.JSON);

  res = res.setContent(JSON.stringify(payload));

  Logger.log(res)
  
  return res
}
