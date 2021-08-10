class Header {

    createHtmlElement() {
        const headerSection = document.createElement('section')
        const header = document.createElement('header')
        header.className = "h-32 w-screen bg-gradient-to-t from-yellow-500 to-yellow-200 flex flex-col justify-center items-center"
        const h1 = document.createElement('h1')
        h1.className = "text-3xl font-medium"
        h1.textContent = "Bienvenue sur Trouver votre Destination!"
        const span = document.createElement('span')
        span.textContent = "Et partez en toute tranquilité"
        header.appendChild(h1)
        header.appendChild(span)
        headerSection.appendChild(header)
        document.getElementById('main').appendChild(headerSection)
    }

}

export default Header