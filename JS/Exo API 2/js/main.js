const dataIss = fetch('http://open-notify.org/Open-Notify-API/ISS-Location-Now/ ');
console.log(dataIss);


const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const issIcon = L.icon({
    iconUrl: './img/international-space-station-icon.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
let firstUpdate = true;

async function updateISSPosition() {
    try {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();
        const lat = parseFloat(data.iss_position.latitude);
        const lon = parseFloat(data.iss_position.longitude);

        marker.setLatLng([lat, lon]);
        if (firstUpdate) {
            map.setView([lat, lon], 2);
            firstUpdate = false;
        }

    marker.bindPopup('Iss is at : lattitude ' + lat + '  longitude ' + lon);

    } catch (err) {
        console.error('Erreur récupération position ISS:', err);
    }
}


updateISSPosition();
setInterval(updateISSPosition, 500);
