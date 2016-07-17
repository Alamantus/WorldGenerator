# World Generator

An attempt to create an in-depth world generator that you can explore using JavaScript (ES2015).

## Usage

Use NPM to install by navigating to the WorldGenerator folder on your computer and using

```
npm install
```

Once it's installed (it my take a while because of the dev dependencies.), you can use the `retest`
script to compile and run the `main.js` file right away in node. You can modify `main.js` to try
out the different tests that are set up there.

```
npm run retest
```

If you want to use a browser to test instead, you can run the `build` script to compile, browserify
and minify the script into the `bin` folder, where you can add your own simple `.html` file that
that references the resulting `worldgenerator.min.js` file.

```
npm run build
```

Again, it'll only run what you set up in the `main.js` file, but you can also use the inspector in
Chrome to create and test different classes and stuff.
