---
theme: default
title: "Chapter 9: 질량중심과 선운동량 (Center of Mass and Linear Momentum)"
info: |
  일반물리 I — Chapter 9: 질량중심과 선운동량
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 9: 질량중심과 선운동량

Center of Mass and Linear Momentum

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

- 복잡한 물체(야구 방망이, 무용수 등)의 운동을 분석하려면 특별한 점이 필요하다
- 그 점이 바로 **질량중심(center of mass, com)** — 계의 질량이 집중된 것처럼 행동하는 점
- 공중에서 회전하는 방망이: 질량중심만 **포물선 경로**를 따른다

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

이 장의 핵심: **선운동량**(linear momentum)의 정의와 보존 법칙을 배우고, 이를 **충돌** 문제에 적용한다!

</div>

</v-click>

<v-clicks>

- **질량중심** → **뉴턴 제2법칙 (계)** → **선운동량** → **충격량** → **운동량 보존** → **충돌**
- 주요 응용: 탄성/비탄성 충돌, 폭발, 로켓 추진

</v-clicks>

---
layout: section
---

# 9.1 질량중심

Center of Mass

---

# 질량중심의 정의 (Definition of Center of Mass)

<div class="grid grid-cols-2 gap-8">
<div>

**질량중심(com)**: 계의 질량이 모두 집중되어 있고, 모든 외력이 작용하는 것처럼 움직이는 점

<v-clicks>

두 입자 ($m_1$, $m_2$)가 거리 $d$만큼 떨어져 있을 때:

$$
x_{\text{com}} = \frac{m_2}{m_1 + m_2}\,d \tag{9.1.1}
$$

일반적으로 (좌표계를 이동하면):

$$
\boxed{x_{\text{com}} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}} \tag{9.1.2}
$$

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

$m_1 = m_2$이면 $x_{\text{com}} = \frac{1}{2}d$ (정확히 중간점)

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0901f002_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.1.2 — 두 입자의 질량중심. 좌표계를 이동해도 com의 상대적 위치는 동일</div>

</v-click>

</div>
</div>

---

# 다입자계의 질량중심 (Many Particles & 3D)

<div class="grid grid-cols-2 gap-8">
<div>

$n$개 입자의 질량중심 ($M = m_1 + m_2 + \cdots + m_n$):

$$
\boxed{x_{\text{com}} = \frac{1}{M}\sum_{i=1}^{n} m_i x_i} \tag{9.1.4}
$$

<v-click>

3차원 벡터 표기:

$$
\boxed{\vec{r}_{\text{com}} = \frac{1}{M}\sum_{i=1}^{n} m_i \vec{r}_i} \tag{9.1.8}
$$

</v-click>

<v-click>

**연속 분포체(solid body)** — 합을 적분으로:

$$
\boxed{\vec{r}_{\text{com}} = \frac{1}{M}\int \vec{r}\,dm} \tag{9.1.9}
$$

</v-click>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**대칭 활용**: 대칭점·대칭축·대칭면이 있으면 com은 그 위에 놓인다. 도넛의 com에는 물질이 없다!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0901f003_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.1.3 — 정삼각형 꼭짓점의 세 입자와 질량중심 위치벡터</div>

</v-click>

</div>
</div>

---

# 예제: 세 입자의 질량중심 (Sample Problem 9.1.1)

<div class="text-sm">

$m_1 = 1.2$ kg, $m_2 = 2.5$ kg, $m_3 = 3.4$ kg이 한 변의 길이 $a = 140$ cm인 정삼각형의 꼭짓점에 놓여 있다. 질량중심의 위치는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

좌표 설정: $m_1$을 원점, $m_2$를 $x$축 위에:

| 입자 | 질량 (kg) | $x$ (cm) | $y$ (cm) |
|:---:|:---:|:---:|:---:|
| 1 | 1.2 | 0 | 0 |
| 2 | 2.5 | 140 | 0 |
| 3 | 3.4 | 70 | 120 |

$M = 7.1$ kg

$$x_{\text{com}} = \frac{(1.2)(0)+(2.5)(140)+(3.4)(70)}{7.1} = 83 \text{ cm}$$

$$y_{\text{com}} = \frac{(1.2)(0)+(2.5)(0)+(3.4)(120)}{7.1} = 58 \text{ cm}$$

</v-clicks>

</div>
<div>

<v-click>

<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**Check**: com은 삼각형 **내부**에 있다 — 가장 무거운 $m_3$ 쪽으로 치우침. 좌표계를 바꿔도 입자들에 대한 상대적 위치는 동일하다.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.2 입자계에 대한 뉴턴 제2법칙

Newton's Second Law for a System of Particles

---

# 입자계의 뉴턴 제2법칙

<div class="grid grid-cols-2 gap-8">
<div>

Eq. 9.1.8을 시간에 대해 미분하면:

$$
M\vec{v}_{\text{com}} = m_1\vec{v}_1 + m_2\vec{v}_2 + \cdots + m_n\vec{v}_n \tag{9.2.4}
$$

<v-click>

한 번 더 미분:

$$
M\vec{a}_{\text{com}} = m_1\vec{a}_1 + m_2\vec{a}_2 + \cdots + m_n\vec{a}_n \tag{9.2.5}
$$

</v-click>

<v-click>

$m_i\vec{a}_i = \vec{F}_i$ (각 입자에 작용하는 알짜힘)이고, **내력**은 뉴턴 제3법칙에 의해 상쇄되므로:

$$
\boxed{\vec{F}_{\text{net}} = M\vec{a}_{\text{com}}} \tag{9.2.1}
$$

</v-click>

<v-click>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 계의 질량중심은 전체 질량 $M$이 한 점에 모여 있고, 모든 **외력**의 합이 그 점에 작용하는 것처럼 움직인다!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0902f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.2.1 — 폭죽 로켓: 폭발의 내력은 com 경로를 바꿀 수 없다</div>

</v-click>

<v-click>

<img src="/img/c0902f002_high_resolution.jpg" class="max-h-44 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 9.2.2 — 발레 grand jete: com은 포물선, 머리는 거의 수평 이동</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.3 선운동량

Linear Momentum

---

# 선운동량 (Linear Momentum)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 단일 입자

$$
\boxed{\vec{p} = m\vec{v}} \tag{9.3.1}
$$

- SI 단위: kg·m/s
- $\vec{p}$와 $\vec{v}$는 **같은 방향**

<v-click>

### 뉴턴 제2법칙 (운동량 형태)

$$
\boxed{\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}} \tag{9.3.2}
$$

알짜 외력 = 운동량의 시간 변화율

</v-click>

<v-click>

### 입자계

$$
\boxed{\vec{P} = M\vec{v}_{\text{com}}} \tag{9.3.4}
$$

$$
\boxed{\vec{F}_{\text{net}} = \frac{d\vec{P}}{dt}} \tag{9.3.6}
$$

</v-click>

</div>
<div>

<v-click>

<div class="p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**Key Idea**: 입자계의 선운동량은 전체 질량 $M$과 질량중심 속도 $\vec{v}_{\text{com}}$의 곱이다.

알짜 외력이 0이면 $\vec{P}$는 변할 수 없다!

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 9.3.1**: $p$-$t$ 그래프에서 기울기 = $F$. 기울기가 가장 큰 구간에서 힘이 최대. $p$가 감소하는 구간에서 입자는 감속 중.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.4 충돌과 충격량

Collision and Impulse

---

# 충격량-운동량 정리 (Impulse-Momentum Theorem)

<div class="grid grid-cols-2 gap-8">
<div>

충돌 시 힘 $\vec{F}(t)$가 짧은 시간 $\Delta t$ 동안 작용:

$$
d\vec{p} = \vec{F}(t)\,dt \tag{9.4.1}
$$

적분하면 **충격량**(impulse):

$$
\boxed{\vec{J} = \int_{t_i}^{t_f} \vec{F}(t)\,dt} \tag{9.4.3}
$$

<v-click>

**충격량-운동량 정리**:

$$
\boxed{\vec{p}_f - \vec{p}_i = \Delta\vec{p} = \vec{J}} \tag{9.4.4–5}
$$

</v-click>

<v-click>

**평균 힘**으로 표현:

$$
J = F_{\text{avg}}\,\Delta t \tag{9.4.8}
$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0904f003_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.4.3 — (a) F(t) 곡선 아래 넓이 = 충격량 J (b) 평균 힘 Favg의 직사각형도 같은 넓이</div>

</v-click>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

충돌 시간 $\Delta t$가 **길면** → $F_{\text{avg}}$가 **작다** (같은 $\Delta p$). 에어백·안전매트의 원리!

</div>

</v-click>

</div>
</div>

---

# 연속 충돌 (Series of Collisions)

<div class="grid grid-cols-2 gap-8">
<div>

질량 $m$, 속력 $v$의 발사체가 연속으로 표적에 충돌:

시간 $\Delta t$ 동안 $n$개 충돌 → 표적에 가해지는 평균 힘:

$$
\boxed{F_{\text{avg}} = -\frac{\Delta m}{\Delta t}\,\Delta v} \tag{9.4.13}
$$

<v-clicks>

- 발사체가 **정지**하면: $\Delta v = -v$
- 발사체가 **되튐**하면: $\Delta v = -2v$ → 힘이 **2배**!

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 9.4.1**: 낙하산이 열리지 않은 병사가 눈밭에 착지. 눈이 정지 시간을 길게 하므로 → (a) $\Delta p$ 동일, (b) $J$ 동일, (c) $F_{\text{avg}}$ **감소**!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0904f005_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.4.5 — 축구 헤딩: 머리에 가해지는 평균 힘과 뇌진탕 위험</div>

</v-click>

</div>
</div>

---

# 예제: 축구 헤딩 (Sample Problem 9.4.1)

<div class="text-sm">

질량 $m = 0.400$ kg인 공이 $v = 65$ km/h로 날아와 선수가 이마로 $20$ km/h로 되받아 친다.
충돌 시간 $\Delta t = 11$ ms. 머리 질량 = 5.11 kg. 충격량, 평균 힘, 뇌진탕 여부는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**충격량** ($x$축: 머리에서 공 방향):

$$J = m(v_f - v_i) = 0.400[(20)-(-65)]\times\frac{1000}{3600}$$

$$= 9.44 \text{ kg·m/s} \approx 9.4 \text{ kg·m/s}$$

**평균 힘**:

$$F_{\text{avg}} = \frac{J}{\Delta t} = \frac{9.44}{0.011} \approx 860 \text{ N}$$

</v-clicks>

</div>
<div>

<v-click>

**머리의 가속도**:

$$\Delta v_{\text{head}} = \frac{J}{m_{\text{head}}} = \frac{9.44}{5.11} = 1.85 \text{ m/s}$$

$$a_{\text{head}} = \frac{1.85}{0.011} = 168 \text{ m/s}^2 \approx 17g$$

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

뇌진탕 기준: $\sim 95g$. $17g$는 위험 수준은 아니지만, 반복적 헤딩의 누적 효과가 우려된다.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.5 선운동량 보존

Conservation of Linear Momentum

---

# 선운동량 보존 법칙

<div class="grid grid-cols-2 gap-8">
<div>

$\vec{F}_{\text{net}} = 0$ (외력 없음)이고 계가 **닫혀** 있으면:

$$
\frac{d\vec{P}}{dt} = 0
$$

$$
\boxed{\vec{P} = \text{constant}} \tag{9.5.1}
$$

<v-click>

초기 상태와 나중 상태를 비교하면:

$$
\boxed{\vec{P}_i = \vec{P}_f} \tag{9.5.2}
$$

</v-click>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**선운동량 보존 법칙**: 닫힌 고립계에 알짜 외력이 작용하지 않으면, 전체 선운동량 $\vec{P}$는 변하지 않는다.

</div>

</v-click>

<v-click>

- 성분별로 보존: 특정 축 방향 외력이 0이면 그 축 성분만 보존
- **주의**: 운동량은 보존되지만 운동에너지는 보존되지 않을 수 있다!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0905f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.5.1 — 우주 화물선 폭발: 분리 전후 전체 운동량 보존</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 9.5.1**: 정지해 있던 장치가 폭발하여 두 조각. 하나가 $+x$ 방향이면 → (a) 전체 $p = 0$ (b) 나머지 조각은 $-x$ 성분 필수 (c) $x$축에 대해 각도를 가질 수 있다.

</div>

</v-click>

</div>
</div>

---

# 예제: 1차원 폭발 — 우주 화물선 (Sample Problem 9.5.1)

<div class="text-sm">

화물선(질량 $M$)이 $v_i = 2100$ km/h로 이동 중 화물 모듈($0.20M$)을 분리. 분리 후 화물선은 모듈보다 500 km/h 빠르다. 화물선의 속도는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

운동량 보존: $\vec{P}_i = \vec{P}_f$

$$Mv_i = (0.20M)v_{MS} + (0.80M)v_{HS}$$

상대 속도 관계: $v_{HS} = v_{MS} + 500$이므로

$$v_{HS} = v_{MS} + v_{\text{rel}}$$

$$v_{MS} = v_{HS} - 500$$

</v-clicks>

<v-click>

대입:

$$Mv_i = 0.20M(v_{HS} - 500) + 0.80Mv_{HS}$$

$$v_i = v_{HS} - 100$$

$$\boxed{v_{HS} = 2100 + 100 = 2200 \text{ km/h}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0905f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.5.1 — 분리 전후의 우주 화물선</div>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 내부 폭발은 계의 **전체** 운동량을 바꾸지 못한다. 개별 조각의 운동량은 변하지만 합은 불변!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.6 충돌에서의 운동량과 운동에너지

Momentum and Kinetic Energy in Collisions

---

# 충돌의 분류

<div class="grid grid-cols-2 gap-8">
<div>

닫힌 고립계의 충돌에서 **운동량은 항상 보존**:

$$
\vec{p}_{1i} + \vec{p}_{2i} = \vec{p}_{1f} + \vec{p}_{2f} \tag{9.6.1}
$$

<v-click>

### 충돌 유형

| 유형 | 운동량 | 운동에너지 |
|:---|:---:|:---:|
| **탄성** (elastic) | 보존 | 보존 |
| **비탄성** (inelastic) | 보존 | 비보존 |
| **완전 비탄성** (completely inelastic) | 보존 | 최대 손실 |

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**완전 비탄성 충돌**: 두 물체가 **합쳐져** 함께 이동 → 운동에너지 손실이 최대

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0906f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.6.1 — 1차원 비탄성 충돌: 충돌 전후</div>

</v-click>

<v-click>

<img src="/img/c0906f002_high_resolution.jpg" class="max-h-44 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 9.6.2 — 완전 비탄성 충돌: 합체 후 공통 속도 V</div>

</v-click>

</div>
</div>

---

# 완전 비탄성 충돌 (Completely Inelastic)

<div class="grid grid-cols-2 gap-8">
<div>

표적 $m_2$가 정지해 있을 때 ($v_{2i} = 0$):

$$
m_1 v_{1i} = (m_1 + m_2)V \tag{9.6.3}
$$

$$
\boxed{V = \frac{m_1}{m_1 + m_2}\,v_{1i}} \tag{9.6.4}
$$

<v-clicks>

- $V < v_{1i}$ 항상 (질량비 < 1)
- 질량중심 속도 $\vec{v}_{\text{com}}$는 충돌 전후 **불변**:

$$
\vec{v}_{\text{com}} = \frac{\vec{p}_{1i} + \vec{p}_{2i}}{m_1 + m_2} \tag{9.6.7}
$$

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

합체 후 공통 속도 $V$는 곧 **질량중심 속도** $v_{\text{com}}$이다!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0906f003_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.6.3 — 완전 비탄성 충돌의 연속 장면. com은 충돌 전후 같은 속도로 이동</div>

</v-click>

</div>
</div>

---

# 예제: 정면충돌 생존 (Sample Problem 9.6.1)

<div class="text-sm">

동일 질량($m = 1400$ kg)의 두 차가 $v = 25$ m/s로 정면충돌 (완전 비탄성).
(a) 각 차의 속도 변화 $\Delta v$는? (b) 80 kg 승객이 탑승하면?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a)** 운동량 보존:

$$m(+25) + m(-25) = 2mV \;\Rightarrow\; V = 0$$

$$\Delta v_1 = -25 \text{ m/s}, \quad \Delta v_2 = +25 \text{ m/s}$$

</v-clicks>

<v-click>

**(b)** 1번 차에 승객($m_1 = 1480$ kg):

$$V = \frac{(1480)(25) + (1400)(-25)}{2880} = 0.694 \text{ m/s}$$

$$\Delta v_1 = -24.3 \text{ m/s}, \quad \Delta v_2 = +25.7 \text{ m/s}$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**생존 확률**: 연구에 의하면 치사 위험:

$$r_1 = c\left(\frac{m_2}{m_1}\right)^{1.79}$$

승객 탑승 시 $m_1$이 증가하므로 $r_1$이 약 **9% 감소** — 같은 차에 탑승자가 있으면 오히려 운전자가 더 안전!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.7 1차원 탄성 충돌

Elastic Collisions in One Dimension

---

# 1차원 탄성 충돌 — 정지 표적 (Stationary Target)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

$m_1$이 $v_{1i}$로 정지한 $m_2$에 충돌 (탄성):

**운동량 보존**:

$$m_1 v_{1i} = m_1 v_{1f} + m_2 v_{2f} \tag{9.7.2}$$

**운동에너지 보존**:

$$\tfrac{1}{2}m_1 v_{1i}^2 = \tfrac{1}{2}m_1 v_{1f}^2 + \tfrac{1}{2}m_2 v_{2f}^2 \tag{9.7.3}$$

<v-click>

두 식을 연립하면:

$$
\boxed{v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1i}} \tag{9.7.6}
$$

$$
\boxed{v_{2f} = \frac{2m_1}{m_1 + m_2}\,v_{1i}} \tag{9.7.7}
$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0907f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.7.1 — 탄성 충돌: 정지 표적과의 충돌 전후</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

$v_{2f}$는 항상 양수 (표적은 항상 전진).
$v_{1f}$의 부호는 $m_1$과 $m_2$의 대소에 따라 결정!

</div>

</v-click>

</div>
</div>

---

# 탄성 충돌의 세 가지 특수 경우

<div class="text-sm">

### 1. 같은 질량 ($m_1 = m_2$)

$$v_{1f} = 0, \quad v_{2f} = v_{1i}$$

→ 속도를 **완전 교환**! (당구의 정면 충돌)

<v-click>

### 2. 무거운 표적 ($m_2 \gg m_1$)

$$v_{1f} \approx -v_{1i}, \quad v_{2f} \approx \frac{2m_1}{m_2}\,v_{1i} \approx 0 \tag{9.7.8}$$

→ 골프공이 대포알에 충돌: 되튕김, 표적은 거의 움직이지 않음

</v-click>

<v-click>

### 3. 무거운 발사체 ($m_1 \gg m_2$)

$$v_{1f} \approx v_{1i}, \quad v_{2f} \approx 2v_{1i} \tag{9.7.9}$$

→ 대포알이 골프공에 충돌: 발사체는 계속 전진, 표적은 **2배 속도**로 날아감

</v-click>

</div>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-xs">

**움직이는 표적**의 일반 공식: $v_{1f} = \frac{m_1 - m_2}{m_1+m_2}v_{1i} + \frac{2m_2}{m_1+m_2}v_{2i}$, $v_{2f} = \frac{2m_1}{m_1+m_2}v_{1i} + \frac{m_2-m_1}{m_1+m_2}v_{2i}$

</div>

</v-click>

---

# 예제: 연쇄 탄성 충돌 (Sample Problem 9.7.1)

<div class="text-sm">

블록 1이 $v_{1i} = 10$ m/s로 정지한 블록 2에 충돌, 블록 2는 다시 정지한 블록 3 ($m_3 = 6.0$ kg)에 충돌. 2차 충돌 후 $v_{3f} = 5.0$ m/s, 블록 2 정지. 블록 1, 2의 질량과 블록 1의 최종 속도는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**2차 충돌** (블록 2 → 블록 3): $v_{2f} = 0$이므로

$$m_2 = m_3 = 6.0 \text{ kg}$$

Eq. 9.7.7: $v_{3f} = \frac{2m_2}{m_2+m_3}v_{2i}$

$$5.0 = \frac{2m_2}{2m_2}v_{2i} \Rightarrow v_{2i} = 5.0 \text{ m/s}$$

</v-clicks>

<v-click>

**1차 충돌** (블록 1 → 블록 2):

Eq. 9.7.7: $5.0 = \frac{2m_1}{m_1+6.0}(10)$

$$m_1 = \tfrac{1}{3}m_2 = 2.0 \text{ kg}$$

$$v_{1f} = \frac{2.0 - 6.0}{2.0 + 6.0}(10) = -5.0 \text{ m/s}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0907f003_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.7.3 — 블록 1이 2에, 2가 3에 연쇄 탄성 충돌</div>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

블록 1은 **되튕김** ($v_{1f} < 0$): $m_1 < m_2$이므로 예상대로!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.8 2차원 충돌

Collisions in Two Dimensions

---

# 2차원 충돌 (Collisions in Two Dimensions)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

비정면(glancing) 충돌 → 운동량 보존을 **성분별**로 적용:

$$
\vec{P}_{1i} + \vec{P}_{2i} = \vec{P}_{1f} + \vec{P}_{2f} \tag{9.8.1}
$$

<v-click>

**$x$ 방향**: ($m_2$ 정지, $m_1$이 $x$축을 따라 입사)

$$
m_1 v_{1i} = m_1 v_{1f}\cos\theta_1 + m_2 v_{2f}\cos\theta_2 \tag{9.8.3}
$$

**$y$ 방향**:

$$
0 = -m_1 v_{1f}\sin\theta_1 + m_2 v_{2f}\sin\theta_2 \tag{9.8.4}
$$

</v-click>

<v-click>

탄성이면 운동에너지 보존 추가:

$$
\tfrac{1}{2}m_1 v_{1i}^2 = \tfrac{1}{2}m_1 v_{1f}^2 + \tfrac{1}{2}m_2 v_{2f}^2 \tag{9.8.5}
$$

7개 변수, 3개 방정식 → 4개를 알면 나머지 3개를 구할 수 있다

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0908f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.8.1 — 2차원 탄성 충돌(glancing collision): 두 물체가 각도를 이루며 산란</div>

</v-click>

</div>
</div>

---

# 예제: 스케이터 충돌 (Sample Problem 9.8.1)

<div class="text-sm">

Alfred ($m_A = 83$ kg, 동쪽 $v_A = 6.2$ km/h)와 Barbara ($m_B = 55$ kg, 북쪽 $v_B = 7.8$ km/h)가 완전 비탄성 충돌. 합체 후 속도 $\vec{V}$는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**$x$ 방향** (동쪽):

$$m_A v_A = (m_A + m_B)V\cos\theta \tag{9.8.6}$$

**$y$ 방향** (북쪽):

$$m_B v_B = (m_A + m_B)V\sin\theta \tag{9.8.7}$$

나누면:

$$\tan\theta = \frac{m_B v_B}{m_A v_A} = \frac{(55)(7.8)}{(83)(6.2)} = 0.834 \;\Rightarrow\; \boxed{\theta \approx 40°}$$

</v-clicks>

<v-click>

$$V = \frac{m_B v_B}{(m_A + m_B)\sin\theta} \approx 4.9 \text{ km/h}$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**질량중심 속도**: 충돌 전후 $\vec{v}_{\text{com}}$ 동일 → 합체 후 $\vec{V} = \vec{v}_{\text{com}}$

외력이 없으므로 com 속도 불변!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 9.9 변하는 질량: 로켓

Systems with Varying Mass: A Rocket

---

# 로켓 방정식 (Rocket Equations)

<div class="grid grid-cols-2 gap-8">
<div>

로켓은 연료를 분사하여 질량이 감소하는 계:

### 제1 로켓 방정식

$$
\boxed{Rv_{\text{rel}} = Ma} \tag{9.9.6}
$$

<v-clicks>

- $R = -dM/dt$: 연료 소비율 (양수)
- $v_{\text{rel}}$: 배기가스의 로켓 대비 상대 속도
- $Rv_{\text{rel}}$ = **추력**(thrust) $T$

</v-clicks>

<v-click>

### 제2 로켓 방정식

$$
\boxed{v_f - v_i = v_{\text{rel}}\ln\frac{M_i}{M_f}} \tag{9.9.7}
$$

- $M_i$: 초기 질량 (연료 포함)
- $M_f$: 최종 질량 (연료 소진 후)
- $\ln(M_i/M_f)$가 클수록 속도 증가가 크다 → **다단 로켓**의 이점!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0909f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 9.9.1 — (a) 시각 t에서의 로켓 (b) dt 후: 질량 감소, 속도 증가, 배기가스 분사</div>

</v-click>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 로켓 + 배기가스 전체 계의 운동량은 보존된다. 로켓이 가속하는 것은 배기가스에 운동량을 전달하기 때문!

</div>

</v-click>

</div>
</div>

---

# 예제: 로켓 추력과 가속도 (Sample Problem 9.9.1)

<div class="text-sm">

초기 질량 $M_i = 850$ kg인 로켓. 연료 소비율 $R = 2.3$ kg/s, 배기 상대 속도 $v_{\text{rel}} = 2800$ m/s.
(a) 추력은? (b) 초기 가속도는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a) 추력:**

$$T = Rv_{\text{rel}} = (2.3)(2800) = 6440 \text{ N} \approx 6400 \text{ N}$$

**(b) 초기 가속도** ($M = M_i$에서):

$$a = \frac{T}{M_i} = \frac{6440}{850} = 7.6 \text{ m/s}^2$$

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

연료가 소모되면 $M$이 감소하므로 → 같은 추력에서 **가속도가 점점 증가**한다!

</div>

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 9.9.1**: (a) 연료를 소비하기 전 $M_f = M_i$ → $\ln(1) = 0$ (속도 변화 없음).
(b) 연료가 소비되면 $M_f < M_i$ → $\ln(M_i/M_f)$가 **증가** → 속도 증가!

</div>

</v-click>

</div>
</div>

---

# 복습 & 요약 (Review & Summary) — (1)

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 질량중심 (Center of Mass)
- $\vec{r}_{\text{com}} = \frac{1}{M}\sum m_i\vec{r}_i$ (이산)
- $\vec{r}_{\text{com}} = \frac{1}{M}\int \vec{r}\,dm$ (연속)
- 대칭을 활용하면 적분을 줄일 수 있다

### 뉴턴 제2법칙 (입자계)
- $\vec{F}_{\text{net}} = M\vec{a}_{\text{com}}$
- 외력만 com 운동에 영향 (내력은 상쇄)

### 선운동량
- 입자: $\vec{p} = m\vec{v}$, 계: $\vec{P} = M\vec{v}_{\text{com}}$
- $\vec{F}_{\text{net}} = d\vec{P}/dt$

</div>
<div>

### 충격량-운동량 정리
- $\vec{J} = \int \vec{F}\,dt = \Delta\vec{p}$
- $J = F_{\text{avg}}\,\Delta t$

### 운동량 보존
- 닫힌 고립계: $\vec{P}_i = \vec{P}_f$
- 각 축 방향으로 독립 적용 가능

### 충돌
- 탄성: $p$ 보존 + $K$ 보존
- 비탄성: $p$ 보존, $K$ 비보존
- 완전 비탄성: 합체, $K$ 최대 손실

</div>
</div>

---

# 복습 & 요약 (Review & Summary) — (2)

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 1차원 탄성 충돌 (정지 표적)

$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1i}$$

$$v_{2f} = \frac{2m_1}{m_1 + m_2}\,v_{1i}$$

- $m_1 = m_2$: 속도 교환
- $m_1 \gg m_2$: $v_{2f} \approx 2v_{1i}$
- $m_1 \ll m_2$: $v_{1f} \approx -v_{1i}$

### 로켓 방정식
- 추력: $T = Rv_{\text{rel}}$
- $v_f - v_i = v_{\text{rel}}\ln(M_i/M_f)$

</div>
<div>

### 핵심 포인트 정리

- **질량중심**은 전체 질량이 집중된 것처럼 움직이는 점
- **선운동량**: $\vec{F} = d\vec{p}/dt$ (힘 = 운동량 변화율)
- **충격량** = 운동량 변화 = 힘-시간 곡선의 넓이
- **운동량 보존**: 외력이 없으면 $\vec{P} = \text{const}$
- 충돌 문제: 운동량 보존 + (탄성이면) 에너지 보존
- 2차원 충돌: 성분별로 운동량 보존 적용
- 로켓: 배기가스에 운동량 전달 → 추진

</div>
</div>

---

# 연습 문제 (1)

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

### 문제 1: 완전 비탄성 충돌

$m_1 = 5.0$ kg이 $v_{1i} = 8.0$ m/s로 정지한 $m_2 = 3.0$ kg에 충돌하여 합체. 합체 후 속도와 운동에너지 손실률은?

<v-click>

**풀이:**

$$V = \frac{m_1 v_{1i}}{m_1 + m_2} = \frac{(5.0)(8.0)}{8.0} = 5.0 \text{ m/s}$$

$$K_i = \tfrac{1}{2}(5.0)(8.0)^2 = 160 \text{ J}$$

$$K_f = \tfrac{1}{2}(8.0)(5.0)^2 = 100 \text{ J}$$

$$\text{손실률} = \frac{60}{160} = 37.5\%$$

</v-click>

</div>
<div>

### 문제 2: 1차원 탄성 충돌

$m_1 = 2.0$ kg ($v_{1i} = 6.0$ m/s)이 정지한 $m_2 = 4.0$ kg에 탄성 충돌. $v_{1f}$, $v_{2f}$는?

<v-click>

**풀이:**

$$v_{1f} = \frac{2.0-4.0}{2.0+4.0}(6.0) = -2.0 \text{ m/s}$$

$$v_{2f} = \frac{2(2.0)}{6.0}(6.0) = 4.0 \text{ m/s}$$

$m_1 < m_2$이므로 $v_{1f} < 0$ (되튕김).

</v-click>

</div>
</div>

---

# 연습 문제 (2)

<div class="text-sm">

### 문제 3: 충격량

<v-click>

0.50 kg 공이 벽에 10 m/s로 부딪혀 같은 속력으로 되튕긴다. 충격량은?

$$J = m(v_f - v_i) = 0.50[(-10)-(10)] = -10 \text{ kg·m/s}$$

크기: 10 kg·m/s (되튕기면 2배!)

</v-click>

</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 9: 질량중심과 선운동량 (Center of Mass and Linear Momentum) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 10 — 회전 (Rotation)

</div>
