"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Building, 
  Users, 
  Target,
  Download,
  Filter,
  Eye,
  Bell,
  Timer,
  TrendingUp,
  AlertCircle,
  CheckSquare,
  CalendarDays,
  ArrowRight,
  Building2,
  Store,
  GraduationCap,
  Heart,
  Car,
  Factory,
  Briefcase,
  Shield,
  FileText,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

const timelineData = {
  sectorPublico: [
    {
      año: 1,
      entidades: [
        { 
          nombre: "Poder Ejecutivo", 
          tipo: "ejecutivo",
          descripcion: "Presidencia del Consejo de Ministros y ministerios",
          plazo: "1 año (hasta el 9 de septiembre 2026)",
          estado: "activo",
          progreso: 5,
          tareas: [
            { nombre: "Aprobar política institucional", completada: false },
            { nombre: "Implementar NTP-ISO/IEC 42001:2025", completada: false },
            { nombre: "Publicar código fuente sistemas IA", completada: false },
            { nombre: "Conformar equipos multidisciplinarios", completada: false }
          ],
          requisitos: [
            "Política institucional para uso de IA",
            "Uso de estándares técnicos NTP-ISO/IEC 42001:2025",
            "Publicación de código fuente en plataforma nacional",
            "Supervisión humana en sistemas de alto riesgo"
          ]
        },
        { 
          nombre: "Poder Legislativo", 
          tipo: "legislativo",
          descripcion: "Congreso de la República",
          plazo: "1 año (hasta el 9 de septiembre 2026)",
          estado: "activo",
          progreso: 5,
          tareas: [
            { nombre: "Política de IA parlamentaria", completada: false },
            { nombre: "Evaluación de sistemas actuales", completada: false },
            { nombre: "Capacitación de personal", completada: false },
            { nombre: "Implementación de medidas de seguridad", completada: false }
          ],
          requisitos: [
            "Política para uso ético de IA",
            "Evaluación de sistemas legislativos",
            "Capacitación en IA para funcionarios",
            "Medidas de seguridad y privacidad"
          ]
        },
        { 
          nombre: "Poder Judicial", 
          tipo: "judicial",
          descripcion: "Poder Judicial y Consejo Nacional de la Magistratura",
          plazo: "1 año (hasta el 9 de septiembre 2026)",
          estado: "activo",
          progreso: 5,
          tareas: [
            { nombre: "Análisis de sistemas judiciales", completada: false },
            { nombre: "Política de IA judicial", completada: false },
            { nombre: "Implementación gradual", completada: false },
            { nombre: "Capacitación de jueces", completada: false }
          ],
          requisitos: [
            "Evaluación de sistemas de IA judicial",
            "Política específica para el sector justicia",
            "Implementación con supervisión humana",
            "Capacitación ética en IA"
          ]
        }
      ]
    },
    {
      año: 2,
      entidades: [
        { 
          nombre: "Gobiernos Regionales", 
          tipo: "regional",
          descripcion: "Gobiernos regionales de todo el país",
          plazo: "2 años",
          estado: "pendiente",
          progreso: 0,
          tareas: [
            { nombre: "Diagnóstico de sistemas IA", completada: false },
            { nombre: "Política regional de IA", completada: false },
            { nombre: "Implementación de estándares", completada: false },
            { nombre: "Capacitación regional", completada: false }
          ],
          requisitos: [
            "Diagnóstico de sistemas de IA regionales",
            "Política regional de transformación digital",
            "Adopción de estándares técnicos",
            "Programas de capacitación regional"
          ]
        },
        { 
          nombre: "Universidades Públicas", 
          tipo: "educacion",
          descripcion: "Universidades nacionales e institutos públicos",
          plazo: "2 años",
          estado: "pendiente",
          progreso: 0,
          tareas: [
            { nombre: "Política IA educativa", completada: false },
            { nombre: "Sistemas de evaluación", completada: false },
            { nombre: "Investigación en IA", completada: false },
            { nombre: "Capacitación docente", completada: false }
          ],
          requisitos: [
            "Política de IA para instituciones educativas",
            "Evaluación de sistemas de IA académica",
            "Promoción de investigación en IA",
            "Capacitación de personal docente"
          ]
        },
        { 
          nombre: "Empresas del Estado (FONAFE)", 
          tipo: "empresa",
          descripcion: "Empresas bajo el ámbito de FONAFE",
          plazo: "2 años",
          estado: "pendiente",
          progreso: 0,
          tareas: [
            { nombre: "Auditoría de sistemas IA", completada: false },
            { nombre: "Política corporativa IA", completada: false },
            { nombre: "Implementación de controles", completada: false },
            { nombre: "Reporte de cumplimiento", completada: false }
          ],
          requisitos: [
            "Auditoría completa de sistemas de IA",
            "Política corporativa de IA",
            "Implementación de controles de riesgo",
            "Reportes periódicos de cumplimiento"
          ]
        }
      ]
    },
    {
      año: 3,
      entidades: [
        { 
          nombre: "Gobiernos Locales Tipo A, B, C", 
          tipo: "municipal",
          descripcion: "Municipalidades provinciales y distritales",
          plazo: "3 años",
          estado: "futuro",
          progreso: 0,
          tareas: [
            { nombre: "Inventario de sistemas", completada: false },
            { nombre: "Política municipal IA", completada: false },
            { nombre: "Implementación básica", completada: false },
            { nombre: "Capacitación municipal", completada: false }
          ],
          requisitos: [
            "Inventario de sistemas de IA municipales",
            "Política municipal de IA",
            "Implementación de medidas básicas",
            "Capacitación de funcionarios municipales"
          ]
        }
      ]
    }
  ],

  sectorPrivado: [
    {
      año: 1,
      sectores: [
        { 
          nombre: "Salud", 
          icono: Heart,
          descripcion: "Clínicas, hospitales, seguros de salud",
          plazo: "1 año",
          estado: "activo",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas de IA médica",
            "Supervisión humana obligatoria",
            "Protección de datos de salud",
            "Evaluaciones de impacto regular"
          ]
        },
        { 
          nombre: "Educación", 
          icono: GraduationCap,
          descripcion: "Colegios, universidades, centros educativos",
          plazo: "1 año",
          estado: "activo",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas educativos IA",
            "Supervisión en evaluaciones",
            "Protección de datos estudiantiles",
            "Transparencia algorítmica"
          ]
        },
        { 
          nombre: "Justicia", 
          icono: Shield,
          descripcion: "Estudios jurídicos, consultorías legales",
          plazo: "1 año",
          estado: "activo",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas legales IA",
            "Supervisión humana en decisiones",
            "Confidencialidad de información",
            "Documentación de algoritmos"
          ]
        },
        { 
          nombre: "Seguridad", 
          icono: Shield,
          descripcion: "Empresas de seguridad, vigilancia",
          plazo: "1 año",
          estado: "activo",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Cumplimiento de normativas de vigilancia",
            "Prohibición de vigilancia masiva",
            "Supervisión humana estricta",
            "Evaluaciones de derechos humanos"
          ]
        },
        { 
          nombre: "Economía y Finanzas", 
          icono: TrendingUp,
          descripcion: "Bancos, financieras, fintech",
          plazo: "1 año",
          estado: "activo",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas financieros IA",
            "Supervisión en decisiones crediticias",
            "Protección de datos financieros",
            "Transparencia en algoritmos"
          ]
        },
        { 
          nombre: "Seguros", 
          icono: Shield,
          descripcion: "Compañías de seguros, reaseguros",
          plazo: "1 año",
          estado: "activo",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas de seguros IA",
            "Supervisión en decisiones de pólizas",
            "Protección de datos de clientes",
            "Justificación de decisiones"
          ]
        }
      ]
    },
    {
      año: 2,
      sectores: [
        { 
          nombre: "Transporte", 
          icono: Car,
          descripcion: "Aerolíneas, transporte terrestre, logística",
          plazo: "2 años",
          estado: "pendiente",
          progreso: 0,
          nivelRiesgo: "Medio",
          requisitos: [
            "Evaluación de sistemas de transporte IA",
            "Seguridad en sistemas autónomos",
            "Protección de datos de pasajeros",
            "Supervisión humana crítica"
          ]
        },
        { 
          nombre: "Comercio", 
          icono: Store,
          descripcion: "Retail, e-commerce, comercio electrónico",
          plazo: "2 años",
          estado: "pendiente",
          progreso: 0,
          nivelRiesgo: "Medio",
          requisitos: [
            "Evaluación de sistemas comerciales IA",
            "Transparencia en recomendaciones",
            "Protección de datos de consumo",
            "No discriminación en precios"
          ]
        },
        { 
          nombre: "Trabajo", 
          icono: Briefcase,
          descripcion: "RRHH, reclutamiento, consultoras laborales",
          plazo: "2 años",
          estado: "pendiente",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas RRHH IA",
            "No discriminación en contratación",
            "Supervisión en decisiones laborales",
            "Transparencia en procesos"
          ]
        }
      ]
    },
    {
      año: 3,
      sectores: [
        { 
          nombre: "Producción", 
          icono: Factory,
          descripcion: "Manufactura, industria, producción",
          plazo: "3 años",
          estado: "futuro",
          progreso: 0,
          nivelRiesgo: "Medio",
          requisitos: [
            "Evaluación de sistemas productivos IA",
            "Seguridad en sistemas industriales",
            "Protección de datos operativos",
            "Supervisión humana crítica"
          ]
        },
        { 
          nombre: "Agricultura", 
          icono: Factory,
          descripcion: "Agrotech, agricultura inteligente",
          plazo: "3 años",
          estado: "futuro",
          progreso: 0,
          nivelRiesgo: "Bajo",
          requisitos: [
            "Evaluación de sistemas agrícolas IA",
            "Sostenibilidad ambiental",
            "Protección de datos agrícolas",
            "Impacto en comunidades"
          ]
        },
        { 
          nombre: "Energía", 
          icono: Factory,
          descripcion: "Sector energético, renovables",
          plazo: "3 años",
          estado: "futuro",
          progreso: 0,
          nivelRiesgo: "Alto",
          requisitos: [
            "Evaluación de sistemas energéticos IA",
            "Seguridad en infraestructura crítica",
            "Protección de datos energéticos",
            "Supervisión humana estricta"
          ]
        },
        { 
          nombre: "Minería", 
          icono: Factory,
          descripcion: "Sector minero, extractivo",
          plazo: "3 años",
          estado: "futuro",
          progreso: 5,
          nivelRiesgo: "Medio",
          requisitos: [
            "Evaluación de sistemas mineros IA",
            "Seguridad industrial",
            "Protección de datos operativos",
            "Impacto ambiental y social"
          ]
        }
      ]
    },
    {
      año: 4,
      sectores: [
        { 
          nombre: "Todos los demás sectores", 
          icono: Building2,
          descripcion: "Servicios, entretenimiento, tecnología, etc.",
          plazo: "4 años",
          estado: "futuro",
          progreso: 0,
          nivelRiesgo: "Variable",
          requisitos: [
            "Evaluación según tipo de sistema",
            "Clasificación de riesgo adecuada",
            "Cumplimiento de principios generales",
            "Implementación gradual"
          ]
        }
      ]
    }
  ],

  hitosCriticos: [
    {
      fecha: "9 de septiembre de 2025",
      descripcion: "Publicación del Decreto Supremo 115-2025-PCM en El Peruano",
      estado: "completado",
      impacto: "Muy Alto"
    },
    {
      fecha: "22 de enero de 2026",
      descripcion: "Entrada en vigencia del Decreto Supremo (90 días hábiles)",
      estado: "pendiente",
      impacto: "Muy Alto"
    },
    {
      fecha: "22 de enero de 2026",
      descripcion: "Vigencia de disposiciones específicas para entidades públicas",
      estado: "pendiente",
      impacto: "Alto"
    },
    {
      fecha: "22 de enero de 2026",
      descripcion: "Inicio de cronograma de implementación gradual",
      estado: "pendiente",
      impacto: "Alto"
    },
    {
      fecha: "13 de mayo de 2026",
      descripcion: "SGTD aprueba Lineamientos Éticos (180 días hábiles)",
      estado: "pendiente",
      impacto: "Alto"
    },
    {
      fecha: "9 de septiembre de 2026",
      descripcion: "Primer plazo sector público y privado (1 año)",
      estado: "futuro",
      impacto: "Muy Alto"
    },
    {
      fecha: "9 de septiembre de 2026",
      descripcion: "Aprobación ENIA y ENGD (1 año)",
      estado: "futuro",
      impacto: "Muy Alto"
    },
    {
      fecha: "9 de septiembre de 2027",
      descripcion: "Segundo plazo sector privado (2 años)",
      estado: "futuro",
      impacto: "Medio"
    },
    {
      fecha: "9 de septiembre de 2028",
      descripcion: "Tercer plazo sector privado (3 años)",
      estado: "futuro",
      impacto: "Medio"
    },
    {
      fecha: "9 de septiembre de 2029",
      descripcion: "Cuarto plazo sector privado (4 años)",
      estado: "futuro",
      impacto: "Bajo"
    }
  ]
};

export default function PlazosPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedSector, setSelectedSector] = useState('publico');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'completado': return 'bg-green-100 text-green-800 border-green-200';
      case 'activo': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pendiente': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'futuro': return 'bg-slate-100 text-slate-800 border-slate-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiesgoColor = (nivel: string) => {
    switch (nivel) {
      case 'Alto': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medio': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Bajo': return 'bg-green-100 text-green-800 border-green-200';
      case 'Variable': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-500/30">
                <CalendarDays className="w-4 h-4 mr-2" />
                Gestión de Plazos
              </Badge>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-200 hover:bg-blue-800/20">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Calendario
                </Button>
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-200 hover:bg-blue-800/20">
                  <Bell className="w-4 h-4 mr-2" />
                  Configurar Alertas
                </Button>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Timeline de Implementación
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl">
              Cronograma detallado de plazos y fechas límite para el cumplimiento del Reglamento de IA de Perú
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">4</div>
                <div className="text-blue-200">Años de Implementación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10</div>
                <div className="text-blue-200">Hitos Críticos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12+</div>
                <div className="text-blue-200">Sectores Afectados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">90</div>
                <div className="text-blue-200">Días Hábiles de Vigencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="timeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            <TabsTrigger value="timeline" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Timer className="w-4 h-4 mr-2" />
              Timeline General
            </TabsTrigger>
            <TabsTrigger value="publico" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Building className="w-4 h-4 mr-2" />
              Sector Público
            </TabsTrigger>
            <TabsTrigger value="privado" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Store className="w-4 h-4 mr-2" />
              Sector Privado
            </TabsTrigger>
          </TabsList>

          {/* Timeline General */}
          <TabsContent value="timeline" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-blue-600" />
                    Hitos Críticos del Reglamento
                  </CardTitle>
                  <CardDescription>
                    Fechas clave y plazos importantes para la implementación
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {timelineData.hitosCriticos.map((hito, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-4 p-4 rounded-lg border-l-4 border-l-blue-500 bg-slate-50">
                          <div className="flex-shrink-0">
                            <div className={`w-3 h-3 rounded-full ${
                              hito.estado === 'completado' ? 'bg-green-500' :
                              hito.estado === 'pendiente' ? 'bg-amber-500' : 'bg-slate-400'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-slate-900">{hito.descripcion}</h4>
                              <div className="flex items-center gap-2">
                                <Badge className={getEstadoColor(hito.estado)}>
                                  {hito.estado}
                                </Badge>
                                <Badge variant="outline">
                                  Impacto: {hito.impacto}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="w-4 h-4" />
                              {hito.fecha}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Sector Público */}
          <TabsContent value="publico" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Sector Público</h2>
                  <p className="text-slate-600">Cronograma de implementación para entidades públicas</p>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "outline"}
                      onClick={() => setSelectedYear(year)}
                      className="min-w-[80px]"
                    >
                      Año {year}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {timelineData.sectorPublico
                  .filter(periodo => periodo.año === selectedYear)
                  .map((periodo) =>
                    periodo.entidades.map((entidad, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{entidad.nombre}</CardTitle>
                              <Badge className={getEstadoColor(entidad.estado)}>
                                {entidad.estado}
                              </Badge>
                            </div>
                            <CardDescription>{entidad.descripcion}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium">Progreso</span>
                                  <span className="text-sm text-slate-600">{entidad.progreso}%</span>
                                </div>
                                <Progress value={entidad.progreso} className="h-2" />
                              </div>

                              <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Clock className="w-4 h-4" />
                                <span>Plazo: {entidad.plazo}</span>
                              </div>

                              <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Tareas Principales</h4>
                                <div className="space-y-2">
                                  {entidad.tareas.map((tarea, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                      <Checkbox checked={tarea.completada} disabled />
                                      <span className={`text-sm ${tarea.completada ? 'line-through text-slate-500' : 'text-slate-700'}`}>
                                        {tarea.nombre}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Requisitos Clave</h4>
                                <ul className="space-y-1">
                                  {entidad.requisitos.map((req, i) => (
                                    <li key={i} className="text-sm text-slate-600 flex items-start">
                                      <CheckSquare className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  )}
              </div>
            </motion.div>
          </TabsContent>

          {/* Sector Privado */}
          <TabsContent value="privado" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Sector Privado</h2>
                  <p className="text-slate-600">Cronograma de implementación para empresas privadas</p>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "outline"}
                      onClick={() => setSelectedYear(year)}
                      className="min-w-[80px]"
                    >
                      Año {year}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {timelineData.sectorPrivado
                  .filter(periodo => periodo.año === selectedYear)
                  .map((periodo) =>
                    periodo.sectores.map((sector, index) => {
                      const IconComponent = sector.icono;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <IconComponent className="w-5 h-5 text-blue-600" />
                                  <CardTitle className="text-lg">{sector.nombre}</CardTitle>
                                </div>
                                <Badge className={getEstadoColor(sector.estado)}>
                                  {sector.estado}
                                </Badge>
                              </div>
                              <CardDescription>{sector.descripcion}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div>
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Progreso</span>
                                    <span className="text-sm text-slate-600">{sector.progreso}%</span>
                                  </div>
                                  <Progress value={sector.progreso} className="h-2" />
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <Clock className="w-4 h-4" />
                                  <span>Plazo: {sector.plazo}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium">Nivel de Riesgo:</span>
                                  <Badge className={getRiesgoColor(sector.nivelRiesgo)}>
                                    {sector.nivelRiesgo}
                                  </Badge>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-slate-900 mb-2">Requisitos Específicos</h4>
                                  <ul className="space-y-1">
                                    {sector.requisitos.slice(0, 3).map((req, i) => (
                                      <li key={i} className="text-sm text-slate-600 flex items-start">
                                        <CheckSquare className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                  {sector.requisitos.length > 3 && (
                                    <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
                                      Ver todos los requisitos
                                      <ArrowRight className="w-3 h-3 ml-1" />
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })
                  )}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Alert Section */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200">
              <CardContent className="py-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 mr-2" />
                    <h3 className="text-2xl font-bold text-slate-900">¡Atención a los Plazos!</h3>
                  </div>
                  <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
                    Los primeros plazos vencen en septiembre de 2026. Asegúrese de iniciar su proceso de implementación lo antes posible para evitar sanciones y garantizar el cumplimiento.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => {
                        // Functionality to configure reminders
                        alert('Función de configuración de recordatorios próximamente disponible');
                      }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Configurar Recordatorios
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-amber-600 text-amber-700 hover:bg-amber-50"
                      onClick={() => {
                        // Functionality to download implementation guide
                        window.open('/api/reglamento-pdf', '_blank');
                      }}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Descargar Guía de Implementación
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}