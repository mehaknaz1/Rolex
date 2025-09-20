import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Book, Shield, Coins } from "lucide-react";

const achievements = [
  {
    id: "first-transaction",
    title: "First Transaction",
    description: "Complete your first crypto transaction",
    icon: Coins,
    progress: 100,
    unlocked: true,
    tier: "bronze",
    points: 50,
  },
  {
    id: "security-master",
    title: "Security Master",
    description: "Complete all security tutorials",
    icon: Shield,
    progress: 75,
    unlocked: false,
    tier: "silver",
    points: 150,
  },
  {
    id: "crypto-scholar",
    title: "Crypto Scholar",
    description: "Complete 10 educational modules",
    icon: Book,
    progress: 60,
    unlocked: false,
    tier: "gold",
    points: 300,
  },
  {
    id: "trading-expert",
    title: "Trading Expert",
    description: "Successfully complete 50 transactions",
    icon: Target,
    progress: 20,
    unlocked: false,
    tier: "gold",
    points: 500,
  },
];

export function AchievementSystem() {
  const totalPoints = achievements
    .filter(a => a.unlocked)
    .reduce((sum, a) => sum + a.points, 0);

  return (
    <Card className="gradient-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Achievements
          <Badge variant="secondary" className="bg-primary/20 text-primary">
            {totalPoints} XP
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;
          const tierColor = {
            bronze: "text-achievement-bronze",
            silver: "text-achievement-silver",
            gold: "text-achievement-gold",
          }[achievement.tier];

          return (
            <div
              key={achievement.id}
              className={`p-3 rounded-lg border transition-all duration-300 ${
                achievement.unlocked
                  ? "border-primary/30 bg-primary/5 achievement-glow"
                  : "border-muted bg-muted/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <IconComponent className={`h-5 w-5 ${tierColor}`} />
                  <div>
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                {achievement.unlocked && (
                  <Star className="h-4 w-4 text-primary animate-pulse-crypto" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <Progress
                  value={achievement.progress}
                  className="flex-1 h-2"
                />
                <span className="text-xs text-muted-foreground">
                  {achievement.progress}%
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}