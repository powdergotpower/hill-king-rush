import { useState } from 'react';
import conquestCanyonMap from '@/assets/conquest-canyon-map.jpg';

interface MapViewProps {
  showOverlay?: boolean;
}

const MapView = ({ showOverlay = true }: MapViewProps) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-secondary/50">
      {/* Actual map image */}
      <img
        src={conquestCanyonMap}
        alt="Conquest Canyon Map"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          mapLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setMapLoaded(true)}
      />
      
      {/* Loading state */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
      
      {/* Tactical overlay */}
      {showOverlay && mapLoaded && (
        <div className="absolute inset-0 pointer-events-none">
          {/* King's Hill indicator - center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-accent/30 border-2 border-accent animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent/50 border-2 border-accent animate-pulse" 
                   style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-bold text-accent">KING'S HILL</span>
              </div>
            </div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Compass */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">N</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
