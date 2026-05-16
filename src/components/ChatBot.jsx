import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Welcome to PUTZEN Premium Auto Care. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Process logic based on step
    setTimeout(() => {
      let botResponse = '';
      if (step === 0) {
        botResponse = 'Thank you for reaching out! Please contact us directly to discuss your query and get a quote.\n\n📞 +91 9901995353\n📞 +91 7975843550\n✉️ putzenautocare@gmail.com\n\nOur team will be happy to assist you!';
        setStep(1);
      } else {
        botResponse = 'Please use the phone numbers or email provided above to contact us directly. Thank you!';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600); // simulate typing delay
  };

  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111111] border border-[#D4AF37]/30 rounded-lg shadow-2xl w-[calc(100vw-32px)] sm:w-[360px] h-[450px] flex flex-col overflow-hidden"
            style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.8)' }}
          >
            {/* Header */}
            <div className="bg-[#0A0A0A] border-b border-[#D4AF37]/30 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <h3 className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase">Putzen Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#F5F5F5]/60 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-md px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-[#D4AF37] text-[#0A0A0A] rounded-br-none font-medium'
                        : 'bg-[#1A1A1A] text-[#F5F5F5]/90 border border-[#D4AF37]/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSend}
              className="bg-[#0A0A0A] border-t border-[#D4AF37]/30 p-3 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#111111] border border-[#D4AF37]/20 rounded-md px-3 py-2 text-sm text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-[#D4AF37] text-[#0A0A0A] w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#b5952f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-[#111111] border-2 border-[#D4AF37] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.6, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us"
      >
        {isOpen ? (
          <FaTimes className="text-[#D4AF37] text-2xl" />
        ) : (
          <FaCommentDots className="text-[#D4AF37] text-2xl" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
