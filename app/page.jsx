// app/page.jsx
import React from "react";

function Card({ title, body }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{body}</p>
    </div>
  );
}

function Step({ n, text }) {
  return (
    <li className="flex items-start gap-3">
      <div className="h-8 w-8 flex items-center justify-center rounded-full border font-semibold">
        {n}
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </li>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-600" />
            <span className="font-semibold">CloudWork Solutions</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#industries" className="hover:text-blue-600">Industries</a>
            <a href="#approach" className="hover:text-blue-600">Approach</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Cloud services and migration for growing Australian businesses
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We move your systems and data to the cloud, integrate your tools, and give you clear dashboards for better decisions.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow">
                Book a free consult
              </a>
              <a href="#services" className="px-5 py-3 rounded-2xl border font-medium">
                See services
              </a>
            </div>
            <p cl
