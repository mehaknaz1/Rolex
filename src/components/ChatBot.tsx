import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, HelpCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickQuestions = [
  "How do I send crypto safely?",
  "What is a blockchain?",
  "How to enable sandbox mode?",
  "What are gas fees?",
];

const botResponses: { [key: string]: string } = {
  "how do i send crypto safely": "Great question! 🛡️ Always double-check the recipient address, start with small amounts, and use our sandbox mode to practice first. Never share your private keys!",
  "what is a blockchain": "Think of blockchain as a digital ledger book that everyone can see but no one can cheat! 📚 It records all transactions across many computers, making it super secure.",
  "how to enable sandbox mode": "Easy! Just toggle the 'Practice Mode' switch in your dashboard. This gives you test coins to practice with - no real money at risk! 🎮",
  "what are gas fees": "Gas fees are like postage stamps for crypto transactions! 📮 They pay the network to process your transaction. Higher fees = faster processing.",
  default: "I'm here to help you learn crypto safely! 🚀 Try asking about wallet security, blockchain basics, or how to make your first transaction in sandbox mode.",
};

export function ChatBot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your crypto learning assistant! 🤖 Ask me anything about cryptocurrency, wallets, or trading. I'm here to help you become a crypto pro!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[text.toLowerCase()] || botResponses.default,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isExpanded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsExpanded(true)}
          className="h-14 w-14 rounded-full gradient-crypto shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-crypto"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      <Card className="gradient-card border-primary/20 shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Bot className="h-4 w-4 text-primary" />
              Crypto Learning Assistant
              <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                Online
              </Badge>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <ScrollArea className="h-64 w-full pr-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="p-1 rounded-full bg-primary/20">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <div className="p-1 rounded-full bg-secondary/20">
                      <User className="h-3 w-3 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-6 px-2"
                  onClick={() => sendMessage(question)}
                >
                  <HelpCircle className="h-2 w-2 mr-1" />
                  {question}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about crypto..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && inputValue.trim()) {
                    sendMessage(inputValue.trim());
                  }
                }}
                className="text-sm"
              />
              <Button
                size="sm"
                onClick={() => inputValue.trim() && sendMessage(inputValue.trim())}
                disabled={!inputValue.trim()}
                className="gradient-crypto"
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}