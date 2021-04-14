const landingPage = document.querySelector('.landingPage')
const signUpScreen = document.querySelector('.signUpScreen')
const mainDashboard = document.querySelector('.mainDashboard')
const signUpButton = document.querySelector('.signUpButton')
const signUpForm = document.querySelector('.signup-form')
const loginForm = document.querySelector('.login-form')
const searchBar = document.querySelector('.searchBar')
const movieView = document.querySelector('.movieView')
const homeNav = document.querySelector('#home-link')
const signNav = document.querySelector('#signup-link')
const loginNav = document.querySelector('#login-link')
const logoutNav = document.querySelector('#logout-link')
const profileNav = document.querySelector('#profile-link')
const addFavorite = document.querySelector('.addFav')

const toSignUp = () => {
    signUpScreen.classList.remove('hidden')
    landingPage.classList.add('hidden')
    mainDashboard.classList.add('hidden')
    loginNav.classList.remove('hidden')
}

const toDashboard = () => {
    mainDashboard.classList.remove('hidden')
    signUpScreen.classList.add('hidden')
    landingPage.classList.add('hidden')
    logoutNav.classList.remove('hidden')
}

const toLandingPage = () => {
    mainDashboard.classList.add('hidden')
    signUpScreen.classList.add('hidden')
    landingPage.classList.remove('hidden')
    logoutNav.classList.add('hidden')
}

let resultsId = null
const showInfo = (data) => {
    resultsId = data.Title
    console.log(data)
    // const res = await fetch(`https://www.omdbapi.com/?t=${req.params.movie}&apikey=${process.env.APIKEY}`)
    // const data = await res.json();

    document.querySelector("#viewTitle").innerText = data.Title;
    document.querySelector("#viewImage").src = data.Poster;

    movieView.classList.remove("hidden");
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

searchBar.addEventListener('submit', async(e) => {
    e.preventDefault()

    try {
        const filmEntry = document.querySelector('#filmEntry').value
        console.log(filmEntry)
        const res = await axios.post(`http://localhost:3001/movie/search/${filmEntry}`)
        console.log(res.data)
        showInfo(res.data)
        searchBar.reset()
        
    } catch (error) {
        console.log(error)
    }
    
})

addFavorite.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        let userId = localStorage.getItem('userId')
        const res = await axios.post(`http://localhost:3001/movie/search/${filmEntry}`)
        console.log(res)
    } catch (error) {
        console.log(res)
    }
})


logoutNav.addEventListener('click', () => {
    logoff()
})
const logoff = () => {
    localStorage.clear()
    toLandingPage()
}
loginNav.addEventListener('click', () => {
    toLandingPage()
})

// document.addEventListener("click", async (event) => {
//     if (event.target.matches("#home-link")) {
//         toDashboard();
//     }
//   })

homeNav.addEventListener('click', (event) => {
    toDashboard();
})

homeNav.addEventListener('click', (event) => {
    toDashboard();
})