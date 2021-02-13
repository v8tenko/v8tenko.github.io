export default class DataHelper {

  static lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa purus, vestibulum ac tempor sed, luctus a mauris. In vitae enim non orci dignissim blandit non at dolor. Fusce posuere lacinia sem in sollicitudin. Quisque hendrerit quam vel quam bibendum.'
  static data = this.getData()

  static getData() {
    return [
      {
        title: 'EcoGis',
        shortDescription: 'Ecology tracker in Moscow',
        longDescription: 'hello world i love anime and плановую экономику',
        source: 'http://31.media.tumblr.com/63f0258cb5e3636fc462732d0872a42d/tumblr_mq23irvWch1sxcg1zo2_500.gif',
        id: 'a'
      },
      {
        title: 'a.contoller)',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem,
        source: 'https://cdn23.img.ria.ru/images/147870/22/1478702220_0:0:1742:980_600x0_80_0_0_5c06293d79602d9b4cfabd42de28c2f8.jpg',
        id: 'b'
      }
    ]
  }
}
