---
theme: default
title: "Chapter 6: 힘과 운동 II (Force and Motion II)"
info: |
  일반물리 I — Chapter 6: 힘과 운동 II
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 6: 힘과 운동 II

Force and Motion II

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

- 이번 장에서는 세 가지 중요한 힘을 다룬다: **마찰력**, **항력**, **구심력**
- Indianapolis 500 레이스카 엔지니어의 고민:

</v-clicks>

<v-click>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">
<div class="p-3 bg-orange-500 bg-opacity-10 rounded-lg">

**마찰력 (Friction)**
타이어와 도로 사이의 마찰 — 커브 탈출과 가속의 핵심

</div>
<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg">

**항력 (Drag)**
공기 저항 — 연료 소비와 최고 속도에 영향

</div>
<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg">

**구심력 (Centripetal)**
곡선 주행 — 부족하면 벽으로 충돌!

</div>
</div>

</v-click>

<v-click>

<div class="mt-6 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

핵심: 이 세 힘은 모두 **뉴턴의 제2법칙** $\vec{F}_{\text{net}} = m\vec{a}$로 분석한다. Ch.5의 자유물체도(FBD)를 적극 활용!

</div>

</v-click>

---
layout: section
---

# 6.1 마찰력

Friction

---

# 마찰력이란? (What Is Friction?)

<div class="grid grid-cols-2 gap-8">
<div>

물체가 표면 위에서 미끄러지려 할 때, 표면이 **운동을 방해하는 방향**으로 작용하는 힘

<v-clicks>

### 세 가지 사고실험

1. 카운터 위에서 책을 밀어 보내면 → 감속 후 정지 (마찰력이 운동 반대 방향)
2. 일정한 속도로 밀면 → 미는 힘 = 마찰력 (평형)
3. 무거운 상자를 세게 밀어도 안 움직임 → 마찰력이 미는 힘에 맞춰 증가!

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**핵심**: 정지마찰력은 외력에 맞춰 **크기가 변한다**. 최댓값을 넘으면 물체가 미끄러지기 시작한다.

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0601f001a-d_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.1.1 (a)-(d) — 정지 블록에 가하는 힘 F를 점점 키우면, 정지마찰력 fs도 함께 증가</div>

</v-click>

</div>
</div>

---

# 두 종류의 마찰력

<div class="grid grid-cols-2 gap-8">
<div>

### 정지마찰력 (Static Friction) $\vec{f}_s$

<v-clicks>

- 물체가 **움직이지 않을 때** 작용
- 외력의 표면 평행 성분과 **크기 같고 방향 반대**
- 외력이 커지면 $f_s$도 커진다
- **최댓값**이 존재:

$$
\boxed{f_{s,\max} = \mu_s F_N} \tag{6.1.1}
$$

</v-clicks>

<v-click>

### 운동마찰력 (Kinetic Friction) $\vec{f}_k$

- 물체가 **미끄러지고 있을 때** 작용
- 크기는 대략 **일정**:

$$
\boxed{f_k = \mu_k F_N} \tag{6.1.2}
$$

- 일반적으로 $\mu_k < \mu_s$

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0601f001e-g_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.1.1 (e)-(g) — 정지마찰력의 최댓값을 넘으면 물체가 미끄러지며 운동마찰력이 작용</div>

</v-click>

</div>
</div>

---

# 마찰력의 성질 (Properties of Friction)

<div class="grid grid-cols-2 gap-8 text-sm">
<div>

<v-clicks>

**성질 1.** 물체가 움직이지 않으면, $\vec{f}_s$는 외력의 표면 평행 성분과 **크기 같고 반대 방향**

**성질 2.** $f_s$의 최댓값:

$$f_{s,\max} = \mu_s F_N$$

- $\mu_s$: **정지마찰계수** (coefficient of static friction)
- $F_N$: 수직항력의 크기

**성질 3.** 미끄러지기 시작하면 마찰력은 $f_k$로 감소:

$$f_k = \mu_k F_N$$

- $\mu_k$: **운동마찰계수** (coefficient of kinetic friction)

</v-clicks>

</div>
<div>

<v-click>

<div class="p-3 bg-yellow-500 bg-opacity-10 rounded-lg">

**주의사항:**
- $\mu_s$와 $\mu_k$는 **무차원** 상수
- 두 표면의 재질에 따라 결정 (실험으로 측정)
- $\mu_k$는 속도에 무관하다고 가정
- 예: 달걀+테플론 → $\mu_s \approx 0.04$, 암벽등반화+바위 → $\mu_s \approx 1.2$

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg">

**Checkpoint 6.1.1**: 바닥 위 블록에 마찰력은? (a) 외력 없으면? → **0**
(b) 5 N 수평력, 블록 정지? → **5 N**
(c) $f_{s,\max} = 10$ N일 때, 8 N 외력이면 움직이나? → **아니오**

</div>

</v-click>

</div>
</div>

---

# 미시적 관점 (Microscopic View)

<div class="grid grid-cols-2 gap-8">
<div>

<v-clicks>

- 마찰력의 본질: 두 표면 원자들 사이의 **결합력(bonding)**의 합
- 매우 매끄러운 금속 표면을 진공에서 접촉하면 → **냉간 용접(cold-weld)** 발생!
- 일반적인 표면: 돌출부(asperity)의 **미세 접촉점**에서만 접촉
- 실제 접촉 면적 ≪ 겉보기 접촉 면적 (약 $10^4$배 차이)

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

미끄러짐 = 접촉점의 **용접 파괴 → 재형성** 반복
→ "stick-and-slip" 현상 → 타이어 소리, 바이올린 소리의 원리!

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0601f002_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.1.2 — 미끄럼 마찰의 미시적 메커니즘. (a) 표면 접촉 확대도 (b) 냉간 용접 부분</div>

</v-click>

</div>
</div>

---

# 예제: 경사 외력과 정지마찰 (Sample Problem 6.1.1)

<div class="text-sm">

$F = 12.0$ N의 힘을 수평 아래 $\theta = 30.0°$로 8.00 kg 블록에 가한다.
$\mu_s = 0.700$, $\mu_k = 0.400$. 블록이 미끄러지는가? 마찰력의 크기는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-clicks>

**외력의 성분 분해:**

$$F_x = F\cos 30° = 10.39 \text{ N}$$

$$F_y = F\sin 30° = 6.00 \text{ N (아래 방향)}$$

**수직항력** ($a_y = 0$):

$$F_N = mg + F\sin\theta = (8.00)(9.8) + 6.00 = 84.4 \text{ N}$$

**최대 정지마찰력:**

$$f_{s,\max} = \mu_s F_N = (0.700)(84.4) = 59.1 \text{ N}$$

</v-clicks>

</div>
<div>

<v-click>

$F_x = 10.39$ N $< f_{s,\max} = 59.1$ N

→ 블록은 **미끄러지지 않는다!**

뉴턴 제2법칙 ($a_x = 0$):

$$f_s = F_x = 10.39 \approx 10.4 \text{ N}$$

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg">

**핵심**: $f_s \neq \mu_s F_N$! 정지마찰력은 필요한 만큼만 작용하고, $\mu_s F_N$은 **최댓값**일 뿐이다.

</div>

</v-click>

</div>
</div>

<v-click>

<img src="/img/c0601f003_high_resolution.jpg" class="max-h-28 mx-auto rounded-lg" />

</v-click>

---

# 예제: 스노보드 (Sample Problem 6.1.2)

<div class="text-sm">

70 kg 스노보더가 경사각 $\theta = 18°$인 슬로프를 직선으로 활강. $\mu_k = 0.040$.
(a) 가속도는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**자유물체도에서** (경사면 좌표계):

수직: $F_N = mg\cos\theta$

운동마찰력: $f_k = \mu_k F_N = \mu_k mg\cos\theta$

경사면 방향 뉴턴 제2법칙:

$$mg\sin\theta - f_k = ma_x$$

$$mg\sin\theta - \mu_k mg\cos\theta = ma_x$$

$$a_x = g(\sin\theta - \mu_k\cos\theta) = (9.8)(\sin 18° - 0.040\cos 18°)$$

$$\boxed{a_x = 2.7 \text{ m/s}^2}$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0601f004b_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.1.4 (b) — 스노보더의 자유물체도: 중력 성분과 운동마찰력</div>

</v-click>

</div>
</div>

---

# 예제: 제동 거리 (Sample Problem 6.1.3)

<div class="text-sm">

Jaguar가 수평 도로에서 바퀴를 잠근 채 290 m 미끄러진 후 정지. $\mu_k = 0.60$. 초기 속도 $v_0$는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**자유물체도:**
수직 방향: $F_N = mg$

수평 방향 (뉴턴 제2법칙):

$$-f_k = ma \implies a = -\mu_k g$$

**등가속도 공식** ($v = 0$):

$$v^2 = v_0^2 + 2ad \implies 0 = v_0^2 - 2\mu_k g d$$

$$v_0 = \sqrt{2\mu_k g d} = \sqrt{2(0.60)(9.8)(290)}$$

$$\boxed{v_0 = 58 \text{ m/s} = 210 \text{ km/h}}$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0601f005_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.1.5 — (a) 스키드마크 290 m (b) 자유물체도</div>

</v-click>

</div>
</div>

---
layout: section
---

# 6.2 항력과 종단 속력

The Drag Force and Terminal Speed

---

# 항력 (Drag Force)

<div class="grid grid-cols-2 gap-8">
<div>

유체(공기, 물 등)와 물체 사이에 **상대 운동**이 있을 때, 물체에 작용하는 저항력

<v-clicks>

### 항력 공식

$$
\boxed{D = \frac{1}{2}C\rho A v^2} \tag{6.2.1}
$$

- $C$: **항력 계수** (drag coefficient, 0.4~1.0)
- $\rho$: 유체 밀도 (공기: $\approx 1.21$ kg/m$^3$)
- $A$: **유효 단면적** (속도에 수직인 단면)
- $v$: 상대 속력

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

항력은 $v^2$에 비례 → 속도가 2배면 항력은 **4배**!
스키 선수가 "에그 자세"를 취하는 이유: $A$를 최소화

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/img/c0602f001-003_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.2.1-3 — 스키어의 에그 자세(단면적 최소화), 낙하 물체의 힘, 스카이다이버의 스프레드 이글</div>

</v-click>

</div>
</div>

---

# 종단 속력 (Terminal Speed)

<div class="grid grid-cols-2 gap-8">
<div>

물체가 공기 중에서 낙하할 때:

<v-clicks>

- 처음: $D = 0$, 가속도 $= g$ (자유낙하)
- 속도 증가 → $D$ 증가 → 알짜힘 감소
- 결국 $D = F_g$ → $a = 0$ → **종단 속력** $v_t$

</v-clicks>

<v-click>

뉴턴 제2법칙 ($a = 0$):

$$D - F_g = 0 \implies \frac{1}{2}C\rho A v_t^2 = F_g$$

$$
\boxed{v_t = \sqrt{\frac{2F_g}{C\rho A}}} \tag{6.2.3}
$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

$v_t$는 물체가 무거울수록($F_g$ 큼), 단면적이 작을수록($A$ 작음) **크다**.

</div>

</v-click>

</div>
<div>

<v-click>

### 종단 속력 표 (Table 6.2.1)

<div class="text-xs">

| 물체 | $v_t$ (m/s) | 95% 거리 (m) |
|------|----------:|----------:|
| 포환(shot put) | 145 | 2500 |
| 스카이다이버 | 60 | 430 |
| 야구공 | 42 | 210 |
| 테니스공 | 31 | 115 |
| 농구공 | 20 | 47 |
| 탁구공/빗방울/낙하산 | 5–9 | 3–10 |

</div>

</v-click>

</div>
</div>

---

# 예제: 떨어지는 고양이 (Sample Problem 6.2.1)

<div class="text-sm">

고양이가 첫 번째 종단 속력 $v_{t_i} = 97$ km/h에 도달한 후 몸을 펴서 단면적 $A$를 2배로 늘렸다.
새로운 종단 속력 $v_{t_n}$은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**종단 속력 비를 이용:**

$$v_t = \sqrt{\frac{2F_g}{C\rho A}}$$

같은 고양이이므로 $F_g$, $C$, $\rho$는 동일, $A$만 변화:

$$\frac{v_{t_n}}{v_{t_i}} = \sqrt{\frac{A_i}{A_n}} = \sqrt{\frac{A_i}{2A_i}} = \sqrt{0.5} = 0.707$$

$$v_{t_n} = 0.707 \times 97 = 69 \text{ km/h}$$

</v-clicks>

<v-click>

$$\boxed{v_{t_n} \approx 69 \text{ km/h}}$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**Checkpoint 6.2.1**: 큰 빗방울과 작은 빗방울(둘 다 구형) 중 어느 것의 종단 속력이 더 큰가?

→ 큰 빗방울! 질량은 $r^3$에, 단면적은 $r^2$에 비례하므로 $v_t \propto \sqrt{r}$

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**고양이 낙하 이야기**: 약 6층 높이에서 $v_t$에 도달. 가속을 감지하면 몸을 웅크려 $A$를 줄이지만, $v_t$ 도달 후에는 몸을 펴서 $A$를 늘리고 $v_t$를 줄여 착지 충격을 감소시킨다!

</div>

</v-click>

</div>
</div>

---
layout: section
---

# 6.3 등속 원운동

Uniform Circular Motion

---

# 등속 원운동과 구심력 (Centripetal Force)

<div class="grid grid-cols-2 gap-8">
<div>

Ch.4에서 배운 내용 복습:

반지름 $R$, 일정한 속력 $v$로 원운동하는 물체의 **구심 가속도**:

$$
\boxed{a = \frac{v^2}{R}} \tag{6.3.1}
$$

<v-click>

뉴턴의 제2법칙으로 **구심력**:

$$
\boxed{F = m\frac{v^2}{R}} \tag{6.3.2}
$$

</v-click>

<v-clicks>

- $\vec{a}$와 $\vec{F}$의 방향: 항상 **원의 중심**을 향함
- "구심(centripetal)"은 방향을 뜻할 뿐, 새로운 종류의 힘이 아님!
- 구심력의 정체: 마찰력, 중력, 장력, 수직항력 등

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0603f001-003_high_resolution.jpg" class="max-h-80 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.3.1 — 줄에 매달린 퍽의 등속 원운동. 구심력 = 줄의 장력 T (중심 방향)</div>

</v-click>

</div>
</div>

---

# 구심력의 예 (Examples of Centripetal Force)

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

### 1. 자동차의 곡선 주행

<v-clicks>

- 구심력 = 타이어와 도로 사이의 **마찰력**
- 뒷좌석에서 벽에 밀리는 느낌 → 마찰력 부족으로 직진하려는 관성!
- 마찰력이 충분하지 않으면 → 미끄러짐

$$f_s = m\frac{v^2}{R} \leq \mu_s F_N$$

$$v_{\max} = \sqrt{\mu_s g R}$$

</v-clicks>

### 2. 지구 궤도 우주선

<v-click>

- 구심력 = **중력**
- 우주인이 "무중력" 상태를 느끼는 이유: 우주인과 우주선이 같은 가속도로 자유낙하

</v-click>

</div>
<div>

<v-click>

<div class="p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**핵심 아이디어:**

구심력은 새로운 종류의 힘이 아니다. 물체를 원운동시키는 **알짜힘의 구심 방향 성분**을 부르는 이름이다.

구심력이 없으면 물체는 접선 방향으로 **직선 운동**한다!

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg">

**Checkpoint 6.3.1**: 관람차(Ferris wheel)에서 등속 회전 시:
- 꼭대기: $\vec{a}$는 아래, $F_N < mg$ → "가벼움"
- 바닥: $\vec{a}$는 위, $F_N > mg$ → "무거움"
- 가속도 크기는 양쪽에서 **같다**

</div>

</v-click>

</div>
</div>

---

# 예제: 수직 원형 루프 (Sample Problem 6.3.1)

<div class="text-sm">

1901년 서커스에서 Diavolo가 자전거를 타고 반지름 $R = 2.7$ m 수직 원형 루프를 돌았다.
루프 꼭대기에서 접촉을 유지하기 위한 **최소 속력** $v$는?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

꼭대기에서의 자유물체도:

- 중력 $F_g = mg$ → 아래 (중심 방향)
- 수직항력 $F_N$ → 아래 (루프가 위에서 누름)

뉴턴 제2법칙 (구심 방향 = 아래):

$$F_N + mg = m\frac{v^2}{R} \tag{6.3.3}$$

**접촉 유지의 한계**: $F_N = 0$

$$mg = m\frac{v^2}{R} \implies v = \sqrt{gR} = \sqrt{(9.8)(2.7)}$$

$$\boxed{v = 5.1 \text{ m/s}}$$

</v-clicks>

</div>
<div>

<v-click>

<img src="/img/c0603f002_high_resolution.jpg" class="max-h-72 rounded-lg" />

<div class="text-xs text-gray-400 mt-1">Fig 6.3.2 — (a) Diavolo 서커스 포스터 (b) 꼭대기에서의 자유물체도</div>

</v-click>

<v-click>

<div class="mt-2 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주목**: 최소 속력 $v = \sqrt{gR}$은 **질량에 무관**!
Diavolo가 파이를 잔뜩 먹어도 필요한 최소 속력은 같다.

</div>

</v-click>

</div>
</div>

---

# 예제: 우주정거장 우주인 (Sample Problem 6.3.2)

<div class="text-sm">

Sally(79.0 kg)가 고도 $h = 520$ km, 속력 $v = 7.60$ km/s로 ISS에서 지구 궤도를 돈다.
(a) 가속도는? (b) 지구가 Sally에게 가하는 힘은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**(a) 구심 가속도:**

$$a = \frac{v^2}{R} = \frac{v^2}{R_E + h}$$

$$= \frac{(7.60 \times 10^3)^2}{6.37 \times 10^6 + 0.52 \times 10^6}$$

$$\boxed{a = 8.38 \text{ m/s}^2}$$

이것은 해당 고도에서의 **자유낙하 가속도** $g$!

</v-clicks>

</div>
<div>

<v-click>

**(b) 지구가 가하는 힘** (= 중력 = 구심력):

$$F_g = ma = (79.0)(8.38)$$

$$\boxed{F_g = 662 \text{ N}}$$

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

지상에서 체중계로 재면 약 662 N이지만, 궤도에서 체중계는 **0**을 가리킨다!
→ Sally와 체중계가 **같은 가속도**로 자유낙하하므로 발이 체중계를 누르지 않는다.

</div>

</v-click>

</div>
</div>

---

# 연습 문제 1: 경사면과 마찰

<div class="text-sm">

80 N 무게의 펭귄 썰매가 $\theta = 20°$ 경사면에 놓여 있다. $\mu_s = 0.30$, $\mu_k = 0.15$.
(a) 썰매가 미끄러지지 않게 하려면, 경사면 위 방향으로 가해야 할 최소 힘 $F$는?
(b) 썰매를 경사면 위로 움직이기 시작하게 하는 최소 힘은?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-click>

**(a) 아래로 미끄러지지 않게:**

수직: $F_N = mg\cos\theta = 80\cos 20° = 75.2$ N

경사면 아래 방향 힘: $mg\sin\theta = 80\sin 20° = 27.4$ N

최대 정지마찰력(위 방향): $f_{s,\max} = \mu_s F_N = (0.30)(75.2) = 22.6$ N

마찰력만으로 부족! → 필요 외력:

$$F = mg\sin\theta - f_{s,\max} = 27.4 - 22.6$$

$$\boxed{F = 4.8 \text{ N}}$$

</v-click>

</div>
<div>

<v-click>

**(b) 위로 움직이기 시작:**

이제 마찰력은 **아래 방향** (운동 반대):

$$F = mg\sin\theta + f_{s,\max}$$

$$= 27.4 + 22.6$$

$$\boxed{F = 50.0 \text{ N}}$$

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg">

**핵심**: 마찰력의 **방향**이 상황에 따라 바뀐다!
(a)에서는 미끄러짐을 막는 방향(위), (b)에서는 운동을 막는 방향(아래)

</div>

</v-click>

</div>
</div>

---

# 연습 문제 2: 등속 원운동과 마찰

<div class="text-sm">

자동차가 반지름 $R = 25.5$ m의 **수평** 비경사 원형 커브를 돈다.
타이어와 도로 사이 $\mu_s = 0.60$. 미끄러지지 않는 최대 속력은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-click>

**분석:** 구심력 = 정지마찰력 (수평 방향)

수직 방향: $F_N = mg$

구심 방향:

$$f_s = m\frac{v^2}{R}$$

미끄러짐 한계: $f_s = f_{s,\max} = \mu_s F_N = \mu_s mg$

$$\mu_s mg = m\frac{v^2}{R} \implies v = \sqrt{\mu_s g R}$$

$$= \sqrt{(0.60)(9.8)(25.5)} \implies \boxed{v = 12.2 \text{ m/s} \approx 44 \text{ km/h}}$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**주목할 점:**
- 최대 속력은 **질량에 무관** ($m$이 소거됨)
- 비 오는 날 $\mu_s$가 감소하면 → $v_{\max}$도 감소
- $R$이 크면 → 더 빠르게 돌 수 있다

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**경사 도로(banked curve)의 경우:**
고속도로 진입/출구 커브는 노면을 기울여(banking) 수직항력의 수평 성분이 구심력을 보조하도록 설계한다. → 마찰 없이도 안전 주행 가능!

</div>

</v-click>

</div>
</div>

---

# 연습 문제 3: 관람차 (Ferris Wheel)

<div class="text-sm">

700 N 무게의 학생이 반지름 10 m 관람차에 등속으로 탑승. 꼭대기에서 수직항력 $F_N = 556$ N.

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-click>

**(a) 꼭대기에서 "가벼운" 느낌인가?**

$F_N = 556$ N $< W = 700$ N → **네, 가볍게 느낀다!**

</v-click>

<v-click>

**(b) 바닥에서 $F_N$은?**

꼭대기 (구심 방향 = 아래):

$$mg - F_{N,\text{top}} = m\frac{v^2}{R} \implies 700 - 556 = \frac{700}{9.8}\frac{v^2}{10}$$

$\implies v^2 = 20.16$ m$^2$/s$^2$

바닥 (구심 방향 = 위):

$$F_{N,\text{bot}} = mg + m\frac{v^2}{R} = 700 + \frac{700}{9.8}\frac{20.16}{10}$$

$$\boxed{F_{N,\text{bot}} = 844 \text{ N}}$$

</v-click>

</div>
<div>

<v-click>

**(c) 속력이 2배면?**

$v^2$이 4배 → $m\frac{v^2}{R}$이 4배:

꼭대기: $F_{N} = 700 - 4(144) = 124$ N

바닥: $F_{N} = 700 + 4(144) = 1276$ N

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**위치별 수직항력 비교:**
- 꼭대기: $F_N < mg$ → "가벼운" 느낌
- 바닥: $F_N > mg$ → "무거운" 느낌
- 꼭대기에서 $F_N = 0$이면 → 좌석에서 뜨기 직전!

</div>

</v-click>

</div>
</div>

---

# 문제 풀이 전략: 마찰 + 뉴턴 법칙

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

### Step 1: 자유물체도 (FBD)

<v-clicks>

- 물체에 작용하는 **모든 힘**을 그린다
- 중력, 수직항력, 마찰력, 외력 등
- 좌표축 설정 (경사면 문제는 경사면 방향이 편리)

### Step 2: 마찰력 판단

- 물체가 정지 → $f_s$ ($\leq \mu_s F_N$)
- 물체가 미끄러짐 → $f_k = \mu_k F_N$
- **미끄러지는가 확인**: 외력의 표면 평행 성분과 $f_{s,\max}$ 비교

### Step 3: 뉴턴 제2법칙

- 각 축 방향으로 $F_{\text{net}} = ma$ 적용
- 정지: $a = 0$, 운동: $a \neq 0$

</v-clicks>

</div>
<div>

<v-click>

### 원운동 문제의 경우

- 구심 방향(반지름 방향)을 한 축으로 설정
- $F_{\text{net,centripetal}} = \frac{mv^2}{R}$
- 접선 방향: $F_{\text{net,tangential}} = ma_t$ (등속이면 0)

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-500 bg-opacity-10 rounded-lg">

**자주 하는 실수:**
1. $f_s = \mu_s F_N$으로 바로 쓰는 것 → $f_s \leq \mu_s F_N$!
2. 경사면에서 $F_N = mg$로 쓰는 것 → $F_N = mg\cos\theta$!
3. 구심력을 FBD에 **별도의 힘**으로 추가하는 것 → 구심력은 알짜힘의 성분!

</div>

</v-click>

</div>
</div>

---

# 추가 예제: 경사 도로 커브

<div class="text-sm">

경사각 $\theta$로 기울어진 원형 도로(반지름 $R$)에서 마찰 없이 등속 원운동하려면 속력 $v$는?

</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div>

<v-click>

**자유물체도:**

- 중력: $mg$ (아래)
- 수직항력: $F_N$ (노면에 수직)
- 마찰력: 없음

수직 방향 ($a_y = 0$):

$$F_N\cos\theta = mg \tag{1}$$

수평 방향 (구심 방향):

$$F_N\sin\theta = \frac{mv^2}{R} \tag{2}$$

</v-click>

<v-click>

(2) $\div$ (1):

$$\tan\theta = \frac{v^2}{gR} \implies \boxed{v = \sqrt{gR\tan\theta}}$$

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg">

**설계 원리:**
- 설계 속력 $v$와 반지름 $R$이 정해지면 경사각 결정:

$$\theta = \tan^{-1}\!\left(\frac{v^2}{gR}\right)$$

- 고속도로 IC 커브: $v = 60$ km/h, $R = 200$ m이면 $\theta \approx 8°$

</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500 bg-opacity-10 rounded-lg text-sm">

**마찰이 있는 경우:**
- $v > \sqrt{gR\tan\theta}$: 마찰력이 경사면 아래 방향(안쪽)으로 작용하여 미끄러짐 방지
- $v < \sqrt{gR\tan\theta}$: 마찰력이 경사면 위 방향(바깥)으로 작용

</div>

</v-click>

</div>
</div>

---

# 추가 예제: 항력과 종단 속력

<div class="text-sm">

스카이다이버(75 kg)의 유효 단면적 $A = 0.70$ m$^2$, 항력 계수 $C = 0.60$, 공기 밀도 $\rho = 1.21$ kg/m$^3$.
종단 속력은?

</div>

<div class="grid grid-cols-2 gap-6">
<div>

<v-click>

$$v_t = \sqrt{\frac{2F_g}{C\rho A}} = \sqrt{\frac{2(75)(9.8)}{(0.60)(1.21)(0.70)}} = \sqrt{\frac{1470}{0.5082}}$$

$$\boxed{v_t \approx 54 \text{ m/s} \approx 194 \text{ km/h}}$$

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-sm">

**비교**: 낙하산 전개 시 $A$가 ~30배 증가
→ $v_t \propto 1/\sqrt{A}$이므로 $v_t$는 $\sqrt{30} \approx 5.5$배 감소
→ 약 10 m/s ≈ 36 km/h로 안전 착지

</div>

</v-click>

</div>
<div>

<v-click>

<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**낙하 중 속도 변화:**

| 시간 | 속도 | 가속도 | 항력 |
|------|------|--------|------|
| $t = 0$ | 0 | $g$ | 0 |
| 초반 | 증가 | $< g$ | 증가 |
| $t \to \infty$ | $v_t$ | 0 | $mg$ |

속도는 지수적으로 $v_t$에 접근:

$$v(t) = v_t\left(1 - e^{-t/\tau}\right)$$

여기서 $\tau = \frac{2m}{C\rho A v_t}$ (특성 시간)

</div>

</v-click>

</div>
</div>

---

# 복습 & 요약

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 마찰력 (Friction)
- **정지마찰력**: $f_s \leq \mu_s F_N$ (움직이지 않을 때)
- **운동마찰력**: $f_k = \mu_k F_N$ (미끄러질 때)
- 일반적으로 $\mu_k < \mu_s$
- 방향: 항상 표면에 평행, 운동(또는 운동 경향) 반대

### 항력과 종단 속력
- 항력: $D = \frac{1}{2}C\rho Av^2$
- 종단 속력: $v_t = \sqrt{\frac{2F_g}{C\rho A}}$
- $D = F_g$일 때 가속도 = 0 → 등속

</div>
<div>

### 등속 원운동
- 구심 가속도: $a = v^2/R$ (중심 방향)
- 구심력: $F = mv^2/R$ (중심 방향)
- 구심력은 별도의 힘이 **아님** → 알짜힘의 구심 성분

### 핵심 포인트
- 마찰력 문제: FBD → 미끄러짐 여부 판단 → $\vec{F}_{\text{net}} = m\vec{a}$
- 항력: $v^2$에 비례, 단면적에 비례
- 원운동: 속력 일정이어도 방향 변화 → 가속도 존재
- 경사 커브: $\tan\theta = v^2/(gR)$

</div>
</div>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 6: 힘과 운동 II (Force and Motion II) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 7 — 운동 에너지와 일 (Kinetic Energy and Work)

</div>
