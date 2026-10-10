import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Construction Rental Finder collects, uses and protects information submitted through the site, including form submissions, cookies and third-party links.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy", href: "/privacy" },
      ]}
      intro="This policy explains what information Construction Rental Finder collects, how we use it and the choices you have."
    >
      <section>
        <h2>Who we are</h2>
        <p>
          Construction Rental Finder (&ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;) operates an online directory
          that helps people find construction equipment rental providers. This policy applies to
          this website and the forms on it.
        </p>
      </section>

      <section>
        <h2>Information you choose to submit</h2>
        <p>We collect information you provide directly, such as when you:</p>
        <ul>
          <li>send us a message through our contact form (name, email address, subject and message);</li>
          <li>apply for featured placement as a rental company or jobsite service provider (company and contact details, service area, service categories and any other information the form requests);</li>
          <li>enter an equipment type or location into the site search.</li>
        </ul>
        <p>Please don&apos;t include sensitive personal information in form messages.</p>
      </section>

      <section>
        <h2>How we use form submissions</h2>
        <p>We use the information you submit to:</p>
        <ul>
          <li>respond to your questions and requests;</li>
          <li>review applications from rental companies and follow up about directory listings;</li>
          <li>operate, maintain and improve the directory;</li>
          <li>protect the site against spam, fraud and misuse.</li>
        </ul>
        <p>We do not sell the personal information you submit.</p>
      </section>

      <section>
        <h2>Information collected automatically, analytics and cookies</h2>
        <p>
          Like most websites, the servers and infrastructure that host this site may record
          standard technical information when you visit, such as your IP address, browser type,
          device information, pages visited and the date and time of your visit. This is used to
          deliver the site, keep it secure and troubleshoot problems.
        </p>
        <p>
          We may use analytics tools or cookies in the future to understand how visitors use the
          site and to improve it. If we introduce them, we will update this policy to describe
          what is collected and any choices available to you. Most browsers let you block or
          delete cookies through their settings.
        </p>
      </section>

      <section>
        <h2>Service providers</h2>
        <p>
          We may rely on third-party service providers, such as website hosting, email and form
          handling services, to operate the site. These providers may process information on our
          behalf only as needed to provide their services to us.
        </p>
        <p>
          The featured placement application on our For Rental Companies page is provided by a
          third-party form and customer relationship management service. Information you submit
          there is collected and stored by that service on our behalf, and the embedded form may
          use cookies needed for it to function.
        </p>
        <p>
          We may also share information if required by law, to protect our rights or the safety
          of others, or as part of a business transfer such as a merger or acquisition.
        </p>
      </section>

      <section>
        <h2>Third-party links</h2>
        <p>
          The site may link to websites operated by rental providers or other third parties. We
          are not responsible for the content or privacy practices of those sites, and we
          encourage you to review their policies before sharing information with them.
        </p>
      </section>

      <section>
        <h2>Data security and retention</h2>
        <p>
          We take reasonable measures to protect the information we collect. However, no method
          of transmission over the internet or electronic storage is completely secure, and we
          cannot guarantee absolute security. We keep submitted information only as long as
          reasonably needed for the purposes described in this policy or as required by law.
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>
          This site is intended for adults and businesses. It is not directed to children under
          13, and we do not knowingly collect personal information from children. If you believe
          a child has provided us with personal information, please contact us so we can delete it.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You can ask us to access, correct or delete information you have submitted by
          contacting us. Depending on where you live, you may have additional rights under
          applicable law.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as the site grows. When we do, we will revise the
          &ldquo;Last updated&rdquo; date at the top of this page. Material changes will be reflected here
          before they take effect.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions about this policy or your information? Reach us through our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
