import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: trimmed,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('langflow-proxy', {
        body: { input_value: trimmed },
      });

      if (error) throw error;

      const botText =
        data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
        data?.outputs?.[0]?.outputs?.[0]?.messages?.[0]?.message ||
        "Desculpe, não consegui processar sua mensagem. Tente novamente.";

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Desculpe, houve um erro de conexão. Tente novamente em instantes.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-[9999] sm:bottom-6 sm:left-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-[calc(100vw-40px)] max-w-[380px] sm:w-[380px] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              maxHeight: "min(70vh, 520px)",
              background: "hsl(30 25% 96%)",
              border: "1px solid hsl(30 15% 88%)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(20 35% 12%), hsl(25 40% 30%))",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    Serenatto Assistente
                  </p>
                  <p className="text-white/60 text-[11px]">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
              style={{ minHeight: 0 }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "rounded-br-md text-white"
                        : "rounded-bl-md"
                    }`}
                    style={
                      msg.sender === "user"
                        ? { background: "hsl(25 60% 25%)" }
                        : {
                            background: "hsl(30 20% 92%)",
                            color: "hsl(20 20% 15%)",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-2"
                    style={{ background: "hsl(30 20% 92%)" }}
                  >
                    <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: "hsl(25 40% 30%)" }} />
                    <span className="text-xs" style={{ color: "hsl(20 10% 50%)" }}>
                      Digitando...
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="shrink-0 px-3 py-3 flex items-center gap-2"
              style={{ borderTop: "1px solid hsl(30 15% 88%)" }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3.5 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  background: "hsl(30 20% 98%)",
                  border: "1px solid hsl(30 15% 88%)",
                  color: "hsl(20 20% 15%)",
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors disabled:opacity-40"
                style={{ background: "hsl(25 60% 25%)" }}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
        style={{
          background: isOpen
            ? "hsl(20 35% 12%)"
            : "linear-gradient(135deg, hsl(25 60% 25%), hsl(20 35% 12%))",
          boxShadow: "0 4px 20px hsl(20 35% 12% / 0.3)",
        }}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 text-white" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
