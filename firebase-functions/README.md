# Firebase-functions file structure

```
+- .firebaserc          # Hidden file that helps you quickly switch between
|                       # projects with `firebase use`
|
+- firebase.json        # Describes properties for your project
|
+- functions/           # Directory containing all your functions code
    |
    +- .eslintrc.json   # Optional file containing rules for JavaScript linting.
    |
    +- package.json     # npm package file describing your Cloud Functions code
    |
    +- index.js         # main source file for your Cloud Functions code
    |
    +- node_modules/    # directory where your dependencies (declared in
                        # package.json) are installed
```