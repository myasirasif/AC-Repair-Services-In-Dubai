// All company data lives here. Values marked TODO must be confirmed by the client before launch.

const phoneE164 = "+971502055426";
const whatsappNumber = "971502055426";

export const siteConfig = {
  // TODO: working name only — replace with the registered trade name before launch (see README).
  name: "AC Repair Services Dubai",
  shortName: "AC Repair Dubai",
  descriptor: "AC Repair Services in Dubai",
  tagline: "Cool Again, Today",
  subline: "24/7 AC repair, servicing and installation across Dubai",
  url: "https://ac-repairservicedubai.com", // TODO: confirm production domain
  phone: {
    display: "050 205 5426",
    international: "+971 50 205 5426",
    href: `tel:${phoneE164}`,
  },
  whatsapp: {
    number: whatsappNumber,
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help with my AC.")}`,
  },
  email: null as string | null, // TODO: client to supply a public email address
  address: {
    street: "Khalid Al Attar Hotel and Office Tower, Sheikh Zayed Road",
    locality: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
    full: "Khalid Al Attar Hotel and Office Tower, Sheikh Zayed Road, Dubai, UAE",
  },
  geo: { lat: 25.2197, lng: 55.2803 }, // approximate tower location — TODO: confirm pin
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=AC+Repair+Services+In+Dubai+0502055426",
  mapEmbed:
    "https://www.google.com/maps?q=Khalid+Al+Attar+Tower+Sheikh+Zayed+Road+Dubai&output=embed",
  hours: { label: "Open 24 hours, 7 days a week", short: "Open 24/7" },
  rating: { value: 4.8, count: 50 },
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  short: string;
  summary: string;
  covers: string[];
  turnaround: string;
  icon: "wrench" | "sparkles" | "gauge" | "wind" | "air-vent" | "calendar";
  problem: string;
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    id: "ac-repair",
    slug: "AC Repair",
    title: "AC Repair",
    short: "Not cooling, leaking, noisy or tripping. Diagnosis and a same-day fix.",
    summary:
      "AC not cooling in the Dubai heat? We diagnose the fault on site, quote a fixed price and fix it, often the same day.",
    covers: [
      "AC not cooling or cooling weakly",
      "Water leaking from the indoor unit",
      "Unusual noise or vibration",
      "Bad smell from the vents",
      "Tripping breakers and power faults",
      "Thermostat and control faults",
    ],
    turnaround: "Same-day in most cases",
    icon: "wrench",
    problem: "Not Cooling",
    image: { src: "/images/technician-repairing-ac-unit.jpg", alt: "Technician testing wiring inside an air conditioning unit during a repair" },
  },
  {
    id: "ac-servicing",
    slug: "AC Servicing",
    title: "AC Servicing and Preventive Maintenance",
    short: "Cleaning, component testing and troubleshooting to keep it efficient.",
    summary:
      "Regular AC servicing in Dubai keeps your system clean, improves cooling, saves energy and prevents costly repairs.",
    covers: [
      "Filter cleaning or replacement",
      "Indoor and outdoor coil cleaning",
      "Gas level and pressure check",
      "Fan, motor and drain line check",
      "Performance tune-up and testing",
    ],
    turnaround: "About 1 to 2 hours per unit",
    icon: "sparkles",
    problem: "AC Servicing",
    image: { src: "/images/condenser-coil-cleaning.jpg", alt: "Technician pressure-washing AC condenser coils during a service" },
  },
  {
    id: "ac-gas-refill",
    slug: "Gas Refilling",
    title: "AC Gas Refilling and Leak Repair",
    short: "Leak detection first, then a correct refrigerant top-up.",
    summary:
      "Weak cooling is often low refrigerant. For AC gas refill in Dubai we find and repair the leak first, so the new charge lasts.",
    covers: [
      "Refrigerant leak detection",
      "Leak repair and brazing",
      "Pressure testing",
      "Refrigerant top-up to spec",
    ],
    turnaround: "Same visit where parts allow",
    icon: "gauge",
    problem: "Gas Refill",
    image: { src: "/images/gas-pressure-gauges-refill.jpg", alt: "Technician connecting refrigerant pressure gauges to an AC system" },
  },
  {
    id: "ac-duct-cleaning",
    slug: "Duct Cleaning",
    title: "AC Duct Cleaning",
    short: "Removes dust, mould and odour for cleaner air and better airflow.",
    summary:
      "AC duct cleaning in Dubai improves air quality, airflow and system efficiency, and removes the source of musty smells.",
    covers: [
      "Supply and return duct cleaning",
      "Debris removal from plenums, fans and coils",
      "Mould and odour treatment",
      "Grille and diffuser cleaning",
    ],
    turnaround: "Typically completed in one visit",
    icon: "wind",
    problem: "Bad Smell",
    image: { src: "/images/duct-insulation-work.jpg", alt: "Technician working on insulated refrigerant and duct lines inside an AC unit" },
  },
  {
    id: "ac-installation",
    slug: "AC Installation",
    title: "AC Installation",
    short: "New split and window units, relocation, replacement and dismantling.",
    summary:
      "New split and window AC installation, plus relocation, replacement and safe dismantling of old systems.",
    covers: [
      "New split and window unit installation",
      "Relocation of existing units",
      "Replacement of old or failed units",
      "System dismantlement",
      "Commissioning and testing",
    ],
    turnaround: "Scheduled at a time that suits you",
    icon: "air-vent",
    problem: "AC Installation",
    image: { src: "/images/outdoor-split-unit-installation.jpg", alt: "Technician tightening refrigerant pipe fittings with wrenches during an AC installation" },
  },
  {
    id: "ac-maintenance-contracts",
    slug: "Maintenance Contracts",
    title: "Annual Maintenance Contracts",
    short: "Scheduled servicing for villas, apartments and offices.",
    summary:
      "Planned AC maintenance for villas, apartments and offices, so problems are caught early instead of on the hottest day of the year.",
    covers: [
      "Scheduled servicing visits",
      "Filter and coil cleaning",
      "Inspection of all units",
      "Priority emergency call-outs",
    ],
    turnaround: "Plan agreed upfront",
    icon: "calendar",
    problem: "Maintenance Contract",
    image: { src: "/images/rooftop-ac-units-maintenance.jpg", alt: "Rooftop packaged AC units on a commercial building" },
  },
];

export const symptoms = [
  { label: "Not Cooling", hint: "Warm air or weak cooling" },
  { label: "Water Leaking", hint: "Dripping from the indoor unit" },
  { label: "Making Noise", hint: "Rattling, buzzing or grinding" },
  { label: "Bad Smell", hint: "Musty or burning odour" },
  { label: "Not Turning On", hint: "No power or no response" },
  { label: "High Electricity Bill", hint: "DEWA bill keeps climbing" },
] as const;

export const problemOptions = [
  ...symptoms.map((s) => s.label),
  "Gas Refill",
  "AC Servicing",
  "AC Installation",
  "Maintenance Contract",
  "Other",
];

export const areas = [
  "Downtown",
  "Business Bay",
  "Marina",
  "JLT",
  "Al Barsha",
  "Jumeirah",
  "Deira",
  "Sheikh Zayed Road",
  "Silicon Oasis",
  "JVC",
];

export const steps = [
  { title: "Message us on WhatsApp", text: "Tell us what the AC is doing. A photo or short video helps." },
  { title: "We diagnose and quote", text: "A technician checks the fault and gives you a fixed price first." },
  { title: "We fix it", text: "Repair, clean or refill, done properly with the right parts." },
  { title: "You pay only after it works", text: "We test the cooling with you before you pay." },
];

export const reasons = [
  { title: "Available 24 hours, including weekends", text: "Day or night, call or message and we respond." },
  { title: "Fixed price quoted before any work starts", text: "No surprises. You approve the price first." },
  { title: "Experienced AC technicians only", text: "Split, window and ducted systems in homes and offices." },
  { title: "Fast response across Dubai", text: "From Sheikh Zayed Road to Deira, Marina and JVC." },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
