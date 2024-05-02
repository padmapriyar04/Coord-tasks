// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract DemoContract{
    mapping (address=> uint256) tickets;
    address payable wallet;
    uint256 public ticketprice;
    uint256 public ticketsCount;
    enum State{Waiting,Ready,Active}
    State public state;
    address admin;

    constructor (address payable  _wallet, uint256 _ticketprice, uint256 _ticketCount) {
        wallet = _wallet;
        admin = msg.sender;
        ticketprice = _ticketprice;
        ticketsCount = _ticketCount;
    }

    modifier onlyAdmin(){
        require(msg.sender == admin,"Only Admin can activate or make changes..");
        _;
    }

    modifier saleActive(){
        require(state == State.Active,"Sale isn't active!");
        _;
    }

    function activate() public onlyAdmin{
        state = State.Active;
    }

    function buyticket() public payable saleActive {
        require(ticketsCount > 0, "No more tickets available");
        require(msg.value >= ticketprice, "Insufficient funds");
        tickets[msg.sender] += 1;
        ticketsCount -= 1;
        wallet.transfer(msg.value);
    }

    function withdrawETH(uint256 amount) public onlyAdmin{
        wallet.transfer(amount);
    }

    function updateTicketDetails(uint256 _ticketPrice, uint256 _totalTickets) public onlyAdmin {
        ticketprice = _ticketPrice;
        ticketsCount = _totalTickets;
    }
}