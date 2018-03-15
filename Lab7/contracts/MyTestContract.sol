pragma solidity ^0.4.17;
/**
    very simple mony flow contract
    Taher Elhossin
 */

contract MyTestContract {

    uint256 public total;
    mapping( address=>uint) public balances;
    address owner;
    address one;
    address two;

    // Construct to just track my contruct owner
    function MyTestContract() {
        owner =  msg.sender;
        one =  0x7ba1ad487a503fc9b2ae00aed76fdacf09408137;
        two  = 0xeb9b7e6fa6cd76082848b02b7bc73cbb670ff41a;
    }

    /**
    send function take what ever value in the message and track it in total variable 
    Note: value of the message automatically added to contract public address global balance
     */
    function takeMony() public payable {   
        require(msg.sender == one || msg.sender == two);
        total += msg.value;
        balances[msg.sender] += msg.value;
        
        if (balances[one] > 0 && balances[two] > 0) {
            owner.transfer(total); 
        }
    }

    /**
    get balance of contract from glabal state not UTXO (thank you doctor :D )
     */
    function getBalance() public constant returns(uint256) {        
        return this.balance;
    }
    
}
