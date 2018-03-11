pragma solidity ^0.4.17;
/**
    very simple mony flow contract
    Taher Elhossin
 */

contract MyTestContract {

    uint256 public total;
    address owner;

    // Construct to just track my contruct owner
    function MyTestContract() {
        owner =  msg.sender;
    }

    /**
    send function take what ever value in the message and track it in total variable 
    Note: value of the message automatically added to contract public address global balance
     */
    function takeMony() public payable {       
        total += msg.value; 
    }

    /**
    Traverse balance of contract from glabal state not UTXO (thank you doctor Sameh :D )
     */
    function getBalance() public constant returns(uint256) {        
        return this.balance;
    }

    /**
    Transfer money to sent address
     */
    function payMoneyFor(address add1) public payable {
        require(msg.sender == owner);       
        add1.transfer(total); 
                   
    }    
    
}