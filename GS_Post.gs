function setTheValues(data) {
try{
  var d,data,ssID, ss,sh,dataBaseRecordID;
 
  d = new Date();

  dataBaseRecordID = d.getTime();
  
  ssID = data.ssID;
  //MailApp.sendEmail("example@gmail.com",'it ran', 'it ran okay' + ssID)

  ss = SpreadsheetApp.openById(ssID);
  sh = ss.getSheets()[0];
  
  sh.appendRow([dataBaseRecordID,data.post,data.link,data.keywords,data.user]);
  
  return "Success!";
}catch(e) {
  //MailApp.sendEmail("example@gmail.com",'it ran', 'it ran okay' + e.stack)
  return "Error: " + e.message + "<br>" + e.stack;
}
}
