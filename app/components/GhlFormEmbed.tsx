import Script from "next/script";

type GhlFormEmbedProps = {
  formId: string;
  formName: string;
  /** Initial height in px; GHL's form_embed.js resizes the iframe after load. */
  height: number;
};

/**
 * GoHighLevel inline form embed. Mirrors GHL's official snippet: every data-*
 * attribute is preserved, the iframe owns its height (the wrapper never sets a
 * min-height), and form_embed.js is loaded once via next/script.
 */
export default function GhlFormEmbed({ formId, formName, height }: GhlFormEmbedProps) {
  const iframeId = `inline-${formId}`;

  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "8px" }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={formName}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
