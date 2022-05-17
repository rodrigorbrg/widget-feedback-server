# widget-feedback-server

## To run the project

## Developer

```
    npm run dev
```

## Production

```
    npm run build
    npm run start
```

## Init project

```
npm init -y
npm i express cors @prisma/client nodemailer
npm i typescript @types/node ts-node-dev -D
npm i prisma -D
npm i ts-node -D
npm i @types/cors @types/express @types/jest @types/nodemailer -D
npm i jest @swc/jest -D
```

## Configuration

# Typescript

```
npx tsc --init
```

ADD
compilerOptions {
"rootDir": "./src",
"outDir": "./dist",
},
"include": ["src"]

# Prisma

```
npx prisma init

npx prisma migrate dev
```

# Prisma Studio :5555

```
npx prisma studio
```

# swc jest typescript

ADD on jest.config.ts

transform: {
"^.+\\.(t|j)sx?$": ["@swc/jest"],
},

## Preview

<!-- ![preview](https://github.com/rodrigorbrg/tvmaze-react-native/blob/master/ScreenShot.png) -->
