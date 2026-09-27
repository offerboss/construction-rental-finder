import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms that apply to using Construction Rental Finder, an informational directory of construction equipment rental providers.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Terms", href: "/terms" },
      ]}
      intro="These terms apply to your use of Construction Rental Finder. By using the site, you agree to them."
    >
      <section>
        <h2>An informational directory</h2>
        <p>
          Construction Rental Finder is an online directory that helps people research
          construction equipment and find rental providers. We are not an equipment rental
          company. We do not own, rent, deliver or operate equipment, and we are not a party to
          any agreement between you and a rental provider.
        </p>
        <p>
          Equipment information, guides and FAQs on the site are general in nature and are not
          professional, engineering, legal or safety advice.
        </p>
      </section>

      <section>
        <h2>No guarantee of availability</h2>
        <p>
          We do not guarantee that any provider, piece of equipment or service is available in a
          particular location or at a particular time. Listings, service areas and other details
          can change, and information on the site may be incomplete or out of date.
        </p>
      </section>

      <section>
        <h2>No endorsement or warranty of providers</h2>
        <p>
          A provider appearing on the site is not an endorsement or recommendation. We do not
          verify, warrant or guarantee the quality, safety, condition, licensing, insurance or
          pricing of any provider or equipment.
        </p>
      </section>

      <section>
        <h2>Your responsibilities as a renter</h2>
        <p>Before renting, you are responsible for confirming details directly with the provider, including:</p>
        <ul>
          <li>rental terms, pricing, fees, deposits and delivery arrangements;</li>
          <li>insurance and damage waiver requirements;</li>
          <li>operator training, licensing or certification requirements;</li>
          <li>safety requirements, manufacturer instructions and jobsite rules;</li>
          <li>permits, utility locates and any other requirements that apply to your project.</li>
        </ul>
      </section>

      <section>
        <h2>Information you submit</h2>
        <p>
          When you submit information through the site, you agree that it is accurate and that
          you have the right to share it. Our <Link href="/privacy">Privacy Policy</Link> explains
          how we handle it.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>Please use the site lawfully and respectfully. You agree not to:</p>
        <ul>
          <li>submit false, misleading or impersonating information;</li>
          <li>send spam or use the site&apos;s forms for unsolicited advertising;</li>
          <li>scrape, copy or harvest site content or data in bulk without permission;</li>
          <li>attempt to disrupt, damage or gain unauthorized access to the site;</li>
          <li>use the site in a way that violates any law or the rights of others.</li>
        </ul>
      </section>

      <section>
        <h2>Third-party links</h2>
        <p>
          The site may link to third-party websites, including provider websites. We don&apos;t
          control those sites and aren&apos;t responsible for their content, products, services or
          policies.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The site&apos;s content, design, logo and images are owned by Construction Rental Finder
          or used with permission, and are protected by intellectual property laws. You may view
          and share pages for personal or internal business use, but you may not copy,
          republish or reuse site content for commercial purposes without our permission.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind. To the
          fullest extent permitted by law, Construction Rental Finder is not liable for any
          indirect, incidental or consequential damages, or for any loss or injury arising from
          your use of the site, your dealings with any provider, or the use of any rented
          equipment.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms as the site evolves. When we do, we will revise the
          &ldquo;Last updated&rdquo; date above. Continuing to use the site after changes take effect means
          you accept the updated terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Reach us through our <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
