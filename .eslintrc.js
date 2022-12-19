module.exports = {
	ignorePatterns: ['.eslintrc.js', '*.config.js'],
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		// "plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	settings: {
		react: {
			version: 'detect'
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['tsconfig.json'],
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12
	},
	plugins: ['react', '@typescript-eslint', 'import'],
	rules: {
		'semi': ['error', 'never'],
		'react/react-in-jsx-scope': 0,
		'react/jsx-uses-react': 0,
		'react/prop-types': 0,
		"@typescript-eslint/explicit-function-return-type": "error",
		// "arrow-body-style": ["error", "as-needed"],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				"prefer": "type-imports",
			}
		],
		"import/order": [
			"error",
			{
				"groups": [
					"builtin",
					"external",
					"parent",
					"sibling",
					"index",
					"object",
					"type"
				],
				"pathGroups": [
					{
						"pattern": "@/**/**",
						"group": "parent",
						"position": "before"
					}
				],
				"alphabetize": { "order": "asc" }
			}
		],
	}
};
