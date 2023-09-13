module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'pocketbase'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jsx-a11y', 'html'],
  rules: {
    // HTML 문자열을 검사하는 규칙 설정
    'html/html-extensions': 'off', // .html 확장자 파일에 대한 확장자 체크 해제
    'react/prop-types': 'error',

    // 웹 페이지에서 사용하는 이모지가 웹 접근성 요구 사항을 충족하는지 확인합니다.
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',

    // 앵커 태그 (<a>)에는 콘텐츠가 있어야 한다는 규칙입니다.
    'jsx-a11y/anchor-has-content': 'warn',
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
  },
};
