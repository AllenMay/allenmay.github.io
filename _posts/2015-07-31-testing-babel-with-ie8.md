---
layout: post
title: Testing Babel with IE8
categories: [learning]
tags: []
published: True

---
<img src="/images/babel.png">  
Babel is an ES6 (JavaScript 6) to ES5 (JavaScript 5) transpiler. Transpilers allow you to take advantage of unsupported features now while we wait for new browsers to support these new features. 

I still support IE8 at work so I'm looking at Babel as an option to take advantage of ES6 functionality. My 'babel-starter' test is taking advantage of ES6's [arrow functions] [arrow] and, as you'll see on this [ECMAScript Compatibility grid] [grid], it only starts to have support with [Microsoft Edge] [edge].

Will my 'babel-starter' run on IE8? I spun up a VirtualBox of Win7/IE8 and was impressed to see ES6 code transpiled and interpreted for use by IE8. 

**Way to go Babel!**

So let's see if we can get **promises** to work on IE8. Will Bebel help with transpile for IE8? 
There are limits... No, I couldn't get **promise** support on IE8 with Babel.

In the image below, the red line is my **promise** test and the green line is my **ES6 arrow function** test.

<img src="/images/BabelProofIE8.png">

[arrow]: http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions
[grid]: https://kangax.github.io/compat-table/es6/
[edge]: https://www.microsoft.com/en-us/windows/microsoft-edge