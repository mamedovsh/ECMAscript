// Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.

// const myPromise = new Promise((resolve, reject) => {});

// myPromise.then((value) => {}).catch((error) => console.log("ошибка"));

// const url1 = "https://jsonplaceholder.typicode.com/users";

// const getData = async (argUrl) => {
//   try {
//     const res = await fetch(argUrl);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const fetchData = await getData(url1);
// console.log(fetchData);

// const deleteBtn = document.querySelectorAll('.btn__del');
//     deleteBtn.forEach((button) => {
//       button.addEventListener('click', () => {
//         const product = button.closest('.card');
//         product.remove();

//       })
//     });

// Необходимо реализовать отрисовку 10 картинок 
// собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.



function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => {
        data.message.forEach((image, index) => {
          const img = document.createElement('img');
          img.src = image;
          document.body.appendChild(img);
        });
      })
      .catch(error => console.log(error));
  }
  
  function displayDogImages() {
    setInterval(fetchDogImages, 3000);
  }
  
  displayDogImages();