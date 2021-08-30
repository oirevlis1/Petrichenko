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
