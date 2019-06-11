// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    let sum = 0
    this.sides.forEach(side => {
      sum += side
    });
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) { return false }
    const s1 = this.sides[0]
    const s2 = this.sides[1]
    const s3 = this.sides[2]
    if (s1 < (s2 + s3) && s2 < (s1 + s3) && s3 < (s1 + s2)) { return true }
    else { return false }
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2
  }
  get isValid() {
    if (this.countSides !== 4) return false
    const s1 = this.sides[0]
    const s2 = this.sides[1]
    const s3 = this.sides[2]
    const s4 = this.sides[3]
    return (s1 === s2 && s2 === s3 && s3 === s4)
  }
}