"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.set("name", formData.name || "Kholoud Khaled");
    data.set("email", formData.email || "kholood@example.com");
    data.set("message", formData.message || "مرحبًا! هذه رسالة تجربة من خلود. 💖");

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((err) => alert("حدث خطأ: " + err));
  };

  const fillAndSend = () => {
    setFormData({
      name: "Kholoud Khaled",
      email: "kholood@example.com",
      message: "مرحبًا! هذه رسالة تجربة من خلود. 💖",
    });

    // ابعت البيانات مباشرة بعد الملء
    const data = new FormData();
    data.set("name", "Kholoud Khaled");
    data.set("email", "kholood@example.com");
    data.set("message", "مرحبًا! هذه رسالة تجربة من خلود. 💖");

    fetch("/", { method: "POST", body: data })
      .then(() => setSubmitted(true))
      .catch((err) => alert("حدث خطأ: " + err));
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-100 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-2">✅ شكراً!</h1>
        <p className="text-gray-700">تم إرسال رسالتك بنجاح 💖</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">اتركي ملاحظتك</h1>

      <button
        type="button"
        onClick={fillAndSend}
        className="mb-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
      >
        إرسال رسالة تجربة تلقائيًا
      </button>

      <form
        name="feedback"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="feedback" />

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border rounded p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني (اختياري)"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border rounded p-2"
        />

        <textarea
          name="message"
          placeholder="الرسالة"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="border rounded p-2 h-32"
        ></textarea>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          إرسال
        </button>
      </form>
    </div>
  );
          }
