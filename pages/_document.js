import Document, {
    Html,
    Head,
    Main,
    NextScript
  } from 'next/document'
  
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends Document {
    render () {
      return (
        <Html lang='en'>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Space+Mono&display=swap" rel="stylesheet"/>
            <link href='favicons/site.webmanifest' rel='manifest' />
            <link rel='icon' type='image/png' href='/favicons/favicon-32x32.png' sizes='32x32' />
            <link rel='icon' type='image/png' href='/favicons/favicon-16x16.png' sizes='16x16' />
            <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
          </Head>
          <body>
            <ColorModeScript/>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  