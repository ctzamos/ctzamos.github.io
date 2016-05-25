function Bundling(B1, B2, Bline1, Bline2) {
  this.B1 = B1;
  this.B2 = B2;
  this.Bline1 = Bline1;
  this.Bline2 = Bline2;
  
  this.steps = 100;
  this.step = 1.0 / this.steps;
}

Bundling.prototype.isValidPrice = function(price) {
  var lx = this.Bline1.priceIntercept(price);
  var ly = this.Bline2.priceIntercept(price);
  //console.log(lx,ly,price);
  if(lx < 0 || ly < 0 || lx + ly < price) return false;
  //console.log(lx,price-lx);
  //console.log(ly,price-ly);
  return true;
}

Bundling.prototype.computeAreaLB = function(price) {
  var lx = this.Bline1.priceIntercept(price);
  var ly = this.Bline2.priceIntercept(price);
  
  if(lx < 0 || ly < 0 || lx + ly < price) return 1;
  
  if(lx > price) lx = price;
  if(ly > price) ly = price;
  var y = price - lx, x = price - ly, s = price-x-y;
  var d = 
    - this.B1.survival(x) * this.B2.survival(y) + 
    y * this.B1.survival(lx) * this.B2.pdf(y) + 
    x * this.B1.pdf(x) * this.B2.survival(ly);

  for(var i=0;i<this.steps;i++) {
    var cx = x + s * this.step * i, cy = y + s * this.step * (this.steps-i);
    d += 
      (this.B1.survival(cx) - this.B1.survival(cx+this.step*s)) * 
      (this.B2.survival(y) - this.B2.survival(cy));
    d += cy * (this.B1.survival(cx) - this.B1.survival(cx+this.step*s)) * this.B2.pdf(cy);
    d += (cx + this.step*s) * (this.B2.survival(cy-this.step*s) - 
          this.B2.survival(cy)) * this.B1.pdf(cx+this.step*s);
  }
  return d;
}


Bundling.prototype.computeAreaUB = function(price) {
  var lx = this.Bline1.priceIntercept(price);
  var ly = this.Bline2.priceIntercept(price);
  
  if(lx < 0 || ly < 0 || lx + ly < price) return 1;
  
  if(lx > price) lx = price;
  if(ly > price) ly = price;
  var y = price - lx, x = price - ly, s = price-x-y;
  var d = 
    - this.B1.survival(x) * this.B2.survival(y) + 
    y * this.B1.survival(lx) * this.B2.pdf(y) + 
    x * this.B1.pdf(x) * this.B2.survival(ly);
  
    
  for(var i=1;i<=this.steps;i++) {
    var cx = x + s * this.step * i, cy = y + s * this.step * (this.steps-i);
    d += 
      (this.B1.survival(cx-this.step*s) - this.B1.survival(cx)) * 
      (this.B2.survival(y) - this.B2.survival(cy));
    d += cy * (this.B1.survival(cx-this.step*s) - this.B1.survival(cx)) * this.B2.pdf(cy);
    d += (cx-this.step*s) * (this.B2.survival(cy) - this.B2.survival(cy+this.step*s)) * this.B1.pdf(cx-this.step*s);
  }
  return d;
}

Bundling.prototype.findBestPrice = function() {  
  return 0.5*(this.findBestPriceUB() + this.findBestPriceLB());
}

Bundling.prototype.findBestPriceUB = function() {
  var s = 0, t = 2, price;
  
  for(var i=0;i<40;i++) {
    price = 0.5*(s+t);
    if(this.computeAreaUB(price) > 0) t = price;
    else s = price;
  }
  return price;
}

Bundling.prototype.findBestPriceLB = function() {
  var s = 0, t = 2, price;
  
  for(var i=0;i<40;i++) {
    price = 0.5*(s+t);
    if(this.computeAreaLB(price) > 0) t = price;
    else s = price;
  }
  
  return price;
}
