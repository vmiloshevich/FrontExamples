console.log('no module loaded');
// эту переменную нигде кроме текущего модуля не видно
var innerVar = 12;
// в глобальный scope (window) все таки можно писать
globalScopeVar = 13;