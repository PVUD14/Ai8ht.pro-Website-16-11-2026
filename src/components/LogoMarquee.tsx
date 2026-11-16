"use client";

import { Shield, Monitor, ClipboardCheck, Settings, BrainCircuit, Activity, Headphones, Crosshair } from "lucide-react";
import React from "react";

const services = [
  { name: "Cybersecurity Assessment", icon: Shield },
  { name: "Security Operations", icon: Monitor },
  { name: "Compliance & Training", icon: ClipboardCheck },
  { name: "Enterprise Operations", icon: Settings },
  { name: "AI & Analytics", icon: BrainCircuit },
  { name: "Threat Intelligence", icon: Crosshair },
  { name: "Risk Management", icon: Activity },
  { name: "IT Service Management", icon: Headphones },
];

export function LogoMarquee() {
  return (
    <div className="logo-marquee-wrapper">
      <div className="logo-marquee-track">
        {/* Render twice for seamless looping */}
        {[...services, ...services].map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="logo-item">
              <Icon size={18} className="logo-icon" />
              <span className="logo-name">{service.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
