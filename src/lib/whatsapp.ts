import type { Contact } from "@/content/types";

export function whatsappUrl(contact: Contact, message?: string) {
  const phone = contact.phone.replace(/\D/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${phone}${query}`;
}

export function getWhatsAppContact(contacts: Contact[]) {
  return contacts.find((contact) => contact.whatsapp) ?? contacts[0];
}
