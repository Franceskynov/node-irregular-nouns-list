var irregularNounsList = require('../list.json'),
    singular = 'tomato',
    plural = 'tomatoes';

for(let i = 0; i < irregularNounsList.nouns.length; i++){
    if (irregularNounsList.nouns[i].singular == singular) {
        
        if (irregularNounsList.nouns[i].plural == plural) {
            console.log('Yes is correct!');
        }
    }
}