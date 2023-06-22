---
layout: layouts/MarkdownPostLayout.astro
title: 'React JS Pro tips'
pubDate: 2023-22-06
description: ''
author: 'Anandu Babu'
image:
    url: 'https://docs.astro.build/assets/full-logo-lighjt.png' 
    alt: 'The full reactjs logo.'
tags: ["astro", "blogging", "learning in public"]

---

# Do this after creating your react app

## 1. setup absolute path

It is very anoying to see relative paths in imports of a component espesially

1. create a `jsconfig.json` or `tsconfig.json` file at the root directory of the application and deifine the paths:

   ```js
   {
     "compilerOptions": {
       "baseUrl": "src"
     },
     "include": ["src"]
   }
   ```

2. restart your application

3. use absolute path from src to the imports like `component/styled` instead of `../../../component/styled`
