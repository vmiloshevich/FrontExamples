// 1. импортируем все что помечено как export
import * as multiExportModule from './files/multi-export_module.js'
console.log('import all api from module:', multiExportModule);

// 2. импортируем частично частично (модуль второй раз подгружаться не будет)
import {module1_const, module1_function} from './files/multi-export_module.js'

console.log('import partial api from module', module1_const, module1_function);
console.log('executing function from module:',module1_function());

// 3. из js файла, который ничего не экспортирует, пробуем получить данные
// выполняется только один раз, доступа к локальным переменным в no_module.js нет
import no_module from './files/no_module.js'
import * as no_module2 from './files/no_module.js'
// так тоже можно
import './files/no_module.js'

console.log('import from no module:', no_module);
console.log('import from no module v2:', no_module2);
// window.globalScopeVar объявлена в no_module.js
console.log('var from global scope:', window.globalScopeVar);
