class Polygon {
  constructor(array) {
    this.array = array
    this.count = this.array.length
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    let sum = 0
    this.array.forEach(num => {
      sum += num
    })
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if ( !Array.isArray( this.array ) ) return;
    if ( this.count !== 3 ) return;
    let side1 = this.array[ 0 ]
    let side2 = this.array[ 1 ]
    let side3 = this.array[ 2 ]
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
  }
}

class Square extends Polygon {
  get isValid() {
    const uniqueValues = [...new Set(this.array)]
    if (uniqueValues[0] === uniqueValues[1]) return true
    else if (uniqueValues.length === 1) return true
    else return false
  }

  get area() {
    return this.array[0] * this.array[1]
  }
}