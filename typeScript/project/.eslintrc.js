module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true, // 최신 ECMAScript 환경 설정
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
        'plugin:prettier/recommended', // Prettier와 통합
    ],
    parser: '@typescript-eslint/parser', // TypeScript 파서 사용
    parserOptions: {
        ecmaVersion: 2021, // 최신 ECMAScript 버전 사용
        sourceType: 'module', // ES 모듈 시스템
    },
    plugins: ['@typescript-eslint'], // TypeScript ESLint 플러그인
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 2,
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: 'avoid',
            },
        ],
        '@typescript-eslint/no-unused-vars': 'warn', // 미사용 변수 경고
        '@typescript-eslint/no-explicit-any': 'off', // any 타입 허용
        'no-console': 'warn', // console.log 사용 경고
        'no-debugger': 'error', // debugger 사용 금지
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // TypeScript 파일에만 적용
            parserOptions: {
                project: './tsconfig.json', // tsconfig 경로 지정
            },
        },
    ],
};
