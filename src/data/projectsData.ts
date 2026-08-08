export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  myPartUrl?: string;
  hideInHome?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "교통봇 : 음성 기반 대중교통 안내 서비스",
    description: "호출어 '교통봇' 감지와 음성 인식을 기반으로 실시간 버스 도착 정보를 제공하는 음성 AI 서비스입니다. 저는 Whisper 기반 STT를 구현하고, 광주 BIS OpenAPI를 연동했습니다.",
    image: "/2. 전체 파이프라인 구조도.png",
    tags: ["TEAM", "VOICE AI"],
    stack: ["Python", "Whisper", "OpenWakeWord", "GPT-SoVITS"],
    githubUrl: "https://github.com/seohyeonmun/first-project",
    myPartUrl: ""
  },
  {
    id: 2,
    title: "멀티 페르소나 창작 지원 AI 서비스",
    description: "소설 작가, 광고 스토리보드 작가, 게임 시나리오 라이터, 영화 시나리오 각본가 페르소나를 설계한 팀 프로젝트입니다. 저는 소설 작가 페르소나의 데이터셋 구축, LoRA 파인튜닝, 프롬프트 설계 및 평가를 담당했습니다.",
    image: "/창작콘텐츠제작도우미.png",
    tags: ["TEAM", "LLM"],
    stack: ["Python", "Qwen3-8B", "LoRA", "QLoRA", "PEFT"],
    githubUrl: "https://github.com/2026-EST-AIHuman-3/multi_persona_writer",
    myPartUrl: "https://github.com/2026-EST-AIHuman-3/multi_persona_writer/tree/main/ai/novelist"
  },
  {
    id: 3,
    title: "FinePrint - 구독 서비스 소비자 보호 AI Agent",
    description: "구독 서비스의 해지·환불·자동결제 문제를 약관과 소비자 보호 자료를 기반으로 분석하고, 검증된 답변과 다음 행동을 안내하는 AI Agent입니다. 저는 LangGraph 기반 근거 검증과 답변 개선 흐름을 설계·구현했습니다.",
    image: "/FinePrint메인페이지.png",
    tags: ["TEAM", "AI AGENT"],
    stack: ["LangGraph", "LangChain", "OpenAI GPT-4o", "FastAPI", "ChromaDB", "React", "TypeScript"],
    githubUrl: "https://github.com/2026-EST-AIHuman-3/FinePrint",
    myPartUrl: "https://github.com/2026-EST-AIHuman-3/FinePrint/tree/main/msh/agent"
  },
  {
    id: 4,
    title: "Momentum Clone",
    description: "실시간 정보와 개인 할 일을 한 화면에서 확인할 수 있도록 만든 바닐라 JavaScript 기반 브라우저 대시보드입니다.",
    image: "/momentum.png",
    tags: ["PERSONAL", "FRONTEND"],
    stack: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    githubUrl: "https://github.com/seohyeonmun/seohyun.github.io",
    demoUrl: "https://seohyeonmun.github.io/seohyun.github.io/"
  },
  {
    id: 5,
    title: "새 프로젝트 (New Project)",
    description: "프로젝트 추가 예정입니다.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["PERSONAL", "PROJECT"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/seohyeonmun",
    hideInHome: true
  }
];
