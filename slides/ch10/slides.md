---
theme: default
title: "Chapter 10: 회전 (Rotation)"
info: |
  일반물리 I — Chapter 10: 회전
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 10: 회전

Rotation

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

- 지금까지는 물체가 직선이나 곡선을 따라 이동하는 **병진 운동(translation)**을 다루었다
- 이제 물체가 축을 중심으로 도는 **회전 운동(rotation)**을 분석한다

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**핵심 아이디어**: 회전 운동의 변수($\theta$, $\omega$, $\alpha$)는 병진 운동의 변수($x$, $v$, $a$)와 **완벽히 대응**된다. 병진 운동의 공식에서 변수만 바꾸면 회전 공식이 된다!

</div>

</v-click>

<v-clicks>

- **회전 변수** → **등각가속도 운동** → **선형·각변수 관계**
- **회전 운동에너지**, **회전 관성**, **토크**, **뉴턴 제2법칙(회전)**
- 힘 대신 **토크**, 질량 대신 **회전 관성(관성 모멘트)**

</v-clicks>

---
layout: section
---

# 10.1 회전 변수

Rotational Variables

---

# 강체와 회전축 (Rigid Body & Rotation Axis)

<div class="grid grid-cols-2 gap-8">
<div>

**강체(rigid body)**: 모든 부분이 고정되어 형태가 변하지 않는 물체

<v-clicks>

- **고정축(fixed axis)**: 움직이지 않는 회전 중심축
- 순수 회전(pure rotation): 모든 점이 축을 중심으로 원을 그리며 같은 각도로 회전
- 순수 병진(pure translation): 모든 점이 같은 직선 거리만큼 이동

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**참고**: 볼링공의 운동 = 회전 + 병진 (이 장에서는 순수 회전만 다룬다)

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1001f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.1.2 — 임의 형태의 강체가 z축을 중심으로 순수 회전. 기준선(reference line)은 물체에 고정되어 함께 회전한다.</div>

</v-click>

</div>
</div>

---

# 각위치 (Angular Position)

<div class="grid grid-cols-2 gap-8">
<div>

물체에 고정된 **기준선(reference line)**이 고정 방향과 이루는 각도가 **각위치** $\theta$:

$$
\boxed{\theta = \frac{s}{r}} \quad \text{(radian)} \tag{10.1.1}
$$

<v-clicks>

- $s$: 호의 길이, $r$: 원의 반지름
- 단위: **라디안(rad)** — 무차원 순수 수
- $1 \text{ rev} = 360° = 2\pi \text{ rad}$ &ensp; (10.1.2)
- $1 \text{ rad} = 57.3° = 0.159 \text{ rev}$ &ensp; (10.1.3)

</v-clicks>

<v-click>

<div class="mt-3 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

매 회전마다 $\theta$를 0으로 재설정하지 않는다. 2바퀴 회전 시 $\theta = 4\pi$ rad.

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1001f003_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.1.3 — 위에서 본 회전 강체 단면. 기준선이 x축과 이루는 각이 각위치 theta.</div>

</v-click>

</div>
</div>

---

# 각변위·각속도·각가속도

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 각변위 (Angular Displacement)

$$
\boxed{\Delta\theta = \theta_2 - \theta_1} \tag{10.1.4}
$$

- 반시계 방향(CCW): **양(+)**
- 시계 방향(CW): **음(−)** — "Clocks are negative!"

<v-click>

### 각속도 (Angular Velocity)

**평균**: $\omega_{\text{avg}} = \dfrac{\Delta\theta}{\Delta t}$ &ensp; (10.1.5)

**순간**:

$$
\boxed{\omega = \frac{d\theta}{dt}} \tag{10.1.6}
$$

단위: rad/s (또는 rev/s, rpm)

</v-click>

<v-click>

### 각가속도 (Angular Acceleration)

**평균**: $\alpha_{\text{avg}} = \dfrac{\Delta\omega}{\Delta t}$ &ensp; (10.1.7)

**순간**:

$$
\boxed{\alpha = \frac{d\omega}{dt}} \tag{10.1.8}
$$

단위: rad/s$^2$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1001f004_high_resolution.jpg" class="max-h-52 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.1.4 — 시각 t1에서 t2 사이의 각변위. 이 경우 반시계 방향이므로 양수.</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 10.1.1**: 원판의 초기·최종 각위치가 다음과 같을 때, 각변위가 음수인 것은?
(a) −3, +5 rad (b) −3, −7 rad (c) 7, −3 rad

→ (b)와 (c): $\Delta\theta < 0$

</div>

</v-click>

</div>
</div>

---

# 예제: 각위치에서 각속도 유도 (Sample Problem 10.1.1)

<div class="text-sm">

원판의 각위치가 $\theta = -1.00 - 0.600t + 0.250t^2$ (rad, s)로 주어진다.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a)** $\theta(t)$를 그래프로 그려라.

**(b)** $\theta$가 최솟값이 되는 시각 $t_{\min}$과 그 값?

$$\omega = \frac{d\theta}{dt} = -0.600 + 0.500t$$

$\omega = 0$으로 놓으면: $t_{\min} = 1.20$ s

$$\theta_{\min} = -1.00 - 0.600(1.20) + 0.250(1.20)^2 = -1.36 \text{ rad}$$

</v-clicks>

<v-click>

**(c)** 각속도 $\omega(t)$의 그래프:

$$\omega = -0.600 + 0.500t \tag{10.1.11}$$

직선 → 기울기 = $\alpha = 0.500$ rad/s$^2$ (일정)

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1001f005ab_high_resolution.jpg" class="max-h-44 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.1.5 — (a) 회전 원판 (b) theta(t) 그래프</div>

<img src="/img/c1001f005c_high_resolution.jpg" class="max-h-44 rounded-lg mt-2" />

<div class="text-xs text-gray-400 mt-1">Fig 10.1.5c — omega(t): 음에서 양으로 전환 (CW에서 CCW로)</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.2 각변수는 벡터인가?

Are Angular Quantities Vectors?

---

# 각속도 벡터와 오른손 법칙

<div class="grid grid-cols-2 gap-8">
<div>

### 각속도 $\vec{\omega}$는 벡터

- 크기: $|\omega|$ (각속력)
- 방향: **오른손 법칙(right-hand rule)**으로 결정

<v-clicks>

**오른손 법칙:**
1. 오른손 손가락을 **회전 방향**으로 감아쥔다
2. **엄지**가 가리키는 방향 = $\vec{\omega}$의 방향

- 반시계(CCW): $\vec{\omega}$는 축을 따라 **위로** (+$z$)
- 시계(CW): $\vec{\omega}$는 축을 따라 **아래로** (−$z$)

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의**: 각**변위** $\Delta\theta$는 엄밀히 벡터가 **아니다** (교환 법칙 불성립). 그러나 매우 작은 $d\theta$는 벡터로 취급 가능. $\omega = d\theta/dt$이므로 각속도는 벡터.

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1001f006_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.1.6 — (a) 레코드판 회전 (b) 축을 따라 놓인 각속도 벡터 (c) 오른손 법칙으로 방향 결정</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.3 등각가속도 회전

Rotation with Constant Angular Acceleration

---

# 등각가속도 운동 방정식

$\alpha = \text{const}$일 때, 병진 운동의 등가속도 공식과 **완전히 대응**되는 공식:

<div class="grid grid-cols-2 gap-8 mt-2 text-sm">
<div>

### 병진 (Linear)

$$v = v_0 + at$$

$$x - x_0 = v_0 t + \tfrac{1}{2}at^2$$

$$v^2 = v_0^2 + 2a(x - x_0)$$

$$x - x_0 = \tfrac{1}{2}(v_0 + v)t$$

$$x - x_0 = vt - \tfrac{1}{2}at^2$$

</div>
<div>

### 회전 (Angular)

$$\boxed{\omega = \omega_0 + \alpha t} \tag{10.2.1}$$

$$\boxed{\theta - \theta_0 = \omega_0 t + \tfrac{1}{2}\alpha t^2} \tag{10.2.2}$$

$$\boxed{\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)} \tag{10.2.3}$$

$$\theta - \theta_0 = \tfrac{1}{2}(\omega_0 + \omega)t \tag{10.2.4}$$

$$\theta - \theta_0 = \omega t - \tfrac{1}{2}\alpha t^2 \tag{10.2.5}$$

</div>
</div>

<v-click>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: $x \to \theta$, $v \to \omega$, $a \to \alpha$로 치환하면 끝! 기본 공식 (10.2.1)과 (10.2.2)만 기억하면 나머지는 유도 가능.

</div>

</v-click>

---

# 예제: 숫돌 (Sample Problem 10.2.1)

<div class="text-sm">

숫돌이 $\alpha = 0.35$ rad/s$^2$의 등각가속도로 회전. $t = 0$에서 $\omega_0 = -4.6$ rad/s, $\theta_0 = 0$.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a)** $\theta = 5.0$ rev ($= 10\pi$ rad)인 시각?

Eq. 10.2.2: $\theta - \theta_0 = \omega_0 t + \frac{1}{2}\alpha t^2$

$$10\pi = (-4.6)t + \frac{1}{2}(0.35)t^2$$

이차방정식 풀면: $t = 32$ s

</v-clicks>

<v-click>

**(b)** $t = 0$에서 $t = 32$ s 사이의 운동 설명:

처음에 CW($\omega_0 < 0$)로 회전하며 감속 → 정지 → CCW로 가속

</v-click>

<v-click>

**(c)** 일시 정지 시각: Eq. 10.2.1에서 $\omega = 0$

$$t = \frac{-\omega_0}{\alpha} = \frac{4.6}{0.35} = 13 \text{ s}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1002f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.2.1 — 숫돌: t = 0에서 기준선이 수평(theta = 0). 처음 CW 회전 후 반전하여 CCW로 회전.</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.4 선형·각변수 관계

Relating Linear and Angular Variables

---

# 호 길이·속력·가속도

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

회전축에서 거리 $r$인 점의 **선형 변수**와 **각변수** 관계:

### 위치 (호 길이)

$$
\boxed{s = \theta r} \tag{10.3.1}
$$

<v-click>

### 속력 (접선 속도)

$$
\boxed{v = \omega r} \tag{10.3.2}
$$

- 모든 점의 $\omega$는 같지만, $r$이 클수록 $v$가 크다

</v-click>

<v-click>

### 주기

$$
\boxed{T = \frac{2\pi r}{v} = \frac{2\pi}{\omega}} \tag{10.3.3–4}
$$

</v-click>

</div>
<div>

<v-click>

### 가속도

**접선 성분** (속력 변화):

$$
\boxed{a_t = \alpha r} \tag{10.3.6}
$$

**지름 성분** (방향 변화, 구심):

$$
\boxed{a_r = \frac{v^2}{r} = \omega^2 r} \tag{10.3.7}
$$

</v-click>

<v-click>

<img src="/img/c1003f001_high_resolution.jpg" class="max-h-44 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.3.1 — (a) 속도 v는 원의 접선 (b) 가속도: 접선 성분 at + 지름 성분 ar</div>

</v-click>

</div>
</div>

---

# 선형·각변수 대응 요약

<div class="flex justify-center mt-4 text-sm">

| 선형 (병진) | | 각 (회전) | |
|:---:|:---:|:---:|:---:|
| 위치 | $x$ | 각위치 | $\theta$ |
| 속도 | $v = dx/dt$ | 각속도 | $\omega = d\theta/dt$ |
| 가속도 | $a = dv/dt$ | 각가속도 | $\alpha = d\omega/dt$ |
| 질량 $m$ / 힘 $F$ | $F = ma$ | 관성 $I$ / 토크 $\tau$ | $\tau = I\alpha$ |
| 운동에너지 | $\frac{1}{2}mv^2$ | 운동에너지 | $\frac{1}{2}I\omega^2$ |

</div>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 병진 운동에서 $x \to \theta$, $v \to \omega$, $a \to \alpha$, $m \to I$, $F \to \tau$로 바꾸면 회전 운동 공식이 된다!

</div>

</v-click>

---

# 예제: 롤러코스터 가속 (Sample Problem 10.3.1)

<div class="text-sm">

인덕션 롤러코스터 트랙: 직선 구간 → 원호 구간(반지름 $r$). 원호를 따라 접선 가속도 $a_t = g$로 가속.
순 가속도 크기가 $4g$에 도달하는 각위치 $\theta_P$는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

순 가속도: $a = \sqrt{a_t^2 + a_r^2}$

$a_r = \omega^2 r$이고, $a_t$와 $r$이 상수이므로 등각가속도 방정식 사용 가능.

$\alpha = a_t / r$, $\omega_0 = 0$, $\theta_0 = 0$에서:

$$\omega^2 = 2\alpha\theta \quad \Rightarrow \quad a_r = \omega^2 r = 2a_t\theta$$

$a = 4g$, $a_t = g$를 대입:

$$(4g)^2 = g^2 + (2g\theta)^2$$

$$\theta_P = \frac{1}{2}\sqrt{\frac{(4g)^2}{g^2} - 1} = \frac{1}{2}\sqrt{15} = 1.94 \text{ rad} = 111°$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c1003f002_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.3.2 — 롤러코스터 트랙: 원호에서 접선 및 지름 가속도가 합해져 4g에 도달</div>

<div class="mt-3 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

점 P 이후 직선 → $a_r = 0$이므로 $a = g$. 가속도가 $4g$에서 $g$로 급변하면 **롤러코스터 두통** 유발!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.5 회전 운동에너지

Kinetic Energy of Rotation

---

# 회전 운동에너지와 회전 관성

<div class="grid grid-cols-2 gap-8">
<div>

회전하는 강체의 각 입자 $i$: 속력 $v_i = \omega r_i$

$$K = \sum \tfrac{1}{2}m_i v_i^2 = \sum \tfrac{1}{2}m_i(\omega r_i)^2 = \tfrac{1}{2}\left(\sum m_i r_i^2\right)\omega^2$$

<v-click>

### 회전 관성 (Rotational Inertia)

$$
\boxed{I = \sum m_i r_i^2} \tag{10.4.3}
$$

</v-click>

<v-click>

### 회전 운동에너지

$$
\boxed{K = \tfrac{1}{2}I\omega^2} \tag{10.4.4}
$$

</v-click>

<v-clicks>

- $\frac{1}{2}mv^2$에서 $m \to I$, $v \to \omega$
- $I$는 질량 **분포**에 의존 → 같은 질량이라도 회전축에서 먼 곳에 분포하면 $I$가 크다
- SI 단위: kg$\cdot$m$^2$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c1004f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.4.1 — 긴 막대: (a) 중심축 회전은 쉽고 (b) 끝점 축 회전은 어렵다. 질량이 축에 가까울수록 I가 작다.</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.6 회전 관성 계산

Calculating the Rotational Inertia

---

# 연속 물체의 회전 관성

이산 입자 → 연속체: 합을 적분으로 대체

$$
\boxed{I = \int r^2 \, dm} \tag{10.5.1}
$$

<v-click>

### 평행축 정리 (Parallel-Axis Theorem)

질량중심을 지나는 축에 대한 회전 관성 $I_{\text{com}}$을 알면, **평행한** 임의 축에 대한 $I$는:

$$
\boxed{I = I_{\text{com}} + Mh^2} \tag{10.5.2}
$$

- $h$: 두 축 사이의 수직 거리
- $M$: 물체의 전체 질량

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 질량중심 축의 $I_{\text{com}}$이 항상 **최솟값**. 다른 축은 $Mh^2$만큼 항상 더 크다.

</div>

</v-click>

---

# 주요 물체의 회전 관성 (Table 10.5.1)

<div class="flex justify-center">

<img src="/img/c1005f001_high_resolution.jpg" class="max-h-96 rounded-lg" />

</div>

<div class="text-xs text-gray-400 mt-1 text-center">Table 10.5.1 — 9가지 대표 도형의 회전 관성. 링: MR^2, 원판: (1/2)MR^2, 막대(중심): (1/12)ML^2, 구: (2/5)MR^2 등.</div>

---

# 예제: 두 입자 계 (Sample Problem 10.5.1)

<div class="text-sm">

질량 $m$인 두 입자가 질량 무시할 수 있는 막대(길이 $L$)의 양 끝에 연결.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a)** 질량중심(중점)을 지나는 축의 $I_{\text{com}}$:

$$I_{\text{com}} = m\left(\frac{L}{2}\right)^2 + m\left(\frac{L}{2}\right)^2 = \frac{1}{2}mL^2$$

**(b)** 왼쪽 끝을 지나는 축의 $I$:

**방법 1** (직접 계산):
$$I = m(0)^2 + m(L)^2 = mL^2$$

**방법 2** (평행축 정리):
$$I = I_{\text{com}} + (2m)\left(\frac{L}{2}\right)^2 = \frac{1}{2}mL^2 + \frac{1}{2}mL^2 = mL^2$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c1005f002_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.5.2 — (a) 질량중심축 (b) 끝점축. 평행축 정리로 관계.</div>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

끝점축의 $I$는 중심축의 **2배** → 회전이 더 어렵다!

</div>

</v-click>

</div>
</div>

---

# 예제: 균일 막대의 회전 관성 (Sample Problem 10.5.2)

<div class="text-sm">

질량 $M$, 길이 $L$인 균일한 얇은 막대.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a)** 중심을 지나는 수직축의 $I$:

$$dm = \frac{M}{L}dx$$

$$I = \int_{-L/2}^{+L/2} x^2 \frac{M}{L}dx = \frac{M}{3L}\left[x^3\right]_{-L/2}^{+L/2}$$

$$\boxed{I_{\text{com}} = \frac{1}{12}ML^2}$$

</v-clicks>

<v-click>

**(b)** 끝점을 지나는 수직축의 $I$:

평행축 정리 ($h = L/2$):

$$I = I_{\text{com}} + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2$$

$$\boxed{I = \frac{1}{3}ML^2}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1005f003_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.5.3 — 균일 막대: 미소 질량 dm = (M/L)dx의 적분으로 I 계산</div>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

적분으로 $I_{\text{com}}$을 구한 뒤, 평행축 정리로 다른 축의 $I$를 쉽게 계산!

</div>

</v-click>

</div>
</div>

---

# 예제: 회전 운동에너지 — 스핀 폭발 (Sample Problem 10.5.3)

<div class="text-sm">

강철 원판 ($M = 272$ kg, $R = 38.0$ cm)이 $\omega = 14\,000$ rev/min에서 폭발. 방출된 에너지는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**회전 관성** (원판):

$$I = \tfrac{1}{2}MR^2 = \tfrac{1}{2}(272)(0.38)^2 = 19.64 \text{ kg·m}^2$$

**각속도 변환**:

$$\omega = 14\,000 \text{ rev/min} \times \frac{2\pi \text{ rad}}{1 \text{ rev}} \times \frac{1 \text{ min}}{60 \text{ s}} = 1466 \text{ rad/s}$$

**회전 운동에너지**:

$$K = \tfrac{1}{2}I\omega^2 = \tfrac{1}{2}(19.64)(1466)^2$$

$$\boxed{K \approx 2.1 \times 10^7 \text{ J} = 21 \text{ MJ}}$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c1005f004_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.5.4 — 고속 회전 원판의 폭발로 인한 파괴: 납 벽돌 파손, 천장 관통</div>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

21 MJ은 TNT 약 5 kg에 해당! 회전체의 에너지는 $\omega^2$에 비례하므로 고속 회전은 매우 위험하다.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.7 토크

Torque

---

# 토크 (Torque)

<div class="grid grid-cols-2 gap-8">
<div>

물체를 회전시키는 "비트는 힘" — **토크** $\tau$

점 $O$를 지나는 회전축에서 거리 $r$인 점 $P$에 힘 $\vec{F}$가 $\phi$ 각도로 작용:

$$
\boxed{\tau = rF\sin\phi = rF_t = r_\perp F} \tag{10.6.1–3}
$$

<v-clicks>

- $F_t = F\sin\phi$: **접선 성분** (회전에 기여하는 힘)
- $r_\perp = r\sin\phi$: **모멘트 팔(moment arm)** — 축에서 힘의 작용선까지의 수직 거리
- 단위: N$\cdot$m (J과 같은 차원이지만 다른 물리량!)

</v-clicks>

<v-click>

<div class="mt-3 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**부호 규칙**: CCW(반시계) → 양(+), CW(시계) → 음(−). "Clocks are negative" 규칙 계속 적용!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1006f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.6.1 — 토크 계산: (a) 각도 phi (b) 접선 성분 Ft (c) 모멘트 팔 r_perp. 세 방법 모두 같은 결과.</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.8 회전에 대한 뉴턴 제2법칙

Newton's Second Law for Rotation

---

# 뉴턴 제2법칙 — 회전 버전

<div class="grid grid-cols-2 gap-8">
<div>

병진: $F_{\text{net}} = ma$

**회전**: 알짜 토크 = 회전 관성 $\times$ 각가속도

$$
\boxed{\tau_{\text{net}} = I\alpha} \tag{10.7.1}
$$

<v-clicks>

- $\tau_{\text{net}}$: 회전축에 대한 **알짜 토크**
- $I$: 그 축에 대한 **회전 관성**
- $\alpha$: **각가속도** (rad/s$^2$)

</v-clicks>

<v-click>

### 증명 (단일 입자)

질량 $m$, 막대 길이 $r$: $F_t = ma_t$

$$\tau = F_t r = m a_t r = m(\alpha r)r = (mr^2)\alpha = I\alpha$$

강체 = 입자의 집합 → 모든 입자에 대해 합산하면 동일한 결과!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1007f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.7.1 — 축 O에서 질량 m이 막대 끝에 연결. 접선 성분 Ft만 회전에 기여.</div>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 10.7.1**: 막대 중점에서 피벗. $\vec{F}_1$이 아래로 작용. 막대가 회전하지 않으려면 $\vec{F}_2$는?

→ (a) 아래 방향 (b) $F_2 > F_1$ (모멘트 팔이 더 짧으므로)

</div>

</v-click>

</div>
</div>

---

# 예제: 유도 업어치기 (Sample Problem 10.7.2)

<div class="text-sm">

80 kg 상대를 업어치기. 피벗(엉덩이)에 대한 $I = 15$ kg$\cdot$m$^2$.
목표 각가속도 $\alpha = -6.0$ rad/s$^2$ (시계 방향). 모멘트 팔 $d_1 = 0.30$ m.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a)** 상대의 질량중심을 엉덩이 위로 끌어당긴 후 ($\vec{F}_g$의 모멘트 팔 = 0):

$$\tau_{\text{net}} = -d_1 F = I\alpha$$

$$F = \frac{-I\alpha}{d_1} = \frac{-(15)(-6.0)}{0.30} = 300 \text{ N}$$

</v-clicks>

<v-click>

**(b)** 상대가 직립 상태일 때 ($\vec{F}_g$의 모멘트 팔 $d_2 = 0.12$ m):

$$-d_1 F + d_2 mg = I\alpha$$

$$F = 300 + \frac{(0.12)(80)(9.8)}{0.30} \approx 610 \text{ N}$$

</v-click>

<v-click>

<div class="mt-3 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

상대를 먼저 엉덩이 위로 끌어당기면 필요한 힘이 **절반** 이하! 유도의 물리학.

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c1007f003_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 10.7.3 — (a) 올바른 업어치기: 상대를 엉덩이 위로 (b) 잘못된 자세: 중력 토크가 반대로 작용</div>

</v-click>

</div>
</div>

---
layout: section
---

# 10.8 일과 회전 운동에너지

Work and Rotational Kinetic Energy

---

# 회전에서의 일과 에너지

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 일-운동에너지 정리 (회전)

$$
\boxed{\Delta K = \tfrac{1}{2}I\omega_f^2 - \tfrac{1}{2}I\omega_i^2 = W} \tag{10.8.4}
$$

<v-click>

### 일 (회전)

$$
\boxed{W = \int_{\theta_i}^{\theta_f} \tau \, d\theta} \tag{10.8.5}
$$

$\tau$가 일정하면:

$$
W = \tau(\theta_f - \theta_i) \tag{10.8.6}
$$

</v-click>

<v-click>

### 일률 (Power)

$$
\boxed{P = \frac{dW}{dt} = \tau\omega} \tag{10.8.7}
$$

</v-click>

</div>
<div>

<v-click>

### 병진·회전 대응 (Table 10.8.1)

| 병진 | 회전 |
|:---:|:---:|
| $W = \int F\,dx$ | $W = \int \tau\,d\theta$ |
| $K = \frac{1}{2}mv^2$ | $K = \frac{1}{2}I\omega^2$ |
| $P = Fv$ | $P = \tau\omega$ |
| $W = \Delta K$ | $W = \Delta K$ |

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 병진 운동에서 배운 일-에너지 관계가 회전에서도 동일한 구조로 성립한다. 힘→토크, 변위→각변위, 속도→각속도로 치환!

</div>

</v-click>

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-2 text-sm">
<div>

### 문제 1: 등각가속도

플라이휠이 정지 상태에서 $\alpha = 0.50$ rad/s$^2$로 가속. 20 rev 회전 후 각속도와 소요 시간은?

<v-click>

**풀이:**

$$\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0) = 0 + 2(0.50)(40\pi)$$

$$\omega = \sqrt{40\pi} = 11.2 \text{ rad/s}$$

$$t = \frac{\omega}{\alpha} = \frac{11.2}{0.50} = 22.4 \text{ s}$$

</v-click>

### 문제 2: 회전 관성

<v-click>

질량 2.0 kg, 반지름 0.10 m의 원판이 300 rpm으로 회전. 회전 운동에너지는?

$$I = \tfrac{1}{2}MR^2 = \tfrac{1}{2}(2.0)(0.10)^2 = 0.010 \text{ kg·m}^2$$

$$\omega = 300 \times \frac{2\pi}{60} = 31.4 \text{ rad/s}$$

$$K = \tfrac{1}{2}(0.010)(31.4)^2 = 4.9 \text{ J}$$

</v-click>

</div>
<div>

### 문제 3: 토크와 뉴턴 제2법칙

<v-click>

질량 5.0 kg, 반지름 0.20 m의 원판에 접선 방향으로 10 N의 힘을 가한다. 각가속도는?

$$I = \tfrac{1}{2}MR^2 = \tfrac{1}{2}(5.0)(0.20)^2 = 0.10 \text{ kg·m}^2$$

$$\tau = FR = (10)(0.20) = 2.0 \text{ N·m}$$

$$\alpha = \frac{\tau}{I} = \frac{2.0}{0.10} = 20 \text{ rad/s}^2$$

</v-click>

### 문제 4: 일률

<v-click>

자동차 엔진이 200 N$\cdot$m의 토크를 3000 rpm으로 출력. 일률(마력)은?

$$P = \tau\omega = (200)\left(3000 \times \frac{2\pi}{60}\right) = 62\,800 \text{ W}$$

$$\approx 84 \text{ hp}$$

</v-click>

</div>
</div>

---

# 복습 & 요약

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 회전 변수
- 각위치: $\theta = s/r$ (rad)
- 각속도: $\omega = d\theta/dt$
- 각가속도: $\alpha = d\omega/dt$
- 방향: 오른손 법칙

### 등각가속도
- $\omega = \omega_0 + \alpha t$
- $\theta - \theta_0 = \omega_0 t + \frac{1}{2}\alpha t^2$
- $\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)$

### 선형-각변수 관계
- $s = \theta r$, $v = \omega r$
- $a_t = \alpha r$, $a_r = \omega^2 r$

</div>
<div>

### 회전 운동에너지 & 관성
- $K = \frac{1}{2}I\omega^2$
- $I = \sum m_i r_i^2 = \int r^2\,dm$
- 평행축 정리: $I = I_{\text{com}} + Mh^2$

### 토크 & 뉴턴 제2법칙
- $\tau = rF\sin\phi = rF_t = r_\perp F$
- $\tau_{\text{net}} = I\alpha$

### 일과 에너지
- $W = \int \tau\,d\theta$, 일정 토크: $W = \tau\Delta\theta$
- $P = \tau\omega$
- $\Delta K = W$ (일-운동에너지 정리)

</div>
</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 10: 회전 (Rotation) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 11 — 굴림 운동, 토크, 각운동량 (Rolling, Torque, and Angular Momentum)

</div>
