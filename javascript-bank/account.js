/* exported Account */
function Account(number, holder){
  this.number=number;
  this.holder=holder;
  this.transactions=[];
}
Account.prototype.withdraw=function(){
  if (this.transactions.amount > 0) {
    return true;
  }
  else {
    return false;
  }
}

Account.prototype.deposit=function(){
  if (this.transactions.amount > 0){
    return true;
  }
  else{
    return false;
  }
}

Account.prototype.getBalance= function(){
  if (this.transactions.length===0){
    return 0;
  }
  else{
    return this.getBalance;
  }
}
