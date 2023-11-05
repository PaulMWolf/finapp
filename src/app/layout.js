export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html lang = "en">
    <head>
      <title>Blog</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    
    <body>
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
 
      {children}
    </section>
    </body>
    </html>
  )
}