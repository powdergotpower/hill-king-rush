import { Card } from "@/components/ui/card";
import { Trophy, Timer } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  time: string;
  isCurrentUser?: boolean;
}

const mockData: LeaderboardEntry[] = [
  { rank: 1, name: "DesertStorm", time: "4:32", isCurrentUser: false },
  { rank: 2, name: "RockKing_Pro", time: "4:18", isCurrentUser: false },
  { rank: 3, name: "SandViper", time: "3:55", isCurrentUser: false },
  { rank: 4, name: "TacticalAce", time: "3:42", isCurrentUser: false },
  { rank: 5, name: "You", time: "0:00", isCurrentUser: true },
];

const Leaderboard = () => {
  return (
    <Card className="p-6 bg-gradient-card border-primary/20">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Top Players</h2>
      </div>
      
      <div className="space-y-3">
        {mockData.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              entry.isCurrentUser
                ? 'bg-primary/20 border border-primary/40'
                : 'bg-secondary/50 hover:bg-secondary/70'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`text-2xl font-bold ${
                entry.rank === 1 ? 'text-primary' : 
                entry.rank === 2 ? 'text-muted-foreground' : 
                entry.rank === 3 ? 'text-primary/60' : 
                'text-muted-foreground'
              }`}>
                #{entry.rank}
              </span>
              <span className={`font-semibold ${
                entry.isCurrentUser ? 'text-primary' : 'text-foreground'
              }`}>
                {entry.name}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-primary" />
              <span className="font-mono text-lg text-foreground">{entry.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-primary/10">
        <p className="text-sm text-muted-foreground text-center">
          Total time spent on King's Hill wins the match
        </p>
      </div>
    </Card>
  );
};

export default Leaderboard;
