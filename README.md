This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- https://www.youtube.com/watch?v=LYWgPSbPDfQ&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=4
- https://www.youtube.com/watch?v=z5f_Fa9JaZY

## Init

```sh
> npx create-next-app nextjs-facebook_clone
```

## Getting Started

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000)

- You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## [Learn More about Next.js](<(https://github.com/vercel/next.js/)>)

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Setting up Tailwind CSS

```sh
> npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
> npx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## [Deploy on Vercel](<(https://nextjs.org/docs/deployment)>)

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## use next/image

```js
// components/Header.js
import Image from 'next/image';

function Header() {
	return <Image src="https://links.papareact.com/5me" />;
}

export default Header;

// next.config.js
module.exports = {
	images: {
		domains: ['links.papareact.com'],
	},
};
```

## icons

- heroicons

```sh
> npm install @heroicons/react
```

```js
import { BeakerIcon } from '@heroicons/react/solid';

function MyComponent() {
	return (
		<div>
			<BeakerIcon className="h-5 w-5 text-blue-500" />
			<p>...</p>
		</div>
	);
}
```

## tailwindcss - active

- active에따라 다르게 css 적용

```js
// components/Header.js
import HeaderIcon from './HeaderIcon';

function Header() {
	return (

				<div className="flex space-x-6 md:space-x-2">
					<HeaderIcon active Icon={HomeIcon} /> : active prop 전달
					<HeaderIcon Icon={FlagIcon} />
				</div>

	);
}
export default Header;


// components/HeaderIcon
function HeaderIcon({ Icon, active }) { : active prop을 받아 적용
	return (
		<div>
			<Icon
				className={`h-5 text-gray-500 text-center sm:h-7 mx-auto
        group-hover:text-blue-500 ${active && 'text-blue-500'}`}
			/>
		</div>
	);
}
export default HeaderIcon;

```

## [NextAuth](https://next-auth.js.org/)

- [facebook for developer](https://developers.facebook.com/apps/)

```sh
> yarn add next-auth
```

```js
// page/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// ...add more providers here
	],

	// A database is optional, but required to persist accounts in a database
	database: process.env.DATABASE_URL,
});
```

- ServerSideProps 와 session에 대한 이해

## reference

- https://blog.logrocket.com/how-to-use-nextauth-js-for-client-side-authentication-in-next-js/
