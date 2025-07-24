// src/pages/contact.tsx
import React from "react";
import Layout from "@theme/Layout";

export default function Contact() {
  return (
    <Layout title="Contact Us" description="How to reach us">
      <main className="container margin-vert--lg">
        <h1>Contact Us</h1>
        <p>
          Have questions or feedback? Email us at{" "}
          <a href="mailto:hello@your-domain.com">hello@your-domain.com</a>.
        </p>
        {/* Optional: embed a form, map, or social links here */}
      </main>
    </Layout>
  );
}
