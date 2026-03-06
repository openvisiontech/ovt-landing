# Google Drive Form Setup Guide

To accept form submissions directly into your Google Drive as JSON files, you need to deploy a quick Google Apps Script Web App. This acts as a webhook that the React frontend will send data to.

## 1. Create the Script

1. Go to [Google Meet / Drive / Apps Script](https://script.google.com/) and ensure you are logged in with the Google Account where you want the files to arrive.
2. Click **New project** on the left.
3. Replace the default `Code.gs` content with the following code:

```javascript
function doPost(e) {
  try {
    // Read the incoming POST data
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    // Format a unique file name
    var timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    var safeName = (data.fullName || 'Unknown').replace(/\s+/g, '_');
    var fileName = "ContactForm_" + safeName + "_" + timestamp + ".json";

    // Format the JSON content nicely
    var jsonString = JSON.stringify(data, null, 2);

    // Create the file in the root directory of your Google Drive
    var file = DriveApp.createFile(fileName, jsonString, MimeType.PLAIN_TEXT);
    
    /* 
    Optional: To save the file in a specific folder instead of the root, 
    uncomment the lines below and insert your Folder ID.
    (The Folder ID is the string in the URL when viewing a folder in Drive)
    */
    // var folderId = "YOUR_FOLDER_ID_HERE";
    // var folder = DriveApp.getFolderById(folderId);
    // file.moveTo(folder);

    // Return a success response
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
3. Under **Description**, enter something like `OVT Form Webhook`.
4. **Execute as**: select **Me (`your-email@gmail.com`)**. This ensures it has permission to write files to your Drive.
5. **Who has access**: select **Anyone** (this is critically important so the frontend can send requests without Google login).
6. Click **Deploy**.
7. Google will prompt you to authorize the app. Follow the prompts, click "Advanced" and "Go to project (unsafe)" if you get the verification warning screen.
8. Once complete, copy the **Web app URL** that ends with `/exec`.

## 3. Connect to the Frontend

1. Go to `src/ContactSection.jsx` in your project.
2. Find `const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';`
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'` with the URL you just copied.

You are fully setup! Now, whenever someone submits the contact form, a nicely formatted JSON file containing their details will be securely saved into your Google Drive.
