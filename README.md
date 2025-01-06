<!-- 
docker-compose up --build
-->
# Portfolio - Three.js & Responsive Demo

Mostly comes from tutorial: [https://youtu.be/aZZrEE_UsIk](https://youtu.be/aZZrEE_UsIk)<br/>
First time encountering Three.js & Responsive component(and I like it!). I learned more about mobile responsiveness and intend to use it in my next project. 

A demo without Resume downloadable as .pdf & Email Confirmation but with responsive mobile landscape.
DEMO: [https://portfolio-magic-gold.vercel.app/](https://portfolio-magic-gold.vercel.app/)

My adjustments: 

- Resume downloadable as .pdf. 
- A tweak to useScreenSize hook to include the height of the screen. Intended for mobile landscape. 
- Improved Email Format Validation
<!-- - Email Confirmation -->


## Getting Started

1.  ### Clone the repository
```bash
   git clone https://github.com/DreamersJS/3D-portfolio.git
   cd 3D-portfolio
```

2.  ### Install Dependencies
```bash
   npm install
```

3. ### Configure environment variables
 Create a .env file and set up environment variables for services like EMAIL JS and REDIS. <br/>
- `EMAIL_JS`: Your EmailJS API key.
- `REDIS`: Configuration for your Redis service.
- `NEXT_PUBLIC_APP_URL`: The public URL for your app, typically `http://localhost:3000` during development.

You also have a script to create an Ethereal account:
 ```bash
 node scripts/createEtherealAccount.js
 ```

1. ### Run the development server:

```bash
npm run dev
```

or use Docker (Containerized environment):
```bash
docker-compose up --build
```
*Adjust Dockerfile and docker-compose.yaml with your port*

Open [http://localhost:3000](http://localhost:3001) with your browser to see the result.


---

### Contact
For inquiries or suggestions, feel free to reach out at [neychevazvezda@gmail.com](mailto:neychevazvezda@gmail.com).

---