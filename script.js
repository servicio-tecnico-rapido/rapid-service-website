const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const serviceForm = document.getElementById('service-form');
if (serviceForm) {
  serviceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!serviceForm.reportValidity()) return;
    const data = new FormData(serviceForm);
    const value = (key) => String(data.get(key) || '').trim();
    const message = [
      'Hola Rapid Service, quiero solicitar un servicio técnico.',
      '',
      `Nombre: ${value('nombre')}`,
      `Teléfono: ${value('telefono')}`,
      `Dirección: ${value('direccion')}`,
      `Electrodoméstico: ${value('equipo')}`,
      `Marca: ${value('marca')}`,
      `Servicio solicitado: ${value('servicio')}`,
      `Posible falla: ${value('falla') || 'No especificada'}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/573332700799?text=${encodeURIComponent(message)}`;
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.href = whatsappUrl;
  });
}
