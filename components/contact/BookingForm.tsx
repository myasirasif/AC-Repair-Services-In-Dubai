"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { problemOptions, whatsappLink } from "@/lib/site-config";

type Values = {
  name: string;
  phone: string;
  area: string;
  problem: string;
  property: string;
  time: string;
  details: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const propertyTypes = ["Apartment", "Villa", "Office"];
const times = ["As soon as possible", "Morning", "Afternoon", "Evening", "Night"];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^\+?[0-9\s-]{9,15}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.area.trim().length < 2) e.area = "Which area of Dubai are you in?";
  if (!v.problem) e.problem = "Please choose the problem.";
  return e;
}

function toMessage(v: Values) {
  return [
    "Hi, I would like to book an AC technician.",
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Area: ${v.area}`,
    `Problem: ${v.problem}`,
    `Property: ${v.property}`,
    `Preferred time: ${v.time}`,
    v.details && `Details: ${v.details}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function BookingForm() {
  const params = useSearchParams();
  const initialProblem = params.get("problem") ?? "";
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    area: "",
    problem: problemOptions.includes(initialProblem) ? initialProblem : "",
    property: propertyTypes[0],
    time: times[0],
    details: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function check() {
    const e = validate(values);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) document.getElementById(`f-${first}`)?.focus();
    return !first;
  }

  function sendWhatsApp() {
    if (!check()) return;
    window.open(whatsappLink(toMessage(values)), "_blank", "noopener,noreferrer");
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!check()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">Thanks, we have your request</h2>
        <p className="mt-2 text-slate">We will call you shortly. For the fastest reply, message us on WhatsApp too.</p>
        <button type="button" onClick={sendWhatsApp} className="btn-whatsapp mt-6 h-12 px-6">
          <WhatsAppIcon /> Send on WhatsApp
        </button>
      </div>
    );
  }

  const field = "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15";
  const border = (k: keyof Values) => (errors[k] ? "border-red-500" : "border-ink/15");
  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-1 text-sm text-red-600">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Values) => ({
    id: `f-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `e-${k}` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-card md:p-8">
      <h2 className="font-display text-2xl font-bold text-ink">Book a technician</h2>
      <p className="mt-1 text-sm text-slate">Fields marked * are required. We reply fastest on WhatsApp.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="text-sm font-semibold text-ink">Name *</label>
          <input {...aria("name")} autoComplete="name" value={values.name} onChange={set("name")} className={`${field} ${border("name")}`} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="f-phone" className="text-sm font-semibold text-ink">Phone *</label>
          <input {...aria("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="05X XXX XXXX" value={values.phone} onChange={set("phone")} className={`${field} ${border("phone")}`} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="f-area" className="text-sm font-semibold text-ink">Area in Dubai *</label>
          <input {...aria("area")} placeholder="e.g. JLT, Al Barsha" value={values.area} onChange={set("area")} className={`${field} ${border("area")}`} />
          {err("area")}
        </div>
        <div>
          <label htmlFor="f-problem" className="text-sm font-semibold text-ink">Problem *</label>
          <select {...aria("problem")} value={values.problem} onChange={set("problem")} className={`${field} ${border("problem")}`}>
            <option value="">Choose a problem</option>
            {problemOptions.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          {err("problem")}
        </div>
        <fieldset>
          <legend className="text-sm font-semibold text-ink">Property type</legend>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {propertyTypes.map((p) => (
              <label key={p} className="cursor-pointer">
                <input type="radio" name="property" value={p} checked={values.property === p} onChange={set("property")} className="peer sr-only" />
                <span className="block rounded-xl border border-ink/15 py-3 text-center text-sm font-medium text-slate transition peer-checked:border-brand-blue peer-checked:bg-brand-blue/10 peer-checked:text-brand-deep peer-focus-visible:ring-4 peer-focus-visible:ring-brand-blue/30">
                  {p}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="f-time" className="text-sm font-semibold text-ink">Preferred time</label>
          <select id="f-time" value={values.time} onChange={set("time")} className={`${field} border-ink/15`}>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-details" className="text-sm font-semibold text-ink">Describe the issue</label>
          <textarea id="f-details" rows={4} value={values.details} onChange={set("details")} placeholder="What is the AC doing? Brand, number of units, anything we should know." className={`${field} border-ink/15`} />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          Something went wrong sending the form. Please use WhatsApp or call us instead.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={sendWhatsApp} className="btn-whatsapp h-13 flex-1 py-3.5 text-base">
          <WhatsAppIcon /> Send on WhatsApp
        </button>
        <button type="submit" disabled={status === "loading"} className="btn-outline h-13 flex-1 py-3.5 text-base disabled:opacity-60">
          {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
          {status === "loading" ? "Sending..." : "Send request"}
        </button>
      </div>
    </form>
  );
}
