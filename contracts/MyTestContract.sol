pragma solidity ^0.4.17;
/**
    very simple mony flow contract
    Taher Elhossin
 */

contract MyTestContract {

    uint256 public total;
    address owner;

    function MyTestContract() {
        owner =  msg.sender;
    }

    function takeMony() public payable {       
        total += msg.value; 
    }

    function getBalance() public constant returns(uint256) {        
        return this.balance;
    }

    function payMonyFor(address add1) public payable {
        require(msg.sender == owner);       
        add1.transfer(total); 
                   
    }    
    
}