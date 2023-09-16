We are using Vite (pronounce = vit , not vait or VITE)
official web : vitejs.dev

Vite is a build tool for React to build a frontend web
other build tools are next.js and CRA 
Vite is more fast and light than CRA or Create React App and Next.js

We can use Next.js if we want to build a full stack web with react

Main function of vite:
    - npm run dev = to create a local server when we develop our App, similar to live server in html
    - npm run build = We type this on terminal after our App is done. This has function to compile and create a folder that contain only HTML, CSS, SVG, and JavaScript so that we can deploy it into the server (we can also live server the HTML after we build)

step to create a new project:
    1. Create a new folder for the project
    2. Open it in VS Code

    3. Open the terminal check the Node.JS version by typing:
        node -v     (make sure the node.js version is the lastest)
        - if you need to update the node.js version, just go to the website, download the lastest version, and overwrite the installation

    4. type: 
        npm create vite@latest  (need to install node.js first) > slower
        yarn create vite        (need to install node.js first, then yarn) > faster
        pnpm create vite        (need to install node.js first, then pnpm) > fastest
            to install pnpm, type: npm install -g pnpm

    5. From this step, adjust the command line with npm/yarn/pnpm , depends on the first command you use and stick with it, don't mix it along the react configuration.

    6. Type the project name/folder name. If you already have a folder, just type . (dot)

    7. Select React framework (use arrow keys to navigate, and enter to select)
    8. Select JavaScriptor or TypeScript (without SWC)
    9. Type:
        npm install         (remember, if you use npm then npm, if pnpm then pnpm)
    10. Type (check number 11 first):
        npm run dev 
        to create a "live server" for our react project
    11. If you want to add CSS framework to your project, don't type npm run dev first, follow the step from this link: https://tailwindcss.com/docs/guides/vite start from number 2. or follow this step:
        - Type:
            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p
        - Copy all code from tailwind.config.js from the link above and overwrite it to the tailwind.config.js in our project
        - Delete the code inside index.css and copy the code from the link
    
    12. Ready to develop with react. Don't forget to create the git and post in github first as usual.


