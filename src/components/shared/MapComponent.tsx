import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  center: [number, number];
  zoom: number;
  markers?: Array<{
    position: [number, number];
    popup?: string;
  }>;
  height?: string;
};

const MapComponent = ({ center, zoom, markers = [], height = '400px' }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
    } else {
      mapInstanceRef.current.setView(center, zoom);
    }

    if (mapInstanceRef.current) {
      mapInstanceRef.current.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          mapInstanceRef.current?.removeLayer(layer);
        }
      });
    }

    markers.forEach(marker => {
      if (mapInstanceRef.current) {
        const mapMarker = L.marker(marker.position).addTo(mapInstanceRef.current);
        if (marker.popup) {
          mapMarker.bindPopup(marker.popup);
        }
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markers]);

  return <div 
    ref={mapRef} 
    className={`${height ? height : 'h-[400px]'}`} 
    style={{ width: '100%', position: 'relative', zIndex: 5 }} 
  />;
};

export default MapComponent;
