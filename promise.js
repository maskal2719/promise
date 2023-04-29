const axios = {}
const findUser = () => {}

const promise1 = axios.get('https://google.com')
promise1
    .then((data)  => {
        console.log(data)
    })

const promise2 = findUser(1)
promise2
    .then((data)  => {
        console.log(data)
    })

//Статические методы Promise
//Ожидаем получение всех данных (resolve). PromiseAll зарезолвится только если все промисы сработают
Promise.all([promise1, promise2])
    //в res лежит массив результатов
    .then((res) => {
        const dataFromGoogle = res[0]
        const dataFromDB = res[1]
        console.log(res)
    })
    .catch(() => {
        console.log('init failed.')
    })

//Зарезолвится когда все промисы уйдут из состояния pending (все равно в какое состояние)
Promise.allSettled([promise1, promise2])
    //в res лежит массив результатов
    .then((res) => {
        //в res массив из 2х объектов которые говорят о статусе и значении промисов
        const dataFromGoogle = res[0].status === 'fulfilled'
            ? res[0].value
            : {data:{vacancies: null}}
        const dataFromDB = res[1].status === 'fulfilled'
            ? res[1].value
            : {name: res[1].reason}

        console.log(res)
    })