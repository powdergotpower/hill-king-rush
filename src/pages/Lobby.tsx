import { Button } from "@/components/ui/button";
import Leaderboard from "@/components/game/Leaderboard";
import MapView from "@/components/game/MapView";
import { Play, Settings, LogOut, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">ROCK KING</h1>
              <p className="text-sm text-muted-foreground">Conquest Canyon</p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="tactical" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="danger" size="icon" onClick={() => navigate('/')}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left side - 3D Map Preview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 shadow-tactical">
              <div className="flex items-center gap-2 mb-4">
                <Map className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Map Preview</h2>
              </div>
              
              <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden border border-primary/10">
                <MapView showOverlay={true} />
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Map</p>
                  <p className="text-lg font-bold text-foreground">Conquest Canyon</p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Players</p>
                  <p className="text-lg font-bold text-foreground">8 (1 Human + 7 AI)</p>
                </div>
              </div>
            </div>

            {/* Start Match Button */}
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full h-16 text-xl"
              onClick={() => navigate('/game')}
            >
              <Play className="w-6 h-6" />
              START MATCH
            </Button>
          </div>

          {/* Right side - Leaderboard */}
          <div className="lg:col-span-1">
            <Leaderboard />
          </div>
        </div>

        {/* Game info */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
            <h3 className="font-bold text-primary mb-2">Objective</h3>
            <p className="text-sm text-muted-foreground">
              Control King's Hill in the center. Longest time on the hill wins!
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
            <h3 className="font-bold text-primary mb-2">Match Duration</h3>
            <p className="text-sm text-muted-foreground">
              5 minutes of intense vertical combat and strategic positioning.
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
            <h3 className="font-bold text-primary mb-2">Controls</h3>
            <p className="text-sm text-muted-foreground">
              Touch controls optimized for mobile. Jump, shoot, and dominate!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lobby;
