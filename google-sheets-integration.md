# Google Sheets Form Setup Guide

To append form submissions directly into a Google Sheet named "WebRequest", you will deploy a Google Apps Script Web App. This acts as a webhook that receives data from your React frontend and appends it as a new row in your spreadsheet.

The frontend code in `ContactSection.jsx` you have right now is perfectly suited for this. It already sends the JSON POST request; we just need to change the App Script logic on Google's side to write to Google Sheets instead of Google Drive.

## 1. Create the Script

1. Go to [Google Apps Script](https://script.google.com/) and ensure you are logged in with the relevant Google Account.
2. Click **New project** on the left.
3. Replace the default `Code.gs` content with the following code:

```javascript
function doPost(e) {
  try {
    // Read the incoming POST data
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    // Ensure "OpenVisionTech/AppData" folder structure exists
    var folderName1 = "OpenVisionTech";
    var folderName2 = "AppData";
    
    var rootFolder = DriveApp.getRootFolder();
    var folder1Iterator = rootFolder.getFoldersByName(folderName1);
    var folder1 = folder1Iterator.hasNext() ? folder1Iterator.next() : rootFolder.createFolder(folderName1);
    
    var folder2Iterator = folder1.getFoldersByName(folderName2);
    var targetFolder = folder2Iterator.hasNext() ? folder2Iterator.next() : folder1.createFolder(folderName2);

    // Search for the Google Sheet named "WebRequest" inside the target folder
    var files = targetFolder.getFilesByName("WebRequest");
    var ss;
    
    // If it exists, open it. Otherwise, create a new one and move it there.
    if (files.hasNext()) {
      var sheetFile = files.next();
      ss = SpreadsheetApp.open(sheetFile);
    } else {
      ss = SpreadsheetApp.create("WebRequest");
      // Move the newly created sheet from root to the target folder
      var newFile = DriveApp.getFileById(ss.getId());
      newFile.moveTo(targetFolder);
    }
    
    // Get the first active sheet/tab
    var sheet = ss.getActiveSheet();
    
    // If the sheet is completely empty, add header columns first
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", 
        "Full Name", 
        "Email", 
        "Entity Type", 
        "Request SDK", 
        "GitHub", 
        "Message"
      ]);
      // Make the header row bold
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
    }
    
    // Append the form submission as a new row
    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.email || "",
      data.entityType || "",
      data.requestSdk ? "Yes" : "No",
      data.github || "",
      data.message || ""
    ]);

    // Return a success response back to the React app
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return the error message if something fails
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Deploy the Web App

1. Click on the **Deploy** button at the top right, then select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Under **Description**, enter something like `OVT Sheets Webhook`.
4. **Execute as**: select **Me (`your-email@gmail.com`)**. This ensures it has permission to create and edit Google Sheets in your account.
5. **Who has access**: select **Anyone**. (This is critically important so the frontend can send requests without authentication block).
6. Click **Deploy**.
7. Google will prompt you to authorize the app. Follow the prompts, click "Advanced" and "Go to project (unsafe)" if you get the verification warning screen.
8. Once complete, copy the **Web app URL** that ends with `/exec`.

## 3. Connect to the Frontend

1. Go to `src/ContactSection.jsx` in your project.
2. Find `const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';`
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'` with the URL you just copied.

You're done! Now, whenever someone submits the contact form, a new row will be automatically appended to the "WebRequest" Google Sheet in your Google Drive. If the sheet doesn't exist yet, it will automatically create it upon receiving the first submission!
