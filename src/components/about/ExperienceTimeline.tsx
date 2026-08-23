"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { 
  Navigation, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Briefcase,
  ZoomIn,
  ZoomOut,
  LocateFixed,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RealStation {
  id: string;
  year: string;
  fullPeriod: string;
  role: string;
  company: string;
  estateZone: string;
  address: string;
  image: string;
  current: boolean;
  themeColor: string;
  badgeBg: string;
  lat: number;
  lng: number;
  description: string[];
}

export function ExperienceTimeline() {
  // Verified exact coordinates placed inside the real green industrial park complex
  const stations: RealStation[] = useMemo(() => [
    {
      id: "5",
      year: "2020",
      fullPeriod: "2020 — 2021",
      role: "Machining Operator",
      company: "PT. Honda Precision Parts Manufacturing",
      estateZone: "Kawasan Industri Indotaisei",
      address: "Kalihurip, Cikampek, Karawang, Jawa Barat 41373",
      image: "/companies/hppm.webp",
      current: false,
      themeColor: "#FF2D55", // Apple Rose
      badgeBg: "rgba(255, 45, 85, 0.12)",
      lat: -6.419833,
      lng: 107.414306,
      description: experiences[4].description,
    },
    {
      id: "4",
      year: "2021",
      fullPeriod: "2021 — 2022",
      role: "Assembly Operator",
      company: "PT. JTEKT Indonesia",
      estateZone: "Kawasan Industri Suryacipta",
      address: "Jl. Surya Madya Plot I-27B, Kutanegara, Ciampel, Karawang 41363",
      image: "/companies/jtekt.webp",
      current: false,
      themeColor: "#FF9500", // Apple Orange
      badgeBg: "rgba(255, 149, 0, 0.12)",
      lat: -6.404667,
      lng: 107.333833,
      description: experiences[3].description,
    },
    {
      id: "3",
      year: "2023",
      fullPeriod: "2023 — 2024",
      role: "Quality Inspector",
      company: "PT. Daihatsu Drivetrain Manufacturing",
      estateZone: "Kawasan Industri Suryacipta",
      address: "Jl. Surya Madya VI Kav. I-58C, Kutanegara, Ciampel, Karawang 41363",
      image: "/companies/ddmi.webp",
      current: false,
      themeColor: "#5856D6", // Apple Purple
      badgeBg: "rgba(88, 86, 214, 0.12)",
      lat: -6.421722,
      lng: 107.341139,
      description: experiences[2].description,
    },
    {
      id: "2",
      year: "2024",
      fullPeriod: "2024 — 2025",
      role: "Intern (Money Production & Electrical)",
      company: "Perum Percetakan Uang Republik Indonesia",
      estateZone: "Kawasan Hijau Kompleks Peruri",
      address: "Gedung Percetakan Uang RI, Kawasan Hijau Peruri, Karawang",
      image: "/companies/peruri.webp",
      current: false,
      themeColor: "#34C759", // Apple Green
      badgeBg: "rgba(52, 199, 89, 0.12)",
      lat: -6.362805556,
      lng: 107.306388889,
      description: experiences[1].description,
    },
    {
      id: "1",
      year: "2025",
      fullPeriod: "2025 — Present",
      role: "Warehouse Staff (Planning & Utilities)",
      company: "Perum Percetakan Uang Republik Indonesia",
      estateZone: "Kawasan Hijau Kompleks Peruri",
      address: "Gedung Sentral & Utility, Kawasan Hijau Peruri, Karawang",
      image: "/companies/peruri.webp",
      current: true,
      themeColor: "#007AFF", // Apple Blue
      badgeBg: "rgba(0, 122, 255, 0.12)",
      lat: -6.372667,
      lng: 107.302889,
      description: experiences[0].description,
    },
  ], []);

  const [activeStation, setActiveStation] = useState<RealStation | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // Initialize Real Leaflet Interactive Map Client-Side
  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Center across the full corridor
      const map = L.map(mapContainerRef.current, {
        center: [-6.395, 107.355],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
      });

      // CartoDB Voyager High-DPI clean vector tiles
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd",
      }).addTo(map);

      // Fetch real road route from OSRM public routing engine
      async function fetchRealRoute(coords: number[][]): Promise<number[][]> {
        try {
          const coordStr = coords.map(([lat, lng]) => `${lng},${lat}`).join(";");
          const url = `https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=full&geometries=geojson`;
          const res = await fetch(url);
          const data = await res.json();
          if (data.routes?.[0]?.geometry?.coordinates) {
            // OSRM returns [lng, lat] — flip to [lat, lng] for Leaflet
            return data.routes[0].geometry.coordinates.map((c: number[]) => [c[1], c[0]]);
          }
        } catch (e) {
          console.warn("OSRM route fetch failed, falling back to straight line", e);
        }
        // Fallback to straight lines
        return coords;
      }

      const stationCoords = stations.map((s) => [s.lat, s.lng]);
      const realRouteCoords = await fetchRealRoute(stationCoords);

      // Route Outer Solid White Border
      L.polyline(realRouteCoords as any, {
        color: "#FFFFFF",
        weight: 9,
        opacity: 0.95,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      // Route Base Solid Highway Line (Apple Blue)
      L.polyline(realRouteCoords as any, {
        color: "#007AFF",
        weight: 6,
        opacity: 0.85,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      // Route Live Flowing Animated Dash Line
      L.polyline(realRouteCoords as any, {
        color: "#60A5FA",
        weight: 3.5,
        opacity: 0.95,
        lineCap: "round",
        lineJoin: "round",
        className: "animated-gps-flow",
      }).addTo(map);

      // Create Custom Apple Maps HTML Markers exactly on coordinates
      stations.forEach((stg) => {
        const customIcon = L.divIcon({
          className: "custom-apple-marker",
          html: `
            <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
              <div style="background: white; border: 1px solid rgba(0,0,0,0.14); padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 800; font-family: monospace; color: #09090b; box-shadow: 0 4px 14px rgba(0,0,0,0.18); white-space: nowrap; margin-bottom: 3px;">
                ${stg.year} • ${stg.company.replace("PT. ", "").replace("Perum Percetakan Uang Republik Indonesia", "Peruri")}
              </div>
              <div style="width: 34px; height: 34px; border-radius: 999px; background: ${stg.themeColor}; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 6px 18px ${stg.themeColor}70; color: white; position: relative;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                ${stg.current ? '<span style="position: absolute; top: -3px; right: -3px; width: 10px; height: 10px; border-radius: 999px; background: #007AFF; border: 2px solid white;"></span>' : ''}
              </div>
              <div style="width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid ${stg.themeColor}; margin-top: -1px;"></div>
            </div>
          `,
          iconSize: [0, 0],
          iconAnchor: [0, 0],
        });

        const marker = L.marker([stg.lat, stg.lng], { icon: customIcon }).addTo(map);

        marker.on("click", () => {
          map.flyTo([stg.lat, stg.lng], 16, { duration: 1.2 });
          setActiveStation(stg);
        });
      });

      mapInstanceRef.current = map;
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [stations]);

  // Zoom Controls
  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetView = () => {
    mapInstanceRef.current?.flyTo([-6.395, 107.355], 12, { duration: 1.2 });
  };

  const handleSelectStation = (stg: RealStation) => {
    mapInstanceRef.current?.flyTo([stg.lat, stg.lng], 16, { duration: 1.2 });
    setActiveStation(stg);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeStation) return;
    const idx = stations.findIndex((w) => w.id === activeStation.id);
    const prev = idx > 0 ? idx - 1 : stations.length - 1;
    handleSelectStation(stations[prev]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeStation) return;
    const idx = stations.findIndex((w) => w.id === activeStation.id);
    const next = idx < stations.length - 1 ? idx + 1 : 0;
    handleSelectStation(stations[next]);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 relative w-full overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto space-y-4">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-neutral-200">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">Work Experience</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
              Where I've Worked
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
            Five years across Karawang's industrial corridor — from machining floors to production planning. Click a pin to see the details.
          </p>
        </div>

        {/* ── Real Interactive Map Container (Supports Zoom In / Zoom Out / Drag Pan) ── */}
        <div className="relative rounded-3xl bg-neutral-100 border border-neutral-200/90 shadow-xl overflow-hidden h-[440px] sm:h-[540px]">
          
          {/* Leaflet Map Canvas Div */}
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Top Apple Maps Floating Status Pill */}
          <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-[500] flex items-center gap-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md text-xs font-semibold text-neutral-800">
              <span className="h-2.5 w-2.5 rounded-full bg-[#007AFF] animate-pulse" />
              <span>5 Stations • Real Factory Geolocation</span>
            </div>
          </div>

          {/* Floating Zoom & Center Map Controls */}
          <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-[500] flex flex-col gap-2">
            <div className="flex flex-col rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg overflow-hidden">
              <button
                onClick={handleZoomIn}
                className="h-9 w-9 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors border-b border-neutral-100"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="h-9 w-9 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={handleResetView}
              className="h-9 w-9 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors"
              title="Reset Map View"
              aria-label="Reset View"
            >
              <LocateFixed className="h-4 w-4 text-[#007AFF]" />
            </button>
          </div>

          {/* Bottom Floating Station Fast Selector Bar */}
          <div className="absolute bottom-0 left-0 right-0 sm:bottom-5 sm:left-5 sm:right-auto z-[500]">
            <div className="flex items-center sm:gap-1.5 sm:p-1.5 sm:rounded-2xl sm:bg-white/95 sm:backdrop-blur-md sm:border sm:border-neutral-200 sm:shadow-lg">
              {/* Mobile: full-width row inside the map bottom */}
              <div className="flex w-full sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg">
                {stations.map((stg) => (
                  <button
                    key={stg.id}
                    onClick={() => handleSelectStation(stg)}
                    className={cn(
                      "flex-1 py-3 flex flex-col items-center gap-1 transition-all border-r border-neutral-100 last:border-r-0",
                      activeStation?.id === stg.id
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 bg-white"
                    )}
                  >
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: activeStation?.id === stg.id ? 'white' : stg.themeColor }} />
                    <span className="text-[10px] font-bold font-mono">{stg.year}</span>
                  </button>
                ))}
              </div>

              {/* Desktop: compact pill */}
              <div className="hidden sm:flex items-center gap-1.5">
                {stations.map((stg) => (
                  <button
                    key={stg.id}
                    onClick={() => handleSelectStation(stg)}
                    className={cn(
                      "px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-1.5",
                      activeStation?.id === stg.id
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "text-neutral-600 hover:bg-neutral-100"
                    )}
                  >
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: stg.themeColor }} />
                    <span>{stg.year}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ── Real Place Details Card (iOS Half-Sheet Modal with Real Company Photo) ── */}
      <AnimatePresence>
        {activeStation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveStation(null)}
            className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl border border-neutral-200 shadow-2xl overflow-hidden text-neutral-900 max-h-[88vh] flex flex-col"
            >
              {/* iOS Mobile Drag Handle */}
              <div className="sm:hidden flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-neutral-300" />
              </div>

              {/* Top Accent Strip */}
              <div 
                style={{ backgroundColor: activeStation.themeColor }}
                className="h-2 w-full hidden sm:block"
              />

              <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto flex-1">
                {/* Close Button */}
                <button
                  onClick={() => setActiveStation(null)}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 h-8 w-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-neutral-700 shadow-sm flex items-center justify-center transition-colors border border-neutral-200/80"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Real Company Factory Photograph Banner */}
                <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs shrink-0">
                  <img
                    src={activeStation.image}
                    alt={activeStation.company}
                    className="object-cover object-center w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20">
                      {activeStation.estateZone}
                    </span>
                    <span className="text-[10px] font-mono text-white/90 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      <Building2 className="h-3 w-3" /> Facility View
                    </span>
                  </div>
                </div>

                {/* Location Place Header */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span 
                      style={{ color: activeStation.themeColor, backgroundColor: activeStation.badgeBg }}
                      className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                    >
                      {activeStation.fullPeriod}
                    </span>
                    {activeStation.current && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#007AFF] border border-blue-200">
                        Active Role
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug">
                    {activeStation.role}
                  </h3>

                  <div className="flex flex-col gap-1 text-xs text-neutral-600 pt-0.5">
                    <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: activeStation.themeColor }} />
                      <span>{activeStation.company}</span>
                    </p>
                    <p className="flex items-start gap-1 text-neutral-500 text-[11px] sm:text-xs">
                      <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{activeStation.address}</span>
                    </p>
                  </div>
                </div>

                {/* Key Technical Execution Achievements */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                    Execution &amp; Key Responsibilities:
                  </span>

                  <div className="space-y-2">
                    {activeStation.description.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neutral-50/90 border border-neutral-100 text-xs sm:text-[13px] text-neutral-700 leading-relaxed"
                      >
                        <CheckCircle2 
                          style={{ color: activeStation.themeColor }}
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5" 
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigators */}
                <div className="pt-2 sm:pt-3 flex items-center justify-between border-t border-neutral-100 gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" /> Previous
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                  >
                    Next <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
