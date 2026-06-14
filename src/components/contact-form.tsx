"use client";

import { FormEvent, useState } from "react";
import { z } from "zod";
import type { FormOption, SiteContent } from "@/content/types";
import { getWhatsAppContact, whatsappUrl } from "@/lib/whatsapp";

type FormErrors = Partial<Record<string, string>>;

function optionLabel(options: FormOption[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function buildSchema(form: SiteContent["contactPage"]["form"]) {
  return z.object({
    name: z.string().trim().min(2, form.required),
    countryCode: z.string().trim().min(1, form.required),
    contactNumber: z
      .string()
      .trim()
      .min(1, form.required)
      .refine((value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 6 && digits.length <= 15;
      }, form.invalidPhone),
    country: z.string().trim().min(1, form.required),
    month: z.string().trim().min(1, form.required),
    adults: z
      .string()
      .trim()
      .min(1, form.required)
      .regex(/^[1-9]\d?$/, form.invalidNumber),
    children: z
      .string()
      .trim()
      .regex(/^\d{0,2}$/, form.invalidNumber),
    tripType: z.string().trim().min(1, form.required),
    message: z.string().trim().min(5, form.required),
  });
}

function fieldError(errors: FormErrors, name: string) {
  return errors[name] ? (
    <p className="text-sm font-semibold text-red-700">{errors[name]}</p>
  ) : null;
}

function TextField({
  label,
  name,
  errors,
  type = "text",
}: {
  label: string;
  name: string;
  errors: FormErrors;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ocean">
      <span>{label}</span>
      <input
        className="rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-muted/60 focus:border-gold"
        name={name}
        type={type}
      />
      {fieldError(errors, name)}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  errors,
}: {
  label: string;
  name: string;
  options: FormOption[];
  placeholder: string;
  errors: FormErrors;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ocean">
      <span>{label}</span>
      <select
        className="rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-gold"
        defaultValue=""
        name={name}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {fieldError(errors, name)}
    </label>
  );
}

export function ContactForm({ content }: { content: SiteContent }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const form = content.contactPage.form;
  const whatsappContact = getWhatsAppContact(content.contactPage.contacts);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rawValues = {
      name: String(formData.get("name") ?? ""),
      countryCode: String(formData.get("countryCode") ?? ""),
      contactNumber: String(formData.get("contactNumber") ?? ""),
      country: String(formData.get("country") ?? ""),
      month: String(formData.get("month") ?? ""),
      adults: String(formData.get("adults") ?? ""),
      children: String(formData.get("children") ?? ""),
      tripType: String(formData.get("tripType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = buildSchema(form).safeParse(rawValues);

    if (!parsed.success) {
      const nextErrors = parsed.error.issues.reduce<FormErrors>(
        (acc, issue) => {
          const key = issue.path[0];
          if (typeof key === "string" && !acc[key]) {
            acc[key] = issue.message;
          }
          return acc;
        },
        {}
      );

      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    const values = parsed.data;
    const fullContactNumber = `${
      values.countryCode
    } ${values.contactNumber.replace(/\s+/g, " ")}`;
    const lines = [
      `${form.name}: ${values.name}`,
      `${form.contactNumber}: ${fullContactNumber}`,
      `${form.country}: ${optionLabel(form.countryOptions, values.country)}`,
      `${form.month}: ${optionLabel(form.monthOptions, values.month)}`,
      `${form.adults}: ${values.adults}`,
      `${form.children}: ${values.children || "0"}`,
      `${form.tripType}: ${optionLabel(form.tripOptions, values.tripType)}`,
      `${form.message}: ${values.message}`,
    ];

    setErrors({});
    setSubmitted(true);
    window.open(whatsappUrl(whatsappContact, lines.join("\n")));
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={onSubmit}>
      <TextField errors={errors} label={form.name} name="name" />

      <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
        <SelectField
          errors={errors}
          label={form.countryCode}
          name="countryCode"
          options={form.countryCodeOptions}
          placeholder={form.selectPlaceholder}
        />
        <TextField
          errors={errors}
          label={form.contactNumber}
          name="contactNumber"
          type="tel"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <SelectField
          errors={errors}
          label={form.country}
          name="country"
          options={form.countryOptions}
          placeholder={form.selectPlaceholder}
        />
        <SelectField
          errors={errors}
          label={form.month}
          name="month"
          options={form.monthOptions}
          placeholder={form.selectPlaceholder}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          errors={errors}
          label={form.adults}
          name="adults"
          type="number"
        />
        <TextField
          errors={errors}
          label={form.children}
          name="children"
          type="number"
        />
      </div>

      <SelectField
        errors={errors}
        label={form.tripType}
        name="tripType"
        options={form.tripOptions}
        placeholder={form.selectPlaceholder}
      />

      <label className="grid gap-2 text-sm font-bold text-ocean">
        <span>{form.message}</span>
        <textarea
          className="min-h-36 resize-y rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-gold"
          name="message"
        />
        {fieldError(errors, "message")}
      </label>

      {submitted && (
        <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4 text-ocean">
          <p className="font-black">{form.successTitle}</p>
          <p className="mt-1 text-sm leading-6 text-muted">
            {form.successMessage}
          </p>
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
