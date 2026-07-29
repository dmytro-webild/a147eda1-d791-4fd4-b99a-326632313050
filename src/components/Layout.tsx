import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Servicios",
    "href": "#servicios"
  },
  {
    "name": "Precios",
    "href": "#pricing"
  },
  {
    "name": "Contacto",
    "href": "#contact"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Productos",
    "href": "#productos"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Estética Luxe"
      ctaButton={{
        text: "Reserva",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Estética Luxe"
      columns={[
        {
          title: "Navegación",
          items: [
            {
              label: "Inicio",
              href: "#hero",
            },
            {
              label: "Servicios",
              href: "#servicios",
            },
            {
              label: "Contacto",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacidad",
              href: "#",
            },
            {
              label: "Cookies",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Estética Luxe. Todos los derechos reservados."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Facebook",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
