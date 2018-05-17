import Node from './Node';
import fs from 'fs';
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }


  insert(data) {
    let letters = [...data.toLowerCase()];
    let currentNode = this.root;

    if (!data) {
      return;
    }
  
    letters.forEach((letter) => {
      if (!currentNode.children[letter]) {
      currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];

    })
      if (!currentNode.completedWord) { 
        currentNode.completedWord = data;
        this.count++;
      }
    } 

  suggest(prefix) {
    let suggestions = [];
    let currentNode = this.root;
    let sanitizePrefix = [...prefix.toLowerCase()];

    if (!prefix) {
      return [];
    }

    sanitizePrefix.forEach(letter => {
      currentNode = currentNode.children[letter];
    });

    const search = node => {

       if (node.completedWord) {
        suggestions.push(node.completedWord);
      }

      let nodeKeys = Object.keys(node.children);


      nodeKeys.forEach(key => {
        search(node.children[key])
      });
    };
    search(currentNode)
    return suggestions;
  }

  count() {
    return this.count
  }
 

  


}

