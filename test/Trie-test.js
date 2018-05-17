import { expect } from 'chai';
import Node from '../lib/Node.js';
import Trie from '../lib/Trie.js';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

    it('should instantiate a new trie', () => {

    })

    it('should have a root node', () => {
    expect(trie.root).to.deep.equal(new Node());
    });
  
  describe('insert', () => {

  it('should be able to add a node to the Trie', () => {
        trie.insert('dog');
        trie.insert('dogs');
        trie.insert('doggie');

      expect(Object.keys(trie.root.children)[0]).to.equal('d');
      });

  it('should insert a new word', () => {
    //setup

    //execution
    
    //expect
  })

  it('should insert multiple words', () => {

  })

  describe('suggest', () => {
    it('should return an array', () => {
      
      let expectedArray = ['dog', 'double', 'door'];
      
      trie.insert('dog');
      trie.insert('double');
      trie.insert('door');
      let actualArray = trie.suggest('d');
      
      console.log(JSON.stringify(trie, null, 4))
      expect(expectedArray).to.deep.equal(actualArray);
    })

    it('should return an array that only includes words related to prefix', () => {
      let expectedArray = ['dog', 'double', 'door'];

      trie.insert('dog');
      trie.insert('double');
      trie.insert('door');
      trie.insert('carrot');
      let actualArray = trie.suggest('d');

      expect(expectedArray).to.deep.equal(actualArray);
    })

  })


})
