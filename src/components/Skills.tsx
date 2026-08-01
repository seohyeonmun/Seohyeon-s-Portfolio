import React from 'react';
import { 
  Code2, 
  Globe2, 
  BarChart3, 
  Cpu, 
  Bot, 
  Eye, 
  Server, 
  Wrench,
  Brain,
  Sliders,
  Zap,
  Binary,
  GitFork,
  Link as LinkIcon,
  Database,
  AudioWaveform,
  Cloud,
  Scan,
  FileText,
  Camera
} from 'lucide-react';
import { 
  SiPython, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiPytorch, 
  SiHuggingface, 
  SiOpenai, 
  SiFastapi, 
  SiGradio, 
  SiOpencv, 
  SiGit, 
  SiGithub, 
  SiGooglecolab, 
  SiAnaconda, 
  SiLinux,
  SiOllama
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

export function Skills() {
  return (
    <section className="py-section-gap-desktop bg-gray-light" id="skills">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-black">Technical Proficiency</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Card 1: 언어 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Code2 size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">언어</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiPython /> Python
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 웹 프론트엔드 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Globe2 size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">웹 프론트엔드</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiHtml5 /> HTML5
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiCss /> CSS3
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiJavascript /> JavaScript
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: 데이터·머신러닝 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">데이터 · 머신러닝</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiPandas /> Pandas
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiNumpy /> NumPy
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiScikitlearn /> scikit-learn
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiPytorch /> PyTorch
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: LLM·파인튜닝 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Cpu size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">LLM · 파인튜닝</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiHuggingface /> Hugging Face
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Brain size={16} /> Transformers
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Cpu size={16} /> PEFT
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Zap size={16} /> TRL
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Sliders size={16} /> LoRA
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Zap size={16} /> QLoRA
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Binary size={16} /> BitsAndBytes
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: AI Agent·RAG */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Bot size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">AI Agent · RAG</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <LinkIcon size={16} /> LangChain
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <GitFork size={16} /> LangGraph
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiOpenai /> OpenAI API
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Database size={16} /> FAISS
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Database size={16} /> ChromaDB
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiOllama /> Ollama
                </span>
              </div>
            </div>
          </div>

          {/* Card 6: 음성·컴퓨터 비전 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Eye size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">음성 · 컴퓨터 비전</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <AudioWaveform size={16} /> Whisper
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiOpencv /> OpenCV
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Camera size={16} /> MediaPipe
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Scan size={16} /> YOLO
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <FileText size={16} /> Tesseract OCR
                </span>
              </div>
            </div>
          </div>

          {/* Card 7: API·서비스 구현 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Server size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">API · 서비스 구현</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiFastapi /> FastAPI
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiGradio /> Gradio
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Server size={16} /> REST API
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <Cloud size={16} /> 공공데이터포털 OpenAPI
                </span>
              </div>
            </div>
          </div>

          {/* Card 8: 협업 및 개발 도구 */}
          <div className="bg-white p-6 md:p-8 border border-border-subtle rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center text-gray-mid group-hover:text-black group-hover:bg-gray-200/80 transition-colors">
                  <Wrench size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-black">협업 · 개발 도구</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiGit /> Git
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiGithub /> GitHub
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <TbBrandVscode /> VSCode
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiGooglecolab /> Google Colab
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiAnaconda /> Conda
                </span>
                <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-black border border-black/10 px-3.5 py-2 rounded-full bg-gray-light/50">
                  <SiLinux /> Linux
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

