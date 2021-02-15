export default class DataHelper {

  static lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa purus, vestibulum ac tempor sed, luctus a mauris. In vitae enim non orci dignissim blandit non at dolor. Fusce posuere lacinia sem in sollicitudin. Quisque hendrerit quam vel quam bibendum.'
  static test = 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4928&q=80'
  static test2 = 'https://images.unsplash.com/photo-1414872785488-7620d2ae7566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80'
  static data = this.getData()


  static getData() {
    return [
      {
        title: 'EcoGis',
        shortDescription: 'Ecology tracker in Moscow',
        longDescription: 'hello world i love anime and плановую экономику',
        source: this.test,
        isRemoving: false,
        id: 'a',
        type: 'mobile'
      },
      {
        title: 'a.contoller)',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem,
        source: this.test,
        isRemoving: false,
        id: 'b',
        type: 'web'
      },
      {
        title: 'Tokyo Ghoul',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem,
        source: this.test2,
        isRemoving: false,
        id: 'c',
        type: 'web'
      },
      {
        title: 'ZeroTwo ',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem,
        source: this.test2,
        isRemoving: false,
        id: 'd',
        type: 'backend'
      },
    ]
  }
}
