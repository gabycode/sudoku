const {
  default: Document,
  Html,
  Head,
  Main,
  NextScript,
} = require("next/document");

class SudokuApp extends Document {
  render() {
    return (
      <Html>
        <Head>{/* google fonts */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SudokuApp;
