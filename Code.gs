function doPost(e) {
  var payload;
  
  payload = e.parameter;
  
  //MailApp.sendEmail("example@gmail.com",'doPost ran', 'it ran okay' + JSON.stringify(payload))
  
  if (payload.getOptionList === "true") {
    return ContentService.createTextOutput(makeListOfSS());
  } else {
    return ContentService.createTextOutput(setTheValues(payload));
  }
}

function makeListOfSS() {
  var arr,fldr,outerArr,ssFiles,thisSS;
  
  fldr = DriveApp.getFolderById('ID of folder with spreadsheets');
  
  ssFiles = fldr.getFiles();
  
  h = "";
  
  outerArr = [];
  
  while (ssFiles.hasNext()) {
    thisSS = ssFiles.next();
    arr = [];//reset
    arr.push(thisSS.getId())
    arr.push(thisSS.getName())
    
    outerArr.push(arr);
  }
  
  return JSON.stringify(outerArr);
}
