# **🇩🇪 German Translator Browser Extension to 🇬🇧 English and 🇪🇸 Spanish**

## Overview

The **Text Translator** Chrome extension allows users to quickly translate selected text and view the translation in a small popup box. With support for multiple languages, this extension helps you instantly translate any piece of text on the web.

### Features:
- **Context Menu**: Right-click on any selected text to quickly translate it.
- **Translation Popup**: Displays the translated text and the original text.
- **Customizable Language**: Change the translation target language via the context menu.
- **Non-Intrusive Popup**: The popup disappears after after clicking outside.

## Image Gallery

### Example Images

![image](https://github.com/user-attachments/assets/70bc2e0d-8532-4cda-870a-fb694c1211bc)
*Language Selection*

![image](https://github.com/user-attachments/assets/20f4f515-48de-4d02-aee8-f11c21d63429)
*Translate Button*

![image](https://github.com/user-attachments/assets/79e9b1f4-93d0-4cb8-9587-61fa14e25938)
*English Translation*

![image](https://github.com/user-attachments/assets/9fde26ab-d882-449d-8ad0-1d5451d98b8d)
*Spanish Translation*

## Installation

```bash
git clone https://github.com/GabriRDiaz/GermanTr.git
```

### ❗❗ You will need an API KEY in order to use the extension.

### Obtain API Key from DeepL

To use the DeepL API, follow these steps:

1. Go to the DeepL website: [DeepL Translator](https://www.deepl.com/es/translator).
2. Create an account by signing up with your details. You will need to provide a valid credit card for registration. **Note**: You will not be charged unless you change your plan.
3. Once logged in, obtain your API key from the account settings and save it for use with the extension.

## Step 1: Modify the source code to use your API KEY

1. Open the folder that you have cloned.
2. Modify the file service.js
3. Change the line 8: `const API_KEY = ":)";`
4. The variable should look like: `const API_KEY = "DeepL-Auth-Key YOUR_API_KEY_GOES_HERE";`

## Step 2: Load the extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top right).
3. Click on **Load unpacked** and select the folder where you cloned the repository.
4. The extension will now appear in the Chrome extensions list and it will be usable.

## Step 2.1: Load the extension in Opera/OperaGX

1. Open Opera and press Ctrl+Shift+E.
2. Enable **Developer mode** (toggle in the top right).
3. Click on **Load unpacked** and select the folder where you cloned the repository.
4. The extension will now appear in the Opera extensions list and it will be usable.

## How to Use

### Translate Selected Text:
- Right-click on any selected text on a webpage.
- Choose **"Translate Selection"** from the context menu.
- The translated text will appear in a popup under the cursor.

### Change the Language:
- To change the translation language, just right click anywhere without nothing selected and use the context menu item for **Select Language**.
- Currently supported languages include 🇬🇧 **English** and 🇪🇸 **Spanish**.

### Translation Popup:
The popup will display the following:
- The **selected language** for translation.
- The **translated text**.
- The **original selected text**.

## Tech Stack

- **Manifest V3**: The extension is built using Chrome's Manifest V3.
- **JavaScript**: Handles the logic for translating text and interacting with the DOM.
- **Chrome Extensions API**: Used for creating the context menu, handling background tasks, and injecting content scripts.

## Supported Browsers

The **GermanTr Extension** was tested on the following browsers:
- Google Chrome
- OperaGX

Nevertheless, I am pretty sure that it should work with other browsers.

## Contributing

Feel free to fork the repository and contribute to the extension. You can open issues or create pull requests for bug fixes, enhancements, or feature requests.

### Steps to Contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact

For any questions or inquiries, feel free to reach me out:

- **Name**: Gabriel
- **Email**: grdiaz.sh@gmail.com

