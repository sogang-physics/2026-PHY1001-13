---
title: "회전 운동"
week: 5
chapters: "10장"
topics: "회전변수, 회전 운동에너지, 토크"
---

# 10장: 회전 운동

Rotation

---

## 회전 변수 (Rotational Variables)

- 각 위치 (angular position): $\theta$ [rad]
- 각 변위: $\Delta\theta = \theta_2 - \theta_1$
- 호의 길이와의 관계: $s = r\theta$

---

## 각속도와 각가속도

- 각속도 (angular velocity):

$$\omega = \frac{d\theta}{dt}$$

- 각가속도 (angular acceleration):

$$\alpha = \frac{d\omega}{dt}$$

---

<!-- blank -->
각속도·각가속도 연습

---

## 등각가속도 운동

직선 운동과의 대응:

| 직선 운동 | 회전 운동 |
|-----------|-----------|
| $x$ | $\theta$ |
| $v$ | $\omega$ |
| $a$ | $\alpha$ |
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ |
| $x = x_0 + v_0 t + \frac{1}{2}at^2$ | $\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2$ |

---

## 회전 운동에너지

- 질점의 회전 운동에너지:

$$K = \frac{1}{2}mv^2 = \frac{1}{2}m(r\omega)^2 = \frac{1}{2}mr^2\omega^2$$

- **관성 모멘트** (moment of inertia):

$$I = \sum_i m_i r_i^2$$

- 회전 운동에너지:

$$K = \frac{1}{2}I\omega^2$$

---

<!-- blank -->
관성 모멘트 계산

---

<!-- sim:rotation.html -->
관성 모멘트와 토크 시뮬레이션

---

## 토크 (Torque)

- 토크의 정의:

$$\tau = r F \sin\phi = r_\perp F = r F_\perp$$

- 벡터 형태:

$$\vec{\tau} = \vec{r} \times \vec{F}$$

- 뉴턴 제2법칙의 회전 버전:

$$\tau_{\text{net}} = I\alpha$$

---

<!-- sim:rotation.html -->
회전 운동 시뮬레이션

---

<!-- blank -->
토크 문제 풀이

---

## 정리

- 각 위치, 각속도, 각가속도는 직선 운동 변수와 대응
- 관성 모멘트 $I$는 질량 분포에 의존
- $\tau = I\alpha$: 회전 운동의 뉴턴 제2법칙
- 회전 운동에너지: $K = \frac{1}{2}I\omega^2$
