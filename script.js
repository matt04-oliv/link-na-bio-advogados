
const WHATSAPP_NUMBER = "5581986051008";
const WHATSAPP_MESSAGE = "Olá! Vim pelo Instagram e gostaria de mais informações.";

document.getElementById('whatsapp-link').href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
