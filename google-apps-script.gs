/** 
 * Lekshmi Hospital - Appointment Enquiry Backend
 * 
 * INSTRUCTIONS:
 * 1. Go to Extensions > Apps Script in your Google Sheet.
 * 2. Paste this code into the editor (delete any existing code).
 * 3. Click "Deploy" > "New Deployment".
 * 4. Select Type: "Web App".
 * 5. Set "Execute as": "Me".
 * 6. Set "Who has access": "Anyone".
 * 7. Click Deploy, authorize permissions, and COPY the Web App URL.
 * 8. Paste the URL into the APPS_SCRIPT_URL variable in appointment.html.
 */

const SHEET_NAME = "Appointments";

/**
 * Initializes the sheet with headers if it doesn't exist.
 */
function initializeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = [
      "Timestamp", 
      "Name", 
      "Phone", 
      "Preferred Date", 
      "Session", 
      "Time Slot", 
      "Message", 
      "Status"
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    
    // Optional: Format headers
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground("#0c3c53")
      .setFontColor("#ffffff")
      .setFontWeight("bold");
  }
  return sheet;
}

/**
 * Handles GET requests (Testing endpoint).
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ "status": "App Script is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles POST requests from the website.
 */
function doPost(e) {
  try {
    const sheet = initializeSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Validate data
    if (!data.name || !data.phone) {
      throw new Error("Missing required fields: name or phone");
    }

    // Append row: Timestamp, Name, Phone, Date, Session, Slot, Message, Status
    const row = [
      data.timestamp || new Date().toLocaleString(),
      data.name,
      data.phone,
      data.date,
      data.session,
      data.slot,
      data.message || "",
      "Pending" // Default status
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error("Error in doPost:", error);
    return ContentService.createTextOutput(JSON.stringify({ 
      "result": "error", 
      "message": error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
