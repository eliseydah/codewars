задача Duplicate Encoder 
1. создать объект для подсчета числа значений в массиве 
2. выносить отдельный код в функции 
3. записывать вызов функции в переменные 
 пример решения дупликатов : 
 ```
 function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
```
задача find the parity outliner 

