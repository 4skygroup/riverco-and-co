import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
    return (
        <Helmet>
            <title>{`${title} | Riverco & Co`}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
    );
}