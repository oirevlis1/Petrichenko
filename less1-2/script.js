let money = readBudget();
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving : false
};

for (let i = 0; i < 2; i++ ) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      console.log("done");
  }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

function readBudget() {
  while (true) {
    let userInput = prompt("Ваш бюджет на месяц?", '');
    if (userInput && isFinite(userInput)) return parseFloat(userInput);
  }
}

/*
let i = 0;

while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
    console.log("done");
  }
  i++;
}

do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
    console.log("done");
  }
  i++;
} while (i < 2);
*/