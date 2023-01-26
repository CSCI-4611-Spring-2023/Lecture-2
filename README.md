# Lecture 2: Anatomy of a Graphics Program

You can run the program on [GitHub pages](https://csci-4611-spring-2023.github.io/Lecture-2).

The latest commit is the finished code that was pushed at the end of class.  If you are intending to implement this program while watching the lecture video, you should checkout the commit labeled `pre-class commit`  to get the starter code.

## Prerequisites

To work with this code, you will first need to install [Node.js 18.13.0 LTS](https://nodejs.org/en/) (or newer) and [Visual Studio Code](https://code.visualstudio.com/). 

I also recommend you install the following useful VS Code extensions:

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (makes source control easier)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (static code analysis tool that can flag errors)
- [JavaScript Debugger](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) (essential for real-time debugging)
- [WebGL GLSL Editor](https://marketplace.visualstudio.com/items?itemName=raczzalan.webgl-glsl-editor) (used for programming shaders later in the course)

## Topics

- Installation and setup
- Checking out code from GitHub
- Structure of a graphics program
- Introduction to TypeScript
- Drawing basic shapes with GopherGfx
- Event handlers
- Debugging errors

## Running

You will need to set up the initial project by pulling the dependencies from the node package manager with:

```
npm install
```

After that, you can compile and run a server with:

```
npm run start
```

Your program should open in a web browser automatically.  If not, you can run it by pointing your browser at `http://localhost:8080`.

## License

Material for [CSCI 4611 Spring 2023](https://csci-4611-spring-2023.github.io) by [Evan Suma Rosenberg](https://illusioneering.umn.edu/) is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).