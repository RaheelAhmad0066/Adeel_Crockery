/**
 * GoogleMapsTrackerService
 * Uses Google Maps official DirectionsService & DirectionsRenderer so Google Maps
 * natively computes and renders the official route polyline directly onto the map.
 * The rider marker animates smoothly along the native Google route points.
 */
export class GoogleMapsTrackerService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.googleMap = null;
    this.riderMarker = null;
    this.directionsService = null;
    this.directionsRenderer = null;
    this.animFrameId = null;
    this.isRunning = false;

    // Origin: Earthware Pottery Workshop (Sector F-6, Islamabad)
    this.origin = { lat: 33.7294, lng: 73.0768 };
    // Destination: Customer House (Sector F-7/2, Islamabad)
    this.destination = { lat: 33.7180, lng: 73.0560 };

    this.routeSteps = [];
  }

  loadScript(callback) {
    if (window.google && window.google.maps) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=geometry&callback=onGoogleMapsInitDone`;
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

      // Google Maps Clean Styling
      const mapStyle = [
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9e2f4' }] },
        { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f7f5f0' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
        { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fefefe' }] },
        { featureType: 'poi', stylers: [{ visibility: 'simplified' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#d9edd9' }] },
        { featureType: 'building', elementType: 'geometry', stylers: [{ color: '#ebe6dd' }] }
      ];

      this.googleMap = new google.maps.Map(container, {
        center: { lat: 33.7237, lng: 73.0664 },
        zoom: 15,
        tilt: 45,
        heading: 40,
        styles: mapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      });

      // 1. Google Maps Official DirectionsRenderer for native polyline
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        map: this.googleMap,
        suppressMarkers: false, // Use Google Maps official origin & destination markers
        polylineOptions: {
          strokeColor: '#059669', // Emerald Foodpanda route color
          strokeOpacity: 0.85,
          strokeWeight: 6
        }
      });

      // 2. 3D Bike / Scooter Marker
      const scooterSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
          <ellipse cx="28" cy="48" rx="18" ry="5" fill="rgba(0,0,0,0.3)" />
          <circle cx="28" cy="24" r="20" fill="#059669" stroke="#ffffff" stroke-width="3" />
          <g fill="#ffffff" transform="translate(16, 12) scale(0.048)">
            <path d="M400 32H352c-26.5 0-48 21.5-48 48v21.3c-23 15.6-38.4 42-38.4 71.9 0 21.6 8.1 41.3 21.3 56.6L201.2 288H136c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80c0-11-2.3-21.5-6.3-31.1l74.9-50 48.7 73.1c-14.8 19.3-23.7 43.4-23.7 69.5 0 61.9 50.1 112 112 112s112-50.1 112-112-50.1-112-112-112c-15.5 0-30.2 3.2-43.6 8.9L320 236.4V80c0-8.8 7.2-16 16-16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"/>
          </g>
        </svg>
      `;

      this.riderMarker = new google.maps.Marker({
        position: this.origin,
        map: this.googleMap,
        title: 'Tariq (Rider - Live)',
        zIndex: 999,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(scooterSvg),
          scaledSize: new google.maps.Size(50, 50),
          anchor: new google.maps.Point(25, 25)
        }
      });

      // 3. Request Route via Google Maps DirectionsService
      this.directionsService = new google.maps.DirectionsService();

      const request = {
        origin: this.origin,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING
      };

      this.directionsService.route(request, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          // Native Google Maps polyline rendered automatically by DirectionsRenderer
          this.directionsRenderer.setDirections(response);

          // Extract detailed route coordinates for smooth rider traversal
          const pathPoints = response.routes[0].overview_path;
          this.routeSteps = this.interpolatePath(pathPoints, 16);
          this.startSmoothDriving(onDelivered);
        } else {
          // If Directions API quota/network issues, fall back to native google.maps.Polyline with detailed turns
          console.warn('DirectionsService status:', status, '- Using native google.maps.Polyline');
          this.useNativeGooglePolyline(onDelivered);
        }
      });
    });
  }

  useNativeGooglePolyline(onDelivered) {
    const google = window.google;

    // Actual street turn coordinates through Sector F-6 and F-7 Islamabad
    const streetTurns = [
      new google.maps.LatLng(33.7294, 73.0768), // Studio F-6/2
      new google.maps.LatLng(33.7282, 73.0754),
      new google.maps.LatLng(33.7268, 73.0738), // Turn towards Kohsar
      new google.maps.LatLng(33.7252, 73.0715),
      new google.maps.LatLng(33.7238, 73.0685), // Parbat Road
      new google.maps.LatLng(33.7225, 73.0652),
      new google.maps.LatLng(33.7210, 73.0620), // Bhittai Road turn
      new google.maps.LatLng(33.7195, 73.0588),
      new google.maps.LatLng(33.7188, 73.0572),
      new google.maps.LatLng(33.7180, 73.0560)  // Destination House # 42
    ];

    // Native Google Maps Polyline
    const nativePolyline = new google.maps.Polyline({
      path: streetTurns,
      geodesic: true,
      strokeColor: '#059669',
      strokeOpacity: 0.9,
      strokeWeight: 6,
      map: this.googleMap
    });

    this.routeSteps = this.interpolatePath(streetTurns, 16);
    this.startSmoothDriving(onDelivered);
  }

  interpolatePath(points, stepsPerSegment = 16) {
    const interpolated = [];
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];

      const lat1 = typeof p1.lat === 'function' ? p1.lat() : p1.lat;
      const lng1 = typeof p1.lng === 'function' ? p1.lng() : p1.lng;
      const lat2 = typeof p2.lat === 'function' ? p2.lat() : p2.lat;
      const lng2 = typeof p2.lng === 'function' ? p2.lng() : p2.lng;

      for (let s = 0; s < stepsPerSegment; s++) {
        const ratio = s / stepsPerSegment;
        interpolated.push({
          lat: lat1 + (lat2 - lat1) * ratio,
          lng: lng1 + (lng2 - lng1) * ratio
        });
      }
    }
    const last = points[points.length - 1];
    interpolated.push({
      lat: typeof last.lat === 'function' ? last.lat() : last.lat,
      lng: typeof last.lng === 'function' ? last.lng() : last.lng
    });
    return interpolated;
  }

  startSmoothDriving(onDelivered) {
    const etaText = document.getElementById('eta-text');
    const speedMeter = document.getElementById('speed-meter');
    const distText = document.getElementById('map-dist-text');
    const etaBadge = document.getElementById('map-eta-badge');

    this.isRunning = true;
    let step = 0;
    const totalSteps = this.routeSteps.length;
    let lastTime = performance.now();
    const stepInterval = 75; // 75ms per smooth sub-step

    const driveLoop = (now) => {
      if (!this.isRunning) return;

      if (now - lastTime >= stepInterval) {
        lastTime = now;
        step++;

        if (step >= totalSteps) {
          this.stop();
          if (onDelivered) onDelivered();
          return;
        }

        const point = this.routeSteps[step];
        const currentLatLng = new window.google.maps.LatLng(point.lat, point.lng);

        // Move 3D Rider Marker
        if (this.riderMarker) {
          this.riderMarker.setPosition(currentLatLng);
        }

        // Camera follow
        if (this.googleMap && step % 4 === 0) {
          this.googleMap.panTo(currentLatLng);
        }

        // Live calculation of remaining distance and ETA
        const progress = step / totalSteps;
        const remDist = Math.max(0.1, (2.6 * (1 - progress))).toFixed(1);
        const remMins = Math.max(1, Math.round(12 * (1 - progress)));

        if (distText) distText.textContent = `${remDist} km`;
        if (etaBadge) etaBadge.textContent = remMins <= 1 ? 'Arriving now!' : `${remMins} mins`;
        if (etaText) etaText.textContent = remMins <= 1 ? 'Arriving now!' : `${remMins} mins`;
        if (speedMeter) speedMeter.textContent = `Speed: ${32 + Math.round(Math.sin(step / 3) * 5)} km/h`;
      }

      this.animFrameId = requestAnimationFrame(driveLoop);
    };

    this.animFrameId = requestAnimationFrame(driveLoop);
  }

  stop() {
    this.isRunning = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }
}
