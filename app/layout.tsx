import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PricerItemMarketplace.us | Premium Digital Agency",
  description:
    "We bridge the gap between complex technology and strategic business goals to deliver world-class digital experiences.",
  icons: {
    icon: "/images/arnytics llc (2).png",
    shortcut: "/images/arnytics llc (2).png",
    apple: "/images/arnytics llc (2).png",
  },
};

const bingUetLoader = `(function(w, d, t, u, o) {
        w[u] = w[u] || [], o.ts = (new Date).getTime();
        var n = d.createElement(t);
        n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),
        n.async = 1, n.onload = n.onreadystatechange = function() {
            var s = this.readyState;
            s && "loaded" !== s && "complete" !== s ||
            (o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),
            n.onload = n.onreadystatechange = null)
    };
        var i = d.getElementsByTagName(t)[0];
        i.parentNode.insertBefore(n, i);
    })(window, document, "script", "uetq", {
        ti:"187249294",
        enableAutoSpaTracking: true
    });`;

const bingUetConsentDefault = `window.uetq = window.uetq || [];
   window.uetq.push('consent', 'default', {
     'ad_storage': 'denied'
   });`;

const bingUetConsentUpdate = `window.uetq = window.uetq || [];
   window.uetq.push('consent', 'update', {
     'ad_storage': 'granted'
   });`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script id="microsoft-bing-uet" dangerouslySetInnerHTML={{ __html: bingUetLoader }} />
        <script
          id="microsoft-bing-uet-consent-default"
          dangerouslySetInnerHTML={{ __html: bingUetConsentDefault }}
        />
        <script
          id="microsoft-bing-uet-consent-update"
          dangerouslySetInnerHTML={{ __html: bingUetConsentUpdate }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
