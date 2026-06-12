"use client";

import { FormEvent, useState } from "react";
import type { SiteContent } from "@/content/types";
import { getWhatsAppContact, whatsappUrl } from "@/lib/whatsapp";

function Field({
  label,
  name,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ocean">
      <span>{label}</span>
      <input
        className="rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-muted/60 focus:border-gold"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}

export function ContactForm({ content }: { content: SiteContent }) {
  const [submitted, setSubmitted] = useState(false);
  const form = content.contactPage.form;
  const whatsappContact = getWhatsAppContact(content.contactPage.contacts);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `${form.name}: ${formData.get("name")}`,
      `${form.whatsapp}: ${formData.get("whatsapp")}`,
      `${form.country}: ${formData.get("country")}`,
      `${form.month}: ${formData.get("month")}`,
      `${form.adults}: ${formData.get("adults")}`,
      `${form.children}: ${formData.get("children") || "0"}`,
      `${form.tripType}: ${formData.get("tripType")}`,
      `${form.message}: ${formData.get("message")}`,
    ];

    setSubmitted(true);
    window.open(whatsappUrl(whatsappContact, lines.join("\n")));
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={form.name} name="name" required />
        <Field label={form.whatsapp} name="whatsapp" required type="tel" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={form.country} name="country" required />
        <Field label={form.month} name="month" required />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <Field label={form.adults} name="adults" required type="number" />
        <Field label={form.children} name="children" type="number" />
        <label className="grid gap-2 text-sm font-bold text-ocean">
          <span>{form.tripType}</span>
          <select
            className="rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-gold"
            name="tripType"
            required
          >
            {form.tripOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-ocean">
        <span>{form.message}</span>
        <textarea
          className="min-h-36 resize-y rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-gold"
          name="message"
          required
        />
      </label>

      {submitted && (
        <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4 text-ocean">
          <p className="font-black">{form.successTitle}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{form.successMessage}</p>
        </div>
      )}

      <button
        className="rounded-full bg-ocean px-7 py-4 text-base font-black text-white shadow-[0_18px_40px_rgba(6,61,76,0.22)] transition hover:-translate-y-0.5 hover:bg-[#052f3a]"
        type="submit"
      >
        {form.submit}
      </button>
    </form>
  );
}
