export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Only render children (sign-in, sign-up, etc.) */}
        {children}
      </body>
    </html>
  );
}
