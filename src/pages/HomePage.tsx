import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingLayeredCards from '@/components/sections/pricing/PricingLayeredCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Award, Shield, Sparkles } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Tu momento de calma"
      title="Belleza y Bienestar en Armonía"
      description="Descubre nuestros tratamientos estéticos exclusivos diseñados para resaltar tu belleza natural con la máxima serenidad."
      primaryButton={{
        text: "Reservar Cita",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Ver Servicios",
        href: "#servicios",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/black-white-nude-woman-full-shot_23-2149428721.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-flowers-mirror_23-2148879007.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/spray-bottle-blue-hair_23-2152001435.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mirror-vases-background-zoom-calls_23-2149684461.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elements-relaxing-massage-spa_23-2148176934.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-amazing-interior-design_23-2150534609.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Quiénes somos"
      title="Excelencia en Estética"
      description="Nuestra estética se enfoca en ofrecer una experiencia premium con técnicas innovadoras y un trato cercano."
      items={[
        {
          icon: Sparkles,
          title: "Tratamientos Premium",
          description: "Soluciones personalizadas para cada tipo de piel.",
        },
        {
          icon: Shield,
          title: "Seguridad Total",
          description: "Productos de alta gama y protocolos certificados.",
        },
        {
          icon: Award,
          title: "Expertos Certificados",
          description: "Personal altamente capacitado para tu cuidado.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/relaxed-woman-receiving-facial-massage-with-herbal-balls-spa-treatment-beauty-salon_637285-2177.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="servicios" data-section="servicios">
    <SectionErrorBoundary name="servicios">
          <FeaturesDetailedSteps
      tag="Nuestra Metodología"
      title="Pasos hacia tu mejor versión"
      description="Seguimos un proceso cuidadoso para asegurar resultados visibles y duraderos."
      steps={[
        {
          tag: "Paso 1",
          title: "Diagnóstico",
          subtitle: "Evaluación gratuita",
          description: "Analizamos tu piel para personalizar tu tratamiento.",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-composition-with-thai-orchid-flowers-bath-accessories_169016-17218.jpg",
        },
        {
          tag: "Paso 2",
          title: "Tratamiento",
          subtitle: "Tecnología avanzada",
          description: "Aplicamos los métodos más eficaces con cuidado.",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-composition-objects_169016-6411.jpg",
        },
        {
          tag: "Paso 3",
          title: "Seguimiento",
          subtitle: "Cuidado continuo",
          description: "Te asesoramos para mantener los resultados en casa.",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-soap-with-wooden-hairbrush_23-2147844987.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="productos" data-section="productos">
    <SectionErrorBoundary name="productos">
          <FeaturesImageBento
      tag="Nuestra Línea"
      title="Productos de Alta Calidad"
      description="Solo utilizamos lo mejor para tu piel."
      items={[
        {
          title: "Sueros Premium",
          description: "Hidratación profunda.",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-cosmetics-product-with-soft-pink-tones_23-2151005504.jpg",
        },
        {
          title: "Mascarillas",
          description: "Rejuvenecimiento intenso.",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-beauty-product-skincare_23-2151307294.jpg",
        },
        {
          title: "Aceites",
          description: "Nutrición natural.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-organic-body-care-serum_23-2148317629.jpg",
        },
        {
          title: "Jabones",
          description: "Limpieza suave.",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-flowers-white-background_23-2148345624.jpg",
        },
        {
          title: "Cremas",
          description: "Protección diaria.",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetics-product-with-balloons_187299-46268.jpg",
        },
        {
          title: "Esencias",
          description: "Claridad y brillo.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-razor-blade_23-2151102218.jpg",
        },
        {
          title: "Piedras Spa",
          description: "Relajación total.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-relaxing-indoors_23-2151030602.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingLayeredCards
      tag="Inversión en ti"
      title="Planes de Belleza"
      description="Elige la experiencia que mejor se adapte a tus necesidades."
      plans={[
        {
          tag: "Básico",
          price: "$45",
          description: "Limpieza facial profunda y masaje.",
          primaryButton: {
            text: "Elegir",
            href: "#contact",
          },
          features: [
            "Limpieza",
            "Hidratación",
            "Masaje",
          ],
        },
        {
          tag: "Premium",
          price: "$90",
          description: "Tratamiento completo con aparatología.",
          primaryButton: {
            text: "Elegir",
            href: "#contact",
          },
          features: [
            "Todo lo básico",
            "Aparatología",
            "Contorno ojos",
          ],
        },
        {
          tag: "Elite",
          price: "$150",
          description: "Experiencia completa de lujo.",
          primaryButton: {
            text: "Elegir",
            href: "#contact",
          },
          features: [
            "Todo lo premium",
            "Peeling Químico",
            "Regalo sorpresa",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Resultados comprobados"
      title="Nuestros logros en cifras"
      description="La confianza de nuestros clientes nos impulsa a seguir mejorando."
      metrics={[
        {
          value: "1500+",
          title: "Clientes satisfechos",
          description: "Personas que han confiado en nuestro cuidado.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-confident-young-chambermaid-hotel-room_23-2148033192.jpg",
        },
        {
          value: "98%",
          title: "Resultados visibles",
          description: "Porcentaje de clientes satisfechos con su cambio.",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-looking-her-reflection_23-2148147523.jpg",
        },
        {
          value: "10+",
          title: "Certificaciones",
          description: "Avalan nuestra experiencia y técnica.",
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-smiling-blonde-fashion-model-sits-white-suit-soft-armchair_8353-5476.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Experiencias"
      title="Lo que dicen nuestras clientas"
      description="Tu satisfacción es nuestro mayor éxito."
      testimonials={[
        {
          name: "Ana García",
          role: "Clienta frecuente",
          quote: "Increíble trato, mi piel ha mejorado notablemente.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-blonde-short-haired-woman-posing-white-shirt_23-2149021781.jpg",
        },
        {
          name: "Laura Méndez",
          role: "Primera visita",
          quote: "La mejor experiencia de spa que he tenido jamás.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-plus-sized-woman-influencer_23-2151414125.jpg",
        },
        {
          name: "Sofía Ruiz",
          role: "Clienta",
          quote: "Un lugar lleno de paz y profesionales expertos.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-girl-is-happy-smiling-laughing-look-stright-expressive-facial-expressions-cosmet_1258-143998.jpg",
        },
        {
          name: "Elena Torres",
          role: "Clienta frecuente",
          quote: "Excelente servicio, los resultados son inmediatos.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-care-herself_23-2148976931.jpg",
        },
        {
          name: "Lucía Rey",
          role: "Clienta",
          quote: "Totalmente recomendado, volveré muy pronto seguro.",
          imageSrc: "http://img.b2bpic.net/free-photo/bride-getting-hair-done-side-view_23-2149860771.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contacto"
      text="¿Lista para comenzar tu transformación?"
      primaryButton={{
        text: "WhatsApp",
        href: "https://wa.me/1234567890",
      }}
      secondaryButton={{
        text: "Email",
        href: "mailto:info@esteticaluxe.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
