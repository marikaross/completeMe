
import Node from './Node';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }


insert(data) {
  let letters = [...data.toLowerCase()];
  let currentNode = this.root;
  
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
    let suggestions = [];
    let currentNode = this.root;
    let sanitizePrefix = [...prefix.toLowerCase()];

    sanitizePrefix.forEach(letter => {
      currentNode = currentNode.children[letter];
    })

    const search = node => {

      if(node.completedWord) {
        suggestions.push(node.completedWord)
      }

      let nodeKeys = Object.keys(node.children)

      nodeKeys.forEach(key => {
      search(node.children[key])
      })
    }
      search(currentNode);
    console.log(suggestions)
      return suggestions;
  }
 
  


}

