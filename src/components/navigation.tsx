"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  X, 
  Shield, 
  FileText, 
  CheckCircle, 
  Calendar,
  Home
} from "lucide-react";

const navigationItems = [
  {
    name: "Inicio",
    href: "/",
    icon: Home,
    description: "Resumen general"
  },
  {
    name: "Reglamento",
    href: "/reglamento",
    icon: FileText,
    description: "Contenido completo del decreto"
  },
  {
    name: "Compliance Checker",
    href: "/compliance",
    icon: CheckCircle,
    description: "Evaluación de cumplimiento",
    badge: "Nuevo"
  },
  {
    name: "Plazos",
    href: "/plazos",
    icon: Calendar,
    description: "Timeline de implementación"
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const [pathname, setPathname] = useState("/");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Usar pathname del router en lugar de window.location para evitar bucles
    setPathname(typeof window !== 'undefined' ? window.location.pathname : "/");
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para manejar navegación segura
  const handleNavigation = (href: string) => {
    try {
      router.push(href);
    } catch (error) {
      console.error('Error de navegación:', error);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-xl transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                RIA Compliance Perú
              </span>
            </Link>

            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <div key={item.href} onClick={() => handleNavigation(item.href)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`flex items-center space-x-2 transition-all duration-300 ${
                        scrolled 
                          ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50" 
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      } ${isActive ? (scrolled ? "bg-blue-600 text-white" : "bg-white/20 text-white") : ""}`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs px-2 py-0">
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-lg transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                RIA Compliance Perú
              </span>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    scrolled 
                      ? "text-slate-700 hover:text-blue-600" 
                      : "text-white hover:text-white/80"
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <div key={item.href} onClick={() => {
                        handleNavigation(item.href);
                        setIsOpen(false);
                      }}>
                        <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? "bg-blue-50 text-blue-600 border border-blue-200" 
                            : "text-slate-700 hover:bg-slate-50"
                        }`}>
                          <IconComponent className="w-5 h-5" />
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-slate-500">{item.description}</div>
                          </div>
                          {item.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}