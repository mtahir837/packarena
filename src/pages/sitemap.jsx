import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

function Sitemap() {
    const sitemapData = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Work", url: "/work" },
                { name: "Career", url: "/career" },
                { name: "Contact", url: "/contact-us" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Campaigns, Brand & Creative", url: "/services/campaign-brand-identity" },
                { name: "UX/UI Systems", url: "/services/ux-ui" },
                { name: "SEO & Content", url: "/services/seo-content" },
                { name: "Web Development", url: "/services/web-development" },
                { name: "Brand Identity", url: "/services/brand-identity" },
                { name: "Web Applications", url: "/services/web-application" },
            ]
        },
        {
            title: "Content",
            links: [
                { name: "Blogs", url: "/blogs" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", url: "/privacy-policy" },
                { name: "Cookie Policy", url: "/cookie-policy" },
            ]
        }
    ];

    return (
        <>
            <Head>
                <title>Sitemap | Techtrek</title>
                <meta name="description" content="Complete sitemap of Techtrek website. Find all our pages, services, and content organized for easy navigation." />
                <meta name="robots" content="index, follow" />
            </Head>

            <main className="min-h-screen bg-[#030305] text-white">
                <Header />

                <div className="pt-32 pb-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 inter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Sitemap
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto inter">
                                Navigate through all the pages and services available on our website.
                                Everything is organized for your convenience.
                            </p>
                        </div>

                        {/* Sitemap Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {sitemapData.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#667eea]/30 transition-all duration-300">
                                    <h2 className="text-2xl font-bold mb-6 text-[#667eea] inter">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.links.map((link, linkIndex) => (
                                            <div key={linkIndex} className="group">
                                                <Link
                                                    href={link.url}
                                                    className="text-white hover:text-[#667eea] inter font-medium group-hover:translate-x-2 transform transition-all duration-300 block py-2"
                                                >
                                                    {link.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}

export default Sitemap;
