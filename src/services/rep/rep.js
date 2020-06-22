export default class Rep {
  _url = 'https://script.google.com/macros/s/AKfycbztW66lzmp296OHoF2v5M4XNurFB-unYCjbXr9v87Nxw2SxGU4/exec';


  async getData() {
    const res = await fetch(this._url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._url}, ${res.status}`);
    }

    const json = await res.json();

    return json.results;
  }

  async getLink() {
    const array = await this.getData();

    return array[0][2];
  }
}
