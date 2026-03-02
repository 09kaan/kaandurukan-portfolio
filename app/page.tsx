import React from 'react';

const portfolioData = {
  name: "Kaan Durukan", // [cite: 1]
  role: "Bilgisayar Mühendisi", // [cite: 4]
  summary: "AI, gömülü sistemler ve full-stack geliştirme konularına odaklı bilgisayar mühendisliği mezunu. [cite: 4]",
  contact: {
    email: "kaandurukan09@hotmail.com", // [cite: 2]
    phone: "+90 543 285 97 42", // [cite: 2]
    github: "github.com/09kaan", // [cite: 2]
    linkedin: "linkedin.com/in/kaan-durukan" // [cite: 2]
  },
  skills: {
    programming: ["Python", "C++", "JavaScript", "Dart"], // [cite: 5]
    embedded: ["ESP32", "Arduino"], // [cite: 5]
    backend: ["Node.js", "REST APIs"], // [cite: 5]
    frontend: ["React", "Flutter"], // [cite: 5]
    db: ["Firebase", "SQL"], // [cite: 5]
    ai: ["YOLO", "OpenCV"], // [cite: 5]
    tools: ["Git", "Linux"] // [cite: 5]
  },
  experience: [
    { company: "Özgörkey Holding", role: "IT Intern", year: "2024", desc: "Kurumsal IT altyapısı ve sistem bakımı süreçlerinde destek. [cite: 5]" },
    { company: "Dijinet", role: "Software Development Intern", year: "2023", desc: "Backend servisleri ve veritabanı yönetimi. [cite: 5]" }
  ],
  projects: [
    { title: "SimpleTravel AI", tech: "React, Node.js, OpenAI API", desc: "AI destekli kişiselleştirilmiş seyahat planlama uygulaması. [cite: 5]" },
    { title: "Smart IoT Thermostat", tech: "Flutter, ESP32, Firebase", desc: "IoT tabanlı sıcaklık izleme ve mobil kontrol sistemi. [cite: 5]" },
    { title: "Autonomous Drone Vision", tech: "Jetson Nano, YOLO, Python, Flutter", desc: "Otonom drone için gerçek zamanlı nesne tespiti. [cite: 5]" }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">{portfolioData.name}</h1>
        <p className="text-xl text-gray-600">{portfolioData.role}</p>
        <p className="mt-4">{portfolioData.summary}</p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projeler</h2>
          {portfolioData.projects.map((p, i) => (
            <div key={i} className="mb-4 p-4 bg-white rounded shadow">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-sm text-blue-600">{p.tech}</p>
              <p className="text-sm">{p.desc}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Yetenekler</h2>
          <div className="bg-white p-4 rounded shadow">
            {Object.entries(portfolioData.skills).map(([key, val]) => (
              <p key={key} className="mb-2">
                <span className="font-bold capitalize">{key}: </span>
                {val.join(", ")}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}