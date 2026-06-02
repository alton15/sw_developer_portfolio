# sw_developer_portfolio

소프트웨어 개발자 포트폴리오 웹사이트 - 다국어(한/영) 지원 Next.js 앱.

## Tech Stack

- **TypeScript** / **Next.js** 16.1.6 (App Router)
- **React** 19
- **Tailwind CSS** 4
- **next-intl**: 국제화 (한국어/영어)
- **lucide-react**: 아이콘
- **ESLint**: 코드 품질

## Architecture

```
src/
  app/           # Next.js App Router (페이지 라우팅)
  components/    # 재사용 컴포넌트
  data/          # 정적 데이터 (포트폴리오 콘텐츠)
  i18n/          # 국제화 설정
  middleware.ts  # 언어 감지 미들웨어
messages/
  ko.json        # 한국어 번역
  en.json        # 영어 번역
```

## Directory Structure

```
src/
  app/             # Next.js App Router
  components/      # UI 컴포넌트
  data/            # 포트폴리오 데이터
  i18n/            # i18n 설정
  middleware.ts    # 미들웨어
messages/          # 번역 파일 (ko.json, en.json)
public/            # 정적 에셋 (이미지 등)
next.config.ts     # Next.js 설정
tailwind.config.mjs
postcss.config.mjs
eslint.config.mjs
tsconfig.json
```

## Critical Rules

### 1. Code Organization

- App Router 기반 파일 라우팅
- 컴포넌트는 `src/components/`에 분리
- 정적 데이터는 `src/data/`에서 관리

### 2. Code Style

- TypeScript strict mode
- Tailwind CSS 유틸리티 클래스 사용
- `console.log` 프로덕션 코드에 남기지 않기
- Server Component 우선, 필요 시 Client Component

### 3. i18n

- 새 텍스트 추가 시 ko.json, en.json 양쪽 모두 업데이트
- next-intl 패턴 따르기
- 하드코딩된 텍스트 금지 - 모두 번역 키 사용

### 4. Testing

- `npm test` 로 실행 (설정 필요)
- 컴포넌트 테스트 시 next-intl provider mock 처리

### 5. Security

- .env 파일 커밋 금지
- 외부 링크는 `rel="noopener noreferrer"` 적용

## Running

```bash
npm install
npm run dev       # 개발 서버
npm run build     # 프로덕션 빌드
npm run lint      # ESLint
```

## Available Commands

- `/plan` - 구현 계획 수립
- `/tdd` - 테스트 주도 개발
- `/code-review` - 코드 리뷰
- `/build-fix` - 빌드/타입 에러 수정
- `/verify` - 구현 검증
- `/learn` - 세션에서 패턴 추출
- `/refactor-clean` - 데드코드 정리
- `/checkpoint` - 체크포인트 생성

## Git Workflow

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`
- main 직접 커밋 가능 (1인 프로젝트)
