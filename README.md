# Gemini ReactClone
A **Gemini** clone built with React for modern web interactions and seamless user experience.
## **API Key Management and Setup Guide for Gemini Clone**

Follow these steps to configure and secure your Gemini API key:

### **1. Get the Gemini API Key**
- Visit the Gemini Developer Portal: [Gemini API Documentation](https://www.gemini.com/api).
- Log in with your Gemini account.
- Navigate to the API Management section.
- Generate a new API key and copy it.

---

### **2. Add the API Key to the Project**
1. Go to the project path: `gemini_clone/src/config/`.
2. Create a file named **`gemini.js`**.
3. Add the following code to the file:

   ```javascript
   // gemini.js
   const apiKey = "Paste your API key here"
   ```

4. Replace `"Paste your API key here"` with your actual API key.

---

### **3. Secure the API Key**
1. Open the `.gitignore` file in the root directory of your project.
2. Add the following line to ensure the `gemini.js` file is ignored by version control:

   ```
   /src/config/gemini.js
   ```

3. Save the `.gitignore` file.

---

### **4. Verify Configuration**
- Ensure the `gemini.js` file is correctly ignored by running:

   ```bash
   git status
   ```

- Confirm `gemini.js` appears in the untracked files section.

---

Following these steps helps protect your API key and ensures secure integration in your Gemini clone project.
