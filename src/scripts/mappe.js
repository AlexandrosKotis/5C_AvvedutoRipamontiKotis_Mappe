export function createMap(parentElement) {
    const zoom = 12;
    const maxZoom = 19;
    const places = new Array();
    let map;
    /*
    [{
        name: "Piazza del Duomo",
        coords: [45.4639102, 9.1906426]
     },
     {
        name: "Darsena",
        coords: [45.4536286, 9.1755852]
     },
     {
        name: "Parco Lambro",
        coords: [45.4968296, 9.2505173]
     },
     {
        name: "Stazione Centrale",
        coords: [45.48760768, 9.2038215]
     }];
     */
    return {
        render: (index) => {
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