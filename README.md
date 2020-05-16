# Задача:

## Сверстать  макет страницы   (скачать макет)[https://yadi.sk/d/Bjlx6LL9gjcRUQ]

### требования:  
- scss/sass - нужно  
- flex - нужно  
- bootstrap и тп - нельзя  
- сайт должен собираться при помощи gulp/webpack  
- обязательно применение БЭМ в качестве методологии верстки  
- сверстанный макет должен корректно отображаться на минимальной для макета ширине: 1200px  
- нужно самостоятельно адаптировать макет для мобильных устройств, можно в упрощенном виде  
- требования к кроссбраузерности ie11 + 2 последние версии остальных браузеров  
- pixelPerfect необязательно, но может быть конкурентным преимуществом  
- слайдер на втором экране должен быть рабочим, должно работать автоперелистывание с таймингом 5сек + пауза при фокусе мыши на слайдере. Слайдер должен быть реализован с помощью любого готового решения (jQuery или нативный js)  
- Форма подписки должна проходить валидацию с показом ошибок и эмулировать отправку, с показом сообщения об успешной отправке (Внешний вид отображения сообщений об ошибке и об успешной отправке на усмотрение исполнителя, но должен быть в общих стилях сайта)


## 2. Необходимо найти и устранить утечку памяти, объяснить природу утечки.
```html
<script>  
var theItem = null;  
var replaceItem = function () {  
    var priorItem = theItem;  
    var writeToLog = function () {  
        if (priorItem) {  
            console.log("hi");  
        }  
    };  
    theItem = {  
        longStr: new Array(1000000).join('*'),  
        someMethod: function () {  
            console.log(someMessage);  
        }  
    };  
};  
setInterval(replaceItem, 1000);  
</script>
```

### Пояснения:  
Шрифт можете взять из открытых источников в интернете либо заменить на Arial  
После выполнения задачи залить результат в битбакет или гитхаб (репозиторий должен содержать исходники и собранный проект. Приветствуется использование хостинга github.io)   
Ответ придет на почту  в течение  2-4 рабочих дней  

В случае возникновения вопросов можете обращаться через скайп toflash007
