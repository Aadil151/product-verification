//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that registers and verifies products using barcodes
 * @author Aadil151
 */
contract YourContract {
	// State Variables
	address public immutable owner;

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

	// Modifier: used to define a set of rules that must be met before or after a function is executed
	// Check the withdraw() function
	modifier isOwner() {
		// msg.sender: predefined variable that represents address of the account that called the current function
		require(msg.sender == owner, "Not the Owner");
		_;
	}

	function isOwne() external view returns (bool) {
		if(msg.sender == owner) {
			return true;
		} else {
			return false;
		}
	}

	mapping(string => bool) public barcodes;

    function registerProduct(string calldata barcode) external {
        require(!barcodes[barcode], "Product with this barcode already registered");
        barcodes[barcode] = true;
    }

    function verifyProduct(string calldata barcode) external view returns (bool) {
        return barcodes[barcode];
    }

	/**
	 * Function that allows the owner to withdraw all the Ether in the contract
	 * The function can only be called by the owner of the contract as defined by the isOwner modifier
	 */
	function withdraw() public isOwner {
		(bool success, ) = owner.call{ value: address(this).balance }("");
		require(success, "Failed to send Ether");
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}
