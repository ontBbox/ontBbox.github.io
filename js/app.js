// 'use strict'
var axios = axios;
var BigNumber = BigNumber;
var client = dApi.client;
var ParameterType = dApi.ParameterType;
client.registerClient({});

var CONTRACT_HASH = 'dbd832c215029b1a32ab664c73b402467f0dcecf'
var BBOX_HASH = '1f9de81f6f7824f7101fe0d8ca303fb8081683df'
var ACCOUNT;
var ONT;
var ONG;
var TOKEN_NAME_LIST = []
var TOKEN_ADDRESS_LIST = []
var TOKEN_NAME_STR_LIST = []
var TOKEN_ADDRESS_STR_LIST = []
var TOKEN_HTML_LIST = ['ONT', 'ONG']
var CANDY_HTML_LIST = ['BBOX']
var CANDY_LIST



//  *************** load (load wallet && load candy) ****************
async function loadWallet(){
    
    try {
        ACCOUNT = await client.api.asset.getAccount();
        document.getElementById('account').innerText = ACCOUNT;
        
        let balance = await client.api.network.getBalance({ address: ACCOUNT })
        ONT = balance.ONT
        ONG = parseFloat(balance.ONG).toFixed(2)
        document.getElementById('ont_head').innerText = ONT;
        document.getElementById('balance_ont').innerText = ONT;
        document.getElementById('balance_ong').innerText = ONG;

    } catch(err){
        console.log(err)
    }

    await getBalanceToken()
}

async function getBalanceToken() {
    
    let tokenList = await getTokenList()
    let nameList = tokenList.nameList
    let addressList = tokenList.addressList
    document.getElementById('loadAlert').style.display = 'none'
    for (var i in nameList) {
        let name = client.api.utils.hexToStr(nameList[i])
        console.log(name)
        let hash = reverseHex(addressList[i])
        let balance = await invokeRead(hash, 'balanceOf', [{type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)}])
        if (balance != undefined) {
            console.log(name)
            TOKEN_HTML_LIST.push(name)
            let final_balance = 0
            if (balance != ''){
                final_balance = (hexStrToNum(balance)/10**8).toFixed(2)
            }
            html = `
            <div id="${name}" class="aui-conduct-cell">
                <div class="aui-conduct-list">
                    <a href="javascript:;">
                        <p>币种</p>
                        <h4>${name}</h4>
                    </a>
                    <a href="javascript:;">
                        <p>余额</p>
                        <h4>${final_balance}</h4>
                    </a>
                    <a href="javascript:;"  onclick="transfer('${name}', '${hash}')">
                        <div class="aui-loan-button">
                            <button>转账</button>
                        </div>
                    </a>
                </div>
                <div class="divHeight"></div>
            </div>`
            
            document.getElementById("TokenList").insertAdjacentHTML('beforeend', html)
        }
    console.log(TOKEN_HTML_LIST)
    }

    
}

async function getTokenList() {
    
    // method = 'getGlobalTokenAddress'
    // parameters = [{type: 'Boolean', value: false}]
    // let globalTokenAddress = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(globalTokenAddress);
    
    // method = 'getGlobalTokenName'
    // parameters = [{type: 'Boolean', value: false}]
    // let globalTokenName = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(globalTokenName);
    
    // method = 'getUserTokenAddress'
    // parameters = [{type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)}]
    // let userTokenAddress = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(userTokenAddress);
    
    // method = 'getUserTokenName'
    // parameters = [{type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)}]
    // let userTokenName = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(userTokenName);

    // let nameList = []
    // let addressList = []
    
    // if (typeof(userTokenName) == "object") {
    //     nameList = nameList.concat(userTokenName)
    // }
    // if (typeof(globalTokenName) == "object") {
    //     nameList = nameList.concat(globalTokenName)
    // }
    // if (typeof(userTokenAddress) == "object") {
    //     addressList = addressList.concat(userTokenAddress)
    // }
    // if (typeof(globalTokenAddress) == "object") {
    //     addressList = addressList.concat(globalTokenAddress)
    // }

    
    method = 'getTokenAddress'
    parameters = [{type: 'Boolean', value: false}]
    let addressList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenAddress);
    
    method = 'getTokenName'
    parameters = [{type: 'Boolean', value: false}]
    let nameList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenName);

    
    // for (var i = 0,l = nameList.length; i < l; i++) {
    //     TOKEN_NAME_LIST.push(client.api.utils.hexToStr(nameList[i]))
    // }
    // for (var i = 0,l = addressList.length; i < l; i++) {
    //     TOKEN_ADDRESS_LIST.push(reverseHex(addressList[i]))
    // }
    if (typeof(nameList) == 'object'){
        TOKEN_NAME_LIST = nameList
        TOKEN_ADDRESS_LIST = addressList
        console.log(TOKEN_NAME_LIST)
    }
    return {nameList:TOKEN_NAME_LIST, addressList:TOKEN_ADDRESS_LIST}
}

async function loadCandy() {

    // document.getElementById('candyBody').style = "width:414px;  overflow: hidden; margin: 4px auto; border: 1px solid #D6D6D6"


    try {
        ACCOUNT = await client.api.asset.getAccount();
        document.getElementById('account').innerText = ACCOUNT;
        
        // box_html = `
        // <div id='BBOX' class="aui-pre-item candy" onclick="getAirDrop('${BBOX_HASH}')">
        //     <h4 style="color:#d2af9c">BBOX (剩余 9.5)</h4>
        //     <h1 style="color:#f8c99f">量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量量</h1>
        //     <h2 style="color:#d2af9c">限量 10 ONT, 每人限领0.1</h2>
        //     <!-- <button onclick="getAirDrop()">立即领取</button> -->
        // </div>`
        // document.getElementById('candyBox').insertAdjacentHTML('beforeend', box_html)
        
        
        let candyList = await getCandyList()
        CANDY_LIST = candyList
        let styleList = ['aui-pre-one', 'aui-pre-two', 'aui-pre-three', 'aui-pre-four']
        document.getElementById('loadAlert').style.display = 'none'
        for (var i=0; i<candyList.length;i++ ) {
            if (i == 0) {
                style = ''
            } else {
                j = (i % 4) - 1 
                style = styleList[j]
            }
            candy = candyList[i]
            console.log(candy)
            CANDY_HTML_LIST.push(client.api.utils.hexToStr(candy.name))
            html = `
            <div id="${client.api.utils.hexToStr(candy.name)}" class="aui-pre-item ${style} candy" onclick="getAirDrop('${i}')">
                <h4 style="font-size:1.5rem"> </h4>
                <h1>${client.api.utils.hexToStr(candy.name)} <span style="font-size:0.5rem"> (糖果总量 ${hexStrToNum(candy.amount)/10**8}个 | 剩余 ${hexStrToNum(candy.balance)/10**8}个 )</span></h1>
                <h2>每人每天限领${hexStrToNum(candy.cell)/10**8}个</h2>
                <!-- <button onclick="getAirDrop('${candy}')">立即领取</button> -->
            </div>
            `
            document.getElementById('candyBox').insertAdjacentHTML('beforeend', html)
            // id = name

        }
        console.log(candyList)
    } catch(err){
        console.log(err)
    }
}

async function getCandyList(){
    method = 'getCandyAddressList'
    parameters = [{type: 'Boolean', value: false}]
    let addressList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenAddress); 
    
    method = 'getCandyNameList'
    parameters = [{type: 'Boolean', value: false}]
    let nameList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenAddress); 
    
    method = 'getCandyAmountList'
    parameters = [{type: 'Boolean', value: false}]
    let amountList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenAddress); 
    
    method = 'getCandybalanceList'
    parameters = [{type: 'Boolean', value: false}]
    let balanceList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenAddress); 
    
    method = 'getCandyCellList'
    parameters = [{type: 'Boolean', value: false}]
    let cellList = await invokeRead(CONTRACT_HASH, method, parameters)
    // console.log(globalTokenAddress); 

    // method = 'getCandyIntroList'
    // parameters = [{type: 'Boolean', value: false}]
    // let introduceList = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(globalTokenAddress); 

    // method = 'getCandyDetaileList'
    // parameters = [{type: 'Boolean', value: false}]
    // let detailList = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(globalTokenAddress); 

    // method = 'getCandyUrlList'
    // parameters = [{type: 'Boolean', value: false}]
    // let urlList = await invokeRead(CONTRACT_HASH, method, parameters)
    // // console.log(globalTokenAddress); 

    let candyList = []
    for (var i=addressList.length-1; i >=0; i--) {
        obj = {
            name: nameList[i],
            address: addressList[i],
            amount: amountList[i],
            balance: balanceList[i],
            cell: cellList[i],
            // introduce: introduceList[i],
            // detail: detailList[i],
            // url:urlList[i]
        }
        if (addressList[i] == BBOX_HASH | reverseHex(addressList[i]) == BBOX_HASH) {
            console.log(addressList[i])
            candyList.unshift(obj)
        } else {
            candyList.push(obj)
        }
    }
    return candyList;

}


//  *************** wallet (add token && transfer) **************** 
function add() {
    issue_html = `
    <input type="text" id="tokenAddress" placeholder=""  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    `
    Dialog.init(issue_html,{
        title : '请输入代币地址：',
        button : {
            确定 : function(){
                Dialog.close(this)
                Dialog.init('请到钱包插件中完成操作', {maskClick : 1});
                let address = document.getElementById('tokenAddress').value
                if (address.length < 1) {
                    Dialog.init('请输入正确的代币地址',500);
                } 
                else {
                    Dialog.close(this)
                    Dialog.init('请到钱包插件中完成操作', {maskClick : 1});
                    let result = addToken(address) 
                    result.then(res => {
                        console.log(res)
                        try {
                            if (typeof(res.result) == 'object' && res.result[res.result.length-1].length == 3){
                                Dialog.init('添加成功',{
                                    title : '添加结果',
                                    button : {
                                        确定 : function(){
                                            location.reload();
                                        }
                                    },
                                    style:"text-align:center;"
                                }); 
                            } else {
                                Dialog.init('添加失败',{
                                    title : '添加结果',
                                    button : {
                                        确定 : function(){
                                            location.reload();
                                        }
                                    },
                                    style:"text-align:center;"
                                });  
                            }
                        } catch(e) {
                            Dialog.init('添加失败',{
                                title : '添加结果',
                                button : {
                                    确定 : function(){
                                        location.reload();
                                    }
                                },
                                style:"text-align:center;"
                            });  
                        }
                    })

                }
            },
            取消 : function(){
                Dialog.close(this);
            }
        }
    });
}

async function addToken(address) {
    try {

        // let operation = 'saveUserToken';
        let operation = 'saveToken';
        let gasPrice = 500;
        let gasLimit = 200000;
        let args = [
            // {type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)},
            {type: 'ByteArray', value: reverseHex(address)}
        ]
        let result =  await invoke(CONTRACT_HASH, operation, args, gasPrice, gasLimit)

        return result
    } catch(e) {
        console.log(e)
    }
}

function transfer(Token, TokenAddress) {
    console.log(Token, TokenAddress)
    issue_html = `
    <label> 代币名称:</label>
    <input type="text" id="tokenName" value="${Token}" disabled="disabled" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 收款地址:</label>
    <input type="text" id="receiptAddress" placeholder=""  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 转账金额:</label>
    <input type="text" id="sendAmount" placeholder=""  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    `
    Dialog.init(issue_html,{
        title : '请输入转账信息：',
        button : {
            确定 : function(){
                let amount = document.getElementById('sendAmount').value
                let to = document.getElementById('receiptAddress').value
                
                if (to.length < 1 || client.api.utils.isAddress(to) == false){
                    Dialog.init('请输入正确的收款地址',1000);
                }
                else if (isNaN(parseFloat(amount))){
                    Dialog.init('请输入正确的代币数量',1000);
                }
                else if (Token == 'ONT' && floatOrInt(amount) == 'f') {
                    Dialog.init('ONT 转账金额必须为整数',1000); 
                }
                else {
                    Dialog.close(this)
                    Dialog.init('请到钱包插件中完成操作', {maskClick : 1});
                    if (Token == "ONT" | Token == "ONG") {
                        console.log(Token)
                        let result = transferAsset(Token, to, amount)
                        result.then(res => {
                            console.log(res)
                            try {
                                if (res){
                                    Dialog.init('转账成功',{
                                        title : '转账结果',
                                        button : {
                                            确定 : function(){
                                                location.reload();
                                            }
                                        },
                                        style:"text-align:center;"
                                    }); 
                                } else {
                                    Dialog.init('转账失败',{
                                        title : '转账结果',
                                        button : {
                                            确定 : function(){
                                                location.reload();
                                            }
                                        },
                                        style:"text-align:center;"
                                    });  
                                }
                            } catch(e) {
                                Dialog.init('转账失败',{
                                    title : '转账结果',
                                    button : {
                                        确定 : function(){
                                            location.reload();
                                        }
                                    },
                                    style:"text-align:center;"
                                });  
                            }
                        })
                    } else {
                        let result = transferToken(TokenAddress, to, amount)
                        result.then(res => {
                            console.log(res)
                            try {
                                if (typeof(res.result) == 'object' && res.result[res.result.length-1].length == 4){
                                    Dialog.init('转账成功',{
                                        title : '转账结果',
                                        button : {
                                            确定 : function(){
                                                location.reload();
                                            }
                                        },
                                        style:"text-align:center;"
                                    }); 
                                } else {
                                    Dialog.init('转账失败',{
                                        title : '转账结果',
                                        button : {
                                            确定 : function(){
                                                location.reload();
                                            }
                                        },
                                        style:"text-align:center;"
                                    });   
                                }
                            } catch(e) {
                                Dialog.init('转账失败',{
                                    title : '转账结果',
                                    button : {
                                        确定 : function(){
                                            location.reload();
                                        }
                                    },
                                    style:"text-align:center;"
                                });  
                            }
                        })
                    }
                }
            },
            取消 : function(){
                Dialog.close(this);
            }
        }
    });
}

async function transferAsset(asset, to, amount) {
    if (asset == 'ONG') {
        amount = parseFloat(amount) * (10 ** 9)
    }

    try {
        const result = await client.api.asset.send({ to, asset, amount});
        return result
    } catch(e) {
        console.log(e)
     }

}

async function transferToken(tokenAddress, to, amount) {
    
    try {

        let operation = 'transfer';
        let gasPrice = 500;
        let gasLimit = 200000;
        let am = parseFloat(amount) * (10 ** 8)
        let args = [
            {type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)},
            {type: 'ByteArray', value: client.api.utils.addressToHex(to)},
            {type: 'Interger', value: am}
        ]
        let result =  await invoke(tokenAddress, operation, args, gasPrice, gasLimit)
        return result
    } catch(e) {
        console.log(e)
    }
}

//  *************** candy (save token && get candy) **************** 
function airDrop() {
    
    for (var i = 0,l = TOKEN_NAME_LIST.length; i < l; i++) {
        TOKEN_NAME_STR_LIST.push(client.api.utils.hexToStr(TOKEN_NAME_LIST[i]))
    }
    for (var i = 0,l = TOKEN_ADDRESS_LIST.length; i < l; i++) {
        TOKEN_ADDRESS_STR_LIST.push(reverseHex(TOKEN_ADDRESS_LIST[i]))
    }
    
    option = ''
    for(var j=0; j < TOKEN_NAME_STR_LIST.length; j++){
        option = option + `
        <option value='${TOKEN_NAME_STR_LIST[j]}'></option>`
    }
    console.log(option)
    issue_html = `
    <label> 代币名称:</label>
    <input type="text" id="airDropName" list="itemlist" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <datalist id="itemlist">
        ${option}
    </datalist>  
    <label> 代币地址:</label>
    <input type="text" id="airDropAddress" onfocus="getTokenAddress()" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <!--
    <label> 项目简介:</label>
    <input type="text" id="tokenIntroduce" placeholder="不超过20个字符" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 项目详情:</label>
    <input type="text" id="tokenDetail" placeholder="不超过100个字符" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 项目官网地址:</label>
    <input type="text" id="tokenUrl" placeholder="http://" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    -->
    <label> 空投总量:</label>
    <input type="text" id="airDropAmount" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 每人每天可领取数量:</label>
    <input type="text" id="airDropCell" style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    `
    
    Dialog.init(issue_html,{
        title : '请输入必要信息：',
        button : {
            确定 : async function(){
                let name = document.getElementById('airDropName').value
                let address = document.getElementById('airDropAddress').value
                let amount = document.getElementById('airDropAmount').value
                let cell = document.getElementById('airDropCell').value
                // let introduce = document.getElementById('tokenIntroduce').value 
                // let detail = document.getElementById('tokenDetail').value 
                // let url = document.getElementById('tokenUrl').value 
                
                if (name.length < 1) {
                    Dialog.init('请输入代币名称',1000);
                }
                else if (name.length > 20) {
                    Dialog.init('代币名称过长',1000);
                }
                // else if (introduce.length > 20){
                //     Dialog.init('简介超过字数限制',1000);
                // }
                // else if (detail.length > 100){
                //     Dialog.init('详情超过字数限制',1000);
                // }
                // else if (detail.length > 100){
                //     Dialog.init('URL过长',1000);
                // }
                else if (isNaN(parseFloat(amount))){
                    Dialog.init('请输入正确的代币数量',1000);
                } 
                else if (isNaN(parseFloat(cell))){
                    Dialog.init('请输入正确的代币数量',1000);
                }
                else {
                    Dialog.close(this)
                    Dialog.init('请到钱包插件中完成操作', {maskClick : 1});
                    let result = await saveCandy(name, address, amount, cell)
                    console.log(result)
                    try {
                        if (typeof(result.result) == 'object' && result.result[result.result.length-1].length == 6){
                            Dialog.init('空投成功',{
                                title : '空投结果',
                                button : {
                                    确定 : function(){
                                        // location.reload();
                                        location.replace('candy.html')
                                    }
                                },
                                style:"text-align:center;"
                            }); 
                        } else {
                            Dialog.init('空投失败',{
                                title : '空投结果',
                                button : {
                                    确定 : function(){
                                        location.reload();
                                    }
                                },
                                style:"text-align:center;"
                            });  
                        }
                    } catch(e) {
                        Dialog.init('空投失败',{
                            title : '空投结果',
                            button : {
                                确定 : function(){
                                    location.reload();
                                }
                            },
                            style:"text-align:center;"
                        });  
                    }
                    // Dialog.init(`<h2>代币名称:</h2> ${name}  </br> 发行总量: ${amount} </br> 每人每日领取数量: ${cell}`, {
                    //     title: "请确认信息" ,
                    //     button: {
                    //         确定 : async function() { 
                    //             await saveCandy(name, address, amount, cell)
                    //         },
                    //         取消 : function() { 
                    //             Dialog.close(this)
                    //         }
                    //     }
                        
                    // })
                }
            },
            取消 : function(){
                Dialog.close(this);
            }
        }
    }); 
}

async function saveCandy(name, address, amount, cell) {
    let operation = 'saveCandy'
    let am = parseFloat(amount) * (10 ** 8)
    let ce = parseFloat(cell) * (10 ** 8)
    let args = [
        {type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)},
        {type: 'String', value: name},
        {type: 'ByteArray', value: reverseHex(address)},
        {type: 'Interger', value: am},
        {type: 'Interger', value: ce},
        // {type: 'String', value: introduce},
        // {type: 'String', value: detail},
        // {type: 'String', value: url} 
    ]
    let gasPrice = 500;
    let gasLimit = 200000;
    try {
        return await invoke(CONTRACT_HASH,  operation, args, gasPrice, gasLimit) 
    } catch(e) {
        console.log(e)
    }
}

function getTokenAddress(){
    let name = document.getElementById('airDropName').value;
    let index = TOKEN_NAME_STR_LIST.indexOf(name)
    if (index > -1) {
        document.getElementById('airDropAddress').value = TOKEN_ADDRESS_STR_LIST[index]
    }
}

function getAirDrop(i) {
    let candy = CANDY_LIST[parseInt(i)]
    console.log(candy)
    let html = `
    代币名称：${client.api.utils.hexToStr(candy.name)}</br> 
    代币地址：${reverseHex(candy.address)}</br>
    空投总量：${hexStrToNum(candy.amount)/10**8}</br>
    剩余总量：${hexStrToNum(candy.balance)/10**8}</br>
    每人每次可领取数量：${hexStrToNum(candy.cell)/10**8}</br>
    `
    Dialog.init(html,{
        title : '糖果详情：',
        button : {
            领取糖果 : async function(){
                Dialog.close(this)
                Dialog.init('请到钱包插件中完成操作', {maskClick : 1});
                let address = reverseHex(candy.address)
                let result = getCandy(address)
                result.then(res => {
                try {
                    if (typeof(res.result) == 'object' && res.result[res.result.length-1].length == 5){
                        Dialog.init('领取成功</br>每种代币每天只能领取1次, 24小时以后再来吧！',{
                            title : '领取结果',
                            button : {
                                确定 : function(){
                                    location.reload();
                                }
                            },
                            style:"text-align:center;"
                        }); 
                    }
                    else if (res.result[0] == '726563656976656420696e20323420686f7572'){
                        Dialog.init('领取失败</br>您24小时内已领取过该糖果</br>每种糖果每人24小时内只能领取一次',{
                            title : '领取结果',
                            button : {
                                确定 : function(){
                                    location.reload();
                                }
                            },
                            style:"text-align:center;"
                        });  
                    } 
                    
                    else {
                        Dialog.init('领取失败',{
                            title : '领取结果',
                            button : {
                                确定 : function(){
                                    location.reload();
                                }
                            },
                            style:"text-align:center;"
                        });   
                    }
                } catch(e) {
                    Dialog.init('领取失败',{
                        title : '领取结果',
                        button : {
                            确定 : function(){
                                location.reload();
                            }
                        },
                        style:"text-align:center;"
                    });  
                }
            })
            },
            放弃领取: function(){
                Dialog.close(this)
            }

        }
    })
}

async function getCandy(address){
    console.log(address)
    let operation = 'getCandy'
    let args = [
        {type: 'ByteArray', value: client.api.utils.addressToHex(ACCOUNT)},
        {type: 'ByteArray', value: reverseHex(address)},
    ]
    let gasPrice = 500;
    let gasLimit = 200000;
    try {
        let result = await invoke(CONTRACT_HASH, operation, args, gasPrice, gasLimit) 
        return result
    } catch(e) {
        console.log(e)
    }
}

//  ************************ issue token **************************
function issue() {
    issue_html = `
    <label > 代币名称:</label>
    <input type="text" id="name" placeholder="MyToken"  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 代币简称:</label>
    <input type="text" id="symbal" placeholder="MT"  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <label> 发行总量:</label>
    <input type="text" id="amount" placeholder="100000000"  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    <!--
    <label> 代币拥有者(默认为当前用户):</label>
    <input type="text" id="owner" value=${ACCOUNT} style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>
    -->
    `
    
    Dialog.init(issue_html,{
        title : '请输入必要信息：',
        button : {
            确定 : async function(){
                let name = document.getElementById('name').value
                let symbal = document.getElementById('symbal').value
                let amount = document.getElementById('amount').value
                // let owner = document.getElementById('owner').value
                let owner = ACCOUNT
                
                console.log((parseInt(amount)))
                if (name.length < 1) {
                    Dialog.init('请输入代币名称',1000);
                }
                else if (name.length > 20) {
                    Dialog.init('代币名称过长',1000);
                }
                else if (symbal.length < 1){
                    Dialog.init('请输入正确的代币简称',1000);
                }
                else if (symbal.length > 20) {
                    Dialog.init('代币简称过长',1000);
                } 
                else if (isNaN(parseInt(amount))){
                    Dialog.init('请输入正确的代币数量',1000);
                } 
                // else if (owner.length < 1 || client.api.utils.isAddress(owner) == false){
                //     Dialog.init('请输入正确的地址',1000);
                // }
                else {
                    Dialog.close(this)
                    Dialog.init('请到钱包插件中完成操作', {maskClick : 1}); 
                    
                    let deployResult = await deployToken(name, symbal, owner, amount)
                    
                    let res = deployResult.result
                    let hash = deployResult.hash
                    try {
                        if (typeof(res.result) == 'object' && res.result[res.result.length-1].length == 4){
                            Dialog.init(`${name} 部署成功</br>新部署的Token需要进行初始化才能生效</br>请点击确定立即进行初始化`,{
                                title : '部署结果',
                                button : {
                                    确定 : async function(){
                                        Dialog.close(this) 
                                        let initResult = await initToken(hash)
                                        try {
                                            if (typeof(initResult.result) == 'object' && initResult.result[initResult.result.length-1].length == 4){
                                                Dialog.init('初始化成功',{
                                                    title : '初始化结果',
                                                    button : {
                                                        确定 : function(){
                                                            location.reload();
                                                        }
                                                    },
                                                    style:"text-align:center;"
                                                }); 
                                            } else {
                                                Dialog.init('初始化失败',{
                                                    title : '初始化结果',
                                                    button : {
                                                        确定 : function(){
                                                            location.reload();
                                                        }
                                                    },
                                                    style:"text-align:center;"
                                                });  
                                            }
                                        } catch(e) {
                                                Dialog.init('初始化失败',{
                                                    title : '初始化结果',
                                                    button : {
                                                        确定 : function(){
                                                            location.reload();
                                                        }
                                                    },
                                                    style:"text-align:center;"
                                                });  
                                            }
                                    }
                                },
                                style:"text-align:center;"
                            }); 
                        } else {
                            Dialog.init('部署失败',{
                                title : '部署结果',
                                button : {
                                    确定 : function(){
                                        location.reload();
                                    }
                                },
                                style:"text-align:center;"
                            });  
                        }
                    } catch(e) {
                        Dialog.init('部署失败',{
                            title : '部署结果',
                            button : {
                                确定 : function(){
                                    location.reload();
                                }
                            },
                            style:"text-align:center;"
                        });  
                    }
                }
            },
            取消 : function(){
                Dialog.close(this);
            }
        }
    });
}

async function deployToken(name, symbal, owner, total) {
    console.log(name, symbal, owner, total)
    let code = makeCode(name, symbal, owner, total);
    let res = await getAvm(code)
    try {
            let avm =  res.data.avm
            let hash = JSON.parse(res.data.abi).hash
            let tokenHash = reverseHex(hash)
            console.log(tokenHash)
            
            let avm1 = avm.replace("b'", "")
            let avm2 = avm1.replace("'", "") 
            console.log(avm2)

            let operation = 'issueToken';
            let gasPrice = 500;
            let gasLimit = 25000000;
            let args = [
                {type: 'ByteArray', value: client.api.utils.addressToHex(owner)},
                {type: 'String', value: name},
                {type: 'ByteArray', value: tokenHash},
                {type: 'ByteArray', value: avm2}
            ]
            console.log(args)
            let result =  await invoke(CONTRACT_HASH, operation, args, gasPrice, gasLimit)

            return {result,hash}
    } catch(e) {
        console.log(e)
    }
}

async function initToken(hash) {
    operation = 'init'
    args = [{type: 'Boolean', value: false}]
    let gasPrice = 500;
    let gasLimit = 200000;
    try {
        return await invoke(hash,  operation, args, gasPrice, gasLimit) 
    } catch(e) {
        console.log(e)
    }
}

async function getAvm(code) {
    
    try {
        let result = axios.post(
            'https://smartxcompiler.ont.io/api/v2.0/python/compile', 
            {
                code:code,
                type:"Python",
                compilerVersion:2
            },
            {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    // 'DNT': 1,
                    // 'Origin': 'https://smartx.ont.io',
                    // 'Referer': 'https://smartx.ont.io/',
                    // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
                } 
            }
        )
        return result.then(res => {return res})

    } catch(e) {
        console.log(e)
    }
}

function makeCode(name, symbal, owner, total) {

    let OEP4 =  `
OntCversion = '2.0.0'
"""
An Example of OEP-4
"""
from ontology.interop.System.Storage import GetContext, Get, Put, Delete
from ontology.interop.System.Runtime import Notify, CheckWitness
from ontology.interop.System.Action import RegisterAction
from ontology.builtins import concat
from ontology.interop.Ontology.Runtime import Base58ToAddress

TransferEvent = RegisterAction("transfer", "from", "to", "amount")
ApprovalEvent = RegisterAction("approval", "owner", "spender", "amount")

ctx = GetContext()

NAME = "${name}"
SYMBOL = "${symbal}"
DECIMALS = 8
FACTOR = 100000000
OWNER = Base58ToAddress("${owner}")
TOTAL_AMOUNT = ${total}
BALANCE_PREFIX = bytearray(b'\\x01')
APPROVE_PREFIX = b'\\x02'
SUPPLY_KEY = 'TotalSupply'


def Main(operation, args):
    """
    :param operation:
    :param args:
    :return:
    """
    # 'init' has to be invokded first after deploying the contract to store the necessary and important info in the blockchain
    if operation == 'init':
        return init()
    if operation == 'name':
        return name()
    if operation == 'symbol':
        return symbol()
    if operation == 'decimals':
        return decimals()
    if operation == 'totalSupply':
        return totalSupply()
    if operation == 'balanceOf':
        if len(args) != 1:
            return False
        acct = args[0]
        return balanceOf(acct)
    if operation == 'transfer':
        if len(args) != 3:
            return False
        else:
            from_acct = args[0]
            to_acct = args[1]
            amount = args[2]
            return transfer(from_acct,to_acct,amount)
    if operation == 'transferMulti':
        return transferMulti(args)
    if operation == 'transferFrom':
        if len(args) != 4:
            return False
        spender = args[0]
        from_acct = args[1]
        to_acct = args[2]
        amount = args[3]
        return transferFrom(spender,from_acct,to_acct,amount)
    if operation == 'approve':
        if len(args) != 3:
            return False
        owner  = args[0]
        spender = args[1]
        amount = args[2]
        return approve(owner,spender,amount)
    if operation == 'allowance':
        if len(args) != 2:
            return False
        owner = args[0]
        spender = args[1]
        return allowance(owner,spender)
    return False

def init():
    """
    initialize the contract, put some important info into the storage in the blockchain
    :return:
    """

    if len(OWNER) != 20:
        Notify(["Owner illegal!"])
        return False
    if Get(ctx,SUPPLY_KEY):
        Notify("Already initialized!")
        return False
    else:
        total = TOTAL_AMOUNT * FACTOR
        Put(ctx,SUPPLY_KEY,total)
        Put(ctx,concat(BALANCE_PREFIX,OWNER),total)

        # Notify(["transfer", "", Base58ToAddress(OWNER), total])
        # ownerBase58 = AddressToBase58(OWNER)
        TransferEvent("", OWNER, total)

        return True


def name():
    """
    :return: name of the token
    """
    return NAME


def symbol():
    """
    :return: symbol of the token
    """
    return SYMBOL


def decimals():
    """
    :return: the decimals of the token
    """
    return DECIMALS


def totalSupply():
    """
    :return: the total supply of the token
    """
    return Get(ctx, SUPPLY_KEY)


def balanceOf(account):
    """
    :param account:
    :return: the token balance of account
    """
    if len(account) != 20:
        raise Exception("address length error")
    return Get(ctx,concat(BALANCE_PREFIX,account))


def transfer(from_acct,to_acct,amount):
    """
    Transfer amount of tokens from from_acct to to_acct
    :param from_acct: the account from which the amount of tokens will be transferred
    :param to_acct: the account to which the amount of tokens will be transferred
    :param amount: the amount of the tokens to be transferred, >= 0
    :return: True means success, False or raising exception means failure.
    """
    if len(to_acct) != 20 or len(from_acct) != 20:
        raise Exception("address length error")
    if CheckWitness(from_acct) == False or amount < 0:
        return False

    fromKey = concat(BALANCE_PREFIX,from_acct)
    fromBalance = Get(ctx,fromKey)
    if amount > fromBalance:
        return False
    if amount == fromBalance:
        Delete(ctx,fromKey)
    else:
        Put(ctx,fromKey,fromBalance - amount)

    toKey = concat(BALANCE_PREFIX,to_acct)
    toBalance = Get(ctx,toKey)
    Put(ctx,toKey,toBalance + amount)

    # Notify(["transfer", AddressToBase58(from_acct), AddressToBase58(to_acct), amount])
    # TransferEvent(AddressToBase58(from_acct), AddressToBase58(to_acct), amount)
    TransferEvent(from_acct, to_acct, amount)

    return True


def transferMulti(args):
    """
    :param args: the parameter is an array, containing element like [from, to, amount]
    :return: True means success, False or raising exception means failure.
    """
    for p in args:
        if len(p) != 3:
            # return False is wrong
            raise Exception("transferMulti params error.")
        if transfer(p[0], p[1], p[2]) == False:
            # return False is wrong since the previous transaction will be successful
            raise Exception("transferMulti failed.")
    return True


def approve(owner,spender,amount):
    """
    owner allow spender to spend amount of token from owner account
    Note here, the amount should be less than the balance of owner right now.
    :param owner:
    :param spender:
    :param amount: amount>=0
    :return: True means success, False or raising exception means failure.
    """
    if len(spender) != 20 or len(owner) != 20:
        raise Exception("address length error")
    if CheckWitness(owner) == False:
        return False
    if amount > balanceOf(owner) or amount < 0:
        return False

    key = concat(concat(APPROVE_PREFIX,owner),spender)
    Put(ctx, key, amount)

    # Notify(["approval", AddressToBase58(owner), AddressToBase58(spender), amount])
    # ApprovalEvent(AddressToBase58(owner), AddressToBase58(spender), amount)
    ApprovalEvent(owner, spender, amount)

    return True


def transferFrom(spender,from_acct,to_acct,amount):
    """
    spender spends amount of tokens on the behalf of from_acct, spender makes a transaction of amount of tokens
    from from_acct to to_acct
    :param spender:
    :param from_acct:
    :param to_acct:
    :param amount:
    :return:
    """
    if len(spender) != 20 or len(from_acct) != 20 or len(to_acct) != 20:
        raise Exception("address length error")
    if CheckWitness(spender) == False:
        return False

    fromKey = concat(BALANCE_PREFIX, from_acct)
    fromBalance = Get(ctx, fromKey)
    if amount > fromBalance or amount < 0:
        return False

    approveKey = concat(concat(APPROVE_PREFIX,from_acct),spender)
    approvedAmount = Get(ctx,approveKey)
    toKey = concat(BALANCE_PREFIX,to_acct)

    if amount > approvedAmount:
        return False
    elif amount == approvedAmount:
        Delete(ctx,approveKey)
        Put(ctx, fromKey, fromBalance - amount)
    else:
        Put(ctx,approveKey,approvedAmount - amount)
        Put(ctx, fromKey, fromBalance - amount)

    toBalance = Get(ctx, toKey)
    Put(ctx, toKey, toBalance + amount)

    # Notify(["transfer", AddressToBase58(from_acct), AddressToBase58(to_acct), amount])
    # TransferEvent(AddressToBase58(from_acct), AddressToBase58(to_acct), amount)
    TransferEvent(from_acct, to_acct, amount)

    return True


def allowance(owner,spender):
    """
    check how many token the spender is allowed to spend from owner account
    :param owner: token owner
    :param spender:  token spender
    :return: the allowed amount of tokens
    """
    key = concat(concat(APPROVE_PREFIX,owner),spender)
    return Get(ctx,key)`
    
    return OEP4
}

// **************************** utils *****************************
async function invokeRead(contract, method, parameters) {
    try {
        let result = await client.api.smartContract.invokeRead({ contract, method, parameters });
        return result
    } catch(e) {
        console.log(e)
    }  
}

async function invoke(scriptHash, operation, args, gasPrice, gasLimit) {
    try {
        let result = await client.api.smartContract.invoke({
            scriptHash,
            operation,
            args,
            gasPrice,
            gasLimit
        });
        return result
    } catch (e) {
      console.log(e);
    }
}

function isPC() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let flag = true;
    for (const v of Agents) {
      if (userAgentInfo.indexOf(v) > 0) {
        flag = false;
        break;
      }
    }
    console.log(userAgentInfo, flag)
    return flag;
}

function reverseHex(hex) {
    if (hex.length % 2 !== 0) {
        throw new Error(`Incorrect Length: ${hex}`);
    }
    let out = '';
    for (let i = hex.length - 2; i >= 0; i -= 2) {
        out += hex.substr(i, 2);
    }
    return out;
}

function hexStrToNum(hexStr) {
    let new_num = reverseHex(hexStr)
    let num = parseInt(new_num, 16)
    return num
}

function floatOrInt(number) {
    var str = number+"";
    if(str.indexOf(".")==-1){
        return 'i'
    }else{
        return 'f'
    }
}

function showWechat() {
    Dialog.init('<img src="images/wechatewm.png" width="100%">',{
        title : '扫面二维码加入微信群',
        button : {
            确定 : function(){Dialog.close(this);}
        }
    });
}

function showTelegrame() {
    Dialog.init('<img src="images/telegrameewm.png" width="100%">',{
        title : '扫面二维码加入电报群',
        button : {
            确定 : function(){Dialog.close(this);}
        }
    });
}

async function network(){
    try {
        let provider = await client.api.provider.getProvider();
        console.log(provider)
        let network = await client.api.network.getNetwork();
        let type = network.type
        console.log(type)
        switch(type){
            case 'TEST':
                alert('温馨提示：您的本体钱包链接的是测试网络！');
                break;
            case 'PRIVATE':
                alert('温馨提示：您的本体钱包连接的是私人网络！\n请切换到主网或者测试网！');
                break; 

            
        }
    } catch(e) {
        console.log(e)
        alert('使用本程序，请先安装本体钱包插件！\n钱包安装说明：\nhttps://dev-docs.ont.io/#/docs-cn/cyano/00-overview')
    }
    
    

}

$(function(){  
    $('#tokenSearch').bind('input propertychange', function() {  
        let content = $('#tokenSearch').val();
        let contentPair
        if (typeof(content) == 'string') {
            if (content >= 'a' && content <= 'z') {
                contentPair = content.toUpperCase()
            } else if (content >= 'A' && content <= 'Z') {
                contentPair = content.toLowerCase()
            }
        }
        console.log(content)
        for (let i=0; i<TOKEN_HTML_LIST.length; i++) {
            let token = TOKEN_HTML_LIST[i]
            if (token.indexOf(content) < 0 && token.indexOf(contentPair)){
                document.getElementById(token).style.display = 'none'
            } else {
                document.getElementById(token).style.display = 'inline' 
            }
        }
    }); 

    $('#candySearch').bind('input propertychange', function() {  
        let content = $('#candySearch').val();
        let contentPair
        if (typeof(content) == 'string') {
            if (content >= 'a' && content <= 'z') {
                contentPair = content.toUpperCase()
            } else if (content >= 'A' && content <= 'Z') {
                contentPair = content.toLowerCase()
            }
        }
        for (let i=0; i<CANDY_HTML_LIST.length; i++) {
            let token = CANDY_HTML_LIST[i]
            if (token.indexOf(content) < 0 && token.indexOf(contentPair)){
                document.getElementById(token).style.display = 'none'
            } else {
                document.getElementById(token).style.display = '' 
            }
        } 
    }); 
})

network()
