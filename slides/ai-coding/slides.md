---
theme: seriph
title: "특별 강의 — AI 코딩 에이전트"
info: |
  일반물리 I (PHY1001-13) 2026년 1학기
  서강대학교
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Noto Sans'
  local: 'Noto Sans, Noto Sans KR'
---

# AI 코딩 에이전트

### Special Lecture: AI Coding Agents

<div class="abs-b mb-12 text-sm opacity-70">
최영우 · 서강대학교
<br>
2026년 1학기 일반물리 I
</div>

---
layout: default
---

# 코딩, AI 코딩, AI 코딩 에이전트

<div class="mt-6">

<v-clicks>

- **코딩** = 컴퓨터에게 일을 시키기 위해 코드를 직접 작성하는 것
- **AI 코딩** = "이런 코드 짜줘" → AI가 코드를 생성 → 복사/붙여넣기해서 실행
- **AI 코딩 에이전트** = "이거 만들어줘" → AI가 코드 작성 + 실행 + 수정까지 **알아서**

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

| | 코딩 | AI 코딩 (챗봇) | AI 에이전트 |
|------|---------|------|---------|
| **비유** | 직접 요리 | 레시피 알려주는 셰프 | 주문하면 요리해주는 셰프 |
| **진입 장벽** | 높음 | 중간 | 낮음 |

</div>

</v-click>

</div>

---
layout: default
---

# AI 코딩 에이전트의 작동 원리

<div class="mt-12 flex items-center justify-center gap-4 text-xl">

<div class="p-4 bg-blue-500 bg-opacity-15 rounded-xl text-center">
🗣️<br/>
<b>사용자 요청</b>
</div>

<div class="text-3xl">→</div>

<div class="p-4 bg-orange-500 bg-opacity-15 rounded-xl text-center">
🧠<br/>
<b>AI가 계획</b>
</div>

<div class="text-3xl">→</div>

<div class="p-4 bg-green-500 bg-opacity-15 rounded-xl text-center">
🔧<br/>
<b>도구 실행</b>
</div>

<div class="text-3xl">→</div>

<div class="p-4 bg-purple-500 bg-opacity-15 rounded-xl text-center">
👀<br/>
<b>결과 확인</b>
</div>

</div>

<div class="mt-8 text-center text-lg">

완료될 때까지 <b>AI가 스스로 반복</b> 🔄

</div>

---
layout: default
---

# Demo: Claude Code

<div class="mt-6">

### Anthropic의 AI 코딩 에이전트

<v-clicks>

- **터미널**에서 자연어로 요청
- 코드 작성, 실행, 수정을 **자율적으로** 수행
- 프로젝트 전체를 이해하고 작업
- 설치: `npm install -g @anthropic-ai/claude-code`

</v-clicks>

</div>

---
layout: section
---

# 2. GitHub Education Pack

학생을 위한 무료 개발 도구

---
layout: default
---

# GitHub Education Pack이란?

<div class="mt-4">

### 학생 인증만으로 받을 수 있는 무료 혜택

<v-clicks>

- **GitHub Pro** 무료 (Private 리포지토리 무제한 등)
- **GitHub Copilot** 무료 사용
- **GitHub Codespaces** 월 90시간 코어 무료
- 기타 파트너 혜택 (클라우드 크레딧, 도메인, 개발 도구 등)

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**신청 방법**:
1. [education.github.com](https://education.github.com) 접속
2. 학교 이메일(`.ac.kr`)로 GitHub 가입
3. Student Developer Pack 신청
4. 학생증 또는 재학증명서 업로드
5. 보통 며칠 내 승인

</div>

</v-click>

</div>

---
layout: default
---

# Education Pack 주요 혜택

<div class="mt-2">

| 도구 | 혜택 | 용도 |
|------|------|------|
| GitHub Copilot | 무료 | AI 코드 자동완성 |
| GitHub Codespaces | 90시간/월 | 클라우드 개발 환경 |
| JetBrains IDEs | 무료 라이선스 | 전문 IDE (PyCharm 등) |
| Azure | $100 크레딧 | 클라우드 서비스 |
| Namecheap | 무료 `.me` 도메인 | 개인 웹사이트 |
| GitLens Pro | 무료 | Git 히스토리 시각화 |

</div>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**추천**: **Copilot** + **Codespaces** + **VS Code**를 먼저 활용해보세요.
데이터 분석, 시뮬레이션, 과제 작성에 큰 도움이 됩니다.

</div>

</v-click>

---
layout: default
---

# Copilot Student 플랜 변경 (2026.03.12~)

<div class="mt-4">

### 무엇이 바뀌었나?

<v-clicks>

- 학생 Copilot 접근이 새로운 **GitHub Copilot Student** 플랜으로 전환
- **무료 접근은 유지** — 학생 인증 상태, PRU(Premium Request Unit) 할당량 변경 없음
- 별도 조치 불필요 — 기존 계정 그대로 사용

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-15 rounded-lg">

**제한 사항**: 일부 프리미엄 모델(GPT-5.4, Claude Opus, Claude Sonnet 등)은 더 이상 **직접 선택 불가**

- 단, **Auto 모드**에서는 AI가 작업에 적합한 모델을 자동으로 선택하여 계속 사용 가능
- GitHub가 전 세계 학생에게 **지속 가능한 무료 제공**을 위해 내린 결정

</div>

</v-click>

</div>

---
layout: section
---

# 3. GitHub & 개발 도구 생태계

GitHub, Copilot, Codespaces, VS Code

---
layout: default
---

# GitHub — 코드 협업 플랫폼

<div class="mt-4">

### Git + 클라우드 = GitHub

<v-clicks>

- **Git**: 코드 버전 관리 시스템 (로컬)
  - 변경 이력 추적, 브랜치, 병합
- **GitHub**: Git 저장소를 클라우드에 호스팅
  - 협업, 코드 리뷰, 이슈 관리
- 전 세계 개발자의 **표준 플랫폼**

</v-clicks>

<v-click>

### 왜 중요한가?

- 연구 코드 관리 (시뮬레이션, 데이터 분석)
- 팀 프로젝트 협업
- 포트폴리오 구축
- 재현 가능한 연구 (Reproducible Research)

</v-click>

</div>

---
layout: default
---

# VS Code — 코드 에디터

<div class="mt-4">

### Microsoft의 무료 코드 에디터

<v-clicks>

- **가볍고 빠른** 텍스트 에디터 + IDE 기능
- **확장 프로그램**으로 기능 무한 확장
  - Python, LaTeX, Jupyter Notebook, Git 등
- **터미널 내장** — 별도 터미널 불필요
- **거의 모든 프로그래밍 언어** 지원

</v-clicks>

<v-click>

### 유용한 VS Code 확장

- **Python** + **Jupyter**: 데이터 분석, 시뮬레이션
- **LaTeX Workshop**: 논문/보고서 작성
- **GitHub Copilot**: AI 코딩 도우미
- **Remote - SSH**: 서버 원격 접속 (HPC 클러스터 등)

</v-click>

</div>

---
layout: default
---

# GitHub Copilot — AI 코딩 도우미

<div class="grid grid-cols-2 gap-6 mt-2">
<div>

<v-clicks>

### 코드 자동완성
- 주석이나 함수명을 쓰면 **코드를 자동 생성**
- Tab 키로 수락

### Copilot Chat
- VS Code 내에서 코드에 대해 **질문/설명 요청**

### Agent Mode
- **에이전트 모드** — 파일 생성/수정, 터미널 명령 실행
- 자율적으로 **여러 파일에 걸친 작업** 수행
- Student 플랜: **Auto 모드** 사용 권장 (프리미엄 모델 직접 선택 제한)

</v-clicks>

</div>
<div>

<img src="/img/copilot-agent-mode.png" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">
Copilot Agent Mode in VS Code
</div>

</div>
</div>

---
layout: default
---

# GitHub Codespaces — 클라우드 개발 환경

<div class="mt-4">

### 브라우저에서 바로 코딩

<v-clicks>

- GitHub 리포지토리를 **클라우드 VM**에서 즉시 실행
- VS Code가 **브라우저에서** 그대로 동작
- 설치, 환경 설정 **불필요** — 열면 바로 시작
- Education Pack으로 **월 90시간 무료**

</v-clicks>

<v-click>

### 활용 시나리오

- 팀 프로젝트에서 **동일한 개발 환경** 보장
- 새로운 언어/프레임워크 빠르게 시도
- 어디서든 (태블릿, 다른 PC) 이어서 작업

</v-click>

<v-click>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**시작하기**: GitHub 리포지토리에서 `.` 키를 누르거나, Code 버튼 → Codespaces 탭

</div>

</v-click>

</div>

---
layout: section
---

# 4. AI 코딩 에이전트 활용 예시

Examples of Using Coding Agents

---
layout: default
---

# 예시 1: 물리 시뮬레이션

<div class="mt-2">

### 이중 진자 (Double Pendulum) 시뮬레이션

<v-clicks>

- **요청**: "이중 진자 시뮬레이션을 Python으로 만들어줘. 애니메이션도 포함해줘."
- **에이전트가 하는 일**:
  1. 운동 방정식 구현 (Lagrangian 역학)
  2. 수치 적분 (scipy.integrate)
  3. matplotlib 애니메이션 코드 작성
  4. 실행 및 디버깅
  5. 초기 조건에 따른 카오스 거동 시각화

</v-clicks>

<v-click>

<div class="mt-2 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 물리적 개념을 이해하고 있다면, 구현은 AI 에이전트에게 맡길 수 있다.
**문제 정의**와 **결과 해석**에 집중하는 것이 중요.

</div>

</v-click>

</div>

---
layout: default
---

# 예시 2: 데이터 분석 자동화

<div class="mt-2">

### 실험 데이터 처리 파이프라인

<v-clicks>

- **요청**: "이 CSV 파일에서 전압-전류 데이터를 읽고, 선형 회귀로 저항값을 구해줘."
- **에이전트가 하는 일**:
  1. CSV 파일 구조 파악
  2. pandas로 데이터 로드 및 전처리
  3. scipy로 선형 회귀 수행
  4. 오차 분석 및 불확도 계산
  5. 그래프 생성 (데이터 점 + 피팅 곡선)
  6. 결과 요약 출력

</v-clicks>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의**: AI가 생성한 분석 결과는 반드시 **물리적으로 타당한지 검증**해야 합니다.
숫자가 맞더라도 물리적 의미가 틀릴 수 있습니다.

</div>

</v-click>

</div>

---
layout: default
---

# 예시 3: LaTeX 문서 작성

<div class="mt-2">

### 실험 보고서 템플릿 생성

<v-clicks>

- **요청**: "물리 실험 보고서 LaTeX 템플릿을 만들어줘. 표, 그래프, 오차 분석 섹션 포함."
- **에이전트가 하는 일**:
  1. 보고서 구조 설계 (제목, 목적, 이론, 실험 방법, 결과, 분석, 결론)
  2. LaTeX 코드 작성
  3. 표, 그림 환경 설정
  4. 참고문헌 (BibTeX) 설정
  5. 컴파일 및 오류 수정

</v-clicks>

<v-click>

### 기타 활용

- 수식이 포함된 **과제 풀이** 문서화
- **프레젠테이션** 슬라이드 생성 (이 슬라이드도 AI로 제작!)
- 논문 초고 구조 잡기

</v-click>

</div>

---
layout: default
---

# 예시 4: 웹 애플리케이션 개발

<div class="mt-2">

### 교육용 인터랙티브 시각화

<v-clicks>

- **요청**: "전기장 시각화 웹앱을 만들어줘. 점전하를 마우스로 배치하면 전기장 선이 그려지도록."
- **에이전트가 하는 일**:
  1. HTML/CSS/JavaScript 프로젝트 구조 생성
  2. Canvas API로 전기장 계산 및 렌더링
  3. 마우스 이벤트 처리 (전하 배치/이동)
  4. 실시간 전기장 선 계산
  5. 배포 설정 (GitHub Pages)

</v-clicks>

<v-click>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**프로그래밍 경험이 적어도** 에이전트와 함께라면 웹 애플리케이션을 만들 수 있습니다.
중요한 것은 **무엇을 만들고 싶은지** 명확히 설명하는 능력입니다.

</div>

</v-click>

</div>

---
layout: default
---

# AI 에이전트를 잘 활용하는 팁

<div class="mt-4">

<v-clicks>

### 1. 명확하게 요청하기
- 나쁜 예: "코드 짜줘" → 좋은 예: "Python으로 자유낙하 시뮬레이션, 공기저항 포함, 그래프 출력"

### 2. 단계별로 나누기
- 한 번에 모든 것을 요청하지 말고, 점진적으로 기능 추가

### 3. 결과를 검증하기
- AI가 생성한 코드를 **이해**하고, 결과를 **물리적으로 검증**

### 4. 반복하며 개선하기
- 첫 결과가 완벽하지 않아도, 피드백을 주며 개선

### 5. 기본기를 소홀히 하지 않기
- AI는 도구일 뿐 — **프로그래밍 기초**와 **전공 지식**은 직접 익혀야

</v-clicks>

</div>

---
layout: default
---

# 요약

<div class="mt-4">

<v-clicks>

- **AI 코딩 에이전트**는 자율적으로 코드를 작성/실행/수정하는 도구
- **GitHub Education Pack**으로 Copilot, Codespaces 등 무료 사용 가능
- **VS Code + Copilot**이 가장 접근하기 쉬운 조합
- **시뮬레이션, 데이터 분석, 문서 작성** 등에 폭넓게 활용
- AI는 강력한 도구이지만, **전공 지식**과 **기본기**가 핵심

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

### 오늘의 핵심 메시지

**AI를 활용하는 능력**은 앞으로 모든 분야에서 중요해질 것입니다.
<br>
새로운 도구를 두려워하지 말고, **적극적으로 실험**해보세요.

</div>

</v-click>

</div>

---
layout: end
class: text-center
---

# 감사합니다

질문이 있으면 편하게 해주세요!

<div class="mt-4 text-sm opacity-60">

ywchoi02@sogang.ac.kr

</div>
