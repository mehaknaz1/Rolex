import { useState } from "react";
import { WalletBalance } from "./WalletBalance";
import { SandboxToggle } from "./SandboxToggle";
import { AchievementSystem } from "./AchievementSystem";
import { TransactionHistory } from "./TransactionHistory";
import { EducationalModules } from "./EducationalModules";
import { QuickActions } from "./QuickActions";
import { ChatBot } from "./ChatBot";
import { ThemeToggle } from "./ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, Users, Globe } from "lucide-react";

export function CryptoDashboard() {
  const [isSandboxMode, setIsSandboxMode] = useState(true);

  const stats = [
    {
      title: "Portfolio Value",
      value: isSandboxMode ? "$1,000.50" : "$2,847.32",
      change: isSandboxMode ? "+5.2%" : "+12.7%",
      icon: Wallet,
      positive: true,
    },
    {
      title: "Learning Progress",
      value: "3/10",
      change: "Modules Completed",
      icon: TrendingUp,
      positive: true,
    },
    {
      title: "Community Rank",
      value: "#1,247",
      change: "out of 50K learners",
      icon: Users,
      positive: true,
    },
    {
      title: "Network Status",
      value: "Online",
      change: "All systems operational",
      icon: Globe,
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-crypto">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-crypto bg-clip-text text-transparent">
                  CryptoLearn Wallet
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your beginner-friendly crypto companion
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                {isSandboxMode ? "Practice Mode" : "Live Trading"}
              </Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Sandbox Toggle */}
          <div className="animate-slide-in-up">
            <SandboxToggle
              isSandboxMode={isSandboxMode}
              onToggle={setIsSandboxMode}
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-in-up">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.title} className="gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <IconComponent className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <WalletBalance isSandboxMode={isSandboxMode} />
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                <QuickActions isSandboxMode={isSandboxMode} />
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
                <AchievementSystem />
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <div className="animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
                <TransactionHistory isSandboxMode={isSandboxMode} />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
                <EducationalModules />
              </div>
            </div>
          </div>

          {/* Welcome Message for New Users */}
          {isSandboxMode && (
            <Card className="gradient-card border-accent/30 bg-accent/5 animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-accent/20 animate-float">
                      <Wallet className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent">
                      Welcome to Practice Mode! 🎉
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      You're in a safe learning environment with test coins. Practice sending, receiving, 
                      and trading without any real financial risk. Complete educational modules to earn 
                      points and unlock achievements!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Floating Chat Bot */}
      <ChatBot />
    </div>
  );
}