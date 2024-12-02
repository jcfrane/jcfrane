import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <Layout>
          <h4 className="font-bold text-4xl">Website is under construction...</h4>
      </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
        <>
            <title>Home Page</title>
            <html lang="h-full bg-white"/>
            <body className="h-full"/>
        </>
    )
;
