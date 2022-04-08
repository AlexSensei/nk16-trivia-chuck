import HttpService from "./HttpService";

class TriviaService extends HttpService {
  getClues = async (category) => {
    const { data } = await this.client.get("http://jservice.io/api/clues", {
      params: { category },
    });

    return data;
  };

  getCategories = async () => {
    const { data } = await this.client.get(
      "http://jservice.io/api/categories",
      {
        params: { count: 10 },
      }
    );

    return data;
  };
}

export default new TriviaService();
