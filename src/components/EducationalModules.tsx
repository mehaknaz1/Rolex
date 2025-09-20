import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, BookOpen, Shield, TrendingUp, Coins, CheckCircle } from "lucide-react";

const modules = [
  {
    id: "crypto-basics",
    title: "Crypto Basics",
    description: "Learn what cryptocurrency is and how it works",
    icon: Coins,
    duration: "5 min",
    progress: 100,
    completed: true,
    reward: 25,
  },
  {
    id: "wallet-security",
    title: "Wallet Security",
    description: "Keep your crypto safe with best practices",
    icon: Shield,
    duration: "8 min",
    progress: 60,
    completed: false,
    reward: 50,
  },
  {
    id: "trading-basics",
    title: "Trading Fundamentals",
    description: "Understand buying, selling, and market trends",
    icon: TrendingUp,
    duration: "12 min",
    progress: 0,
    completed: false,
    reward: 75,
  },
  {
    id: "defi-intro",
    title: "DeFi Introduction",
    description: "Explore decentralized finance opportunities",
    icon: BookOpen,
    duration: "15 min",
    progress: 0,
    completed: false,
    reward: 100,
  },
];

export function EducationalModules() {
  const totalEarned = modules
    .filter(m => m.completed)
    .reduce((sum, m) => sum + m.reward, 0);

  return (
    <Card className="gradient-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Learn & Earn
          </div>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {totalEarned} coins earned
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {modules.map((module) => {
          const IconComponent = module.icon;
          
          return (
            <div
              key={module.id}
              className={`p-4 rounded-lg border transition-all duration-300 hover:border-primary/40 ${
                module.completed
                  ? "border-accent/30 bg-accent/5"
                  : "border-muted bg-muted/20"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${
                    module.completed 
                      ? "bg-accent/20 text-accent" 
                      : "bg-primary/20 text-primary"
                  }`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{module.title}</h4>
                      {module.completed && (
                        <CheckCircle className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {module.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{module.duration}</span>
                      <span>•</span>
                      <span className="text-accent font-medium">
                        +{module.reward} coins
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={module.completed ? "secondary" : "default"}
                  className={module.completed ? "" : "gradient-crypto"}
                  disabled={module.completed}
                >
                  {module.completed ? (
                    "Completed"
                  ) : (
                    <>
                      <PlayCircle className="h-3 w-3 mr-1" />
                      Start
                    </>
                  )}
                </Button>
              </div>
              
              {!module.completed && module.progress > 0 && (
                <div className="flex items-center gap-2">
                  <Progress value={module.progress} className="flex-1 h-2" />
                  <span className="text-xs text-muted-foreground">
                    {module.progress}%
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}