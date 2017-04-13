function DList ()
{
    this.head = null;
    this.tail = null;

    this.popFront = function ()
    {
        if (!this.head) {
            return null;
        }
        var val = this.head.val;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }
        return val;
    };

    this.addBack = function (val)
    {
        var oldTail = this.tail;
        this.tail = new Node(val);
        if (!this.head) {
            this.head = this.tail;
            return;
        }
        oldTail.next = this.tail;
        this.tail.prev = oldTail;
    };
}

function Node (val)
{
    this.val = val;
    this.next = null;
    this.prev = null;
}

var list = new DList();
console.log(list.popFront());
list.addBack('a');
list.addBack('b');
list.addBack('c');
console.log(list.popFront());
console.log(list.popFront());
list.addBack('d');
console.log(list.popFront());
console.log(list.popFront());
list.addBack('e');
console.log(list.popFront());
console.log(list.popFront());