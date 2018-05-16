export default class Node {
  constructor(data) {
    this.letter = data;
    this.children = {};
    this.completedWord = null;
  }
}