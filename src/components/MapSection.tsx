import { MapPin } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export const MapSection = () => (
  <section className="h-[500px] w-full bg-slate-200 relative">
    {/* Placeholder for Google Map */}
    <div className="absolute inset-0 flex items-center justify-center bg-baby-blue/20 z-10">
      <div className="text-center">
        <MapPin className="w-12 h-12 text-baby-rose mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900">Find Us Here</h3>
        <p className="text-slate-600">{CONTACT_INFO.location}</p>
      </div>
    </div>
    <iframe 
      src={CONTACT_INFO.mapEmbed}
      className="w-full h-full border-0 grayscale opacity-60"
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Kids World Location Map"
    />
  </section>
);
