import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Page">
            <p>The about page of a no frills Gatsby site.</p>
        </Layout>
    );
};

export const Head = () => {
    return (
        <title>About Page</title>
    );
};

export default AboutPage;