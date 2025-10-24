import { Button } from "@/components/ui/button";
import { Crown, Target, Trophy, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-lg rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-primary rounded-lg -rotate-12 animate-pulse" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-primary rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-8 animate-slide-up">
            {/* Logo/Title */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Crown className="w-16 h-16 text-primary animate-pulse-glow" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
                ROCK <span className="text-primary">KING</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Conquest Canyon
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              Fast-paced vertical combat. Control the hill. Dominate the battlefield.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-xl px-12 h-14"
                onClick={() => navigate('/lobby')}
              >
                <Target className="w-6 h-6" />
                ENTER LOBBY
              </Button>
              
              <Button 
                variant="tactical" 
                size="lg" 
                className="text-xl px-12 h-14"
                onClick={() => {
                  // Google sign-in would be implemented here with Lovable Cloud
                  navigate('/lobby');
                }}
              >
                <Users className="w-6 h-6" />
                SIGN IN WITH GOOGLE
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">King of the Hill</h3>
                <p className="text-sm text-muted-foreground">
                  Control the central rock formation to win. Strategy meets action.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Vertical Combat</h3>
                <p className="text-sm text-muted-foreground">
                  Master the high ground. Jump between rocks and buildings.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">8 Player Battles</h3>
                <p className="text-sm text-muted-foreground">
                  Face 7 AI opponents in fast-paced 5-minute matches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Mobile-first 3D shooter • Optimized for touch controls
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
