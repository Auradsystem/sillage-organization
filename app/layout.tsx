export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>Sillage</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
