# _Doctor Lookup_

#### _An application that utilizes the BetterDoctor API to provide information about available doctors in Portland, OR who treat numerous medical needs. , Feb 2020_

#### By _**Benjamin Thom and Kristina Hengster Tintor**_

## Description

Users can enter a medical issue (ie: “sore throat”, "rash", etc.) into our form, submit it, and receive a list of doctors in Portland, OR who can provide treatment.

## Preview
![Landing Page Preview](img/(img file name here))
Click here for Live Preview: (GitHub.io URL Here))


## Project Specifications

| Behavior | Input | Output |
|---|:---:|:---:|
|A user enters a medical issue and receives a list of doctors in the Portland area that fit the search query|sore throat|Doctors who provide treatment for "sore throat" in Portland, OR|
|A user enters a name to receive a list of doctors in the Portland area that fit the search query|Bill|Doctors who's names include "Bill" in Portland, OR|
|If the query response includes any doctors, the following information is included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients|NA|first name, last name, address, phone number, website, and doctor is accepting new patients: true or false|
|If the API call results in an error, the application will return a notification to the user stating what the error is|NA|"There was an error handeling your request"|
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application will return a notification that states that no doctors meet the criteria|user input|"No doctors found based on your search"|

## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/kristinaht/dino.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} dino```
* On Windows: ```dino```

_Download Manually:_

* Navigate to https://github.com/kristinaht/dino.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "dino".
* Right click "index.html" and select your preferred browser or text editor.

_Note For Editors:_ 
* Once cloned/downloaded, to run and make changes, in the terminal simply run **$ npm install** to download necessary dependencies
* Run **$ npm run build** to create your own dist folder with a bundle.js file
* Obtain API key from (API website link)
* Create .env file in the root directory of (project name)
* Add API key to .env file (EX: API_KEY: your API key here)
* Add .env file to .gitignore file (*important*)
* The API key will now be refrenced within the (project name)-interface.js file
* Lastly, run **$ npm run start** to run application

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kristinaht/dino) here on GitHub._

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Webpack
* Node.js
* (API Name)

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Benjamin Thom and Kristina Hengster Tintor_**