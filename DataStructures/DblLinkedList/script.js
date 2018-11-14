var Node = function(data, prev) {
    this.prev = prev;
    this.data = data;
    this.next = null;
};
var DoublyLinkedList = function() {
    var head = null;
    var tail = null;
    var length = 0;
    var node;
    var currentNode;
    var previousNode;
    var nextNode;
    var i = 0;

    this.all = () => {
        for(i = 0; i < length; i++) {
            console.log('index '+ i + ' = ' + z.elementAt(i));
        }
    }

    this.currentNode = () => {
        return currentNode;
    }

    this.node = () => {
        return node;
    }

    this.head = () => {
        return head;
    }
    this.tail = () => {
        return tail;
    }
    this.size = () => {
        return length;
    }

    this.add = (element) => {
        node = new Node(element);

        if (length === 0) {
            head = node;
        } else {
            currentNode = head;


            while (currentNode.next) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode = currentNode;
            currentNode.next = node;
            currentNode.next.prev = previousNode;
        }

        length++;

    };

    this.elementAt = (index) => {
        currentNode = head;

        if (index > -1 && index < length) {
            i = 0;

            while (i < index) {
                currentNode = currentNode.next;
                i++;
            }

            return currentNode.data;

        } else {
            return 'index should be > -1 && < length';
        }



    }

    this.pop = () => {
        if (length === 0) {
            return null;
        }

        currentNode = head;
        var previousNode = currentNode.data;


        while (currentNode.next) {
            previousNode = currentNode.data;
            currentNode = currentNode.next;
        }


        currentNode.data = currentNode.prev;
        currentNode.prev = previousNode;

        length--;
    }

    this.removeAt = (index) => {
        i = 0;

        if (length === 0 || index > length-1) {
            return null;
        }

        currentNode = head;

        if(index === 0) {
            head = currentNode.next;
            currentNode.next.prev = null;
        } else {
            while (i < index) {
                nextNode = currentNode.next;
                previousNode = currentNode.prev;

                currentNode = currentNode.next;
                i++;
            }

            currentNode.prev.next = currentNode.next;

            if(currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            }
        }


        length--;
    }
};

let z = new DoublyLinkedList;
/*
z.add('first');
z.add('second');
z.add('third');
z.add('fourth');
z.add('fifth');*/
