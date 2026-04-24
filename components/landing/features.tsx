"use client";

import {
  Users,
  Receipt,
  Globe2,
  Building,
  CalendarDays,
  Plane,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <section
      className="py-24 sm:py-32 overflow-hidden"
      data-testid="features-section"
      id="features"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
              Platform Features
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
            Built for daily operations, <br className="hidden md:block" />
            <span className="text-[#666666]">not just dashboards.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl">
            Every workflow in Travscale is designed to replace inbox chaos with clear processes your whole agency can trust.
          </p>
        </div>

        {/* High-Fidelity Graphic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Passenger Management */}
          <div className="group relative bg-[#f9f7f6] rounded-[2rem] overflow-hidden border border-[#181717]/5 hover:border-[#181717]/10 transition-colors md:col-span-1 lg:col-span-4 flex flex-col min-h-[400px]">
            {/* Visual Area */}
            <div className="h-48 pt-8 px-8 flex justify-center items-end overflow-hidden">
              <div className="w-full bg-white rounded-t-xl border-t border-x border-[#181717]/10 shadow-sm p-4 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out">
                <div className="flex justify-between items-center mb-3">
                  <div className="h-3 w-16 bg-[#181717]/10 rounded" />
                  <div className="h-3 w-8 bg-[#181717]/10 rounded" />
                </div>
                {[1, 2, 3].map((i) => (
                  <div className="flex items-center gap-3 py-2 border-b border-[#181717]/5 last:border-0" key={i}>
                    <div className="w-6 h-6 rounded-full bg-[#181717]/5" />
                    <div className="flex-1">
                      <div className="h-2 w-16 sm:w-20 bg-[#181717]/15 rounded mb-1.5" />
                      <div className="h-1.5 w-10 sm:w-12 bg-[#181717]/5 rounded" />
                    </div>
                    <div className="w-10 sm:w-12 h-4 rounded-full bg-emerald-50 border border-emerald-100" />
                  </div>
                ))}
              </div>
            </div>
            {/* Content Area */}
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Users className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Passenger Records</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Track passports, visas, and trip history in a clean, searchable database.</p>
            </div>
          </div>

          {/* Card 2: Smart Invoicing */}
          <div className="group relative bg-[#f9f7f6] rounded-[2rem] overflow-hidden border border-[#181717]/5 hover:border-[#181717]/10 transition-colors md:col-span-1 lg:col-span-4 flex flex-col min-h-[400px]">
            <div className="h-48 pt-8 px-8 flex justify-center items-end overflow-hidden">
              <div className="w-48 bg-white rounded-t-xl border border-[#181717]/10 shadow-sm p-5 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out relative">
                {/* Paid stamp */}
                <div className="absolute top-8 right-4 border-2 border-emerald-500 text-emerald-500 text-[10px] font-bold uppercase tracking-widest py-1 px-2 rounded-sm rotate-12 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 delay-100">
                  Paid
                </div>
                <div className="h-4 w-12 bg-[#181717]/15 rounded mb-4" />
                <div className="flex justify-between items-center mb-2">
                  <div className="h-2 w-16 bg-[#181717]/10 rounded" />
                  <div className="h-2 w-8 bg-[#181717]/10 rounded" />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 w-12 bg-[#181717]/10 rounded" />
                  <div className="h-2 w-10 bg-[#181717]/10 rounded" />
                </div>
                <div className="pt-3 border-t border-dashed border-[#181717]/20 flex justify-between items-end">
                  <div className="h-2 w-10 bg-[#181717]/10 rounded" />
                  <div className="text-lg font-bold text-[#181717] leading-none tracking-tight">₹42k</div>
                </div>
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Receipt className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Smart Invoicing</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Generate agency-ready invoices with taxes and automatic payment links.</p>
            </div>
          </div>

          {/* Card 3: Visa Workflow */}
          <div className="group relative bg-[#f9f7f6] rounded-[2rem] overflow-hidden border border-[#181717]/5 hover:border-[#181717]/10 transition-colors md:col-span-1 lg:col-span-4 flex flex-col min-h-[400px]">
            <div className="h-48 pt-8 px-4 flex justify-center items-end gap-3 overflow-hidden">
              <div className="w-24 bg-[#181717]/5 rounded-t-xl p-2 translate-y-8 group-hover:translate-y-4 transition-transform duration-500 ease-out">
                <div className="h-2 w-12 bg-[#181717]/20 rounded mb-2" />
                <div className="bg-white rounded-md p-2 shadow-sm mb-2 h-10" />
                <div className="bg-white rounded-md p-2 shadow-sm h-10" />
              </div>
              <div className="w-24 bg-[#181717]/5 rounded-t-xl p-2 translate-y-4 group-hover:translate-y-6 transition-transform duration-500 ease-out delay-75">
                <div className="h-2 w-16 bg-[#181717]/20 rounded mb-2" />
                <div className="bg-white rounded-md p-2 shadow-sm h-12 border-l-2 border-amber-400" />
              </div>
              <div className="w-24 bg-[#181717]/5 rounded-t-xl p-2 translate-y-12 group-hover:translate-y-8 transition-transform duration-500 ease-out delay-150">
                <div className="h-2 w-14 bg-[#181717]/20 rounded mb-2" />
                <div className="bg-white rounded-md p-2 shadow-sm h-10 border-l-2 border-emerald-400" />
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Globe2 className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Visa Kanban</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Handle requests, approvals, and consulate timelines visually.</p>
            </div>
          </div>

          {/* Card 4: Supplier Operations (Larger horizontal card) */}
          <div className="group relative bg-[#f9f7f6] rounded-[2rem] overflow-hidden border border-[#181717]/5 hover:border-[#181717]/10 transition-colors md:col-span-2 lg:col-span-8 flex flex-col md:flex-row min-h-[320px]">
            <div className="flex-1 p-8 bg-white md:border-r border-[#181717]/5 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Building className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-[#181717] mb-3 tracking-tight">Supplier Operations</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed max-w-sm">
                Centralize DMC terms, negotiated rates, and communication without losing details in scattered WhatsApp chats.
              </p>
            </div>
            <div className="flex-1 h-64 md:h-auto bg-[#f9f7f6] relative overflow-hidden flex items-center justify-center p-8">
              <div className="w-full max-w-[280px] bg-white rounded-xl shadow-sm border border-[#181717]/10 p-4 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">RJ</div>
                  <div>
                    <div className="text-sm font-semibold text-[#181717] truncate">Royal Journeys DMC</div>
                    <div className="text-[10px] text-emerald-600 font-medium bg-emerald-50 inline-block px-1.5 py-0.5 rounded mt-0.5">Verified Partner</div>
                  </div>
                </div>
                <div className="bg-[#f9f7f6] rounded-lg p-3 text-xs text-[#666666]">
                  &ldquo;Confirmed the 3-night stay at Atlantis. Rate includes half-board.&rdquo;
                </div>
              </div>
              {/* Background decorative card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] bg-white/50 rounded-xl border border-[#181717]/5 p-4 -rotate-6 scale-95 z-0" />
            </div>
          </div>

          {/* Card 5: Itinerary Builder */}
          <div className="group relative bg-[#f9f7f6] rounded-[2rem] overflow-hidden border border-[#181717]/5 hover:border-[#181717]/10 transition-colors md:col-span-1 lg:col-span-4 flex flex-col min-h-[320px]">
            <div className="h-48 pt-8 px-8 flex justify-center items-center overflow-hidden">
              <div className="relative w-full max-w-[200px]">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-[1.5px] bg-[#181717]/10" />
                
                <div className="relative z-10 flex gap-4 mb-4 translate-x-4 group-hover:translate-x-0 transition-transform duration-500 ease-out">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#181717]/10 flex items-center justify-center shadow-sm shrink-0">
                    <Plane className="w-3.5 h-3.5 text-[#181717]/60" />
                  </div>
                  <div className="bg-white border border-[#181717]/5 shadow-sm rounded-lg p-3 flex-1">
                    <div className="h-2 w-16 bg-[#181717]/15 rounded mb-1.5" />
                    <div className="h-1.5 w-10 bg-[#181717]/10 rounded" />
                  </div>
                </div>
                
                <div className="relative z-10 flex gap-4 translate-x-8 group-hover:translate-x-2 transition-transform duration-500 ease-out delay-75">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#181717]/10 flex items-center justify-center shadow-sm shrink-0">
                    <Building className="w-3.5 h-3.5 text-[#181717]/60" />
                  </div>
                  <div className="bg-white border border-[#181717]/5 shadow-sm rounded-lg p-3 flex-1">
                    <div className="h-2 w-20 bg-[#181717]/15 rounded mb-1.5" />
                    <div className="h-1.5 w-12 bg-[#181717]/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <CalendarDays className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Itineraries</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Create and share polished day-by-day plans with clients instantly.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
