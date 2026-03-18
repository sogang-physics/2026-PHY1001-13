# Project Instructions

## 프로젝트 디렉토리 구조

- `website/`: Astro 기반 강의 웹사이트 (메인)
  - `src/content/lectures/`: 강의 마크다운 파일
  - `src/content/homework/`: 숙제 마크다운 파일
  - `public/simulations/`: 시뮬레이션 HTML 파일
  - `src/components/SlideEngine.astro`: 슬라이드 엔진 (드로잉, 네비게이션, 스크래치패드 등)
  - `src/styles/global.css`: 테마 변수 및 슬라이드 콘텐츠 스타일
- `exams/`: 시험문제 (예전 시험 문제 포함)
- `homeworks/`: 숙제 — 매 챕터별 연습문제, 솔루션
- `illustrations/`: 할리데이 교재 이미지 파일들
- `syllabus/`: 강의 실라버스
- `testbank/`: 할리데이 교재 testbank
- `textbook/`: 할리데이 교재 챕터별 pdf 파일
- `gh-pages/`: GitHub Pages 배포용 로컬 클론 (`yw-choi/yw-choi.github.io`)

`.gitignore`에 의해 `textbook/`, `testbank/`, `illustrations/`, `gh-pages/`는 버전 관리에서 제외된다.

## 웹사이트 (Astro) 콘텐츠 추가 가이드

### 새 강의 추가

1. `website/src/content/lectures/weekNN.md` 파일 생성
2. Frontmatter:
   ```yaml
   ---
   title: "강의 제목"
   week: 5
   chapters: "10장"
   topics: "주제1, 주제2, 주제3"
   ---
   ```
3. 슬라이드 구분: `---` (수평선)으로 페이지 분리
4. 특수 슬라이드 디렉티브:
   - `<!-- blank -->` → 판서 페이지. 다음 줄부터의 마크다운이 페이지 상단에 렌더링됨 (문제 지문 등)
   - `<!-- sim:파일명.html -->` → `public/simulations/파일명.html` 시뮬레이션 임베드 (다음 줄에 제목 텍스트)
5. 수식: KaTeX 문법 (`$...$` 인라인, `$$...$$` 블록)
6. 콘텐츠 오버플로 주의: 한 슬라이드에 display 수식 3~4개, bullet 6~7개, 테이블 행 6개 이하

### 강의 슬라이드 구성 지침

강의 슬라이드는 아래 구조를 따른다:

1. **타이틀 슬라이드**: `# N장: 제목` + 영문 부제
2. **What Is Physics?**: 이번 장에서 배울 내용 개요, 실생활 예시
3. **섹션별 구성** (`# N.1 제목`, `# N.2 제목` 등): 교재 섹션 순서대로
   - 핵심 개념 + 공식 슬라이드
   - 교재 일러스트 포함 (`<img src="/img/chNN/파일명" style="max-height:50vh">`)
   - 시뮬레이션 삽입 (`<!-- sim:파일명.html -->`)
   - 판서 페이지 (`<!-- blank -->`) + **실제 문제 지문** (교재 Sample Problem 기반)
4. **Review & Summary**: 핵심 공식과 개념 정리 (1~2 슬라이드)

### 교재 일러스트 사용

- `illustrations/chNN/` 디렉토리에 교재 이미지가 있음
- `website/public/img/chNN` → `illustrations/chNN` 심볼릭 링크 생성
- 슬라이드에서 `<img src="/img/chNN/파일명" style="max-height:50vh">` 로 참조
- 배포 시 심볼릭 링크가 따라가므로 사용한 이미지만 gh-pages에 수동 복사
- `[id].astro`가 빌드 시 base URL을 자동으로 prepend함

### 새 시뮬레이션 추가

1. `website/public/simulations/이름.html` 파일 생성 (단일 HTML, 외부 의존성 없이)
2. 테마: 서강대 빨간색 `#8B0029` + 흰색 배경
3. 레이아웃: 왼쪽 캔버스 + 오른쪽 컨트롤 패널 (260px)
4. 반응형: 모바일에서는 세로 배치 (`@media max-width: 700px`)
5. HiDPI 대응: `window.devicePixelRatio` 사용
6. 강의에서 사용: `<!-- sim:이름.html -->` 디렉티브로 임베드

### 새 숙제 추가

1. `website/src/content/homework/chNN.md` 파일 생성
2. Frontmatter:
   ```yaml
   ---
   title: "NN장 연습문제"
   chapter: 10
   dueDate: "2026-04-10"
   ---
   ```
3. 문제별 `## 문제 N` 헤더, `---`로 문제 구분
4. 정답은 `<details><summary>정답 보기</summary>...</details>`로 토글

### 배포

```bash
cd website && npm run build
cp -r dist/* ../gh-pages/static/2026-PHY1001-13/
cd ../gh-pages && git add -A && git commit -m "Update" && git push
```

## 연습문제 출제 지침

- `testbank/`, `exams/`, `textbook/`을 참조하여 출제한다.
- 숫자 계산 문제
- 개념을 묻고 공식을 유도하는 문제
- 주어진 상황을 파악하고 답을 숫자가 아니라 식으로 유도하는 문제
- 출제 워크플로: Agent A(출제자)가 문제를 작성한 후, Agent B(검토자)가 각 문제의 오류·풀이 정합성·난이도를 검수한다. Agent A와 Agent B가 합의할 때까지 반복 수정한다.
- 출력 형식: md 파일과 pdf 파일을 모두 생성한다. md → pdf 변환은 `pandoc`을 사용한다.
- 숙제 수식은 최대한 LaTeX(`$...$`, `$$...$$`)를 활용하여 작성한다.

## 테마 & 스타일

- 서강대 빨간색: `#8B0029`, 밝은 변형: `#a3003a`
- 배경: 흰색, 텍스트: `#1a1a1a`
- CSS 변수는 `website/src/styles/global.css`에 정의
- 슬라이드 콘텐츠 스타일(`.slide-content`)도 `global.css`에서 관리 — 새 강의는 자동 적용
