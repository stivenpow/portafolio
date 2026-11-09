// Escribe tu número con código de país, sin espacios ni símbolos. Ejemplo: 573001234567
const whatsappNumber = "573148954925";
const normalizedWhatsappNumber = whatsappNumber.replace(/[\s()+-]/g, '');
const whatsappMessage =
  "¡Hola! Vi tu portafolio y me gustaría conversar sobre un proyecto.";
const whatsappLink = document.getElementById("whatsapp-link");
const whatsappNote = document.getElementById("whatsapp-note");

if (/^\d{7,15}$/.test(normalizedWhatsappNumber)) {
  whatsappLink.href = `https://wa.me/${normalizedWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  whatsappNote.hidden = true;
} else {
  whatsappLink.removeAttribute("href");
  whatsappLink.removeAttribute("target");
  whatsappLink.setAttribute("aria-disabled", "true");
}

document.getElementById("year").textContent = new Date().getFullYear();
