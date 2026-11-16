# 잇득 사장님 랜딩페이지 (Eatdeuk Shop Owner)

음식점 사장님의 초기 참여 의향을 확인하기 위한 **잇득 B2B 웹 프리토타입**입니다. 실제 가입, 쿠폰 발급, 포인트 적립, 대시보드 및 결제 기능은 구현하지 않았습니다.

## 기술 구성

기존 [소비자용 잇득 랜딩페이지](https://github.com/machdid9un/eatdeuk-pretotyping)를 기준으로 만든 Expo Router + React Native Web + TypeScript 프로젝트입니다.

- 브랜드 파란색: `#126BFF`
- 모바일 우선 화면 구성, 콘텐츠 최대 너비 720px
- 탭: 홈(`/`), 입점 안내(`/guide`)
- 로그인·사전등록·혜택 신청 버튼은 모두 사장님용 Google 설문으로 이동합니다.
- **사장님용 설문:** https://forms.gle/2RmtbgTqBsGG73Sb6
- 소비자용 설문 링크는 사용하지 않습니다.

## 실행

```bash
npm install
npm run web
```

## 정적 빌드 및 검사

```bash
npm run lint
npm run typecheck
npm run build:web
```

## Vercel 배포

1. 이 저장소 `chriskim071004/Eatdeuk_Shop-Owner`를 Vercel의 새로운 프로젝트에 연결합니다.
2. Framework Preset은 Expo/Other 중 자동 설정에 맞게 사용하고, `vercel.json`에 지정된 빌드 명령(`npm run build:web`)과 출력 폴더(`dist`)를 유지합니다.
3. `main` 브랜치 변경 시 자동 배포되도록 연결합니다.

> **주의:** 현재 사장님 설문의 실제 문항 및 제출 상태는 이 저장소에서 검증하지 않았습니다. 광고 집행 전 설문이 정상 열리고 제출되는지 직접 확인하세요. 메타 픽셀/전환 추적은 아직 구성하지 않았습니다. 픽셀 ID와 개인정보 처리 방침을 확정한 뒤 별도로 연동해야 합니다.

## 수정할 곳

- 설문 주소: `src/constants/links.ts`
- 브랜드 색상/화면 규격: `src/constants/brand.ts`
- 홈 카피 및 카드: `src/app/(tabs)/index.tsx`
- 입점 안내/FAQ: `src/app/(tabs)/guide.tsx`

**Pretotyping 고지:** 실제 사장님 혜택과 이용요금, 매장 등록 절차는 아직 확정되지 않았으며, 사전등록은 입점 확정이 아닙니다.
