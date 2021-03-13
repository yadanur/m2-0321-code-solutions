/* exported Account */
function Account(number, holder){
  this.number=number;
  this.holder=holder;
  this.transactions=[];
}
Account.prototype.withdraw=function(amount){
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }
  var newTransaction = new Transaction('withdraw',amount);
  this.transactions.push(newTransaction);
  return true;
}

Account.prototype.deposit=function(amount){
  if (amount <= 0 || !Number.isInteger(amount)){
    return false;
  }
  var newTransaction = new Transaction ('deposit',amount);
  this.transactions.push(newTransaction);
  return true;
}

Account.prototype.getBalance= function(){
  if (this.transactions.length===0){
    return 0;
  }
  else{
    var accountBalance=0;
    for (i=0; i<this.transactions.length ; i++){
      var thisTransactionAmount = this.transactions[i].amount;
      var thisTransactionType = this.transactions[i].type;
      if (thisTransactionType==='deposit'){
        accountBalance += thisTransactionAmount;
      }else {
        accountBalance -= thisTransactionAmount;
      }
    }
    return accountBalance;
  }
}
