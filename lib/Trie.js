
import Node from './Node';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
    this.suggestions = [];
  }


insert(data) {
  let letters = [...data.toLowerCase()];
  let currentNode = this.root;
  this.count++
  
  letters.forEach((letter) => {
    if (!currentNode.children[letter]) {
    currentNode.children[letter] = new Node(letter);
    }
    currentNode = currentNode.children[letter]

   })
    currentNode.completedWord = data;
    this.count++
  } 

suggest(prefix) {
  this.suggestions = [];
  // let prefix = [...prefix.toLowerCase()];




}
 
  


}

