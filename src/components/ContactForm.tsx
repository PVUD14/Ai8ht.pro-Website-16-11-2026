"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id="contact-form" style={{ scrollMarginTop: 110 }} className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
      {status === "success" && (
        <div className="form-status success" role="status">
          Thank you. Your message has been submitted.
        </div>
      )}
      {status === "error" && (
        <div className="form-status error" role="alert">
          Failed to send message. Please try again or email us directly.
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" required placeholder="John Doe" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Work Email *</label>
        <input type="email" id="email" name="email" required placeholder="john@example.com" />
      </div>

      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <input type="text" id="organization" name="organization" placeholder="Your Company Name" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required placeholder="How can we help you?"></textarea>
      </div>

      <button type="submit" className="button primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send size={18} />}
      </button>
    </form>
  );
}
