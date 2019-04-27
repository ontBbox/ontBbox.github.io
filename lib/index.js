module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: TransactionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/api/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["TransactionType"]; });



/***/ }),

/***/ "./src/api/types.ts":
/*!**************************!*\
  !*** ./src/api/types.ts ***!
  \**************************/
/*! exports provided: TransactionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionType", function() { return TransactionType; });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["BookKeeper"] = 2] = "BookKeeper";
    TransactionType[TransactionType["Claim"] = 3] = "Claim";
    TransactionType[TransactionType["Deploy"] = 208] = "Deploy";
    TransactionType[TransactionType["Invoke"] = 209] = "Invoke";
    TransactionType[TransactionType["Enrollment"] = 4] = "Enrollment";
    TransactionType[TransactionType["Vote"] = 5] = "Vote";
})(TransactionType || (TransactionType = {}));

/***/ }),

/***/ "./src/client/asset.ts":
/*!*****************************!*\
  !*** ./src/client/asset.ts ***!
  \*****************************/
/*! exports provided: assetApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetApi", function() { return assetApi; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");

const assetApi = {
    getAccount() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('asset.getAccount');
    },
    getPublicKey() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('asset.getPublicKey');
    },
    send(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('asset.send', args);
    }
};

/***/ }),

/***/ "./src/client/identity.ts":
/*!********************************!*\
  !*** ./src/client/identity.ts ***!
  \********************************/
/*! exports provided: identityApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityApi", function() { return identityApi; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");

const identityApi = {
    getIdentity() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('identity.getIdentity');
    },
    getDDO(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('identity.getDDO', args);
    },
    addAttributes(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('identity.addAttributes', args);
    },
    removeAttribute(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('identity.removeAttribute', args);
    }
};

/***/ }),

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/*! exports provided: registerClient, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset */ "./src/client/asset.ts");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./src/client/identity.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./src/client/message.ts");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network */ "./src/client/network.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider */ "./src/client/provider.ts");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerClient", function() { return _proxy__WEBPACK_IMPORTED_MODULE_5__["registerClient"]; });

/* harmony import */ var _smartContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smartContract */ "./src/client/smartContract.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/client/utils.ts");








const api = {
    asset: _asset__WEBPACK_IMPORTED_MODULE_0__["assetApi"],
    identity: _identity__WEBPACK_IMPORTED_MODULE_1__["identityApi"],
    message: _message__WEBPACK_IMPORTED_MODULE_2__["messageApi"],
    network: _network__WEBPACK_IMPORTED_MODULE_3__["networkApi"],
    provider: _provider__WEBPACK_IMPORTED_MODULE_4__["providerApi"],
    smartContract: _smartContract__WEBPACK_IMPORTED_MODULE_6__["smartContractApi"],
    utils: _utils__WEBPACK_IMPORTED_MODULE_7__["utilsApi"]
};


/***/ }),

/***/ "./src/client/message.ts":
/*!*******************************!*\
  !*** ./src/client/message.ts ***!
  \*******************************/
/*! exports provided: messageApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageApi", function() { return messageApi; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");

const messageApi = {
    signMessageHash(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('message.signMessageHash', args);
    },
    verifyMessageHash(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('message.verifyMessageHash', args);
    },
    signMessage(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('message.signMessage', args);
    },
    verifyMessage(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('message.verifyMessage', args);
    }
};

/***/ }),

/***/ "./src/client/network.ts":
/*!*******************************!*\
  !*** ./src/client/network.ts ***!
  \*******************************/
/*! exports provided: networkApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkApi", function() { return networkApi; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");

const networkApi = {
    getNodeCount() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getNodeCount');
    },
    getBlockHeight() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getBlockHeight');
    },
    getMerkleProof(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getMerkleProof', args);
    },
    getStorage(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getStorage', args);
    },
    getAllowance(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getAllowance', args);
    },
    getBlock(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getBlock', args);
    },
    getTransaction(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getTransaction', args);
    },
    getNetwork() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getNetwork');
    },
    getBalance(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getBalance', args);
    },
    isConnected() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.isConnected');
    },
    getUnboundOng(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getUnboundOng', args);
    },
    getContract(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getContract', args);
    },
    getSmartCodeEvent(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getSmartCodeEvent', args);
    },
    getBlockHeightByTxHash(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getBlockHeightByTxHash', args);
    },
    getBlockHash(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getBlockHash', args);
    },
    getBlockTxsByHeight(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getBlockTxsByHeight', args);
    },
    getGasPrice() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getGasPrice');
    },
    getGrantOng(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getGrantOng', args);
    },
    getMempoolTxCount() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getMempoolTxCount');
    },
    getMempoolTxState(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getMempoolTxState', args);
    },
    getVersion() {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('network.getVersion');
    }
};

/***/ }),

/***/ "./src/client/provider.ts":
/*!********************************!*\
  !*** ./src/client/provider.ts ***!
  \********************************/
/*! exports provided: providerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerApi", function() { return providerApi; });
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-timeout */ "promise-timeout");
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_timeout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");


const providerApi = {
    getProvider() {
        return Object(promise_timeout__WEBPACK_IMPORTED_MODULE_0__["timeout"])(Object(_proxy__WEBPACK_IMPORTED_MODULE_1__["call"])('provider.getProvider'), 1000).catch(() => Promise.reject('NO_PROVIDER'));
    }
};

/***/ }),

/***/ "./src/client/proxy.ts":
/*!*****************************!*\
  !*** ./src/client/proxy.ts ***!
  \*****************************/
/*! exports provided: registerClient, call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClient", function() { return registerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony import */ var _ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ont-community/window-post-message-proxy */ "@ont-community/window-post-message-proxy");
/* harmony import */ var _ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rpc_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rpc/rpc */ "./src/rpc/rpc.ts");


let windowProxy;
let rpc;
function registerClient({ logMessages = false, logWarnings = false }) {
    windowProxy = new _ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0__["WindowPostMessageProxy"]({
        name: 'page',
        target: 'content-script',
        logMessages,
        suppressWarnings: !logWarnings
    });
    rpc = new _rpc_rpc__WEBPACK_IMPORTED_MODULE_1__["Rpc"]({
        source: 'page',
        destination: 'background',
        logMessages: false,
        postMessage: windowProxy.postMessage.bind(windowProxy, window)
    });
}
async function call(method, ...params) {
    return rpc.call(method, ...params);
}

/***/ }),

/***/ "./src/client/smartContract.ts":
/*!*************************************!*\
  !*** ./src/client/smartContract.ts ***!
  \*************************************/
/*! exports provided: smartContractApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartContractApi", function() { return smartContractApi; });
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/client/proxy.ts");

const smartContractApi = {
    invoke(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('smartContract.invoke', args);
    },
    invokeRead(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('smartContract.invokeRead', args);
    },
    deploy(args) {
        return Object(_proxy__WEBPACK_IMPORTED_MODULE_0__["call"])('smartContract.deploy', args);
    }
};

/***/ }),

/***/ "./src/client/utils.ts":
/*!*****************************!*\
  !*** ./src/client/utils.ts ***!
  \*****************************/
/*! exports provided: utilsApi, str2ab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilsApi", function() { return utilsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str2ab", function() { return str2ab; });
/* harmony import */ var base_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base-x */ "base-x");
/* harmony import */ var base_x__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base_x__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "crypto-js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable global-require */
const typedarrayToBuffer = __webpack_require__(/*! typedarray-to-buffer */ "typedarray-to-buffer");
const base58 = base_x__WEBPACK_IMPORTED_MODULE_0__('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
const utilsApi = {
    strToHex(str) {
        return ab2hexstring(str2ab(str));
    },
    hexToStr(hex) {
        return ab2str(hexstring2ab(hex));
    },
    addressToHex(str) {
        return base58ToHex(str);
    },
    hexToAddress(str) {
        return hexToBase58(str);
    },
    isAddress(str) {
        try {
            base58ToHex(str);
            return true;
        } catch (_) {
            return false;
        }
    }
};
function base58ToHex(base58Encoded) {
    const decoded = base58.decode(base58Encoded);
    const hexEncoded = ab2hexstring(decoded).substr(2, 40);
    if (base58Encoded !== hexToBase58(hexEncoded)) {
        throw new Error('[addressToU160] decode encoded verify failed');
    }
    return hexEncoded;
}
const ADDR_VERSION = '17';
function hexToBase58(hexEncoded) {
    const data = ADDR_VERSION + hexEncoded;
    const hash = sha256(data);
    const hash2 = sha256(hash);
    const checksum = hash2.slice(0, 8);
    const datas = data + checksum;
    const buffer = typedarrayToBuffer(new Uint8Array(hexstring2ab(datas)));
    return base58.encode(buffer);
}
function sha256(data) {
    const hex = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Hex.parse(data);
    const sha = crypto_js__WEBPACK_IMPORTED_MODULE_1__["SHA256"](hex).toString();
    return sha;
}
function hexstring2ab(str) {
    const result = [];
    while (str.length >= 2) {
        result.push(parseInt(str.substring(0, 2), 16));
        str = str.substring(2, str.length);
    }
    return result;
}
function ab2hexstring(arr) {
    let result = '';
    const uint8Arr = new Uint8Array(arr);
    for (let i = 0; i < uint8Arr.byteLength; i++) {
        let str = uint8Arr[i].toString(16);
        str = str.length === 0 ? '00' : str.length === 1 ? '0' + str : str;
        result += str;
    }
    return result;
}
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}
function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: client, provider, Tunnel, Rpc, TransactionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./src/client/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "client", function() { return _client__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./src/provider.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return _provider__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _rpc_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpc/rpc */ "./src/rpc/rpc.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rpc", function() { return _rpc_rpc__WEBPACK_IMPORTED_MODULE_2__["Rpc"]; });

/* harmony import */ var _rpc_tunnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rpc/tunnel */ "./src/rpc/tunnel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tunnel", function() { return _rpc_tunnel__WEBPACK_IMPORTED_MODULE_3__["Tunnel"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/api/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionType", function() { return _api__WEBPACK_IMPORTED_MODULE_4__["TransactionType"]; });








/***/ }),

/***/ "./src/provider.ts":
/*!*************************!*\
  !*** ./src/provider.ts ***!
  \*************************/
/*! exports provided: registerContentProxy, registerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerContentProxy", function() { return registerContentProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerProvider", function() { return registerProvider; });
/* harmony import */ var _ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ont-community/window-post-message-proxy */ "@ont-community/window-post-message-proxy");
/* harmony import */ var _ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill-ts */ "webextension-polyfill-ts");
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rpc_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpc/rpc */ "./src/rpc/rpc.ts");



let rpc;
function registerContentProxy({ logMessages = false, logWarnings = false }) {
    const windowPostMessageProxy = new _ont_community_window_post_message_proxy__WEBPACK_IMPORTED_MODULE_0__["WindowPostMessageProxy"]({
        logMessages,
        suppressWarnings: !logWarnings,
        name: 'content-script',
        target: 'page'
    });
    windowPostMessageProxy.addHandler({
        handle: msg => webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__["browser"].runtime.sendMessage(msg),
        test: msg => msg.type === 'dAPI.js' && msg.source === 'page'
    });
}
function registerProvider({ provider, logMessages }) {
    rpc = new _rpc_rpc__WEBPACK_IMPORTED_MODULE_2__["Rpc"]({
        source: 'background',
        destination: 'page',
        logMessages,
        addListener: webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_1__["browser"].runtime.onMessage.addListener
    });
    function checkedRegister(name, method) {
        if (method === undefined) {
            throw new Error('DApi provider does not implement ' + name);
        }
        rpc.register(name, method);
    }
    checkedRegister('asset.getAccount', provider.asset.getAccount);
    checkedRegister('asset.getPublicKey', provider.asset.getPublicKey);
    checkedRegister('asset.send', provider.asset.send);
    checkedRegister('identity.getIdentity', provider.identity.getIdentity);
    checkedRegister('identity.getDDO', provider.identity.getDDO);
    checkedRegister('identity.addAttributes', provider.identity.addAttributes);
    checkedRegister('identity.removeAttribute', provider.identity.removeAttribute);
    checkedRegister('message.signMessage', provider.message.signMessage);
    checkedRegister('message.verifyMessage', provider.message.verifyMessage);
    checkedRegister('message.signMessageHash', provider.message.signMessageHash);
    checkedRegister('message.verifyMessageHash', provider.message.verifyMessageHash);
    checkedRegister('network.getAllowance', provider.network.getAllowance);
    checkedRegister('network.getBalance', provider.network.getBalance);
    checkedRegister('network.getBlock', provider.network.getBlock);
    checkedRegister('network.getBlockHeight', provider.network.getBlockHeight);
    checkedRegister('network.getMerkleProof', provider.network.getMerkleProof);
    checkedRegister('network.getNetwork', provider.network.getNetwork);
    checkedRegister('network.getNodeCount', provider.network.getNodeCount);
    checkedRegister('network.getStorage', provider.network.getStorage);
    checkedRegister('network.getTransaction', provider.network.getTransaction);
    checkedRegister('network.isConnected', provider.network.isConnected);
    checkedRegister('network.getUnboundOng', provider.network.getUnboundOng);
    checkedRegister('network.getContract', provider.network.getContract);
    checkedRegister('network.getSmartCodeEvent', provider.network.getSmartCodeEvent);
    checkedRegister('network.getBlockHeightByTxHash', provider.network.getBlockHeightByTxHash);
    checkedRegister('network.getBlockHash', provider.network.getBlockHash);
    checkedRegister('network.getBlockTxsByHeight', provider.network.getBlockTxsByHeight);
    checkedRegister('network.getGasPrice', provider.network.getGasPrice);
    checkedRegister('network.getGrantOng', provider.network.getGrantOng);
    checkedRegister('network.getMempoolTxCount', provider.network.getMempoolTxCount);
    checkedRegister('network.getMempoolTxState', provider.network.getMempoolTxState);
    checkedRegister('network.getVersion', provider.network.getVersion);
    checkedRegister('smartContract.invoke', provider.smartContract.invoke);
    checkedRegister('smartContract.invokeRead', provider.smartContract.invokeRead);
    checkedRegister('smartContract.deploy', provider.smartContract.deploy);
    checkedRegister('provider.getProvider', provider.provider.getProvider);
}

/***/ }),

/***/ "./src/rpc/rpc.ts":
/*!************************!*\
  !*** ./src/rpc/rpc.ts ***!
  \************************/
/*! exports provided: Rpc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rpc", function() { return Rpc; });
/* harmony import */ var _tunnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tunnel */ "./src/rpc/tunnel.ts");

class Rpc {
    constructor(options) {
        options.messageHandler = this.messageHandler.bind(this);
        this.tunnel = new _tunnel__WEBPACK_IMPORTED_MODULE_0__["Tunnel"](options);
        this.methods = new Map();
    }
    call(method, ...params) {
        const msg = {
            method,
            params
        };
        return this.tunnel.send(msg);
    }
    register(name, method) {
        this.methods.set(name, method);
    }
    messageHandler(msg, caller) {
        const method = this.methods.get(msg.method);
        if (method === undefined) {
            throw new Error('Unregistered method call: ' + msg.method);
        }
        return method.call(caller, ...msg.params);
    }
}

/***/ }),

/***/ "./src/rpc/tunnel.ts":
/*!***************************!*\
  !*** ./src/rpc/tunnel.ts ***!
  \***************************/
/*! exports provided: Tunnel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tunnel", function() { return Tunnel; });
class Tunnel {
    constructor(options) {
        this.source = options.source;
        this.destination = options.destination;
        this.postMessage = options.postMessage;
        this.messageHandler = options.messageHandler;
        this.logMessages = options.logMessages;
        if (options.addListener === undefined && options.postMessage === undefined) {
            throw new Error('Either addListener or postMessage must be present.');
        } else if (options.addListener !== undefined) {
            if (options.messageHandler === undefined) {
                throw new Error('MessageHandler must be specified if addListener present.');
            }
            options.addListener(this.onMessage.bind(this));
        }
    }
    async send(msg) {
        const request = {
            destination: this.destination,
            payload: msg,
            source: this.source,
            type: 'dAPI.js'
        };
        if (this.postMessage === undefined) {
            throw new Error('PostMessage was not specified.');
        }
        if (this.logMessages) {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:no-console
            console.warn(`Tunnel: (${this.source}): Sending`, JSON.stringify(msg, null, '  '));
        }
        const response = await this.postMessage(request);
        if (response.error !== undefined) {
            throw new Error(response.error);
        } else {
            return response.payload;
        }
    }
    onMessage(request, sender) {
        if (request.destination === this.source && request.source === this.destination) {
            let promise;
            try {
                if (this.messageHandler === undefined) {
                    throw new Error('MessageHandler was not specified.');
                }
                if (this.logMessages) {
                    // tslint:disable-next-line:max-line-length
                    // tslint:disable-next-line:no-console
                    console.warn(`Tunnel: (${this.source}): Receiving`, JSON.stringify(request.payload, null, '  '));
                }
                const caller = {
                    id: sender.id,
                    url: sender.url
                };
                const response = this.messageHandler(request.payload, caller);
                promise = Promise.resolve(response);
            } catch (e) {
                promise = Promise.reject(e);
            }
            return promise.then(result => ({
                destination: request.source,
                payload: result,
                source: request.destination,
                type: 'dAPI.js'
            })).catch(error => ({
                destination: request.source,
                error,
                source: request.destination,
                type: 'dAPI.js'
            }));
        }
    }
}

/***/ }),

/***/ "@ont-community/window-post-message-proxy":
/*!***********************************************************!*\
  !*** external "@ont-community/window-post-message-proxy" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ont-community/window-post-message-proxy");

/***/ }),

/***/ "base-x":
/*!*************************!*\
  !*** external "base-x" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("base-x");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),

/***/ "promise-timeout":
/*!**********************************!*\
  !*** external "promise-timeout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("promise-timeout");

/***/ }),

/***/ "typedarray-to-buffer":
/*!***************************************!*\
  !*** external "typedarray-to-buffer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typedarray-to-buffer");

/***/ }),

/***/ "webextension-polyfill-ts":
/*!*******************************************!*\
  !*** external "webextension-polyfill-ts" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webextension-polyfill-ts");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map