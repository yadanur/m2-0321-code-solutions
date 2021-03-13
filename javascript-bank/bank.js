/* exported Bank */
function Bank(){
  this.nextAccountNumber=1;
  this.accounts=[];
}

Bank.prototype.openAccount=function(holder,balance){
  if (balance>0 && Number.isInteger(balance)){
    var accountNumber = this.nextAccountNumber;
    var newAccount = new Account(accountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++; //Assign a new accountnumber when opening a new account
    return accountNumber;
  }
  else{
    return null;
  }
}

Bank.prototype.getAccount=function(number){
  var matching=false;
  for (i=0; i<this.accounts.length; i++){
    var currentAccount=this.accounts[i];
    if (number === currentAccount.number) {
      matching=true;
      return this.accounts[i];
    }
  }
  if (matching===false){
    return null;
  }
}

Bank.prototype.getTotalAssets=function(){
  if (this.accounts.length===0){
    return 0;
  }
  else{
    var totalAssets = 0;

    for (var i=0; i<this.accounts.length; i++){
      totalAssets+=this.accounts[i].getBalance();
    }
    return totalAssets;
  }
}
