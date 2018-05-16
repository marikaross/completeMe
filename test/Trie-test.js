import { expect } from 'chai';
import Node from '../lib/Node.js';
import Trie from '../lib/Trie.js';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

    it('should have a root node', () => {
    expect(trie.root).to.deep.equal(new Node());
    });
  
  describe('insert', () => {

  it('should be able to add a node to the Trie', () => {
        trie.insert('dog');
        trie.insert('dogs');
        trie.insert('doggie');

      console.log(JSON.stringify(trie, null, 4))
      console.log(trie.root.children)
      expect(Object.keys(trie.root.children)[0]).to.equal('d');
      });

  it('should ')
  })
})
