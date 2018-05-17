import { expect } from 'chai';
import Node from '../lib/Node.js';

describe('Node', () => {
  let node; 

  beforeEach(() => {
    node = new Node();
  })

   it('should exist', () => {
     expect(node).to.exist;
   })

   it.only('should have a default value of null', () => {
    expect(node.completedWord).to.equal(null);
   })
 })

