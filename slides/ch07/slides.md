---
theme: default
title: "Chapter 7: 운동에너지와 일 (Kinetic Energy and Work)"
info: |
  일반물리 I — Chapter 7: 운동에너지와 일
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 7: 운동에너지와 일

Kinetic Energy and Work

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

- 에너지(energy)는 물리학에서 가장 중요한 개념 중 하나
- 비행, 건물 건축, 야구 투구, 위성 궤도 등 **모든 운동에 에너지가 필요**

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

핵심 아이디어: **에너지는 보존된다** (energy is conserved). 한 형태에서 다른 형태로 전환되고, 한 물체에서 다른 물체로 전달되지만, 총량은 항상 같다!

</div>

</v-click>

<v-clicks>

- 에너지 = 하나 이상의 물체의 상태와 관련된 **스칼라 양**
- 이 장에서는 **운동에너지**(kinetic energy)와 **일**(work)에 집중
- 일(work) = 힘에 의한 에너지 전달 방법

</v-clicks>

---
layout: section
---

# 7.1 운동에너지

Kinetic Energy

---

# 운동에너지 (Kinetic Energy)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

**운동에너지**(kinetic energy) $K$는 물체의 **운동 상태**와 관련된 에너지

$$
\boxed{K = \frac{1}{2}mv^2} \tag{7.1.1}
$$

<v-clicks>

- $m$: 질량(kg), $v$: 속력(m/s)
- 운동에너지는 **스칼라** — 음수가 될 수 없다
- 물체가 정지하면 $K = 0$
- 속력이 빠를수록 $K$가 크다

</v-clicks>

<v-click>

### SI 단위: 줄 (joule)

$$
1 \text{ J} = 1 \text{ kg} \cdot \text{m}^2/\text{s}^2 \tag{7.1.2}
$$

</v-click>

</div>
<div>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**예:** 질량 3.0 kg인 오리가 2.0 m/s로 날아간다면

$$K = \frac{1}{2}(3.0)(2.0)^2 = 6.0 \text{ J}$$

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 7.1.1**: 자동차의 속력이 5.0 m/s에서 15.0 m/s로 증가.
$K_f / K_i$의 비는?

→ $K \propto v^2$이므로 $(15/5)^2 = 9$배

</div>

</v-click>

</div>
</div>

---

# 예제: 기차 충돌 (Sample Problem 7.1.1)

<div class="text-sm">

1896년 텍사스에서 두 기관차를 6.4 km 트랙 양쪽에서 정면충돌시킨 사건.
각 기관차의 무게 $1.2 \times 10^6$ N, 등가속도 $a = 0.26$ m/s$^2$. 충돌 직전 총 운동에너지는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**질량 구하기:**

$$m = \frac{w}{g} = \frac{1.2 \times 10^6}{9.8} = 1.22 \times 10^5 \text{ kg}$$

**충돌 직전 속력** ($v_0 = 0$, $x - x_0 = 3.2 \times 10^3$ m):

$$v^2 = v_0^2 + 2a(x - x_0) = 2(0.26)(3200)$$

$$v = 40.8 \text{ m/s} \approx 147 \text{ km/h}$$

</v-clicks>

<v-click>

**총 운동에너지** (기관차 2대):

$$K = 2\left(\frac{1}{2}mv^2\right) = (1.22 \times 10^5)(40.8)^2$$

$$\boxed{K = 2.0 \times 10^8 \text{ J}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0701f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.1.1 — 1896년 기관차 정면충돌의 여파</div>

<div class="mt-3 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

이 충돌은 폭탄 폭발에 맞먹는 에너지를 방출했다!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 7.2 일과 운동에너지

Work and Kinetic Energy

---

# 일 (Work) — 정의

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

**일**(work) $W$: 힘에 의해 물체에 **전달되는 에너지**

<v-clicks>

- 물체에 에너지를 전달 → **양의 일** (positive work)
- 물체에서 에너지를 빼앗음 → **음의 일** (negative work)
- 일 = 에너지 전달의 한 방법
- 단위: **줄(J)** — 에너지와 같은 단위

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의:** 벽을 세게 밀어도 벽이 움직이지 않으면, 물리학적으로 벽에 한 일은 **0**!
일상적 의미의 "일"과 물리학적 정의를 구별해야 한다.

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0702f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.2.1 — 일정한 힘 F가 구슬을 와이어 위에서 가속시킨다. 변위 방향 성분만 일을 한다.</div>

</v-click>

</div>
</div>

---

# 일의 표현식 유도

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

마찰 없는 와이어 위의 구슬에 일정한 힘 $\vec{F}$가 각도 $\phi$로 작용:

<v-clicks>

**뉴턴 제2법칙** ($x$ 방향):

$$F_x = ma_x \tag{7.2.1}$$

**등가속도 운동**:

$$v^2 = v_0^2 + 2a_x d \tag{7.2.2}$$

$a_x$를 대입하여 정리하면:

$$\frac{1}{2}mv^2 - \frac{1}{2}mv_0^2 = F_x d \tag{7.2.3}$$

</v-clicks>

<v-click>

$F_x = F\cos\phi$이므로:

$$
\boxed{W = Fd\cos\phi} \quad \text{(일정한 힘이 한 일)} \tag{7.2.5}
$$

</v-click>

</div>
<div>

<v-click>

벡터 내적(dot product) 표기:

$$
\boxed{W = \vec{F} \cdot \vec{d}} \quad \text{(일정한 힘이 한 일)} \tag{7.2.6}
$$

</v-click>

<v-click>

### 일의 부호 판별

| 조건 | 일의 부호 |
|------|---------|
| $\phi < 90°$ ($\cos\phi > 0$) | **양의 일** — 에너지 전달 |
| $\phi = 90°$ ($\cos\phi = 0$) | **일 = 0** |
| $\phi > 90°$ ($\cos\phi < 0$) | **음의 일** — 에너지 감소 |

</v-click>

<v-click>

<div class="mt-3 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 변위에 **평행한** 힘 성분만 일을 한다. 변위에 **수직인** 성분은 일을 하지 않는다!

</div>

</v-click>

</div>
</div>

---

# 일-운동에너지 정리 (Work–Kinetic Energy Theorem)

운동에너지의 변화량 $\Delta K$는 물체에 한 **알짜일**(net work) $W$와 같다:

$$
\boxed{\Delta K = K_f - K_i = W} \tag{7.2.8}
$$

<v-click>

이를 다시 쓰면:

$$
\boxed{K_f = K_i + W} \tag{7.2.9}
$$

</v-click>

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

### 의미

- $W > 0$ → 운동에너지 **증가** (속력 증가)
- $W < 0$ → 운동에너지 **감소** (속력 감소)
- $W = 0$ → 운동에너지 **불변** (속력 불변)

</div>
<div>

<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 7.2.1**: 입자가 $x$축을 따라 운동.
(a) 속도 $-3$ → $-2$ m/s: $K$ 감소, $W < 0$
(b) 속도 $-2$ → $2$ m/s: $K$ 불변, $W = 0$

</div>

</div>
</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**알짜일 계산**: (1) 각 힘이 한 일을 더하거나, (2) 알짜힘 $\vec{F}_{\text{net}}$을 구해서 직접 계산

</div>

</v-click>

---

# 예제: 산업 스파이 (Sample Problem 7.2.1)

<div class="text-sm">

225 kg 금고를 바닥에서 $d = 8.50$ m 밀어 이동시킨다. Spy 001의 힘 $F_1 = 12.0$ N (수평 아래 30.0°), Spy 002의 힘 $F_2 = 10.0$ N (수평 위 40.0°). 마찰 없음.

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a) 알짜일:**

$$W_1 = F_1 d\cos\phi_1 = (12.0)(8.50)\cos 30.0°$$

$$= 88.33 \text{ J}$$

$$W_2 = F_2 d\cos\phi_2 = (10.0)(8.50)\cos 40.0°$$

$$= 65.11 \text{ J}$$

$$W = W_1 + W_2 \approx 153 \text{ J}$$

</v-clicks>

<v-click>

**(b) 중력과 수직항력이 한 일:**

$$W_g = mgd\cos 90° = 0$$

$$W_N = F_N d\cos 90° = 0$$

→ 변위에 수직이므로 일 = 0

</v-click>

</div>
<div>

<v-click>

**(c) 금고의 최종 속력** ($K_i = 0$):

$$W = K_f - K_i = \frac{1}{2}mv_f^2$$

$$v_f = \sqrt{\frac{2W}{m}} = \sqrt{\frac{2(153.4)}{225}}$$

$$\boxed{v_f = 1.17 \text{ m/s}}$$

</v-click>

<v-click>

<img src="/img/c0702f003_high_resolution.jpg" class="max-h-40 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 7.2.3 — 두 스파이가 금고를 밀고 당기는 상황</div>

</v-click>

</div>
</div>

---

# 예제: 단위벡터 표기법 (Sample Problem 7.2.2)

<div class="text-sm">

크레이프 상자가 미끄러운 주차장을 미끄러진다. 변위 $\vec{d} = (-3.0 \text{ m})\hat{\imath}$,
바람의 힘 $\vec{F} = (2.0 \text{ N})\hat{\imath} + (-6.0 \text{ N})\hat{\jmath}$.

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a) 힘이 한 일:**

$$W = \vec{F} \cdot \vec{d} = [(2.0)\hat{\imath} + (-6.0)\hat{\jmath}] \cdot [(-3.0)\hat{\imath}]$$

$$= (2.0)(-3.0)(\hat{\imath}\cdot\hat{\imath}) + (-6.0)(-3.0)(\hat{\jmath}\cdot\hat{\imath})$$

$$= -6.0 + 0 = \boxed{-6.0 \text{ J}}$$

</v-clicks>

<v-click>

**(b)** 초기 $K_i = 10$ J일 때 최종 운동에너지:

$$K_f = K_i + W = 10 + (-6.0)$$

$$\boxed{K_f = 4.0 \text{ J}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0702f004_high_resolution.jpg" class="max-h-52 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.2.4 — 바람의 힘 F가 크레이프 상자를 감속시킨다</div>

<div class="mt-3 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

음의 일 → 운동에너지 감소 → 상자가 **감속**된다

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 7.3 중력이 한 일

Work Done by the Gravitational Force

---

# 중력이 한 일 (Work Done by Gravity)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

질량 $m$인 물체가 변위 $\vec{d}$만큼 이동할 때, 중력 $\vec{F}_g$가 한 일:

$$
\boxed{W_g = mgd\cos\phi} \tag{7.3.1}
$$

<v-clicks>

### 상승하는 물체 ($\phi = 180°$)

$$W_g = mgd\cos 180° = \boxed{-mgd} \tag{7.3.2}$$

→ 중력이 에너지를 **빼앗는다** (감속)

### 하강하는 물체 ($\phi = 0°$)

$$W_g = mgd\cos 0° = \boxed{+mgd} \tag{7.3.3}$$

→ 중력이 에너지를 **공급한다** (가속)

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0703f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.3.1 — 위로 던진 토마토: 중력이 음의 일을 하여 속력 감소</div>

</v-click>

</div>
</div>

---

# 물체를 들어올리고 내릴 때의 일

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

외력 $\vec{F}$로 물체를 들어올리면, 일-운동에너지 정리에 의해:

$$
\Delta K = K_f - K_i = W_a + W_g \tag{7.3.4}
$$

<v-click>

### 처음과 끝에서 정지 ($K_f = K_i = 0$):

$$W_a + W_g = 0$$

$$
\boxed{W_a = -W_g} \tag{7.3.5}
$$

</v-click>

<v-click>

외력이 한 일 = 중력이 한 일의 **부호 반대**

$$
W_a = -mgd\cos\phi \tag{7.3.6}
$$

- 위로 들어올릴 때: $W_a = +mgd$
- 아래로 내릴 때: $W_a = -mgd$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0703f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.3.2 — (a) 들어올릴 때: 외력은 양의 일, 중력은 음의 일. (b) 내릴 때: 반대</div>

</v-click>

</div>
</div>

---

# 예제: 역도 (Sample Problem 7.3.1)

<div class="text-sm">

역도 선수 Paul Anderson이 27,900 N의 하중을 1.0 cm 들어올렸다.
(a) 중력이 한 일은? (b) Anderson이 한 일은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a) 중력이 한 일:**

$$W_g = mgd\cos\phi = (27{,}900)(0.010)\cos 180°$$

$$\boxed{W_g = -279 \text{ J} \approx -280 \text{ J}}$$

</v-clicks>

<v-click>

**(b) Anderson의 힘이 한 일:**

처음과 끝에서 정지이므로 $K_f = K_i$:

$$W_a = -W_g = +280 \text{ J}$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

일(에너지 전달)은 배낭 드는 것과 비슷한 수준이지만, 필요한 **힘**은 엄청나게 컸다. **일**과 **힘**은 다른 물리량!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0703f003_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.3.3 — 도르래를 이용한 물체 들어올리기</div>

<div class="mt-3 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 7.3.1**: 경사면의 각도를 높이면 같은 거리 $d$를 당길 때 필요한 일은?
→ 같은 높이 변화이므로 **같다** ($W_a = -W_g = mgd\cos\phi$에서 $d\cos\phi$ = 높이)

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 7.4 용수철 힘이 한 일

Work Done by a Spring Force

---

# 용수철 힘 — 훅의 법칙 (Hooke's Law)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

용수철의 복원력은 변위에 비례:

$$
\boxed{\vec{F}_s = -k\vec{d}} \tag{7.4.1}
$$

$x$축을 따라 배치하면:

$$
\boxed{F_x = -kx} \quad \text{(Hooke's law)} \tag{7.4.2}
$$

<v-clicks>

- $k$: 용수철 상수 (spring constant, N/m)
- $x > 0$ (늘어남) → $F_x < 0$ (당김)
- $x < 0$ (압축) → $F_x > 0$ (밀어냄)
- 항상 **평형 위치($x = 0$)를 향하는** 복원력

</v-clicks>

<v-click>

<div class="mt-3 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

용수철 힘은 **변하는 힘**(variable force) — $W = Fd\cos\phi$를 직접 사용할 수 없다!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0704f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.4.1 — (a) 이완 상태 (b) 늘어남: 음의 방향 복원력 (c) 압축: 양의 방향 복원력</div>

</v-click>

</div>
</div>

---

# 용수철 힘이 한 일

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

블록이 $x_i$에서 $x_f$까지 이동할 때, 용수철 힘이 한 일:

$$W_s = \int_{x_i}^{x_f} (-kx)\,dx = -k\int_{x_i}^{x_f} x\,dx$$

$$= \left(-\frac{1}{2}k\right)[x^2]_{x_i}^{x_f}$$

<v-click>

$$
\boxed{W_s = \frac{1}{2}kx_i^2 - \frac{1}{2}kx_f^2} \tag{7.4.6}
$$

</v-click>

<v-click>

$x_i = 0$이면 ($x_f = x$):

$$
\boxed{W_s = -\frac{1}{2}kx^2} \tag{7.4.7}
$$

</v-click>

<v-click>

- $|x_f| < |x_i|$ → $W_s > 0$ (평형에 가까워짐)
- $|x_f| > |x_i|$ → $W_s < 0$ (평형에서 멀어짐)
- $|x_f| = |x_i|$ → $W_s = 0$

</v-click>

</div>
<div>

<v-click>

### 외력이 한 일

외력이 용수철에 부착된 블록을 이동시키면:

$$\Delta K = K_f - K_i = W_a + W_s \tag{7.4.8}$$

처음·끝에서 정지 ($K_f = K_i = 0$):

$$
\boxed{W_a = -W_s} \tag{7.4.9}
$$

</v-click>

<v-click>

<div class="mt-3 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 7.4.1**: 블록의 초기·최종 위치가
(a) $-3$ cm, $2$ cm → $W_s > 0$
(b) $2$ cm, $3$ cm → $W_s < 0$
(c) $-2$ cm, $2$ cm → $W_s = 0$

</div>

</v-click>

</div>
</div>

---

# 예제: 용수철 (Sample Problem 7.4.1)

<div class="text-sm">

마찰 없는 바닥 위에 과자 봉지가 용수철 끝에 부착. $x_1 = 12$ mm에서 정지시키려면 $F_a = 4.9$ N.
(a) $x_0 = 0$에서 $x_2 = 17$ mm까지 당길 때 용수철이 한 일?
(b) $x_i = +17$ mm에서 $x_f = -12$ mm까지 이동할 때 용수철이 한 일?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**용수철 상수 구하기:**

$x_1 = 12$ mm에서 정지 → $F_x = -kx_1$에서

$$k = -\frac{F_x}{x_1} = \frac{4.9}{12 \times 10^{-3}} = 408 \text{ N/m}$$

**(a)** $x_0 = 0 \to x_2 = 17$ mm:

$$W_s = -\frac{1}{2}kx_2^2 = -\frac{1}{2}(408)(0.017)^2$$

$$\boxed{W_s = -0.059 \text{ J}}$$

</v-clicks>

</div>
<div>

<v-click>

**(b)** $x_i = +17$ mm → $x_f = -12$ mm:

$$W_s = \frac{1}{2}k(x_i^2 - x_f^2)$$

$$= \frac{1}{2}(408)[(0.017)^2 - (-0.012)^2]$$

$$\boxed{W_s = +0.030 \text{ J}}$$

</v-click>

<v-click>

<div class="mt-3 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

(b)에서 양의 일: 블록이 평형에 **가까워지는** 방향으로 이동하므로 용수철이 에너지를 **공급**

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 7.5 변하는 힘이 한 일

Work Done by a General Variable Force

---

# 1차원 변하는 힘의 일

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

힘 $F(x)$가 위치에 따라 변할 때, $W = Fd\cos\phi$를 직접 쓸 수 없다.

<v-click>

### 적분으로 계산

$x_i$에서 $x_f$까지의 일 = $F(x)$ 곡선 아래 **넓이**:

$$
\boxed{W = \int_{x_i}^{x_f} F(x)\,dx} \tag{7.5.4}
$$

</v-click>

<v-click>

### 3차원으로 확장

$$\vec{F} = F_x\hat{\imath} + F_y\hat{\jmath} + F_z\hat{k}$$

$$
\boxed{W = \int_{x_i}^{x_f} F_x\,dx + \int_{y_i}^{y_f} F_y\,dy + \int_{z_i}^{z_f} F_z\,dz} \tag{7.5.8}
$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0705f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.5.1 — F(x) 그래프에서 일 = 곡선 아래 넓이. 구간을 잘게 나누어 적분</div>

</v-click>

</div>
</div>

---

# 변하는 힘의 일-운동에너지 정리 증명

<div class="text-sm">

질량 $m$인 입자에 알짜힘 $F(x)$가 작용할 때:

<v-clicks>

$$W = \int_{x_i}^{x_f} F(x)\,dx = \int_{x_i}^{x_f} ma\,dx \tag{7.5.9}$$

체인 룰 사용: $a\,dx = \frac{dv}{dt}dx = \frac{dv}{dx}\cdot\frac{dx}{dt}\cdot dx$은 아니고, $ma\,dx = m\frac{dv}{dt}dx = mv\,dv$

$$W = \int_{v_i}^{v_f} mv\,dv = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2 \tag{7.5.13}$$

</v-clicks>

<v-click>

$$
\boxed{W = K_f - K_i = \Delta K}
$$

</v-click>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**일-운동에너지 정리는 힘이 일정하든 변하든 항상 성립한다!**

변하는 힘에 대해서도 알짜일 = 운동에너지 변화량

</div>

</v-click>

<v-click>

<div class="mt-3 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 7.5.1**: $\vec{F} = (3x^2 \text{ N})\hat{\imath}$이 작용, $x = 0 \to 2.0$ m 이동.
$W = \int_0^{2} 3x^2\,dx = [x^3]_0^2 = 8.0$ J

</div>

</v-click>

</div>

---

# 예제: 경막외 주사 (Sample Problem 7.5.1)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

경막외 마취 시 바늘을 피부에 꽂을 때, 힘 $F$는 변위 $x$에 따라 변한다.
$x = 0$에서 $x = 0.030$ m까지의 일은?

<v-click>

$$W = \int_0^{x_f} F(x)\,dx$$

그래프가 직선 구간으로 이루어져 있으므로, 삼각형과 직사각형의 넓이 합으로 계산:

</v-click>

<v-click>

$$W = \sum(\text{영역 A ~ K의 넓이})$$

$$= 0.048 + 0.024 + 0.012 + 0.036$$

$$+ 0.009 + 0.001 + 0.016$$

$$+ 0.048 + 0.016 + 0.004 + 0.024$$

$$\boxed{W = 0.238 \text{ J}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0705f002a_high_resolution.jpg" class="max-h-36 rounded-lg" />

</v-click>

<v-click>

<img src="/img/c0705f002c_high_resolution.jpg" class="max-h-36 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 7.5.2 — 힘 F vs 변위 x 그래프를 삼각형/직사각형으로 분할하여 넓이 계산</div>

</v-click>

</div>
</div>

---
layout: section
---

# 7.6 일률

Power

---

# 일률 (Power)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

**일률**(power): 힘이 일을 하는 **시간 비율** (rate)

### 평균 일률

$$
\boxed{P_{\text{avg}} = \frac{W}{\Delta t}} \tag{7.6.1}
$$

<v-click>

### 순간 일률

$$
\boxed{P = \frac{dW}{dt}} \tag{7.6.2}
$$

</v-click>

<v-click>

### SI 단위: 와트 (watt)

$$1 \text{ W} = 1 \text{ J/s} = 1 \text{ kg} \cdot \text{m}^2/\text{s}^3 \tag{7.6.3}$$

$$1 \text{ hp} = 746 \text{ W} \tag{7.6.4}$$

$$1 \text{ kW·h} = 3.60 \times 10^6 \text{ J} = 3.60 \text{ MJ} \tag{7.6.5}$$

</v-click>

</div>
<div>

<v-click>

### 힘과 속도로 표현

입자에 힘 $\vec{F}$가 작용하고 속도가 $\vec{v}$일 때:

$$P = \frac{dW}{dt} = \frac{F\cos\phi\,dx}{dt} = Fv\cos\phi$$

$$
\boxed{P = \vec{F} \cdot \vec{v}} \tag{7.6.7}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 7.6.1**: 등속 원운동하는 블록에 줄이 연결.
줄의 힘이 블록에 한 일률은?

→ $\vec{F} \perp \vec{v}$이므로 $P = \vec{F}\cdot\vec{v} = 0$

</div>

</v-click>

<v-click>

<div class="mt-3 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**참고**: kW·h는 에너지의 단위이지, 일률의 단위가 아니다! 전기 요금에서 자주 사용된다.

</div>

</v-click>

</div>
</div>

---

# 예제: 힘, 속도, 일률 (Sample Problem 7.6.1)

<div class="text-sm">

상자가 마찰 없는 바닥 위를 오른쪽으로 $v = 3.0$ m/s로 이동.
$\vec{F}_1$: 수평 왼쪽 2.0 N, $\vec{F}_2$: 수평 위 60° 방향 4.0 N. 각 힘의 일률과 알짜 일률은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**$\vec{F}_1$의 일률** ($\phi_1 = 180°$):

$$P_1 = F_1 v\cos\phi_1 = (2.0)(3.0)\cos 180°$$

$$\boxed{P_1 = -6.0 \text{ W}}$$

→ $\vec{F}_1$은 상자에서 에너지를 **제거** (6.0 J/s)

**$\vec{F}_2$의 일률** ($\phi_2 = 60°$):

$$P_2 = F_2 v\cos\phi_2 = (4.0)(3.0)\cos 60°$$

$$\boxed{P_2 = +6.0 \text{ W}}$$

→ $\vec{F}_2$는 상자에 에너지를 **공급** (6.0 J/s)

</v-clicks>

</div>
<div>

<v-click>

**알짜 일률:**

$$P_{\text{net}} = P_1 + P_2 = -6.0 + 6.0$$

$$\boxed{P_{\text{net}} = 0}$$

</v-click>

<v-click>

<img src="/img/c0706f002_high_resolution.jpg" class="max-h-44 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 7.6.2 — 두 힘과 속도의 관계</div>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

$P_{\text{net}} = 0$ → 운동에너지 불변 → 속력 3.0 m/s **유지**!

</div>

</v-click>

</div>
</div>

---

# 예제: 선외 모터 (Sample Problem 7.6.2)

<div class="text-sm">

80 hp 선외 모터가 보트를 22 knots (= 11 m/s)로 직선 등속 운항시킨다.
추진력 $F$와 물의 항력 $F_d$의 크기는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-click>

등속이므로 추력 = 항력. $\phi = 0°$:

$$P = Fv\cos\phi$$

$$F = \frac{P}{v\cos\phi} = \frac{(80)(746)}{(11)(1)}$$

$$\boxed{F = 5.4 \times 10^3 \text{ N} = 5.4 \text{ kN}}$$

</v-click>

<v-click>

등속 → 알짜힘 = 0:

$$\boxed{F_d = F = 5.4 \text{ kN}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0706f001_high_resolution.jpg" class="max-h-52 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 7.6.1 — 트럭이 짐에 힘을 가하며 일률을 전달</div>

<div class="mt-3 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

일률은 "힘이 얼마나 빨리 일을 하는가"를 나타낸다. 같은 일이라도 빠르게 하면 더 큰 일률이 필요!

</div>

</v-click>

</div>
</div>

---

# 복습 & 요약 (Review & Summary)

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

### 운동에너지
- $K = \frac{1}{2}mv^2$ — 스칼라, 항상 $\geq 0$
- 단위: J = kg·m$^2$/s$^2$

### 일 (일정한 힘)
- $W = Fd\cos\phi = \vec{F}\cdot\vec{d}$
- 변위에 평행한 성분만 일을 한다

### 일-운동에너지 정리
- $\Delta K = K_f - K_i = W$ (알짜일)
- 양의 일 → $K$ 증가, 음의 일 → $K$ 감소

### 중력이 한 일
- 상승: $W_g = -mgd$
- 하강: $W_g = +mgd$
- 들어올리기/내리기 ($K_f = K_i$): $W_a = -W_g$

</div>
<div>

### 용수철 힘이 한 일
- Hooke's law: $F_x = -kx$
- $W_s = \frac{1}{2}kx_i^2 - \frac{1}{2}kx_f^2$

### 변하는 힘이 한 일
- $W = \int_{x_i}^{x_f} F(x)\,dx$ (곡선 아래 넓이)
- 3D: 각 성분별 적분의 합

### 일률 (Power)
- 평균: $P_{\text{avg}} = W/\Delta t$
- 순간: $P = dW/dt = \vec{F}\cdot\vec{v}$
- 단위: W (watt), 1 hp = 746 W

### 핵심 포인트
- 에너지는 보존된다
- 일 = 힘에 의한 에너지 전달
- 운동에너지 변화 = 알짜일

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">
<div>

### 문제 1: 일-운동에너지 정리

5.0 kg 물체에 수평 힘 $F = 12$ N이 작용하여 마찰 없는 바닥 위에서 3.0 m 이동한다. 초기 속력 2.0 m/s일 때, 최종 속력은?

<v-click>

**풀이:**

$$W = Fd = (12)(3.0) = 36 \text{ J}$$

$$K_i = \frac{1}{2}(5.0)(2.0)^2 = 10 \text{ J}$$

$$K_f = K_i + W = 46 \text{ J}$$

$$v_f = \sqrt{\frac{2K_f}{m}} = \sqrt{\frac{92}{5.0}} = 4.3 \text{ m/s}$$

</v-click>

</div>
<div>

### 문제 2: 용수철

$k = 500$ N/m인 용수철을 이완 상태에서 $x = 0.10$ m까지 압축하는 데 필요한 일은?

<v-click>

**풀이:**

$$W_a = -W_s = +\frac{1}{2}kx^2 = \frac{1}{2}(500)(0.10)^2 = 2.5 \text{ J}$$

</v-click>

### 문제 3: 일률

<v-click>

1200 kg 자동차가 60 km/h (= 16.7 m/s)로 등속 주행. 항력 500 N이면 엔진의 출력은?

$$P = Fv = (500)(16.7) = 8.3 \text{ kW} \approx 11 \text{ hp}$$

</v-click>

</div>
</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 7: 운동에너지와 일 (Kinetic Energy and Work) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 8 — 위치에너지와 에너지 보존 (Potential Energy and Conservation of Energy)

</div>
