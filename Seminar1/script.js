
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [1, 5, 7, 9];
// const minNumber = Math.min(...arr);
// console.log(minNumber);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя 
// методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 
// 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter(def) {
//     return {
//         value:def,
//         increment(num){
//             return(this.value + num);
//         },
//         decrement(num){
//             return(this.value - num);
//         }
//     };
// }

// const result = createCounter(4);
// console.log(result.increment(1));
// console.log(result.decrement(1));

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент 
// дерева DOM и название класса в качестве аргументов и
//  возвращает первый найденный элемент с указанным классом в этом дереве.

// function findElementByClass(element, className){
//     if (element.classList.contains(className)){
//         return element;
//     }

//     for(let child of element.children){
//         // const child = children[i];
//         const result = findElementByClass(child, className);

//         if(result !== null){
//             return result;
//         }
//     }

//     return null;
// }

// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(root, className) {
    if (root.classList && root.classList.contains(className)) {
        return root;
    }
    
    for (let i = 0; i < root.children.length; i++) {
        const child = root.children[i];
        const result = findElementByClass(child, className);
        
        if (result) {
            return result;
        }
    }
    
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);