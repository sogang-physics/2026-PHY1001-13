---
theme: default
title: "Chapter 5: 힘과 운동 I (Force and Motion I)"
info: |
  일반물리 I — Chapter 5: 힘과 운동 I
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 5: 힘과 운동 I

Force and Motion I

일반물리 I · Principles of Physics 12/E

<div class="pt-12">
  <span class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
layout: default
---

# What Is Physics?

<v-clicks>

- 물리학은 운동(가속도)뿐 아니라 운동의 **원인**을 연구한다
- 그 원인이 바로 **힘(force)** — 밀거나 당기는 것
- 드래그스터의 가속, 쿼터백의 태클, 자동차와 전봇대의 충돌 등

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

핵심 아이디어: **뉴턴 역학(Newtonian mechanics)** — 힘과 가속도의 관계를 뉴턴의 세 가지 운동 법칙으로 서술한다.

</div>

</v-click>

<v-clicks>

- 뉴턴 역학의 적용 범위: 원자 크기 ~ 은하 규모의 일상적 속도
- 매우 빠른 속도(광속에 가까운) → **특수 상대론**
- 원자 규모 → **양자 역학**

</v-clicks>

---
layout: section
---

# 5.1 뉴턴의 제1법칙과 제2법칙

Newton's First and Second Laws

---

# 뉴턴의 제1법칙 (Newton's First Law)

<div class="grid grid-cols-2 gap-8">
<div>

뉴턴 이전: "물체가 움직이려면 힘이 필요하다"

<v-clicks>

- 나무 바닥 위 퍽(puck) → 마찰로 금방 정지
- 스케이트 링크 위 퍽 → 훨씬 멀리 미끄러짐
- 마찰 없는 표면(frictionless surface) → **영원히** 등속 운동

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**Newton's First Law (관성의 법칙):**
물체에 작용하는 **알짜힘이 0**이면, 그 물체의 속도는 변하지 않는다. 즉, 가속할 수 없다.

$$
\vec{F}_{\text{net}} = 0 \implies \vec{a} = 0
$$

</div>

</v-click>

<v-click>

- 정지 상태 → 정지 유지
- 등속 운동 → 등속 유지 (크기 **및** 방향 모두)

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0501f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.1.2 — (a) 정지 기준에서 본 북극 퍽 (b) 지면 기준에서 본 퍽 — 비관성 기준틀에서는 가짜 편향이 나타남</div>

</v-click>

</div>
</div>

---

# 힘 (Force)

<div class="grid grid-cols-2 gap-8">
<div>

### 단위

<v-clicks>

- 질량 1 kg의 표준 물체에 $1\text{ m/s}^2$의 가속도를 주는 힘 = **1 뉴턴(N)**

$$
\boxed{1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2} \tag{5.1.3}
$$

</v-clicks>

<v-click>

### 벡터 특성

- 힘은 **벡터** — 크기와 방향을 가짐
- 두 개 이상의 힘 → 벡터 합 = **알짜힘(net force)** 또는 **합력(resultant force)**

$$
\vec{F}_{\text{net}} = \vec{F}_1 + \vec{F}_2 + \cdots
$$

</v-click>

<v-click>

### 힘의 중첩 원리 (Superposition)

개별 힘들의 벡터 합이 하나의 알짜힘과 같은 효과를 낸다.

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0501f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.1.1 — 표준 질량에 힘 F를 가하면 가속도 a가 생긴다</div>

</v-click>

<v-click>

<img src="/img/C0501f003_high_resolution.jpg" class="max-h-52 rounded-lg mt-4" />

<div class="text-xs text-gray-400 mt-1">Checkpoint 5.1.1 — 어떤 배열이 벡터 합을 올바르게 보여주는가?</div>

</v-click>

</div>
</div>

---

# 관성 기준틀 (Inertial Reference Frames)

<v-clicks>

- 뉴턴의 제1법칙이 성립하는 기준틀 = **관성 기준틀(inertial frame)**
- 뉴턴의 법칙이 성립하지 않는 기준틀 = **비관성 기준틀(noninertial frame)**

</v-clicks>

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 예시

| 기준틀 | 관성? |
|--------|-------|
| 지면 (지구 자전 무시) | O |
| 등속 주행 기차 | O |
| 가속 중인 자동차 | X |
| 회전하는 회전목마 | X |

</div>
<div>

<div class="p-4 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**비관성 기준틀의 함정:**
급가속하는 차 안에서 등이 시트에 눌리는 느낌 → 실제 힘이 아니라 **가상의 힘(fictitious force)**.
뉴턴 역학은 관성 기준틀에서만 올바르게 적용된다!

</div>

</div>
</div>

</v-click>

---

# 질량 (Mass)

<div class="grid grid-cols-2 gap-8">
<div>

같은 힘을 가해도 물체마다 가속도가 다르다.

<v-clicks>

- 야구공 vs. 볼링공 — 같은 힘이면 야구공이 더 크게 가속
- **질량**: 힘에 대한 물체의 가속도를 결정하는 **고유 특성**
- 질량이 클수록 가속도가 작다 → **관성의 척도**

</v-clicks>

<v-click>

### 질량의 측정

표준 물체($m_0 = 1$ kg)와 미지 물체 $X$에 같은 힘을 가하면:

$$
\frac{m_X}{m_0} = \frac{a_0}{a_X} \tag{5.1}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의**: 질량은 **스칼라**이며, 물체의 크기·무게·밀도와는 다른 개념이다. 질량은 "힘과 그 결과인 가속도를 연결하는 특성"이다.

</div>

</v-click>

</div>
<div>

<v-click>

<div class="p-4 bg-blue-500 bg-opacity-10 rounded-lg">

### 질량의 성질

- **스칼라**(방향 없음)
- **양(+)** 의 값만 가짐
- 위치에 무관한 **고유 특성**
  - 지구: $m = 7.2$ kg
  - 달: $m = 7.2$ kg (변하지 않음)
- 질량 ≠ 무게 (무게는 중력에 의존)

</div>

</v-click>

</div>
</div>

---

# 뉴턴의 제2법칙 (Newton's Second Law)

물체에 작용하는 **알짜힘**은 그 물체의 **질량 × 가속도**와 같다:

$$
\boxed{\vec{F}_{\text{net}} = m\vec{a}} \tag{5.1.1}
$$

<v-click>

성분별로 분해하면:

$$
F_{\text{net},x} = ma_x, \quad F_{\text{net},y} = ma_y, \quad F_{\text{net},z} = ma_z \tag{5.1.2}
$$

</v-click>

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 각 축의 가속도 성분은 **그 축의 힘 성분**에 의해서만 결정된다. 다른 축의 힘은 관련 없다!

</div>

</div>
<div>

<div class="p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**평형(Equilibrium)**: $\vec{F}_{\text{net}} = 0$ → $\vec{a} = 0$

정지 또는 등속 운동. 여러 힘이 작용해도 알짜힘이 0이면 가속하지 않는다.

</div>

</div>
</div>

</v-click>

---

# 자유 물체 도표 (Free-Body Diagram)

<div class="grid grid-cols-2 gap-8">
<div>

뉴턴 제2법칙을 적용하려면 **자유 물체 도표(FBD)** 를 그려야 한다.

<v-clicks>

### FBD 그리는 법

1. 분석할 물체를 **점(dot)** 으로 표현
2. 물체에 작용하는 **모든 외력**을 벡터 화살표로 그림
3. 화살표의 꼬리를 점에 고정
4. 적절한 **좌표계**를 설정
5. (선택) 가속도 화살표 표시

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**외력만 포함!** 계(system) 내부의 힘은 포함하지 않는다. 내력은 계를 가속시킬 수 없다.

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0501f004_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.1.4 — (a) 쿠키 깡통에 세 힘이 작용 (b) 벡터 합으로 미지의 힘 구하기</div>

</v-click>

</div>
</div>

---

# 예제: 썰매 밀기 (Sample Problem 5.1.1)

<div class="text-sm">

학생이 얼어붙은 호수 위(마찰 없음)에서 질량 $m = 240$ kg인 썰매를 수평 힘 $F = 130$ N으로 $d = 2.3$ m 밀었다.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a) 정지 출발 시 최종 속력은?**

가속도 ($F_{\text{net},x} = ma_x$):

$$a_x = \frac{F_x}{m} = \frac{130\text{ N}}{240\text{ kg}} = 0.542\text{ m/s}^2$$

등가속도 공식 ($v^2 = v_0^2 + 2a(x - x_0)$):

$$v = \sqrt{2a_x d} = \sqrt{2(0.542)(2.3)} = 1.6\text{ m/s}$$

</v-clicks>

</div>
<div>

<v-click>

**(b) 속도를 4.5 s 안에 반대로 하려면?**

$$a = \frac{v - v_0}{t} = \frac{(-1.6) - (1.6)}{4.5} = -0.711\text{ m/s}^2$$

$$F_x = ma_x = (240)(-0.711) = -171\text{ N}$$

음(−)의 부호 → 학생은 **반대 방향**으로 밀어야 함

</v-click>

<v-click>

<img src="/img/C0501f003_high_resolution.jpg" class="max-h-36 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 5.1.3 — (b) 밀 때의 FBD (c) 반대 방향으로 밀 때의 FBD</div>

</v-click>

</div>
</div>

---

# 예제: 2차원 힘 — 쿠키 깡통 (Sample Problem 5.1.2)

<div class="text-sm">

$m = 2.0$ kg 쿠키 깡통이 마찰 없는 수평면에서 가속도 $\vec{a}$ 방향으로 $a = 3.0$ m/s$^2$을 받는다.
$\vec{F}_1$($10$ N, $-150°$)과 $\vec{F}_2$($20$ N, $90°$)가 알려져 있을 때, 세 번째 힘 $\vec{F}_3$은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**핵심**: $\vec{F}_1 + \vec{F}_2 + \vec{F}_3 = m\vec{a}$이므로

$$\vec{F}_3 = m\vec{a} - \vec{F}_1 - \vec{F}_2$$

**$x$ 성분:**

$$F_{3,x} = m a\cos 50° - F_1\cos(-150°) - F_2\cos 90°$$

$$= (2.0)(3.0)\cos 50° - (10)\cos(-150°) - 0 = 12.5\text{ N}$$

**$y$ 성분:**

$$F_{3,y} = m a\sin 50° - F_1\sin(-150°) - F_2\sin 90°$$

$$= (2.0)(3.0)\sin 50° - (10)\sin(-150°) - 20 = -10.4\text{ N}$$

</v-clicks>

</div>
<div>

<v-click>

**크기와 각도:**

$$F_3 = \sqrt{(12.5)^2 + (-10.4)^2} = 16\text{ N}$$

$$\theta = \tan^{-1}\!\left(\frac{-10.4}{12.5}\right) = -40°$$

</v-click>

<v-click>

<img src="/img/C0501f004_high_resolution.jpg" class="max-h-48 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 5.1.4 — 벡터 합성으로 미지의 세 번째 힘 구하기</div>

</v-click>

</div>
</div>

---
layout: section
---

# 5.2 몇 가지 특수한 힘

Some Particular Forces

---

# 중력과 무게 (Gravitational Force & Weight)

<div class="grid grid-cols-2 gap-8">
<div>

### 중력 (Gravitational Force)

지구가 질량 $m$인 물체를 잡아당기는 힘:

$$
\boxed{F_g = mg} \tag{5.2.1}
$$

$$
\vec{F}_g = -mg\hat{\jmath} = m\vec{g} \tag{5.2.2}
$$

<v-click>

### 무게 (Weight)

물체가 자유 낙하하지 않도록 막는 데 필요한 알짜힘의 크기:

$$
\boxed{W = mg} \tag{5.2.5}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의**: 무게 ≠ 질량!
- 질량: 고유 특성, 위치 무관 (스칼라)
- 무게: $g$에 의존, 위치에 따라 달라짐 (힘의 크기)
- 볼링공: 지구 $W = 71$ N, 달 $W = 12$ N (질량은 같음)

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0502f001_high_resolution.jpg" class="max-h-52 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.2.1 — 등팔 저울: 양쪽 중력이 같아질 때 균형</div>

</v-click>

<v-click>

<img src="/img/C0502f002_high_resolution.jpg" class="max-h-44 rounded-lg mt-3" />

<div class="text-xs text-gray-400 mt-1">Fig 5.2.2 — 용수철 저울: 무게에 비례하여 스프링이 늘어남</div>

</v-click>

</div>
</div>

---

# 수직항력 (Normal Force)

<div class="grid grid-cols-2 gap-8">
<div>

물체가 표면에 눌릴 때, 표면이 물체를 밀어내는 힘:

<v-clicks>

- 항상 표면에 **수직(perpendicular)**
- 접촉면이 변형되면서 발생
- 기호: $\vec{F}_N$ (또는 $\vec{N}$)

</v-clicks>

<v-click>

### 수평면 위 블록 (정지)

$y$축 방향 뉴턴 제2법칙 ($a_y = 0$):

$$F_N - F_g = 0 \implies F_N = mg \tag{5.2.7}$$

</v-click>

<v-click>

### 가속하는 엘리베이터 안

$$F_N - mg = ma_y$$

$$
\boxed{F_N = m(g + a_y)} \tag{5.2.6}
$$

$a_y > 0$ (위로 가속) → $F_N > mg$ (무겁게 느낌)
$a_y < 0$ (아래로 가속) → $F_N < mg$ (가볍게 느낌)

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0502f003_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.2.3 — (a) 테이블 위 블록: 수직항력과 중력 (b) 자유 물체 도표</div>

</v-click>

</div>
</div>

---

# 마찰력과 장력 (Friction & Tension)

<div class="grid grid-cols-2 gap-8">
<div>

### 마찰력 (Friction)

<v-clicks>

- 물체가 표면 위에서 미끄러지거나 미끄러지려 할 때 발생
- 표면에 **평행**, 운동 방향의 **반대**
- 마찰 없는 표면: $\vec{f} = 0$ (이상화)
- 자세한 내용은 **Chapter 6**에서

</v-clicks>

<v-click>

### 장력 (Tension)

- 줄(cord)이 팽팽할 때, 줄의 양 끝에서 물체를 **당기는** 힘
- 기호: $T$ (힘의 크기)
- 줄을 따라 물체에서 **멀어지는** 방향

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**질량 없는 줄 (massless cord):** 줄의 양 끝에서 장력이 같다 ($T$).
**질량 없는 도르래 (massless pulley):** 줄이 도르래를 감아도 장력 $T$ 동일.
도르래에 작용하는 알짜힘 = $2T$ (줄이 반 바퀴 감을 때).

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0502f004_high_resolution.jpg" class="max-h-28 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.2.4 — 마찰력: 미끄러짐 방향의 반대</div>

</v-click>

<v-click>

<img src="/img/C0502f005_high_resolution.jpg" class="max-h-52 rounded-lg mt-4" />

<div class="text-xs text-gray-400 mt-1">Fig 5.2.5 — (a) 줄의 장력은 양쪽에서 같다 (b)(c) 도르래를 거쳐도 장력 T 동일</div>

</v-click>

</div>
</div>

---

# Checkpoint 5.2 & 힘의 단위 정리

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### Checkpoint 5.2.1

<v-click>

블록이 테이블 위에 놓여 있고, 엘리베이터 안에 있다.

| 상황 | $F_N$ vs $mg$ |
|------|-------------|
| (a) 등속 상승 | $F_N = mg$ |
| (b) 가속 상승 | $F_N > mg$ |
| (c) 감속 상승 | $F_N < mg$ |

</v-click>

<v-click>

### Checkpoint 5.2.2

Fig 5.2.5c에서 매달린 물체의 무게 = 75 N.

| 상황 | $T$ vs 75 N |
|------|------------|
| (a) 등속 상승 | $T = 75$ N |
| (b) 가속 상승 | $T > 75$ N |
| (c) 감속 상승 | $T < 75$ N |

</v-click>

</div>
<div>

<v-click>

### 힘의 단위 비교 (Table 5.1.1)

| 단위계 | 힘 | 질량 | 가속도 |
|--------|-----|------|--------|
| SI | N (뉴턴) | kg | m/s$^2$ |
| CGS | dyne | g | cm/s$^2$ |
| British | pound (lb) | slug | ft/s$^2$ |

<div class="mt-2 text-xs text-gray-400">

1 dyne = 1 g·cm/s², 1 lb = 1 slug·ft/s²

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**기억하기**: 이 장에서는 거의 모든 문제를 하나의 핵심 공식 $\vec{F}_{\text{net}} = m\vec{a}$로 풀 수 있다!

</div>

</v-click>

</div>
</div>

---

# 예제: 이착함 착각 (Sample Problem 5.2.1)

<div class="text-sm">

제트기가 항공모함에서 사출된다. 정지 출발, $d = 90$ m에서 $v = 85$ m/s 도달.
조종사가 느끼는 **착시 기울기** $\phi$는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**가속도 구하기:**

$$v^2 = v_0^2 + 2a_x d \implies a_x = \frac{v^2}{2d} = \frac{(85)^2}{2(90)} = 40.1\text{ m/s}^2$$

**착시 기울기:**

조종사에게는 중력 $\vec{F}_g$와 시트 힘 $\vec{F}_{\text{app}}$의 합력이 기울어져 느껴진다:

$$\phi = \tan^{-1}\!\left(\frac{F_{\text{app}}}{F_g}\right) = \tan^{-1}\!\left(\frac{ma_x}{mg}\right)$$

$$\phi = \tan^{-1}\!\left(\frac{40.1}{9.8}\right) = 76°$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/C0502f005_high_resolution.jpg" class="max-h-52 rounded-lg" />

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-xs">

이착함 직후 조종사는 76도 뒤로 기울어진 것처럼 느낀다. 적절한 훈련 없이는 기수를 아래로 꺾어 바다에 추락할 위험이 있다!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 5.3 뉴턴 법칙의 적용

Applying Newton's Laws

---

# 뉴턴의 제3법칙 (Newton's Third Law)

<div class="grid grid-cols-2 gap-8">
<div>

두 물체가 상호작용할 때:

$$
\boxed{\vec{F}_{BC} = -\vec{F}_{CB}} \tag{5.3.1}
$$

<v-click>

<div class="p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**Newton's Third Law (작용·반작용 법칙):**
두 물체가 서로 힘을 주고받을 때, 그 힘들은 항상 크기가 같고 방향이 반대이다.

</div>

</v-click>

<v-clicks>

- **제3법칙 힘쌍(third-law force pair)**: 항상 **다른 두 물체**에 작용
- 두 물체가 정지, 운동, 가속 중이든 항상 성립
- 같은 물체에 작용하는 두 힘은 제3법칙 쌍이 **아님**

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/C0503f001_high_resolution.jpg" class="max-h-36 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.1 — 책과 상자: 제3법칙 힘쌍</div>

</v-click>

<v-click>

<img src="/img/C0503f002_high_resolution.jpg" class="max-h-52 rounded-lg mt-3" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.2 — 멜론-테이블-지구 사이의 제3법칙 힘쌍 구분</div>

</v-click>

</div>
</div>

---

# 제3법칙의 힘쌍 분석

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 멜론이 테이블 위에 놓인 경우

멜론에 작용하는 힘:
- $\vec{F}_{CT}$: 테이블의 수직항력 (위쪽)
- $\vec{F}_{CE}$: 지구의 중력 (아래쪽)

<v-click>

이 두 힘은 **제3법칙 쌍이 아니다!** (같은 물체에 작용)

</v-click>

<v-click>

### 올바른 제3법칙 쌍

**멜론-지구 상호작용:**

$$\vec{F}_{CE} = -\vec{F}_{EC}$$

**멜론-테이블 상호작용:**

$$\vec{F}_{CT} = -\vec{F}_{TC}$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg">

### Checkpoint 5.3.1

멜론과 테이블이 위로 가속하는 엘리베이터 안에 있다면:

**(a)** $F_{TC}$와 $F_{CT}$는 **증가** (테이블이 멜론을 더 세게 밀어야)

**(b)** 여전히 크기 같고 방향 반대 (제3법칙은 항상 성립!)

**(c)** $F_{CE}$와 $F_{EC}$는 **같음** (중력은 가속도와 무관)

**(d)** 여전히 크기 같고 방향 반대

</div>

</v-click>

</div>
</div>

---

# 예제: 블록과 매달린 블록 (Sample Problem 5.3.1)

<div class="text-sm">

수평면 위 블록 $S$($M = 3.3$ kg)가 줄로 도르래를 거쳐 매달린 블록 $H$($m = 2.1$ kg)에 연결.
마찰 없음, 줄·도르래 질량 무시. (a) 가속도 (b) 장력은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**블록 $S$ (수평 방향):**

$$T = Ma \tag{5.3.4}$$

**블록 $H$ (수직 방향, 아래로 가속):**

$$T - mg = m(-a) \implies T - mg = -ma \tag{5.3.6}$$

**두 식을 연립** (T 소거):

$$Ma = mg - ma$$

$$\boxed{a = \frac{m}{M + m}g} \tag{5.3.7}$$

</v-clicks>

</div>
<div>

<v-click>

**수치 계산:**

$$a = \frac{2.1}{3.3 + 2.1}(9.8) = 3.8\text{ m/s}^2$$

$$T = Ma = (3.3)(3.8) = 13\text{ N}$$

또는: $T = \frac{Mm}{M+m}g$ (Eq. 5.3.8)

</v-click>

<v-click>

<img src="/img/C0503f005_high_resolution.jpg" class="max-h-44 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.5 — (a) 블록 S의 FBD (b) 블록 H의 FBD</div>

</v-click>

</div>
</div>

---

# 예제: 빗면 위 상자 (Sample Problem 5.3.2)

<div class="text-sm">

빗면(경사각 $\theta = 30.0°$, 마찰 없음) 위의 상자 $m = 5.00$ kg을 줄로 끌어올린다. 장력 $T = 25.0$ N.
빗면 방향 가속도 $a$는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**좌표계**: $x$축 = 빗면 위쪽, $y$축 = 빗면에 수직

**중력 성분 분해:**
- 빗면 평행: $mg\sin\theta$ (아래쪽)
- 빗면 수직: $mg\cos\theta$

**$x$축 뉴턴 제2법칙:**

$$T - mg\sin\theta = ma \tag{5.3.10}$$

$$a = \frac{T - mg\sin\theta}{m}$$

$$= \frac{25.0 - (5.00)(9.80)\sin 30°}{5.00}$$

$$= \frac{25.0 - 24.5}{5.00} = 0.100\text{ m/s}^2$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/C0503f006_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.6 — 빗면 위 상자의 FBD와 중력 성분 분해</div>

</v-click>

</div>
</div>

---

# 빗면 문제의 핵심: 중력 분해

<div class="grid grid-cols-2 gap-8">
<div>

경사각 $\theta$인 빗면에서 중력 $mg$를 분해하면:

<v-clicks>

$$F_{\parallel} = mg\sin\theta \quad (\text{빗면 아래 방향})$$

$$F_{\perp} = mg\cos\theta \quad (\text{빗면에 수직})$$

</v-clicks>

<v-click>

### 빗면 문제 풀이 순서

1. **FBD** 그리기 (점 + 모든 외력)
2. **좌표축**: $x$축 = 빗면 방향, $y$축 = 빗면 수직
3. **중력 분해**: $mg\sin\theta$, $mg\cos\theta$
4. **$x$축**: $F_{\text{net},x} = ma$로 가속도 구하기
5. **$y$축**: $F_{\text{net},y} = 0$으로 수직항력 구하기

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의**: 빗면 문제에서 중력의 분해 각도를 혼동하기 쉽다. 그림에서 직각삼각형을 반드시 확인하자!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0503f006_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.6 — (c)~(i) 빗면 각도와 중력 성분의 관계: 직각삼각형 활용</div>

</v-click>

</div>
</div>

---

# 예제: 롤러코스터의 공포 (Sample Problem 5.3.3)

<div class="text-sm">

10대의 동일한 롤러코스터 차량(총 질량 $M$)이 경사각 $\theta$인 빗면을 내려간다.
첫 번째 차가 빗면에 진입했을 때 vs 마지막 차가 진입했을 때의 가속도는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**첫 번째 차가 빗면에 (Fig 5.3.7a):**

빗면 위 질량 = $\frac{1}{10}M$, 평지 위 질량 = $\frac{9}{10}M$

외력 = 빗면 위 차의 중력 성분 + 장력 $T$

$$T = \frac{9}{10}Ma$$

$$T - \frac{1}{10}Mg\sin\theta = \frac{1}{10}M(-a)$$

$$\boxed{a = \frac{1}{10}g\sin\theta}$$

</v-clicks>

<v-click>

**마지막 차까지 빗면에 (Fig 5.3.7b):**

$$\boxed{a = \frac{9}{10}g\sin\theta} \quad \text{(9배!)}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0503f007_high_resolution.jpg" class="max-h-56 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.7 — 롤러코스터: (a) 첫 번째 차만 빗면에 (b) 마지막 차까지 빗면에</div>

</v-click>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-xs">

**공포 요인**: 마지막 차의 가속도는 첫 번째 차의 **9배**! 엣지를 넘어갈수록 가속이 급격히 증가하며, 마지막 차에서는 등 뒤에서 밀리는 큰 힘을 느낀다.

</div>

</v-click>

</div>
</div>

---

# 예제: 엘리베이터 안의 체중계 (Sample Problem 5.3.4)

<div class="text-sm">

승객($m = 72.2$ kg)이 엘리베이터 안 체중계에 올라서 있다. 다양한 운동 상태에서의 체중계 눈금은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**일반 해**: FBD에서 $y$축 위쪽 양(+):

$$F_N - mg = ma_y$$

$$\boxed{F_N = m(g + a_y)}$$

체중계 눈금 = $F_N$ (수직항력)

</v-clicks>

<v-click>

| 상태 | $a_y$ | $F_N$ |
|------|-------|-------|
| 정지/등속 | $0$ | $mg = 708$ N |
| 위로 가속 | $+3.20$ | $939$ N |
| 아래로 가속 | $-3.20$ | $477$ N |
| 자유낙하 | $-g$ | **0** (무중력!) |

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0503f008_high_resolution.jpg" class="max-h-56 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.8 — 엘리베이터 안 승객의 FBD</div>

</v-click>

<v-click>

<div class="mt-2 p-3 bg-green-500 bg-opacity-10 rounded-lg text-xs">

**겉보기 무게(apparent weight)**: 비관성 기준틀에서 측정한 무게.
자유낙하 시 $F_N = 0$ → 무중력 상태! (실제로는 중력이 작용하지만 체중계가 0을 표시)

</div>

</v-click>

</div>
</div>

---

# 예제: 에트우드 머신 유형 — 두 블록 연결

<div class="text-sm">

Sample Problem 5.3.1의 일반적 결과를 정리한다.

</div>

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 수평면 + 매달린 블록

<v-click>

$$a = \frac{m}{M + m}g \tag{5.3.7}$$

$$T = \frac{Mm}{M + m}g \tag{5.3.8}$$

</v-click>

<v-click>

### 결과 검증

| 특수 경우 | $a$ | $T$ |
|----------|-----|-----|
| $m \to 0$ | $0$ | $0$ |
| $M \to 0$ | $g$ | $0$ |
| $g = 0$ | $0$ | $0$ |

모든 극한이 물리적으로 타당!

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**항상 $a < g$**: 매달린 블록은 자유 낙하가 아님 (줄이 잡고 있으므로).
**항상 $T < mg$**: $T = mg$이면 $a = 0$ (평형).

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/C0503f004_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 5.3.4 — 수평면 위 블록 S와 매달린 블록 H에 작용하는 다섯 가지 힘</div>

</v-click>

</div>
</div>

---
layout: section
---

# 뉴턴 법칙 문제 풀이 전략

Problem-Solving Strategy

---

# 뉴턴 법칙 문제 풀이 단계

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### Step 1: 물체 선택

- 가속도를 구할 물체(**body**)를 명확히 지정
- "어느 물체에 뉴턴 제2법칙을 적용할 것인가?"

<v-click>

### Step 2: 자유 물체 도표 (FBD)

- 물체를 점으로 표현
- 물체에 작용하는 **모든 외력** 표시
- 내력은 제외!
- 좌표축 설정 (운동 방향 = $x$축이 편리)

</v-click>

<v-click>

### Step 3: 뉴턴 제2법칙 적용

$$F_{\text{net},x} = ma_x, \quad F_{\text{net},y} = ma_y$$

- 각 축에 대해 힘의 성분을 정리
- 미지수와 방정식 수를 확인

</v-click>

</div>
<div>

<v-click>

### Step 4: 연립방정식 풀기

- 물체가 2개 이상이면 각각 FBD + 방정식
- 줄로 연결 → 가속도 크기 같음 (구속 조건)
- 연립하여 미지수 해결

</v-click>

<v-click>

### Step 5: 결과 검증

- 단위 확인 (차원 분석)
- 특수한 극한값 점검 ($m \to 0$, $g = 0$ 등)
- 부호의 물리적 의미 확인

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg">

**가장 중요한 것**: 올바른 FBD를 그리는 것! FBD가 맞으면 나머지는 수학이다.

</div>

</v-click>

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

### 문제 1: 뉴턴 제2법칙

$m = 4.0$ kg 물체에 $\vec{F}_1 = 6.0\hat{\imath}$ N, $\vec{F}_2 = -8.0\hat{\jmath}$ N이 작용한다.
가속도의 크기와 방향은?

<v-click>

**풀이:**

$$\vec{a} = \frac{\vec{F}_{\text{net}}}{m} = \frac{6.0\hat{\imath} - 8.0\hat{\jmath}}{4.0} = 1.5\hat{\imath} - 2.0\hat{\jmath}\text{ (m/s}^2\text{)}$$

$$a = \sqrt{1.5^2 + 2.0^2} = 2.5\text{ m/s}^2$$

$$\theta = \tan^{-1}\!\left(\frac{-2.0}{1.5}\right) = -53°$$

</v-click>

</div>
<div>

### 문제 2: 빗면

$m = 10$ kg 상자가 $\theta = 37°$ 빗면 위에서 줄 없이 마찰 없이 미끄러진다. 가속도는?

<v-click>

**풀이:**

$$a = g\sin\theta = (9.8)\sin 37° = 5.9\text{ m/s}^2$$

</v-click>

### 문제 3: 엘리베이터

<v-click>

$m = 60$ kg인 사람이 $a = 2.0$ m/s$^2$로 위로 가속하는 엘리베이터에 탔다.
체중계 눈금은?

$$F_N = m(g + a) = 60(9.8 + 2.0) = 708\text{ N} \approx 72\text{ kg 중}$$

</v-click>

</div>
</div>

---

# 복습 & 요약 (Review & Summary)

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 뉴턴의 운동 법칙

**제1법칙 (관성의 법칙):**
- $\vec{F}_{\text{net}} = 0$ → 속도 불변 (정지 또는 등속)
- 관성 기준틀에서만 성립

**제2법칙 (운동의 법칙):**
- $\vec{F}_{\text{net}} = m\vec{a}$
- 성분: $F_{\text{net},x} = ma_x$, $F_{\text{net},y} = ma_y$
- 1 N = 1 kg·m/s$^2$

**제3법칙 (작용·반작용 법칙):**
- $\vec{F}_{BC} = -\vec{F}_{CB}$
- 항상 **다른** 두 물체에 작용

</div>
<div>

### 특수한 힘

- **중력**: $F_g = mg$ (아래 방향)
- **무게**: $W = mg$ ($g$에 의존)
- **수직항력**: 표면에 수직, $F_N = m(g + a_y)$
- **장력**: 줄을 따라 물체에서 멀어지는 방향
- **마찰력**: 표면에 평행, 운동 반대 방향

### 문제 풀이 핵심

- **FBD**를 정확히 그리는 것이 가장 중요
- 좌표축은 운동 방향에 맞춰 설정
- 빗면: $mg\sin\theta$ (평행), $mg\cos\theta$ (수직)
- 연결된 물체: 구속 조건 활용

</div>
</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 5: 힘과 운동 I (Force and Motion I) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 6 — 힘과 운동 II (Force and Motion II)

</div>
