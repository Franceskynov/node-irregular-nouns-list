node-irregular-nouns-list
========================

## Description
This is a list of irregular nouns in english

## Installation

```bash
npm i node-irregular-nouns-list
```

## Usage

```js

var irregularNounsList = require('node-irregular-nouns-list'),
    singular = 'tomato',
    plural = 'tomatoes';

for(let i = 0; i < irregularNounsList.nouns.length; i++){
    if (irregularNounsList.nouns[i].singular == singular) {
        
        if (irregularNounsList.nouns[i].plural == plural) {
            console.log('Yes is correct!');
        }
    }
}

```

```
https://cdn.rawgit.com/Franceskynov/node-irregular-nouns-list/master/dist/list.json
```

## License

(MIT License)

Copyright 2017,  franceskynov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.