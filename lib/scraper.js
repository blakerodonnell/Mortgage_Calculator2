async function getListingMetaData(url) {
  const data = await fetch(url, { mode: "no-cors" })
    .then((r) => r.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const spans = doc.querySelectorAll("span");
      const price = Array.from(spans).filter(
        (s) => s.innerText.includes("£") && s.innerText.length > 1
      );

      const postCode = Array.from(doc.querySelectorAll("h1"))
        .find((el) => el.attributes.itemprop.value === "streetAddress")
        .innerText.slice(-7);
      return { price: price[0].innerHTML, postCode };
    });

  return data;
}
export default getListingMetaData;
