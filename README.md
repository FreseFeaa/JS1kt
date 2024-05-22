# Выполнение задач на JavaScript

**Условия задач**

**Задача №1**

В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону: 
<значение price> Р в <эквивалент значения range на русском языке> 

**Пример значений переменных:**

let price = 10000 

let range = "day" 

**Пример результата:**

10000 Р в день

**Задача №2**

В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу: если значение переменной temp больше либо равно 25 a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf"; если значение переменной temp от 10 до 24 включительно или weather имеет значение "cloudy", тогда значение переменной activity должно быть "bowling"; в ином случае значение переменной activity должно быть "hiking". 
 
**Пример значений переменных:**

let temp = 25 

let weather = "clear" 

 
**Пример результата:**

"golf"

**Задача №3**

(состоит из двух пунктов)

**1) В программе объявлены три переменные — a, b и sign.**

В переменных a и b хранятся числовые значения. В переменную sign записано строковое значение одного из математических операторов +, -, /, *. Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b. 
Результат необходимо выводить в консоль. Гарантируется, что переменная b не равна нулю. 
 
**Примеры значений переменных:**

let a = 2 

let b = 6 

let sign = "*" 

 
**Пример результата:** 

12

**2) Необходимо доработать решение из задания 3.1 В дополнение к заданию 3.1 необходимо правильно обработать случай деления на 0. При попытке поделить на 0 программа должна выводить в консоль сообщение: "Делить на 0 нельзя!".** 

**Пример значений переменных:** 

let a = 2 

let b = 0 

let sign = "/" 

 
**Пример результата**: 

Делить на 0 нельзя!

**Задача №4**

Задана переменная word со строковым значением. Создайте переменную result с условием: если из длины переменной word вычисляется квадратный корень (без дробной части) - переменная result должна содержать ответ 1, в противном случае - 0 
 
**Пример:**

let word = 'меню' 

**Результат:** 

1


**После выполнения этой практической работы, я стал лучше понимать:**
- Реализацию тестов функций
- Синтаксис JavaScript
- Условные операторы и структуры
- Вычисления с числами и строками
- Обработка исключений

