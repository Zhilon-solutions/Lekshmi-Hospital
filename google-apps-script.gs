/**
 * Google Apps Script for Hospital Website Forms
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Click Deploy > New deployment
 * 5. Select type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Click Deploy and copy the Web App URL
 * 9. Replace SCRIPT_URL in form-handler.js with your URL
 */

// Initialize sheets on first run
function initializeSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Create Appointments sheet if it doesn't exist
  let appointmentSheet = ss.getSheetByName('Appointments');
  if (!appointmentSheet) {
    appointmentSheet = ss.insertSheet('Appointments');
    appointmentSheet.appendRow(['Timestamp', 'Name', 'Phone', 'Service', 'Message']);
    appointmentSheet.getRange('A1:E1').setFontWeight('bold').setBackground('#4CAF50');
  }
  
  // Create Contact sheet if it doesn't exist
  let contactSheet = ss.getSheetByName('Contact');
  if (!contactSheet) {
    contactSheet = ss.insertSheet('Contact');
    contactSheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Phone', 'Message']);
    contactSheet.getRange('A1:E1').setFontWeight('bold').setBackground('#2196F3');
  }
  
  return { appointmentSheet, contactSheet };
}

// Handle POST requests from website forms
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheets = initializeSheets();
    
    if (data.type === 'appointment') {
      // Add appointment data
      sheets.appointmentSheet.appendRow([
        new Date(),
        data.name,
        data.phone,
        data.service,
        data.message
      ]);
    } else if (data.type === 'contact') {
      // Add contact data
      sheets.contactSheet.appendRow([
        new Date(),
        data.fname,
        data.lname,
        data.phone,
        data.message
      ]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'error', 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService.createTextOutput('Hospital Form Handler is running!');
}
