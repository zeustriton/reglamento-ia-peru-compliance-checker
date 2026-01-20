"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  Target,
  Shield,
  Users,
  Building,
  Clock,
  FileText,
  Download,
  Share2,
  TrendingUp,
  Eye,
  AlertCircle,
  CheckSquare,
  Calendar,
  BarChart3,
  Lightbulb,
  Zap,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

interface Question {
  id: string;
  category: string;
  question: string;
  type: 'radio' | 'checkbox';
  options?: string[];
  required: boolean;
  points: number;
}

interface ComplianceResult {
  category: string;
  score: number;
  level: 'cumple' | 'parcial' | 'no-cumple';
  recommendations: string[];
  deadlines: string[];
}

const complianceQuestions: Question[] = [
  // Información General
  {
    id: 'org-type',
    category: 'Información General',
    question: '¿Qué tipo de organización es?',
    type: 'radio',
    options: ['Entidad Pública', 'Empresa Privada', 'MIPYME', 'Organización Civil', 'Institución Educativa'],
    required: true,
    points: 10
  },
  {
    id: 'ia-usage',
    category: 'Información General',
    question: '¿Su organización actualmente utiliza sistemas de Inteligencia Artificial?',
    type: 'radio',
    options: ['Sí, sistemas propios', 'Sí, sistemas de terceros', 'Estamos implementando', 'No, pero planeamos hacerlo', 'No tenemos planes'],
    required: true,
    points: 10
  },
  {
    id: 'ia-systems',
    category: 'Información General',
    question: '¿En qué áreas utiliza IA? (Seleccione todas las apliquen)',
    type: 'checkbox',
    options: [
      'Gestión de Recursos Humanos',
      'Atención al Cliente',
      'Análisis de Datos',
      'Seguridad',
      'Marketing',
      'Toma de Decisiones',
      'Productos/Servicios',
      'No utilizamos IA'
    ],
    required: false,
    points: 15
  },

  // Principios Rectores
  {
    id: 'human-supervision',
    category: 'Principios Rectores',
    question: '¿Cuenta con mecanismos de supervisión humana para las decisiones de sus sistemas de IA?',
    type: 'radio',
    options: ['Sí, para todos los sistemas', 'Sí, para sistemas críticos', 'Parcialmente', 'No, estamos implementando', 'No contamos con esto'],
    required: true,
    points: 20
  },
  {
    id: 'non-discrimination',
    category: 'Principios Rectores',
    question: '¿Ha implementado medidas para prevenir la discriminación y sesgos en sus sistemas de IA?',
    type: 'radio',
    options: ['Sí, con evaluaciones regulares', 'Sí, con medidas básicas', 'Parcialmente', 'No, estamos trabajando en ello', 'No hemos considerado esto'],
    required: true,
    points: 20
  },
  {
    id: 'data-privacy',
    category: 'Principios Rectores',
    question: '¿Cumple con las regulaciones de protección de datos personales en sus sistemas de IA?',
    type: 'radio',
    options: ['Sí, completamente', 'Sí, en su mayoría', 'Parcialmente', 'No, estamos en proceso', 'No cumplimos'],
    required: true,
    points: 20
  },
  {
    id: 'transparency',
    category: 'Principios Rectores',
    question: '¿Sus sistemas de IA son transparentes sobre cómo toman decisiones?',
    type: 'radio',
    options: ['Sí, totalmente explicables', 'Sí, con documentación', 'Parcialmente', 'No, pero estamos mejorando', 'No son transparentes'],
    required: true,
    points: 15
  },

  // Gestión y Gobernanza
  {
    id: 'policy-ia',
    category: 'Gestión y Gobernanza',
    question: '¿Su organización tiene una política institucional para el uso de IA?',
    type: 'radio',
    options: ['Sí, completa y actualizada', 'Sí, pero necesita actualización', 'En desarrollo', 'No, pero planeamos crearla', 'No tenemos política'],
    required: true,
    points: 25
  },
  {
    id: 'risk-assessment',
    category: 'Gestión y Gobernanza',
    question: '¿Ha realizado evaluaciones de impacto para sus sistemas de IA de alto riesgo?',
    type: 'radio',
    options: ['Sí, para todos los sistemas', 'Sí, para sistemas críticos', 'Parcialmente', 'Estamos en proceso', 'No hemos realizado evaluaciones'],
    required: true,
    points: 25
  },
  {
    id: 'training',
    category: 'Gestión y Gobernanza',
    question: '¿Su personal ha recibido capacitación sobre ética y uso responsable de IA?',
    type: 'radio',
    options: ['Sí, todo el personal relevante', 'Sí, personal clave', 'Parcialmente', 'Estamos implementando', 'No hemos capacitado'],
    required: true,
    points: 15
  },

  // Cumplimiento Técnico
  {
    id: 'technical-standards',
    category: 'Cumplimiento Técnico',
    question: '¿Utiliza estándares técnicos reconocidos en el desarrollo de sus sistemas de IA?',
    type: 'radio',
    options: ['Sí, estándares internacionales', 'Sí, estándares nacionales', 'Parcialmente', 'Estamos adoptando', 'No utilizamos estándares'],
    required: true,
    points: 20
  },
  {
    id: 'security-measures',
    category: 'Cumplimiento Técnico',
    question: '¿Ha implementado medidas de seguridad cibernética específicas para sus sistemas de IA?',
    type: 'radio',
    options: ['Sí, medidas avanzadas', 'Sí, medidas básicas', 'Parcialmente', 'En implementación', 'No tenemos medidas específicas'],
    required: true,
    points: 20
  },
  {
    id: 'documentation',
    category: 'Cumplimiento Técnico',
    question: '¿Mantiene documentación actualizada sobre el funcionamiento de sus sistemas de IA?',
    type: 'radio',
    options: ['Sí, completa y detallada', 'Sí, documentación básica', 'Parcialmente', 'Mejorando documentación', 'No tenemos documentación'],
    required: true,
    points: 15
  }
];

export default function CompliancePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    const categoryScores: Record<string, { total: number; obtained: number }> = {};
    
    complianceQuestions.forEach(question => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { total: 0, obtained: 0 };
      }
      
      categoryScores[question.category].total += question.points;
      
      const answer = answers[question.id];
      if (answer) {
        if (question.type === 'radio') {
          const optionIndex = question.options?.indexOf(answer as string);
          if (optionIndex !== undefined) {
            const score = (1 - (optionIndex / (question.options!.length - 1))) * question.points;
            categoryScores[question.category].obtained += Math.max(0, score);
          }
        } else if (question.type === 'checkbox') {
          const selectedOptions = answer as string[];
          const score = (selectedOptions.length / question.options!.length) * question.points;
          categoryScores[question.category].obtained += score;
        }
      }
    });

    return categoryScores;
  };

  const generateResults = (): ComplianceResult[] => {
    const scores = calculateScore();
    const results: ComplianceResult[] = [];

    Object.entries(scores).forEach(([category, score]) => {
      const percentage = (score.obtained / score.total) * 100;
      let level: 'cumple' | 'parcial' | 'no-cumple';
      let recommendations: string[] = [];
      let deadlines: string[] = [];

      if (percentage >= 80) {
        level = 'cumple';
        recommendations = [
          'Mantener las prácticas actuales',
          'Considerar certificación de calidad',
          'Compartir mejores prácticas con el sector'
        ];
        deadlines = ['Continuo', 'Anual', 'Trimestral'];
      } else if (percentage >= 50) {
        level = 'parcial';
        recommendations = [
          'Desarrollar políticas formales',
          'Implementar medidas de supervisión humana',
          'Realizar evaluaciones de impacto',
          'Capacitar al personal'
        ];
        deadlines = ['3-6 meses', '6-12 meses', '1 año'];
      } else {
        level = 'no-cumple';
        recommendations = [
          'Crear política institucional de IA urgente',
          'Implementar medidas básicas de cumplimiento',
          'Buscar asesoría especializada',
          'Priorizar sistemas críticos',
          'Establecer cronograma de implementación'
        ];
        deadlines = ['1-3 meses', '3-6 meses', '6 meses', '1 año'];
      }

      results.push({
        category,
        score: Math.round(percentage),
        level,
        recommendations,
        deadlines
      });
    });

    return results;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setShowResults(true);
    setIsSubmitting(false);
  };

  const goToNext = () => {
    if (currentQuestion < complianceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / complianceQuestions.length) * 100;

const generatePDFReport = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const { jsPDF } = await import('jspdf');
      
      const results = generateResults();
      const overallScore = Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length);
      
      // Create PDF
      const pdf = new jsPDF();
      
      // Set up basic formatting
      pdf.setFont('helvetica');
      pdf.setFontSize(16);
      
      let y = 20;
      const pageHeight = pdf.internal.pageSize.height;
      const margin = 20;
      const lineHeight = 8;
      
      // Helper function to check if we need a new page
      const checkPageBreak = (requiredSpace: number) => {
        if (y + requiredSpace > pageHeight - margin) {
          pdf.addPage();
          y = 20;
        }
      };
      
      // Title
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('INFORME DE EVALUACIÓN DE COMPLIANCE', margin, y);
      y += 15;
      
      pdf.setFontSize(16);
      pdf.text('REGLAMENTO DE INTELIGENCIA ARTIFICIAL DEL PERÚ', margin, y);
      y += 10;
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Decreto Supremo N° 115-2025-PCM', margin, y);
      y += 15;
      
      // Date and score
      pdf.setFontSize(12);
      pdf.text(`FECHA: ${new Date().toLocaleDateString('es-PE')}`, margin, y);
      y += 10;
      
      pdf.text(`PUNTUACIÓN GENERAL: ${overallScore}%`, margin, y);
      y += 8;
      
      const status = overallScore >= 80 ? 'CUMPLE' : overallScore >= 50 ? 'PARCIALMENTE' : 'NO CUMPLE';
      pdf.text(`ESTADO: ${status}`, margin, y);
      y += 15;
      
      // Separator
      pdf.setFont('helvetica', 'bold');
      pdf.text('===============================================', margin, y);
      y += 15;
      
      // Results by category
      pdf.setFontSize(14);
      pdf.text('RESULTADOS POR CATEGORÍA:', margin, y);
      y += 10;
      
      results.forEach((result, index) => {
        checkPageBreak(30);
        
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text(result.category.toUpperCase(), margin, y);
        y += 8;
        
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Puntuación: ${result.score}%`, margin, y);
        y += 6;
        pdf.text(`Estado: ${result.level.toUpperCase()}`, margin, y);
        y += 8;
        
        pdf.setFont('helvetica', 'bold');
        pdf.text('Recomendaciones:', margin, y);
        y += 6;
        
        pdf.setFont('helvetica', 'normal');
        result.recommendations.forEach(rec => {
          checkPageBreak(6);
          pdf.text(`• ${rec}`, margin + 5, y);
          y += 6;
        });
        
        y += 5;
        checkPageBreak(20);
        
        pdf.setFont('helvetica', 'bold');
        pdf.text('Plazos Sugeridos:', margin, y);
        y += 6;
        
        pdf.setFont('helvetica', 'normal');
        result.deadlines.forEach(deadline => {
          checkPageBreak(6);
          pdf.text(`• ${deadline}`, margin + 5, y);
          y += 6;
        });
        
        if (index < results.length - 1) {
          y += 5;
          pdf.text('-----------------------------------------------', margin, y);
          y += 10;
        }
      });
      
      // Executive summary
      checkPageBreak(40);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.text('===============================================', margin, y);
      y += 10;
      pdf.text('RESUMEN EJECUTIVO:', margin, y);
      y += 10;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      
      const summaryText = overallScore >= 80 ? 
        'Su organización demuestra un nivel de cumplimiento adecuado con el Reglamento de IA. Se recomienda mantener las prácticas actuales y considerar certificación de calidad.' :
        overallScore >= 50 ?
        'Su organización muestra un nivel de cumplimiento parcial. Es necesario desarrollar políticas formales, implementar medidas de supervisión humana, realizar evaluaciones de impacto y capacitar al personal.' :
        'Su organización requiere acción urgente para cumplir con el reglamento. Se debe crear una política institucional de IA, implementar medidas básicas, buscar asesoría especializada y priorizar sistemas críticos.';
      
      // Split long text into lines
      const lines = pdf.splitTextToSize(summaryText, 170);
      lines.forEach((line: string) => {
        checkPageBreak(6);
        pdf.text(line, margin, y);
        y += 6;
      });
      
      y += 10;
      checkPageBreak(50);
      
      // Next steps
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.text('PRÓXIMOS PASOS:', margin, y);
      y += 10;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      
      const nextSteps = [
        '1. Desarrollar política institucional de IA (si no existe)',
        '2. Implementar medidas de supervisión humana',
        '3. Realizar evaluaciones de impacto en sistemas de alto riesgo',
        '4. Capacitar al personal en ética y uso responsable de IA',
        '5. Establecer mecanismos de transparencia y rendición de cuentas'
      ];
      
      nextSteps.forEach(step => {
        checkPageBreak(6);
        pdf.text(step, margin, y);
        y += 6;
      });
      
      // Footer
      checkPageBreak(50);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(12);
      pdf.text('===============================================', margin, y);
      y += 10;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text('Este informe fue generado mediante la plataforma RIA Compliance Checker', margin, y);
      y += 6;
      pdf.text('y constituye una herramienta de orientación para el cumplimiento del', margin, y);
      y += 6;
      pdf.text('Reglamento de Inteligencia Artificial del Perú.', margin, y);
      y += 10;
      pdf.text('Para más información, consulte el texto completo del', margin, y);
      y += 6;
      pdf.text('Decreto Supremo N° 115-2025-PCM.', margin, y);
      y += 10;
      pdf.text('© 2025 RIA Compliance Checker - Desarrollado por Roberto Puyó', margin, y);
      
      // Save PDF
      pdf.save(`Informe_Compliance_IA_${new Date().toISOString().split('T')[0]}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, intente nuevamente.');
    }
  };
  if (!mounted) return null;

  if (showResults) {
    const results = generateResults();
    const overallScore = Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="mb-6">
                {overallScore >= 80 ? (
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                ) : overallScore >= 50 ? (
                  <AlertTriangle className="w-20 h-20 text-amber-500 mx-auto" />
                ) : (
                  <XCircle className="w-20 h-20 text-red-500 mx-auto" />
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Informe de Evaluación de Compliance
              </h1>
              
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600">{overallScore}%</div>
                    <div className="text-slate-600">Puntuación General</div>
                  </div>
                  <div className="text-center">
                    <Badge 
                      variant={overallScore >= 80 ? "default" : overallScore >= 50 ? "secondary" : "destructive"}
                      className="text-lg px-6 py-2"
                    >
                      {overallScore >= 80 ? 'Cumple' : overallScore >= 50 ? 'Parcialmente' : 'No Cumple'}
                    </Badge>
                  </div>
                </div>
                
                <Progress value={overallScore} className="h-4" />
              </div>
            </div>

            {/* Results by Category */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{result.category}</CardTitle>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-blue-600">{result.score}%</span>
                          {result.level === 'cumple' && <CheckCircle className="w-6 h-6 text-green-500" />}
                          {result.level === 'parcial' && <AlertTriangle className="w-6 h-6 text-amber-500" />}
                          {result.level === 'no-cumple' && <XCircle className="w-6 h-6 text-red-500" />}
                        </div>
                      </div>
                      <Progress value={result.score} className="h-2" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                            <Lightbulb className="w-4 h-4 mr-2 text-amber-500" />
                            Recomendaciones
                          </h4>
                          <ul className="space-y-1">
                            {result.recommendations.map((rec, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start">
                                <CheckSquare className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-green-500" />
                            Plazos Sugeridos
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {result.deadlines.map((deadline, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {deadline}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardContent className="py-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Próximos Pasos</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Descargue su informe completo y comience a implementar las recomendaciones para cumplir con el Reglamento de IA de Perú.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={generatePDFReport}>
                      <Download className="w-5 h-5 mr-2" />
                      Descargar Informe PDF
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-300 text-blue-200 hover:bg-blue-700/20">
                      <Share2 className="w-5 h-5 mr-2" />
                      Compartir Resultados
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-300 text-blue-200 hover:bg-blue-700/20">
                      <FileText className="w-5 h-5 mr-2" />
                      Ver Plan de Acción
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = complianceQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === complianceQuestions.length - 1;
  const canProceed = answers[question.id] || !question.required;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              <Shield className="w-4 h-4 mr-2" />
              Compliance Checker
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Evaluación de Cumplimiento
            </h1>
            <p className="text-xl text-slate-600">
              Evalúe su nivel de cumplimiento con el Reglamento de IA de Perú
            </p>
          </div>

          {/* Progress */}
          <Card className="mb-8">
            <CardContent className="py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-600">
                  Pregunta {currentQuestion + 1} de {complianceQuestions.length}
                </span>
                <span className="text-sm font-medium text-slate-600">
                  {Math.round(progress)}% Completado
                </span>
              </div>
              <Progress value={progress} className="h-3" />
              <div className="mt-2">
                <Badge variant="outline" className="text-xs">
                  {question.category}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  {question.question}
                </CardTitle>
                {question.required && (
                  <CardDescription className="text-red-600">
                    * Esta pregunta es requerida
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {question.type === 'radio' && question.options && (
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      const isSelected = answers[question.id] === option;
                      return (
                        <Button
                          key={index}
                          variant={isSelected ? "default" : "outline"}
                          className={`w-full justify-start h-auto p-4 text-left whitespace-normal transition-all duration-300 ${
                            isSelected 
                              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg transform scale-[1.02]" 
                              : "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-md border-slate-300 text-slate-700"
                          }`}
                          onClick={() => handleAnswer(question.id, option)}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                              isSelected 
                                ? "border-white bg-white" 
                                : "border-slate-400"
                            }`}>
                              {isSelected && (
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                              )}
                            </div>
                            <span className="flex-1">{option}</span>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                )}

                {question.type === 'checkbox' && question.options && (
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      const isChecked = (answers[question.id] as string[] || []).includes(option);
                      return (
                        <Button
                          key={index}
                          variant={isChecked ? "default" : "outline"}
                          className={`w-full justify-start h-auto p-4 text-left whitespace-normal transition-all duration-300 ${
                            isChecked 
                              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg transform scale-[1.02]" 
                              : "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-md border-slate-300 text-slate-700"
                          }`}
                          onClick={() => {
                            const current = (answers[question.id] as string[]) || [];
                            if (isChecked) {
                              handleAnswer(question.id, current.filter(item => item !== option));
                            } else {
                              handleAnswer(question.id, [...current, option]);
                            }
                          }}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                              isChecked 
                                ? "border-white bg-white" 
                                : "border-slate-400"
                            }`}>
                              {isChecked && (
                                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 00-1.414 1.414L8.586 13.586l3.707 3.707a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            <span className="flex-1">{option}</span>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed || isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Target className="w-4 h-4" />
                    Ver Resultados
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={goToNext}
                disabled={!canProceed}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}