# 잇득 사장님 랜딩페이지 (Eatdeuk Shop Owner)

대학가 상권의 음식점 사장님을 대상으로 **오프라인 타임세일** 아이디어의 참여 수요를 검증하는 B2B 웹 프리토타입입니다.

## 서비스 구상 (현재 미운영)

1. 사장님이 방문이 뜸한 **비어있는 시간대**를 정합니다.
2. 그 시간에 운영할 **특정 메뉴와 포인트 적립 혜택**을 잇득에 등록합니다.
3. 잇득은 해당 메뉴를 **대학가 상권에 알리고 오프라인 매장 방문을 유도**하는 플랫폼을 지향합니다.

매장 홍보, 타임세일 메뉴 등록, 회원 로그인, 포인트 적립/정산 기능은 **아직 실제로 제공되지 않습니다.** 성과나 유입을 보장하지 않습니다.

## 입점 신청 설문

- **사장님용 설문:** https://forms.gle/2RmtbgTqBsGG73Sb6
- 홈/입점 안내의 CTA와 로그인 버튼은 모두 위 설문으로 이동합니다.
- 실제 입점 계약, 수수료, 운영 시간 및 초기 등록 혜택은 확정 전입니다.

## 기술 스택 / 디자인

기존 [잇득 소비자 랜딩 코드](https://github.com/machdid9un/eatdeuk-pretotyping)를 참고해 작성한 **Expo Router + React Native Web + TypeScript**입니다.

- 공식 Figma 로고 기반 브랜드 컬러: 초콜릿 브라운 `#5A2E1A`, 옐로우 `#FFD43B` (Figma node `11:215`).
- 랜딩페이지 적용: 브라운 배너와 버튼, 노란 포인트 CTA 및 배지, 따뜻한 아이보리 배경
- 모바일 우선, 최대 콘텐츠 너비 720px
- 페이지: `/`(홈) / `/guide`(입점 안내)
- 정적 사이트 빌드: `npm run build:web`

## 로컬 개발

```bash
npm install
npm run web
```

검증/빌드:

```bash
npm run lint
npm run typecheck
npm run build:web
```

## Vercel

이 저장소의 `main` 브랜치를 Vercel 프로젝트에 연결합니다. `vercel.json`에서 빌드 명령 `npm run build:web`, 배포 디렉터리 `dist`를 설정했습니다.

## 수정 위치

- 핵심 문구 및 서비스 흐름: `src/app/(tabs)/index.tsx`
- 운영 방식과 FAQ: `src/app/(tabs)/guide.tsx`
- 사장님용 브랜드 태그라인: `src/components/brand-header.tsx`
- 설문 링크: `src/constants/links.ts`

> **Pretotype 고지:** 기능·조건·혜택은 구상 단계이며, 실제 제공되는 것으로 오인되지 않게 해야 합니다. 메타 픽셀/전환 추적은 아직 미설정 상태입니다.
