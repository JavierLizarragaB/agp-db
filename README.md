# Agrupación George Papanicolaou - Base de Datos

### Frontend

-React
-Typescript

### Backend

-Flask
-Python

## Run development mode

### Server

1. Open a terminal in the workspace (or the VSCode integrated terminal)
2. Get into server dir: `cd server`
3. Activate python virtual environment: `pipenv shell`
4. Already installed server dependencies?
    - Y: Continue to step 5
    - N: Install virtual environtment dependencies: `pipenv install --dev`
5. Using the updated version of the .env file?
    - Y: Continue to step 6
    - N: Donwload the new .env file and place it in the server dir
6. Run Flask backend server: `flask run`

### Client

7. Create new terminal in workspace (or VSCode integrated terminal)
8. Get into the client dir: `cd client`
9. Already installed client dependencies?
    - Y: Continue to step 10
    - N: Install node modules dependencies: `npm install`
10. Start the client application: `npm start`

## Contributing

-   Stay tuned for repository updates
-   Remember to pull often
-   Structured branch names (without "<>"): `<username>_<feature>`
-   One branch per person, per feature
-   Expresive commits
    -   Start with an emoji (see reference guide: https://gitmoji.dev/)
    -   Insighful message
    -   NO: `git commit -m "Sum changes"`
    -   YES: `git commit -m ":lipstick: Updated user card by changing the container element width and height."`
-   Push ONLY to your branches
    -   YES: `git push -u origin user123_AppChanges`
    -   NO: `git push -uf origin main` (<-- DO NOT TEST THIS LINE)
-   Comments, comments, comments
    -   Rule of thumb: 3 lines, 1 comment
-   Use common sense:
    -   Could my grandma read (and understand) my code?
    -   Is my solution reusable?
    -   Is this going to overwrite someone else's work?
    -   Will I be able to understand my commit message 30 days from now?
    -   Am I uploading any sensible or secret information (API keys, passwords, validation tokens...)?
    -   Don't be too afraid to break stuff, just be willing to fix it

## For starters

**REMEMBER**: 65% of your job is to **FIGURE OUT** and **LEARN** how to do stuff... \
These resources are your friends:

### Backend

-   **Flask docs**: Official Flask web framework documentation - https://flask.palletsprojects.com/en/1.1.x/
-   **Flask Megatutorial** - https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
-   **Pretty Printed**: Python Backend YouTube channel - https://www.youtube.com/channel/UC-QDfvrRIDB6F0bIO4I4HkQ
-   **MongoDB for Python developers**: Official FREE course - https://university.mongodb.com/courses/M220P/about
-   **Flask-Mongoengine docs**: Docs for Mongoengine ODM - http://docs.mongoengine.org/projects/flask-mongoengine/en/latest/

### Frontend

-   **React Docs**: Official react documentation (for Javascript) - https://reactjs.org/docs/getting-started.html
-   **Typescript Handbook** - https://www.typescriptlang.org/docs/handbook/intro.html
-   **React & TypeScript Guide** - https://components.guide/react+typescript
-   **Traversy Media**: Fullstack YouTube channel https://www.youtube.com/user/TechGuyWeb
-   **MDN Web Docs**, robust web technologies docs: https://developer.mozilla.org/

### GitHub

-   **GitHub TechWithTim tutorial**: PLEASE WATCH THIS! - https://www.youtube.com/watch?v=DVRQoVRzMIY
-   **Command Cheat Sheet**: Official command cheat sheet - https://education.github.com/git-cheat-sheet-education.pdf
