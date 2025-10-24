import { Crosshair, Heart, Timer, Trophy } from "lucide-react";

const GameHUD = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-background/80 to-transparent">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Player stats */}
          <div className="flex gap-6">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
              <Heart className="w-5 h-5 text-destructive" fill="currentColor" />
              <span className="font-mono text-lg font-bold">100</span>
            </div>
            
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
              <Timer className="w-5 h-5 text-primary" />
              <span className="font-mono text-lg font-bold">0:45</span>
            </div>
          </div>
          
          {/* Match timer */}
          <div className="bg-card/80 backdrop-blur-sm px-6 py-2 rounded-lg border border-primary/20">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">MATCH TIME</p>
              <p className="font-mono text-2xl font-bold text-primary">4:15</p>
            </div>
          </div>
          
          {/* Score */}
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-mono text-lg font-bold">1st</span>
          </div>
        </div>
      </div>
      
      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Crosshair className="w-8 h-8 text-primary/60" strokeWidth={3} />
      </div>
      
      {/* Bottom center - objective indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="bg-accent/80 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-accent shadow-glow animate-pulse-glow">
          <p className="text-sm font-bold text-accent-foreground text-center">
            ⚡ KING'S HILL ACTIVE ⚡
          </p>
        </div>
      </div>
      
      {/* Bottom right - weapon info */}
      <div className="absolute bottom-6 right-6">
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">WEAPON</p>
            <p className="text-xl font-bold text-foreground">M4A1 RIFLE</p>
            <div className="flex items-center justify-end gap-2 mt-2">
              <span className="font-mono text-2xl font-bold text-primary">30</span>
              <span className="text-muted-foreground">/</span>
              <span className="font-mono text-lg text-muted-foreground">120</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom left - mini map placeholder */}
      <div className="absolute bottom-6 left-6">
        <div className="w-40 h-40 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-2">
          <div className="w-full h-full bg-secondary/50 rounded relative">
            {/* Simplified mini-map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
            <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-destructive rounded-full" />
          </div>
          <p className="text-xs text-center text-muted-foreground mt-1">CONQUEST CANYON</p>
        </div>
      </div>
    </div>
  );
};

export default GameHUD;
