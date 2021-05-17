import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home({ session }) {
	// session정보가 없을때는 login으로 user session
	if (!session) return <Login />;
	return (
		<div>
			<Head>
				<title>Facebook</title>
			</Head>

			{/* Header */}
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