/*
function Beta(a,b) {
  this.a = parseFloat(a);
  this.b = parseFloat(b);
  this.poly = [];
  
  var P = 1;
  for(var i=0;i<=this.a;i++) {
    this.poly.push(P);
    P *= (this.b + i) / (i + 1.0);
  }
  P *= (this.a + 1.0)/this.b;
  this.poly.push(-P);
  
  this.c = P * (this.a+this.b+1.0);
}
*/

function Beta(a,b) {
  this.a = parseFloat(a)-1;
  this.b = parseFloat(b)-1;
  this.poly = [1];
  var P = 1;
  for(var i=1;i<=this.a;i++) {
    this.poly.push(this.b * P);
    P *= (this.b + i) / (i + 1.0);
  }
  P *= (this.a + 1.0);
  this.poly.push(-P);
  
  this.c = P * (this.a+this.b+1.0);
}


Beta.prototype.pdf = function(x) {
  return this.c * Math.pow(x,this.a) * Math.pow(1-x,this.b);
}

Beta.prototype.survival = function(x) {
  var ans = 0;
  for(var j=0;j<this.poly.length;j++) ans += this.poly[j] * Math.pow(x,j);
  return ans * Math.pow(1-x,this.b);
}

Beta.prototype.cdf = function(x) {
  return 1 - this.survival(x);
}

Beta.prototype.virtual = function(x) {
  var ans = 0;
  for(var j=0;j<this.poly.length;j++) ans += this.poly[j] * Math.pow(x,j);
  return this.c * Math.pow(x,this.a+1) / ans;
}

Beta.prototype.virtualD = function(x) {
  var ans = 0;
  for(var j=0;j<this.poly.length;j++) ans += (j-this.a-1) * this.poly[j] * Math.pow(x,j-this.a-2);
  return - Math.pow(this.virtual(x),2) * ans / this.c;
}

/*
var f = Math.pow(x,Bt[t].a+1) * Math.pow(1-x,Bt[t].b);
        var f2 = 0;
        for(var j=i;j<steps;j++) {
          var t1 = j*step, t2 = (j+1)*step;
          f2 += 0.5 * (Math.pow(t1,Bt[t].a) * Math.pow(1-t1,Bt[t].b) + Math.pow(t2,Bt[t].a) * Math.pow(1-t2,Bt[t].b)) / steps;
        }
        if((f2/f) < 1e-9) continue;
        y = f/f2;*/
