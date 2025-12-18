// import React, { useState, useEffect } from "react";
// import {
//   ArrowRight,
//   TrendingUp,
//   Target,
//   Zap,
//   Mail,
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   Rocket,
//   Globe,
//   ChevronRight,
//   BarChart3,
//   Megaphone,
//   Star,
// } from "lucide-react";

// export default function App() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) =>
//       setMousePos({ x: e.clientX, y: e.clientY });

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const features = [
//     {
//       icon: <Rocket className="w-8 h-8" />,
//       title: "Viral Campaigns",
//       description: "Launch explosive campaigns that dominate feeds",
//       gradient: "from-cyan-500 to-blue-500",
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Precision Targeting",
//       description: "AI-powered targeting for maximum conversions",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Revenue Growth",
//       description: "Multiply your sales with data-driven strategies",
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Omnichannel",
//       description: "Seamless presence across all platforms",
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Analytics",
//       description: "Real-time insights and performance tracking",
//       gradient: "from-indigo-500 to-purple-500",
//     },
//     {
//       icon: <Megaphone className="w-8 h-8" />,
//       title: "Brand Building",
//       description: "Create unforgettable brand experiences",
//       gradient: "from-pink-500 to-rose-500",
//     },
//   ];

//   const stats = [
//     { number: "850+", label: "Brands Hyped" },
//     { number: "4.8x", label: "Avg ROI" },
//     { number: "99%", label: "Success Rate" },
//     { number: "$500M+", label: "Revenue Impact" },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       role: "CEO, TechFlow",
//       text:
//         "HypeNest transformed our brand overnight. Sales increased 400% in just 3 months.",
//     },
//     {
//       name: "Marcus Rodriguez",
//       role: "Founder, UrbanStyle",
//       text:
//         "From zero to viral in 2 weeks. Their team knows exactly how to convert attention into revenue.",
//     },
//     {
//       name: "Emily Thompson",
//       role: "CMO, FitLife",
//       text:
//         "Best marketing investment we've ever made. ROI speaks for itself.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* BACKGROUND */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div
//           className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
//           style={{ top: mousePos.y / 10, left: mousePos.x / 10 }}
//         />
//         <div
//           className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"
//           style={{ top: mousePos.y / 15 + 200, right: mousePos.x / 15 }}
//         />
//       </div>

//       {/* NAVBAR */}
//       <nav className="fixed w-full bg-black/60 backdrop-blur border-b border-purple-500/20 z-50">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Zap className="w-8 h-8 text-purple-400" />
//             <span className="text-2xl font-black">HypeNest</span>
//           </div>

//           <button
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X /> : <Menu />}
//           </button>

//           <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-bold">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="pt-40 text-center px-6">
//         <h1 className="text-6xl md:text-8xl font-black mb-6">
//           We Create{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//             Hype
//           </span>
//         </h1>
//         <p className="text-gray-400 max-w-3xl mx-auto text-xl mb-10">
//           Transform your brand into a cultural phenomenon with viral marketing
//           strategies.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6 justify-center">
//           <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-bold flex items-center gap-3">
//             Ignite Your Brand <Rocket />
//           </button>
//           <button className="px-10 py-5 rounded-full border border-purple-500 text-purple-400">
//             Watch Stories <ChevronRight />
//           </button>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="py-20 px-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//           {stats.map((s, i) => (
//             <div
//               key={i}
//               className="border border-purple-500/30 rounded-2xl p-6 text-center"
//             >
//               <div className="text-4xl font-black text-purple-400">
//                 {s.number}
//               </div>
//               <div className="text-gray-400 text-sm">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-20 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-black text-center mb-12">
//           Services That Break The Internet
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="border border-purple-500/30 rounded-2xl p-8 bg-black/40"
//             >
//               <div
//                 className={`text-transparent bg-clip-text bg-gradient-to-r ${f.gradient}`}
//               >
//                 {f.icon}
//               </div>
//               <h3 className="text-xl font-bold mt-4">{f.title}</h3>
//               <p className="text-gray-400 text-sm mt-2">{f.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-black text-center mb-12">
//           Success Stories
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="border border-purple-500/30 rounded-2xl p-8 bg-black/40"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, j) => (
//                   <Star
//                     key={j}
//                     className="w-4 h-4 text-yellow-400 fill-yellow-400"
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-300 mb-4">"{t.text}"</p>
//               <div className="font-bold">{t.name}</div>
//               <div className="text-purple-400 text-sm">{t.role}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="py-24 px-6 text-center">
//         <h2 className="text-5xl font-black mb-6">Ready To Go Viral?</h2>
//         <p className="text-gray-400 mb-10">
//           Let’s create your next viral moment.
//         </p>

//         <button
//           onClick={() => alert("Message sent 🚀")}
//           className="px-12 py-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-bold"
//         >
//           Launch Your Project <ArrowRight className="inline ml-2" />
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-purple-500/20 py-8 text-center text-gray-500">
//         © 2024 HypeNest. All rights reserved.
//       </footer>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Target, Zap, Users, BarChart3, Mail, Phone, MapPin, Menu, X, Rocket, Sparkles, Globe, ChevronRight } from 'lucide-react';

export default function HypeNest() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Viral Launch Campaigns",
      description: "Explosive brand launches that dominate social feeds and drive unprecedented engagement.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Precision Targeting",
      description: "AI-powered audience targeting that converts cold prospects into loyal customers.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Revenue Acceleration",
      description: "Data-driven strategies that multiply your sales and maximize every advertising dollar.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Omnichannel Domination",
      description: "Seamless brand presence across all platforms for maximum market penetration.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "850+", label: "Brands Hyped", icon: <Sparkles /> },
    { number: "4.8x", label: "Avg ROI", icon: <TrendingUp /> },
    { number: "99%", label: "Success Rate", icon: <Target /> },
    { number: "$500M+", label: "Revenue Impact", icon: <Rocket /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            top: mousePos.y / 10,
            left: mousePos.x / 10,
            transition: 'all 0.3s ease'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            top: mousePos.y / 15 + 200,
            right: mousePos.x / 15,
            transition: 'all 0.3s ease',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            bottom: mousePos.y / 20,
            left: mousePos.x / 20 + 300,
            transition: 'all 0.3s ease',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition animate-pulse" />
                <div className="relative w-12 h-12 bg-black border border-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" fill="url(#gradient)" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-3xl font-black tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                    Hype
                  </span>
                  <span className="text-white">Nest</span>
                </span>
                <div className="text-xs text-purple-400 tracking-widest uppercase">Marketing Lab</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
              </a>
              <a href="#results" className="text-gray-300 hover:text-purple-400 transition relative group">
                Results
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all" />
              </a>
              <button className="relative group overflow-hidden px-6 py-3 rounded-full font-bold">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse" />
                <div className="absolute inset-0.5 bg-black rounded-full" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-all">
                  Launch Project
                </span>
              </button>
            </div>

            <button 
              className="md:hidden text-purple-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-gray-300 hover:text-purple-400">Services</a>
              <a href="#results" className="block text-gray-300 hover:text-purple-400">Results</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400">Contact</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold">
                Launch Project
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition" />
              <div className="relative px-6 py-2 bg-black border border-purple-500/50 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  #1 Performance Marketing Agency 2024
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span className="block text-white mb-4">We Don't Do</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              Ordinary.
            </span>
            <span className="block text-white mt-4">We Create</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              Hype.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your brand into a cultural phenomenon. We craft viral campaigns that don't just sell products—they create movements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden px-8 py-5 rounded-full font-bold text-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse" />
              <div className="relative flex items-center gap-3 text-white">
                Ignite Your Brand
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
            <button className="group px-8 py-5 rounded-full font-bold text-lg border-2 border-purple-500/50 hover:border-purple-400 text-purple-400 transition flex items-center gap-3 backdrop-blur-sm">
              Watch Success Stories
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-20 blur-xl" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center group-hover:border-purple-400/50 transition">
                  <div className="text-purple-400 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-bold">
              OUR SUPERPOWERS
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Services That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Break The Internet
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Next-generation marketing solutions powered by creativity, data, and pure adrenaline
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                <div className="relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-10 group-hover:border-purple-400/50 transition-all group-hover:scale-105">
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <button className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-bold flex items-center gap-2 group-hover:gap-4 transition-all`}>
                    Explore More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="results" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
        }} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <Rocket className="relative w-20 h-20 text-purple-400" />
            </div>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black mb-8">
            <span className="text-white">Ready To</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2">
              Go Viral?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Join the elite brands making waves. Let's create your next viral moment.
          </p>
          
          <button className="group relative overflow-hidden px-12 py-6 rounded-full font-black text-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            <div className="relative flex items-center gap-4 text-white">
              Schedule Your Launch
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-bold">
                GET IN TOUCH
              </div>
              <h2 className="text-5xl font-black text-white mb-6">
                Let's Create
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Something Epic
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Ready to dominate your market? Our team of growth hackers is standing by to turn your brand into a phenomenon.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Mail />, label: "Email", value: "hello@hypenest.io" },
                  { icon: <Phone />, label: "Phone", value: "+1 (555) 999-HYPE" },
                  { icon: <MapPin />, label: "HQ", value: "Silicon Valley, CA\nInnovation District" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition" />
                      <div className="relative w-14 h-14 bg-black border border-purple-500/50 rounded-xl flex items-center justify-center text-purple-400 group-hover:border-purple-400 transition">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{item.label}</div>
                      <div className="text-gray-400 whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-black/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10">
                <div className="space-y-6">
                  {['Name', 'Email'].map((label, index) => (
                    <div key={index}>
                      <label className="block text-sm font-bold text-purple-400 mb-3">{label}</label>
                      <input 
                        type={label === 'Email' ? 'email' : 'text'}
                        className="w-full px-6 py-4 bg-black/50 border border-purple-500/30 rounded-xl focus:border-purple-400 focus:outline-none text-white placeholder-gray-600 transition"
                        placeholder={`Your ${label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                  
                  <div>
                    <label className="block text-sm font-bold text-purple-400 mb-3">Project Brief</label>
                    <textarea 
                      rows="5"
                      className="w-full px-6 py-4 bg-black/50 border border-purple-500/30 rounded-xl focus:border-purple-400 focus:outline-none text-white placeholder-gray-600 transition resize-none"
                      placeholder="Tell us about your vision..."
                    ></textarea>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      alert('🚀 Message sent! Our hype squad will contact you within 24 hours!');
                    }}
                    className="group relative w-full overflow-hidden py-5 rounded-xl font-bold"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
                    <div className="relative flex items-center justify-center gap-3 text-white">
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50" />
                <div className="relative w-12 h-12 bg-black border border-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-purple-400" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  HypeNest
                </span>
                <div className="text-xs text-purple-400 tracking-widest">MARKETING LAB</div>
              </div>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2024 HypeNest. Creating viral moments since day one.
            </div>
          </div>
        </div>
      </footer>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}