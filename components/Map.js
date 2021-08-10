class Map {

    createHtmlElement() {
        let mapSection =document.createElement('section')
        let divMap = document.createElement('div')
        divMap.id = "mapid"
        mapSection.appendChild(divMap)
        document.getElementById('main').appendChild(mapSection)

        let map = L.map('mapid').setView([46.71109, 1.7191036], 1);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiamVhbm1pY2giLCJhIjoiY2tzNXFkemJrMDNmbjMwcm5pZ3JudDQ3bSJ9.uuUmf64xqEmVcGNhBmvI-g'
        }).addTo(map);

    }
}

export default Map