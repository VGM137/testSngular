class Series {
  constructor(n){
    this.prime;
    this.triangle;
    this.fib;
  }
  doOperation(n){
    let series = (this.getPrime(n)) * (this.getTriangle(n)) / (this.getFibonacci(n))
    return series
  }
  getPrime(number){
    let n = number + 3
    let count = 0;
    let num = 2;
    
    while (count < n) {
      if (this.isPrime(num)) {
        count++;
      }
      num++;
    }
    
    return num - 1;
  }
  isPrime(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }

  getTriangle(number){
    let n = number - 1
    if (n <= 0) return null;
    
    this.triangle = (n * (n + 1)) / 2
    return this.triangle
  }

  getFibonacci(number){
    let n = number - 2
    let pureFib
    if (n <= 1) {
      pureFib = n;
    }else{
      let prev = 0;
      let curr = 1;
      for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
      }
      pureFib = curr
    }

    this.fib = pureFib
    return this.fib;
  }
}

export default Series