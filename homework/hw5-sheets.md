---
layout: article-nosidebar
title: 'Sheetsu Clone'
subtitle: 'Homework 5'
permalink: /homework/5-sheets
parent: homework
active: 'homework'
---

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}


<span class="label">Due Date:</span> Tue, May 30, 2017 at 11:59pm _(late cutoff: Thu, June 2, 2017 at 11:59pm)_  
<span class="label">HW5 Turn-in:</span> [Submission Form]()

---

* TOC
{:toc}

<section class="part" markdown="1">
## 1. Getting started

### 1. Accept the HW5 assignment
{:.no_toc}

- [Follow this link](https://classroom.github.com/assignment-invitations/6cd338ce368a3ff93b1555bc2f4d67bb), where HW5 is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in [Homework 0]({{relative}}homework/0-welcome).

### 2. Install Node v7
{:.no_toc}

**NOTE: You may need to reinstall Node!** An earlier version of the [Node Installation instructions]({{relative}}install-node) had you downloaded Node v6 instead of v7. Since we want you to use `async` functions, which are only available in Node v7+, we need you to **reinstall** Node and download Version 7.10 / the "Current: Latest Features" installer instead.

- Follow the [Node Installation instructions]({{relative}}install-node).
- Make sure you have the right version of `node` by running `node -v` in your terminal. You should see v7.10:
<img src="images/node-version.png" class="screenshot" />

</section>

<section class="part" markdown="1">
## 2. SETUP: Create a Google Service Account

In order to have our NodeJS server write to a Google Spreadsheet, the server must have permission to write to the spreadsheet.

Google allows two ways of doing this:
1. OAuth 2.0: This allows a user to log in and manage spreadsheets *owned by the user*. This is not what we want; we want to be able to write to a single spreadsheet that we own.
2. **Server-to-Server:** This allows our NodeJS server to talk to Google's servers directly, e.g. to write to a spreadsheet. This is what we want to do.

To have our NodeJS server write to a Google Spreadsheet, we need to set up two things:
- A Google Service Account (GSA)
- A Google Service Account key

This section contains the instructions for obtaining both a Google Service Account and a GSA key, and how to move the key to the HW5 starter code.

### 1. Add the Google Sheets API
{:.no_toc}

- Navigate to [https://console.developers.google.com](https://console.developers.google.com).
<a href="images/hw5-gsa-dashboard.png"><img src="images/hw5-gsa-dashboard.png" class="screenshot" /></a>
- In the API search box, type “Google Sheets API”. When it comes up, click on "Google Sheets API."
<a href="images/hw5-gsa-sheets-search.png"><img src="images/hw5-gsa-sheets-search.png" class="screenshot" /></a>


### 2. Create a project
{:.no_toc}

- You will now need to create a project. Click the "Create Project" button.
<a href="images/hw5-gsa-create-project.png"><img src="images/hw5-gsa-create-project.png" class="screenshot" /></a>
- You may get a dialog message that looks like the one below. If you do, click "Create".
<a href="images/hw5-gsa-weird-dialog.png"><img src="images/hw5-gsa-weird-dialog.png" class="screenshot" /></a>
- Enter any project name, such as "CS193x HW5."
<a href="images/hw5-gsa-new-project.png"><img src="images/hw5-gsa-new-project.png" class="screenshot" /></a>
- You will see an [intermediate loading screen](images/hw5-gsa-new-project-loading.png), then it will take you back to the Google Sheets API page.
<a href="images/hw5-gsa-sheets-api-again.png"><img src="images/hw5-gsa-sheets-api-again.png" class="screenshot" /></a>

### 3. Enable the API
{:.no_toc}

- Click the "Enable" button. You will be taken to the Credentials page.
<a href="images/hw5-gsa-enable-sheets.png"><img src="images/hw5-gsa-enable-sheets.png" class="screenshot" /></a>

### 4. Create Google Service Account + key
{:.no_toc}

- Click the "Create Credentials" button. This will take you to the Credentials wizard.
<a href="images/hw5-gsa-create-credentials.png"><img src="images/hw5-gsa-create-credentials.png" class="screenshot" /></a>
- Fill out the first part of the wizard as follows:
  - Which API are you using? **Google Sheets API**
  - Where will you be calling the API from? **Web server**
  - What data will you be accessing? **Application data**
  - Are you using Google App Engine or Google Compute Engine? **No, I’m not using them**
- Then click "What credentials do I need?" This will prompt you to create a Google Service Account.
<a href="images/hw5-gsa-create-creds-wizard.png"><img src="images/hw5-gsa-create-creds-wizard.png" class="screenshot" /></a>
- Fill out "Create a service account" second part of the form as follows:
  - Service account name: Any name you'd like, e.g. "**HW5 sheets**"
  - Role: **Project -> Owner**
  - Key type: **JSON** (this is selected by default)
- Then click "Continue."
<a href="images/hw5-gsa-get-creds.png"><img src="images/hw5-gsa-get-creds.png" class="screenshot" /></a>
- This will immediately download your Google Service Account credentials JSON file for you.
  - **Make note of where this file was downloaded!** We will refer to this file again soon.
<a href="images/hw5-gsa-creds-downloaded.png"><img src="images/hw5-gsa-creds-downloaded.png" class="screenshot" /></a>

### 5. Add Google Drive API
{:.no_toc}

- After you've created a Google Service Account, you will be taken back to the Credentials screen. From this screen, click "Library" on the left sidebar.
<a href="images/hw5-gsa-search-drive.png"><img src="images/hw5-gsa-search-drive.png" class="screenshot" /></a>
- Search for "google drive api," then click on "Google Drive API" when it comes  up.
<a href="images/hw5-gsa-add-drive-api.png"><img src="images/hw5-gsa-add-drive-api.png" class="screenshot" /></a>
- Click "Enable", like you did for the Google Sheets API
<a href="images/hw5-gsa-enable-drive.png"><img src="images/hw5-gsa-enable-drive.png" class="screenshot" /></a>

We are now done with the Google Developers Console.

### 6. Copy GSA credentials to `privateSettings.json`
{:.no_toc}

- In Atom, open the credentials JSON file that was downloaded for you at the end of Step 4. It should look something like this:
<a href="images/hw5-gsa-json.png"><img src="images/hw5-gsa-json.png" class="screenshot" /></a>
  - The most important entries are the `private_key` and `client_email` fields.
- In Atom, also open your HW5 starter code and the `privateSettings.json` file. `privateSettings.json` should be completely empty.
- Now copy the contents of the credentials JSON file into `privateSettings.json`.

</section>

<section class="part" markdown="1">
## 3. SETUP: Create a GSA spreadsheet

In this section, you will create a special Google spreadsheet to which your NodeJS server will be able to write data. To do this, you will need to create a spreadsheet via the `cs193x-sheets` command-line tool, distributed on `npm`.

### 1. Install `cs193x-sheets`
{:.no_toc}

- In your terminal, navigate to the directory that contains the HW5 starter code you downloaded from GitHub.
  - If you need help working a terminal, [see guide here]({{relative}}install-node)
<a href="images/hw5-starter-directory.png"><img src="images/hw5-starter-directory.png" class="screenshot" /></a>
- Run `npm install -g cs193x-sheets` to install the cs193x-sheets command-line tool.
  - You may need to use `sudo`.
  - You will use this command-line tool to create spreadsheets that your NodeJS server can write to.
<a href="images/hw5-install-sheets-tool.png"><img src="images/hw5-install-sheets-tool.png" class="screenshot" /></a>
<a href="images/hw5-sheets-tool-installed.png"><img src="images/hw5-sheets-tool-installed.png" class="screenshot" /></a>

### 2. Run `cs193x-sheets`
{:.no_toc}

- Now run the `cs193x-sheets` command:
<a href="images/hw5-sheets-prompt.png"><img src="images/hw5-sheets-prompt.png" class="screenshot" /></a>
- Type "c" to create a new spreadsheet and enter the following:
  - Title of spreadsheet: Anything you'd like, e.g. "**HW5 spreadsheet**"
  - Enter your email: Your email address (must be a Gmail-enabled account, such as @gmail or @stanford)
- Afterward the tool will print out "Spreadsheet created" with the URL of your new spreadsheet.
  - You will also get an email with a link to the spreadsheet.
  - The only people who can access this spreadsheet are you (via the email you entered) and the course staff.
<a href="images/hw5-spreadsheet-created.png"><img src="images/hw5-spreadsheet-created.png" class="screenshot" /></a>

**NOTES:**

Technically the spreadsheet you just created is owned by your Google Service Account, and not your public Gmail account, which is why you need to use the command-line tool to create and manage the spreadsheet. You cannot access Google Service Account documents via Google's web interface.

Also, you must always run `cs193x-sheets` in the same directory as `privateSettings.json`, so that it can access your Google Service Account credentials.

### 3. Open your spreadsheet and fill with some fake data
{:.no_toc}

- Open the spreadsheet you just created via command-line
- Fill it out with fake data [like in this spreadsheet](https://docs.google.com/spreadsheets/d/1GYI-P9g2-7g9PtF8ygZ8LNV8FrGaTpz9f3G-eVTj370/edit?ts=591e76d4#gid=0)
  - **The first row of your spreadsheet should be the column labels.**
<a href="images/hw5-sheet-data.png"><img src="images/hw5-sheet-data.png" class="screenshot" /></a>
</section>

<section class="part" markdown="1">
## 4. SETUP: Set up the starter code

At last, you are ready to configure the starter code and get working on the assignment!

### 1. Set `SPREADSHEET_ID` in `server.js`
{:.no_toc}

- Open `server.js` from the HW5 starter code in Atom
- Change the value of SPREADSHEET_ID to the ID of your spreadsheet. This is the long series of numbers, letters, and dashes after the `d/` in the Google Spreadsheets URL.
  - For example, in `https://docs.google.com/spreadsheets/d/1GYI-P9g2-7g9PtF8ygZ8LNV8FrGaTpz9f3G-eVTj370`, the Spreadsheet ID is **1GYI-P9g2-7g9PtF8ygZ8LNV8FrGaTpz9f3G-eVTj370**
  <a href="images/hw5-sheet-id.png"><img src="images/hw5-sheet-id.png" class="screenshot" /></a>

### 2. Run `npm install`
{:.no_toc}

- In the terminal, make sure you are still in the directory that contains the HW5 starter code you downloaded from GitHub.
- Run `npm install`
  <a href="images/hw5-install-deps.png"><img src="images/hw5-install-deps.png" class="screenshot" /></a>
  <a href="images/hw5-install-deps-finished.png"><img src="images/hw5-install-deps-finished.png" class="screenshot" /></a>

### 3. Run `npm start`
{:.no_toc}

- Now run `npm start` to start your server. You should see the "Server listening on port 3000!" message.
  <a href="images/hw5-run-server.png"><img src="images/hw5-run-server.png" class="screenshot" /></a>


### 4. Test `http://localhost:3000`
{:.no_toc}

- Navigate to `http://localhost:3000`
- You should see a fully-implemented test page that you will use to test your backend.
<a href="images/hw5-test-page.png"><img src="images/hw5-test-page.png" class="screenshot" /></a>

- On the test page, click the "FETCH" button.
- After a few seconds, you should see the following at the bottom of the page:
<a href="images/hw5-fetch-status.png"><img src="images/hw5-fetch-status.png" class="screenshot" /></a>
- On the terminal where your server is running, you should see what the output of `console.log(rows)`:
<a href="images/hw5-query-result.png"><img src="images/hw5-query-result.png" class="screenshot" /></a>

### 5. Change and reload server
{:.no_toc}

Every time you change the code in `server.js`, you will have to kill and rerun your server process. Let's practice that here to make sure you understand your development workflow.

- Modify `server.js` in trivial ways:
  - Have it print a slightly different message after the server process is bound to port 3000.
  - Have it return `{ status: 'unimplemented!!!'}` in response to a GET request.
<a href="images/hw5-code-change-print.png"><img src="images/hw5-code-change-print.png" class="screenshot" /></a>
<a href="images/hw5-code-change-return.png"><img src="images/hw5-code-change-return.png" class="screenshot" /></a>
- Return to the terminal and stop the current node server by pressing `CTRL-C`
- Now rerun `npm start`
  - Verify the terminal prints you updated message
  <a href="images/hw5-npm-restarted.png"><img src="images/hw5-npm-restarted.png" class="screenshot" /></a>
- Navigate to `http://localhost:3000` and click "Fetch"
  - Verify the result returned is updated.
  <a href="images/hw5-return-updated.png"><img src="images/hw5-return-updated.png" class="screenshot" /></a>

</section>

<section class="part" markdown="1">

## Helpful examples and style requirements

### Helpful examples
{:.no_toc}

Here are some examples you may find useful while implementing the assignment:

### Style requirements
{:.no_toc}



</section>

<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did with [Homework 0]({{relative}}homework/0-welcome).

Turn in the link to your GitHub repository here:
- [Submission Form]()

</section>
