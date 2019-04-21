'use strict';
let money, time;
function start (){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money ==null){ //isNaN возвращаент true когда туда попадают не цифры
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
                let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) { 
                console.log('done');
                appData.expenses[a] = b;
        }     else {
             i--;
          } 
        } 
    },
    
    chooseIncome: function() {
        for (let i = 0; i < 1; i++)    {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if ((typeof(items) )=== 'string' && items != null && items != '') {
            appData.income = items.split(', ');    //Метод split осуществляет разбиение строки в массив по указанному разделителю
            appData.income.push(prompt('Может что-то еще?')); //push Добавить елемент к массиву
                // Вывод данных на страницу
            document.write('Способы доп. заработка: ');
            appData.income.forEach(function(item, i, arr) {
            document.write(i+1 + ': ' + item + '. ');
    })
        } else {
            alert('Поле ввода не должно быть цифрами либо пусты, необходимо ввести данные повторно?)');
            i--;    // интерация цикла на шаг назад в самое начало
        }
    }
},
   
        
    
    
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.Budget / 30).toFixed(1);
        alert("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
                console.log('минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
                console.log('высокий уровень достатка');
        } else {
                console.log("произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
                let save = +prompt('какова сумма накоплений?'),
                    percent = +prompt('под какой процент?');  
                appData.monthIncome = save/100/12*percent;
                alert ('доход в месяц с вашего депозита:' + appData.monthIncome);   
                
           }  
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
                let opt = prompt('Статья необязательных расходов?', '');
                appData.optionalExpenses[i] = opt;         
        
        }
    },

    
    
};
for (let key in appData){
    console.log("наша программа включает в себя", key);
}

