const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   constructor() {
     this.rootNode = null;
   }

   root() {
     return this.rootNode;
   }


   add(data) {
     this.rootNode = this._addNewNode(this.rootNode, data);
   }

   _addNewNode(node, data) {
     if (!node) {
       return new Node(data);
     } 

     if (data > node.data) {
        node.right = this._addNewNode(node.right, data);
     } else if (data < node.data) {
        node.left = this._addNewNode(node.left, data);
     }

     return node;
   }


   has(data) {
     return this._findNode(this.rootNode, data) !== null;
   }


   find(data) {
     return this._findNode(this.rootNode, data);
   }

   _findNode(node, data) {
     if (!node) {
       return null;
     }

     if (data < node.data) {
       return this._findNode(node.left, data);
     } else if (data > node.data) {
       return this._findNode(node.right, data);
     }
     return node;
   }


   remove(data) {
     this.rootNode = this._removeNode(this.rootNode, data);
   }

   _removeNode(node, data) {
     if (!node) {
       return null;
     }

     if (data < node.data) {
       node.left = this._removeNode(node.left, data);
     } else if (data > node.data) {
       node.right = this._removeNode(node.right, data);
     } else {
       if (!node.left && !node.right) {
         node = null;
       } else if (!node.left) {
         node = node.right;
       } else if (!node.right) {
         node = node.left;
       } else {

         const minVal = this._minFromRight(node.right);

         node.data = minVal;
         node.right = this._removeNode(node.right, minVal);
       }
     }

     return node;
   }

   _minFromRight(node) {
     while (node.left) {
       node = node.left;
     }
     return node.data;
   }

   min() {
     const min = this._findMin(this.rootNode);
     return min ? min.data : null;
   }

   _findMin(node) {
     if (!node) {
       return null;
     }

     while (node.left) {
       node = node.left;
     }

     return node;
  }

   max() {
     const max = this._findMax(this.rootNode);
      return max ? max.data : null;
   }

   _findMax(node) {
     if (!node) {
       return null;
     }

     while (node.right) {
       node = node.right;
     }

     return node;
   }
}

module.exports = {
  BinarySearchTree
};