import React, { useEffect, useRef, useState } from 'react';
import { Bot } from 'lucide-react';
import './Chatbot.css';

interface Message {
    role: string;
    content: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    
    const chatMessagesRef = useRef<HTMLDivElement>(null);
    const chatInputRef = useRef<HTMLTextAreaElement>(null);
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    const scrollToBottom = (): void => {
        setTimeout(() => {
            if (chatMessagesRef.current) {
                chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
            }
        }, 100);
    };

    const addMessage = (content: string, sender: string, isError = false): void => {
        const newMessage: Message = { role: sender, content };
        setMessages(prev => [...prev, newMessage]);
        scrollToBottom();
    };

    const autoResizeTextarea = (): void => {
        if (chatInputRef.current) {
            chatInputRef.current.style.height = 'auto';
            chatInputRef.current.style.height = Math.min(chatInputRef.current.scrollHeight, 100) + 'px';
        }
    };

    const callGroqAPI = async (userMessage: string): Promise<string> => {
        const updatedMessages = [...messages, { role: 'user', content: userMessage }];
        
        try {
            const requestBody = {
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful AI assistant for ZeroKost, a company that builds agentic AI systems for businesses. You should be knowledgeable about AI services, automation, machine learning, and business solutions. Provide concise, accurate, and friendly responses. Always be helpful and professional. If users ask about services, mention our expertise in AI consulting, automation, and custom AI solutions.'
                    },
                    ...updatedMessages
                ],
                max_tokens: 1000,
                temperature: 0.7,
                stream: false
            };

            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                let errorMessage: string;
                const responseText = await response.text();
                try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData.error?.message || `HTTP ${response.status}`;
                } catch {
                    errorMessage = `HTTP ${response.status}: ${responseText}`;
                }
                throw new Error(errorMessage);
            }

            const data = await response.json();
           
            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                throw new Error('Invalid response format from API');
            }
           
            const botMessage = data.choices[0].message.content;
            setMessages(prev => [...prev, { role: 'assistant', content: botMessage }]);
           
            return botMessage;
        } catch (error: any) {
            console.error('Groq API Error Details:', error);
           
            if (error.message.includes('401') || error.message.includes('unauthorized')) {
                throw new Error('Invalid API key. Please check your Groq API key.');
            } else if (error.message.includes('429')) {
                throw new Error('Rate limit exceeded. Please try again in a moment.');
            } else if (error.message.includes('500')) {
                throw new Error('Server error. Please try again later.');
            }
           
            throw error;
        }
    };

    const sendMessage = async (): Promise<void> => {
        const message = inputValue.trim().toLowerCase();
        if (!message || isTyping) return;

        const pageMappings: { [key: string]: string } = {
            "portfolio": "/portfolio",
            "about": "/about",
            "blogs": "/blogs",
            "careers": "/careers",
            "contact": "/contact",
            "learn": "/learn"
        };

        if (pageMappings[message]) {
            window.location.href = pageMappings[message];
            return;
        }

        console.log('Sending message:', message);
        addMessage(inputValue.trim(), 'user');
        setInputValue('');
        autoResizeTextarea();
        setIsTyping(true);

        try {
            const response = await callGroqAPI(message);
                addMessage(response, 'assistant');
        } catch (error: any) {
            console.error('Error calling Groq API:', error);
            addMessage(`Error: ${error.message}`, 'assistant', true);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInputValue(e.target.value);
        autoResizeTextarea();
    };

    const toggleChat = (): void => {
        setIsOpen(!isOpen);
        if (!isOpen && messages.length === 0) {
            addMessage('👋 Hello! I\'m your AI assistant powered by ZeroKost. I\'m here to help you with any questions about our AI services, solutions, or company. You can also type simple commands like "portfolio", "about", "careers", or "contact" to navigate quickly. How can I assist you today?', 'assistant');
        }
        setTimeout(() => chatInputRef.current?.focus(), 500);
    };

    const handleQuickAction = (action: string): void => {
        setInputValue(action);
        setTimeout(() => {
            sendMessage();
        }, 100);
    };

    useEffect(() => {
        console.log('Chatbot component mounted successfully!');
    }, []);

    return (
        <div className="chatbot-container">
            <button 
                className="chat-button" 
                onClick={toggleChat} 
                style={{ display: isOpen ? 'none' : 'flex' }}
                aria-label="Open chat"
            >
                <Bot className="chat-icon" />
            </button>

            <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-title"><Bot className="inline-icon" /> AI Assistant</div>
                    <button 
                        className="close-btn" 
                        onClick={() => setIsOpen(false)}
                        aria-label="Close chat"
                    >
                        ×
                    </button>
                </div>

                <div className="chat-messages" ref={chatMessagesRef}>
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.role}-message`}>
                            {message.content}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                </div>
                
                <div className="quick-actions">
                    <button 
                        className="quick-action-btn" 
                        onClick={() => handleQuickAction('portfolio')}
                    >
                        Portfolio
                    </button>
                    <button 
                        className="quick-action-btn" 
                        onClick={() => handleQuickAction('about')}
                    >
                        About Us
                    </button>
                    <button 
                        className="quick-action-btn" 
                        onClick={() => handleQuickAction('careers')}
                    >
                        Careers
                    </button>
                    <button 
                        className="quick-action-btn" 
                        onClick={() => handleQuickAction('contact')}
                    >
                        Contact
                    </button>
                </div>

                <div className="chat-input-container">
                    <div className="chat-input-wrapper">
                        <textarea 
                            ref={chatInputRef}
                            className="chat-input" 
                            placeholder="Type your message..." 
                            rows={1}
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            disabled={isTyping}
                        />
                        <button 
                            className="send-btn" 
                            onClick={sendMessage}
                            disabled={isTyping}
                            aria-label="Send message"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;