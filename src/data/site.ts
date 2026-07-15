export const site = {
  name: "Bavette Repostería y Snacks",
  shortName: "Bavette",
  description:
    "Pasteles y cupcakes personalizados, además de servicio de café, en Ciudad Obregón, Sonora.",
  instagramHandle: "@bavettereposteria",
  instagramUrl: "https://www.instagram.com/bavettereposteria/",
  facebookUrl: "https://www.facebook.com/bavettereposteria",
  // Replace these values as soon as the client confirms them.
  whatsappNumber: "5216442266088",
  email: "lechugac27@gmail.com",
  city: "Ciudad Obregón, Sonora, México",
  serviceArea: "Toda Ciudad Obregón",
  address: "Recolección únicamente bajo solicitud",
  hours: "Lunes a sábado, 9:00 a. m. a 7:00 p. m. · domingo, 9:00 a. m. a 1:00 p. m.",
  responseTime: "Tiempo de respuesta aproximado: 1 hora",
  leadTime: "Anticipación mínima por confirmar",
  delivery:
    "Entrega gratuita a domicilio en toda Ciudad Obregón; recolección únicamente bajo solicitud",
  payment: "Tarjeta de débito o crédito, efectivo, transferencia bancaria y enlace de pago",
} as const;

export const whatsappUrl = site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "";
