// src/components/contact-form.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(
        "https://gmail-bot-backend-w9ut.onrender.com/api/contact/mail-send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      console.log("Response:", response);
      const result = await response.json();
      console.log("Result:", result);

      if (result.statusCode === 201) {
        setStatus("success");
        alert(result?.message || "Message sent successfully!");
        setFormData({ name: "", email: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter Your Name"
        className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter Email Id"
        className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        placeholder="Message"
        rows={5}
        className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <button
        disabled={status === "loading"}
        className="px-5 py-2 rounded-md bg-blue-600 text-white disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
      {status === "success" && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
