function Node(value = null, next = null) {
    return {
      value,
      next
    }
}

function LinkedList() {
    let size = 0
    let head = null
    let tail = null

    return {
        get size(){
            return size
        },
        get head(){
            return head
        },
        get tail(){
            return tail
        },

        append(value) {
            const newNode = Node(value)
            head ? tail.next = newNode : head = newNode
            tail = newNode
            size++;
        },

        prepend(value) {
            const newNode = Node(value)
            head ? newNode.next = head : tail = newNode
            head = newNode
            size++;
        },

        at(index) {
            if (index < 0 || index >= size) {
                console.log("index out of bounds");
                return null;
            }
            
            let current = head;
            for (let i = 0; i<index; i++) {
                current = current.next
            }   
            return current
        },

        contains(value) {
            let current = head;
            for (let i = 0; i < size; i++) {
                if (current.value == value) {
                    return true
                }
                current = current.next
            }
            return false
        },

        find(value) {
            let current = head
            for (let index = 0; index < size; index++) {
                if (current.value == value) {
                    return index
                }
                current = current.next
            }    
            return null
        },

        toString() {
            let string = ""
            let current = head
            for (let i = 0; i < size; i++) {
                string += `( ${current.value} ) -> `
                current = current.next
            }    
            return string
        },

        insertAt(value, index) {
            // for future implementation
        }, 
        
        removeAt(index) {
            // for future implementation
        }
    }
}

export { LinkedList };