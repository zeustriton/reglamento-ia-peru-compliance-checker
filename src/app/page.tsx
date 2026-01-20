"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Clock, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  Users,
  Building,
  Eye,
  Calendar,
  BookOpen,
  Target,
  Award,
  Globe,
  Zap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-16">
        <div className="absolute inset-0 bg-slate-800 opacity-10"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 bg-blue-600/20 text-blue-200 border-blue-500/30">
              <Globe className="w-4 h-4 mr-2" />
              Reglamento Ley 31814 - Decreto Supremo 115-2025-PCM
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Reglamento de Inteligencia Artificial
              <span className="text-blue-400"> del Perú - RIA Compliance Checker</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Herramienta corporativa para el análisis, evaluación y cumplimiento del 
              Reglamento de Inteligencia Artificial del Perú
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/compliance">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Iniciar Evaluación
                </Button>
              </Link>
              <Link href="/reglamento">
                <Button size="lg" variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800/20 px-8 py-6 text-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Ver Reglamento
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">6</div>
                <div className="text-blue-200">Títulos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">36</div>
                <div className="text-blue-200">Artículos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">3</div>
                <div className="text-blue-200">Niveles de Riesgo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">4</div>
                <div className="text-blue-200">Años de Implementación</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Analice, evalúe y cumpla con el reglamento de IA de Perú de manera eficiente y profesional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Compliance Checker</CardTitle>
                <CardDescription>
                  Evaluación interactiva del nivel de cumplimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Diagnóstico personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Informes detallados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Recomendaciones específicas
                  </li>
                </ul>
                <Link href="/compliance">
                  <Button className="w-full mt-4">
                    Comenzar Evaluación
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Gestión de Plazos</CardTitle>
                <CardDescription>
                  Timeline detallado con fechas límite de implementación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                    Cronograma sector público
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                    Cronograma sector privado
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                    Alertas automáticas
                  </li>
                </ul>
                <Link href="/plazos">
                  <Button className="w-full mt-4">
                    Ver Plazos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Reglamento Completo</CardTitle>
                <CardDescription>
                  Acceso al texto completo del Decreto Supremo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                    6 Títulos y 36 Artículos
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                    Búsqueda de contenido
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                    Descarga PDF
                  </li>
                </ul>
                <Link href="/reglamento">
                  <Button className="w-full mt-4">
                    Ver Reglamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Risk Classification */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Clasificación de Riesgos IA</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Entienda los tres niveles de clasificación establecidos en el reglamento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full bg-red-900/20 border-red-500/30 text-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <Badge variant="destructive">Prohibido</Badge>
                  </div>
                  <CardTitle className="text-xl text-red-400">Uso Indebido</CardTitle>
                  <CardDescription className="text-red-200">
                    Sistemas completamente prohibidos por su potencial daño
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Manipulación subliminal</li>
                    <li>• Capacidad letal autónoma</li>
                    <li>• Vigilancia masiva sin base legal</li>
                    <li>• Predicción criminal basada en perfiles</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-amber-900/20 border-amber-500/30 text-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Eye className="w-8 h-8 text-amber-400" />
                    <Badge className="bg-amber-600 hover:bg-amber-700">Alto Riesgo</Badge>
                  </div>
                  <CardTitle className="text-xl text-amber-400">Riesgo Alto</CardTitle>
                  <CardDescription className="text-amber-200">
                    Sistemas permitidos con controles estrictos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Gestión de activos críticos</li>
                    <li>• Evaluación educativa</li>
                    <li>• Procesos de selección personal</li>
                    <li>• Acceso a servicios de salud</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full bg-green-900/20 border-green-500/30 text-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <Badge className="bg-green-600 hover:bg-green-700">Aceptable</Badge>
                  </div>
                  <CardTitle className="text-xl text-green-400">Riesgo Aceptable</CardTitle>
                  <CardDescription className="text-green-200">
                    Todos los demás sistemas con cumplimiento general
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Cumplimiento de principios generales</li>
                    <li>• Transparencia algorítmica</li>
                    <li>• Supervisión humana</li>
                    <li>• Rendición de cuentas</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Evaluar su Cumplimiento?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Comience ahora mismo con nuestra herramienta de evaluación y obtenga un informe detallado de su nivel de cumplimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/compliance">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  <Target className="w-5 h-5 mr-2" />
                  Comenzar Evaluación
                </Button>
              </Link>
              <Link href="/reglamento">
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-200 hover:bg-blue-700/20 px-8 py-6 text-lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ver Documentación
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Autor</h3>
              <p className="text-slate-400 mb-2">
                <strong>Roberto Puyó - Kepler Blacklock</strong>
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Desarrollador independiente especializado en plataformas corporativas de compliance y análisis regulatorio.
              </p>
              <div className="flex flex-col space-y-2">
                <p className="text-xs leading-relaxed">
                  <strong>Opinión Personal:</strong> El contenido, análisis y conclusiones son a título estrictamente personal del autor como desarrollador independiente. No representan la postura oficial ni políticas de entidad estatal alguna.
                </p>
                <p className="text-xs leading-relaxed mt-2">
                  <strong>Autor:</strong> Kepler Blacklock
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Plataforma</h3>
              <p className="text-slate-400 mb-4">
                <strong>Perú IA Compliance Platform</strong>
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Herramienta C-Level para análisis y cumplimiento del Reglamento de Inteligencia Artificial de Perú (Decreto Supremo 115-2025-PCM).
              </p>
              <div className="space-y-2">
                <p className="text-xs leading-relaxed">
                  <strong>Tecnología:</strong> Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
                </p>
                <p className="text-xs leading-relaxed">
                  <strong>Versión:</strong> 1.0.0
                </p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-sm text-slate-500">
            © 2025 Perú IA Compliance Platform. Desarrollado por Roberto Puyó - Kepler Blacklock.
          </div>
        </div>
      </footer>
    </div>
  );
}