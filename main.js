const landingPage = document.querySelector('.landingPage')
const signUpScreen = document.querySelector('.signUpScreen')
const mainDashboard = document.querySelector('.mainDashboard')
const signUpButton = document.querySelector('.signUpButton')
const signUpForm = document.querySelector('.signup-form')
const loginForm = document.querySelector('.login-form')

const toSignUp = () => {
    signUpScreen.classList.remove('hidden')
    landingPage.classList.add('hidden')
    mainDashboard.classList.add('hidden')
}
signUpButton.addEventListener('click', () => {
    toSignUp()
})

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#signName').value
    const email = document.querySelector('#signEmail').value
    const password = document.querySelector('#signPass').value

    try {
        const response = await axios.post('http://localhost:3001/user', {
            name: name,
            email: email,
            password: password
        })
        console.log(response)
        const userId = response.data.user.userId
        console.log(userId)
        const userName = response.data.user.name
        localStorage.setItem('userId', userId)
        localStorage.setItem('userName', userName)
        toDashboard()
    } catch (error) {
        console.log(error)
        alert(error)
    }

})

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('#logEmail').value
    const password = document.querySelector('#logPass').value

    try {
        const response = await axios.post('http://localhost:3001/user/login', {
            email: email,
            password: password
        })
        console.log(response)
        const userId = response.data.id
        const userName = response.data.name
        localStorage.setItem('userName', userName)
        localStorage.setItem('userId', userId)
        toDashboard()
    } catch (error) {
        console.log(error)
        alert(error)
    }

})

const toDashboard = () => {
    mainDashboard.classList.remove('hidden')
    signUpScreen.classList.add('hidden')
    landingPage.classList.add('hidden')
}

const toLandingPage = () => {
    mainDashboard.classList.add('hidden')
    signUpScreen.classList.add('hidden')
    landingPage.classList.remove('hidden')
}

