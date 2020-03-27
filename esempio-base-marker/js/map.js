var map = L.map("map", {
        center: [41.9102411, 12.3955718],
        zoom: 12,
        scrollWheelZoom: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

var marker = L.marker([41.890251, 12.492373], { title: "Colosseo" }).addTo(map);
marker.bindPopup("Questo è un marker popup<br><b>Titolo in grassetto</b>");
