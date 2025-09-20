import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle } from "lucide-react";

interface Transaction {
  id: string;
  type: "send" | "receive";
  amount: number;
  currency: string;
  address: string;
  timestamp: string;
  status: "completed" | "pending";
  isSandbox?: boolean;
}

interface TransactionHistoryProps {
  isSandboxMode: boolean;
}

export function TransactionHistory({ isSandboxMode }: TransactionHistoryProps) {
  const transactions: Transaction[] = isSandboxMode ? [
    {
      id: "1",
      type: "receive",
      amount: 0.5,
      currency: "TEST-BTC",
      address: "test1q...abc123",
      timestamp: "2 minutes ago",
      status: "completed",
      isSandbox: true,
    },
    {
      id: "2",
      type: "send",
      amount: 0.1,
      currency: "TEST-ETH",
      address: "test0x...def456",
      timestamp: "1 hour ago",
      status: "pending",
      isSandbox: true,
    },
  ] : [
    {
      id: "3",
      type: "receive",
      amount: 0.02,
      currency: "BTC",
      address: "bc1q...xyz789",
      timestamp: "5 hours ago",
      status: "completed",
    },
    {
      id: "4",
      type: "send",
      amount: 1.5,
      currency: "ETH",
      address: "0x...abc123",
      timestamp: "1 day ago",
      status: "completed",
    },
  ];

  return (
    <Card className="gradient-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Recent Transactions</span>
          {isSandboxMode && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Practice Mode
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {transactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No transactions yet</p>
            <p className="text-xs mt-1">
              {isSandboxMode 
                ? "Try making your first practice transaction!" 
                : "Your real transactions will appear here"
              }
            </p>
          </div>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-lg border border-muted bg-muted/20 hover:bg-muted/30 transition-colors animate-slide-in-up"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  tx.type === "send" 
                    ? "bg-destructive/20 text-destructive" 
                    : "bg-accent/20 text-accent"
                }`}>
                  {tx.type === "send" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownLeft className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">
                      {tx.type === "send" ? "Sent" : "Received"}
                    </span>
                    {tx.status === "pending" ? (
                      <Clock className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <CheckCircle className="h-3 w-3 text-accent" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {tx.address} • {tx.timestamp}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${
                  tx.type === "send" ? "text-destructive" : "text-accent"
                }`}>
                  {tx.type === "send" ? "-" : "+"}{tx.amount} {tx.currency}
                </div>
                <Badge 
                  variant={tx.status === "completed" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  {tx.status}
                </Badge>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}