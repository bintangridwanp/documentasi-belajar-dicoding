import _ from 'lodash';

const array = [1, 2, 3, 4];
const doubled = _.map(array, num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
