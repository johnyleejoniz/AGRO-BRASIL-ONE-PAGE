import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Leaf, Factory, ShieldCheck, MapPin, Mail, Phone, MessageCircle, ArrowRight, Droplet, Truck } from 'lucide-react';

// Imagem de fundo principal (Hero)
const HERO_BG_IMAGE_URL = "https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/imagems%20AGRO%20BRASIL/hero%20image.png";

function AnimatedCounter({ value, prefix = "", suffix = "", format = false }: { value: number, prefix?: string, suffix?: string, format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.round(v));
        }
      });
      return controls.stop;
    }
  }, [isInView, value]);

  const formatted = format ? displayValue.toLocaleString('pt-BR') : displayValue;

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-texture">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-brand-green" />
            <span className="font-bold text-2xl text-brand-navy tracking-tight">AGRO BRASIL</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <a href="#sobre" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Sobre Nós</a>
              <a href="#diferenciais" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Diferenciais</a>
              <a href="#mix" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Nosso Mix</a>
              <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Contato</a>
            </nav>
            <a 
              href="https://wa.me/5575999002008" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white text-sm font-medium rounded-full hover:bg-brand-green/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Solicitar Orçamento</span>
              <span className="sm:hidden">Orçamento</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-40 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG_IMAGE_URL})` }}
        >
          {/* Overlay de Legibilidade */}
          <div className="absolute inset-0 bg-brand-navy/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 to-brand-navy/80"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Glassmorphism Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto p-8 md:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Sua lavoura merece a força e a tecnologia da Agro Brasil.
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                Indústria especializada em mangueiras cegas de alta durabilidade. Tecnologia verde, resistência funcional e preço de fábrica.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/5575999002008"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-green rounded-full hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/40 hover:-translate-y-0.5"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Solicitar Orçamento
                </a>
                <a 
                  href="#mix"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
                >
                  Conhecer nosso Mix
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us */}
        <section id="sobre" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Sobre a Agro Brasil</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Mais que mangueiras, entregamos confiança no campo. Na Agro Brasil, tecnologia de ponta se une à responsabilidade ambiental com produtos 100% sustentáveis e aditivos Anti-UV.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-brand-green/20 shadow-sm">
                  <p className="text-xl font-medium text-brand-green italic">
                    "Mais do que um produto, um compromisso com o meio Ambiente."
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Placeholder for an agrotech image */}
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Plantação agrícola" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Numbers (Counters) */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter value={100} suffix="% Sustentável" />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  Produção com compromisso ambiental em todas as etapas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter value={500000} prefix="+" suffix="m" format={true} />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  De mangueiras entregues para produtores e distribuidores de todo o Vale.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter value={19} suffix="+ Variações" />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  Mix completo de medidas entre 3/8" e 1 1/4" para irrigação e construção civil.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter value={100} suffix="% Resistência" />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  Polietileno de média densidade com proteção Anti-UV para máxima durabilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section id="diferenciais" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-navy">Nossos Diferenciais</h2>
              <p className="mt-4 text-gray-600">O que faz da Agro Brasil a escolha certa para sua lavoura.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Durabilidade Extrema", subtitle: "(Anti-UV)", desc: "Proteção contra a degradação solar, garantindo vida útil prolongada no campo." },
                { icon: Factory, title: "Parceria Direta", subtitle: "da Fábrica", desc: "Preço justo e negociação sem intermediários, direto da nossa indústria para você." },
                { icon: Droplet, title: "Estrutura Linear", subtitle: "de Média Densidade", desc: "Flexibilidade e resistência mecânica superior para suportar o trabalho pesado." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                    <feature.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">{feature.title}</h3>
                  <p className="text-brand-green font-medium mb-3">{feature.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Catalog */}
        <section id="mix" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-navy">Nosso Mix de Produtos</h2>
              <p className="mt-4 text-gray-600">Soluções completas em mangueiras para diversas aplicações.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Linha AGRO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-sm border-2 border-[#08a46d]/30 hover:border-[#08a46d] transition-colors relative overflow-hidden flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/imagems%20AGRO%20BRASIL/1.png" alt="Linha AGRO" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    ⭐ Mais Vendida no Vale
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="absolute top-48 right-0 w-24 h-24 bg-[#08a46d]/5 rounded-bl-full -z-10"></div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#08a46d]/10 text-[#08a46d] text-sm font-semibold mb-4 self-start">
                    Rolo 500m
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Linha AGRO</h3>
                  <p className="text-gray-500 text-sm mb-6">Alta durabilidade para o campo.</p>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-800">1/2"</span>
                      <span className="text-sm text-gray-500">Espessura: 0,7 mm</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-800">5/8"</span>
                      <span className="text-sm text-gray-500">Espessura: 0,8 mm</span>
                    </div>
                  </div>
                  
                  <a href="https://wa.me/5575999002008" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-brand-green text-white text-center rounded-xl font-medium hover:bg-brand-green/90 transition-colors mt-auto">
                    Solicitar Orçamento
                  </a>
                </div>
              </motion.div>

              {/* Linha Standard - Verde */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl shadow-sm border-2 border-green-500/30 hover:border-green-500 transition-colors relative overflow-hidden flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/imagems%20AGRO%20BRASIL/2.png" alt="Linha Standard Verde" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="absolute top-48 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full -z-10"></div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-4 self-start">
                    Rolo 100m
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Linha Standard</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-500 text-sm font-medium">Modelo Verde</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex flex-col gap-1 pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Bitolas disponíveis:</span>
                      <span className="font-medium text-gray-800">3/8", 1/2", 5/8", 3/4", 1"</span>
                    </div>
                  </div>

                  <a href="https://wa.me/5575999002008" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-brand-green text-white text-center rounded-xl font-medium hover:bg-brand-green/90 transition-colors mt-auto">
                    Falar com Especialista
                  </a>
                </div>
              </motion.div>

              {/* Linha Standard - Vermelha */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-sm border-2 border-red-500/30 hover:border-red-500 transition-colors relative overflow-hidden flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/imagems%20AGRO%20BRASIL/3.png" alt="Linha Standard Vermelha" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="absolute top-48 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full -z-10"></div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-sm font-semibold mb-4 self-start">
                    Rolo 100m
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Linha Standard</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-gray-500 text-sm font-medium">Modelo Vermelho</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex flex-col gap-1 pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Bitolas disponíveis:</span>
                      <span className="font-medium text-gray-800">3/8", 1/2", 5/8", 3/4", 1"</span>
                    </div>
                  </div>

                  <a href="https://wa.me/5575999002008" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-brand-green text-white text-center rounded-xl font-medium hover:bg-brand-green/90 transition-colors mt-auto">
                    Falar com Especialista
                  </a>
                </div>
              </motion.div>

              {/* Linha Standard - Azul */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-sm border-2 border-blue-400/30 hover:border-blue-400 transition-colors relative overflow-hidden flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/imagems%20AGRO%20BRASIL/4.png" alt="Linha Standard Azul" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="absolute top-48 right-0 w-24 h-24 bg-blue-400/5 rounded-bl-full -z-10"></div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-blue-400/10 text-blue-600 text-sm font-semibold mb-4 self-start">
                    Rolo 100m
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Linha Standard</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-gray-500 text-sm font-medium">Modelo Azul</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex flex-col gap-1 pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Bitolas disponíveis:</span>
                      <span className="font-medium text-gray-800">3/8", 1/2", 5/8", 3/4", 1"</span>
                    </div>
                  </div>

                  <a href="https://wa.me/5575999002008" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-brand-green text-white text-center rounded-xl font-medium hover:bg-brand-green/90 transition-colors mt-auto">
                    Falar com Especialista
                  </a>
                </div>
              </motion.div>

              {/* Linha Construção Civil */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-sm border-2 border-blue-600/30 hover:border-blue-600 transition-colors relative overflow-hidden flex flex-col md:col-span-2 lg:col-span-1"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/imagems%20AGRO%20BRASIL/5.png" alt="Construção Civil" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    🏗️ Uso Industrial
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="absolute top-48 right-0 w-24 h-24 bg-blue-600/5 rounded-bl-full -z-10"></div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 text-sm font-semibold mb-4 self-start">
                    Rolo 50m
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Construção Civil</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <span className="text-gray-500 text-sm font-medium">Modelo Azul</span>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-800">1 1/4"</span>
                      <span className="text-sm text-gray-500">Espessura: 2,5 - 3,0 mm</span>
                    </div>
                  </div>

                  <a href="https://wa.me/5575999002008" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-brand-green text-white text-center rounded-xl font-medium hover:bg-brand-green/90 transition-colors mt-auto">
                    Solicitar Orçamento
                  </a>
                </div>
              </motion.div>

            </div>
            
            {/* Galeria Em Ação */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-brand-navy">Mangueiras em Ação</h3>
                <p className="mt-4 text-gray-600">Qualidade comprovada em todas as etapas.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden shadow-md aspect-[4/3]"
                >
                  <img src="https://images.unsplash.com/photo-1580982327559-c1202864eb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rolo industrial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-bold rounded-full mb-3">01</span>
                    <h4 className="text-white font-bold text-xl mb-2">Escala Industrial</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">Rolos otimizados para logística e grandes extensões.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative rounded-3xl overflow-hidden shadow-md aspect-[4/3]"
                >
                  <img src="https://images.unsplash.com/photo-1611288875782-c84022b7a3bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Close na parede da mangueira" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-bold rounded-full mb-3">02</span>
                    <h4 className="text-white font-bold text-xl mb-2">Resistência Extrema</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">Paredes espessas (até 3,0mm) e acabamento premium.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative rounded-3xl overflow-hidden shadow-md aspect-[4/3]"
                >
                  <img src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a3023?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Instalação na plantação" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-bold rounded-full mb-3">03</span>
                    <h4 className="text-white font-bold text-xl mb-2">Uso no Campo</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">Proteção Anti-UV garantindo vida útil sob o sol.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-brand-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-8 h-8 text-brand-green" />
                <span className="font-bold text-2xl tracking-tight">AGRO BRASIL</span>
              </div>
              <p className="text-gray-300 max-w-sm">
                Indústria especializada em mangueiras cegas de alta durabilidade. Tecnologia verde e resistência funcional.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-6">Contato & Localização</h4>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                <span className="text-gray-300">Fazenda Angico, SN - Zona Rural<br/>Ribeira do Amparo - BA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <a href="mailto:agrobrasilmangueiras@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  agrobrasilmangueiras@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <a href="tel:+5575999002008" className="text-gray-300 hover:text-white transition-colors">
                  (75) 99900-2008
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Agro Brasil Mangueiras. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5575999002008"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-brand-green text-white p-4 rounded-full shadow-lg shadow-brand-green/30 hover:bg-brand-green/90 hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-brand-navy text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Fale com a fábrica
        </span>
      </a>
    </div>
  );
}
