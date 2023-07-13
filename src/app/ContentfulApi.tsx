export default class ContentfulApi {
  static async callContentful(query: any) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/je5wh4b84iuf`;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer Q1auBiJO8c9g0XFRp0vzkS9xOm41p2Nkh-Uwva7ImcA`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }
}
