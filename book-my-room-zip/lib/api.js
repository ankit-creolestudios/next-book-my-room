const API_URL = "https://wordpress.missionstartupkarnataka.org/graphql";
async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
export async function getWomenEntrepreneur() {
  const data = await fetchAPI(`
    query MyQuery {
    page(id: "cG9zdDo0Mzc4") {
      commonBanner {
        title
        subTitle
        image {
          sourceUrl
        }
      }
      womenEnterpreneur {
        eligibilityCrieteria
        incentives
        mandatoryDocuments
        personalityQuote
      }
    }
  }
  `);
  return data;
}
