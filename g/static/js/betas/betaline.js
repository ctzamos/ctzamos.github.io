function BetaLine(B1, B2) {
  this.B1 = B1;
  this.B2 = B2;
}

BetaLine.prototype.valueAt = function(x) {
  var y = this.B1.virtual(x);

  //if(this.B1.b == 0) console.log('x',x,'y',y);
  y = 2 + this.B2.a + this.B2.b - y;
  if(y <= 0) return -1;
  if(this.B2.b == 0) return 2;
  y = 1.0 - this.B2.b/y;
  return y;
}

BetaLine.prototype.derivativeAt = function(x) {
  return - this.B1.virtualD(x) * Math.pow(1-this.valueAt(x),2) / this.B2.b;
}

BetaLine.prototype.priceIntercept = function(price) {
  var s = 0, t = 1, x, y, dy;
  
  
  for(var i=0;i<40;i++) {
    x = 0.5*(s+t);
    y = this.valueAt(x);
    if(y < 0) {t = x; continue;}
    dy = this.derivativeAt(x);
    if(dy > -1) {s = x; continue;}
    
    if(x+y < price) t = x;
    else s = x;
  }
  x = t;  y = this.valueAt(x);
  if(y < 0) return x;
  if(x+y < price - 1e-6) return -1;
  return x;
}