const resolvedPromise = Promise.resolve(1000)// вернет сразу зарезолвленный промис
const rejectedPromise = Promise.reject('some error')// вернет сразу реджекнутый промис

console.log(rejectedPromise)
console.log(resolvedPromise)


const usersAPI = {
    getAll() {
        return Promise.resolve([{name: 'D'},{name: 'A'}])
    }
}

const pr = usersAPI.getAll()
pr.then(data => console.log(data))