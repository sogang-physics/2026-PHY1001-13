# Project Instructions

## 프로젝트 디렉토리 구조

- `exams/`: 시험문제 (예전 시험 문제 포함)
- `homeworks/`: 숙제 — 매 챕터별 연습문제, 솔루션
- `slides/`: 강의자료 (html, pdf)
- `illustrations/`: 할리데이 교재 이미지 파일들
- `syllabus/`: 강의 실라버스
- `testbank/`: 할리데이 교재 testbank
- `textbook/`: 할리데이 교재 챕터별 pdf 파일

`.gitignore`에 의해 `textbook/`, `testbank/`, `illustrations/`는 버전 관리에서 제외된다.

## 연습문제 출제 지침

- `testbank/`, `exams/`, `textbook/`을 참조하여 출제한다.
- 숫자 계산 문제
- 개념을 묻고 공식을 유도하는 문제
- 주어진 상황을 파악하고 답을 숫자가 아니라 식으로 유도하는 문제
- 출제 워크플로: Agent A(출제자)가 문제를 작성한 후, Agent B(검토자)가 각 문제의 오류·풀이 정합성·난이도를 검수한다. Agent A와 Agent B가 합의할 때까지 반복 수정한다.
- 출력 형식: md 파일과 pdf 파일을 모두 생성한다. md → pdf 변환은 `pandoc`을 사용한다.
- 숙제 수식은 최대한 LaTeX(`$...$`, `$$...$$`)를 활용하여 작성한다.

## 강의 슬라이드 제작 지침

아래 단계를 순서대로 수행한다.

1. **PLAN**: `textbook/` 디렉토리의 해당 챕터 PDF를 읽고, 슬라이드 내용 구성(목차·핵심 개념·예제 선정)을 계획한다.
2. **EXECUTE**: 계획을 바탕으로 Slidev-compatible markdown(`slides.md`)을 작성한다. Slidev 규칙(아래 섹션)을 준수한다.
3. **BUILD & CHECK**: HTML만 빌드(`npm run build`)한 뒤, Agent A(슬라이드 생성)와 Agent B(포맷 점검)의 검수 루프를 돌려 오버플로·레이아웃·가독성을 확인·수정한다.
4. **FINALIZE**: 검수 완료 후 최종 HTML 빌드 및 PDF export(`npx slidev export`)를 수행한다.

## Slidev 규칙

- 페이지 번호: `global-bottom.vue`에서 `{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}` 사용.
- 교재 일러스트레이션 경로: `slides/chXX/public/img` → `illustrations/chXX` 심볼릭 링크. 슬라이드에서는 `/img/파일명`으로 참조.
- 이미지 크기 규칙: `w-full`은 사용하지 않는다. 모든 `<img>`에 반드시 `max-h-XX` (예: `max-h-80`, `max-h-60`) 클래스로 높이를 제한한다. grid 칼럼 안에 이미지 2개 이상일 때는 각각 더 작은 높이를 명시한다 (예: `h-44`, `h-36`).
- Figure caption에 KaTeX 수식(`$...$`)을 사용하지 않는다. `<div>` 한 줄 안의 인라인 수식은 Slidev MDC 파서가 렌더링하지 못한다. 대신 유니코드 문자(예: φ, ×, −)나 plain text로 표기한다.
- 콘텐츠 오버플로 방지: 슬라이드 뷰포트는 980×552px이며, 제목(h1)이 약 60px, 여백이 약 80px를 차지하므로 본문 영역은 약 **410px** 이하여야 한다. 한 슬라이드에 다음 기준을 초과하지 않도록 한다:
  - `$$` display 수식: 최대 3~4개
  - 테이블: 행 6개 이하 (header 포함), 테이블 + 수식 조합 시 `text-sm` 또는 `text-xs` 적용
  - bullet 항목: 최대 6~7개
  - 콘텐츠가 많으면 슬라이드를 나누거나, `text-sm`/`text-xs`로 축소한다.
