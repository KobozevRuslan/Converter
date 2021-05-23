const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

class Api {
  static fetchData = async () => {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default Api
