export function createMap(parentElement) {
    const zoom = 12;
    const maxZoom = 19;
    const places = [{
        name: "Piazza del Duomo",
        coords: [45.4639102, 9.1906426]
     }]
    let map;

    return {
        render: (index) => {
            if(!index) index = 0;
            if(map) map.remove();
            map = L.map(parentElement).setView(places[index].coords, zoom);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: maxZoom,
                attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            places.forEach((place) => {
                const marker = L.marker(place.coords).addTo(map);
                marker.bindPopup("<b>" + place.name + "</b>");
            });
        },
        addPlace: (name, coords) => {
            console.log(places);
            return new Promise((resolve, reject) => {
                if (places.some(place => place.name === name)) {
                    return reject(places.length - 1);
                }
                places.push({
                    name: name,
                    coords: coords
                });
                resolve(places.length - 1);
            })

        }
    }
}