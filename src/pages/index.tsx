import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h4 className="font-bold text-2xl px-4 sm:px-6 lg:px-8 text-brandUbuntuOrange-1000">Website is under construction...</h4>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <>
            <title>Home Page</title>
            <html lang="h-full bg-white"/>
            <body className="h-full"/>
            <link
                key="ubuntu-font"
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            />
        </>
    )
;
