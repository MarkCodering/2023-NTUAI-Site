import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/* @ts-ignore */}
      <Head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Main />
        {/* @ts-ignore */}
        <NextScript />
      </body>
    </Html>
  )
}
