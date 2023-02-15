# LegalLink

Legal Link is a mobile application that serves as a bridge between law firms and their clients, facilitating effective
communication of updates, information and prompt responses to questions and concerns. With a user friendly page for clients, this application ensures a streamlined experience and provides assurance to clients during their immigration process.

## LegalLink Giphy
![](https://media.giphy.com/media/ne0cIXaNu2nmVbtQqM/giphy.gif)

## Technologies

#### Front-End
Language      | Tech Stack    | Dependencies
------------- | ------------- |--------------
Javascript    | React.js      | react-sweet-progress

## Run Locally

### Prerequesites
- To run the client-side, you will also need to install and run the server side code found here [Server-Side](https://github.com/Kimberlynolsin/LegalLink-Server/ "Back-End Repository"). Copy the `PORT` that this repository is run on.
- You will need to create your own `.env` file in this repository to connect the client side to the server side. Be sure to use `REACT_APP_BASE_URL=` as a variable. Example, `REACT_APP_BASE_URL=http://localhost:8000`. This will be in the Installation Steps.

### Installation Steps

1. Run the following code in the terminal: 
```sh
git clone https://github.com/Kimberlynolsin/LegalLink-Client.git
```

2. Navigate to the new directory:
```sh
cd LegalLink-Client
```

3. Ensure a `.env` file exists, and if not create one, with the `PORT` the server is running on from the prerequisites:
```sh
echo 'REACT_APP_BASE_URL=http://localhost:<PORT>' >> .env
```

4. Install all packages and dependencies:
```sh
npm i
```

5. Start the app:
```sh
npm start
```

## Contact Information
**Email:** kimberly.nolsin@gmail.com

**LinkedIn:** [Profile](https://www.linkedin.com/in/kimberly-nolsin/ "Profile")
