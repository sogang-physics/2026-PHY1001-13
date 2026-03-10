---
theme: default
title: "Chapter 8: 퍼텐셜에너지와 에너지 보존 (Potential Energy and Conservation of Energy)"
info: |
  일반물리 I — Chapter 8: 퍼텐셜에너지와 에너지 보존
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 8: 퍼텐셜에너지와 에너지 보존

Potential Energy and Conservation of Energy

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

- 물리학의 중요한 과제: 세상에 존재하는 **다양한 에너지 유형**을 구분하는 것
- **퍼텐셜에너지(potential energy)** $U$: 서로 힘을 작용하는 물체들의 **배치(configuration)**와 관련된 에너지

</v-clicks>

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

- 번지점프: 점프자와 지구 사이의 **중력** → **중력 퍼텐셜에너지**
- 번지코드 늘어남: **탄성력** → **탄성 퍼텐셜에너지**

</div>
<div>

<img src="/img/c0801f001_high_resolution.jpg" class="max-h-48 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.1.1 — 번지점프: 자유낙하 후 코드가 늘어나며 감속</div>

</div>
</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: Ch.7에서 일과 운동에너지의 관계를 배웠다. 이제 일과 **퍼텐셜에너지**의 관계를 다룬다.

</div>

</v-click>

---
layout: section
---

# 8.1 퍼텐셜에너지

Potential Energy

---

# 일과 퍼텐셜에너지 (Work and Potential Energy)

<div class="grid grid-cols-2 gap-8">
<div>

토마토를 위로 던지면:

<v-clicks>

- **상승**: 중력이 **음의 일** → 운동에너지 감소 → 중력 퍼텐셜에너지 증가
- **하강**: 중력이 **양의 일** → 운동에너지 증가 → 중력 퍼텐셜에너지 감소

</v-clicks>

<v-click>

퍼텐셜에너지의 변화는 보존력이 한 일의 **음수**:

$$
\boxed{\Delta U = -W} \tag{8.1.1}
$$

</v-click>

<v-click>

일반적으로 힘이 위치에 따라 변할 때:

$$
\Delta U = -\int_{x_i}^{x_f} F(x)\,dx \tag{8.1.6}
$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0801f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.1.2 — 토마토를 위로 던짐: 상승 시 중력은 음의 일, 하강 시 양의 일</div>

</v-click>

</div>
</div>

---

# 보존력과 비보존력 (Conservative vs. Nonconservative Forces)

<div class="grid grid-cols-2 gap-8">
<div>

### 보존력 (Conservative Force)

<v-clicks>

- 닫힌 경로를 따라 한 바퀴 돌면 **알짜 일 = 0**
- 두 점 사이의 일이 **경로에 무관**
- 예: 중력, 용수철 힘

</v-clicks>

<v-click>

$$
W_{ab,1} = W_{ab,2} \tag{8.1.2}
$$

</v-click>

<v-click>

### 비보존력 (Nonconservative Force)

- 운동 마찰력, 공기 저항력
- 에너지를 **열에너지**로 전환 → 되돌릴 수 없음

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0801f004_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.1.4 — (a) 보존력: 어떤 경로든 같은 일 (b) 왕복하면 알짜 일 = 0</div>

</v-click>

</div>
</div>

---

# 중력 퍼텐셜에너지 (Gravitational Potential Energy)

질량 $m$인 입자가 $y_i$에서 $y_f$로 이동할 때, 중력 퍼텐셜에너지의 변화:

$$
\Delta U = -\int_{y_i}^{y_f}(-mg)\,dy = mg(y_f - y_i) = mg\,\Delta y \tag{8.1.7}
$$

<v-click>

기준점을 $y_i = 0$, $U_i = 0$으로 설정하면:

$$
\boxed{U(y) = mgy} \quad \text{(중력 퍼텐셜에너지)} \tag{8.1.9}
$$

</v-click>

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 중력 퍼텐셜에너지는 기준점 $y = 0$에 대한 **수직 높이** $y$에만 의존한다. 수평 위치와는 무관!

</div>
<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**기준점 선택**: $U$의 **절대값**은 기준점에 따라 달라지지만, $\Delta U$는 기준점과 무관하다.

</div>
</div>

</v-click>

---

# 탄성 퍼텐셜에너지 (Elastic Potential Energy)

<div class="grid grid-cols-2 gap-8">
<div>

용수철 상수 $k$인 용수철에 연결된 블록이 $x_i$에서 $x_f$로 이동:

$$
\Delta U = -\int_{x_i}^{x_f}(-kx)\,dx = \tfrac{1}{2}kx_f^2 - \tfrac{1}{2}kx_i^2 \tag{8.1.10}
$$

<v-click>

기준점: 자연 길이($x = 0$)에서 $U = 0$:

$$
\boxed{U(x) = \tfrac{1}{2}kx^2} \quad \text{(탄성 퍼텐셜에너지)} \tag{8.1.11}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

- 압축($x < 0$)이든 인장($x > 0$)이든 $U \geq 0$
- $|x|$가 클수록 $U$ 증가

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0801f003_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.1.3 — 블록-용수철 계: (a) 오른쪽으로 이동 시 용수철 음의 일 (b) 되돌아올 때 양의 일</div>

</v-click>

</div>
</div>

---

# 예제: 미끄러운 치즈 (Sample Problem 8.1.1)

<div class="text-sm">

2.0 kg 치즈 블록이 마찰 없는 트랙을 따라 점 $a$에서 점 $b$로 미끄러진다. 총 이동 거리 2.0 m, 순 수직 거리 0.80 m. 중력이 한 일은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**Key Idea**: 중력은 보존력 → 경로에 무관!

쉬운 경로(수직 + 수평)를 선택:

**수평 구간**: $\phi = 90°$

$$W_h = mgd\cos 90° = 0$$

**수직 구간**: $d = 0.80$ m, $\phi = 0°$

$$W_v = mgd\cos 0° = (2.0)(9.8)(0.80)(1) = 15.7 \text{ J}$$

</v-clicks>

<v-click>

$$\boxed{W = W_h + W_v = 0 + 15.7 \approx 16 \text{ J}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0801f005_high_resolution.jpg" class="max-h-64 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.1.5 — 보존력이므로 실제 경로 대신 쉬운 경로로 계산 가능</div>

</v-click>

</div>
</div>

---
layout: section
---

# 8.2 역학적 에너지 보존

Conservation of Mechanical Energy

---

# 역학적 에너지 (Mechanical Energy)

<div class="grid grid-cols-2 gap-8">
<div>

계의 **역학적 에너지** $E_{\text{mec}}$:

$$
\boxed{E_{\text{mec}} = K + U} \tag{8.2.1}
$$

<v-clicks>

보존력이 일 $W$를 하면:
- 운동에너지 변화: $\Delta K = W$ (일-에너지 정리)
- 퍼텐셜에너지 변화: $\Delta U = -W$
- 따라서: $\Delta K = -\Delta U$

</v-clicks>

<v-click>

정리하면:

$$
K_2 + U_2 = K_1 + U_1 \tag{8.2.6}
$$

$$
\boxed{\Delta E_{\text{mec}} = \Delta K + \Delta U = 0} \tag{8.2.7}
$$

</v-click>

</div>
<div>

<v-click>

<div class="p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**역학적 에너지 보존 법칙**: 고립된 계에서 보존력만 작용하면, 운동에너지와 퍼텐셜에너지는 서로 변환되지만 그 합 $E_{\text{mec}}$은 일정하다.

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**장점**: 중간 과정이나 힘을 몰라도, 초기 상태와 최종 상태의 에너지만 비교하면 된다!

</div>

</v-click>

</div>
</div>

---

# 진자와 에너지 보존 (Pendulum and Energy Conservation)

<div class="grid grid-cols-2 gap-8">
<div>

진자가 흔들릴 때:

<v-clicks>

- 최고점: $K = 0$, $U$ 최대 → 모두 퍼텐셜에너지
- 최저점: $U = 0$, $K$ 최대 → 모두 운동에너지
- 중간: $K$와 $U$가 서로 변환
- **항상** $K + U = E_{\text{mec}}$ = 일정

</v-clicks>

<v-click>

예: 최고점에서 $U_1 = 20$ J, $K_1 = 0$

$$K_2 + 0 = 0 + 20 \text{ J}$$

$$\therefore K_2 = 20 \text{ J (최저점)}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0802f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.2.1 — 진자의 한 주기: K와 U가 서로 변환되며 총 역학적 에너지는 보존</div>

</v-click>

</div>
</div>

---

# 예제: 워터슬라이드 (Sample Problem 8.2.1)

<div class="text-sm">

질량 $m$인 아이가 높이 $h = 8.5$ m 워터슬라이드 꼭대기에서 정지 상태로 출발. 마찰 없을 때 바닥 속력은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**Key Ideas**: (1) 미끄럼틀의 경사·형태를 몰라도 OK! (2) 보존력(중력)만 작용 → 에너지 보존

$$E_{\text{mec},b} = E_{\text{mec},t}$$

$$K_b + U_b = K_t + U_t$$

$$\tfrac{1}{2}mv_b^2 + mgy_b = \tfrac{1}{2}mv_t^2 + mgy_t$$

$v_t = 0$, $y_t - y_b = h$:

$$v_b = \sqrt{2gh} = \sqrt{2(9.8)(8.5)}$$

</v-clicks>

<v-click>

$$\boxed{v_b = 13 \text{ m/s}}$$

이것은 $h = 8.5$ m에서 수직 낙하한 것과 같은 속력!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0802f002_high_resolution.jpg" class="max-h-64 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.2.2 — 워터슬라이드: 꼭대기의 역학적 에너지 = 바닥의 역학적 에너지</div>

</v-click>

</div>
</div>

---
layout: section
---

# 8.3 퍼텐셜에너지 곡선 읽기

Reading a Potential Energy Curve

---

# 힘과 퍼텐셜에너지의 관계

<div class="grid grid-cols-2 gap-8">
<div>

퍼텐셜에너지 함수 $U(x)$를 알면 힘을 구할 수 있다:

$$
\boxed{F(x) = -\frac{dU(x)}{dx}} \tag{8.3.2}
$$

<v-clicks>

- 힘 = $U(x)$ 곡선 기울기의 **음수**
- 기울기가 양수(올라감) → 힘은 $-x$ 방향
- 기울기가 음수(내려감) → 힘은 $+x$ 방향
- 기울기가 급할수록 힘이 세다

</v-clicks>

<v-click>

운동에너지:

$$
K(x) = E_{\text{mec}} - U(x) \tag{8.3.4}
$$

$K \geq 0$이어야 하므로 $U > E_{\text{mec}}$인 영역에는 입자가 갈 수 없다!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0803f001_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.3.1 — (a) U(x) 곡선 (b) F(x) = -dU/dx</div>

</v-click>

</div>
</div>

---

# 되돌림점과 평형 (Turning Points & Equilibrium)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 되돌림점 (Turning Point)

<v-clicks>

- $K = 0$인 점, 즉 $U(x) = E_{\text{mec}}$
- 입자가 잠시 멈추고 방향을 바꿈

### 평형점 (Equilibrium Points)

$F(x) = 0$인 점 ($dU/dx = 0$):

- **안정 평형 (Stable)**: $U$가 극소 → 밀어도 되돌아옴
  - 예: 그릇 바닥의 구슬
- **불안정 평형 (Unstable)**: $U$가 극대 → 살짝 밀면 멀어짐
  - 예: 볼링공 위의 구슬
- **중립 평형 (Neutral)**: $U$가 일정 → 밀어도 그대로
  - 예: 평평한 탁자 위의 구슬

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0803f002_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.3.1 — (e)(f) 다양한 역학적 에너지 값에서의 되돌림점과 허용 영역</div>

</v-click>

</div>
</div>

---

# 예제: 퍼텐셜에너지 그래프 읽기 (Sample Problem 8.3.1)

<div class="text-sm">

2.00 kg 입자가 $x$축 위에서 보존력을 받는다. $U(x)$가 그래프로 주어짐. $x = 6.5$ m에서 속도 $v_0 = -4.00$ m/s.

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**(a)** $x = 4.5$ m에서 속력:

$$K_0 = \tfrac{1}{2}(2.00)(4.00)^2 = 16.0 \text{ J}$$

$x = 6.5$ m에서 $U = 0$ → $E_{\text{mec}} = 16.0$ J

$x = 4.5$ m에서 $U_1 = 7.0$ J:

$$K_1 = 16.0 - 7.0 = 9.0 \text{ J}$$

$$v_1 = \sqrt{\frac{2K_1}{m}} = 3.0 \text{ m/s}$$

**(b)** 되돌림점: $U = E_{\text{mec}} = 16.0$ J인 곳

→ $x = 1.9$ m

</v-clicks>

<v-click>

**(c)** $1.9 < x < 4.0$ m에서의 힘:

$$F = -\frac{\Delta U}{\Delta x} = -\frac{20 - 7.0}{1.0 - 4.0} = +4.3 \text{ N}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0803f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.3.2 — (a) U(x) 그래프에서 역학적 에너지와 운동에너지 읽기 (b) 되돌림점 찾기</div>

</v-click>

</div>
</div>

---
layout: section
---

# 8.4 외력이 계에 한 일

Work Done on a System by an External Force

---

# 외력이 한 일 — 마찰 없는 경우

<div class="grid grid-cols-2 gap-8">
<div>

외력 $\vec{F}$가 계에 일 $W$를 하면:

### 마찰 없을 때

$$
\boxed{W = \Delta E_{\text{mec}} = \Delta K + \Delta U} \tag{8.4.2}
$$

<v-clicks>

- 외력이 양의 일 → 계에 에너지 전달
- 외력이 음의 일 → 계에서 에너지 빠져나감
- 예: 볼링공을 들어올리는 힘 → $\Delta K + \Delta U$ 증가

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0804f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.4.2 — 볼링공을 들어올림: 외력 W가 계의 역학적 에너지를 증가시킨다</div>

</v-click>

</div>
</div>

---

# 외력이 한 일 — 마찰이 있는 경우

<div class="grid grid-cols-2 gap-8">
<div>

마찰력이 존재하면 **열에너지** $E_{\text{th}}$가 발생:

$$
\boxed{\Delta E_{\text{th}} = f_k d} \tag{8.4.7}
$$

<v-click>

외력이 한 일의 에너지 수지:

$$
\boxed{W = \Delta E_{\text{mec}} + \Delta E_{\text{th}}} \tag{8.4.9}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

- **마찰 없음**: 외력의 일 = 역학적 에너지 변화
- **마찰 있음**: 외력의 일 = 역학적 에너지 변화 + 열에너지 변화
- 열에너지: 블록과 바닥의 원자 무작위 운동 에너지

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0804f003_high_resolution.jpg" class="max-h-64 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.4.3 — (a) 외력 F가 마찰력 fk를 이기며 블록을 당김 (b) 에너지 배분: 역학적 에너지 + 열에너지</div>

</v-click>

</div>
</div>

---

# 예제: 이스터 섬 석상 (Sample Problem 8.4.1)

<div class="text-sm">

9000 kg 석상을 나무 썰매 위에 놓고 25명이 45 m를 끌었다. 한 사람의 질량 80 kg, 각자 자기 몸무게 2배의 힘.

</div>

<div class="grid grid-cols-2 gap-6 text-xs">
<div>

<v-clicks>

**(a)** 25명이 한 일:

$$F = (25)(2mg) = 50mg$$

$$W = Fd\cos 0° = 50mgd$$

$$= (50)(80)(9.8)(45) = 1.8 \times 10^6 \text{ J}$$

$$\approx 2 \text{ MJ}$$

**(b)** 석상은 시작과 끝에서 정지 & 높이 변화 없음:

$$\Delta E_{\text{mec}} = 0$$

$$\Delta E_{\text{th}} = W = 2 \text{ MJ}$$

</v-clicks>

<v-click>

**(c)** 10 km를 옮긴다면:

$$W = \Delta E_{\text{th}} \approx 400 \text{ MJ}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0804f004_high_resolution.jpg" class="max-h-64 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.4.4 — 이스터 섬 석상: 고대 폴리네시아인들의 에너지 전달</div>

</v-click>

</div>
</div>

---
layout: section
---

# 8.5 에너지 보존

Conservation of Energy

---

# 에너지 보존 법칙 (Law of Conservation of Energy)

계의 **총에너지** $E$:

$$
E = E_{\text{mec}} + E_{\text{th}} + E_{\text{int}}
$$

<v-click>

외력이 계에 일 $W$를 하면:

$$
\boxed{W = \Delta E = \Delta E_{\text{mec}} + \Delta E_{\text{th}} + \Delta E_{\text{int}}} \tag{8.5.1}
$$

</v-click>

<v-click>

### 고립된 계 ($W = 0$)

$$
\Delta E_{\text{mec}} + \Delta E_{\text{th}} + \Delta E_{\text{int}} = 0
$$

</v-click>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**에너지 보존 법칙**: 계의 총에너지는 계에 전달되거나 계에서 빠져나간 에너지만큼만 변할 수 있다. 에너지는 생성되거나 소멸되지 않는다.

</div>

</v-click>

---

# 고립된 계의 에너지 보존

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### 보존력만 작용하는 고립계

$$
\Delta K + \Delta U = 0
$$

$$
K_2 + U_2 = K_1 + U_1
$$

<v-click>

### 마찰이 있는 고립계

$$
\Delta E_{\text{mec}} + \Delta E_{\text{th}} = 0
$$

$$
E_{\text{mec},2} = E_{\text{mec},1} - \Delta E_{\text{th}}
$$

$$
= E_{\text{mec},1} - f_k d
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

에너지의 형태는 바뀔 수 있지만, **총량은 항상 보존**된다. 이것이 물리학에서 가장 강력한 법칙 중 하나!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0805f001_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.5.1 — 다양한 에너지 형태 사이의 전환</div>

</v-click>

</div>
</div>

---

# 예제: 마찰 경사면 위의 블록 (Sample Problem 8.5.1)

<div class="text-sm">

6.0 kg 블록이 경사면을 따라 높이 $h$에서 미끄러져 내려와 용수철($k = 180$ N/m)을 $d = 0.030$ m 압축시킨 후 잠시 정지. 마찰계수 $\mu_k = 0.25$, 경사각 $\theta = 30°$. 높이 $h$는?

</div>

<div class="grid grid-cols-2 gap-6 text-xs">
<div>

<v-clicks>

고립된 계 + 마찰 → $\Delta E_{\text{mec}} + \Delta E_{\text{th}} = 0$

**역학적 에너지 변화:**

$$\Delta E_{\text{mec}} = (\tfrac{1}{2}kd^2 + 0) - (0 + mgh)$$

$$= \tfrac{1}{2}kd^2 - mgh$$

**열에너지 변화:**

$$\Delta E_{\text{th}} = f_k \cdot \frac{h}{\sin\theta} = \mu_k mg\cos\theta \cdot \frac{h}{\sin\theta}$$

</v-clicks>

<v-click>

합치면:

$$\tfrac{1}{2}kd^2 - mgh + \mu_k mg\cos\theta\,\frac{h}{\sin\theta} = 0$$

$$h = \frac{\tfrac{1}{2}kd^2}{mg(1 - \mu_k\cot\theta)}$$

$$\boxed{h \approx 0.0048 \text{ m} \approx 4.8 \text{ mm}}$$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0805f002_high_resolution.jpg" class="max-h-64 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.5.2 — 마찰 경사면 위의 블록이 용수철을 압축</div>

</v-click>

</div>
</div>

---

# 예제: 폭포 놀이기구 (Sample Problem 8.5.2)

<div class="text-sm">

5000 kg 보트가 높이 $h = 12$ m 폭포를 내려온다. 경사면 길이 $L$, 마찰력 $f = 1800$ N. 바닥에서의 속력 $v_b$는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

고립계 + 마찰:

$$\Delta E_{\text{mec}} + \Delta E_{\text{th}} = 0$$

$$(K_b - K_t) + (U_b - U_t) + f \cdot L = 0$$

꼭대기에서 $v_t = 0$, $U_b = 0$:

$$\tfrac{1}{2}mv_b^2 - mgh + fL = 0$$

</v-clicks>

<v-click>

경사각이 주어지지 않았지만, 높이로부터:

마찰에 의한 에너지 손실이 중력 퍼텐셜에너지보다 작으면:

$$v_b = \sqrt{2gh - \frac{2fL}{m}}$$

에너지 보존으로 **경사면의 세부 형상을 몰라도** 풀 수 있다!

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0805f003_high_resolution.jpg" class="max-h-64 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 8.5.3 — 폭포 놀이기구: 중력 퍼텐셜에너지 → 운동에너지 + 열에너지</div>

</v-click>

</div>
</div>

---

# 에너지 보존 문제 풀이 전략

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

### Step 1: 계를 정의하라

- 어떤 물체가 포함되는가?
- 외력이 존재하는가?

<v-click>

### Step 2: 에너지 유형 파악

| 조건 | 사용할 식 |
|------|----------|
| 보존력만, 고립계 | $K_1 + U_1 = K_2 + U_2$ |
| 마찰 있음, 고립계 | $\Delta E_{\text{mec}} + \Delta E_{\text{th}} = 0$ |
| 외력 있음, 마찰 없음 | $W = \Delta E_{\text{mec}}$ |
| 외력 있음, 마찰 있음 | $W = \Delta E_{\text{mec}} + \Delta E_{\text{th}}$ |

</v-click>

</div>
<div>

<v-click>

### Step 3: 초기·최종 상태 설정

- 각 상태에서 $K$, $U$, $E_{\text{th}}$ 계산
- 기준점 선택 ($U = 0$인 위치)

### Step 4: 에너지 보존 적용

- 알려진 값 대입
- 미지수 계산

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**팁**: 에너지 방법은 뉴턴 법칙보다 **중간 과정을 무시**할 수 있어 훨씬 간단한 경우가 많다!

</div>

</v-click>

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-4 text-xs">
<div>

### 문제 1: 역학적 에너지 보존

높이 20 m에서 질량 2.0 kg 공을 자유 낙하시킨다. 지면 직전 속력은? (공기 저항 무시)

<v-click>

**풀이:**

$$mgh = \tfrac{1}{2}mv^2$$

$$v = \sqrt{2gh} = \sqrt{2(9.8)(20)} = 19.8 \text{ m/s}$$

</v-click>

### 문제 2: 용수철과 에너지

용수철($k = 500$ N/m)을 0.10 m 압축한 후 0.50 kg 공을 발사. 공의 속력은?

<v-click>

**풀이:**

$$\tfrac{1}{2}kx^2 = \tfrac{1}{2}mv^2$$

$$v = x\sqrt{k/m} = 0.10\sqrt{500/0.50} = 3.2 \text{ m/s}$$

</v-click>

</div>
<div>

### 문제 3: 마찰이 있는 경우

3.0 kg 블록이 $v_0 = 4.0$ m/s로 수평면을 미끄러진다. $\mu_k = 0.30$이면 정지까지 이동 거리는?

<v-click>

**풀이:**

$$\tfrac{1}{2}mv_0^2 = f_k d = \mu_k mg d$$

$$d = \frac{v_0^2}{2\mu_k g} = \frac{16}{2(0.30)(9.8)} = 2.7 \text{ m}$$

</v-click>

### 문제 4: 퍼텐셜에너지 곡선

<v-click>

$U(x) = 4x^2 - 2x$ (J)일 때, $x = 3$ m에서의 힘은?

$$F = -\frac{dU}{dx} = -(8x - 2)\Big|_{x=3} = -22 \text{ N}$$

</v-click>

</div>
</div>

---

# 복습 & 요약 (Review & Summary)

<div class="grid grid-cols-2 gap-4 text-xs">
<div>

### 퍼텐셜에너지
- $\Delta U = -W$ (보존력이 한 일의 음수)
- 중력: $U(y) = mgy$
- 탄성: $U(x) = \frac{1}{2}kx^2$

### 보존력 vs 비보존력
- 보존력: 경로 무관, 닫힌 경로 일 = 0
- 비보존력: 경로 의존, 열에너지 발생

### 역학적 에너지 보존
- $E_{\text{mec}} = K + U$
- 고립계 + 보존력만: $K_1 + U_1 = K_2 + U_2$

</div>
<div>

### 퍼텐셜에너지 곡선
- $F(x) = -dU/dx$
- 되돌림점: $K = 0$ ($U = E_{\text{mec}}$)
- 안정/불안정/중립 평형

### 외력이 한 일
- 마찰 없음: $W = \Delta E_{\text{mec}}$
- 마찰 있음: $W = \Delta E_{\text{mec}} + \Delta E_{\text{th}}$
- $\Delta E_{\text{th}} = f_k d$

### 에너지 보존 법칙
- $W = \Delta E_{\text{mec}} + \Delta E_{\text{th}} + \Delta E_{\text{int}}$
- 에너지는 생성·소멸되지 않는다

</div>
</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 8: 퍼텐셜에너지와 에너지 보존 (Potential Energy and Conservation of Energy) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 9 — 질량중심과 선운동량 (Center of Mass and Linear Momentum)

</div>
