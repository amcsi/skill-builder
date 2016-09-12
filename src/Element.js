var Element = class {
  constructor (color) {
    this.color = color
  }

  /**
   * @return {string}
   */
  getColor () {
    return this.color
  }
}
Element.color = ''

export default Element
