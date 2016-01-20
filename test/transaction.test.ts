

describe('my first transaction test', () => {
    it('app init', () => {
        //Arrange
        var accountParameters = {name: 'GCD', NIB:'123456789', currency:'euro', total:'0', type: 'debit'}; 
        var accounts = new Array<Account>();
        
        //Act
        var account = Account.init(accountParameters);
        accounts.concat(account);
        
        //Assert
        
    })
});