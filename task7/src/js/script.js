alert('hello')
//Получить кнопку "Начать расчет" через id
let startPayment = document.getElementById('start');

//Получить все блоки в правой части программы через классы (которые имеют класс название-value)
let budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    yearValue = document.getElementsByClassName('year-value'),
    monthValue = document.getElementsByClassName('month-value'),
    dayValue = document.getElementsByClassName('day-value');

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItems = document.getElementsByClassName('expenses-item');

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let approve = document.getElementsByTagName('button')[0],
    calculate = document.getElementsByTagName('button')[1];

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('#income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent');

    let money, time;

    function start() {
      money = +prompt("Ваш бюджет на месяц?", '');
      time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
      while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
      }
    }
    start();
    
    let appData = {
      budget: money,
      expenses: {},
      optionalExpenses: {},
      income: [],
      timeData: time,
      saving: true,
      chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
          let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
              b = prompt("Во сколько обойдется?", '');
        
          if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
              && a != '' && b != '' && a.length < 50) {
              console.log("done");
              appData.expenses[a] = b;
          } else {
            i = i - 1;
          }
        }
      },
      detectDayBudget: function() {
        appData.moneyPerDay = appData.budget / 30;
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
      },
      detectLevel: function() {
        if (appData.moneyPerDay < 100) {
          console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
          console.log("Высокий уровень достатка");
        } else {
          console.log("Произошла ошибка");
        }
      },
      checkSavings: function() {
        if (appData.saving == true) {
          let save = +prompt("Какова сумма накоплений?"),
              percent = +prompt("Под какой процент?");
      
          appData.monthIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
      },
      chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
          let a = prompt("Статья необязательных расходов", "");
          appData.optionalExpenses[i+1] = a;
        }
      },
      chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход, (Перечислите через запятую)', '');
        while ((typeof(items)) != 'string' || items == '' || items == null) {
          items = prompt('Что принесет дополнительный доход, (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach(function(item, index) {
          alert(`Способы доп. заработка: ${index + 1} ${item}`);
        })
      },
    };
    
    for (key in appData) {
      console.log("Наша программа включает в себя данные: " + key);
    }
    
