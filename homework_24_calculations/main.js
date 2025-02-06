
// Дан масив об'єктів.



const users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$4,233.78",
        "name": "Suzette Lewis",
        "gender": "male",
        "phone": "+1 (995) 587-3985",
        "address": "920 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    },
    {
        "index": 6,
        "isActive": false,
        "balance": "$690.56",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (837) 235-8462",
        "address": "212 Seba Avenue, Osage, Alabama, 3234"
    },
    {
        "index": 7,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    }
];

// Написати функції для наступних дій:

// #1 Повернути масив телефонних номерів користувачів, у яких баланс менше ніж 2000 доларів.
// #2 Знайти суму всіх балансів користувачів
// #3 Знайти користувача з максімальним балансом, вивести його
// #4 Вивести користувачів з повторюючимися іменами


function getBalanceAsNum(balance) {
    return parseFloat(balance.replace('$','').replace(',',''));
}


function usersPhone() {
    return users
        .filter(user=> getBalanceAsNum(user.balance) < 2000)
    .map(user => user.phone);
}
console.log(usersPhone());



function usersBalance() {
    return users
        .map(user => getBalanceAsNum(user.balance))
        .reduce((sum,balance) => sum + balance, 0)
        .toFixed(2);
}
console.log(usersBalance());



function maxBalance() {
    return users
        .reduce((maxUser, user) => {
            let userBalance = getBalanceAsNum(user.balance);
            if (userBalance > maxUser.balance) {
                return {user, balance: userBalance};
            }
                return maxUser;
        }, {balance: 0}).user;
    }

console.log(maxBalance());




const nameCounts = users.reduce((acc,user) => {
    acc[user.name] = (acc[user.name] || 0) + 1;
    return acc;
}, {});

const duplicateUsers = users.filter(user => nameCounts[user.name] > 1);

console.log(duplicateUsers);