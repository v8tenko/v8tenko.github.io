export default class DataHelper {

  static lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa purus, vestibulum ac tempor sed, luctus a mauris. In vitae enim non orci dignissim blandit non at dolor. Fusce posuere lacinia sem in sollicitudin. Quisque hendrerit quam vel quam bibendum.'
  static data = this.getData()

  static getData() {
    return [
      {
        title: 'EcoGis',
        shortDescription: 'Ecology tracker in Moscow',
        longDescription: 'hello world i love anime and плановую экономику',
        source: 'https://diskomir.ru/upload/iblock/79a/79a7e4ef1582a9f30df77bd8771266c8.jpg',
        id: 'a',
        type: 'mobile'
      },
      {
        title: 'a.contoller)',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem.substring(0, 200),
        source: 'https://images.unsplash.com/photo-1593786189301-461faf967779?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        id: 'b',
        type: 'web'
      },
      {
        title: 'Tokyo Ghoul',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem,
        source: 'https://images.unsplash.com/photo-1611888258376-8b1b2026262b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        id: 'c',
        type: 'web'
      },
      {
        title: 'ZeroTwo ',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem.substring(0, 300),
        source: 'https://images.unsplash.com/photo-1611128371650-fea6baac63ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        id: 'd',
        type: 'backend'
      },
    ]
  }
}
