/**
 * GoogleMapsTrackerService - Handles Google Maps initialization, Polyline drawing, and real-time rider marker animation
 */
export class GoogleMapsTrackerService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.googleMap = null;
    this.riderMarker = null;
    this.activePolyline = null;
    this.remainingPolyline = null;
    this.intervalId = null;

    // Realistic delivery waypoints: Earthware Studio -> Sector F-7 Islamabad
    this.routePath = [
      { lat: 33.7294, lng: 73.0768, eta: '14 mins', dist: '2.8 km', speed: '36 km/h' },
      { lat: 33.7272, lng: 73.0740, eta: '12 mins', dist: '2.4 km', speed: '42 km/h' },
      { lat: 33.7245, lng: 73.0695, eta: '9 mins',  dist: '1.9 km', speed: '39 km/h' },
      { lat: 33.7220, lng: 73.0645, eta: '6 mins',  dist: '1.2 km', speed: '34 km/h' },
      { lat: 33.7190, lng: 73.0590, eta: '3 mins',  dist: '0.6 km', speed: '22 km/h' },
      { lat: 33.7180, lng: 73.0560, eta: 'Arriving now!', dist: '0.1 km', speed: '12 km/h' }
    ];
  }

  loadScript(callback) {
    if (window.google && window.google.maps) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=onGoogleMapsInitDone`;
    script.async = true;
    script.defer = true;
    window.onGoogleMapsInitDone = callback;
    document.head.appendChild(script);
  }

  init(containerId, onDelivered) {
    this.loadScript(() => {
      const container = document.getElementById(containerId);
      if (!container || !window.google) return;

      const google = window.google;
      const studioPos = this.routePath[0];
      const customerPos = this.routePath[this.routePath.length - 1];

      // Clean Foodpanda-like Map Styling
      const mapStyle = [
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9e2f4' }] },
        { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f3ee' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
        { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fefefe' }] },
        { featureType: 'poi', stylers: [{ visibility: 'simplified' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#d8eed8' }] }
      ];

      this.googleMap = new google.maps.Map(container, {
        center: { lat: 33.724, lng: 73.066 },
        zoom: 14,
        styles: mapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      });

      // 1. Studio Origin Marker
      new google.maps.Marker({
        position: studioPos,
        map: this.googleMap,
        title: 'Earthware Pottery Studio',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
          scaledSize: new google.maps.Size(38, 38)
        }
      });

      // 2. Customer Destination Marker
      new google.maps.Marker({
        position: customerPos,
        map: this.googleMap,
        title: 'Delivery Address (House # 42)',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
          scaledSize: new google.maps.Size(40, 40)
        }
      });

      // 3. Base Route Polyline
      this.activePolyline = new google.maps.Polyline({
        path: this.routePath.map(p => ({ lat: p.lat, lng: p.lng })),
        geodesic: true,
        strokeColor: '#000104',
        strokeOpacity: 0.7,
        strokeWeight: 4,
        map: this.googleMap
      });

      // 4. Remaining Active Route Polyline
      this.remainingPolyline = new google.maps.Polyline({
        path: this.routePath.map(p => ({ lat: p.lat, lng: p.lng })),
        geodesic: true,
        strokeColor: '#10B981',
        strokeOpacity: 0.9,
        strokeWeight: 4,
        map: this.googleMap
      });

      // 5. Moving Rider Marker
      this.riderMarker = new google.maps.Marker({
        position: studioPos,
        map: this.googleMap,
        title: 'Tariq (Rider)',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/motorcycling.png',
          scaledSize: new google.maps.Size(42, 42)
        }
      });

      this.startAnimation(onDelivered);
    });
  }

  startAnimation(onDelivered) {
    const etaText = document.getElementById('eta-text');
    const speedMeter = document.getElementById('speed-meter');
    const distText = document.getElementById('map-dist-text');
    const etaBadge = document.getElementById('map-eta-badge');

    let step = 0;
    this.intervalId = setInterval(() => {
      step++;
      if (step >= this.routePath.length) {
        this.stop();
        setTimeout(() => {
          if (onDelivered) onDelivered();
        }, 2500);
        return;
      }

      const point = this.routePath[step];
      const newLatLng = { lat: point.lat, lng: point.lng };

      if (this.riderMarker) {
        this.riderMarker.setPosition(newLatLng);
        if (this.googleMap) this.googleMap.panTo(newLatLng);
      }

      if (this.remainingPolyline) {
        const remainingCoords = this.routePath.slice(step).map(p => ({ lat: p.lat, lng: p.lng }));
        this.remainingPolyline.setPath(remainingCoords);
      }

      if (etaText) etaText.textContent = point.eta;
      if (etaBadge) etaBadge.textContent = point.eta;
      if (distText) distText.textContent = point.dist;
      if (speedMeter) speedMeter.textContent = `Speed: ${point.speed}`;
    }, 3200);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

