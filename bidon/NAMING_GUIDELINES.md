# Naming Guidelines для проекта Bidon

## Обзор

Этот документ определяет единые соглашения об именовании для всех файлов, папок, компонентов, переменных и функций в проекте Bidon. Целью является обеспечение консистентности, читаемости и удобства поддержки кода.

## 1. Соглашения об именовании файлов

### 1.1 React компоненты

**Правило:** PascalCase, расширение .jsx

**Примеры правильного именования:**
- `AuthForm.jsx`
- `HomePage.jsx`
- `Header.jsx`
- `Button.jsx`

**Примеры неправильного именования:**
- `authForm.jsx` (неправильный регистр)
- `AuthForm.js` (неправильное расширение)
- `auth-form.jsx` (неправильный формат)

**Обоснование:** React компоненты - это конструкторы, поэтому используется PascalCase по соглашению JavaScript. Расширение .jsx явно указывает на JSX синтаксис и помогает IDE и инструментам лучше определять файлы.

### 1.2 Страницы (в папке pages/)

**Правило:** PascalCase, расширение .jsx, суффикс "Page"

**Примеры правильного именования:**
- `HomePage.jsx`
- `AuthPage.jsx`
- `ProfilePage.jsx`
- `NewsPage.jsx`

**Примеры неправильного именования:**
- `Home.jsx` (отсутствует суффикс Page)
- `home-page.jsx` (неправильный формат)
- `homePage.js` (неправильный регистр и расширение)

**Обоснование:** Явный суффикс "Page" упрощает идентификацию файлов страниц и отличает их от других компонентов.

### 1.3 Утилиты и помощники

**Правило:** camelCase, расширение .js

**Примеры правильного именования:**
- `formatters.js`
- `validators.js`
- `helpers.js`
- `apiClient.js`

**Примеры неправильного именования:**
- `Formatters.js` (неправильный регистр)
- `format-utils.js` (неправильный формат)
- `formatters.jsx` (неправильное расширение)

**Обоснование:** Утилиты - это обычные функции, не компоненты, поэтому используется camelCase. Расширение .js указывает на чистый JavaScript без JSX.

### 1.4 Стили (CSS модули)

**Правило:** ComponentName.module.css

**Примеры правильного именования:**
- `Header.module.css`
- `Button.module.css`
- `HomePage.module.css`

**Примеры неправильного именования:**
- `header.module.css` (неправильный регистр)
- `Header.css` (отсутствует .module)
- `header-styles.module.css` (неправильный формат)

**Обоснование:** Имя модуля CSS должно совпадать с именем компонента для явной связи. .module указывает на CSS модули.

### 1.5 Хуки (в папке application/hooks/)

**Правило:** camelCase, начинается с "use", расширение .js

**Примеры правильного именования:**
- `useAuth.js`
- `useBooking.js`
- `useProfile.js`
- `useFetch.js`

**Примеры неправильного именования:**
- `auth.js` (отсутствует префикс use)
- `UseAuth.js` (неправильный регистр)
- `useAuth.jsx` (неправильное расширение)

**Обоснование:** Префикс "use" является стандартом React для хуков. Это помогает линтерам и разработчикам быстро идентифицировать хуки.

### 1.6 API модули (в папке infrastructure/api/)

**Правило:** camelCase + "Api", расширение .js

**Примеры правильного именования:**
- `authApi.js`
- `bookingApi.js`
- `newsApi.js`

**Примеры неправильного именования:**
- `auth.js` (отсутствует суффикс Api)
- `AuthApi.js` (неправильный регистр)
- `auth-api.js` (неправильный формат)

**Обоснование:** Суффикс "Api" явно указывает на назначение модуля как работающего с HTTP запросами.

### 1.7 Константы (в папке domain/constants/)

**Правило:** camelCase для имени файла, расширение .js

**Примеры правильного именования:**
- `apiEndpoints.js`
- `config.js`
- `routes.js`

**Примеры неправильного именования:**
- `API_ENDPOINTS.js` (неправильный регистр файла)
- `api-endpoints.js` (неправильный формат)

**Обоснование:** Отличие по стилю от компонентов упрощает навигацию по проекту.

## 2. Соглашения об именовании папок

### 2.1 Папки слоев архитектуры

**Правило:** lowercase

**Примеры:**
- `presentation/`
- `application/`
- `domain/`
- `infrastructure/`

### 2.2 Подпапки функциональностей

**Правило:** lowercase

**Примеры:**
- `components/`
- `hooks/`
- `services/`
- `api/`
- `utils/`
- `pages/`

### 2.3 Группы типов файлов

**Правило:** lowercase

**Примеры:**
- `ui/`
- `forms/`
- `layout/`
- `models/`
- `constants/`

### 2.4 Папки компонентов

**Правило:** PascalCase

**Примеры:**
- `Button/`
- `Header/`
- `AuthForm/`
- `HomePage/`

**Обоснование:** Папки компонентов используют PascalCase для соответствия имени компонента внутри них.

## 3. Соглашения об именовании кода

### 3.1 Переменные и константы

**Переменные (обычные значения):**
- camelCase
- `const userName = 'John';`
- `let isActive = true;`

**Константы (неизменяемые значения):**
- SCREAMING_SNAKE_CASE
- `const API_BASE_URL = 'https://api.example.com';`
- `const MAX_RETRY_COUNT = 3;`

### 3.2 Функции

**Обычные функции:**
- camelCase, глаголы
- `function calculateTotal() {}`
- `const handleClick = () => {}`
- `const fetchUserData = async () => {}`

**Обработчики события (event handlers):**
- camelCase, префикс "handle"
- `const handleSubmit = () => {}`
- `const handleChange = () => {}`
- `const handleDelete = () => {}`

### 3.3 Булевы переменные

**Правило:** Префиксы "is", "has", "can", "should"

**Примеры:**
- `const isLoading = true;`
- `const hasError = false;`
- `const canEdit = true;`
- `const shouldRetry = false;`

### 3.4 Компоненты React

**Правило:** PascalCase

**Примеры:**
```jsx
const HomePage = () => { ... }
const AuthForm = ({ onSubmit }) => { ... }
const Button = (props) => { ... }
```

## 4. Аудит текущего состояния

### Найденные нарушения

#### Проблема 1: Смешивание расширений .js и .jsx

**Файлы с неправильным расширением:**
- `src/pages/AboutUs.js` → должно быть `AboutPage.jsx`
- `src/pages/Auth.js` → должно быть `AuthPage.jsx`
- `src/pages/Booking.js` → должно быть `BookingPage.jsx`
- `src/pages/Contacts.js` → должно быть `ContactsPage.jsx`
- `src/pages/HomePage.js` → должно быть `HomePage.jsx`
- `src/pages/News.js` → должно быть `NewsPage.jsx`
- `src/pages/Profile.js` → должно быть `ProfilePage.jsx`
- `src/pages/Rules.js` → должно быть `RulesPage.jsx`
- `src/pages/Services.js` → должно быть `ServicesPage.jsx`

#### Проблема 2: Неправильное именование страниц

**Файлы с отсутствующим суффиксом "Page":**
- `src/pages/Auth.js` → должно быть `AuthPage.jsx`
- `src/pages/Contacts.js` → должно быть `ContactsPage.jsx`
- `src/pages/Rules.js` → должно быть `RulesPage.jsx`
- `src/pages/Services.js` → должно быть `ServicesPage.jsx`

#### Проблема 3: Неправильное именование в компонентах

**Компоненты внутри HomePage (примеры нарушений):**
- `FeatureSection.jsx` → правильно
- `FeatureSections.module.css` → неправильное имя файла стилей
- `IWanna.jsx` → слишком неформальное имя, должно быть более описательным
- `MainTitle.jsx` → правильно

#### Проблема 4: Смешивание регистров в папках components

**Папки с неправильным соглашением:**
- `src/components/Fields/` → правильно (подпапка для группы)
- `src/components/Text/` → слишком общее имя
- `src/components/Service/` → должна быть во множественном числе `Services/`

## 5. План переименования

### Этап 1: Файлы страниц

| Текущее имя | Новое имя | Тип |
|------------|-----------|-----|
| AboutUs.js | AboutPage.jsx | ✓ |
| Auth.js | AuthPage.jsx | ✓ |
| Booking.js | BookingPage.jsx | ✓ |
| Contacts.js | ContactsPage.jsx | ✓ |
| HomePage.js | HomePage.jsx | ✓ |
| News.js | NewsPage.jsx | ✓ |
| Profile.js | ProfilePage.jsx | ✓ |
| Rules.js | RulesPage.jsx | ✓ |
| Services.js | ServicesPage.jsx | ✓ |

### Этап 2: Компоненты

Все файлы компонентов должны быть с расширением .jsx (если используют JSX)

### Этап 3: Стили

Все CSS модули должны иметь имя, совпадающее с именем компонента

## 6. Выполнение соглашений

### ESLint правила

След добавить следующие правила в .eslintrc для автоматической проверки:

```json
{
  "rules": {
    "react/prefer-es6-class": "warn",
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
    "id-length": ["warn", { "min": 2, "exceptions": ["i", "x", "y", "_"] }],
    "camelcase": ["error", { "properties": "never" }]
  }
}
```

### Pre-commit hooks

Использовать Husky для проверки имен файлов перед коммитом.

## 7. Заключение

Последовательное следование этим соглашениям обеспечит:
- Единообразность кодовой базы
- Быстрый поиск файлов
- Легче onboarding новых разработчиков
- Меньше конфликтов в команде
- Лучшую читаемость и поддержку кода

---

**Версия:** 1.0
**Дата:** December 2024
**Автор:** Refactoring Project
