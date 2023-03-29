import * as React from "react"
import Layout from "../components/layout"

const HomePage = () => {
    return (
        <Layout pageTitle="Home Page">
        <p>A no frills Gatsby site.</p>
        </Layout>
    );
};

export const Head = () => {
    return (
       <title>Home Page</title>
    );
};

export default HomePage;