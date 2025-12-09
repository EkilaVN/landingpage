FROM node:18-alpine AS base

# ============ DEPS STAGE =============
FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
RUN npm install -g pnpm@10.12.4
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile


# ============ BUILDER STAGE =============
FROM base AS builder
WORKDIR /app

# Inject build-time environment variables
ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_AUTH_TOKEN

# Pass to Next.js via ENV
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_AUTH_TOKEN=$NEXT_PUBLIC_AUTH_TOKEN
ENV NEXT_TELEMETRY_DISABLED=1

RUN echo "API=$NEXT_PUBLIC_API_BASE_URL, AUTH=$NEXT_PUBLIC_AUTH_TOKEN"

RUN npm install -g pnpm@10.12.4
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# ============ RUNNER STAGE =============
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
