# codebox.js
Simple library to create fresh and functionial web code snippets

## 📖 Table of contents
* [Installation](#-installation)
* [Usage](#-usage)
* [Demo](#-demo)

## 🔨 Installation
1. Add [highlight.js](https://github.com/highlightjs/highlight.js) dependency in `<header>`
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/languages/java.min.js"></script>
```
> You might need to adjust or add imports for the syntax languages you are using.

2. Import the libraries stylesheet
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-dark.min.css"/>
```
Adjust the style import if you want to use a different color scheme. A list of available themes can be found here: https://cdnjs.com/libraries/highlight.js filtering `Asset Type: Styling`

3. Initialize the library before the `<body>` tag
```html
<script>
  hljs.initHighlightingOnLoad();
</script>
```

4. Add codebox.js script in `<header>`
```html
<script src="https://cdn.jsdelivr.net/gh/ghxstboy/codebox.js@1.0.0/dist/codeBox.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ghxstboy/codebox.js@1.0.0/dist/codeBox.min.css"/>
```

## 🦥 Usage
Simply add a new `<codebox>` element to your `<body>`. Put a `<pre>` tag inside and paste your code directly inside the tag.
```html
<codebox title="Example" script="java" direction="left" ccopy="true">
  <pre>#YOURcodeHERE#</pre>
</codebox>
```
### Available attributes
| Attribute | Description                      | Default value |
|-----------|----------------------------------|---------------|
| title     | Title of the titlebar frame      | Example       |
| script    | Programming Language Syntax      | -             |
| direction | Perspective effect orientation   | none          |
| ccopy     | User can copy code via button    | true          |
| cselect   | User can select code             | false         |
| radius    | Border radius of the frame       | 10            |
| color     | Background color of the frame    | #1a1a1a       |
| barColor  | Background color of the titlebar | #121212       |
| textColor | Default text color               | #c1c1c1       |

## 💡 Demo

Visit my [GITHUB PAGE](https://ghxstboy.github.io/codebox.js/example) for some examples.

---

Feel free to contribute and create issues.
