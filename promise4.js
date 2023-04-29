findUser(1)
    .then(user => {
        return user
    })



async function run() {
    let user = await findUser(1)
    let friend1 = await findUser(user.friend)
    let friend2 = await findUser(friend1.friend)
}

run()
