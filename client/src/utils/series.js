class Series {
  constructor(n){
    this.prime;
    this.triangle;
    this.fib;
  }
  //Method to get the result of resolving the series
  doOperation(n){
    let series = (this.getPrime(n)) * (this.getTriangle(n)) / (this.getFibonacci(n))
    return series
  }
  /* This is the most efficient way I came out with to get the prime number at a given position in the series, 
  this method doesn´t use a while loop which was causing a brakdown at number 999, instead this one brakes at 9999. 
  It uses the Sieve of Eratosthenes algorithm, to reduce the memory footprint of the sieve array we can use an 
  Int8Array instead of a boolean array to represent the sieve, where the value -1 represents a composite number 
  and 1 represents a prime number making it possible to generate larger primes without running out of memory. */
  getPrime(number) {
    let n = number + 3
    const limit = Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)));
    const sieve = new Int8Array(limit + 1).fill(1);
    sieve[0] = 0;
    sieve[1] = 0;
    let count = 0;
    for (let p = 2; count < n; p++) {
      if (sieve[p]) {
        count++;
        if (count === n) {
          return p;
        }
        for (let i = p * p; i <= limit; i += p) {
          sieve[i] = 0;
        }
      }
    }
  }

  /* This method of the class solves the equation of the triangular series */
  getTriangle(number){
    let n = number - 1
    if (n <= 0) return null;
    
    this.triangle = (n * (n + 1)) / 2
    return this.triangle
  }

  /* this function is a good option for finding the Fibonacci number at a specific position, as it uses a simple 
  loop to calculate the value iteratively, rather than using recursion, which can be less efficient for larger numbers. */
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