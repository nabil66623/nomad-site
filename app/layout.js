export const metadata = {
  title: "Nomad Co.",
  description: "Operational Consulting & Business Optimization across markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
