/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Award, 
  Clock, 
  ShieldCheck, 
  Instagram,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const EXPERT_NAME = "Flávia Sgarbi Fertonani";
const WHATSAPP_NUMBER = "5511999999999"; // Placeholder, user to provide
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Dra.%20Flávia,%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita!`;
const INSTAGRAM_LINK = "https://www.instagram.com/flaviasgarbi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const HERO_IMAGE = "https://i.imgur.com/27adHzI.jpeg";
const ABOUT_IMAGE = "https://i.imgur.com/xkf0ibs.jpeg";
const EXTRA_IMAGE = "https://i.imgur.com/F6NfBKG.jpeg";

const RESULTS = [
  "https://i.imgur.com/TbUmbiM.jpeg",
  "https://i.imgur.com/eOO4LfD.jpeg",
  "https://i.imgur.com/g1YN8Ml.jpeg"
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-premium-gold selection:text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end md:justify-center pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt={EXPERT_NAME}
            className="w-full h-full object-cover object-top md:object-center brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-bg via-premium-bg/20 to-transparent md:bg-gradient-to-r md:from-premium-bg/80 md:to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-0">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-premium-gold/10 text-premium-gold rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              Cirurgiã Dentista • Ortodontia
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Eu sou <span className="block italic">{EXPERT_NAME}</span>
            </h1>
            <p className="text-lg md:text-xl text-premium-muted mb-8 max-w-lg leading-relaxed">
              Transformando sorrisos com excelência e tecnologia há mais de 13 anos. Especialista em ortodontia e lentes em resina.
            </p>
            
            <div className="flex flex-col items-start gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-button w-full sm:w-auto group">
                <MessageCircle className="w-5 h-5" />
                Agendar consulta gratuita no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-premium-muted flex items-center gap-2 ml-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={ABOUT_IMAGE} 
                  alt="Dra. Flávia Sgarbi" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-premium-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-serif text-4xl italic">13+</p>
                <p className="text-white/80 text-xs uppercase tracking-widest font-semibold">Anos de Experiência</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Muito além de dentes, <br />
                <span className="italic text-premium-gold">eu cuido de pessoas.</span>
              </h2>
              <div className="space-y-6 text-premium-muted leading-relaxed text-lg">
                <p>
                  Olá! Sou a Dra. Flávia Sgarbi Fertonani. Minha missão é devolver a autoestima e a confiança através de um sorriso saudável e harmônico.
                </p>
                <p>
                  Com mais de uma década de dedicação, combino técnica avançada com um olhar humano e personalizado para cada paciente.
                </p>
                
                <ul className="space-y-4 pt-4">
                  {[
                    "Especialista em Ortodontia",
                    "Mestranda em Ciências Odontológicas",
                    "Especialista em Lentes em Resina",
                    "Atendimento humanizado e focado em você"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-premium-dark font-medium">
                      <CheckCircle2 className="w-5 h-5 text-premium-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 bg-premium-bg">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 italic">Resultados Reais</h2>
            <p className="text-premium-muted">
              Confira algumas das transformações realizadas. Cada sorriso é único e planejado detalhadamente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESULTS.map((img, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-premium-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-semibold uppercase tracking-widest border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">
                    Ver Detalhes
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-xs text-premium-muted mt-8 italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 italic">Por que confiar em mim?</h2>
            <p className="text-premium-muted">Diferenciais que tornam o meu atendimento exclusivo e seguro.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Avaliação Honesta", desc: "Diagnósticos precisos e planos de tratamento realistas." },
              { icon: Star, title: "Atendimento VIP", desc: "Você é atendido diretamente por mim, do início ao fim." },
              { icon: Award, title: "Alta Tecnologia", desc: "Uso dos melhores materiais e técnicas do mercado." },
              { icon: Clock, title: "Pontualidade", desc: "Respeito total ao seu tempo e agenda." },
              { icon: CheckCircle2, title: "Clareza Total", desc: "Explicações detalhadas sobre cada etapa do processo." },
              { icon: MessageCircle, title: "Suporte Pós", desc: "Acompanhamento próximo após os procedimentos." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-premium-bg hover:border-premium-gold/30 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-premium-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-premium-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-premium-dark text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl mb-8 font-serif italic">
              O sorriso dos seus sonhos está a um clique de distância.
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Não deixe para depois a saúde e a beleza do seu sorriso. Vamos conversar?
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-button inline-flex mx-auto">
              <MessageCircle className="w-5 h-5" />
              Falar com a Dra. Flávia agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 italic">Sua primeira consulta</h2>
            <p className="text-premium-muted">Simples, transparente e sem burocracia.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-premium-bg -z-10" />
            
            {[
              { step: "01", title: "WhatsApp", desc: "Clique no botão e envie uma mensagem para nossa equipe." },
              { step: "02", title: "Agendamento", desc: "Escolha o melhor dia e horário para sua avaliação." },
              { step: "03", title: "Avaliação", desc: "Venha nos visitar para uma consulta completa e gratuita." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-premium-bg text-center relative"
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-premium-gold text-white flex items-center justify-center rounded-full font-serif italic text-xl shadow-lg">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-4">{item.title}</h3>
                <p className="text-premium-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-premium-gold font-semibold uppercase tracking-widest text-sm mb-4">
              100% Gratuita e Sem Compromisso
            </p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <section className="py-24 bg-premium-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <motion.h2 {...fadeIn} className="text-4xl md:text-5xl mb-6 italic leading-tight">
                Cuidado em <br /> cada detalhe.
              </motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-premium-muted mb-8">
                Meu consultório foi planejado para oferecer o máximo de conforto e segurança para você.
              </motion.p>
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-premium-gold font-semibold hover:gap-4 transition-all">
                  Siga no Instagram <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
              <motion.div 
                {...fadeIn}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={EXTRA_IMAGE} 
                  alt="Atendimento Dra. Flávia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8"
              >
                <img 
                  src={HERO_IMAGE} 
                  alt="Consultório Dra. Flávia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
              Pronto para <span className="italic text-premium-gold">transformar</span> o seu sorriso?
            </h2>
            <p className="text-xl text-premium-muted mb-12 max-w-2xl mx-auto">
              Agende agora sua primeira consulta gratuita e descubra como posso te ajudar a conquistar o sorriso que você sempre quis.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="whatsapp-button scale-110 hover:scale-115 transition-transform">
                <MessageCircle className="w-6 h-6" />
                Quero minha consulta gratuita
              </a>
              <div className="flex items-center gap-8 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-premium-bg overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Paciente" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-premium-muted font-medium">
                  +2.500 sorrisos transformados
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 bg-premium-bg border-t border-premium-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif italic mb-2">{EXPERT_NAME}</h3>
              <p className="text-premium-muted text-sm uppercase tracking-widest">Cirurgiã Dentista • CRO 00000</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-premium-dark hover:bg-premium-gold hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-premium-dark hover:bg-premium-gold hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-premium-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-premium-muted uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.</p>
            <p>Desenvolvido com excelência</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX SIMPLES */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            alt="Resultado ampliado" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            referrerPolicy="no-referrer"
          />
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
