# API KEY


❗ Don't use other's API key.

 I made a [Password Generator](https://mine-password-generator.netlify.app/) (Click on the link and check it ✔✅) using API from [api-ninja](https://api-ninjas.com/). This is an excellent api.



 ## Follow these simple steps 👇


- 1: Create an Account on [api-ninja](https://api-ninjas.com/)  🐱‍👤

- 2: Take an API KEY. 

- 3: make a file " .env.local " on main directory.

- 4: Put API KEY like this if you are using react(vite).js:

 VITE_PASSWORD_GENERATOR = 'put-your-real-API KEY-to-here' 🔑

- 5: Then go on that file, where you are using api key and paste this code:

 const API = import.meta.env.VITE_PASSWORD_GENERATOR  


- this code is for react.(vite).js 👆


