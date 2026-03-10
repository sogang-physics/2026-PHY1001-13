---
theme: default
title: "Chapter 4: 2차원·3차원 운동 (Motion in Two and Three Dimensions)"
info: |
  일반물리 I — Chapter 4: 2차원·3차원 운동
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 4: 2차원·3차원 운동

Motion in Two and Three Dimensions

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

- 1차원 운동(직선 운동)을 넘어 **2차원·3차원 운동**을 분석한다
- 전투기 조종사의 급선회, 농구 자유투, 위성 궤도 등이 모두 해당

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

핵심 아이디어: 각 축 방향의 운동은 **독립적**이다. 2차원 문제를 축별로 분리하면 1차원 문제 두 개로 풀 수 있다!

</div>

</v-click>

<v-clicks>

- **위치·변위** → **속도** → **가속도** 순서로 벡터로 확장
- 주요 응용: **포물체 운동**, **등속 원운동**, **상대 운동**

</v-clicks>

---
layout: section
---

# 4.1 위치와 변위

Position and Displacement

---

# 위치벡터 (Position Vector)

<div class="grid grid-cols-2 gap-8">
<div>

입자의 위치를 **위치벡터** $\vec{r}$로 나타낸다:

$$
\boxed{\vec{r} = x\hat{\imath} + y\hat{\jmath} + z\hat{k}} \tag{4.1.1}
$$

<v-clicks>

- $x$, $y$, $z$: 직교 좌표(rectangular coordinates)
- 위치벡터는 **원점에서 입자까지** 향하는 화살표
- 크기: $r = \sqrt{x^2 + y^2 + z^2}$

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**예:** $\vec{r} = (-3\text{ m})\hat{\imath} + (2\text{ m})\hat{\jmath} + (5\text{ m})\hat{k}$
→ $x$축 방향으로 −3 m, $y$축 방향으로 2 m, $z$축 방향으로 5 m

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0401f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.1.1 — 위치벡터 r은 벡터 성분의 합</div>

</v-click>

</div>
</div>

---

# 변위 (Displacement)

<div class="grid grid-cols-2 gap-8">
<div>

입자가 $\vec{r}_1$에서 $\vec{r}_2$로 이동하면, **변위**는:

$$
\boxed{\Delta\vec{r} = \vec{r}_2 - \vec{r}_1} \tag{4.1.2}
$$

<v-click>

단위벡터 표기로 전개하면:

$$
\Delta\vec{r} = (x_2 - x_1)\hat{\imath} + (y_2 - y_1)\hat{\jmath} + (z_2 - z_1)\hat{k}
$$

$$
= \Delta x\,\hat{\imath} + \Delta y\,\hat{\jmath} + \Delta z\,\hat{k} \tag{4.1.3}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 4.1.1**: 박쥐가 (−2, 4, −3) m에서 (6, −2, −3) m으로 이동.
변위벡터는 어떤 평면에 평행한가?

→ $\Delta z = 0$이므로 **$xy$ 평면**에 평행

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0401f002_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.1.2 — (a) t = 15 s에서의 위치벡터 (b) 토끼의 경로와 시간별 위치</div>

</v-click>

</div>
</div>

---

# 예제: 토끼의 2차원 위치벡터 (Sample Problem 4.1.1)

<div class="text-sm">

토끼의 위치가 $x = -0.31t^2 + 7.2t + 28$, $y = 0.22t^2 - 9.1t + 30$ (m, s)으로 주어진다.
$t = 15$ s일 때 위치벡터의 크기와 각도는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**성분 계산:**

$$x = (-0.31)(15)^2 + (7.2)(15) + 28 = 66 \text{ m}$$

$$y = (0.22)(15)^2 - (9.1)(15) + 30 = -57 \text{ m}$$

$$\vec{r} = (66\text{ m})\hat{\imath} - (57\text{ m})\hat{\jmath}$$

</v-clicks>

<v-click>

**크기와 각도:**

$$r = \sqrt{66^2 + (-57)^2} = 87 \text{ m}$$

$$\theta = \tan^{-1}\!\left(\frac{-57}{66}\right) = -41°$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**Check**: $\theta = 139°$도 같은 탄젠트 값을 갖지만, 성분의 부호($x > 0$, $y < 0$)로부터 4사분면인 $-41°$가 올바른 답.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 4.2 평균 속도와 순간 속도

Average Velocity and Instantaneous Velocity

---

# 평균 속도 (Average Velocity)

<div class="grid grid-cols-2 gap-8">
<div>

시간 $\Delta t$ 동안 변위 $\Delta\vec{r}$를 겪으면, **평균 속도**:

$$
\boxed{\vec{v}_{\text{avg}} = \frac{\Delta\vec{r}}{\Delta t}} \tag{4.2.1}
$$

<v-clicks>

- $\vec{v}_{\text{avg}}$의 **방향** = $\Delta\vec{r}$의 방향
- 성분별로:

$$
\vec{v}_{\text{avg}} = \frac{\Delta x}{\Delta t}\hat{\imath} + \frac{\Delta y}{\Delta t}\hat{\jmath} + \frac{\Delta z}{\Delta t}\hat{k} \tag{4.2.2}
$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0402f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.2.1 — 위치 1에서 2로 이동하는 동안의 변위 벡터와 접선 방향</div>

</v-click>

</div>
</div>

---

# 순간 속도 (Instantaneous Velocity)

$\Delta t \to 0$의 극한에서 평균 속도는 **순간 속도**가 된다:

$$
\boxed{\vec{v} = \frac{d\vec{r}}{dt}} \tag{4.2.3}
$$

<v-clicks>

성분별로:

$$
\vec{v} = v_x\hat{\imath} + v_y\hat{\jmath} + v_z\hat{k} \tag{4.2.4}
$$

$$
v_x = \frac{dx}{dt}, \quad v_y = \frac{dy}{dt}, \quad v_z = \frac{dz}{dt} \tag{4.2.5}
$$

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-500 bg-opacity-10 rounded-lg">

**핵심**: 순간 속도 $\vec{v}$의 방향은 항상 입자의 경로에 대한 **접선 방향**이다.

</div>

</v-click>

<v-click>

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**주의**: 위치벡터는 원점에서 입자까지 그리지만, 속도벡터는 입자 위치에서 **이동 방향**을 나타낸다.

</div>

</v-click>

---

# 예제: 토끼의 속도 (Sample Problem 4.2.1)

<div class="text-sm">

앞 예제의 토끼에 대해 $t = 15$ s에서의 속도 $\vec{v}$를 구하라.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**$x$ 성분 미분:**

$$v_x = \frac{dx}{dt} = \frac{d}{dt}(-0.31t^2 + 7.2t + 28) = -0.62t + 7.2$$

$t = 15$ s → $v_x = -2.1$ m/s

**$y$ 성분 미분:**

$$v_y = \frac{dy}{dt} = \frac{d}{dt}(0.22t^2 - 9.1t + 30) = 0.44t - 9.1$$

$t = 15$ s → $v_y = -2.5$ m/s

</v-clicks>

<v-click>

$$\vec{v} = (-2.1\text{ m/s})\hat{\imath} + (-2.5\text{ m/s})\hat{\jmath}$$

</v-click>

</div>
<div>

<v-click>

**크기와 각도:**

$$v = \sqrt{(-2.1)^2 + (-2.5)^2} = 3.3 \text{ m/s}$$

$$\theta = \tan^{-1}\!\left(\frac{-2.5}{-2.1}\right) = -130°$$

<div class="mt-2 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

경로의 접선 방향과 일치 — 3사분면($v_x < 0$, $v_y < 0$)이므로 $-130°$ (= 230°)

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 4.3 평균 가속도와 순간 가속도

Average Acceleration and Instantaneous Acceleration

---

# 가속도 (Acceleration)

<div class="grid grid-cols-2 gap-8">
<div>

### 평균 가속도

$$
\boxed{\vec{a}_{\text{avg}} = \frac{\vec{v}_2 - \vec{v}_1}{\Delta t} = \frac{\Delta\vec{v}}{\Delta t}} \tag{4.3.1}
$$

<v-click>

### 순간 가속도

$$
\boxed{\vec{a} = \frac{d\vec{v}}{dt}} \tag{4.3.2}
$$

</v-click>

<v-click>

성분별로:

$$
\vec{a} = a_x\hat{\imath} + a_y\hat{\jmath} + a_z\hat{k} \tag{4.3.3}
$$

$$
a_x = \frac{dv_x}{dt}, \quad a_y = \frac{dv_y}{dt}, \quad a_z = \frac{dv_z}{dt} \tag{4.3.4}
$$

</v-click>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

속도의 **크기** 또는 **방향** 중 하나라도 변하면 가속도가 존재한다!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0403f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.3.1 — 가속도 벡터 a와 그 성분. 가속도 벡터는 경로 위 입자 위치에서 그린다.</div>

</v-click>

</div>
</div>

---

# 예제: 토끼의 가속도 (Sample Problem 4.3.1)

<div class="text-sm">

앞 예제의 토끼에 대해 $t = 15$ s에서의 가속도 $\vec{a}$를 구하라.

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**$v_x$를 미분:**

$$a_x = \frac{dv_x}{dt} = \frac{d}{dt}(-0.62t + 7.2) = -0.62 \text{ m/s}^2$$

**$v_y$를 미분:**

$$a_y = \frac{dv_y}{dt} = \frac{d}{dt}(0.44t - 9.1) = 0.44 \text{ m/s}^2$$

</v-clicks>

<v-click>

$$\vec{a} = (-0.62\text{ m/s}^2)\hat{\imath} + (0.44\text{ m/s}^2)\hat{\jmath}$$

</v-click>

<v-click>

$t$가 포함되지 않으므로 → **가속도가 일정**(상수)!

</v-click>

</div>
<div>

<v-click>

**크기와 각도:**

$$a = \sqrt{(-0.62)^2 + (0.44)^2} = 0.76 \text{ m/s}^2$$

$$\theta = \tan^{-1}\!\left(\frac{0.44}{-0.62}\right) = -35° + 180° = 145°$$

<div class="mt-2 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

성분이 $a_x < 0$, $a_y > 0$이므로 2사분면 → $145°$가 올바른 답. 가속도가 일정하므로 경로의 **모든 점**에서 같은 벡터이다.

</div>

</v-click>

</div>
</div>

---

# 예제: 2차원 등가속도 운동 (Sample Problem 4.3.2)

<div class="text-sm">

$\vec{v}_0 = -2.0\hat{\imath} + 4.0\hat{\jmath}$ (m/s), 일정한 가속도 $a = 3.0$ m/s$^2$, $\theta = 130°$ ($+x$축 기준).
$t = 5.0$ s에서 $\vec{v}$는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**가속도 성분:**

$$a_x = a\cos 130° = -1.93 \text{ m/s}^2$$

$$a_y = a\sin 130° = +2.30 \text{ m/s}^2$$

**등가속도 공식** ($\vec{v} = \vec{v}_0 + \vec{a}t$)을 축별로 적용:

$$v_x = -2.0 + (-1.93)(5.0) = -11.7 \text{ m/s}$$

$$v_y = 4.0 + (2.30)(5.0) = 15.5 \text{ m/s}$$

</v-clicks>

<v-click>

$$\boxed{\vec{v} = (-12\text{ m/s})\hat{\imath} + (16\text{ m/s})\hat{\jmath}}$$

</v-click>

</div>
<div>

<v-click>

**크기와 각도:**

$$v = \sqrt{(-11.7)^2 + (15.5)^2} \approx 19 \text{ m/s}$$

$$\theta = \tan^{-1}\!\left(\frac{15.5}{-11.7}\right) = 127° \approx 130°$$

<div class="mt-2 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 2차원 등가속도 문제는 **$x$ 방향과 $y$ 방향을 독립적으로** 풀면 된다. 1차원 등가속도 공식을 각 축에 적용!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 4.4 포물체 운동

Projectile Motion

---

# 포물체 운동이란? (What Is Projectile Motion?)

<div class="grid grid-cols-2 gap-8">
<div>

**포물체(projectile)**: 초기 속도 $\vec{v}_0$로 발사된 후 **자유낙하 가속도** $\vec{g}$만 받는 입자

<v-clicks>

- 공기 저항 무시
- 가속도: $a_x = 0$, $a_y = -g$

### 핵심 원리

- **수평 운동**: 등속 (가속도 = 0)
- **수직 운동**: 등가속도 ($a = -g$)
- 두 운동은 **서로 독립적**!

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

초기 속도의 성분 분해:

$$v_{0x} = v_0\cos\theta_0, \quad v_{0y} = v_0\sin\theta_0 \tag{4.4.2}$$

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0404f002_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.4.2 — 포물체 운동: 수직 운동(등가속도) + 수평 운동(등속)의 합성</div>

</v-click>

</div>
</div>

---

# 포물체 운동 방정식

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 수평 운동 (등속)

$$
\boxed{x - x_0 = (v_0\cos\theta_0)\,t} \tag{4.4.3}
$$

### 수직 운동 (등가속도)

$$
\boxed{y - y_0 = (v_0\sin\theta_0)\,t - \tfrac{1}{2}g\,t^2} \tag{4.4.4}
$$

$$
\boxed{v_y = v_0\sin\theta_0 - g\,t} \tag{4.4.5}
$$

$$
\boxed{v_y^2 = (v_0\sin\theta_0)^2 - 2g(y - y_0)} \tag{4.4.6}
$$

</div>
<div>

<v-click>

### 경로 방정식 (포물선)

$t$를 소거하면:

$$
\boxed{y = (\tan\theta_0)\,x - \frac{g\,x^2}{2(v_0\cos\theta_0)^2}} \tag{4.4.7}
$$

$y = ax + bx^2$ 형태 → **포물선(parabola)**!

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**최고점**: $v_y = 0$이 되는 순간
→ 속도가 순수하게 수평 방향

</div>

</v-click>

</div>
</div>

---

# 수평 도달 거리 (Horizontal Range)

<div class="grid grid-cols-2 gap-8">
<div>

발사 높이와 착지 높이가 **같을 때**, 수평 도달 거리:

$$
\boxed{R = \frac{v_0^2}{g}\sin 2\theta_0} \tag{4.4.8}
$$

<v-clicks>

- $\sin 2\theta_0 = 1$일 때 최대 → $\theta_0 = 45°$
- **$R$이 최대가 되는 발사각은 45°**
- 발사·착지 높이가 다르면 45°가 최적이 아님

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 4.4.2**: 외야로 날아가는 파리 공(공기 저항 무시).
상승 중 수평 가속도? → **0**. 수직 가속도? → **−g** (항상 아래 방향).
최고점에서 수직 속도? → **0**

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0404f006_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.4.6 — 공기 저항의 효과: Path I(공기 중), Path II(진공). 공기 저항은 도달 거리와 최고 높이를 줄인다.</div>

</v-click>

</div>
</div>

---

# 예제: 대포와 해적선 (Sample Problem 4.4.2)

<div class="text-sm">

해적선이 560 m 거리에 있다. 대포가 $v_0 = 82.0$ m/s로 포탄을 발사한다.
(a) 명중시키려면 발사각 $\theta_0$은? (b) 최대 도달 거리는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a)** Eq. 4.4.8에서 $\theta_0$ 구하기:

$$R = \frac{v_0^2}{g}\sin 2\theta_0$$

$$\sin 2\theta_0 = \frac{gR}{v_0^2} = \frac{(9.8)(560)}{(82.0)^2} = 0.816$$

$$2\theta_0 = \sin^{-1}(0.816) = 54.7° \text{ or } 125.3°$$

$$\boxed{\theta_0 = 27° \text{ or } 63°}$$

</v-clicks>

<v-click>

**(b)** $\theta_0 = 45°$일 때 최대:

$$R_{\max} = \frac{(82.0)^2}{9.8}\sin 90° = 686 \text{ m}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0404f008_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.4.8 — 해적선: 두 발사각(27°, 63°)으로 같은 수평 거리 도달</div>

</v-click>

</div>
</div>

---

# 예제: 골프공과 절벽 (Sample Problem 4.4.3)

<div class="text-sm">

골프공이 지면에서 발사되어 $t = 6.00$ s에 절벽 위에 착지. 발사각 $\theta_0 = 80°$.
$v_0$, 착지 높이 $(y - y_0)$, 착지 순간의 진행 방향은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**최고점**에서 $v_y = 0$, 그래프에서 $t = 4.0$ s:

$$v_y = v_0\sin\theta_0 - gt = 0$$

$$v_0 = \frac{gt}{\sin 80°} = \frac{(9.80)(4.0)}{0.985} \approx 40 \text{ m/s}$$

**착지 높이** ($t = 6.00$ s):

$$y - y_0 = (v_0\sin 80°)(6.00) - \tfrac{1}{2}(9.80)(6.00)^2 \approx 59 \text{ m}$$

</v-clicks>

<v-click>

**착지 순간 방향:**

$$v_x = v_0\cos 80° = 6.9 \text{ m/s}$$

$$v_y = v_0\sin 80° - g(6.00) = -19.6 \text{ m/s}$$

$$\theta = \tan^{-1}\!\left(\frac{-19.6}{6.9}\right) \approx -71°$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0404f003_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.4.3 — 수직으로 떨어뜨린 공과 수평으로 발사한 공의 수직 운동은 동일</div>

</v-click>

</div>
</div>

---
layout: section
---

# 4.5 등속 원운동

Uniform Circular Motion

---

# 등속 원운동 (Uniform Circular Motion)

<div class="grid grid-cols-2 gap-8">
<div>

입자가 반지름 $r$인 원을 **일정한 속력** $v$로 도는 운동

<v-clicks>

- 속력은 일정하지만 **방향이 변하므로** → 가속도 존재!
- **속도**: 항상 경로의 **접선** 방향
- **가속도**: 항상 원의 **중심** 방향 → **구심 가속도(centripetal acceleration)**

</v-clicks>

<v-click>

### 구심 가속도

$$
\boxed{a = \frac{v^2}{r}} \tag{4.5.1}
$$

</v-click>

<v-click>

### 주기 (Period)

$$
\boxed{T = \frac{2\pi r}{v}} \tag{4.5.2}
$$

한 바퀴 도는 데 걸리는 시간

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0405f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.5.1 — 등속 원운동: 속도 벡터는 접선 방향, 가속도 벡터는 중심 방향</div>

</v-click>

</div>
</div>

---

# 구심 가속도 증명 (Proof of Eq. 4.5.1)

<div class="grid grid-cols-2 gap-8">
<div>

반지름 $r$, 속력 $v$로 반시계 방향 원운동하는 입자 $p$:

<v-clicks>

**속도 성분:**

$$\vec{v} = (-v\sin\theta)\hat{\imath} + (v\cos\theta)\hat{\jmath} \tag{4.5.3}$$

**가속도** (시간 미분):

$$\vec{a} = \left(-\frac{v^2}{r}\cos\theta\right)\hat{\imath} + \left(-\frac{v^2}{r}\sin\theta\right)\hat{\jmath} \tag{4.5.6}$$

**크기:**

$$a = \frac{v^2}{r}\sqrt{\cos^2\theta + \sin^2\theta} = \frac{v^2}{r}$$

</v-clicks>

<v-click>

**방향**: $\tan\phi = \frac{a_y}{a_x} = \tan\theta$ → $\phi = \theta$

→ $\vec{a}$는 반지름 $r$을 따라 **중심을 향한다**!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0405f002_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.5.2 — (a) 입자의 위치와 속도 (b) 속도 성분 (c) 가속도 성분 — 중심 방향</div>

</v-click>

</div>
</div>

---

# 예제: 탑건 조종사 (Sample Problem 4.5.1)

<div class="text-sm">

전투기가 수평 원형 선회에 진입. 초기 속도 $\vec{v}_i = (400\hat{\imath} + 500\hat{\jmath})$ m/s,
24.0 s 후 속도 $\vec{v}_f = (-400\hat{\imath} - 500\hat{\jmath})$ m/s. 가속도의 크기는 몇 $g$?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**속력:**

$$v = \sqrt{400^2 + 500^2} = 640.3 \text{ m/s}$$

최종 속도가 초기 속도의 반대 → **반 바퀴** 회전

$$T = 2 \times 24.0 = 48.0 \text{ s}$$

**구심 가속도:** $a = \frac{2\pi v}{T}$

$$a = \frac{2\pi(640.3)}{48.0} = 83.8 \text{ m/s}^2$$

</v-clicks>

<v-click>

$$\boxed{a \approx 8.6g}$$

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

약 4g에서 터널 시야, 6g 이상에서 의식 상실(g-LOC) 위험 → 8.6g는 매우 위험한 기동!

</div>

</v-click>

</div>
</div>

---

# 예제: 위성 궤도 (Sample Problem 4.5.2)

<div class="text-sm">

지구 표면 위 $h = 200$ km 궤도의 위성. 해당 고도에서 $g = 9.20$ m/s$^2$. 궤도 속력은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

구심 가속도 = 중력 가속도:

$$g = \frac{v^2}{R_E + h}$$

$$v = \sqrt{g(R_E + h)} = \sqrt{(9.20)(6.57 \times 10^6)}$$

$$= 7770 \text{ m/s} = 7.77 \text{ km/s}$$

</v-clicks>

</div>
<div>

<v-click>

주기:

$$T = \frac{2\pi(R_E + h)}{v} \approx 1.47 \text{ h}$$

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

이는 약 17,000 mi/h에 해당. 위성은 약 1시간 반에 지구를 한 바퀴 돈다.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 4.6 상대 운동

Relative Motion in One Dimension

---

# 1차원 상대 운동 (Relative Motion in 1D)

<div class="grid grid-cols-2 gap-8">
<div>

기준틀 $A$와 $B$가 일정한 속도로 상대 운동할 때, 입자 $P$의 위치와 속도:

### 위치

$$
\boxed{x_{PA} = x_{PB} + x_{BA}} \tag{4.6.1}
$$

<v-click>

### 속도

$$
\boxed{v_{PA} = v_{PB} + v_{BA}} \tag{4.6.2}
$$

"$A$가 측정한 $P$의 속도 = $B$가 측정한 $P$의 속도 + $A$에 대한 $B$의 속도"

</v-click>

<v-click>

### 가속도

$v_{BA}$가 일정이면:

$$
\boxed{a_{PA} = a_{PB}} \tag{4.6.3}
$$

**등속 기준틀의 관측자들은 같은 가속도를 측정한다!**

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0406f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.6.1 — Alex(기준틀 A)와 Barbara(기준틀 B)가 자동차 P를 관측</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 4.6.1**: $v_{BA} = +50$ km/h, $v_{PA} = +50$ km/h이면
$v_{PB} = v_{PA} - v_{BA} = 0$ → Barbara가 보기에 P는 정지!

</div>

</v-click>

</div>
</div>

---

# 2차원 상대 운동 (Relative Motion in 2D)

2차원으로 확장하면 벡터 방정식:

$$
\boxed{\vec{r}_{PA} = \vec{r}_{PB} + \vec{r}_{BA}}
$$

$$
\boxed{\vec{v}_{PA} = \vec{v}_{PB} + \vec{v}_{BA}}
$$

$$
\boxed{\vec{a}_{PA} = \vec{a}_{PB}} \quad (\vec{v}_{BA} = \text{const.})
$$

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 예: 강을 건너는 배

- 배의 정수(still water) 속력: $\vec{v}_{PB}$
- 강물의 속도: $\vec{v}_{BA}$
- 지면에서 본 배의 속도: $\vec{v}_{PA} = \vec{v}_{PB} + \vec{v}_{BA}$

첨자 읽는 법: "$PA$" = "$A$가 측정한 $P$의 ..."

인접한 첨자가 같으면 소거: $v_{P\cancel{B}} + v_{\cancel{B}A} = v_{PA}$

</div>
<div>

<img src="/img/c0407f001_high_resolution.jpg" class="max-h-60 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 4.7.1 — 강을 건너는 배의 상대 속도 벡터 합성</div>

</div>
</div>

</v-click>

---

# Review & Summary

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 위치와 변위
- $\vec{r} = x\hat{\imath} + y\hat{\jmath} + z\hat{k}$
- $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$

### 속도
- 평균: $\vec{v}_{\text{avg}} = \Delta\vec{r}/\Delta t$
- 순간: $\vec{v} = d\vec{r}/dt$ (경로 접선 방향)

### 가속도
- 평균: $\vec{a}_{\text{avg}} = \Delta\vec{v}/\Delta t$
- 순간: $\vec{a} = d\vec{v}/dt$

### 포물체 운동
- 수평: $x - x_0 = (v_0\cos\theta_0)t$
- 수직: $y - y_0 = (v_0\sin\theta_0)t - \frac{1}{2}gt^2$
- 경로: 포물선, $R = \frac{v_0^2}{g}\sin 2\theta_0$

</div>
<div>

### 등속 원운동
- 구심 가속도: $a = v^2/r$ (중심 방향)
- 주기: $T = 2\pi r/v$

### 상대 운동
- $\vec{v}_{PA} = \vec{v}_{PB} + \vec{v}_{BA}$
- 등속 기준틀: $\vec{a}_{PA} = \vec{a}_{PB}$

### 핵심 포인트
- 2차원 운동 = 축별 독립 1차원 운동
- 포물체: 수평(등속) + 수직(자유낙하)
- 원운동: 속력 일정, 방향 변화 → 가속도 존재
- 상대 운동: 첨자 규칙으로 속도 합성

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 문제 1: 포물체 운동

공이 $v_0 = 25$ m/s, $\theta_0 = 53°$로 지면에서 발사된다.
(a) 최고점 높이는?
(b) 수평 도달 거리는?

<v-click>

**풀이:**

(a) 최고점에서 $v_y = 0$:

$$y_{\max} = \frac{(v_0\sin\theta_0)^2}{2g} = \frac{(25\sin 53°)^2}{2(9.8)} = 20.4 \text{ m}$$

(b) $R = \frac{v_0^2}{g}\sin 2\theta_0 = \frac{625}{9.8}\sin 106° = 61.3 \text{ m}$

</v-click>

</div>
<div>

### 문제 2: 등속 원운동

자동차가 반지름 50 m의 원형 트랙을 $v = 20$ m/s로 돈다. 구심 가속도는?

<v-click>

**풀이:**

$$a = \frac{v^2}{r} = \frac{(20)^2}{50} = 8.0 \text{ m/s}^2$$

$$\approx 0.82g$$

</v-click>

### 문제 3: 상대 운동

<v-click>

비가 수직으로 5 m/s로 내린다. 버스가 12 m/s로 달릴 때, 버스 승객이 보는 비의 속력과 각도는?

$$v = \sqrt{5^2 + 12^2} = 13 \text{ m/s}$$

$$\theta = \tan^{-1}(12/5) = 67° \text{ (수직에서)}$$

</v-click>

</div>
</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 4: 2차원·3차원 운동 (Motion in Two and Three Dimensions) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 5 — 힘과 운동 I (Force and Motion I)

</div>
