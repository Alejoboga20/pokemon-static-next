import Head from 'next/head';
import { Navbar } from '../ui';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({ children, title = 'Pokemon App' }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='author' content='Alejo Boga' />
				<meta name='description' content='Pokemon information' />
				<meta name='keywords' content='Pokemon, pokedex' />
				<meta property='og:title' content={`Pokemon Information - ${title}`} />
				<meta property='og:description' content={`Page for - ${title}`} />
				<meta property='og:image' content={`${origin}/images/banner.png`} />
			</Head>
			<Navbar />
			<main
				style={{
					padding: '0px 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	title?: string;
}
