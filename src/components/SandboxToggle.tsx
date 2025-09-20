import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SandboxToggleProps {
  isSandboxMode: boolean;
  onToggle: (enabled: boolean) => void;
}

export function SandboxToggle({ isSandboxMode, onToggle }: SandboxToggleProps) {
  return (
    <Card className={`border-2 transition-all duration-300 ${
      isSandboxMode 
        ? 'border-accent bg-accent/5 crypto-glow' 
        : 'border-muted bg-card'
    }`}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isSandboxMode ? (
              <Shield className="h-5 w-5 text-accent" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-muted-foreground" />
            )}
            <div>
              <Label htmlFor="sandbox-mode" className="text-base font-medium">
                Practice Mode
              </Label>
              <p className="text-sm text-muted-foreground">
                {isSandboxMode 
                  ? "Safe environment with test coins" 
                  : "Real transactions with actual crypto"
                }
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isSandboxMode && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground animate-pulse-crypto">
                SAFE
              </Badge>
            )}
            <Switch
              id="sandbox-mode"
              checked={isSandboxMode}
              onCheckedChange={onToggle}
              className="data-[state=checked]:bg-accent"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}