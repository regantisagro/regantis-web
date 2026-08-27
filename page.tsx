"use client";

import { useState } from "react";

const whatsapp = "https://wa.me/50767676192?text=Hola%20Regantis%2C%20quisiera%20conversar%20sobre%20un%20proyecto%20de%20riego.";

type GalleryCategory = "todos" | "goteo" | "microaspersion" | "aspersion" | "carretes" | "filtrado" | "instalacion" | "ingenieria" | "abastecimiento";

const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: "todos", label: "Todos los trabajos" },
  { id: "goteo", label: "Goteo" },
  { id: "microaspersion", label: "Microaspersión" },
  { id: "aspersion", label: "Aspersión" },
  { id: "carretes", label: "Carretes" },
  { id: "filtrado", label: "Filtrado y bombeo" },
  { id: "instalacion", label: "Conducción e instalación" },
  { id: "ingenieria", label: "Ingeniería y planos" },
  { id: "abastecimiento", label: "Importación directa" },
];

type GalleryItem = {
  category: Exclude<GalleryCategory, "todos">;
  label: string;
  title: string;
  image: string;
  alt: string;
  presentation?: "plan";
};

const galleryItems: GalleryItem[] = [
  { category: "goteo", label: "GOTEO", title: "Goteo en hortalizas", image: "/goteo-hortalizas.jpeg", alt: "Líneas de riego por goteo en cultivo de hortalizas" },
  { category: "goteo", label: "GOTEO", title: "Goteo en cultivos establecidos", image: "/goteo-cebolla.jpeg", alt: "Cultivo de cebolla con líneas de riego por goteo" },
  { category: "goteo", label: "GOTEO", title: "Aplicación localizada en frutales", image: "/goteo-frutal.jpeg", alt: "Emisor de riego por goteo junto a un árbol frutal" },
  { category: "microaspersion", label: "MICROASPERSIÓN", title: "Microaspersión en banano", image: "/banano-riego.jpeg", alt: "Microaspersores instalados en plantación de banano" },
  { category: "microaspersion", label: "MICROASPERSIÓN", title: "Detalle de aplicación", image: "/microaspersor-banano.jpeg", alt: "Detalle de microaspersor instalado en cultivo" },
  { category: "microaspersion", label: "MICROASPERSIÓN", title: "Red sectorizada en campo", image: "/hidrante-microaspersion.jpeg", alt: "Hidrante y microaspersión en plantación" },
  { category: "aspersion", label: "ASPERSIÓN", title: "Aspersión en caña", image: "/aspersor-cana.jpeg", alt: "Aspersor de riego operando sobre cultivo de caña" },
  { category: "aspersion", label: "ASPERSIÓN", title: "Cobertura a gran alcance", image: "/aspersor-operando.jpeg", alt: "Cañón de riego por aspersión en operación" },
  { category: "aspersion", label: "ASPERSIÓN", title: "Aplicación uniforme en campo", image: "/aspersor-cana-dia.jpeg", alt: "Aspersor aplicando agua sobre cultivo en campo" },
  { category: "carretes", label: "CARRETES", title: "Carrete en operación", image: "/carrete-aspersor.jpeg", alt: "Carrete autopropulsado conectado y operando" },
  { category: "carretes", label: "CARRETES", title: "Movilidad para grandes áreas", image: "/carrete-tractor.jpeg", alt: "Carrete autopropulsado remolcado por tractor" },
  { category: "carretes", label: "CARRETES", title: "Equipos de alta capacidad", image: "/carrete-doble.jpeg", alt: "Carretes autopropulsados con manguera y cañón" },
  { category: "filtrado", label: "FILTRADO Y BOMBEO", title: "Estación de filtrado", image: "/filtro-campo.jpeg", alt: "Infraestructura de filtrado y bombeo de riego" },
  { category: "filtrado", label: "FILTRADO Y BOMBEO", title: "Conexiones hidráulicas", image: "/conexion-industrial.jpeg", alt: "Conexión hidráulica industrial para sistema de riego" },
  { category: "instalacion", label: "INSTALACIÓN", title: "Conducción principal PEAD", image: "/instalacion-conduccion.jpeg", alt: "Instalación de conducción principal de polietileno" },
  { category: "instalacion", label: "INSTALACIÓN", title: "Termofusión en obra", image: "/termofusion-equipo.jpeg", alt: "Equipo de termofusión preparando tubería de polietileno" },
  { category: "instalacion", label: "INSTALACIÓN", title: "Supervisión técnica", image: "/supervision-campo.jpeg", alt: "Supervisión técnica de riego en campo" },
  { category: "microaspersion", label: "MICROASPERSIÓN", title: "Microaspersión en operación", image: "/microaspersion-operando.jpeg", alt: "Microaspersores operando en campo" },
  { category: "ingenieria", label: "INGENIERÍA Y DISEÑO", title: "Plano maestro de riego", image: "/plano-maestro-riego.png", alt: "Plano maestro de un proyecto de riego Regantis", presentation: "plan" },
  { category: "ingenieria", label: "INGENIERÍA Y DISEÑO", title: "Distribución hidráulica", image: "/plano-distribucion-riego.png", alt: "Plano de distribución hidráulica de riego", presentation: "plan" },
  { category: "ingenieria", label: "INGENIERÍA Y DISEÑO", title: "Sectorización de bloques", image: "/plano-sectorizacion-riego.png", alt: "Plano de sectorización para sistema de riego", presentation: "plan" },
  { category: "ingenieria", label: "INGENIERÍA Y DISEÑO", title: "Diseño operativo de campo", image: "/plano-operacion-campo.png", alt: "Plano operativo de un proyecto de riego", presentation: "plan" },
  { category: "ingenieria", label: "INGENIERÍA Y DISEÑO", title: "Hidrantes y válvulas", image: "/plano-hidrantes-riego.png", alt: "Plano de hidrantes para proyecto de riego", presentation: "plan" },
  { category: "abastecimiento", label: "IMPORTACIÓN DIRECTA", title: "Inventario para suministro de proyecto", image: "/inventario-tuberia.jpeg", alt: "Inventario de tubería para proyecto de riego" },
  { category: "abastecimiento", label: "IMPORTACIÓN DIRECTA", title: "Equipos para termofusión", image: "/equipo-termofusion.jpeg", alt: "Equipo de termofusión disponible para obra" },
  { category: "abastecimiento", label: "IMPORTACIÓN DIRECTA", title: "Material preparado en campo", image: "/manguera-campo.jpeg", alt: "Rollos de manguera preparados para instalación en campo" },
  { category: "abastecimiento", label: "IMPORTACIÓN DIRECTA", title: "Zanjeo mecanizado", image: "/zanjeo-mecanizado.jpeg", alt: "Zanjeo mecanizado para sistema de riego" },
];

const landingReel = [
  { image: "/aspersor-cana.jpeg", label: "Aspersión en operación", alt: "Aspersor operando sobre cultivo" },
  { image: "/goteo-hortalizas.jpeg", label: "Goteo en hortalizas", alt: "Líneas de goteo en cultivo de hortalizas" },
  { image: "/carrete-tractor.jpeg", label: "Carrete autopropulsado", alt: "Carrete autopropulsado con tractor" },
  { image: "/instalacion-conduccion.jpeg", label: "Conducción PEAD", alt: "Instalación de tubería principal PEAD" },
  { image: "/banano-riego.jpeg", label: "Microaspersión", alt: "Microaspersión en plantación de banano" },
  { image: "/filtro-campo.jpeg", label: "Filtrado y bombeo", alt: "Estación de filtrado para riego" },
  { image: "/termofusion-equipo.jpeg", label: "Termofusión en obra", alt: "Equipo trabajando tubería PEAD" },
  { image: "/plano-distribucion-riego.png", label: "Diseño hidráulico", alt: "Plano de distribución hidráulica de riego" },
  { image: "/inventario-tuberia.jpeg", label: "Abastecimiento directo", alt: "Tubería disponible para suministro de proyectos" },
  { image: "/zanjeo-mecanizado.jpeg", label: "Zanjeo mecanizado", alt: "Zanjeo mecanizado para sistema de riego" },
];

const engineeringReel = [
  { image: "/plano-maestro-riego.png", label: "Plano maestro", alt: "Plano maestro de riego" },
  { image: "/plano-distribucion-riego.png", label: "Distribución hidráulica", alt: "Plano de distribución hidráulica" },
  { image: "/plano-sectorizacion-riego.png", label: "Sectorización", alt: "Plano de sectorización de riego" },
  { image: "/plano-hidrantes-riego.png", label: "Hidrantes y válvulas", alt: "Plano de hidrantes y válvulas" },
  { image: "/equipo-termofusion.jpeg", label: "Termofusión", alt: "Termofusión de tubería PEAD" },
  { image: "/instalacion-conduccion.jpeg", label: "Conducción PEAD", alt: "Instalación de conducción PEAD" },
  { image: "/filtro-campo.jpeg", label: "Filtrado", alt: "Estación de filtrado" },
  { image: "/microaspersion-operando.jpeg", label: "Sistema en operación", alt: "Sistema de riego en operación" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [galleryFilter, setGalleryFilter] = useState<GalleryCategory>("todos");
  const visibleGallery = galleryFilter === "todos" ? galleryItems : galleryItems.filter((item) => item.category === galleryFilter);
  return <main>
    <section className="hero" id="inicio">
      <nav className="nav shell" aria-label="Navegación principal">
        <a href="#inicio" className="brand" aria-label="Regantis, inicio"><img src="/regantis-logo.png" alt="Regantis Irrigation C.A." /></a>
        <div className="nav-links"><a href="#soluciones">Soluciones</a><a href="#ingenieria">Ingeniería</a><a href="#proyectos">Proyectos</a><a href="#nosotros">Nosotros</a></div>
        <a className="nav-contact" href="#contacto">Contáctenos <Arrow /></a>
      </nav>
      <div className="hero-grid shell">
        <div className="hero-copy"><p className="eyebrow light">Venezuela · Panamá</p><h1>Ingeniería de riego para <em>producir mejor.</em></h1><p className="hero-lead">Proyectos y soluciones profesionales en sistemas de riego para operaciones agrícolas que exigen precisión, confiabilidad y resultados.</p><div className="hero-actions"><a className="button button-primary" href="#contacto">Contáctenos <Arrow /></a><a className="text-link" href="#proyectos">Ver proyectos <span>↓</span></a></div></div>
        <aside className="hero-panel" aria-label="Especialidades Regantis"><p className="panel-label">Soluciones integrales</p><div className="panel-list"><div><b>01</b><span>Goteo</span></div><div><b>02</b><span>Aspersión fija</span></div><div><b>03</b><span>Carretes autopropulsados</span></div></div><p className="panel-foot">Desde el diseño hasta la puesta en operación.</p></aside>
      </div>
      <div className="hero-bottom shell"><span>REGANTIS IRRIGATION C.A.</span><span>PROYECTOS · SUMINISTRO · INSTALACIÓN</span></div>
    </section>
    <section className="regional-presence" aria-label="Presencia regional de Regantis"><div className="shell regional-inner"><p><span aria-hidden="true">🇻🇪</span> Venezuela <i>·</i> <span aria-hidden="true">🇵🇦</span> Panamá</p><span>Proyectos, suministro e instalación para operaciones agrícolas en ambos países.</span></div></section>
    <section className="landing-reel" aria-label="Instalaciones Regantis en campo"><div className="landing-reel-head shell"><p className="eyebrow">En campo</p><span>Instalaciones y resultados reales</span></div><div className="reel-viewport"><div className="reel-track">{[...landingReel, ...landingReel].map((item, index) => <figure className="reel-card" key={`${item.label}-${index}`}><img src={item.image} alt={item.alt}/><figcaption>{item.label}</figcaption></figure>)}</div></div></section>
    <section className="intro shell" id="nosotros"><p className="eyebrow">Regantis Irrigation C.A.</p><div className="intro-grid"><h2>El agua es un recurso. La ingeniería hace que rinda.</h2><div><p>Diseñamos sistemas de riego con criterio agronómico e hidráulico, alineados con el cultivo, la topografía, la fuente de agua y la operación real de cada finca.</p><p>Trabajamos para que cada proyecto sea instalable, eficiente y fácil de operar en campo.</p></div></div></section>
    <section className="engineering-section" id="ingenieria"><div className="shell"><div className="section-heading engineering-heading"><div><p className="eyebrow">Ingeniería de precisión</p><h2>Del plano constructivo al campo preciso.</h2></div><p>Diseño hidráulico de detalle, materiales definidos y una instalación ejecutada con la misma lógica que se dibuja.</p></div><div className="engineering-hero"><figure><img src="/ingenieria-plano-a-campo.png" alt="Plano de ingeniería que se transforma en un sistema de riego real en campo"/></figure><div className="engineering-overlay"><span>01</span><b>Diseño de detalle</b><p>Una obra bien ejecutada empieza mucho antes de abrir la zanja.</p></div></div></div><div className="engineering-reel" aria-label="Planos y ejecución de ingeniería Regantis"><div className="engineering-reel-head shell"><p className="eyebrow">Planos constructivos · ejecución real</p><span>De la hidráulica al sistema en operación</span></div><div className="reel-viewport"><div className="reel-track engineering-track">{[...engineeringReel, ...engineeringReel].map((item, index) => <figure className="reel-card" key={`${item.label}-${index}`}><img src={item.image} alt={item.alt}/><figcaption>{item.label}</figcaption></figure>)}</div></div></div></section>
    <section className="solutions" id="soluciones"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Lo que hacemos</p><h2>Sistemas que se adaptan al terreno y al cultivo.</h2></div><p>Una solución completa no se define solo por el emisor: integra diseño, conducción, filtrado, control e instalación.</p></div><div className="solution-grid"><article className="solution-card drop"><div className="card-number">01</div><h3>Riego por goteo</h3><p>Aplicación precisa de agua y fertilización para cultivos intensivos, frutales, viveros y plantaciones permanentes.</p><ul><li>Filtrado y fertirriego</li><li>Líneas de riego y emisores</li><li>Sectorización hidráulica</li></ul></article><article className="solution-card spray"><div className="card-number">02</div><h3>Aspersión fija</h3><p>Cobertura uniforme para áreas agrícolas, pasturas, viveros y cultivos que requieren manejo de microclima.</p><ul><li>Redes principales y secundarias</li><li>Hidrantes y válvulas</li><li>Aspersores y microaspersores</li></ul></article><article className="solution-card reel"><div className="card-number">03</div><h3>Carretes autopropulsados</h3><p>Movilidad, alcance y flexibilidad para aplicaciones por aspersión en superficies amplias y variables.</p><ul><li>Selección de equipo y cañón</li><li>Dimensionamiento de presión</li><li>Operación en campo</li></ul></article></div></div></section>
    <section className="supply-section"><div className="shell supply-grid"><div className="supply-copy"><p className="eyebrow light">Importación y abastecimiento</p><h2>Ingeniería con acceso directo a fábrica.</h2><p>Somos importadores y trabajamos con distribución de marcas internacionales. Coordinamos el suministro directo desde fábrica, con materiales seleccionados y especificados para cada obra.</p><div className="supply-points"><span>Importación directa desde fábrica</span><span>Marcas internacionales seleccionadas</span><span>Materiales especificados por proyecto</span></div></div><figure className="supply-image"><img src="/inventario-tuberia.jpeg" alt="Inventario de tubería para abastecimiento de proyectos Regantis"/></figure></div></section>
    <section className="brands-section" aria-label="Marcas presentes en nuestros proyectos"><div className="shell"><div className="brands-heading"><div><p className="eyebrow">Marcas presentes en nuestros proyectos</p><h2>Equipos y componentes seleccionados para cada solución.</h2></div><p>Integramos marcas internacionales de acuerdo con los requerimientos hidráulicos, operativos y de suministro de cada proyecto.</p></div><div className="brands-grid"><figure><img src="/aytok-logo.jpeg" alt="Aytok Water Filtration Systems"/></figure><figure><img src="/rain-bird-agriculture-logo.jpeg" alt="Rain Bird Agriculture"/></figure><figure><img src="/irex-logo.jpeg" alt="IREX Irrigation Excellence"/></figure></div></div></section>
    <section className="project-section gallery-section" id="proyectos"><div className="shell"><div className="section-heading projects-heading"><div><p className="eyebrow">Portafolio Regantis</p><h2>Trabajos reales, vistos por especialidad.</h2></div><p>Explore una selección de instalaciones y resultados en campo. Elija un tema para ver las fotografías de cada solución.</p></div><div className="gallery-filters" aria-label="Filtrar portafolio por tipo de proyecto">{galleryFilters.map((filter) => <button key={filter.id} type="button" className={galleryFilter === filter.id ? "is-active" : ""} aria-pressed={galleryFilter === filter.id} onClick={() => setGalleryFilter(filter.id)}>{filter.label}</button>)}</div><div className="gallery-grid">{visibleGallery.map((item) => <article className={`gallery-card${item.presentation === "plan" ? " gallery-plan" : ""}`} key={`${item.category}-${item.title}`}><img src={item.image} alt={item.alt}/><div className="gallery-caption"><p>{item.label}</p><h3>{item.title}</h3></div></article>)}</div><p className="gallery-note">Seleccione otra especialidad para seguir explorando el portafolio.</p></div></section>
    <section className="method"><div className="shell method-grid"><div><p className="eyebrow light">Nuestro enfoque</p><h2>De una necesidad agrícola a una solución ejecutable.</h2></div><ol><li><b>01</b><span><strong>Entendemos el proyecto</strong> Cultivo, área, topografía, fuente de agua y condiciones de operación.</span></li><li><b>02</b><span><strong>Diseñamos con rigor</strong> Criterios hidráulicos, materiales, sectorización y especificaciones claras.</span></li><li><b>03</b><span><strong>Llevamos a campo</strong> Suministro, instalación, pruebas y acompañamiento de puesta en operación.</span></li></ol></div></section>
    <section className="contact shell" id="contacto"><div className="contact-copy"><p className="eyebrow">Hablemos de su proyecto</p><h2>Cuando el riego importa, la conversación empieza aquí.</h2><p>Escríbanos para conocer Regantis, explorar una solución o conversar sobre un proyecto próximo.</p><div className="contact-details"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Panamá: +507 6767 6192</a><a href="tel:+584243470965">Venezuela: +58 424 347 0965</a><a href="mailto:ventas@regantisirrigation.com">ventas@regantisirrigation.com</a><span>Cagua, sector Centro, estado Aragua · Venezuela</span></div></div><form className="contact-form" action="https://formsubmit.co/ventas@regantisirrigation.com" method="POST"><input type="hidden" name="_subject" value="Nuevo contacto desde Regantis Irrigation"/><input type="hidden" name="_template" value="table"/><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_next" value="https://regantisirrigation.com/?mensaje=enviado#contacto"/><label>Nombre<input required name="Nombre" placeholder="Su nombre" /></label><label>Empresa / Finca<input name="Empresa o finca" placeholder="Nombre de su empresa" /></label><label>Correo<input required type="email" name="Correo" placeholder="correo@empresa.com" /></label><label>Mensaje<textarea required name="Mensaje" placeholder="Cuéntenos brevemente en qué podemos ayudarle" rows={4} /></label><button className="button button-dark" type="submit">Enviar mensaje <Arrow /></button><p className="form-note">También puede escribirnos directamente por WhatsApp.</p></form></section>
    <footer><div className="shell footer-inner"><img src="/regantis-logo.png" alt="Regantis Irrigation C.A." /><span>© {new Date().getFullYear()} Regantis Irrigation C.A.</span><a href={whatsapp}>WhatsApp <Arrow /></a></div></footer><a className="whatsapp" href={whatsapp} aria-label="Contactar a Regantis por WhatsApp">◔<span>WhatsApp</span></a>
  </main>;
}
