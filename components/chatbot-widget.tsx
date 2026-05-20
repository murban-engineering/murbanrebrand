"use client";

import { useMemo, useState } from "react";
import { Bot, Send, Sparkles, User, X } from "lucide-react";

type ChatRole = "bot" | "user";

type ChatMessage = {
  role: ChatRole;
  text: string;
};

const quickPrompts = [
  "What services do you provide?",
  "How can I request a quote?",
  "Where do you operate?",
  "Which countries do you work in?",
  "Tell me about NDT capabilities.",
  "What industries do you support?",
];

const answers: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ["service", "services", "offer", "provide"],
    response:
      "Murban supports inspection and engineering workflows including NDT inspection, pressure vessel and storage tank inspection, ultrasonic testing, magnetic particle testing, welding/fabrication support, and related industrial QA/QC services. If you share your asset type and project timeline, I can guide you to the right service flow.",
  },
  {
    keywords: ["quote", "pricing", "price", "cost", "proposal"],
    response:
      "To request a quote, prepare: (1) site/location, (2) asset type and dimensions, (3) required inspection standard/code, (4) timeline, and (5) any safety/access constraints. Then submit through the site contact section and include a project brief. Murban can usually respond faster when scope details are complete.",
  },
  {
    keywords: ["where", "location", "operate", "region", "africa", "middle east"],
    response:
      "Murban operates across multiple African markets, including Kenya, Uganda, Tanzania, Rwanda, Ethiopia, South Sudan, DR Congo, Zambia, Malawi, Mozambique, Zimbabwe, Botswana, Namibia, South Africa, Nigeria, Ghana, Ivory Coast, Senegal, and Cameroon. If you share your city and project scope, I can help draft the fastest inquiry for mobilization and lead times.",
  },
  {
    keywords: ["ndt", "ultrasonic", "ut", "mpi", "mfl", "radiography"],
    response:
      "NDT capability typically includes UT thickness/flaw mapping, magnetic particle inspection, visual testing, and specialized scanning workflows. Best practice is to define the acceptance code (ASME/API/ISO etc.), coverage percentage, and report format before kickoff so data quality and turnaround are aligned.",
  },
  {
    keywords: ["industry", "industries", "sector", "oil", "gas", "marine", "power"],
    response:
      "Common sectors include oil & gas, power generation, terminals/storage, marine/shipping, fabrication, and construction. If you share your sector and the asset risk profile, I can suggest a phased inspection strategy (baseline, in-service monitoring, and corrective follow-up).",
  },
  {
    keywords: ["hello", "hi", "hey"],
    response:
      "Hi! I’m the Murban website assistant. I can help you explore services, prepare a quote request, or identify the right inspection workflow for your project.",
  },
];

const fallbackResponse =
  "I can help with service details, quote preparation, industries, and inspection planning. Try asking about NDT, pressure vessels, tanks, welding QA/QC, or how to submit a complete inquiry.";

function getBotReply(input: string): string {
  const normalized = input.toLowerCase();
  const match = answers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  return match?.response ?? fallbackResponse;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Welcome to Murban 👋 I can help you quickly navigate services, prepare a quote request, and clarify inspection options.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = { role: "user", text: trimmed };
    const botMessage: ChatMessage = { role: "bot", text: getBotReply(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-[22rem] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold">Murban Assistant</p>
            </div>
            <button
              aria-label="Exit chatbot"
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Exit
              <X className="h-3 w-3" />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <div
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                key={`${message.role}-${index}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <div className="mb-1 flex items-center gap-1 text-[11px] opacity-75">
                    {message.role === "user" ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3" />
                    )}
                    <span>{message.role === "user" ? "You" : "Assistant"}</span>
                  </div>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:bg-muted"
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  type="button"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <input
                className="h-9 flex-1 rounded-md border border-border bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about services, quotes, industries..."
                value={input}
              />
              <button
                aria-label="Send message"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!canSend}
                type="submit"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-xl transition hover:opacity-90"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <Bot className="h-4 w-4" />
          Chat with Murban
        </button>
      )}
    </div>
  );
}
