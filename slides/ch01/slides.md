---
theme: default
background: https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920
title: "Chapter 1: 측정 (Measurement)"
info: |
  일반물리 I — Chapter 1: 측정 (Measurement)
  Principles of Physics, 12th Edition
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Chapter 1: 측정 (Measurement)

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

# 물리학이란? (What Is Physics?)

<v-clicks>

- 과학과 공학은 **측정(measurement)** 과 **비교(comparison)** 에 기반한다
- 측정 방법에 대한 **규칙(rules)** 과 측정 단위를 세우기 위한 **실험(experiments)** 이 필요하다
- 물리학의 목적 중 하나: 이러한 규칙과 단위를 제공하는 것

</v-clicks>

<div v-click class="mt-8 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

> 물리량(physical quantity)을 측정하려면 **단위(unit)** 와 **표준(standard)** 이 필요하다

</div>

<v-clicks>

- **단위(Unit)**: 물리량에 부여하는 고유한 이름 (예: 길이 → meter)
- **표준(Standard)**: 정확히 1.0 단위에 해당하는 기준

</v-clicks>

---

# 기본 물리량 (Base Quantities)

물리량이 매우 많으므로, 소수의 **기본량(base quantities)** 을 선택하여 표준을 정의하고, 나머지는 이로부터 유도한다.

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

### 기본량 (Base Quantities)
- 길이 (Length)
- 시간 (Time)
- 질량 (Mass)

### 유도량 (Derived Quantities)
- 속력 = 길이 / 시간
- 밀도 = 질량 / 부피 등

</div>
<div>

### 좋은 표준의 조건

<v-clicks>

1. **접근 가능(Accessible)**: 누구나 사용할 수 있어야 함
2. **불변(Invariable)**: 시간이 지나도 변하지 않아야 함

</v-clicks>

<div v-click class="mt-4 text-sm text-gray-400">

예: "코에서 손끝까지 거리"는 접근 가능하지만 불변이 아님!

</div>

</div>
</div>

---

# 국제단위계 (SI Units)

**SI** (Système International d'Unités) — 국제 협약에 의해 정해진 단위계

<div class="mt-6">

| 물리량 (Quantity) | 단위 이름 (Unit Name) | 기호 (Symbol) |
|---|---|---|
| 길이 (Length) | meter | m |
| 시간 (Time) | second | s |
| 질량 (Mass) | kilogram | kg |

</div>

<v-click>

<div class="mt-6 p-4 bg-green-500 bg-opacity-10 rounded-lg">

**핵심**: 모든 물리적 측정은 기본 물리량의 표준으로부터 파생된다.

과학적 표기법(scientific notation)과 SI 접두어(prefix)를 사용하여 측정 표기를 간소화한다.

</div>

</v-click>

---

# SI 접두어 (Prefixes)

각 접두어는 $10$의 거듭제곱을 나타낸다. &nbsp; 예: $1.27 \times 10^9 \text{ W} = 1.27 \text{ GW}$, &ensp; $2.35 \times 10^{-9} \text{ s} = 2.35 \text{ ns}$

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

| 접두어 | 기호 | 배수 |
|---|---|---|
| tera | T | $10^{12}$ |
| giga | G | $10^{9}$ |
| mega | M | $10^{6}$ |
| kilo | k | $10^{3}$ |
| centi | c | $10^{-2}$ |
| milli | m | $10^{-3}$ |

</div>
<div>

| 접두어 | 기호 | 배수 |
|---|---|---|
| micro | μ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| pico | p | $10^{-12}$ |
| femto | f | $10^{-15}$ |

</div>
</div>

---

# 단위 변환: Chain-Link Conversion

단위를 변환할 때, **변환 인수(conversion factor)** 를 곱하여 원하는 단위를 얻는다.

<v-clicks>

**핵심 원리**: 변환 인수는 **1과 같은 비율**이다.

$$
\frac{1 \text{ min}}{60 \text{ s}} = 1 \quad \text{그리고} \quad \frac{60 \text{ s}}{1 \text{ min}} = 1
$$

따라서 어떤 양에 변환 인수를 곱해도 그 양은 변하지 않는다.

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-yellow-500 bg-opacity-10 rounded-lg">

**방법**: 원래 데이터에 변환 인수를 연쇄적으로 곱하여, 원하지 않는 단위가 소거되도록 한다.

$$
2 \text{ min} = (2 \text{ min}) \times \left(\frac{60 \text{ s}}{1 \text{ min}}\right) = 120 \text{ s}
$$

</div>

</v-click>

<v-click>

<div class="mt-4 text-sm text-gray-400">

💡 단위가 소거되지 않으면, 변환 인수를 뒤집어서 다시 시도하면 된다!

</div>

</v-click>

---

# 단위 변환 예제

<div class="grid grid-cols-2 gap-8">
<div>

### 예제 1: 100 yard vs 100 meter

1959년 법적 정의: $1 \text{ yd} = 0.9144 \text{ m}$

$$
100 \text{ yd} = 100 \times 0.9144 \text{ m} = 91.44 \text{ m}
$$

<v-click>

따라서 100 yard 달리기는 100 m 달리기보다 짧다:

$$
\Delta L = 100 \text{ m} - 91.44 \text{ m} = 8.56 \text{ m}
$$

</v-click>

</div>
<div>

<v-click>

### 예제 2: Pheidippides의 속력

마라톤(Marathon) → 아테네(Athens): 약 40 km를 3시간에 달림

$$
v = \frac{40 \text{ km}}{3 \text{ h}} \approx 13 \text{ km/h}
$$

Chain-link로 m/s로 변환:

$$
13 \frac{\text{km}}{\text{h}} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} \approx 3.6 \text{ m/s}
$$

</v-click>

</div>
</div>

---
layout: section
---

# 1.1 길이 (Length)

미터(meter)의 정의와 역사

---

# 미터(Meter)의 역사적 변천

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="p-3 bg-gray-500 bg-opacity-10 rounded-lg text-center">

### 1792
**미터 원기 (Meter Bar)**

지구 자오선의 $1/10{,}000{,}000$

</div>
<div class="p-3 bg-gray-500 bg-opacity-10 rounded-lg text-center">

### 1960
**Krypton-86 파장**

Kr-86 특정 파장의 $1{,}650{,}763.73$ 배

</div>
<div class="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-center">

### 1983
**빛의 속력**

빛이 $1/299{,}792{,}458$ 초 동안 이동한 거리

</div>
</div>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

**현재 정의**: 미터는 빛이 진공에서 $\frac{1}{299\,792\,458}$ 초 동안 이동하는 경로의 길이이다.
&ensp; $c = 299\,792\,458$ m/s (정확한 값, 정의에 의해)

</div>

</v-click>

---

# 다양한 길이 스케일

우주에서 양성자까지 — 약 **45 자릿수(orders of magnitude)** 에 걸친 길이

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

| 대상 | 길이 (m) |
|---|---|
| 관측 가능한 우주 | $\sim 10^{26}$ |
| 우리 은하 반경 | $\sim 10^{20}$ |
| 지구-태양 거리 | $\sim 10^{11}$ |
| 지구 반경 | $\sim 10^{7}$ |

</div>
<div>

| 대상 | 길이 (m) |
|---|---|
| 사람 키 | $\sim 10^{0}$ |
| 세포 크기 | $\sim 10^{-5}$ |
| 원자 크기 | $\sim 10^{-10}$ |
| 양성자 반경 | $\sim 10^{-15}$ |

</div>
</div>

<v-click>

<div class="mt-2 text-sm text-gray-400">

**Order of magnitude**: $10$의 거듭제곱으로 크기를 어림하는 것. 정밀한 값보다 규모 파악이 목적.

</div>

</v-click>

---

# 유효숫자 (Significant Figures)

<div class="grid grid-cols-2 gap-8">
<div>

### 유효숫자란?

측정값에서 **의미 있는 자릿수**의 개수

<v-clicks>

- 계산 결과의 자릿수는 주어진 데이터의 유효숫자로 제한된다
- **유효숫자 ≠ 소수점 자릿수**

</v-clicks>

<v-click>

| 값 | 유효숫자 | 소수점 자릿수 |
|---|---|---|
| 35.6 mm | 3 | 1 |
| 3.56 m | 3 | 2 |
| 0.00356 m | 3 | 5 |

</v-click>

</div>
<div>

<v-click>

### 규칙

1. 0이 아닌 숫자는 항상 유효
2. 숫자 사이의 0은 유효
3. 소수점 아래 마지막 0은 유효
4. 소수점 없는 끝자리 0은 모호

**예시**:
- $1300$: 유효숫자 2개? 3개? 4개? → 모호!
- $1.300 \times 10^3$: 유효숫자 **4개** (명확)

</v-click>

</div>
</div>

---

# 예제: 실 뭉치의 길이 추정 (Sample Problem 1.1.1)

세계에서 가장 큰 실 뭉치의 반지름이 약 $R = 2$ m이다. 실의 총 길이 $L$은 대략 얼마인가?

<v-clicks>

**가정:** 공 모양 (부피 $\approx \frac{4}{3}\pi R^3 \approx 4R^3$), 실의 단면을 한 변 $d = 4$ mm인 정사각형으로 근사

**풀이:** 실이 차지하는 부피 $V_{\text{string}} = d^2 L$을 공의 부피와 같다고 놓으면:

$$
d^2 L = 4R^3 \quad \Rightarrow \quad L = \frac{4R^3}{d^2} = \frac{4 \times (2)^3}{(4 \times 10^{-3})^2} = \frac{32}{16 \times 10^{-6}} = 2 \times 10^6 \text{ m}
$$

</v-clicks>

<v-click>

<div class="p-3 bg-green-500 bg-opacity-10 rounded-lg mt-2">

**결과**: $L \approx 10^6$ m $= 10^3$ km — 약 **1000 km**의 실! &ensp; 이것이 **order of magnitude estimation** (크기 추정)의 위력이다.

</div>

</v-click>

---
layout: section
---

# 1.2 시간 (Time)

초(second)의 정의와 원자시계

---

# 시간 측정의 두 가지 측면

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

### 시각 (Time of Day)

<v-clicks>

- 사건을 **순서대로 배열**하기 위함
- 달력, 시계
- 일상 및 행정 목적

</v-clicks>

</div>
<div>

### 시간 간격 (Duration)

<v-clicks>

- 사건이 **얼마나 오래 지속되는지**
- 과학적 실험에서 더 중요
- 극도로 높은 정밀도 요구

</v-clicks>

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-blue-500 bg-opacity-10 rounded-lg">

어떤 시간 표준이든 **반복 가능한(repeatable)** 사건이 필요하다.

- 과거: 지구의 자전 → 하루(day)
- 현재: 원자의 진동 → 훨씬 더 정밀!

</div>

</v-click>

---

# 초(Second)의 정의

### Cesium-133 원자시계

<div class="mt-4">

> **1초**는 세슘-133 원자의 바닥상태의 두 초미세 준위 사이의 전이에 대응하는 복사선의 **9,192,631,770** 주기의 지속 시간이다.
>
> — 제13차 국제도량형총회 (1967)

</div>

<v-click>

<div class="mt-6 grid grid-cols-2 gap-8">
<div>

### 원자시계의 정밀도

- 두 세슘 시계를 약 **6000년** 동안 가동해야 1초 차이 발생
- 차세대 시계: 정밀도 $\sim 10^{-18}$ → $10^{18}$ 초 ($\approx 3 \times 10^{10}$ 년)에 1초 오차

</div>
<div>

### 실생활 응용

- **GPS**: 원자시계 기반 위치 결정
- **UTC**: 협정 세계시
- 금융 거래 시각 동기화

</div>
</div>

</v-click>

---

# 다양한 시간 스케일

<div class="grid grid-cols-2 gap-4 mt-2">
<div>

| 현상 | 시간 (s) |
|---|---|
| 양성자의 수명 (예측) | $\sim 3 \times 10^{40}$ |
| 우주의 나이 | $\sim 5 \times 10^{17}$ |
| 인간의 기대수명 | $\sim 2 \times 10^{9}$ |
| 하루 | $\sim 9 \times 10^{4}$ |
| 심장 박동 간격 | $\sim 0.8$ |

</div>
<div>

| 현상 | 시간 (s) |
|---|---|
| 뮤온(muon) 수명 | $\sim 2 \times 10^{-6}$ |
| 최단 레이저 펄스 | $\sim 10^{-16}$ |
| 최불안정 입자 수명 | $\sim 10^{-23}$ |
| 플랑크 시간 | $\sim 10^{-43}$ |

</div>
</div>

<v-click>

<div class="mt-2 text-sm text-gray-400">

**플랑크 시간(Planck time)**: 빅뱅 이후 물리 법칙이 적용될 수 있는 가장 이른 시간

</div>

</v-click>

---

# 원자시계와 실생활

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### GPS와 원자시계

<v-clicks>

- GPS 위성에는 원자시계가 탑재됨
- 위성 신호의 **시간 차이**로 위치를 계산
- $1 \text{ ns}$의 오차 → 약 $30 \text{ cm}$의 위치 오차
- 일반상대론 보정 필수!

</v-clicks>

</div>
<div>

### 지구 자전의 불규칙성

<v-clicks>

- 원자시계와 비교하면, 하루의 길이가 계절에 따라 변함
- 원인: 달의 조석력, 대규모 바람
- 100년 후 하루는 약 1 ms 더 길어짐

</v-clicks>

</div>
</div>

<v-click>

<div class="mt-6 p-4 bg-yellow-500 bg-opacity-10 rounded-lg text-center">

원자시계가 지구 자전보다 훨씬 더 정밀한 시간 표준임을 보여준다!

</div>

</v-click>

---
layout: section
---

# 1.3 질량 (Mass)

킬로그램의 정의와 밀도

---

# 킬로그램(Kilogram)의 정의

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 국제 킬로그램 원기

<v-clicks>

- 백금-이리듐(Pt-Ir) 합금 실린더
- 높이 = 지름 = 3.9 cm
- 파리 근처 국제도량형국(BIPM)에 보관
- 1889년부터 사용

</v-clicks>

</div>
<div>

<v-click>

### Kibble Balance (키블 저울)

- 전기적 방법으로 질량을 더 정밀하게 측정
- 2019년부터 **플랑크 상수** $h$를 기반으로 kg 재정의

$h = 6.626\ 070\ 15 \times 10^{-34}$ J·s

(정확한 값, 정의에 의해)

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

**원자 질량 단위(amu)**: $1 \text{ u} = 1.660\,539 \times 10^{-27}$ kg — 탄소-12 원자 질량의 $1/12$

</div>

</v-click>

---

# 다양한 질량 스케일

약 **83 자릿수(orders of magnitude)** 에 걸친 질량

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

| 대상 | 질량 (kg) |
|---|---|
| 알려진 우주 | $\sim 10^{53}$ |
| 우리 은하 | $\sim 2 \times 10^{41}$ |
| 태양 | $\sim 2 \times 10^{30}$ |
| 달 | $\sim 7 \times 10^{22}$ |

</div>
<div>

| 대상 | 질량 (kg) |
|---|---|
| 코끼리 | $\sim 5 \times 10^{3}$ |
| 포도 한 알 | $\sim 3 \times 10^{-3}$ |
| 우라늄 원자 | $\sim 4 \times 10^{-25}$ |
| 전자 | $\sim 9 \times 10^{-31}$ |

</div>
</div>

<v-click>

<div class="mt-6 p-3 bg-green-500 bg-opacity-10 rounded-lg">

**관점**: 전자($10^{-31}$ kg)에서 우주($10^{53}$ kg)까지, 질량의 범위는 길이나 시간만큼 광대하다!

</div>

</v-click>

---

# 밀도 (Density)

<div class="grid grid-cols-2 gap-6">
<div>

물질의 단위 부피당 질량

$$
\boxed{\rho = \frac{m}{V}}
$$

- $\rho$: 밀도 (density), 단위: kg/m³
- $m$: 질량, $V$: 부피

<div class="mt-2 text-sm text-gray-400">

참고: $1 \text{ g/cm}^3 = 1000 \text{ kg/m}^3$

</div>

</div>
<div>

<v-click>

### 주요 물질의 밀도

| 물질 | kg/m³ | g/cm³ |
|---|---|---|
| 공기 | $1.2$ | $0.0012$ |
| 물 | $1000$ | $1.00$ |
| 철 | $7870$ | $7.87$ |
| 금 | $19\,320$ | $19.32$ |
| 지구 (평균) | $5500$ | $5.50$ |

</v-click>

</div>
</div>

---

# 예제: 금 박막과 금 와이어 (Problem 8)

금의 밀도: $\rho = 19.32 \text{ g/cm}^3$, 금 시료 질량: $m = 29.90 \text{ g}$

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### (a) 두께 $t = 1.000 \text{ μm}$인 박막의 넓이

<v-clicks>

부피: $V = \frac{m}{\rho} = \frac{29.90}{19.32} = 1.548 \text{ cm}^3$

넓이:

$$
A = \frac{V}{t} = \frac{1.548 \text{ cm}^3}{1.000 \times 10^{-4} \text{ cm}}
$$

$$
= 1.548 \times 10^4 \text{ cm}^2 \approx 1.5 \text{ m}^2
$$

</v-clicks>

</div>
<div>

<v-click>

### (b) 반지름 $r = 2.500 \text{ μm}$인 와이어의 길이

부피 동일: $V = 1.548 \text{ cm}^3$

단면적: $A = \pi r^2 = \pi (2.500 \times 10^{-4})^2 \text{ cm}^2$

$$
L = \frac{V}{\pi r^2} = \frac{1.548}{\pi \times 6.25 \times 10^{-8}}
$$

$$
\approx 7.9 \times 10^6 \text{ cm} = 79 \text{ km}
$$

</v-click>

</div>
</div>

<v-click>

<div class="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg text-center">

금은 가장 전성(ductile)이 좋은 금속 — 아주 얇거나 길게 만들 수 있다!

</div>

</v-click>

---

# Review & Summary

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### 물리학의 기초
- 물리량의 **측정**에 기반
- **기본량**(base quantities)에 표준과 단위 부여
- 다른 물리량은 기본량으로부터 유도

### SI 단위
- **길이**: meter (m)
- **시간**: second (s)
- **질량**: kilogram (kg)

### 단위 변환
- **Chain-link conversion**: 변환 인수(=1)를 연쇄적으로 곱함

</div>
<div>

### 길이 (Length)
- 미터: 빛이 $\frac{1}{299\,792\,458}$ s 동안 이동하는 거리

### 시간 (Time)
- 초: 세슘-133 원자의 $9\,192\,631\,770$ 진동 주기

### 질량 (Mass)
- 킬로그램: 플랑크 상수 $h$ 기반으로 정의 (2019~)

### 밀도 (Density)

$$
\rho = \frac{m}{V}
$$

</div>
</div>

---

# 연습 문제

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 문제 1: Fortnight

1 fortnight = 2.0 weeks. 1 fortnight은 몇 **마이크로초(μs)** 인가?

<v-click>

**풀이:**

$$
2.0 \text{ weeks} \times \frac{7 \text{ d}}{1 \text{ week}} \times \frac{24 \text{ h}}{1 \text{ d}} \times \frac{3600 \text{ s}}{1 \text{ h}} \times \frac{10^6 \text{ μs}}{1 \text{ s}}
$$

$$
= 1.2 \times 10^{12} \text{ μs}
$$

</v-click>

</div>
<div>

### 문제 2: 식물의 성장 속도

Hesperoyucca whipplei: 14일 동안 3.7 m 성장

성장 속도를 **μm/s** 단위로 구하라.

<v-click>

**풀이:**

$$
\frac{3.7 \text{ m}}{14 \text{ d}} = \frac{3.7 \text{ m}}{14 \times 86400 \text{ s}}
$$

$$
= 3.06 \times 10^{-6} \text{ m/s} = 3.1 \text{ μm/s}
$$

</v-click>

</div>
</div>

---

# 연습 문제 (계속)

### 문제 3: 철 원자의 크기 추정

철의 밀도: $\rho = 7.87 \text{ g/cm}^3$, 철 원자의 질량: $m = 9.27 \times 10^{-26}$ kg

원자들이 구형이고 밀집 배열되어 있다면, 원자의 부피와 인접 원자 사이의 거리를 구하라.

<v-clicks>

**(a) 원자 하나의 부피:**

$$
V = \frac{m}{\rho} = \frac{9.27 \times 10^{-26} \text{ kg}}{7870 \text{ kg/m}^3} = 1.18 \times 10^{-29} \text{ m}^3
$$

**(b) 인접 원자 사이의 거리** (구의 지름):

$$
V = \frac{4}{3}\pi r^3 \implies r = \left(\frac{3V}{4\pi}\right)^{1/3} = 1.41 \times 10^{-10} \text{ m}
$$

인접 원자 간 거리 $d = 2r = 2.82 \times 10^{-10}$ m $\approx 2.82$ Å

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-500 bg-opacity-10 rounded-lg text-sm">

이는 전형적인 원자 간 거리 $\sim 10^{-10}$ m = 1 Å (angstrom)과 일치한다!

</div>

</v-click>

---
layout: center
class: text-center
---

# 감사합니다

Chapter 1: 측정 (Measurement) 끝

<div class="mt-8 text-gray-400">

다음: Chapter 2 — 직선 운동 (Motion Along a Straight Line)

</div>