# Hangullo 공식 웹사이트

이 폴더는 Hangullo 프로그래밍 언어의 공식 정적 웹사이트 소스입니다. 사이트 문서는 Hangullo 저장소의 현재 공개 구현(v0.0.1-beta)을 기준으로 작성합니다.

## 구조

- `index.html`: 메인 홈 페이지
- `about.html`: Hangullo 소개 페이지
- `getting-started.html`: 시작하기
- `docs.html`: 문서 페이지
- `ide.html`: IDE 소개
- `troubleshooting.html`: 오류 해결
- `download.html`: 다운로드
- `css/style.css`: 공통 스타일시트
- `js/main.js`: 공통 스크립트
- `sitemap.xml`, `robots.txt`: 검색 엔진 크롤링 설정

## 참고

- 공식 GitHub: https://github.com/codexora-dev/Hangullo
- 공식 사이트: https://codexora-dev.github.io/
- 설치 파일의 공개 여부는 GitHub Releases에 실제 게시된 파일을 기준으로 안내합니다.
- 문법 예제는 Hangullo 컴파일러에서 확인하고, 지원하지 않는 기능은 별도로 표시합니다.

## 로컬 미리보기

Python이 설치되어 있으면 이 폴더에서 다음 명령으로 정적 사이트를 확인할 수 있습니다.

```powershell
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.