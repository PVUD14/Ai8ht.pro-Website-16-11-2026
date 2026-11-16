import Script from "next/script";

/**
 * Google Analytics 4 and Microsoft Clarity. Each one loads only when its ID
 * is set at build time (in .env.production on the server):
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *   NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
 * After adding or changing an ID, rebuild and restart the site.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

const SAFE_ID = /^[A-Za-z0-9-]+$/;

export function Analytics() {
  const ga = GA_ID && SAFE_ID.test(GA_ID) ? GA_ID : undefined;
  const clarity = CLARITY_ID && SAFE_ID.test(CLARITY_ID) ? CLARITY_ID : undefined;

  return (
    <>
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {clarity && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}
        </Script>
      )}
    </>
  );
}
