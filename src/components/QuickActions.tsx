import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Repeat, QrCode, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface QuickActionsProps {
  isSandboxMode: boolean;
}

export function QuickActions({ isSandboxMode }: QuickActionsProps) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const actions = [
    {
      id: "send",
      label: "Send",
      icon: ArrowUpRight,
      description: isSandboxMode ? "Practice sending crypto safely" : "Send crypto to others",
      color: "destructive",
    },
    {
      id: "receive",
      label: "Receive",
      icon: ArrowDownLeft,
      description: isSandboxMode ? "Get test coins to practice" : "Get crypto from others",
      color: "accent",
    },
    {
      id: "swap",
      label: "Swap",
      icon: Repeat,
      description: isSandboxMode ? "Practice exchanging coins" : "Exchange one crypto for another",
      color: "secondary",
    },
    {
      id: "scan",
      label: "Scan QR",
      icon: QrCode,
      description: "Scan QR code for quick transactions",
      color: "primary",
    },
  ];

  return (
    <Card className="gradient-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Quick Actions</span>
          {isSandboxMode && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Safe Mode
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const IconComponent = action.icon;
            
            return (
              <Button
                key={action.id}
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all duration-300 ${
                  selectedAction === action.id ? "border-primary bg-primary/10" : ""
                }`}
                onClick={() => setSelectedAction(action.id)}
              >
                <IconComponent className="h-6 w-6" />
                <span className="font-medium">{action.label}</span>
                <span className="text-xs text-muted-foreground text-center leading-tight">
                  {action.description}
                </span>
              </Button>
            );
          })}
        </div>
        
        {isSandboxMode && (
          <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <div className="flex items-start gap-2">
              <HelpCircle className="h-4 w-4 text-accent mt-0.5" />
              <div>
                <p className="text-sm font-medium text-accent">Practice Mode Active</p>
                <p className="text-xs text-muted-foreground">
                  All transactions use test coins. Perfect for learning without risk!
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}