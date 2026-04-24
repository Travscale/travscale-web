"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    logo: "Pacific Routes",
    quote: "The GDS integration with BYOK was a game-changer. We kept our Amadeus credentials and got a modern interface on top. No vendor lock-in.",
    name: "Sarah Chen",
    role: "Operations Head",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    logo: "Desert Rose Tourism",
    quote: "Visa tracking alone saved us 15 hours a week. No more spreadsheets, no more missed deadlines. Our clients noticed the difference immediately.",
    name: "Ahmad Al-Rashid",
    role: "CEO",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    logo: "Atlas Journeys",
    quote: "We use it across three branches now. Consistent quality at a speed we didn't expect from an ERP platform.",
    name: "Daniel Frost",
    role: "COO",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    logo: "Voyager Group",
    quote: "Conversion on our booking flow jumped 40% after migrating. The supplier management tools are leagues ahead of what we had.",
    name: "Chris Meyer",
    role: "Growth Lead",
    avatar: "https://i.pravatar.cc/150?img=27",
  },
  {
    logo: "Global Wings",
    quote: "Support was unreal. We went from mockup to production without friction. The team genuinely cares about travel agencies.",
    name: "Priya Nair",
    role: "CTO",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    logo: "SilkRoute Travel",
    quote: "The multi-branch support is exceptional. We standardized processes across our 6 offices within two weeks.",
    name: "Marcus Webb",
    role: "Regional Director",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
];

export default function Testimonials() {
  return (
    <section 
      className="py-24 sm:py-32 relative"
      data-testid="testimonials-section" 
      id="testimonials" 
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f9f7f6] border border-[#181717]/10 shadow-sm mb-6">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
              Customer Stories
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
            Trusted by the world's <br className="hidden md:block" />
            <span className="text-[#666666]">fastest-growing agencies.</span>
          </h2>
        </div>

        {/* Hero Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-[#181717] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative flex flex-col lg:flex-row items-center gap-12 group overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#d04841]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
            
            <div className="flex-1 relative z-10 w-full">
              <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-[#ffffff]/10 mb-6 transform -translate-x-1 lg:-translate-x-2" />
              <blockquote className="text-xl sm:text-2xl lg:text-[2.25rem] font-medium text-white leading-[1.3] tracking-tight mb-10">
                &quot;We migrated our entire 40-person agency to Travscale in two weekends. It&apos;s the first platform where the UI doesn&apos;t fight you. <span className="text-[#d04841]">Our booking turnaround time literally dropped by 60%.</span>&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" 
                  alt="Rajesh Mehta" 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="text-white font-semibold text-base lg:text-lg">Rajesh Mehta</div>
                  <div className="text-white/50 text-xs lg:text-sm">Director of Operations, Wanderlust Travels</div>
                </div>
              </div>
            </div>

            {/* Visual element on right for hero testimonial */}
            <div className="w-full lg:w-[320px] shrink-0 relative z-10">
               <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl transform lg:rotate-3 transition-transform duration-500 group-hover:rotate-0">
                 <div className="flex justify-between items-center mb-8">
                    <div className="text-white/80 text-xs font-semibold uppercase tracking-wider">Platform Metrics</div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 </div>
                 <div className="space-y-6">
                   <div>
                     <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1.5">Avg Turnaround</div>
                     <div className="text-white text-3xl font-bold tracking-tight">14 mins <span className="text-emerald-400 text-sm ml-2 font-medium">↓ 60%</span></div>
                   </div>
                   <div className="h-px w-full bg-white/10" />
                   <div>
                     <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1.5">Error Rate</div>
                     <div className="text-white text-3xl font-bold tracking-tight">0.12% <span className="text-emerald-400 text-sm ml-2 font-medium">↓ 99%</span></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Masonry Grid via CSS Columns */}
        <div className="max-w-6xl mx-auto relative pb-12">
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className="break-inside-avoid mb-6 bg-[#f9f7f6] rounded-[2rem] p-8 border border-[#181717]/5 hover:border-[#181717]/10 hover:shadow-sm transition-all duration-300 group flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-[#d04841] text-[#d04841]" />
                  ))}
                </div>
                <blockquote className="text-[#181717]/80 text-[15px] leading-relaxed mb-8 flex-1">
                  &quot;{t.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-10 h-10 rounded-full object-cover border border-[#181717]/10 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#181717] truncate">{t.name}</div>
                    <div className="text-[11px] text-[#666666] truncate">{t.role}, {t.logo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle gradient to fade bottom naturally over the actual grid height */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/80 to-transparent z-10 pointer-events-none" />
          
        </div>
        
      </div>
    </section>
  );
}
