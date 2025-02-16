// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

interface IUniswapV2Pair {
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function token0() external view returns (address);
    function token1() external view returns (address);
}

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);   
}

contract TokenLock {
    uint256 ethAmount;
    uint256 timeUp = block.timestamp + 31536000; // 1 yıl
    address tokenAddress;
    address lp;
    address owner; 
    address WETH = address(0x0);
    


    constructor(uint256 _ethAmount, address _tokenAddress, address _lp, address _owner) {
        ethAmount = _ethAmount;
        tokenAddress = _tokenAddress;
        lp = _lp;
        owner = _owner;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function raiseStaking(uint256 _amount) public {
        IERC20 _token = IERC20(WETH);
        _token.transferFrom(owner, address(this), _amount);

        ethAmount += _amount;
    }

    function getEthAmount() public view returns(uint256) {
        return ethAmount;
    }


    function rugPullInsurance() public view {
        IUniswapV2Pair pair = IUniswapV2Pair(lp);
        (uint112 reserve0, uint112 reserve1,) = pair.getReserves();
        if (!(pair.token0() == WETH && reserve0 > 0) || (pair.token1() == WETH && reserve1 > 0)) {


            IERC20 token = IERC20(tokenAddress);
            //uint256 totalSupply = token.totalSupply();
  
            uint256 investorBalance = token.balanceOf(msg.sender); 
            address sender = msg.sender;

            uint256 investorShare = (investorBalance * 1e18) / reserve1; 
            uint256 investorPayout = (ethAmount * investorShare) / 1e18;

            if (investorPayout > 0) {
                payable(investor).transfer(investorPayout);
            }
        }

            // Güvence bedelini sıfırla
            ethAmount = 0;
            
        
}
    

    function getStake() public onlyOwner {
        require(block.timestamp >= timeUp);

        IERC20 weth = IERC20(WETH);
        require(weth.transfer(owner, ethAmount), "Transfer failed");

        ethAmount = 0; 
    }
}
