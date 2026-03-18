---
title: "힘과 운동 II"
week: 3
chapters: "6장"
topics: "마찰력, 항력과 종단속도, 등속 원운동"
---

# 6장: 힘과 운동 II

Force and Motion — II

---

## What Is Physics?

이번 장에서는 세 가지 중요한 힘을 다룬다:

- **마찰력** (Friction): 표면 사이의 접촉에 의한 힘
- **항력** (Drag force): 유체(공기, 물) 속에서 받는 저항력
- **구심력** (Centripetal force): 원운동을 유지시키는 힘

> 인디 500 레이스카 엔지니어는 이 세 가지를 모두 고려해야 한다: 타이어 마찰(커브), 공기 항력(연료 소비), 구심력(코너링).

---

# 6.1 마찰력

Friction

---

## 세 가지 사고 실험

1. 책을 테이블 위로 밀어 보낸다 → 멈춘다 (마찰력!)
2. 책을 등속으로 밀려면 → 일정한 힘 필요 (마찰력 = 가한 힘)
3. 무거운 상자를 세게 밀어도 안 움직인다 → 마찰력이 **증가**한다

**핵심:** 마찰력은 가한 힘에 따라 변할 수 있다!

---

## 정지마찰력 (Static Friction)

<img src="/img/ch06/c0601f001a-d_high_resolution.jpg" style="max-height:55vh">

---

## Breakaway — 정지 → 운동 전환

<img src="/img/ch06/c0601f001e-g_high_resolution.jpg" style="max-height:55vh">

---

## 마찰력의 성질

**Property 1:** 물체가 움직이지 않으면, 정지마찰력 $\vec{f}_s$는 가한 힘과 크기가 같고 반대 방향

**Property 2:** 정지마찰력의 최댓값:

$$f_{s,\max} = \mu_s F_N$$

**Property 3:** 물체가 미끄러지면 운동마찰력:

$$f_k = \mu_k F_N$$

- $\mu_s$: 정지마찰계수, $\mu_k$: 운동마찰계수
- 일반적으로 $\mu_s > \mu_k$

---

## 마찰력의 미시적 관점

- 두 표면의 미시적 접촉점에서 **cold-welding** 발생
- 실제 접촉 면적은 겉보기 면적보다 훨씬 작다
- 가한 힘이 용접점을 끊으면 → **breakaway**
- 운동 중에도 새로운 접촉점이 계속 생기고 끊어짐

<img src="/img/ch06/c0601f002_high_resolution.jpg" style="max-height:40vh">

---

<!-- sim:friction.html -->
마찰력 시뮬레이션

---

<!-- blank -->
### 예제: 수평면 위의 블록

질량 $m = 5.0$ kg인 블록이 수평 바닥에 놓여 있다. 바닥과 블록 사이의 정지마찰계수는 $\mu_s = 0.50$, 운동마찰계수는 $\mu_k = 0.30$이다.

**(a)** 블록을 움직이기 위해 필요한 최소 수평력은?

**(b)** 수평으로 $F = 30$ N의 힘을 가하면 블록의 가속도는?

---

## 예제: 경사진 힘과 마찰

<img src="/img/ch06/c0601f003_high_resolution.jpg" style="max-height:50vh">

각도 $\theta$로 아래 방향으로 힘 $F$를 가할 때:
- $F_x = F\cos\theta$, $F_y = F\sin\theta$
- $F_N = mg + F\sin\theta$
- $f_{s,\max} = \mu_s(mg + F\sin\theta)$

---

## 경사면에서의 마찰

<img src="/img/ch06/c0601f004b_high_resolution.jpg" style="max-height:45vh">

$$F_N = mg\cos\theta, \quad f_k = \mu_k mg\cos\theta$$

$$a = g(\sin\theta - \mu_k\cos\theta)$$

---

<!-- blank -->
### 예제: 경사면 위의 스노보더

질량 $m = 70$ kg인 스노보더가 경사각 $\theta = 18°$인 슬로프를 내려간다. 운동마찰계수는 $\mu_k = 0.040$이다.

**(a)** 슬로프 아래 방향의 가속도를 구하라.

**(b)** 마찰이 없다면 가속도는 얼마인가?

---

# 6.2 항력과 종단속도

The Drag Force and Terminal Speed

---

## 항력 (Drag Force)

유체(공기) 속을 이동하는 물체가 받는 저항력:

$$D = \frac{1}{2}C\rho A v^2$$

- $C$: 항력 계수 (drag coefficient, 0.4 ~ 1.0)
- $\rho$: 유체 밀도 (공기: 1.21 kg/m$^3$)
- $A$: 유효 단면적 (effective cross-sectional area)
- $v$: 물체의 속력

> 스키 선수가 웅크리는 이유: 단면적 $A$를 줄여 항력을 최소화!

---

## 종단속도 (Terminal Speed)

<img src="/img/ch06/c0602f002_high_resolution.jpg" style="max-height:45vh">

낙하하는 물체: 속력이 증가하면 항력도 증가 → 중력과 균형

$$mg - D = ma \quad \Rightarrow \quad mg = \frac{1}{2}C\rho Av_t^2$$

$$v_t = \sqrt{\frac{2mg}{C\rho A}}$$

---

## 종단속도 예시

| 물체 | 종단속도 (m/s) | 95% 도달 거리 (m) |
|------|-------------|---------------|
| 산탄 (shot put) | 145 | 2500 |
| 스카이다이버 | 60 | 430 |
| 야구공 | 42 | 210 |
| 테니스공 | 31 | 115 |
| 농구공 | 20 | 47 |
| 빗방울 | 7 | 6 |
| 낙하산 | 5 | 3 |

---

<!-- sim:terminal-velocity.html -->
종단속도 시뮬레이션

---

<!-- blank -->
### 예제: 낙하하는 고양이

떨어지는 고양이가 처음 종단속도 $v_{t_i} = 97$ km/h에 도달한 후 몸을 펼쳐 유효 단면적 $A$를 2배로 늘렸다.

**(a)** 새로운 종단속도 $v_{t_n}$을 구하라.

**(b)** 힌트: $v_t = \sqrt{2mg / C\rho A}$이므로, 비율 $v_{t_n}/v_{t_i}$를 이용하라.

---

# 6.3 등속 원운동

Uniform Circular Motion

---

## 구심가속도와 구심력

등속 원운동하는 물체:

$$a = \frac{v^2}{R} \quad \text{(구심가속도, 중심 방향)}$$

뉴턴 제2법칙:

$$F = \frac{mv^2}{R} \quad \text{(구심력)}$$

- **구심력은 새로운 종류의 힘이 아니다!**
- 마찰력, 장력, 중력 등이 구심력 역할을 할 수 있다

---

## 예: 줄에 묶인 퍽

<img src="/img/ch06/c0603f001_high_resolution.jpg" style="max-height:50vh">

줄의 장력 $T$가 구심력을 제공:

$$T = \frac{mv^2}{R}$$

줄이 끊어지면 → 퍽은 **접선 방향**으로 직진!

---

## 커브길 자동차

- 마찰력이 구심력 제공
- 최대 속력 조건: $\mu_s mg = \frac{mv^2}{R}$

$$v_{\max} = \sqrt{\mu_s g R}$$

- $\mu_s = 0.60$, $R = 50$ m이면:

$$v_{\max} = \sqrt{0.60 \times 9.8 \times 50} = 17.1 \text{ m/s} \approx 62 \text{ km/h}$$

> 비 오는 날 $\mu_s$가 줄어들면 → 최대 속력도 감소!

---

<!-- sim:circular-motion.html -->
원운동과 구심력 시뮬레이션

---

<!-- blank -->
### 예제: 수직 원형 루프

1901년 서커스 공연에서 자전거를 타고 반지름 $R = 2.7$ m인 수직 원형 루프를 돌았다.

**(a)** 루프 꼭대기에서 접촉을 유지하기 위한 최소 속력 $v$를 구하라.

**(b)** 힌트: 꼭대기에서 $F_N = 0$인 극한 조건을 생각하라.

---

# Review & Summary

---

## 정리: 마찰력

- **정지마찰력**: $f_s \le \mu_s F_N$ (가한 힘에 따라 변함)
- **운동마찰력**: $f_k = \mu_k F_N$ (일정)
- 일반적으로 $\mu_s > \mu_k$
- 마찰계수는 표면 쌍에 따라 결정 (차원 없음)

---

## 정리: 항력과 원운동

**항력:**

$$D = \frac{1}{2}C\rho Av^2$$

**종단속도:**

$$v_t = \sqrt{\frac{2mg}{C\rho A}}$$

**등속 원운동:**

$$a = \frac{v^2}{R}, \quad F = \frac{mv^2}{R}$$

- 구심력은 항상 원의 **중심 방향**
- 구심력이 사라지면 물체는 접선 방향으로 직진
