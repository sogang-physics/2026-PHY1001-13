---
theme: default
background: https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920
title: "Chapter 4: 2차원 및 3차원 운동 (Motion in Two and Three Dimensions)"
info: |
  일반물리 I — Chapter 4: 2차원 및 3차원 운동
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 4: 2차원 및 3차원 운동

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

# 이 장의 핵심 질문

<v-clicks>

- 2차원·3차원에서 **위치, 속도, 가속도**를 어떻게 표현하는가?
- **포물체 운동(projectile motion)** 은 어떻게 분석하는가?
- **등속 원운동(uniform circular motion)** 의 가속도는?
- **상대 운동(relative motion)** 이란 무엇인가?

</v-clicks>

<div v-click class="mt-8 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

> **핵심 아이디어**: 2차원·3차원 운동은 각 축 방향의 **독립적인 1차원 운동**으로 분해하여 분석할 수 있다.

</div>

---
layout: section
---

# 4.1 위치와 변위

Position and Displacement

---

# 위치 벡터 (Position Vector)

<div class="grid grid-cols-2 gap-8">
<div>

입자의 위치는 **위치 벡터** $\vec{r}$로 표현한다:

$$
\vec{r} = x\,\hat{i} + y\,\hat{j} + z\,\hat{k}
$$

<v-clicks>

- $x, y, z$: 각 축 방향의 좌표 (성분)
- $\hat{i}, \hat{j}, \hat{k}$: 각 축 방향의 단위벡터

</v-clicks>

</div>
<div>

<v-click>

### 변위 (Displacement)

시간 $t_1$에서 $t_2$로 이동할 때의 변위:

$$
\Delta\vec{r} = \vec{r}_2 - \vec{r}_1
$$

$$
= \Delta x\,\hat{i} + \Delta y\,\hat{j} + \Delta z\,\hat{k}
$$

여기서 $\Delta x = x_2 - x_1$, 등등.

</v-click>

</div>
</div>

<v-click>

<div class="mt-6 p-4 bg-yellow-500 bg-opacity-10 rounded-lg">

**주의**: 변위 $\Delta\vec{r}$는 **벡터**이다 — 크기뿐 아니라 **방향**도 포함한다. 이동 경로(path)와는 다르다!

</div>

</v-click>

---
layout: section
---

# 4.2 평균 속도와 순간 속도

Average Velocity and Instantaneous Velocity

---

# 평균 속도 (Average Velocity)

<div class="grid grid-cols-2 gap-8">
<div>

시간 간격 $\Delta t$ 동안의 **평균 속도**:

$$
\vec{v}_{\text{avg}} = \frac{\Delta\vec{r}}{\Delta t}
$$

<v-clicks>

- 방향: 변위 $\Delta\vec{r}$와 같은 방향
- 크기: $|\Delta\vec{r}|/\Delta t$
- **평균 속력(average speed)** 과 다름!

</v-clicks>

</div>
<div>

<v-click>

### 평균 속력 vs 평균 속도

$$
\text{평균 속력} = \frac{\text{총 이동 거리}}{\Delta t}
$$

$$
|\vec{v}_{\text{avg}}| = \frac{|\Delta\vec{r}|}{\Delta t}
$$

일반적으로 평균 속력 $\geq |\vec{v}_{\text{avg}}|$

왕복 운동의 경우, $\vec{v}_{\text{avg}} = 0$이지만 평균 속력 $\neq 0$

</v-click>

</div>
</div>

---

# 순간 속도 (Instantaneous Velocity)

$\Delta t \to 0$ 극한에서의 평균 속도:

$$
\vec{v} = \frac{d\vec{r}}{dt}
$$

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 성분 표현

$$
\vec{v} = v_x\,\hat{i} + v_y\,\hat{j} + v_z\,\hat{k}
$$

여기서

$$
v_x = \frac{dx}{dt}, \quad v_y = \frac{dy}{dt}, \quad v_z = \frac{dz}{dt}
$$

</div>
<div>

<v-click>

### 속력 (Speed)

속도의 **크기**:

$$
v = |\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}
$$

속도의 **방향** (2차원):

$$
\theta = \tan^{-1}\frac{v_y}{v_x}
$$

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**중요**: 순간 속도의 방향은 항상 운동 경로의 **접선 방향**이다.

</div>

</v-click>

---
layout: section
---

# 4.3 평균 가속도와 순간 가속도

Average and Instantaneous Acceleration

---

# 가속도 (Acceleration)

<div class="grid grid-cols-2 gap-8">
<div>

### 평균 가속도

$$
\vec{a}_{\text{avg}} = \frac{\Delta\vec{v}}{\Delta t} = \frac{\vec{v}_2 - \vec{v}_1}{t_2 - t_1}
$$

### 순간 가속도

$$
\vec{a} = \frac{d\vec{v}}{dt}
$$

</div>
<div>

<v-click>

### 성분 표현

$$
\vec{a} = a_x\,\hat{i} + a_y\,\hat{j} + a_z\,\hat{k}
$$

$$
a_x = \frac{dv_x}{dt}, \quad a_y = \frac{dv_y}{dt}, \quad a_z = \frac{dv_z}{dt}
$$

</v-click>

</div>
</div>

<v-click>

<div class="mt-6 p-4 bg-yellow-500 bg-opacity-10 rounded-lg">

**핵심**: 가속도가 있으면 **속력** 또는 **방향** (또는 둘 다)이 변한다.

- 속력만 변함: 가속도가 속도와 **같은/반대** 방향
- 방향만 변함: 가속도가 속도에 **수직** (예: 등속 원운동)

</div>

</v-click>

---

# 예제: 토끼의 운동 (Sample Problem 4.2.1)

토끼의 위치가 $\vec{r} = (3t^2 - 5t)\,\hat{i} + (4 - 6t^3)\,\hat{j}$ (m, s) 로 주어진다.

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### (a) $t = 2$ s에서의 속도

<v-clicks>

$$
v_x = \frac{dx}{dt} = 6t - 5 \;\Rightarrow\; v_x(2) = 7 \text{ m/s}
$$

$$
v_y = \frac{dy}{dt} = -18t^2 \;\Rightarrow\; v_y(2) = -72 \text{ m/s}
$$

$$
\vec{v}(2) = 7\,\hat{i} - 72\,\hat{j} \text{ m/s}
$$

</v-clicks>

</div>
<div>

<v-click>

### (b) $t = 2$ s에서의 가속도

$$
a_x = \frac{dv_x}{dt} = 6 \;\Rightarrow\; a_x(2) = 6 \text{ m/s}^2
$$

$$
a_y = \frac{dv_y}{dt} = -36t \;\Rightarrow\; a_y(2) = -72 \text{ m/s}^2
$$

$$
\vec{a}(2) = 6\,\hat{i} - 72\,\hat{j} \text{ m/s}^2
$$

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**방법**: 위치 → (미분) → 속도 → (미분) → 가속도. 각 성분을 **독립적으로** 계산!

</div>

</v-click>

---
layout: section
---

# 4.4 포물체 운동

Projectile Motion

---

# 포물체 운동이란?

초기 속도 $\vec{v}_0$로 발사된 물체가 **중력**만 받으며 운동하는 경우

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 기본 가정

<v-clicks>

1. 공기 저항 무시
2. 중력가속도 $\vec{g}$는 일정 (아래 방향)
3. 지표면 근처에서 $g = 9.8 \text{ m/s}^2$

</v-clicks>

<v-click>

### 핵심 아이디어

수평($x$)과 수직($y$) 운동은 **독립적**이다!

$$
a_x = 0, \quad a_y = -g
$$

</v-click>

</div>
<div>

<v-click>

### 운동 분해

| | 수평 ($x$) | 수직 ($y$) |
|---|---|---|
| 가속도 | $0$ | $-g$ |
| 운동 유형 | 등속 | 등가속도 |

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

포물체의 궤적은 **포물선(parabola)** 이다.

</div>

</v-click>

</div>
</div>

---

# 포물체 운동 방정식

발사각 $\theta_0$, 초기 속력 $v_0$로 원점에서 발사:

$$
v_{0x} = v_0 \cos\theta_0, \quad v_{0y} = v_0 \sin\theta_0
$$

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### 수평 방향 (등속)

$$
\boxed{x = v_{0x}\,t = (v_0 \cos\theta_0)\,t}
$$

$$
\boxed{v_x = v_{0x} = v_0 \cos\theta_0}
$$

</div>
<div>

### 수직 방향 (등가속도)

$$
\boxed{y = v_{0y}\,t - \tfrac{1}{2}g\,t^2}
$$

$$
\boxed{v_y = v_{0y} - g\,t}
$$

$$
\boxed{v_y^2 = v_{0y}^2 - 2g\,y}
$$

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**궤적 방정식**: $t$를 소거하면 $y = (\tan\theta_0)\,x - \dfrac{g}{2(v_0\cos\theta_0)^2}\,x^2$ — **포물선**!

</div>

</v-click>

---

# 수평 도달 거리와 최대 높이

<div class="grid grid-cols-2 gap-8">
<div>

### 수평 도달 거리 (Range)

$y = 0$이 되는 시간 $T$에서의 $x$:

<v-clicks>

체공 시간: $T = \dfrac{2v_0\sin\theta_0}{g}$

$$
\boxed{R = \frac{v_0^2 \sin 2\theta_0}{g}}
$$

- $\theta_0 = 45°$일 때 **최대 도달 거리**
- $\theta_0$와 $90° - \theta_0$는 **같은 도달 거리**

</v-clicks>

</div>
<div>

### 최대 높이 (Maximum Height)

$v_y = 0$이 되는 시점에서의 $y$:

<v-click>

$$
\boxed{H = \frac{v_0^2\sin^2\theta_0}{2g}}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**주의**: Range 공식은 발사점과 착지점의 **높이가 같을 때**만 유효하다!

</div>

</v-click>

</div>
</div>

---

# 예제: 포물체 운동 분석 (Sample Problem 4.4.1)

공을 $v_0 = 20$ m/s, $\theta_0 = 60°$로 지면에서 발사했다.

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

### (a) 최대 높이 $H$

<v-clicks>

$$
v_{0y} = 20\sin 60° = 17.3 \text{ m/s}
$$

$$
H = \frac{v_{0y}^2}{2g} = \frac{(17.3)^2}{2 \times 9.8} = 15.3 \text{ m}
$$

</v-clicks>

### (b) 체공 시간 $T$

<v-click>

$$
T = \frac{2v_{0y}}{g} = \frac{2 \times 17.3}{9.8} = 3.53 \text{ s}
$$

</v-click>

</div>
<div>

### (c) 수평 도달 거리 $R$

<v-click>

$$
v_{0x} = 20\cos 60° = 10.0 \text{ m/s}
$$

$$
R = v_{0x} \times T = 10.0 \times 3.53 = 35.3 \text{ m}
$$

또는:

$$
R = \frac{v_0^2 \sin 2\theta_0}{g} = \frac{400 \times \sin 120°}{9.8} = 35.3 \text{ m}
$$

</v-click>

### (d) $t = 2$ s에서의 속도

<v-click>

$$
v_x = 10.0 \text{ m/s}, \quad v_y = 17.3 - 9.8(2) = -2.3 \text{ m/s}
$$

$$
v = \sqrt{10.0^2 + 2.3^2} = 10.3 \text{ m/s}
$$

</v-click>

</div>
</div>

---

# 포물체 운동의 독립성 시연

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 동시 낙하 실험

<v-clicks>

두 공을 **같은 높이**에서 동시에:
- 공 A: 수평으로 발사
- 공 B: 가만히 놓음 (자유 낙하)

**결과**: 두 공은 **동시에** 바닥에 도착!

</v-clicks>

<v-click>

### 이유

- 두 공의 $y$ 방향 운동이 **동일**: $y = -\frac{1}{2}gt^2$
- 공 A의 수평 운동은 수직 운동에 **영향을 주지 않는다**

</v-click>

</div>
<div>

<v-click>

### 원숭이와 사냥꾼 문제

사냥꾼이 나무 위 원숭이를 향해 조준하여 발사하는 순간, 원숭이가 떨어진다.

**총알이 원숭이에게 맞을까?**

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**맞는다!** 총알과 원숭이 모두 $\frac{1}{2}gt^2$만큼 아래로 떨어지므로, 중력이 없을 때의 직선 경로에서 같은 양만큼 벗어난다.

</div>

</v-click>

</div>
</div>

---

# 예제: 절벽에서의 포물체 (Sample Problem 4.4.2)

공을 절벽 꼭대기($h = 45$ m)에서 수평으로 $v_0 = 10$ m/s로 던졌다.

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 착지 시간

<v-clicks>

수직: $y = -\frac{1}{2}gt^2$ (아래 방향 양수)

$h = \frac{1}{2}gt^2$이므로:

$$
t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 45}{9.8}} = 3.03 \text{ s}
$$

</v-clicks>

</div>
<div>

### 착지 위치와 속도

<v-click>

수평 거리: $x = v_0 t = 10 \times 3.03 = 30.3$ m

착지 속도:

$$
v_x = 10 \text{ m/s}, \quad v_y = gt = 9.8 \times 3.03 = 29.7 \text{ m/s}
$$

$$
v = \sqrt{10^2 + 29.7^2} = 31.3 \text{ m/s}
$$

착지 각도: $\theta = \tan^{-1}\frac{29.7}{10} = 71.4°$ (수평 아래)

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**포인트**: 발사점과 착지점의 높이가 다를 때는 Range 공식 대신 **기본 방정식**을 직접 사용해야 한다.

</div>

</v-click>

---
layout: section
---

# 4.5 등속 원운동

Uniform Circular Motion

---

# 등속 원운동 (Uniform Circular Motion)

일정한 **속력** $v$로 반지름 $r$인 원 위를 도는 운동

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 특징

<v-clicks>

- **속력**은 일정하지만 **속도의 방향**이 계속 변한다
- 따라서 **가속도가 존재**한다!
- 가속도의 방향: 항상 **원의 중심을 향함**

</v-clicks>

<v-click>

이를 **구심 가속도(centripetal acceleration)** 라 한다.

$$
\boxed{a = \frac{v^2}{r}}
$$

방향: 원의 중심 방향 (구심 방향)

</v-click>

</div>
<div>

<v-click>

### 주기 (Period)

한 바퀴 도는 데 걸리는 시간:

$$
T = \frac{2\pi r}{v} = \frac{\text{원둘레}}{\text{속력}}
$$

따라서:

$$
a = \frac{v^2}{r} = \frac{4\pi^2 r}{T^2}
$$

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주의**: "등속" 원운동이라고 하지만 **등속도(constant velocity)** 가 아니라 **등속력(constant speed)** 이다. 가속도는 0이 아니다!

</div>

</v-click>

---

# 구심 가속도의 유도

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 기하학적 유도

<v-clicks>

시간 $\Delta t$ 동안 각도 $\Delta\theta$만큼 이동:

속도 벡터의 변화 $|\Delta\vec{v}|$:

$$
|\Delta\vec{v}| = v\,\Delta\theta
$$

(두 속도 벡터의 크기가 $v$로 같으므로)

가속도의 크기:

$$
a = \frac{|\Delta\vec{v}|}{\Delta t} = v\frac{\Delta\theta}{\Delta t} = v\omega
$$

여기서 $\omega = v/r$ (각속력)이므로:

$$
a = \frac{v^2}{r}
$$

</v-clicks>

</div>
<div>

<v-click>

### 성분 표현

원점을 중심으로 반시계 방향 회전:

$$
x = r\cos\omega t, \quad y = r\sin\omega t
$$

$$
v_x = -r\omega\sin\omega t, \quad v_y = r\omega\cos\omega t
$$

$$
a_x = -r\omega^2\cos\omega t, \quad a_y = -r\omega^2\sin\omega t
$$

$$
\vec{a} = -\omega^2\vec{r} \quad \text{(중심 방향!)}
$$

$$
|\vec{a}| = r\omega^2 = \frac{v^2}{r}
$$

</v-click>

</div>
</div>

---

# 예제: 원운동과 구심 가속도

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 예제 1: 지구의 공전

<v-clicks>

지구의 공전 반지름: $r = 1.50 \times 10^{11}$ m

공전 주기: $T = 365.25 \times 24 \times 3600 = 3.156 \times 10^7$ s

구심 가속도:

$$
a = \frac{4\pi^2 r}{T^2} = \frac{4\pi^2 \times 1.50 \times 10^{11}}{(3.156 \times 10^7)^2}
$$

$$
= 5.95 \times 10^{-3} \text{ m/s}^2
$$

이는 $g$의 약 $0.06\%$ — 일상에서 느끼기 어렵다!

</v-clicks>

</div>
<div>

<v-click>

### 예제 2: "Top Gun" 조종사

전투기가 $v = 300$ m/s로 $r = 700$ m인 원호를 비행:

$$
a = \frac{v^2}{r} = \frac{300^2}{700} = 129 \text{ m/s}^2
$$

$$
\frac{a}{g} = \frac{129}{9.8} \approx 13g
$$

<div class="mt-3 p-3 bg-red-500 bg-opacity-10 rounded-lg text-sm">

일반인은 약 $5g$에서 의식을 잃는다. 전투기 조종사는 $9g$까지 훈련한다.

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 4.6 상대 운동

Relative Motion

---

# 1차원 상대 운동

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 기본 개념

<v-clicks>

두 기준틀(reference frame) A와 B가 있을 때:

**A에서 본 입자 P의 위치**:

$$
x_{PA} = x_{PB} + x_{BA}
$$

- $x_{PA}$: A에서 본 P의 위치
- $x_{PB}$: B에서 본 P의 위치
- $x_{BA}$: A에서 본 B의 위치

</v-clicks>

</div>
<div>

<v-click>

### 속도의 변환

시간 미분하면:

$$
\boxed{v_{PA} = v_{PB} + v_{BA}}
$$

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**예**: 열차(B)가 지면(A) 위를 60 km/h로 달리고, 승객(P)이 열차 안에서 5 km/h로 앞으로 걸으면:

$v_{PA} = 5 + 60 = 65$ km/h (지면 기준)

</div>

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**가속도**: A와 B가 **등속**으로 상대 운동하면 ($a_{BA} = 0$), 가속도는 기준틀에 무관하다: $a_{PA} = a_{PB}$

</div>

</v-click>

---

# 2차원 상대 운동

벡터로 확장:

$$
\boxed{\vec{v}_{PA} = \vec{v}_{PB} + \vec{v}_{BA}}
$$

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 예제: 강을 건너는 보트

보트가 정수(B)에서 $v_{PB} = 5.0$ m/s로 강을 직각 방향으로 횡단하려 한다. 강물(B)이 지면(A) 기준으로 $v_{BA} = 3.0$ m/s로 흐른다.

<v-click>

지면에서 본 보트의 속력:

$$
v_{PA} = \sqrt{v_{PB}^2 + v_{BA}^2} = \sqrt{25 + 9} = 5.8 \text{ m/s}
$$

방향: $\theta = \tan^{-1}\frac{3.0}{5.0} = 31°$ (하류 쪽으로 벗어남)

</v-click>

</div>
<div>

<v-click>

### 최단 시간 vs 최단 경로

**최단 시간**: 강 직각 방향으로 진행 → 하류로 밀림

**직선 횡단**: 상류 쪽으로 비스듬히 조준

$$
\sin\alpha = \frac{v_{BA}}{v_{PB}} = \frac{3.0}{5.0}
$$

$$
\alpha = 37° \text{ (상류 방향)}
$$

이때 횡단 속력: $v_{PB}\cos\alpha = 4.0$ m/s → 더 오래 걸린다

</v-click>

</div>
</div>

---

# 예제: 비 속에서 걷기

비가 수직으로 $v_{\text{rain}} = 5.0$ m/s로 내리고 있다. 사람이 $v_{\text{walk}} = 3.0$ m/s로 걸을 때, 비가 어느 방향에서 오는 것처럼 보이는가?

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

<v-clicks>

**지면 기준 비의 속도**: $\vec{v}_{RG} = -5.0\,\hat{j}$ m/s

**지면 기준 사람의 속도**: $\vec{v}_{PG} = 3.0\,\hat{i}$ m/s

**사람 기준 비의 속도**:

$$
\vec{v}_{RP} = \vec{v}_{RG} - \vec{v}_{PG} = -3.0\,\hat{i} - 5.0\,\hat{j}
$$

</v-clicks>

</div>
<div>

<v-click>

비가 비스듬히 **앞에서** 오는 것처럼 보인다:

$$
\theta = \tan^{-1}\frac{3.0}{5.0} = 31° \text{ (수직에서 앞쪽으로)}
$$

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

우산을 앞으로 기울여야 하는 이유가 바로 이것! 빨리 걸을수록 비가 더 앞에서 오는 것처럼 보인다.

</div>

</v-click>

</div>
</div>

---

# Review & Summary

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### 위치·속도·가속도

$$
\vec{r} = x\,\hat{i} + y\,\hat{j} + z\,\hat{k}
$$

$$
\vec{v} = \frac{d\vec{r}}{dt}, \quad \vec{a} = \frac{d\vec{v}}{dt}
$$

각 성분은 **독립적**으로 계산

### 포물체 운동

- $a_x = 0$, $a_y = -g$
- 궤적: 포물선
- $R = \dfrac{v_0^2\sin 2\theta_0}{g}$ (같은 높이)
- $H = \dfrac{v_0^2\sin^2\theta_0}{2g}$

</div>
<div>

### 등속 원운동

- 속력 일정, 방향 변화
- 구심 가속도:

$$
a = \frac{v^2}{r} = \frac{4\pi^2 r}{T^2}
$$

- 방향: 항상 원의 **중심**을 향함

### 상대 운동

$$
\vec{v}_{PA} = \vec{v}_{PB} + \vec{v}_{BA}
$$

등속 상대 운동 시 가속도는 기준틀에 무관

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 문제 1: 포물체 운동

공을 $v_0 = 25$ m/s, $\theta_0 = 30°$로 발사했다.

(a) 최대 높이는?
(b) 체공 시간은?
(c) 수평 도달 거리는?

<v-click>

**풀이:**

$$
v_{0y} = 25\sin 30° = 12.5 \text{ m/s}
$$

(a) $H = \dfrac{12.5^2}{2 \times 9.8} = 7.97$ m

(b) $T = \dfrac{2 \times 12.5}{9.8} = 2.55$ s

(c) $R = \dfrac{625\sin 60°}{9.8} = 55.2$ m

</v-click>

</div>
<div>

### 문제 2: 등속 원운동

자동차가 반지름 $r = 50$ m인 원형 트랙을 $v = 20$ m/s로 달린다.

(a) 구심 가속도는?
(b) 주기는?

<v-click>

**풀이:**

(a) $a = \dfrac{v^2}{r} = \dfrac{400}{50} = 8.0$ m/s$^2$ $\approx 0.82g$

(b) $T = \dfrac{2\pi r}{v} = \dfrac{2\pi \times 50}{20} = 15.7$ s

</v-click>

</div>
</div>

---

# 연습 문제 (계속)

### 문제 3: 상대 운동 — 비행기와 바람

비행기의 대기속력(airspeed)은 200 km/h이다. 바람이 동쪽에서 서쪽으로 50 km/h로 분다. 비행기가 정북쪽으로 날아가려면 어느 방향으로 기수를 향해야 하는가?

<v-clicks>

**설정**: 지면(G) 기준 비행기(P)의 속도 $\vec{v}_{PG}$가 정북 방향이어야 한다.

$$
\vec{v}_{PG} = \vec{v}_{PA} + \vec{v}_{AG}
$$

여기서 $\vec{v}_{PA}$는 대기 기준 비행기 속도(크기 200), $\vec{v}_{AG}$는 바람(서쪽 방향, 크기 50)

동쪽 성분이 0이 되려면: $v_{PA}\sin\alpha = v_{\text{wind}} = 50$

$$
\sin\alpha = \frac{50}{200} = 0.25 \implies \alpha = 14.5° \text{ (동쪽으로)}
$$

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg">

지면 기준 속력: $v_{PG} = 200\cos 14.5° = 194$ km/h — 바람 때문에 약간 느려진다.

</div>

</v-click>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 4: 2차원 및 3차원 운동 끝

<div class="mt-8 text-gray-400">

다음: Chapter 5 — 힘과 운동 I (Force and Motion I)

</div>
