import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Shield, 
  Users, 
  Menu, 
  X, 
  ChevronRight, 
  Lock, 
  Send, 
  CheckCircle, 
  BookOpen, 
  AlertTriangle,
  Lightbulb,
  Sparkles,
  RefreshCw,
  Copy
} from 'lucide-react';
import logoImg from './assets/conciencIA2.svg';

const TEAM_MEMBERS = [
  { name: "Daniel Vargas", role: "CEO", icon: "👑" },
  { name: "Hugo Saldivar", role: "Director de Tecnología", icon: "💻" },
  { name: "Angel Lopez", role: "Director de Educación y Contenido", icon: "📚" },
  { name: "Alejandro García", role: "Director de Comunicación y Mkt", icon: "📢" },
  { name: "Melanie López", role: "Alianzas y Relaciones", icon: "🤝" },
  { name: "Diego de la Mora", role: "Director Admin. y Financiero", icon: "💰" }
];

const VALUES = [
  { title: "Ética y Transparencia", desc: "Actuamos con integridad en cada proceso." },
  { title: "Responsabilidad Social", desc: "Impulsamos iniciativas para el bienestar colectivo." },
  { title: "Innovación con Propósito", desc: "Tecnología avanzada con enfoque humano." }
];


const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Quiénes Somos', id: 'about' },
    { name: 'Servicios', id: 'services' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img src={logoImg} alt="Logo ConciencIA" className="h-16 w-auto mr-2" /> 
            <span className="font-bold text-xl tracking-wider">concienc<span className="text-cyan-400">IA</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === link.id ? 'bg-slate-800 text-cyan-400' : 'hover:bg-slate-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Cerrar Sesión
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPage('login')}
                  className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
                >
                  <Lock className="w-4 h-4 mr-2" /> Acceso Clientes
                </button>
              )}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-slate-800 p-2 rounded-md text-gray-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setCurrentPage(link.id); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
              >
                {link.name}
              </button>
            ))}
             <button
                onClick={() => { setCurrentPage('login'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-cyan-900 text-cyan-100"
              >
                Acceso Plataforma
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = ({ setPage }) => (
  <div className="relative bg-slate-900 pt-20 pb-16 overflow-hidden h-screen flex items-center">
    <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500 rounded-full blur-3xl filter mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full blur-3xl filter mix-blend-multiply animate-blob animation-delay-2000"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Inteligencia Artificial <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Ética y Transparente
          </span>
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-lg">
          Promovemos el uso responsable de la IA mediante detección avanzada y formación humana. Evita sesgos, detecta plagio y educa a tu organización.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => setPage('about')} className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            Conocer más
          </button>
          <button onClick={() => setPage('login')} className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-slate-900 transition">
            Probar Herramienta
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md transform rotate-2 hover:rotate-0 transition duration-500">
            <div className="flex items-center mb-4 border-b border-slate-600 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-3">
                <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-5/6 animate-pulse"></div>
                <div className="mt-4 p-3 bg-cyan-900/30 border border-cyan-500/30 rounded text-cyan-300 text-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2"/> Análisis de Sesgo completado.
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900">Nuestra Esencia</h2>
        <p className="mt-4 text-xl text-slate-500">Más que software, somos conciencia digital.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-cyan-500 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center"><Lightbulb className="mr-2 text-cyan-600"/> Misión</h3>
            <p className="text-slate-600">
                Promover una cultura de uso responsable de la inteligencia artificial mediante soluciones tecnológicas de detección y programas formativos que impulsen la conciencia, la ética y la transparencia.
            </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-purple-500 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center"><Users className="mr-2 text-purple-600"/> Visión</h3>
            <p className="text-slate-600">
                Ser referentes en Latinoamérica en la detección y educación sobre IA, integrando tecnología y formación humana para un futuro digital ético.
            </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center text-slate-900 mb-10">Nuestro Equipo</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              {member.icon}
            </div>
            <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
            <p className="text-cyan-600 font-medium text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ServicesSection = () => (
    <div className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-slate-500">Soluciones integrales para la era de la IA.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Detección de IA y Sesgos</h3>
                <p className="text-slate-600 mb-4">
                    Software especializado basado en redes neuronales para detectar contenido sintético. 
                    Priorizamos la "Explicabilidad" (Explainable AI) para que entiendas por qué se detectó un sesgo.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Auditoría de textos</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> API de respuesta rápida (-500ms)</li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Formación y Capacitación</h3>
                <p className="text-slate-600 mb-4">
                    Programas de certificación para facilitadores. No solo entregamos software, educamos a tu personal 
                    para el uso ético y productivo de las herramientas generativas.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Talleres prácticos</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Certificación de ética en IA</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
);

const ContactSection = () => (
    <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold">Contáctanos</h2>
                <p className="mt-4 text-slate-400">¿Listo para blindar tu institución contra la desinformación?</p>
            </div>
            
            <form className="space-y-6 bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
                        <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Institución</label>
                        <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500" placeholder="Empresa o Universidad" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Correo Electrónico</label>
                    <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500" placeholder="ejemplo@correo.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
                    <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button type="button" onClick={() => alert("Mensaje enviado (Simulado)")} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-3 rounded-lg font-bold text-white transition transform hover:scale-105">
                    Enviar Mensaje
                </button>
            </form>

            <div className="mt-10 text-center text-slate-500 text-sm">
                <p>📍 Zapopan, Jalisco, México</p>
                <p>📧 contacto@conciencia.mx</p>
            </div>
        </div>
    </div>
);

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onLogin();
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-center">
                    <img src={logoImg} alt="Logo ConciencIA" className="w-12 h-12 text-white mx-auto mb-2" />
                    <h2 className="text-2xl font-bold text-white">Acceso conciencIA</h2>
                    <p className="text-cyan-100 text-sm">Portal de Detección de Sesgos</p>
                </div>
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Usuario / Correo</label>
                            <input 
                                type="text" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input 
                                type="password" 
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"/>
                            <label className="ml-2 block text-sm text-gray-900">Recordarme</label>
                        </div>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none transition"
                        >
                            {loading ? "Verificando..." : "Ingresar"}
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            Conciencia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AIDashboard = () => {
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([
        { role: 'system', text: 'Bienvenido al sistema ConciencIA. Ingresa un texto para analizar posibles sesgos, falacias o contenido generado artificialmente usando nuestra IA ✨.' }
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const [lastUserText, setLastUserText] = useState("");

    const handleSend = async (customText = null) => {
        const textToSend = customText || prompt;
        if (!textToSend.trim()) return;

        const newMessages = [...messages, { role: 'user', text: textToSend }];
        setMessages(newMessages);
        setPrompt("");
        setLastUserText(textToSend);
        setIsThinking(true);

        setTimeout(() => {
            const mockResponse = `[ANÁLISIS ÉTICO COMPLETADO]
    
    🧠 **Nivel de Sesgo Detectado:** MEDIO
    🔍 **Análisis:** El texto proporcionado contiene generalizaciones que podrían interpretarse como excluyentes hacia ciertos grupos demográficos. Se detectan términos que asumen roles de género tradicionales.
    💡 **Recomendación:** Se sugiere neutralizar el lenguaje (ej: usar "personal de enfermería" en lugar de "enfermeras") para abarcar una audiencia más diversa y profesional.`;
            
            setMessages(prev => [...prev, { role: 'ai', text: mockResponse }]);
            setIsThinking(false);
        }, 2000);
    };

    const handleRewrite = async () => {
        if (!lastUserText) return;
        setIsThinking(true);
        
        setMessages(prev => [...prev, { role: 'user', text: "✨ Generar versión ética mejorada..." }]);

        setTimeout(() => {
            const mockRewrite = `✨ **Versión Mejorada:**\n\n"El personal de enfermería desempeña una labor fundamental en el cuidado de la salud, requiriendo habilidades técnicas y empatía sin distinción de género."\n\n(Texto ajustado para neutralidad y tono profesional)`;
            setMessages(prev => [...prev, { role: 'ai', text: mockRewrite }]);
            setIsThinking(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col">
                <div className="mb-6 flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                            Panel de Detección <Sparkles className="w-5 h-5 text-yellow-500 ml-2 animate-pulse" />
                        </h2>
                        <p className="text-slate-500">Motor de Inferencia v2.5 (Modo Prototipo)</p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-cyan-600 text-white rounded-br-none' 
                                    : msg.role === 'system' 
                                        ? 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                                        : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                                }`}>
                                    {msg.role === 'ai' && (
                                        <div className="flex items-center mb-2 text-cyan-600 font-bold text-xs uppercase tracking-wide">
                                            <img src={logoImg} alt="Logo ConciencIA" className="w-4 h-4 mr-1" /> Respuesta ConciencIA
                                        </div>
                                    )}
                                    <div className="whitespace-pre-line text-sm leading-relaxed prose prose-sm max-w-none">
                                        {msg.text}
                                    </div>
                                    
                                    {/* Botón de acción contextual */}
                                    {msg.role === 'ai' && idx === messages.length - 1 && lastUserText && !msg.text.includes("Versión Mejorada") && (
                                        <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                                            <button 
                                                onClick={handleRewrite}
                                                className="flex items-center text-xs font-bold text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-1.5 rounded-full transition border border-purple-200 bg-purple-50/50"
                                            >
                                                <Sparkles className="w-3 h-3 mr-1.5" /> Mejorar Éticamente ✨
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isThinking && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
                                    <span className="text-xs text-slate-400 ml-2">Analizando datos...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-100">
                        <div className="flex space-x-2">
                            <input 
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Pega aquí el texto a analizar..."
                                className="flex-1 bg-slate-100 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            />
                            <button 
                                onClick={() => handleSend()}
                                className="bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-xl transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                                disabled={isThinking || !prompt}
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="mt-2 text-center">
                             <p className="text-[10px] text-slate-400">Powered by Neural Engine v2.5 • Privacidad Garantizada</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderPage = () => {
    if (currentPage === 'login') {
        return <LoginPage onLogin={() => { setIsAuthenticated(true); setCurrentPage('dashboard'); }} />;
    }

    if (currentPage === 'dashboard') {
        if (!isAuthenticated) return setCurrentPage('login');
        return <AIDashboard />;
    }

    return (
        <>
            {currentPage === 'home' && <HeroSection setPage={setCurrentPage} />}
            {currentPage === 'about' && <AboutSection />}
            {currentPage === 'services' && <ServicesSection />}
            {currentPage === 'contact' && <ContactSection />}
        </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {currentPage !== 'login' && (
        <Navbar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            isLoggedIn={isAuthenticated}
            logout={() => { setIsAuthenticated(false); setCurrentPage('home'); }}
        />
      )}
      
      <main>
        {renderPage()}
      </main>

      {}
      {currentPage !== 'login' && currentPage !== 'dashboard' && (
        <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
            <p>&copy; 2025 ConciencIA. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">Desarrollado para Prototipo v0.1</p>
        </footer>
      )}
    </div>
  );
}