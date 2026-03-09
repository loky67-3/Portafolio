import React, { useState, useEffect, useRef } from "react";

// Componente Skeleton para la carga
const SkeletonHome = () => {
  return (
    <div className="page-container skeleton-page">
      {/* Navbar Skeleton */}
      <nav className="navbar" style={{ position: 'relative', background: '#fff', borderBottom: '1px solid #eee' }}>
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="skeleton" style={{ width: '100px', height: '30px' }}></div>
            <div className="nav-links" style={{ gap: '20px' }}>
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="skeleton" style={{ width: '60px', height: '15px' }}></div>)}
            </div>
          </div>
          <div className="navbar-right">
            <div className="skeleton" style={{ width: '80px', height: '35px', borderRadius: '4px' }}></div>
          </div>
        </div>
      </nav>

      {/* Hero Skeleton */}
      <section className="hero-section" style={{ backgroundImage: 'none', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <div className="hero-content" style={{ width: '100%' }}>
          <div className="skeleton skeleton-title" style={{ width: '50%', height: '60px', margin: '0 auto 20px' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '70%', height: '20px', margin: '0 auto 10px' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '60%', height: '20px', margin: '0 auto 40px' }}></div>
          <div className="skeleton skeleton-btn" style={{ margin: '0 auto' }}></div>
          <div className="hero-features" style={{ marginTop: '80px', justifyContent: 'center' }}>
            {[1, 2, 3].map(i => (
              <div key={i} className="feature-item" style={{ alignItems: 'center' }}>
                <div className="skeleton skeleton-circle" style={{ width: '50px', height: '50px', backgroundColor: '#ddd' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '100px', marginTop: '10px', backgroundColor: '#ddd' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Skeleton */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>
          </div>
          <div className="about-content">
            <div className="skeleton" style={{ width: '100px', height: '20px', marginBottom: '15px' }}></div>
            <div className="skeleton" style={{ width: '300px', height: '40px', marginBottom: '25px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '15px', marginBottom: '10px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '15px', marginBottom: '10px' }}></div>
            <div className="skeleton" style={{ width: '80%', height: '15px', marginBottom: '10px' }}></div>
            <div className="about-stats">
              {[1, 2, 3].map(i => (
                <div key={i} className="stat-item" style={{ width: '100px' }}>
                  <div className="skeleton" style={{ width: '60px', height: '40px', marginBottom: '5px' }}></div>
                  <div className="skeleton" style={{ width: '80px', height: '15px' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Skeleton */}
      <section className="skills-section">
        <div className="skills-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="skeleton" style={{ width: '150px', height: '20px', marginBottom: '15px' }}></div>
          <div className="skeleton" style={{ width: '400px', height: '40px', marginBottom: '20px' }}></div>
        </div>
        <div className="skills-grid">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="skill-card">
              <div className="skeleton skeleton-circle" style={{ margin: '0 auto 25px' }}></div>
              <div className="skeleton" style={{ width: '150px', height: '25px', margin: '0 auto 15px' }}></div>
              <div className="skeleton" style={{ width: '100%', height: '15px', marginBottom: '10px' }}></div>
              <div className="skeleton" style={{ width: '100%', height: '100px' }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="stats-section" style={{ background: '#f0f0f0' }}>
        <div className="stats-container">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="stat-box">
              <div className="skeleton" style={{ width: '80px', height: '60px', marginBottom: '10px', background: '#ddd' }}></div>
              <div className="skeleton" style={{ width: '120px', height: '20px', background: '#ddd' }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className="projects-section">
        <div className="skeleton" style={{ width: '400px', height: '40px', margin: '0 auto 60px' }}></div>
        <div className="projects-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="project-item" style={{ height: '450px', border: 'none' }}>
              <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Skeleton */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info-wrapper">
            {[1, 2, 3].map(i => (
              <div key={i} className="contact-info-item">
                <div className="skeleton skeleton-circle" style={{ width: '50px', height: '50px', marginRight: '20px' }}></div>
                <div style={{ flex: 1 }}>
                  <div className="skeleton" style={{ width: '100px', height: '20px', marginBottom: '5px' }}></div>
                  <div className="skeleton" style={{ width: '150px', height: '15px' }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form-wrapper">
            <div className="form-group">
              <div className="skeleton" style={{ width: '100%', height: '50px' }}></div>
              <div className="skeleton" style={{ width: '100%', height: '50px' }}></div>
            </div>
            <div className="skeleton" style={{ width: '100%', height: '50px', marginBottom: '20px' }}></div>
            <div className="skeleton" style={{ width: '100%', height: '150px', marginBottom: '20px' }}></div>
            <div className="skeleton" style={{ width: '150px', height: '50px' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ handleNavigate }) => {
  const serviceCategories = [
    { id: 'desarrollo', name: 'Desarrollo Web', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
    { id: 'ecommerce', name: 'E-Commerce', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> },
    { id: 'movil', name: 'Apps Móviles', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
    { id: 'diseno', name: 'Diseño UI/UX', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg> },
    { id: 'consultoria', name: 'Consultoría TI', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { id: 'seguridad', name: 'Seguridad', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
  ];

  const serviceCards = [
    { id: 1, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>, title: 'Landing Pages de Alto Impacto', description: 'Páginas de aterrizaje optimizadas para la máxima conversión de clientes.' },
    { id: 2, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>, title: 'Sitios Web Corporativos', description: 'Proyecta una imagen profesional y sólida con un sitio web a la medida.' },
    { id: 3, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>, title: 'Aplicaciones Web (SPA)', description: 'Desarrollo de aplicaciones complejas, rápidas y escalables con React o Next.js.' },
    { id: 4, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>, title: 'Tiendas en Línea (E-commerce)', description: 'Soluciones completas de comercio electrónico con pasarelas de pago seguras.' },
    { id: 5, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'Blogs y Sistemas de Contenido', description: 'Plataformas autogestionables para que publiques tu contenido fácilmente.' },
    { id: 6, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>, title: 'Apps para iOS y Android', description: 'Aplicaciones nativas o híbridas para llegar a tus usuarios en cualquier dispositivo.' },
    { id: 7, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>, title: 'Diseño de Interfaz de Usuario (UI)', description: 'Creación de interfaces visualmente atractivas, intuitivas y coherentes con tu marca.' },
    { id: 8, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12c0-5.25-4.25-9.5-9.5-9.5S2.5 6.75 2.5 12s4.25 9.5 9.5 9.5c.83 0 1.64-.11 2.4-.31"></path><path d="M16 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5.5.25.5.5"></path><path d="M8 8.5c0 .83-.67 1.5-1.5 1.5S5 9.33 5 8.5 5.67 7 6.5 7s1.5.67 1.5 1.5z"></path><path d="M15.5 14.5c-1.5 0-2.5 1-2.5 2"></path></svg>, title: 'Análisis de Experiencia de Usuario (UX)', description: 'Investigación y prototipado para asegurar que tu producto sea fácil y agradable de usar.' },
    { id: 9, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>, title: 'Desarrollo de APIs REST/GraphQL', description: 'Creación de backends robustos para comunicar tus apps con servidores y bases de datos.' },
    { id: 10, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>, title: 'Arquitectura de Microservicios', description: 'Diseño de sistemas escalables y desacoplados para aplicaciones de gran envergadura.' },
    { id: 11, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, title: 'Auditoría de Seguridad', description: 'Análisis de vulnerabilidades y fortalecimiento de la seguridad de tus aplicaciones web.' },
    { id: 12, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>, title: 'Optimización de Rendimiento Web', description: 'Mejora de la velocidad de carga y la eficiencia para una mejor experiencia y SEO.' },
    { id: 13, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>, title: 'Consultoría Tecnológica', description: 'Asesoramiento experto para elegir la mejor arquitectura y tecnologías para tu proyecto.' },
    { id: 14, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, title: 'Mantenimiento y Soporte', description: 'Planes de soporte para garantizar que tu aplicación esté siempre actualizada y funcionando.' },
    { id: 15, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>, title: 'Integración de Servicios de Terceros', description: 'Conexión de tu plataforma con APIs externas como redes sociales, mapas, etc.' },
  ];

  return (
    <div className="services-page-layout">
      <aside className="services-sidebar">
        <div className="services-sidebar-header">
          <h2 className="services-sidebar-logo">BN</h2>
          <button onClick={() => handleNavigate('home')}>&larr; Volver al Inicio</button>
        </div>
        <nav className="services-sidebar-nav">
          <ul>
            {serviceCategories.map(cat => (
              <li key={cat.id}>
                <a href={`#${cat.id}`}>
                  {cat.icon}
                  <span>{cat.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="services-content-main">
        <header className="services-content-header">
          <h1>Catálogo de Servicios</h1>
          <p>Explora nuestra gama completa de soluciones digitales, diseñadas para llevar tu proyecto al siguiente nivel con tecnología de punta y un enfoque en resultados.</p>
        </header>
        <div className="services-grid-container">
          {serviceCards.map(card => (
            <div className="service-detail-card" key={card.id}>
              <div className="service-detail-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const Home = () => {
  // Lógica de carga (Skeleton)
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('home');

  useEffect(() => {
    const faviconUrl = "https://img.freepik.com/vetores-premium/bn-monogram-logo-design-letra-texto-nome-simbolo-logotipo-monocromatico-alfabeto-caractere-logotipo-simples_955145-5500.jpg";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page) => {
    setView(page);
    window.scrollTo(0, 0); // Asegura que la nueva vista se muestre desde arriba
  };

  // Lógica para el navbar con scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Lógica para el Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const featuresContent = {
    seguridad: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      title: "Seguridad de Nivel Bancario",
      text: "Implemento arquitecturas robustas y las mejores prácticas de seguridad, como la encriptación de datos (HTTPS), protección contra ataques XSS y CSRF, y validación exhaustiva de entradas para garantizar que la información de tus usuarios y tu negocio esté siempre protegida."
    },
    rendimiento: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
      title: "Rendimiento y Velocidad Excepcionales",
      text: "Optimizo cada aspecto del rendimiento, desde la compresión de imágenes y el 'lazy loading' de recursos hasta la optimización del 'bundle' de JavaScript y el renderizado del lado del servidor (SSR). El resultado es una experiencia de usuario ultra-rápida que mejora el SEO."
    },
    calidad: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
      title: "Calidad de Código Verificada",
      text: "Mi proceso de desarrollo incluye pruebas unitarias, de integración y 'end-to-end' para asegurar un software libre de errores y altamente mantenible. Utilizo linters y un estricto control de versiones (Git) para garantizar un código limpio, legible y escalable."
    }
  };

  const openModal = (feature) => {
    setModalData(featuresContent[feature]);
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  // Lógica del Hero Slider (Carrusel tipo Santander)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
      title: "Bienvenido a nuestro desarrollo y variedad",
      subtitle: "Desarrollamos soluciones criativas y significativas",
      buttonText: "Consultar Servicios"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/originals/08/16/e5/0816e5b7f4f27db34360bb045f309ad1.gif",
      title: "La Era Dijital ",
      subtitle: "Seguridad Confiable",
      buttonText: "Ver Tecnología"
    },
    {
      id: 3,
      image: "https://static.vecteezy.com/system/resources/previews/030/673/420/large_2x/product-shots-of-caffeine-free-mountain-dew-high-free-photo.jpg",
      title: "Diseños y una amplia Variedad",
      subtitle: "Más que un proveedor, un aliado comprometido con tus objetivos y el crecimiento",
      buttonText: "Contáctanos Hoy"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  // Lógica para la animación de números
  const [stats, setStats] = useState({ clients: 0, projects: 0, hours: 0, awards: 0 });
  const statsSectionRef = useRef(null);

  // Lógica para el carrusel de testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Roberto Méndez",
      role: "Finanzas, Grupo",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
      quote: "La seguridad y la eficiencia eran nuestras prioridades. El resultado final no solo cumplió, sino que redefinió nuestros estándares operativos. Un trabajo de clase.",
      rating: 5
    },
    {
      id: 2,
      name: "Laura Torres",
      role: " Marketing",
      image: "https://tse1.mm.bing.net/th/id/OIP._zVfi6qkbLXzuHl4f-TAbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      quote: "Un diseño excepcional que captura perfectamente la esencia de nuestra marca. La atención al detalle y la experiencia de usuario son simplemente impresionantes.",
      rating: 5
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      role: " TechSolutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      quote: "La capacidad merjor capacidad tecnica desarrollada",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let counterId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          const finalStats = { clients: 150, projects: 80, hours: 5000, awards: 12 };
          let frame = 0;

          if (counterId) clearInterval(counterId);

          counterId = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const ease = 1 - Math.pow(1 - progress, 4);

            setStats({
              clients: Math.round(finalStats.clients * ease),
              projects: Math.round(finalStats.projects * ease),
              hours: Math.round(finalStats.hours * ease),
              awards: Math.round(finalStats.awards * ease),
            });

            if (frame === totalFrames) {
              clearInterval(counterId);
            }
          }, frameDuration);
        } else {
          if (counterId) clearInterval(counterId);
          setStats({ clients: 0, projects: 0, hours: 0, awards: 0 });
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = statsSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      if (counterId) clearInterval(counterId);
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const phoneNumber = "52 312 221 3326"; // Tu número de WhatsApp (cámbialo por el real)
    
    const text = `Hola, soy ${name}.\nEmail: ${email}\nAsunto: ${subject}\n\nMensaje: ${message}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    window.open(`${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(text)}`, '_blank');
  };

  if (view === 'services') {
    return <ServicesPage handleNavigate={handleNavigate} />;
  }

  if (isLoading) {
    return <SkeletonHome />;
  }

  return (
    <div className="page-container">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">

          <div className="navbar-left">
            <div className="logo">BN</div>

            <ul className="nav-links desktop-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="navbar-right">
            <ul className="nav-links desktop-links">
              <li><a href="#" className="nav-icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Login</span>
              </a></li>
              <li><button className="btn-register">
                <span>Registro</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button></li>
            </ul>
            <button className="hamburger-menu" onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

        </div>
      </nav>

      <div className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">BN</div>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="sidebar-content-scroll">
          <div className="sidebar-section-label">NAVEGACIÓN PRINCIPAL</div>
          <ul className="sidebar-links">
            <li><a href="#" onClick={() => handleNavigate('home')}>
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Inicio</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#" onClick={() => handleNavigate('services')}>
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                <span>Servicios</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <span>Proyectos</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Nosotros</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                <span>Blog</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                <span>Inversiones</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Seguros</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <span>Mundo Digital</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
          </ul>

          <div className="sidebar-section-label">TE INTERESA</div>
          <ul className="sidebar-links">
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>Contacto</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
            <li><a href="#">
              <div className="link-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>Ayuda</span>
              </div>
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a></li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <button className="btn-blue-sidebar">
            <span>Acceso Clientes</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          </button>
          <button className="btn-register full-width">
                <span>Hacerse Cliente</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
        </div>
      </aside>

      <section className="hero-section">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`hero-slide ${index === currentHeroSlide ? 'active' : ''}`}
          >
            <div className="hero-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div className="hero-overlay-gradient"></div>
            <div className="hero-content container-slide">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="hero-button" onClick={() => handleNavigate('services')}>
                <span>{slide.buttonText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        ))}

        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator-dot ${index === currentHeroSlide ? 'active' : ''}`}
              onClick={() => setCurrentHeroSlide(index)}
            ></button>
          ))}
        </div>

        <div className="hero-features">
          <div className="feature-item" onClick={() => openModal('seguridad')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>Seguridad Garantizada</span>
          </div>
          <div className="feature-item" onClick={() => openModal('rendimiento')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            <span>Alto Rendimiento</span>
          </div>
          <div className="feature-item" onClick={() => openModal('calidad')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Calidad Verificada</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src="https://img.freepik.com/fotos-premium/empresario-o-empresario-caricatura-caricatura-ilustracion-hombre-negocios_691560-8062.jpg?w=740" alt="perfil"></img>
          </div>
          <div className="about-content">
            <span className="about-subtitle">SOBRE MÍ</span>
            <h2>Desarrollador de Soluciones Digitales</h2>
            <p>
            construir aplicaciones web funcionales y eficientes. Mi enfoque está en crear sistemas seguros, escalables y con buen rendimiento, aplicando buenas prácticas y centrándome en una experiencia de usuario clara y efectiva.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
                <div className="highlight-text">
                  <h4>Enfoque en Resultados</h4>
                  <span>Proyectos entregados con éxito.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                <div className="highlight-text">
                  <h4>Rendimiento Optimizado</h4>
                  <span>Experiencias de usuario fluidas y rápidas.</span>
                </div>
              </div>
            </div>
            <button className="about-button">
              <span>Conoce mi trabajo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-header">
            <span className="skills-subtitle">CAPACIDADES TÉCNICAS</span>
            <h2>Mis Herramientas Tecnológicas</h2>
            <p>
                Mi enfoque se centra en construir soluciones eficientes, escalables y mantenibles, aplicando buenas prácticas de la industria para entregar productos de software de calidad.
            </p>
        </div>
        <div className="skills-grid">
            <div className="skill-card">
                <div className="skill-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h4>Desarrollo Frontend</h4>
                <p>Interfaces dinámicas y de alto rendimiento con las tecnologías más demandadas.</p>
                <ul>
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Redux / Zustand</li>
                    <li>HTML5 & CSS3/Sass</li>
                </ul>
            </div>
            <div className="skill-card">
                <div className="skill-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                </div>
                <h4>Desarrollo Backend</h4>
                <p>Lógica de negocio robusta, segura y escalable para potenciar aplicaciones complejas.</p>
                <ul>
                    <li>Node.js & Express</li>
                    <li>NestJS</li>
                    <li>REST APIs & GraphQL</li>
                    <li>Microservicios</li>
                </ul>
            </div>
            <div className="skill-card">
                <div className="skill-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h4>Bases de Datos</h4>
                <p>Gestión y modelado de datos eficiente para garantizar la integridad y el rendimiento.</p>
                <ul>
                    <li>PostgreSQL & MySQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Prisma / TypeORM</li>
                </ul>
            </div>
            <div className="skill-card">
                <div className="skill-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h4>DevOps & Despliegue</h4>
                <p>Automatización de procesos para una entrega de software continua y fiable.</p>
                <ul>
                    <li>Docker</li>
                    <li>CI/CD (GitHub Actions)</li>
                    <li>Vercel / AWS</li>
                    <li>Git & Monorepos</li>
                </ul>
            </div>
            <div className="skill-card skill-card--with-image">
                <img src="https://images.unsplash.com/photo-1581092921462-685903d0435f?q=80&w=1287&auto=format&fit=crop" alt="Testing y Calidad" className="skill-card-image" />
                <div className="skill-card-content">
                    <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <h4>Testing y Calidad</h4>
                    <p>Aseguramiento de la calidad del software mediante pruebas automatizadas y estáticas.</p>
                    <ul>
                        <li>Jest & Vitest</li>
                        <li>Cypress & Playwright</li>
                        <li>Testing Library</li>
                        <li>ESLint & Prettier</li>
                    </ul>
                </div>
            </div>
            <div className="skill-card skill-card--with-image">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop" alt="Colaboración y Herramientas" className="skill-card-image" />
                <div className="skill-card-content">
                    <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h4>Colaboración y Herramientas</h4>
                    <p>Optimización del flujo de trabajo con herramientas estándar de la industria.</p>
                    <ul>
                        <li>Figma (Diseño a Código)</li>
                        <li>Jira & Trello</li>
                        <li>Slack & Discord</li>
                        <li>Postman (APIs)</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="stats-section" ref={statsSectionRef}>
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <span className="stat-number">+{stats.clients}</span>
            <span className="stat-label">Clientes</span>
            <span className="stat-subtext">Relaciones de confianza</span>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <span className="stat-number">{stats.projects}</span>
            <span className="stat-label">Proyectos Completados</span>
            <span className="stat-subtext">Soluciones a la medida</span>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <span className="stat-number">+{stats.hours}</span>
            <span className="stat-label">Horas de Código</span>
            <span className="stat-subtext">Dedicación y experiencia</span>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>
            </div>
            <span className="stat-number">{stats.awards}</span>
            <span className="stat-label">Reconocimientos</span>
            <span className="stat-subtext">Calidad en el trabajo</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Mis Servicios</h2>
        <div className="cards-container">
          <div className="service-card">
            <div className="card-icon">
              {/* Icono de Diseño Web */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
            </div>
            <h3>Diseño Web Moderno</h3>
            <p>Creación de interfaces de usuario atractivas y funcionales que ofrecen una experiencia de usuario excepcional en cualquier dispositivo.</p>
            <a href="#" className="service-link">Saber más <span className="arrow">→</span></a>
          </div>
          <div className="service-card">
            <div className="card-icon">
              {/* Icono de Desarrollo Frontend */}
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Desarrollo Frontend</h3>
            <p>Transformo diseños en código vivo y reactivo utilizando las últimas tecnologías para crear aplicaciones rápidas y escalables.</p>
            <a href="#" className="service-link">Saber más <span className="arrow">→</span></a>
          </div>
          <div className="service-card">
            <div className="card-icon">
              {/* Icono de Desarrollo Backend */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>
            <h3>Desarrollo Backend</h3>
            <p>Construcción de la lógica del servidor, bases de datos y APIs robustas y seguras que potencian tus aplicaciones web.</p>
            <a href="#" className="service-link">Saber más <span className="arrow">→</span></a>
          </div>
          <div className="service-card">
            <div className="card-icon">
              {/* Icono de SEO */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3>Optimización y SEO</h3>
            <p>Mejora del rendimiento y la visibilidad de tu sitio en motores de búsqueda para atraer más tráfico y alcanzar a tu público objetivo.</p>
            <a href="#" className="service-link">Saber más <span className="arrow">→</span></a>
          </div>
          <div className="service-card">
            <div className="card-icon">
              {/* Icono de Consultoría */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"></path><path d="M5 20v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path><path d="M12 14V4"></path><path d="M12 4L8 8"></path><path d="M12 4l4 4"></path></svg>
            </div>
            <h3>Consultoría Digital</h3>
            <p>Asesoramiento estratégico para la transformación digital de tu negocio, seleccionando las herramientas ideales para tu crecimiento.</p>
            <a href="#" className="service-link">Saber más <span className="arrow">→</span></a>
          </div>
          <div className="service-card">
            <div className="card-icon">
              {/* Icono de Mantenimiento */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <h3>Soporte y Mantenimiento</h3>
            <p>Garantía de estabilidad, seguridad y actualizaciones continuas para que tu plataforma funcione siempre al 100%.</p>
            <a href="#" className="service-link">Saber más <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2>Mis Proyectos Destacados</h2>
        <div className="projects-grid">
          {/* Proyecto 1 */}
          <a href="#" className="project-item">
            <div className="card-badge">Destacado</div>
            <img src="https://img.freepik.com/premium-vector/vector-flat-shop-with-sign-8_1095608-3228.jpg" alt="Proyecto 1" />
            <div className="project-info">
              <span className="project-category">E-commerce</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>Plataforma de Venta Online</h3>
              <div className="project-link">
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 2 */}
          <a href="#" className="project-item">
            <div className="card-badge new">Nuevo</div>
            <img src="https://es.dashthis.com/media/5060/google-sheets-kpi-dashboard-digital-marketing-seo.png" alt="Proyecto 2" />
            <div className="project-info">
              <span className="project-category">Aplicación Web</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>Dashboard de Analíticas</h3>
              <div className="project-link">
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 3 */}
          <a href="#" className="project-item">
            <img src="https://th.bing.com/th/id/R.57507ee2acbd7e73f69495db60fdb447?rik=5AISwoP4T1RdMQ&pid=ImgRaw&r=0" alt="Proyecto 3" />
            <div className="project-info">
              <span className="project-category">Landing Page</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
              </div>
              <h3>Web Corporativa</h3>
              <div className="project-link">
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 4 */}
          <a href="#" className="project-item">
            <div className="card-badge">Top</div>
            <img src="https://png.pngtree.com/background/20230616/original/pngtree-vintage-black-alarm-clock-in-3d-tumbling-onto-a-red-backdrop-picture-image_3653959.jpg" alt="Proyecto 4" />
            <div className="project-info">
              <span className="project-category">SaaS</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>Gestión de Tareas Cloud</h3>
              <div className="project-link">
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 5 */}
          <a href="#" className="project-item">
            <img src="https://framerusercontent.com/images/mBvRtA0cJ0K1lCXwFumldAjhNPY.png" alt="Proyecto 5" />
            <div className="project-info">
              <span className="project-category">Mobile App</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>App de Finanzas Personales</h3>
              <div className="project-link">
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 6 */}
          <a href="#" className="project-item">
            <div className="card-badge new">Nuevo</div>
            <img src="https://www.mdirector.com/wp-content/uploads/2017/07/gifs-animados-emociones.gif" alt="Proyecto 6" />
            <div className="project-info">
              <span className="project-category">Marketing</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
              </div>
              <h3>Campaña Digital Interactiva</h3>
              <div className="project-link">
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 7 - Estilo Santander */}
          <a href="#" className="project-item">
            <div className="card-badge" style={{backgroundColor: '#ec0000'}}>Premium</div>
            <img src="https://th.bing.com/th/id/R.bea954d162b60d11ef0284fa599e2267?rik=Rd4RdmqCcUmQKg&pid=ImgRaw&r=0" alt="Proyecto 7" />
            <div className="project-info">
              <span className="project-category">Pagina Sensilla</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>Web Normal</h3>
              <div className="project-features" style={{display: 'flex', gap: '15px', marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '15px'}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span style={{fontSize: '12px', fontWeight: '600'}}>Seguro</span>
                 </div>
                 <div style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    <span style={{fontSize: '12px', fontWeight: '600'}}>Rápido</span>
                 </div>
              </div>
              <div className="project-link" style={{marginTop: '15px'}}>
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 8 - Estilo Santander */}
          <a href="#" className="project-item">
            <img src="https://chicagoguia.com/wp-content/uploads/2024/03/detail-photograph-Spanish-title-10819.png" alt="Proyecto 8" />
            <div className="project-info">
              <span className="project-category">VISTA</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>Portal Comersial</h3>
              <div className="project-features" style={{display: 'flex', gap: '15px', marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '15px'}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <span style={{fontSize: '12px', fontWeight: '600'}}>Divisas</span>
                 </div>
                 <div style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    <span style={{fontSize: '12px', fontWeight: '600'}}>Analytics</span>
                 </div>
              </div>
              <div className="project-link" style={{marginTop: '15px'}}>
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>

          {/* Proyecto 9 - Estilo Santander */}
          <a href="#" className="project-item">
            <div className="card-badge" style={{backgroundColor: '#222'}}>Seguridad</div>
            <img src="https://img.freepik.com/fotos-premium/candado-rojo-detallado-garantiza-seguridad-digital-solida-experiencia-usuario-perfecta_892776-16240.jpg" alt="Proyecto 9" />
            <div className="project-info">
              <span className="project-category">Ciberseguridad</span>
              <div className="project-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <h3>Sistema de Acceso Biométrico</h3>
              <div className="project-features" style={{display: 'flex', gap: '15px', marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '15px'}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                    <span style={{fontSize: '12px', fontWeight: '600'}}>ID Único</span>
                 </div>
                 <div style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <span style={{fontSize: '12px', fontWeight: '600'}}>Protegido</span>
                 </div>
              </div>
              <div className="project-link" style={{marginTop: '15px'}}>
                <span>Ver proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">VOCES DE CONFIANZA</span>
          <h2>RESEÑAS</h2>
        </div>
        
        <div className="testimonial-carousel">
          <div className="testimonial-card" key={testimonials[currentTestimonial].id}>
            <div className="testimonial-author">
              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].role}</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
              </div>
            </div>
            <div className="testimonial-content">
              <div className="quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 2.908-2.353 5.261-5.261 5.261h-.722v4.348h.722c5.385 0 9.761-4.376 9.761-9.761V3h-4.5zm10.017 0v7.391c0 2.908-2.353 5.261-5.261 5.261h-.722v4.348h.722c5.385 0 9.761-4.376 9.761-9.761V3h-4.5z"/></svg>
              </div>
              <p className="testimonial-quote">{testimonials[currentTestimonial].quote}</p>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentTestimonial === index ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            ></button>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-header">
          <span className="contact-subtitle">PONTE EN CONTACTO</span>
          <h2>¿Listo para Iniciar tu Proyecto?</h2>
          <p>
            Estoy disponible para discutir nuevas oportunidades. Envíame un mensaje y me pondré en contacto contigo lo antes posible.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-wrapper">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>contacto@desarrollador.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-text">
                <h4>Teléfono</h4>
                <p>+52 123 456 7890</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-text">
                <h4>Ubicación</h4>
                <p>Ciudad de México, México</p>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Tu Nombre" required />
                <input type="email" name="email" placeholder="Tu Email" required />
              </div>
              <input type="text" name="subject" placeholder="Asunto" required className="full-width-input" />
              <textarea name="message" placeholder="Tu Mensaje" rows="6" required></textarea>
              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Navegación</h3>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Sobre Mí</a></li>
              <li><a href="#">Blog Corporativo</a></li>
              <li><a href="#">Trabaja con Nosotros</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal y Privacidad</h3>
            <ul className="footer-links">
              <li><a href="#">Aviso de Privacidad</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Seguridad Online</a></li>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">Derechos ARCO</a></li>
              <li><a href="#">Transparencia</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Ayuda y Soporte</h3>
            <ul className="footer-links">
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Mapa del Sitio</a></li>
              <li><a href="#">Línea Ética</a></li>
              <li><a href="#">Sucursales</a></li>
            </ul>
          </div>
          <div className="footer-column social-column">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.962.925-1.962 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.892 3.213 2.241 4.115a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 21.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"/></svg></a>
              <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.832-3.037-1.832 0-2.111 1.448-2.111 2.942v5.664H9.396V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.442C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.171V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            </div>
            <p className="footer-description">
              Conectando ideas con tecnología. Síguenos para enterarte de las últimas novedades y actualizaciones de nuestros servicios.
            </p>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            BN Soluciones Digitales. Todos los derechos reservados. El uso de este sitio implica la aceptación de nuestros términos de uso y política de privacidad. 
            La información mostrada es de carácter informativo y está sujeta a cambios sin previo aviso.
          </p>
        </div>
        <div className="footer-bottom">
          <p>© 2024 BN. Todos los derechos reservados.</p>
        </div>
      </footer>

      {isModalOpen && modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="modal-icon-wrapper">
              {modalData.icon}
            </div>
            <h2>{modalData.title}</h2>
            <p>{modalData.text}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;