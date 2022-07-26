# Instructions

- Clone project by running `git clone https://github.com/jadebuniel/frontend-assessment.git`
- Install dependencies by running `npm install`
- Run `npm run open-exercise-1` to run exercise 1
- Run `npm run open-exercise-2` to run exercise 2

### Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Adding + before string will convert it to a number. But when 'a' is converted to a number, it returns a NaN which means Not a Number. So ('b' + 'a' + + 'a' + 'a') = 'baNaNa' then the toLowerCase() method then convert this string to lowercase letters.
