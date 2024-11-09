export function createMap(parentElement) {
    const zoom = 12;
    const maxZoom = 19;
    const places = new Array();
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
        render: () => {
            let map = L.map(parentElement).setView(places[0].coords, zoom);
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
            places.push({
                name: name,
                coords: coords
            });
        }
    }
}