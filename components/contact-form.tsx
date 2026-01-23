// src/components/contact-form.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input
        name="name"
        required
        placeholder="Your name"
        className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <textarea
        name="message"
        required
        placeholder="Message"
        rows={5}
        className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <button
        disabled={status === "loading"}
        className="px-5 py-2 rounded-md bg-blue-600 text-white"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
      {status === "sent" && (
        <p className="text-green-600">Thanks! I’ll get back soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Something went wrong.</p>
      )}
    </form>
  );
}
