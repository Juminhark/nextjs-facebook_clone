import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>hello world</title>
			</Head>

			<Header />

			<main>
				{/* Sidebar */}
				{/* Feed */}
				{/* Widgets */}
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	// Get the user
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
