findUser(1)
    .then(user => user.name)
    .then(name => console.log(name))


axios.get('https://google.com')
    .then(res => res.data)// возвращает новый промис
    .then(data => console.log(data)) //возвращает новый промис

const getVacanciesCountFromGoogle = () => {
    return axios.get('https://google.com')
        .then(res => res.data)// вернет промис
}

getVacanciesCountFromGoogle()
    .then(data => data) // тут тоже промис, как ни странно)))