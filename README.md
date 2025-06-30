

-----

# Netflix Household Verify 🏠🎬

A Node.js application designed to streamline the process of retrieving and displaying Netflix verification codes and household update links directly from a user's email inbox (Gmail, Outlook, or Hotmail). This tool aims to make the Netflix verification process more seamless and efficient.

## Features You'll Love ❤️

-----

  * **Secure Email Integration**: Connects securely to your IMAP email accounts (Gmail, Outlook, or Hotmail) 🔒.
  * **Real-time Code Fetching**: Fetches the latest Netflix verification codes and displays them instantly on a simple web interface 📩.
  * **Automated Household Updates**: Automatically finds and "clicks" that tricky "Update Household" link from Netflix emails via an HTTPS request, giving you an instant confirmation\! 📺✅
  * **Manual Code Entry**: A handy fallback for those rare moments when auto-detection isn't quite possible ✍️.
  * **User-Friendly Interface**: Enjoy a smooth UI/UX with awesome features like collapsible steps, copy-to-clipboard for codes, and a search bar for those quick verification tips\! 🎨📋🔍

## Table of Contents 📖

-----

  * [Requirements](https://www.google.com/search?q=%23requirements)
  * [Installation](https://www.google.com/search?q=%23installation)
  * [Environment Variables](https://www.google.com/search?q=%23environment-variables)
  * [Running the Application](https://www.google.com/search?q=%23running-the-application)
  * [Usage Guide](https://www.google.com/search?q=%23usage-guide)
  * [Project Structure](https://www.google.com/search?q=%23project-structure)
  * [Security Considerations](https://www.google.com/search?q=%23security-considerations)
  * [Roadmap](https://www.google.com/search?q=%23roadmap)
  * [License](https://www.google.com/search?q=%23license)

## Requirements 🛠️

-----

  * **Node.js**: v14 or higher recommended.
  * **NPM** or **Yarn**.
  * **(Optional)** A Gmail or Outlook/Hotmail account with an [App Password](https://support.google.com/accounts/answer/185834?hl=en) configured for IMAP access.

## Installation 💻

-----

Ready to get started? Follow these simple steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Mohammed-Saqhib/Netflix-Household-Verify.git
    cd Netflix-Household-Verify
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3.  **(Optional)** Create a `.env` file in your project's root if it's not already there. Check out the [Environment Variables](https://www.google.com/search?q=%23environment-variables) section for more info\!

## Environment Variables ⚙️

-----

This app uses environment variables, which you can set up in a `.env` file at the root of the project.

| Variable          | Description                                                                            | Example Value         |
| :---------------- | :------------------------------------------------------------------------------------- | :-------------------- |
| `PORT`            | The port number where your server will run.                                            | `3000` (default)      |
| `NODE_ENV`        | The environment name (e.g., `development`, `production`).                              | `development`         |
| `EMAIL_USER`      | Your email address for IMAP access.                                                    | `youremail@gmail.com` |
| `EMAIL_PASSWORD`  | An **App Password** generated for your email account (do **not** use your primary password\!). | `your-app-password`   |
| `EMAIL_HOST`      | The IMAP host for your email provider.                                                 | `imap.gmail.com`      |

**Example `.env` file:**

```
PORT=3000
NODE_ENV=development
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_HOST=imap.gmail.com
```

**Important Notes:**

  * **Gmail**: You absolutely need to enable [2-Step Verification](https://www.google.com/search?q=https://myaccount.google.com/two-step-verification) and generate an [App Password](https://support.google.com/accounts/answer/185834?hl=en) from your Google Account.
  * **Outlook/Hotmail**: Make sure IMAP support is enabled, and you might need to configure an App Password if you have Two-Factor Authentication (2FA) on.

## Running the Application ▶️

-----

Pick your favorite way to get the app running:

  * **Development Mode (with live-reload)**:

    ```bash
    npm run dev
    ```

    or simply:

    ```bash
    nodemon server.js
    ```

  * **Production Mode**:

    ```bash
    npm start
    ```

Once the server is buzzing, just head over to `http://localhost:3000` in your browser (if your `PORT` is `3000`) and enjoy\!

## Usage Guide 🧭

-----

1.  Pop open the app's main page in your browser.
2.  Enter your email address and your shiny App Password to connect.
3.  Voila\! The app will fetch your recent Netflix verification emails.
4.  Any valid Netflix code will magically appear right on the page\!
5.  For the "Household Verification" magic, simply fill in your email and click **"Update My TV as Household"**. The system will then:
      * Scan your inbox for that special "Update Household" link from Netflix.
      * Automatically "click" the link via an HTTPS request.
      * Give you a quick status message confirming your household update\! ✨

## Project Structure 🏗️

-----

Here’s a bird's-eye view of how the project is laid out:

```
├── .env                  # Environment variables (kept safe from the repo!)
├── app.js                # Front-end wizardry (DOM updates, animations, etc.)
├── server.js             # Express server + IMAP logic and cool endpoints
├── start.js              # A helpful script to boot up the server (checks .env)
├── style.css             # The main stylesheet for a polished look
├── index.html            # Your main front-end playground
├── package.json          # Project dependencies and handy scripts
└── README.md             # This awesome file you're reading!
```

You'll also spot hints of new and improved features (like search, animations, and that sweet household update) sprinkled throughout the JavaScript and CSS files\!

## Security Considerations 🔒

-----

Your peace of mind is our priority. Please keep these in mind:

  * **Temporary Credential Use**: Your email credentials are used **only** during your current session for IMAP connection.
  * **No Server Storage**: We do **not** store your credentials on the server once your session ends. Poof\! Gone\!
  * **App Passwords are Key**: Always, always use **App Passwords** (not your regular email password) if you're using Gmail or Outlook.
  * **Keep `.env` Private**: Make sure your `.env` file is tucked away in your `.gitignore` to keep it out of version control.

## Roadmap 🗺️

-----

Here’s what’s next on our journey:

  * Adding support for more email providers (like Yahoo\!) 📧.
  * Implementing Internationalization (i18n) for a truly global experience 🌐.
  * Enhancing logging and debugging options for smoother development and troubleshooting 🐞.
  * Providing a Docker container for super easy hosting\! 🐳

## License 📄

-----

This project is rocking the [MIT License](https://www.google.com/search?q=LICENSE)\! Feel free to modify and share as much as you like\!

-----
