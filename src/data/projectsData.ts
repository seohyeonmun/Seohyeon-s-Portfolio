export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: string[];
  githubUrl: string;
  myPartUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "교통봇 : 음성 기반 대중교통 안내 서비스",
    description: "호출어 '교통봇' 감지와 음성 인식을 기반으로 실시간 버스 도착 정보를 제공하는 음성 AI 서비스입니다.",
    image: "/2. 전체 파이프라인 구조도.png",
    tags: ["AI SERVICE", "VOICE ASSISTANT"],
    stack: ["Python", "Whisper", "OpenWakeWord", "GPT-SoVITS"],
    githubUrl: "https://github.com/seohyeonmun/first-project",
    myPartUrl: ""
  },
  {
    id: 2,
    title: "멀티 페르소나 창작 지원 AI 서비스",
    description: "소설 작가, 광고 스토리보드 작가, 게임 시나리오 라이터, 영화 시나리오 각본가 페르소나를 설계한 팀 프로젝트입니다. 저는 소설 작가 페르소나의 데이터셋 구축, LoRA 파인튜닝, 프롬프트 설계 및 평가를 담당했습니다.",
    image: "/창작콘텐츠제작도우미.png",
    tags: ["LLM SERVICE", "LoRA"],
    stack: ["Python", "Qwen3-8B", "LoRA", "QLoRA", "PEFT"],
    githubUrl: "https://github.com/2026-EST-AIHuman-3/multi_persona_writer",
    myPartUrl: "https://github.com/2026-EST-AIHuman-3/multi_persona_writer/tree/main/ai/novelist"
  },
  {
    id: 3,
    title: "FinePrint - 구독형 서비스 약관 기반 소비자 보호 AI Agent",
    description: "........",
    image: "/FinePrint메인페이지.png",
    tags: ["AI AGENT", "CONSUMER PROTECTION"],
    stack: ["..", "...", "...."],
    githubUrl: "https://github.com/2026-EST-AIHuman-3/FinePrint",
    myPartUrl: "https://github.com/2026-EST-AIHuman-3/FinePrint/tree/main/msh/agent"
  },
  {
    id: 4,
    title: "추후 프로젝트 추가 예정입니다.",
    description: "........",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5sRmtKc3-r9DNmPf63xj40x6ko0E7CEPzvfvjMTrEr2O1cQH4YCftIzKNl8MPtdIP5-9jl2nKTFrJz7ueYFesi1FQpStjXLehHIjbUxAGpNTD6C1gLifXJ-DCe5Y7SJ1i77Nrv_UIqKyBMqSsvo4Z0FAfF1P262bwF6U6eSYOwQG3SFEaEGpDpsbkHjjyBHekVzbpIXB7XnK4GanvmsWl0Igev1nIR6HdZqOZ2rP8ZDH5mt1luSiaj40lYRsnBaFhdwPccWgTOSo",
    tags: ["1", "2"],
    stack: ["..", "...", "...."],
    githubUrl: "#"
  }
];
