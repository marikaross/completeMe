import { expect } from 'chai';
import Node from '../lib/Node.js';
import Trie from '../lib/Trie.js';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

    it('should instantiate a new trie', () => {
      expect(trie).to.deep.equal(new Trie);
    })

    it('should have a root node', () => {
    expect(trie.root).to.deep.equal(new Node());
    });
  
  describe('count', () => {
    it('should count each new word that enters the trie', () => {
      let data1 = 'dog';
      let data2 = 'banana';
      trie.insert(data1)
      trie.insert(data2)
    expect(trie.count).to.equal(2)
    })
  })

  describe('insert', () => {

  it('should be able to add a node to the Trie', () => {
    let data = 'dog'

    trie.insert(data);

  expect(Object.keys(trie.root.children)[0]).to.equal('d');
  });

  it('should insert a new word', () => {
    let data = 'dog'

    trie.insert(data);

  expect(trie.count).to.equal(1)
  })

  it('should insert multiple words', () => {
    let data1 = 'platypus';
    let data2 = 'dog'

    trie.insert(data1)
    trie.insert(data2)

    expect(trie.count).to.equal(2)
  })

})

  describe('suggest', () => {

    it('should return an empty array when trie is empty', () => {
      let expectedArray = []

      let actualArray = trie.suggest('')

      expect(expectedArray).to.deep.equal(actualArray)
    })

    it('should return an array', () => {
      
      let expectedArray = ['dog', 'double', 'door'];
      
      trie.insert('dog');
      trie.insert('double');
      trie.insert('door');
      let actualArray = trie.suggest('d');
      // console.log(JSON.stringify(trie, null, 4))
      expect(expectedArray).to.deep.equal(actualArray);
    })

    it('should return an array that only includes words related to prefix', () => {
      let expectedArray = ['dog', 'double', 'door'];

      trie.insert('dog');
      trie.insert('double');
      trie.insert('door');
      trie.insert('');
      trie.insert('carrot');

      let actualArray = trie.suggest('d');
      // console.log(JSON.stringify(trie, null, 4))
      expect(expectedArray).to.deep.equal(actualArray);

    })



  })


})
