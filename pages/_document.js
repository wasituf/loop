import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='application-name' content='Loop' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-title' content='Loop' />
        <meta
          name='description'
          content='Get deep into zen mode with real-world sounds and amazing presets.'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='apple-touch-icon' href='/icons/icon-512.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
