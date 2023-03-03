export const metadata = {
  title: "NodeBird",
  description: "NodeBird with NextJs 13 beta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
