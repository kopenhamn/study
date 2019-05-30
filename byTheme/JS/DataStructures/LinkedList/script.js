function LinkedList() {
    let head = null;
    let length = 0;
    let currentNode;
    var i;
    var removedElement;

    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    this.removedElement = () => {
        return removedElement;
    }

    this.head = () => {
        return head;
    }

    this.size = () => {
        return length;
    }

    this.add = (element) => {
        let node = new Node(element);

        if (head === null) {
            head = node;
        } else {
            currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }

    this.remove = (element) => {

        if (head) {
            let previousNode = currentNode;
            currentNode = head;

            while (currentNode.next) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            currentNode = previousNode;
            currentNode.next = null;
        }

        length--;
    }

    this.currentNode = () => {
        return currentNode;
    }

    this.indexOf = (element) => {
        currentNode = head;
        i = 0;

        while (currentNode.element != element) {
            currentNode = currentNode.next;
            i++;
        }

        return i;
    }

    this.elementAt = (element) => {
        currentNode = head;
        i = 0;

        while (i < element) {
            currentNode = currentNode.next;
            i++;
        }

        return currentNode.element;
    }

    this.removeAt = function(element) {
        currentNode = head;

        if (element > -1 && element < length) {
            var i = 0;
            while (i < element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }

            removedElement = currentNode.element;
            previousNode.next = currentNode.next;
            length--;
            return removedElement;
        } else {
            return null;
        }
    };

    this.addAt = (index, element) => {
    var node = new Node(element);
    currentNode = head;
    var i = 0;

    if(index === 0) {
        if(length === 0) {
          head = node;
        } else {
          currentNode.next = head.next;
          head = node;
          head.next = currentNode.next;
        }


    } else if(index > 0 && index < length){
      while(i < index) {
        currentNode = currentNode.next;
        var nextNode = currentNode;
        i++;
      }

      currentNode = node;
      currentNode.next = nextNode;

    } else {
      return false;
    }




    length++;


  }
}

let z = new LinkedList;

z.add('first');
z.add('second');
z.add('third');
z.add('forth');
z.add('fifth');

//console.log(z.indexOf('first'));
//console.log(z.indexOf('fifth'));

console.log(z.elementAt(1));
console.log(z.elementAt(2));
console.log(z.elementAt(3));
console.log(z.elementAt(4));
console.log(z.elementAt(5));

console.log(z.size());

z.remove();
console.log(z.size());

console.log('Element before: ' + z.elementAt(1));
z.removeAt(1);
console.log('deleted: ' + z.removedElement());
console.log('Element after: ' + z.elementAt(1));
