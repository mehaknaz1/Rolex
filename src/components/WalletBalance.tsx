import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, EyeOff, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface WalletBalanceProps {
  isSandboxMode: boolean;
}

export function WalletBalance({ isSandboxMode }: WalletBalanceProps) {
  const [showBalance, setShowBalance] = useState(true);
  const balance = isSandboxMode ? 1000.50 : 2847.32;
  const change = isSandboxMode ? "+5.2%" : "+12.7%";

  return (
    <Card className="gradient-card border-primary/20 crypto-glow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Coins className="h-4 w-4 text-primary" />
          Total Balance
          {isSandboxMode && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Sandbox
            </Badge>
          )}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowBalance(!showBalance)}
          className="h-6 w-6 text-muted-foreground hover:text-foreground"
        >
          {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary animate-slide-in-up">
          {showBalance ? `$${balance.toLocaleString()}` : "••••••"}
        </div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <TrendingUp className="h-3 w-3 text-accent" />
          <span className="text-accent font-medium">{change}</span>
          <span>vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}