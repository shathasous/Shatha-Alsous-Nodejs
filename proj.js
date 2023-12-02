import  {MyDoublyLinkedList}  from "./MyDoublyLinkedList"

let dls = new MyDoublyLinkedList()
dls.push("Alaa")
dls.push("Sara")
dls.push("Nena")

console.log("before the edit")

dls.show()
dls.set(1, "Mera")
console.log("After the edit")
dls.show()
console.log("After the pop of " + dls.pop())
dls.show()
dls.unshift("Betra")
console.log("After the unShift  " )
dls.show()
console.log("After the Shift " + dls.shift())
dls.show()

dls.insert(1,"Cate")
console.log("After the insert  " )
dls.show()

console.log("After the remove of " + dls.remove(1))
dls.show()
