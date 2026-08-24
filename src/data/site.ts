export const site = {
  name: "Bavette Repostería y Snacks",
  shortName: "Bavette",
  description:
    "Pasteles personalizados, cupcakes, servicio de café y quesos para eventos en Ciudad Obregón, Sonora.",
  instagramHandle: "@bavettereposteria",
  instagramUrl: "https://www.instagram.com/bavettereposteria/",
  facebookUrl: "https://www.facebook.com/search/top?q=Bavette%20Reposter%C3%ADa%20y%20Snacks",
  whatsappNumber: "5216442266088",
  phoneDisplay: "644 226 6088",
  email: "lechugac27@gmail.com",
  city: "Ciudad Obregón, Sonora, México",
  serviceArea: "Toda Ciudad Obregón, salvo algunas excepciones",
  address: "Trabajamos desde casa y entregamos a domicilio",
  hours: "Lunes a sábado, 9:00 a. m. a 7:00 p. m. | domingo, 9:00 a. m. a 1:00 p. m.",
  responseTime: "Tiempo de respuesta aproximado: 1 hora",
  leadTime: "48 horas",
  delivery:
    "Entregas de 9:00 a. m. a 7:00 p. m. en toda la ciudad. El costo y las excepciones de cobertura se confirman al cotizar.",
  payment: "Tarjetas de crédito o débito, transferencias y enlace de pago",
  deposit: "Se requiere un anticipo del 50% para apartar la fecha",
} as const;

export const whatsappUrl = site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "";

export const whatsappMessageUrl = (message: string) =>
  whatsappUrl ? `${whatsappUrl}?text=${encodeURIComponent(message)}` : "";

export const whatsappOrderMessage = "Hola, Bavette. Quiero solicitar disponibilidad y cotización.";
export const whatsappOrderUrl = whatsappMessageUrl(whatsappOrderMessage);
