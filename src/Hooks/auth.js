export const setAuthToken = (user, role) => {
    const currentUser = {
        email: user.email,
        role: role
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