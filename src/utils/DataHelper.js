export default class DataHelper {

  static lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa purus, vestibulum ac tempor sed, luctus a mauris. In vitae enim non orci dignissim blandit non at dolor. Fusce posuere lacinia sem in sollicitudin. Quisque hendrerit quam vel quam bibendum.'
  static projects = this.getProjects()
  static experience = this.getExperience()
  static apiKey = null

  static getProjects() {
    return [
      {
        title: 'EcoGis',
        shortDescription: 'Ecology tracker in Moscow',
        longDescription: 'hello world i love anime and плановую экономику',
        source: 'https://i.ibb.co/ZznC6JB/a.jpg',
        id: 'a',
        type: 'mobile',
        stack: [
          'Kotlin',
          'Mapbox',
          'GIS Algorithms',
        ]
      },
      {
        title: 'a.contoller)',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem.substring(0, 200),
        source: 'https://images.unsplash.com/photo-1593786189301-461faf967779?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        id: 'b',
        type: 'web',
        stack: [
          'Android',
          'Mapbox',
          'Anime',
        ]
      },
      {
        title: 'Tokyo Ghoul',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem,
        source: 'https://images.unsplash.com/photo-1611888258376-8b1b2026262b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        id: 'c',
        type: 'web',
        stack: [
          'Evangelion',
          'Mapbox',
          'GIS Algorithms',
        ]
      },
      {
        title: 'ZeroTwo ',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem.substring(0, 300),
        source: 'https://images.unsplash.com/photo-1611128371650-fea6baac63ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        id: 'd',
        type: 'backend',
        stack: [
          'Evangelion',
          'Mapbox',
          'GIS Algorithms',
        ]
      },
      {
        title: 'Why not?',
        shortDescription: 'Control your smartphone with your eyes',
        longDescription: this.lorem.substring(0, 300),
        source: 'https://images.unsplash.com/photo-1611128371650-fea6baac63ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        id: 'e',
        type: 'backend',
        stack: [
          'Evangelion',
          'Mapbox',
          'GIS Algorithms',
        ]
      },
    ]
  }

  static getExperience() {
    return [
      {
        place: 'University ITMO',
        date: '08.2002 - now',
        post: 'student'
      }
    ]
  }
}
