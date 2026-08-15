# Kanzlei Alica Rusta — сайт

React + Vite + Tailwind, backend — Supabase (Edge Functions + Postgres).

## 1. Локальный запуск

```bash
npm install
npm run dev
```

## 2. Supabase — уже создан и настроен

Проект `deutsch-visa` создан в Supabase (регион Frankfurt, eu-central-1),
таблицы и обе Edge Function (`submit-quiz`, `submit-litigation`) уже
задеплоены. URL и публичный anon-ключ уже вписаны в `src/lib/config.ts`.

**Остался один шаг — секреты (вы делаете это сами, в панели Supabase):**
1. Откройте https://supabase.com/dashboard/project/pkungjvcgemdufjuxytc/settings/functions
2. Добавьте секреты:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_QUIZ_CHAT_ID`
   - `TELEGRAM_URGENT_CHAT_ID`
   - `AMOCRM_ACCESS_TOKEN`
   - `AMOCRM_CLIENT_SECRET`

## 3. Переменные окружения фронтенда

Не требуются — URL и ключ Supabase уже прописаны напрямую в
`src/lib/config.ts` (это публичные значения, безопасные для клиента;
реальный контроль доступа — через RLS-политики в базе).

## 4. Деплой на Netlify или Cloudflare Pages

Оба варианта разрешают коммерческое использование на бесплатном тарифе
(в отличие от Vercel Hobby).

**Netlify:**
1. Залейте проект в GitHub-репозиторий.
2. New site from Git → выберите репозиторий.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Domain settings → Add custom domain → `deutsch-visa.de`.

**Cloudflare Pages:** аналогично, через Pages → Create project → Connect to Git.

## 5. Структура проекта

- `src/components/` — секции сайта
- `src/i18n/` — переводы (ru/en/de) и структура квиза
- `src/lib/config.ts` — реквизиты компании, ссылки на соцсети
- `supabase/functions/` — серверная логика (расчёт допуска, Telegram, amoCRM)
- `supabase/migrations/` — схема базы данных

## 6. Что нужно донастроить перед запуском

- [ ] Сохранить секреты Telegram и amoCRM в Supabase Edge Function Secrets
- [ ] Проверить `PRIMARY_DOMAIN`/`CORPORATE_EMAIL` в `src/lib/config.ts`, если изменятся
- [ ] Привязать домен `deutsch-visa.de` на хостинге

