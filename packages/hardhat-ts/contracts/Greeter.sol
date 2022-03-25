pragma solidity ^0.8.12;

//SPDX-License-Identifier: MIT

contract Greeter {
    string private _greet;

    constructor(string memory initialGreet) {
        _greet = initialGreet;
    }

    function greet() public view returns (string memory currentGreet) {
        return _greet;
    }

    function setGreeting(string memory newGreet) public {
        _greet = newGreet;
    }
}
