import "./globals.css";

export const metadata = {
  title: "Mezbah Uddin Mahir | Marketing Strategist & Ads Expert",
  description: "Branding & Marketing Strategist specializing in Meta & Google Ads. Managing $18.5M+ in lifetime ad budgets. Healthcare & Gaming brands scaling globally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-slate-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
