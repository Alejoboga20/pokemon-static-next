import Head from 'next/head';

export const Layout = ({ children, title = 'Pokemon App' }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='author' content='Alejo Boga' />
				<meta name='description' content='Pokemon information' />
				<meta name='keywords' content='Pokemon, pokedex' />
			</Head>

			<main>{children}</main>
		</>
	);
};

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	title?: string;
}
