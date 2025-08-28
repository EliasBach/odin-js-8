const HashMap = (() => {
    function HashMap() {
        let capacity = 8
        let buckets = new Array(capacity).fill(null)
        let loadfactor = 0.75
            
        const hash = (key) => {
            let hashCode = 0
            const primeNumber = 31
            for (let i = 0; i < key.length; i++) {
                hashCode = primeNumber * hashCode + key.charCodeAt(i)
            }
            return hashCode
        }

        const resize = () => {
            console.log("<resizing buckets of HashMap>")
            const oldEntries = entries()
            capacity = capacity * 2
            buckets.length = 0;
            buckets.push(...new Array(capacity).fill(null))
                
            oldEntries.forEach((entry) => {
                const key = entry[0]
                const index = hash(key) % capacity
                if (buckets[index] === null) {
                    buckets[index] = [entry]
                } else {
                    buckets[index].push(entry)
                }
            })
        }

        const set = (key, value) => {
            const currentLoadFactor = length() / capacity
            if (currentLoadFactor > loadfactor) {
                resize()
            }
            const hashCode = hash(key)
            const index = hashCode % capacity
            if (buckets[index] === null) {
                buckets[index] = [[key, value]]
            } else {
                const bucket = buckets[index]
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i][0] === key) {
                        bucket[i][1] = value
                        return
                    }
                }
                bucket.push([key, value])
            }
        }

        const get = (key) => {
            const hashCode = hash(key)
            const index = hashCode % capacity
            const bucket = buckets[index]
            if (bucket !== null) {
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i][0] === key) {
                        return bucket[i][1]
                    }
                }
            }
            return null
        }

        const has = (key) => {
            const hashCode = hash(key)
            const index = hashCode % capacity
            const bucket = buckets[index]
            if (bucket !== null) {
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i][0] === key) {
                        return true
                    }
                }
            }
        return false
        }

        const remove = (key) => {
            const hashCode = hash(key)
            const index = hashCode % capacity
            const bucket = buckets[index]
            if (bucket !== null) {
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i][0] === key) {
                        bucket.splice(i, 1)
                        return true
                    }
                }
            }
            return false
        }

        const length = () => {
            let length = 0
            buckets.forEach((bucket) => {
                if (bucket !== null) {
                    length += bucket.length
                }
            })
            return length
        }

        const clear = () => {
            buckets = new Array(capacity).fill(null)
        }

        const keys = () => {
            let keys = []
            buckets.forEach((bucket) => {
                if (bucket !== null) {
                    bucket.forEach((entry) => {
                        keys.push(entry[0])
                    })
                }
            })
            return keys
        }

        const values = () => {
            let values = []
            buckets.forEach((bucket) => {
                if (bucket !== null) {
                    bucket.forEach((entry) => {
                        values.push(entry[1])
                    })
                }
            })
            return values
        }

        const entries = () => {
            let entries = []
            buckets.forEach((bucket) => {
                if (bucket !== null) {
                    bucket.forEach((entry) => {
                        entries.push(entry)
                    })
                }
            })
            return entries
        }

        return {
            buckets, // for testing, should be hidden otherwise
            set,
            get,
            has,
            remove,
            length,
            clear,
            keys,
            values,
            entries
        }
    }
    return HashMap

})();

// testing
const test = HashMap() 
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
console.log("keys:")
console.log(test.keys()) // print keys
console.log("values:")
console.log(test.values()) // print values
console.log(`For the key: "apple" the value is: "${test.get('apple')}"`) // get a value with key
test.remove('carrot') // remove a value with key
console.log(test.buckets)
