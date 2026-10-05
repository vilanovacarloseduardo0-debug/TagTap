import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type MouseEvent, type TouchEvent } from "react";
import {
  ArrowRight,
  Battery,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  Instagram,
  Laptop,
  MapPin,
  MessageCircle,
  Moon,
  MoveHorizontal,
  Nfc,
  Palette,
  Phone,
  Radio,
  RotateCcw,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  UserCheck,
  UserPlus,
  Video,
  Wifi,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Placas NFC 8x8cm • TagTap | Google, Instagram, WhatsApp e Personalizadas" },
      {
        name: "description",
        content: "Placas inteligentes NFC 8x8cm com simulação interativa no iPhone. Google Avaliações (Preta e Branca), Instagram, WhatsApp e Personalizadas. A partir de R$ 50,00!",
      },
      { property: "og:title", content: "Garanta sua Placa NFC 8x8cm • TagTap" },
      {
        property: "og:description",
        content: "Conecte seus clientes com apenas 1 toque no celular. Modelos prontos e personalizados.",
      },
      { property: "og:type", content: "website" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
    ],
  }),
  component: SalesShowcase,
});

const CONTACT = {
  phoneDisplay: "(18) 99707-0824",
  phoneRaw: "5518997070824",
  email: "vilanovacarloseduardo0@gmail.com",
  instagram: "@tagtapbr",
  location: "Penápolis e Região",
};

function getWhatsAppUrl(message: string) {
  return `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;
}

const PRODUCTS = [
  {
    id: "google-preta",
    name: "Placa Preta • Google Avaliações",
    category: "Google Reviews",
    badge: "Mais Vendido",
    format: "8 x 8 cm",
    color: "Preto Fosco + Cores Google",
    tagline: "Avalie-nos no Google ★★★★★",
    description: "Design sóbrio e moderno com fundo preto, logo oficial do Google e 5 estrelas em destaque. Combina com balcões de lojas, restaurantes, clínicas e barbearias.",
    image: "/tagtap/placa-google-preta.jpg",
    type: "google",
    features: [
      "Abre na hora a tela oficial de 5 estrelas do Google",
      "Leitura instantânea por aproximação NFC",
      "Bordas suaves e acabamento laminado de alta resistência",
      "Já entregue 100% configurada com o link do seu negócio",
    ],
  },
  {
    id: "google-branca",
    name: "Placa Branca • Google Avaliações",
    category: "Google Reviews",
    badge: "Alta Visibilidade",
    format: "8 x 8 cm",
    color: "Branco Clean + Azul Royal",
    tagline: "Avalie-nos no Google ★★★★★",
    description: "Design com contraste vibrante de onda azul e fundo branco. Impossível passar despercebida no balcão ou no caixa.",
    image: "/tagtap/placa-google-branca.png",
    type: "google",
    features: [
      "Máximo contraste visual em qualquer iluminação",
      "Abre direto na avaliação 5 estrelas do seu perfil",
      "Material impermeável resistente a respingos e limpezas",
      "Sem bateria, sem recarga e sem mensalidade",
    ],
  },
  {
    id: "instagram",
    name: "Placa Instagram • Siga Nossa Página",
    category: "Redes Sociais",
    badge: "Engajamento",
    format: "8 x 8 cm",
    color: "Degradê Oficial Instagram + Branco",
    tagline: "Siga nossa página",
    description: "Transforme visitantes presenciais em seguidores reais no seu Instagram. O cliente encosta o celular e cai direto no seu perfil pronto para seguir.",
    image: "/tagtap/placa-instagram.jpg",
    type: "instagram",
    features: [
      "Abre direto o perfil do seu Instagram no app do cliente",
      "Multiplica seus seguidores orgânicos todos os dias",
      "Ideal para lojas de roupas, estética, cafeterias e eventos",
      "Pronta para uso imediato no balcão",
    ],
  },
  {
    id: "whatsapp",
    name: "Placa WhatsApp • Salve Nosso Número",
    category: "Atendimento & Vendas",
    badge: "Conversão Direta",
    format: "8 x 8 cm",
    color: "Verde WhatsApp Oficial + Preto",
    tagline: "Salva o nosso NÚMERO",
    description: "Facilite o contato pós-venda, pedidos e orçamentos. O cliente aproxima o celular e abre a conversa no WhatsApp com o seu número salvo na hora.",
    image: "/tagtap/placa-whatsapp.jpg",
    type: "whatsapp",
    features: [
      "Inicia a conversa direta sem o cliente precisar digitar o número",
      "Perfeito para suporte, delivery, encomendas e agendamentos",
      "Acabamento durável e visual comercial marcante",
      "Compatível com todos os smartphones modernos",
    ],
  },
  {
    id: "personalizada",
    name: "Placa Personalizada • Sua Marca",
    category: "Exclusiva sob Medida",
    badge: "100% Personalizada",
    format: "8 x 8 cm",
    color: "Identidade Visual da sua Empresa",
    tagline: "Sua Logo + Avaliação, WhatsApp e Instagram",
    description: "Feita sob medida com a sua logomarca, suas cores e seus links! Exemplo do modelo exclusivo feito para a Saikoo Jiu Jitsu unindo avaliação Google, WhatsApp e Instagram na mesma placa.",
    image: "/tagtap/placa-personalizada-saikoo.jpg",
    type: "custom",
    isCustom: true,
    price: "R$ 100,00",
    features: [
      "Criada com a sua logomarca e identidade visual própria",
      "Pode incluir múltiplos destinos (Google, WhatsApp, Instagram)",
      "Acabamento VIP de alta categoria",
      "Aprovação prévia da arte antes da produção",
    ],
  },
];

const PACKAGES = [
  {
    id: "1-placa",
    title: "1 Placa Balcão",
    subtitle: "Para começar a turbinar seu caixa",
    price: "80,00",
    unitPrice: null,
    popular: false,
    tag: "Individual",
    items: [
      "1x Placa Inteligente NFC 8x8cm",
      "Escolha entre: Google Preta, Branca, Instagram ou WhatsApp",
      "Configuração oficial inclusa",
      "Material rígido com bordas arredondadas",
      "Entrega rápida em Penápolis e Região",
    ],
    whatsappMsg: "Olá! Gostaria de encomendar 1 Placa NFC (R$ 80,00).",
  },
  {
    id: "2-placas",
    title: "2 Placas Comerciais",
    subtitle: "Caixa + Balcão de atendimento",
    price: "140,00",
    unitPrice: "R$ 70 por placa (Economize R$ 20)",
    popular: true,
    tag: "Mais Escolhido",
    items: [
      "2x Placas Inteligentes NFC 8x8cm",
      "Pode misturar modelos (Ex: 1 Google + 1 Instagram)",
      "Configuração individual para cada link",
      "Excelente para entrada e ponto de saída",
      "Entrega prioritária em Penápolis",
    ],
    whatsappMsg: "Olá! Gostaria de aproveitar o combo de 2 Placas NFC por R$ 140,00.",
  },
  {
    id: "3-placas",
    title: "3 Placas Negócio",
    subtitle: "Caixa + Balcão + Mesas / Vitrine",
    price: "210,00",
    unitPrice: "R$ 70 por placa",
    popular: false,
    tag: "Completo",
    items: [
      "3x Placas Inteligentes NFC 8x8cm",
      "Combine modelos: Google, Instagram e WhatsApp",
      "Ideal para estabelecimentos com múltiplos ambientes",
      "Configuração e teste inclusos",
      "Suporte direto na ativação",
    ],
    whatsappMsg: "Olá! Gostaria de encomendar 3 Placas NFC por R$ 210,00.",
  },
  {
    id: "4-mais-placas",
    title: "4 ou Mais Placas (+4x)",
    subtitle: "Super atacado para salões, restaurantes e redes",
    price: "50,00",
    unitPrefix: "Apenas",
    unitSuffix: "/ cada placa",
    popular: false,
    tag: "Super Preço Atacado",
    highlightBadge: "R$ 50,00 cada!",
    items: [
      "A partir de 4 unidades: R$ 50,00 cada placa!",
      "Economia máxima para cobrir todas as mesas",
      "Multiplique dezenas de avaliações por dia",
      "Misture qualquer um dos modelos do catálogo",
      "Atendimento exclusivo e suporte prioritário",
    ],
    whatsappMsg: "Olá! Gostaria de fazer um pedido de 4 ou mais Placas NFC pelo valor de R$ 50,00 cada placa.",
  },
];

const FAQS = [
  {
    q: "O cliente precisa baixar algum aplicativo?",
    a: "Não! Basta o cliente aproximar o celular da placa. O próprio sistema do aparelho (iPhone ou Android) reconhece o NFC automaticamente e abre a tela em menos de 2 segundos.",
  },
  {
    q: "A placa precisa de bateria, tomada ou recarga?",
    a: "Não precisa de nada disso. A tecnologia NFC é passiva, ou seja, ela é energizada instantaneamente pelo próprio campo de indução do celular no momento do toque. Dura anos sem manutenção.",
  },
  {
    q: "Tem alguma mensalidade ou taxa de manutenção?",
    a: "Zero! O pagamento é único na compra da placa. Não cobramos mensalidade nem cobranças adicionais.",
  },
  {
    q: "Como funciona a Placa Personalizada por R$ 100,00?",
    a: "Criamos a placa 100% personalizada com a logomarca da sua empresa, cores e o layout desejado (como o exemplo da Saikoo Jiu Jitsu, que reúne Google, WhatsApp e Instagram em uma só peça). Nós montamos a arte, você aprova e nós produzimos já configurada!",
  },
  {
    q: "Posso misturar modelos nos pacotes de 2, 3 ou +4 placas?",
    a: "Com certeza! Você pode escolher, por exemplo, 1 de Avaliação Google e 1 do Instagram, ou como preferir para o seu comércio.",
  },
  {
    q: "Como funciona a entrega em Penápolis e Região?",
    a: "Realizamos entrega rápida e suporte presencial/remoto em Penápolis e cidades vizinhas. Você recebe o produto pronto e testado em mãos.",
  },
];

type ThemeMode = "light" | "dark" | "system";

function SalesShowcase() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Theme Management (Light, Dark, and Device Auto-Adjustment)
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tagtap-theme") as ThemeMode | null;
      if (saved === "light" || saved === "dark" || saved === "system") {
        return saved;
      }
    }
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      let active: "light" | "dark" = "dark";
      if (themeMode === "system") {
        active = mediaQuery.matches ? "dark" : "light";
      } else {
        active = themeMode;
      }
      setResolvedTheme(active);

      const root = document.documentElement;
      if (active === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        root.style.colorScheme = "light";
      }
    };

    applyTheme();

    const handleSystemChange = () => {
      if (themeMode === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [themeMode]);

  const handleThemeChange = (newMode: ThemeMode) => {
    setThemeMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("tagtap-theme", newMode);
    }
    toast.success(
      newMode === "system"
        ? "Autoajuste ativo: seguindo o padrão do seu aparelho!"
        : newMode === "light"
        ? "Modo Claro ativado!"
        : "Modo Escuro ativado!"
    );
  };

  const isDark = resolvedTheme === "dark";

  // Phone Simulator state directly embedded in the Hero alongside the plate
  const [phoneState, setPhoneState] = useState<"idle" | "connecting" | "screen" | "success">("idle");
  const [userRating, setUserRating] = useState(5);
  const [isFollowingInstagram, setIsFollowingInstagram] = useState(false);
  const [whatsappMessaged, setWhatsappMessaged] = useState(false);

  // Swipe support for mobile devices
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextModel();
      } else {
        handlePrevModel();
      }
    }
    setTouchStartX(null);
  };

  const currentProduct = PRODUCTS[selectedProductIndex];

  const handlePrevModel = () => {
    setSelectedProductIndex((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
    setPhoneState("idle");
    setIsFollowingInstagram(false);
    setWhatsappMessaged(false);
  };

  const handleNextModel = () => {
    setSelectedProductIndex((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1));
    setPhoneState("idle");
    setIsFollowingInstagram(false);
    setWhatsappMessaged(false);
  };

  const handleSelectModel = (index: number) => {
    setSelectedProductIndex(index);
    setPhoneState("idle");
    setIsFollowingInstagram(false);
    setWhatsappMessaged(false);
  };

  const handleSimulateTap = () => {
    if (phoneState === "connecting") return;
    setPhoneState("connecting");
    setTimeout(() => {
      setPhoneState("screen");
      const targetName =
        currentProduct.type === "instagram"
          ? "Perfil do Instagram"
          : currentProduct.type === "whatsapp"
          ? "Contato do WhatsApp"
          : currentProduct.type === "custom"
          ? "Linktree Saikoo Jiu Jitsu"
          : "Avaliação 5 Estrelas no Google";
      toast.success("Toque NFC Detectado!", {
        description: `Abrindo ${targetName} no celular.`,
      });
    }, 600);
  };

  const handlePublishReview = () => {
    setPhoneState("success");
    toast.success("Avaliação 5 Estrelas Publicada!", {
      description: "Sua avaliação foi contabilizada no Google Maps em 3 segundos.",
    });
  };

  const handleToggleInstagramFollow = () => {
    setIsFollowingInstagram((prev) => {
      const next = !prev;
      if (next) {
        toast.success("Você agora segue @tagtapbr!", {
          description: "Seguidor ganho instantaneamente no balcão da sua loja.",
        });
      }
      return next;
    });
  };

  const handleSendWhatsAppChat = () => {
    setWhatsappMessaged(true);
    toast.success("Conversa Iniciada no WhatsApp!", {
      description: "O contato da sua empresa foi aberto diretamente no app.",
    });
  };

  const handleResetPhone = () => {
    setPhoneState("idle");
    setUserRating(5);
    setIsFollowingInstagram(false);
    setWhatsappMessaged(false);
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#0B0A06] text-[#FAF7EE] selection:bg-[#EAB308] selection:text-[#0A0904]"
          : "bg-[#FBF9F4] text-[#1A150B] selection:bg-[#EAB308] selection:text-[#0A0904]"
      }`}
    >
      {/* Top Banner / Micro Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          isDark
            ? "bg-[#0B0A06]/95 border-b border-[#EAB308]/20"
            : "bg-[#FBF9F4]/95 border-b border-[#EAB308]/25 shadow-sm shadow-amber-900/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EAB308] flex items-center justify-center text-[#0A0904] font-black text-lg sm:text-xl shadow-md shadow-[#EAB308]/30 shrink-0">
              <Nfc className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
            <div>
              <span
                className={`font-black text-base sm:text-lg tracking-wider flex items-center gap-1.5 ${
                  isDark ? "text-white" : "text-[#1A150B]"
                }`}
              >
                TAG<span className="text-[#EAB308]">TAP</span>
                <span
                  className={`hidden xs:inline-block text-[9px] uppercase font-extrabold tracking-widest px-1.5 py-0.5 rounded-full border ${
                    isDark
                      ? "bg-[#241C0A] text-[#EAB308] border-[#EAB308]/30"
                      : "bg-[#FEF9E7] text-[#9A6B05] border-[#EAB308]/40"
                  }`}
                >
                  8x8cm
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-colors ${
              isDark
                ? "bg-[#181308]/90 border-[#EAB308]/25"
                : "bg-white/90 border-[#EAB308]/30 shadow-sm"
            }`}
          >
            <button
              onClick={(e) => scrollToSection(e, "como-funciona")}
              className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                isDark
                  ? "text-[#D4C8AC] hover:text-[#0A0904] hover:bg-[#EAB308]"
                  : "text-[#5C5035] hover:text-[#0A0904] hover:bg-[#EAB308]"
              }`}
            >
              Como Funciona
            </button>
            <button
              onClick={(e) => scrollToSection(e, "modelos")}
              className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                isDark
                  ? "text-[#D4C8AC] hover:text-[#0A0904] hover:bg-[#EAB308]"
                  : "text-[#5C5035] hover:text-[#0A0904] hover:bg-[#EAB308]"
              }`}
            >
              Modelos
            </button>
            <button
              onClick={(e) => scrollToSection(e, "precos")}
              className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                isDark
                  ? "text-[#D4C8AC] hover:text-[#0A0904] hover:bg-[#EAB308]"
                  : "text-[#5C5035] hover:text-[#0A0904] hover:bg-[#EAB308]"
              }`}
            >
              Tabela de Preços
            </button>
            <button
              onClick={(e) => scrollToSection(e, "personalizada-destaque")}
              className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                isDark
                  ? "text-[#D4C8AC] hover:text-[#0A0904] hover:bg-[#EAB308]"
                  : "text-[#5C5035] hover:text-[#0A0904] hover:bg-[#EAB308]"
              }`}
            >
              Personalizadas
            </button>
            <button
              onClick={(e) => scrollToSection(e, "faq")}
              className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                isDark
                  ? "text-[#D4C8AC] hover:text-[#0A0904] hover:bg-[#EAB308]"
                  : "text-[#5C5035] hover:text-[#0A0904] hover:bg-[#EAB308]"
              }`}
            >
              Dúvidas
            </button>
          </nav>

          {/* Right Header Actions: Theme Switcher + WhatsApp */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* THEME SWITCHER (Compact for Mobile) */}
            <div
              className={`flex items-center p-0.5 rounded-full border transition-colors ${
                isDark
                  ? "bg-[#181308]/90 border-[#EAB308]/30"
                  : "bg-white border-[#EAB308]/35 shadow-sm"
              }`}
              title="Trocar tema: Claro, Auto ou Escuro"
            >
              <button
                type="button"
                onClick={() => handleThemeChange("light")}
                title="Modo Claro"
                aria-label="Modo Claro"
                className={`p-1 sm:p-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  themeMode === "light"
                    ? "bg-[#EAB308] text-[#0A0904] shadow-sm font-bold scale-105"
                    : isDark
                    ? "text-[#D4C8AC] hover:text-[#EAB308]"
                    : "text-[#786B4F] hover:text-[#1A150B]"
                }`}
              >
                <Sun className="w-3.5 h-3.5 stroke-[2.4]" />
              </button>

              <button
                type="button"
                onClick={() => handleThemeChange("system")}
                title="Auto: Padrão do aparelho"
                aria-label="Autoajuste"
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-tight flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                  themeMode === "system"
                    ? "bg-[#EAB308] text-[#0A0904] shadow-sm scale-105"
                    : isDark
                    ? "text-[#D4C8AC] hover:text-[#EAB308]"
                    : "text-[#786B4F] hover:text-[#1A150B]"
                }`}
              >
                <Laptop className="w-3 h-3" />
                <span className="hidden sm:inline">Auto</span>
              </button>

              <button
                type="button"
                onClick={() => handleThemeChange("dark")}
                title="Modo Escuro"
                aria-label="Modo Escuro"
                className={`p-1 sm:p-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  themeMode === "dark"
                    ? "bg-[#EAB308] text-[#0A0904] shadow-sm font-bold scale-105"
                    : isDark
                    ? "text-[#D4C8AC] hover:text-[#EAB308]"
                    : "text-[#786B4F] hover:text-[#1A150B]"
                }`}
              >
                <Moon className="w-3.5 h-3.5 stroke-[2.4]" />
              </button>
            </div>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre as placas NFC 8x8cm para meu comércio.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] px-2.5 sm:px-3.5 py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-transform active:scale-95 shadow-md shadow-[#EAB308]/20 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0A0904]" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile Fast-Scroll Strip (Horizontally Scrollable Tabs) */}
        <div
          className={`lg:hidden flex items-center gap-2 overflow-x-auto px-3 py-1.5 scrollbar-none border-t transition-colors text-[11px] font-extrabold uppercase tracking-wider ${
            isDark
              ? "bg-[#0E0C08] border-[#EAB308]/15"
              : "bg-[#F5EFE3] border-[#EAB308]/20"
          }`}
        >
          <button
            onClick={(e) => scrollToSection(e, "como-funciona")}
            className="shrink-0 px-2.5 py-1 rounded-full whitespace-nowrap opacity-85 hover:opacity-100 hover:text-[#EAB308]"
          >
            Como Funciona
          </button>
          <button
            onClick={(e) => scrollToSection(e, "modelos")}
            className="shrink-0 px-2.5 py-1 rounded-full whitespace-nowrap opacity-85 hover:opacity-100 hover:text-[#EAB308]"
          >
            Modelos
          </button>
          <button
            onClick={(e) => scrollToSection(e, "precos")}
            className="shrink-0 px-2.5 py-1 rounded-full whitespace-nowrap opacity-85 hover:opacity-100 hover:text-[#EAB308]"
          >
            Preços
          </button>
          <button
            onClick={(e) => scrollToSection(e, "personalizada-destaque")}
            className="shrink-0 px-2.5 py-1 rounded-full whitespace-nowrap opacity-85 hover:opacity-100 hover:text-[#EAB308]"
          >
            Personalizadas
          </button>
          <button
            onClick={(e) => scrollToSection(e, "faq")}
            className="shrink-0 px-2.5 py-1 rounded-full whitespace-nowrap opacity-85 hover:opacity-100 hover:text-[#EAB308]"
          >
            Dúvidas
          </button>
        </div>
      </header>

      {/* Main Container with generous bottom padding for sticky bar */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8 md:py-10 space-y-12 sm:space-y-16 md:space-y-24 pb-28 sm:pb-24">
        
        {/* ============================================================ */}
        {/* HERO SECTION: PLACA NFC + IPHONE TITANIUM                    */}
        {/* ============================================================ */}
        <section className="relative">
          {/* Ambient Glows */}
          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] pointer-events-none ${
              isDark ? "bg-[#EAB308]/15" : "bg-amber-300/30"
            }`}
          ></div>

          {/* Master Flyer Card */}
          <div
            className={`relative rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-hidden border transition-all duration-300 ${
              isDark
                ? "border-[#EAB308]/25 shadow-2xl shadow-black/80 bg-gradient-to-b from-[#1E170A] via-[#140F06] to-[#0B0905]"
                : "border-[#EAB308]/35 shadow-xl shadow-amber-950/10 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5E8] to-[#EFE7D4]"
            }`}
          >
            {/* The Signature Vibrant Gold/Amber Organic Shape Backdrop */}
            <div className="absolute -bottom-24 -right-24 w-[320px] sm:w-[540px] md:w-[680px] h-[320px] sm:h-[540px] md:h-[680px] rounded-full bg-gradient-to-tr from-[#D97706] to-[#EAB308] opacity-90 blur-sm pointer-events-none transform rotate-12 scale-110"></div>
            
            {/* Inner Dark/Light Curve */}
            <div
              className={`absolute -bottom-48 -right-48 w-[380px] sm:w-[580px] md:w-[700px] h-[380px] sm:h-[580px] md:h-[700px] rounded-[3rem] sm:rounded-[3.5rem] pointer-events-none transform -rotate-12 ${
                isDark ? "bg-[#130E06]/85" : "bg-white/85 backdrop-blur-sm"
              }`}
            ></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
              
              {/* Left Column: Bold Typography & Direct Sales Pitch */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                
                {/* Back / Tag Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider font-extrabold px-2.5 sm:px-3 py-1 rounded-full border ${
                      isDark
                        ? "bg-[#2D210B] text-[#EAB308] border-[#EAB308]/30"
                        : "bg-[#FEF9E7] text-[#9A6B05] border-[#EAB308]/40 shadow-sm"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Placas Inteligentes 8x8cm
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      isDark
                        ? "bg-black/40 text-[#EAB308] border-[#EAB308]/20"
                        : "bg-white/70 text-[#8C6207] border-[#EAB308]/30 shadow-sm"
                    }`}
                  >
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#EAB308]" />
                    A partir de R$ 50,00 (+4x)
                  </span>
                </div>

                {/* Big Headline */}
                <div className="space-y-1">
                  <h1
                    className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] ${
                      isDark ? "text-white" : "text-[#1A150B]"
                    }`}
                  >
                    Garanta sua{" "}
                    <span className="text-[#EAB308] block drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                      Placa NFC!
                    </span>
                  </h1>
                  <p
                    className={`text-xs xs:text-sm sm:text-base max-w-xl font-normal pt-1 sm:pt-2 leading-relaxed ${
                      isDark ? "text-[#D4C8AC]" : "text-[#5C5035]"
                    }`}
                  >
                    Os melhores preços do mercado para Penápolis e região. Aproxime o celular da placa abaixo e veja a tela do Google, Instagram, WhatsApp ou Linktree abrir na hora!
                  </p>
                </div>

                {/* Bullets Highlight with Pricing */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 pt-1">
                  <div
                    className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${
                      isDark ? "text-[#F5EEDC]" : "text-[#2D2413]"
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EAB308] flex items-center justify-center text-[#0B0A06] shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span>1 Placa por R$ 80,00</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${
                      isDark ? "text-[#F5EEDC]" : "text-[#2D2413]"
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EAB308] flex items-center justify-center text-[#0B0A06] shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span>2 Placas por R$ 140,00</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${
                      isDark ? "text-[#F5EEDC]" : "text-[#2D2413]"
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EAB308] flex items-center justify-center text-[#0B0A06] shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span>3 Placas por R$ 210,00</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${
                      isDark ? "text-[#F5EEDC]" : "text-[#2D2413]"
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EAB308] flex items-center justify-center text-[#0B0A06] shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span>+4 Placas por R$ 50,00 cada!</span>
                  </div>
                </div>

                {/* Mobile Full-Width Action Buttons */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 pt-2">
                  <button
                    onClick={(e) => scrollToSection(e, "precos")}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#EAB308]/30 active:scale-95 cursor-pointer min-h-[44px]"
                  >
                    <span>Ver Preços & Kits</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={(e) => scrollToSection(e, "modelos")}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer min-h-[44px] ${
                      isDark
                        ? "bg-[#241C0A]/90 hover:bg-[#30250D] border-[#EAB308]/40 text-[#EAB308]"
                        : "bg-white hover:bg-amber-50 border-[#EAB308]/50 text-[#8C6207] shadow-sm"
                    }`}
                  >
                    <span>Conhecer Modelos</span>
                  </button>

                  <button
                    onClick={handleSimulateTap}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border font-bold text-xs uppercase tracking-wide transition-all cursor-pointer animate-pulse min-h-[44px] ${
                      isDark
                        ? "bg-[#EAB308]/15 hover:bg-[#EAB308]/25 border-[#EAB308]/50 text-[#EAB308]"
                        : "bg-amber-100/70 hover:bg-amber-200/70 border-[#EAB308]/60 text-[#8C6207]"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Toque NFC no iPhone</span>
                  </button>
                </div>

                {/* WhatsApp Contact Snippet */}
                <div
                  className={`pt-3 border-t flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-5 ${
                    isDark ? "border-[#EAB308]/15" : "border-[#EAB308]/25"
                  }`}
                >
                  <a
                    href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de saber valores e modelos da placa TagTap.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 sm:gap-3 group"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EAB308] flex items-center justify-center text-[#0A0904] group-hover:scale-105 transition-transform shadow-md shadow-[#EAB308]/25 shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0A0904]" />
                    </div>
                    <div>
                      <p
                        className={`text-[10px] sm:text-[11px] uppercase font-semibold ${
                          isDark ? "text-[#C2B596]" : "text-[#786B4F]"
                        }`}
                      >
                        Entre em contato
                      </p>
                      <p
                        className={`text-sm sm:text-base font-black transition-colors tracking-tight ${
                          isDark ? "text-white group-hover:text-[#EAB308]" : "text-[#1A150B] group-hover:text-[#D97706]"
                        }`}
                      >
                        {CONTACT.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <div
                    className={`flex items-center gap-1.5 text-[11px] sm:text-xs px-2.5 py-1.5 rounded-xl border ${
                      isDark
                        ? "text-[#BDB090] bg-black/30 border-white/5"
                        : "text-[#5C5035] bg-white/70 border-amber-900/10 shadow-sm"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                    <span>{CONTACT.location}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: PLACA NFC + IPHONE TITANIUM REALISTA (Ajustado para Celular) */}
              <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2 lg:pt-0">
                
                {/* 1. PLACA DE CIMA (Com Suporte a Swipe no Mobile) */}
                <div
                  className="relative z-10 flex flex-col items-center select-none"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="animate-float-plate relative group">
                    <div
                      key={`top-plate-${selectedProductIndex}`}
                      onClick={handleSimulateTap}
                      title="Clique na placa para aproximar do iPhone!"
                      className="relative cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                      <img
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        className="w-36 xs:w-44 sm:w-48 md:w-52 h-auto rounded-2xl drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)] border-2 border-[#EAB308]/40 filter group-hover:border-[#EAB308] transition-colors"
                      />

                      {/* Tap wave animation if connecting */}
                      {phoneState === "connecting" && (
                        <div className="absolute inset-0 rounded-2xl border-4 border-[#EAB308] animate-ping pointer-events-none"></div>
                      )}
                    </div>

                    {/* Navigation Arrow Left on Top Plate */}
                    <button
                      onClick={handlePrevModel}
                      aria-label="Modelo anterior"
                      className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/85 hover:bg-[#EAB308] text-white hover:text-black border border-[#EAB308]/40 flex items-center justify-center transition-all active:scale-90 shadow-lg cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[3]" />
                    </button>

                    {/* Navigation Arrow Right on Top Plate */}
                    <button
                      onClick={handleNextModel}
                      aria-label="Próximo modelo"
                      className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/85 hover:bg-[#EAB308] text-white hover:text-black border border-[#EAB308]/40 flex items-center justify-center transition-all active:scale-90 shadow-lg cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>

                  {/* Top Plate Selector & Info Bar */}
                  <div className="mt-2.5 text-center flex flex-col items-center gap-1">
                    <button
                      onClick={handleSimulateTap}
                      className={`inline-flex items-center gap-1 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border shadow-sm transition-colors cursor-pointer ${
                        isDark
                          ? "bg-[#100D06]/95 text-[#EAB308] border-[#EAB308]/40 hover:bg-[#EAB308] hover:text-black"
                          : "bg-white text-[#8C6207] border-[#EAB308]/40 hover:bg-[#EAB308] hover:text-[#0A0904]"
                      }`}
                    >
                      <Nfc className="w-3 h-3 animate-pulse" />
                      <span>{currentProduct.name.split("•")[0]}</span>
                    </button>
                    <span
                      className={`text-[9px] flex items-center gap-1 ${
                        isDark ? "text-[#A89A7B]" : "text-[#786B4F]"
                      }`}
                    >
                      <MoveHorizontal className="w-2.5 h-2.5" />
                      Arraste ou use as setas para trocar
                    </span>
                  </div>
                </div>

                {/* 2. ITEM DIREITA: O IPHONE 16 PRO TITANIUM REALISTA (Adaptado para Touch) */}
                <div className="relative z-20 w-[240px] xs:w-[250px] sm:w-[260px] shrink-0">
                  <div className="relative rounded-[2.6rem] border-[5px] border-[#38332d] bg-[#121110] p-2 shadow-2xl ring-1 ring-[#8a765e]/40 ring-offset-2 ring-offset-black">
                    
                    {/* Hardware Side Buttons */}
                    <div className="absolute -left-[7px] top-20 w-[3px] h-7 bg-[#4d443a] rounded-l-sm"></div>
                    <div className="absolute -left-[7px] top-32 w-[3px] h-11 bg-[#4d443a] rounded-l-sm"></div>
                    <div className="absolute -left-[7px] top-48 w-[3px] h-11 bg-[#4d443a] rounded-l-sm"></div>
                    <div className="absolute -right-[7px] top-28 w-[3px] h-14 bg-[#4d443a] rounded-r-sm"></div>

                    {/* iPhone Display Glass */}
                    <div className="rounded-[2.1rem] bg-[#0D0B07] overflow-hidden min-h-[380px] sm:min-h-[390px] flex flex-col justify-between border border-[#EAB308]/15 relative">
                      
                      {/* Dynamic Island & Status Bar */}
                      <div className="pt-2 px-4 pb-1">
                        <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-300">
                          <span>9:41</span>
                          
                          {/* Dynamic Island Pill */}
                          <div className="w-20 h-4.5 rounded-full bg-black flex items-center justify-between px-2 shadow-inner">
                            <span className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800"></span>
                            <span className="w-2 h-2 rounded-full bg-blue-950/70 border border-blue-900/60"></span>
                          </div>

                          <div className="flex items-center gap-1 text-zinc-300">
                            <Wifi className="w-2.5 h-2.5" />
                            <Battery className="w-3 h-3 fill-current" />
                          </div>
                        </div>
                      </div>

                      {/* Screen Interactive Content */}
                      <div className="p-3 flex-1 flex flex-col justify-center">
                        
                        {/* STATE 1: IDLE */}
                        {phoneState === "idle" && (
                          <div className="flex flex-col items-center justify-center text-center space-y-3 py-3 animate-in fade-in duration-300">
                            <div className="w-13 h-13 rounded-full bg-[#241C0A] border border-[#EAB308]/40 flex items-center justify-center text-[#EAB308] shadow-lg shadow-[#EAB308]/15">
                              <Nfc className="w-6 h-6 animate-pulse" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs font-bold text-white">Aguardando aproximação...</p>
                              <p className="text-[10px] text-[#BDB090] px-2 leading-tight">
                                Toque na placa acima ou no botão para testar a leitura.
                              </p>
                            </div>
                            <Button
                              onClick={handleSimulateTap}
                              size="sm"
                              className="bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] font-black text-[11px] uppercase tracking-wider py-1 px-4 rounded-xl shadow-md cursor-pointer active:scale-95"
                            >
                              Aproximar Celular
                            </Button>
                          </div>
                        )}

                        {/* STATE 2: CONNECTING / NFC READING */}
                        {phoneState === "connecting" && (
                          <div className="flex flex-col items-center justify-center text-center space-y-3 py-6 animate-in fade-in duration-150">
                            <div className="relative">
                              <div className="w-14 h-14 rounded-full bg-[#EAB308]/20 flex items-center justify-center text-[#EAB308]">
                                <Radio className="w-8 h-8 animate-spin" />
                              </div>
                              <div className="absolute inset-0 rounded-full border-2 border-[#EAB308] animate-ping"></div>
                            </div>
                            <p className="text-xs font-black text-[#EAB308] tracking-wide">
                              Lendo chip NFC...
                            </p>
                          </div>
                        )}

                        {/* STATE 3: SCREEN OPENED */}
                        {phoneState === "screen" && (
                          <div className="animate-in fade-in zoom-in-95 duration-200">
                            
                            {/* CASE A: GOOGLE REVIEW SCREEN */}
                            {currentProduct.type === "google" && (
                              <div className="space-y-2.5">
                                <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-black text-xs shadow-sm">
                                    <span className="text-blue-500">G</span>
                                  </span>
                                  <div className="text-left leading-none">
                                    <p className="text-[11px] font-bold text-white">Sua Empresa</p>
                                    <p className="text-[9px] text-[#BDB090]">Avaliação no Google Maps</p>
                                  </div>
                                </div>

                                <div className="text-center space-y-1">
                                  <p className="text-[11px] font-semibold text-white">Como foi sua experiência?</p>
                                  <div className="flex justify-center gap-1 py-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <button
                                        key={star}
                                        type="button"
                                        onClick={() => setUserRating(star)}
                                        className="transition-transform hover:scale-125 active:scale-95 cursor-pointer p-0.5"
                                      >
                                        <Star
                                          className={`w-5 h-5 ${
                                            star <= userRating
                                              ? "fill-[#FBBC05] text-[#FBBC05]"
                                              : "text-zinc-700"
                                          }`}
                                        />
                                      </button>
                                    ))}
                                  </div>
                                  <div className="rounded-xl border border-zinc-800 bg-[#1A1509]/90 p-2 text-left">
                                    <p className="text-[9px] text-[#A89A7B] font-mono">Comentário rápido:</p>
                                    <p className="text-[10px] text-white font-medium mt-0.5 leading-snug">
                                      "Atendimento nota 10, super rápido e ambiente incrível! ⭐⭐⭐⭐⭐"
                                    </p>
                                  </div>
                                </div>

                                <Button
                                  onClick={handlePublishReview}
                                  size="sm"
                                  className="w-full bg-[#4285F4] hover:bg-blue-500 font-bold text-white text-[11px] py-1.5 rounded-lg shadow-md cursor-pointer active:scale-95"
                                >
                                  Publicar Avaliação
                                </Button>
                              </div>
                            )}

                            {/* CASE B: INSTAGRAM PROFILE SCREEN */}
                            {currentProduct.type === "instagram" && (
                              <div className="space-y-2 text-left">
                                <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                                  <div className="flex items-center gap-1.5">
                                    <Instagram className="w-4 h-4 text-pink-500" />
                                    <span className="text-[11px] font-bold text-white tracking-tight">@suaempresa</span>
                                  </div>
                                  <span className="text-[9px] text-zinc-400 font-mono">Instagram</span>
                                </div>

                                <div className="flex items-center gap-3">
                                  <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600">
                                    <div className="w-9 h-9 rounded-full bg-zinc-900 border-2 border-black flex items-center justify-center text-[10px] font-black text-white">
                                      LOGO
                                    </div>
                                  </div>
                                  <div className="flex gap-2.5 text-center">
                                    <div>
                                      <p className="text-[11px] font-black text-white">142</p>
                                      <p className="text-[8px] text-zinc-400">posts</p>
                                    </div>
                                    <div>
                                      <p className="text-[11px] font-black text-white">12.8k</p>
                                      <p className="text-[8px] text-zinc-400">seguidores</p>
                                    </div>
                                    <div>
                                      <p className="text-[11px] font-black text-white">410</p>
                                      <p className="text-[8px] text-zinc-400">seguindo</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-0.5 text-[9px] leading-tight">
                                  <p className="font-bold text-white">Sua Loja Oficial • Penápolis</p>
                                  <p className="text-zinc-300">📍 Atendimento presencial & online</p>
                                  <p className="text-blue-400 font-medium">linktr.ee/sualoja</p>
                                </div>

                                <div className="flex gap-1.5 pt-1">
                                  <button
                                    onClick={handleToggleInstagramFollow}
                                    className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all cursor-pointer active:scale-95 ${
                                      isFollowingInstagram
                                        ? "bg-zinc-800 text-[#EAB308] border border-[#EAB308]/40"
                                        : "bg-blue-600 hover:bg-blue-500 text-white"
                                    }`}
                                  >
                                    {isFollowingInstagram ? (
                                      <>
                                        <UserCheck className="w-3 h-3" />
                                        <span>Seguindo ✓</span>
                                      </>
                                    ) : (
                                      <>
                                        <UserPlus className="w-3 h-3" />
                                        <span>Seguir Perfil</span>
                                      </>
                                    )}
                                  </button>
                                  <button
                                    onClick={() => toast.info("Mensagem direta aberta!")}
                                    className="py-1 px-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-bold cursor-pointer"
                                  >
                                    Mensagem
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* CASE C: WHATSAPP CHAT */}
                            {currentProduct.type === "whatsapp" && (
                              <div className="space-y-2 text-left">
                                <div className="bg-[#0b2416] p-2 rounded-xl flex items-center justify-between border border-emerald-500/30">
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-black font-black text-xs">
                                      <MessageCircle className="w-3.5 h-3.5 fill-black" />
                                    </div>
                                    <div>
                                      <p className="text-[10.5px] font-bold text-white leading-none">Sua Loja Atendimento</p>
                                      <p className="text-[8px] text-emerald-400 leading-none mt-0.5 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        online agora
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 text-emerald-400">
                                    <Phone className="w-3.5 h-3.5" />
                                    <Video className="w-3.5 h-3.5" />
                                  </div>
                                </div>

                                <div className="space-y-1.5 py-1">
                                  <div className="bg-[#122319] border border-emerald-500/20 p-2 rounded-2xl rounded-tl-none max-w-[190px] text-[9px] text-zinc-200 leading-snug">
                                    Olá! Seja muito bem-vindo(a) à nossa loja. 😊
                                    <span className="block text-[7px] text-zinc-500 text-right mt-0.5">09:41</span>
                                  </div>
                                  <div className="bg-[#122319] border border-emerald-500/20 p-2 rounded-2xl rounded-tl-none max-w-[195px] text-[9px] text-zinc-200 leading-snug">
                                    Como podemos te ajudar hoje? Toque abaixo para falar com nosso atendente!
                                    <span className="block text-[7px] text-zinc-500 text-right mt-0.5">09:41</span>
                                  </div>
                                </div>

                                <div className="pt-0.5 space-y-1">
                                  <button
                                    onClick={handleSendWhatsAppChat}
                                    className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-[10.5px] flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                                  >
                                    <Send className="w-3.5 h-3.5 fill-black" />
                                    <span>{whatsappMessaged ? "Mensagem Enviada! ✓" : "Conversar no WhatsApp"}</span>
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* CASE D: CUSTOM LINKTREE */}
                            {currentProduct.type === "custom" && (
                              <div className="space-y-2 text-center">
                                <div className="flex flex-col items-center">
                                  <div className="w-10 h-10 rounded-full border-2 border-amber-400 overflow-hidden shadow-lg p-0.5 bg-black">
                                    <img
                                      src="/tagtap/placa-personalizada-saikoo.jpg"
                                      alt="Saikoo"
                                      className="w-full h-full object-cover rounded-full"
                                    />
                                  </div>
                                  <h4 className="text-[11px] font-black text-white mt-1">Saikoo Jiu Jitsu</h4>
                                  <p className="text-[7.5px] text-amber-300 font-medium">Penápolis / SP</p>
                                </div>

                                <div className="space-y-1 pt-0.5 text-left">
                                  <button
                                    onClick={() => toast.success("Link do Google Reviews aberto!")}
                                    className="w-full p-1.5 rounded-xl bg-[#1A1509] hover:bg-[#251E0D] border border-amber-400/40 text-white flex items-center justify-between text-[9.5px] font-bold transition-all cursor-pointer"
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-blue-500 font-black text-[8px]">G</span>
                                      <span>Avalie no Google</span>
                                    </div>
                                    <div className="text-[#FBBC05] text-[8px]">★★★★★</div>
                                  </button>

                                  <button
                                    onClick={() => toast.success("WhatsApp da Saikoo aberto!")}
                                    className="w-full p-1.5 rounded-xl bg-[#1A1509] hover:bg-[#251E0D] border border-emerald-500/40 text-white flex items-center justify-between text-[9.5px] font-bold transition-all cursor-pointer"
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                                        <MessageCircle className="w-2.5 h-2.5 fill-black" />
                                      </span>
                                      <span>WhatsApp / Matrículas</span>
                                    </div>
                                    <ExternalLink className="w-2.5 h-2.5 text-emerald-400" />
                                  </button>
                                </div>
                              </div>
                            )}

                          </div>
                        )}

                        {/* STATE 4: SUCCESS PUBLISHED */}
                        {phoneState === "success" && (
                          <div className="flex flex-col items-center justify-center text-center space-y-2 py-4 animate-in fade-in duration-200">
                            <div className="w-11 h-11 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-white">Avaliação Publicada!</p>
                              <p className="text-[10px] text-[#BFB293] leading-tight mt-0.5">
                                Sua nota 5.0 foi contabilizada no Google em 3 segundos.
                              </p>
                            </div>
                            <button
                              onClick={handleResetPhone}
                              className="inline-flex items-center gap-1 text-[10px] text-[#EAB308] hover:underline pt-1.5 font-bold cursor-pointer"
                            >
                              <RotateCcw className="w-3 h-3" />
                              <span>Testar de novo</span>
                            </button>
                          </div>
                        )}

                      </div>

                      {/* iOS Home Indicator Bar */}
                      <div className="pb-1 pt-0.5">
                        <div className="h-1 w-24 rounded-full bg-white/70 mx-auto"></div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 2: POR QUE SUA EMPRESA PRECISA DESSA PLACA NO BALCÃO  */}
        {/* ============================================================ */}
        <section id="como-funciona" className="space-y-6 sm:space-y-8 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 px-2">
            <span
              className={`text-[11px] sm:text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full border ${
                isDark
                  ? "text-[#EAB308] bg-[#241C0A] border-[#EAB308]/25"
                  : "text-[#8C6207] bg-[#FEF9E7] border-[#EAB308]/30 shadow-sm"
              }`}
            >
              O Poder da Tecnologia NFC
            </span>
            <h2
              className={`text-2xl sm:text-4xl font-black tracking-tight ${
                isDark ? "text-white" : "text-[#1A150B]"
              }`}
            >
              Por que a Placa NFC <span className="text-[#EAB308]">vende tanto?</span>
            </h2>
            <p
              className={`text-xs sm:text-base ${
                isDark ? "text-[#C4B798]" : "text-[#66583D]"
              }`}
            >
              A maioria dos clientes quer avaliar sua loja, mas desiste de digitar o nome. Com a placa, encostou o celular e abriu na hora!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <div
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border space-y-3 sm:space-y-4 transition-all duration-300 group ${
                isDark
                  ? "bg-[#141008] border-[#EAB308]/15 hover:border-[#EAB308]/40"
                  : "bg-white border-[#EAB308]/25 hover:border-[#EAB308]/50 shadow-md shadow-amber-900/5 hover:shadow-lg"
              }`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAB308]/15 border border-[#EAB308]/30 flex items-center justify-center text-[#EAB308] group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-[#1A150B]"}`}>
                Toque em 2 Segundos
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#BDB090]" : "text-[#66583D]"}`}>
                Sem links complicados, sem digitação. O cliente aproxima o smartphone e a tela oficial do Google, Instagram ou WhatsApp abre na hora.
              </p>
              <div className="pt-1 sm:pt-2 text-xs font-bold text-[#EAB308] flex items-center gap-1">
                <span>+340% mais avaliações e seguidores</span>
              </div>
            </div>

            <div
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border space-y-3 sm:space-y-4 transition-all duration-300 group ${
                isDark
                  ? "bg-[#141008] border-[#EAB308]/15 hover:border-[#EAB308]/40"
                  : "bg-white border-[#EAB308]/25 hover:border-[#EAB308]/50 shadow-md shadow-amber-900/5 hover:shadow-lg"
              }`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAB308]/15 border border-[#EAB308]/30 flex items-center justify-center text-[#EAB308] group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-[#1A150B]"}`}>
                Destaque na Cidade
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#BDB090]" : "text-[#66583D]"}`}>
                O algoritmo do Google prioriza empresas com avaliações recentes e notas altas. Sua empresa ganha credibilidade instantânea em Penápolis e região.
              </p>
              <div className="pt-1 sm:pt-2 text-xs font-bold text-[#EAB308] flex items-center gap-1">
                <span>Atrai novos clientes todos os dias</span>
              </div>
            </div>

            <div
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border space-y-3 sm:space-y-4 transition-all duration-300 group ${
                isDark
                  ? "bg-[#141008] border-[#EAB308]/15 hover:border-[#EAB308]/40"
                  : "bg-white border-[#EAB308]/25 hover:border-[#EAB308]/50 shadow-md shadow-amber-900/5 hover:shadow-lg"
              }`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAB308]/15 border border-[#EAB308]/30 flex items-center justify-center text-[#EAB308] group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-[#1A150B]"}`}>
                Design & Durabilidade
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#BDB090]" : "text-[#66583D]"}`}>
                Formato quadrado 8x8cm com cantos arredondados suaves. Material rígido de alta resistência, impermeável e visual impecável.
              </p>
              <div className="pt-1 sm:pt-2 text-xs font-bold text-[#EAB308] flex items-center gap-1">
                <span>Resistente a respingos e limpezas diárias</span>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 3: CATÁLOGO OFICIAL (Touch Swipe Habilitado)          */}
        {/* ============================================================ */}
        <section id="modelos" className="space-y-6 sm:space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <span
              className={`text-[11px] sm:text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full border ${
                isDark
                  ? "text-[#EAB308] bg-[#241C0A] border-[#EAB308]/25"
                  : "text-[#8C6207] bg-[#FEF9E7] border-[#EAB308]/30 shadow-sm"
              }`}
            >
              Catálogo Oficial
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
              <div>
                <h2
                  className={`text-2xl sm:text-4xl font-black tracking-tight ${
                    isDark ? "text-white" : "text-[#1A150B]"
                  }`}
                >
                  Conheça os <span className="text-[#EAB308]">Modelos Disponíveis</span>
                </h2>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    isDark ? "text-[#C4B798]" : "text-[#66583D]"
                  }`}
                >
                  Deslize para os lados ou use as setas para alternar os modelos.
                </p>
              </div>

              {/* Counter Badge */}
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs uppercase font-bold tracking-wider px-3 py-1 sm:py-1.5 rounded-full border ${
                    isDark
                      ? "text-[#CDBFA0] bg-[#1A1509] border-[#EAB308]/25"
                      : "text-[#5C5035] bg-white border-[#EAB308]/30 shadow-sm"
                  }`}
                >
                  Modelo <strong className="text-[#EAB308] font-black">{selectedProductIndex + 1}</strong> de {PRODUCTS.length}
                </span>
              </div>
            </div>
          </div>

          {/* Active Product Big Display Card */}
          <div
            className={`p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative overflow-hidden transition-all duration-300 ${
              isDark
                ? "bg-[#120E06] border-[#EAB308]/25 shadow-2xl"
                : "bg-white border-[#EAB308]/30 shadow-xl shadow-amber-950/5"
            }`}
          >
            {/* Visual Photo Area with Navigation Arrows & Swipe */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`lg:col-span-6 flex flex-col items-center justify-center p-4 sm:p-8 rounded-2xl border relative overflow-hidden group min-h-[300px] sm:min-h-[380px] select-none ${
                isDark
                  ? "bg-gradient-to-b from-[#20180B] to-[#0D0A05] border-[#EAB308]/15"
                  : "bg-gradient-to-b from-[#FFFDF7] to-[#F5EEDC] border-[#EAB308]/30"
              }`}
            >
              {/* Badge Top Left */}
              <div className="absolute top-3 left-3 z-20 text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 sm:px-3 py-1 rounded-full bg-[#EAB308] text-[#0A0904] shadow-md">
                {currentProduct.badge}
              </div>

              {/* Price Tag Top Right if Custom */}
              {currentProduct.isCustom && (
                <div className="absolute top-3 right-3 z-20 text-[10px] sm:text-[11px] font-black uppercase px-2.5 sm:px-3 py-1 rounded-full bg-amber-400 text-black shadow-md">
                  R$ 100,00
                </div>
              )}

              {/* NAVIGATION ARROW LEFT */}
              <button
                onClick={handlePrevModel}
                aria-label="Modelo anterior"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0B0905]/85 hover:bg-[#EAB308] text-white hover:text-[#0A0904] border border-[#EAB308]/40 flex items-center justify-center transition-all duration-200 shadow-xl active:scale-90 backdrop-blur-md cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
              </button>

              {/* NAVIGATION ARROW RIGHT */}
              <button
                onClick={handleNextModel}
                aria-label="Próximo modelo"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0B0905]/85 hover:bg-[#EAB308] text-white hover:text-[#0A0904] border border-[#EAB308]/40 flex items-center justify-center transition-all duration-200 shadow-xl active:scale-90 backdrop-blur-md cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
              </button>

              {/* IMAGE DISPLAY CONTAINER */}
              <div
                key={`cat-image-${selectedProductIndex}`}
                className="w-full flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 py-2"
              >
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] rounded-2xl h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 border border-[#EAB308]/30 shadow-2xl"
                />
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 pt-3 sm:pt-5 z-20">
                {PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelectModel(idx)}
                    aria-label={`Ir para ${prod.name}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      selectedProductIndex === idx
                        ? "w-7 sm:w-8 bg-[#EAB308] shadow-md shadow-[#EAB308]/50"
                        : "w-2 bg-zinc-400/60 hover:bg-[#EAB308]/50"
                    }`}
                  />
                ))}
              </div>

              <div
                className={`mt-2 text-[11px] sm:text-xs font-semibold flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 ${
                  isDark ? "text-[#C4B798]" : "text-[#786B4F]"
                }`}
              >
                <span>8x8cm</span>
                <span>•</span>
                <span>Bordas Arredondadas</span>
                <span>•</span>
                <span>NFC Inteligente</span>
              </div>
            </div>

            {/* Details Area */}
            <div
              key={`cat-details-${selectedProductIndex}`}
              className="lg:col-span-6 space-y-4 sm:space-y-6 animate-in fade-in duration-300"
            >
              <div>
                <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-[#EAB308]">
                  {currentProduct.category} • {currentProduct.format}
                </span>
                <h3
                  className={`text-xl sm:text-3xl font-extrabold mt-1 ${
                    isDark ? "text-white" : "text-[#1A150B]"
                  }`}
                >
                  {currentProduct.name}
                </h3>
                <p
                  className={`text-xs font-semibold uppercase tracking-wide mt-1 ${
                    isDark ? "text-[#B5A582]" : "text-[#8C6207]"
                  }`}
                >
                  {currentProduct.tagline}
                </p>
                <p
                  className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                    isDark ? "text-[#CDBFA0]" : "text-[#5C5035]"
                  }`}
                >
                  {currentProduct.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2">
                {currentProduct.features.map((feat, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                      isDark ? "text-[#F5EEDC]" : "text-[#2D2413]"
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EAB308] flex items-center justify-center text-[#0A0904] shrink-0 text-xs font-black mt-0.5">
                      ✓
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons (Full width on mobile) */}
              <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Olá! Gostaria de encomendar a ${currentProduct.name} (8x8cm).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#EAB308]/25 active:scale-95 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0A0904]" />
                  <span>Pedir Este Modelo</span>
                </a>

                <button
                  onClick={handleSimulateTap}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95 min-h-[44px] ${
                    isDark
                      ? "bg-[#241C0A] hover:bg-[#30250D] border-[#EAB308]/30 text-[#EAB308]"
                      : "bg-[#FEF9E7] hover:bg-[#FDF2C7] border-[#EAB308]/40 text-[#8C6207]"
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Testar no iPhone</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 4: TABELA OFICIAL DE PREÇOS                           */}
        {/* ============================================================ */}
        <section id="precos" className="space-y-6 sm:space-y-8 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 px-2">
            <span
              className={`text-[11px] sm:text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full border ${
                isDark
                  ? "text-[#EAB308] bg-[#241C0A] border-[#EAB308]/25"
                  : "text-[#8C6207] bg-[#FEF9E7] border-[#EAB308]/30 shadow-sm"
              }`}
            >
              Valores Oficiais
            </span>
            <h2
              className={`text-2xl sm:text-4xl font-black tracking-tight ${
                isDark ? "text-white" : "text-[#1A150B]"
              }`}
            >
              Tabela de Preços & <span className="text-[#EAB308]">Descontos Progressivos</span>
            </h2>
            <p
              className={`text-xs sm:text-base ${
                isDark ? "text-[#C4B798]" : "text-[#66583D]"
              }`}
            >
              Quanto mais placas você pedir, menor o valor unitário. Sem mensalidades, pagamento único!
            </p>
          </div>

          {/* 4 Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 ${
                  pkg.popular
                    ? isDark
                      ? "bg-[#1A1509] border-2 border-[#EAB308] shadow-2xl shadow-[#EAB308]/20 md:-translate-y-2"
                      : "bg-[#FFFDF6] border-2 border-[#EAB308] shadow-xl shadow-[#EAB308]/20 md:-translate-y-2"
                    : isDark
                    ? "bg-[#120E06] border border-[#EAB308]/20 hover:border-[#EAB308]/40"
                    : "bg-white border border-[#EAB308]/25 hover:border-[#EAB308]/50 shadow-md shadow-amber-900/5 hover:shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EAB308] text-[#0A0904] font-black text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    ★ {pkg.tag}
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    {!pkg.popular && (
                      <span className="text-[10px] font-extrabold text-[#EAB308] uppercase tracking-wider">
                        {pkg.tag}
                      </span>
                    )}
                    <h3
                      className={`text-lg font-black ${
                        isDark ? "text-white" : "text-[#1A150B]"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        isDark ? "text-[#BFB293]" : "text-[#786B4F]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="py-1">
                    <span
                      className={`text-[11px] ${
                        isDark ? "text-[#BFB293]" : "text-[#786B4F]"
                      }`}
                    >
                      {pkg.unitPrefix || "Apenas"}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base sm:text-lg font-bold text-[#EAB308]">R$</span>
                      <span
                        className={`text-3xl sm:text-4xl font-black ${
                          isDark ? "text-white" : "text-[#1A150B]"
                        }`}
                      >
                        {pkg.price}
                      </span>
                      {pkg.unitSuffix && (
                        <span className="text-xs font-bold text-[#EAB308]">{pkg.unitSuffix}</span>
                      )}
                    </div>
                    {pkg.unitPrice && (
                      <span className="text-[10px] text-[#EAB308] font-bold block mt-0.5">{pkg.unitPrice}</span>
                    )}
                    <span
                      className={`text-[10px] ${
                        isDark ? "text-[#A89A7B]" : "text-[#8C7A58]"
                      }`}
                    >
                      Pagamento único
                    </span>
                  </div>

                  <hr className={`border-[#EAB308]/15`} />

                  <div className="space-y-2">
                    {pkg.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-1.5 text-xs ${
                          isDark ? "text-[#F0E8D5]" : "text-[#3D331E]"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 sm:pt-5">
                  <a
                    href={getWhatsAppUrl(pkg.whatsappMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 min-h-[44px] ${
                      pkg.popular
                        ? "bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] shadow-lg shadow-[#EAB308]/25"
                        : isDark
                        ? "bg-[#241C0A] hover:bg-[#30250D] text-[#EAB308] border border-[#EAB308]/30"
                        : "bg-[#FEF9E7] hover:bg-[#FDF2C7] text-[#8C6207] border border-[#EAB308]/40"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Pedir no WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Special Custom Plate Highlight Banner (R$ 100,00) */}
          <div
            id="personalizada-destaque"
            className={`rounded-3xl p-5 sm:p-10 border-2 border-amber-400/50 relative overflow-hidden shadow-2xl scroll-mt-20 transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-[#241C0A] via-[#1A1509] to-[#100D06]"
                : "bg-gradient-to-r from-[#FFFDF8] via-[#FAF3E2] to-[#EFE3C7]"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider bg-amber-400 text-black px-3 py-1 rounded-full shadow-sm">
                  <Palette className="w-3.5 h-3.5" />
                  Placa Personalizada com a sua Marca
                </div>
                
                <h3
                  className={`text-xl sm:text-4xl font-black ${
                    isDark ? "text-white" : "text-[#1A150B]"
                  }`}
                >
                  Quer uma placa exclusiva com o seu logo?
                </h3>
                
                <p
                  className={`text-xs sm:text-sm leading-relaxed max-w-xl ${
                    isDark ? "text-[#CDBFA0]" : "text-[#5C5035]"
                  }`}
                >
                  Também fabricamos placas 100% personalizadas por apenas <strong className="text-amber-500 font-extrabold text-base">R$ 100,00</strong>. Podemos incluir sua logomarca oficial, cores institucionais e múltiplos atalhos (Avaliação Google ★★★★★, WhatsApp e Instagram) tudo na mesma placa!
                </p>

                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-2">
                  <div
                    className={`flex items-baseline justify-center gap-1 px-4 py-2.5 rounded-xl border ${
                      isDark
                        ? "bg-black/40 border-amber-400/30"
                        : "bg-white/80 border-amber-400/40 shadow-sm"
                    }`}
                  >
                    <span className="text-xs text-amber-500 font-bold">Por apenas</span>
                    <span
                      className={`text-2xl font-black ${
                        isDark ? "text-white" : "text-[#1A150B]"
                      }`}
                    >
                      R$ 100,00
                    </span>
                    <span
                      className={`text-[10px] ${
                        isDark ? "text-[#A89A7B]" : "text-[#8C7A58]"
                      }`}
                    >
                      / unidade
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl("Olá! Gostaria de encomendar uma Placa NFC Personalizada com a logo da minha empresa (R$ 100,00).")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Quero Minha Placa</span>
                  </a>
                </div>
              </div>

              {/* Photo Example (Saikoo) */}
              <div className="md:col-span-4 flex flex-col items-center justify-center pt-2 md:pt-0">
                <div className="relative group cursor-pointer" onClick={() => handleSelectModel(4)}>
                  <img
                    src="/tagtap/placa-personalizada-saikoo.jpg"
                    alt="Exemplo de Placa Personalizada Saikoo Jiu Jitsu"
                    className="w-40 sm:w-56 h-auto rounded-2xl border-2 border-amber-400/50 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/90 text-amber-300 text-[9px] sm:text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full border border-amber-400/50 whitespace-nowrap shadow-md">
                    Exemplo: Saikoo Jiu Jitsu
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 5: LOCAL & SUPORTE COM CARLOS TROFINO                  */}
        {/* ============================================================ */}
        <section
          className={`p-5 sm:p-12 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-[#1E170A] via-[#161208] to-[#100D06] border-[#EAB308]/25"
              : "bg-gradient-to-r from-[#FFFDF8] via-[#FAF3E2] to-[#EFE3C7] border-[#EAB308]/30 shadow-md"
          }`}
        >
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                isDark
                  ? "text-[#EAB308] bg-[#271E0B] border-[#EAB308]/25"
                  : "text-[#8C6207] bg-[#FEF9E7] border-[#EAB308]/30 shadow-sm"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Atendimento Regional
            </div>
            <h3
              className={`text-xl sm:text-3xl font-black ${
                isDark ? "text-white" : "text-[#1A150B]"
              }`}
            >
              Atendemos Penápolis e Região
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? "text-[#CDBFA0]" : "text-[#5C5035]"
              }`}
            >
              Nós geramos o link oficial do seu negócio, gravamos na placa e entregamos pronta para uso imediato no seu balcão.
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs font-semibold text-[#EAB308]">
              <span>✓ Testado antes da entrega</span>
              <span>✓ Suporte pelo WhatsApp</span>
              <span>✓ Ativação sem complicação</span>
            </div>
          </div>

          <div className="w-full md:w-auto text-center md:text-right shrink-0">
            <a
              href={getWhatsAppUrl("Olá Carlos! Gostaria de tirar dúvidas sobre as placas NFC em Penápolis.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#EAB308]/25 active:scale-95 transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0A0904]" />
              <span>Chamar no WhatsApp</span>
            </a>
            <p
              className={`text-[11px] mt-2 font-mono ${
                isDark ? "text-[#A89A7B]" : "text-[#8C7A58]"
              }`}
            >
              {CONTACT.phoneDisplay}
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 6: PERGUNTAS FREQUENTES (FAQ)                         */}
        {/* ============================================================ */}
        <section id="faq" className="space-y-6 max-w-3xl mx-auto scroll-mt-20">
          <div className="text-center space-y-2">
            <span
              className={`text-[11px] sm:text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full border ${
                isDark
                  ? "text-[#EAB308] bg-[#241C0A] border-[#EAB308]/25"
                  : "text-[#8C6207] bg-[#FEF9E7] border-[#EAB308]/30 shadow-sm"
              }`}
            >
              Tire Suas Dúvidas
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-black ${
                isDark ? "text-white" : "text-[#1A150B]"
              }`}
            >
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                    isDark
                      ? "bg-[#120E06] border-[#EAB308]/15 hover:border-[#EAB308]/30"
                      : "bg-white border-[#EAB308]/20 hover:border-[#EAB308]/40 shadow-sm hover:shadow"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-base cursor-pointer min-h-[44px] ${
                      isDark ? "text-white" : "text-[#1A150B]"
                    }`}
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#EAB308] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className={`px-3.5 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed border-t pt-2.5 sm:pt-3 ${
                        isDark
                          ? "text-[#CDBFA0] border-[#EAB308]/10"
                          : "text-[#5C5035] border-[#EAB308]/15"
                      }`}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* ============================================================ */}
      {/* FOOTER                                                      */}
      {/* ============================================================ */}
      <footer
        className={`border-t py-8 sm:py-10 px-4 transition-colors duration-300 ${
          isDark
            ? "border-[#EAB308]/15 bg-[#090805] text-[#9E8E6E]"
            : "border-[#EAB308]/20 bg-[#F4EFE6] text-[#6B5E43]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EAB308] flex items-center justify-center text-[#0A0904] font-black">
              <Nfc className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <span
                className={`font-black text-base tracking-wider ${
                  isDark ? "text-white" : "text-[#1A150B]"
                }`}
              >
                TAG<span className="text-[#EAB308]">TAP</span>
              </span>
              <p
                className={`text-[10px] sm:text-[11px] ${
                  isDark ? "text-[#9E8E6E]" : "text-[#786B4F]"
                }`}
              >
                Placas Inteligentes NFC 8x8cm • Penápolis e Região
              </p>
            </div>
          </div>

          <div
            className={`text-[11px] sm:text-xs space-y-0.5 sm:space-y-1 ${
              isDark ? "text-[#9E8E6E]" : "text-[#786B4F]"
            }`}
          >
            <p>Contato: {CONTACT.email} • {CONTACT.phoneDisplay}</p>
            <p>© {new Date().getFullYear()} Carlos Eduardo Vilanova Trofino. Todos os direitos reservados.</p>
          </div>

          <div>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de fazer meu pedido de placa NFC.")}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all min-h-[40px] ${
                isDark
                  ? "bg-[#241C0A] hover:bg-[#30250D] border-[#EAB308]/30 text-[#EAB308]"
                  : "bg-white hover:bg-amber-50 border-[#EAB308]/40 text-[#8C6207] shadow-sm"
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#EAB308]" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* BOTTOM CONVERSION FLOATING STICKY BAR (Otimizado Mobile)    */}
      {/* ============================================================ */}
      <div className="fixed bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-2 sm:px-4 pointer-events-none">
        <div
          className={`pointer-events-auto backdrop-blur-md border rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-2xl flex items-center justify-between gap-2 sm:gap-3 transition-all duration-300 ${
            isDark
              ? "bg-[#100D06]/95 border-[#EAB308]/40 shadow-black/80"
              : "bg-white/95 border-[#EAB308]/40 shadow-amber-950/15"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#EAB308]"></span>
            </span>
            <div className="text-left">
              <p
                className={`text-[10px] sm:text-[11px] font-black leading-none ${
                  isDark ? "text-white" : "text-[#1A150B]"
                }`}
              >
                Placas NFC 8x8cm
              </p>
              <p className="text-[9px] sm:text-[10px] text-[#EAB308] font-bold leading-none mt-1">A partir de R$ 50,00</p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de pedir a minha Placa NFC 8x8cm agora.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0904] font-black text-[11px] sm:text-xs uppercase tracking-tight shadow-md shadow-[#EAB308]/30 active:scale-95 transition-all shrink-0 min-h-[36px]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#0A0904]" />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
