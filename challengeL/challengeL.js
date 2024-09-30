const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const leoBalancePositive = leoBalance.replace('-', '');
const sarahBalancePositive = sarahBalance.replace('-', '');

const leoBalanceNum = parseFloat(leoBalancePositive); // Convert to number
const sarahBalanceNum = parseFloat(sarahBalancePositive); // Convert to number


const owed = Math.round(leoBalanceNum + sarahBalanceNum); // remove decimal
const leo = `${leoName} ${leoSurname.trim()} Owed: R${leoBalanceNum}`;
const sarah = `${sarahName.trim()} ${sarahSurname} Owed: R${sarahBalanceNum}`;
const total = `Total amount owed: ${owed}`;
const result = `${leo}\n${sarah}\n${divider}\n${total}\n${divider}`;

console.log(result);
