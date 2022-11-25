export const setAuthToken = (user, roll) => {
    const currentUser = {
        email: user.email,
        roll: roll
    }
    fetch(`http://localhost:2100/users/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json()).then(data => {
        localStorage.setItem('token', data.data.token)
    })

}