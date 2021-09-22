const got = require("got");
const metascraper = require("metascraper")([require("..")()]);

test("live test dacor", async () => {
  const targetUrl =
    "https://www.dacor.com/us/products/archives/heritage/cooktops/professional-36-induction-cooktop";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.url).toBe(
    "https://www.dacor.com/us/products/archives/heritage/cooktops/professional-36-induction-cooktop"
  );
}, 10000);

test("live test marble", async () => {
  const targetUrl = "https://marble.com/quartz-countertops/vena-carrara/1203";
  const { body: html, url } = await got(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.4 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.4 facebookexternalhit/1.1 Facebot Twitterbot/1.0",
    },
  });

  const metadata = await metascraper({ html, url });
  expect(metadata.url).toBe(null);
}, 10000);