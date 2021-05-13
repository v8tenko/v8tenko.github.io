export class Utils {
  static async wait(time) {
    return await new Promise(res => {
      setTimeout(() => res(true), time)
    })
  }
}
