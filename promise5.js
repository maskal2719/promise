// findUser(1)
//     .then((user) => console.log(user))

// function getNumber () {
//     // const promise = Promise.resolve(Math.round(Math.random() * 100))
//     const promise = new Promise((resolve, reject) => {
//         // reject('some error')
//         setTimeout(() => {
//             resolve(Math.round(Math.random() * 100))
//         },2000)
//     })
//     return promise
// }

// getNumber().then(n => console.log(n))
// getNumber().then(n => console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (err) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (err) {
                reject(err)
            }
        })
        return promise
    },
    read() {
        return new Promise((resolve, reject) => {
            const data = JSON.parse(localStorage.getItem('some-key'))
            if(!data) {
                resolve(null)
            }else {
                resolve(JSON.parse(localStorage.getItem('some-key')))
            }
        })
    }
}
// const promise = repo.saveAsync({name: 'Stas'})
//     .then(() =>console.log('saved'))
//     .catch(err => console.log(err))

// const run = async () => {
//     await repo.saveAsync({name: 'Stas'})
//     console.log('SAVED')
//
//     const data =  await repo.read()
//     console.log(data)
// }

function wait(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },time)
    })

}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
run()