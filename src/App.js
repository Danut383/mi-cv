import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Daniel Avalos Rojas</h1>
          <p className="text-gray-600">Colima, México</p>
          <p className="text-blue-600">
            <a href="https://www.linkedin.com/in/AvalosRojasDaniel" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/AvalosRojasDaniel
            </a>
          </p>
          <p>+52 2811371586 · danuel.unu@gmail.com</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Perfil</h2>
          <p>
            Estudiante de Ingeniería en Informática en el Instituto Tecnológico de Colima (2021-2025), especializado
            en desarrollo Full Stack. Experiencia con Django, Laravel, Node.js, HTML, CSS, JavaScript, Tailwind CSS,
            Bootstrap, SQL, MySQL, MongoDB y Docker.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Educación</h2>
          <p><strong>Instituto Tecnológico de Colima</strong> - Ingeniería en Informática (2021-2025)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Habilidades Técnicas</h2>
          <ul className="list-disc list-inside">
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, Figma</li>
            <li><strong>Backend:</strong> Django, Laravel, Node.js, Express.js</li>
            <li><strong>Bases de Datos:</strong> MySQL, SQL, MongoDB</li>
            <li><strong>Herramientas:</strong> Docker, Git, GitHub, Postman</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Proyectos y Experiencia</h2>
          <ul className="list-disc list-inside">
            <li>Instructor del curso de diseño UI/UX con Figma en 2024</li>
            <li>Desarrollo Full Stack de aplicaciones web con autenticación y APIs RESTful</li>
            <li>Uso de Docker para despliegue de apps y manejo de bases de datos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Habilidades Adicionales</h2>
          <ul className="list-disc list-inside">
            <li><strong>Idiomas:</strong> Español (Nativo), Inglés (Intermedio)</li>
            <li><strong>Metodologías Ágiles:</strong> Scrum, Kanban</li>
            <li><strong>Soft Skills:</strong> Comunicación efectiva, resolución de problemas, trabajo en equipo</li>
          </ul>
        </section>
      </div>
    </div>
  );
}