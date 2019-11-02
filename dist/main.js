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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AppView.jsx":
/*!*************************!*\
  !*** ./src/AppView.jsx ***!
  \*************************/
/*! exports provided: AppView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppView", function() { return AppView; });
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! s-js */ "s-js");
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(s_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var s_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! s-array */ "s-array");
/* harmony import */ var s_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(s_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var surplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! surplus */ "surplus");
/* harmony import */ var surplus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(surplus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StockCard_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockCard.jsx */ "./src/StockCard.jsx");





function randomInt( min, max ) {
	return Math.round( Math.random() * ( max - min ) + min );
}

function fakeData() {
	const points = [];
	const length = randomInt( 5, 10 );
	for( let i = 0; i < length; i++ ) {
		points.push( randomInt( 400, 500 ) );
	}
	return points;
}

const data = [
	{
		symbol: "DJI",
		name: "Dow Jones Industrial Average",
		price: 25989.30,
		change: -159.81
	},
	{
		symbol: "AAPL",
		name: "Apple",
		price: 168.34,
		change: 5.34
	},
	{
		symbol: "UTX",
		name: "United Technologies",
		price: 130.71,
		change: -0.63
	},
	{
		symbol: "ES",
		name: "Eversource Energy",
		price: 66.82,
		change: 0.4
	},
	{
		symbol: "AMD",
		name: "Advanced Micro Devices",
		price: 19.38,
		change: 0.66
	},
	{
		symbol: "NVDA",
		name: "NVIDIA Corporation",
		price: 145,
		change: 0
	}
].map( stock => ( { ...stock, history: fakeData() } ) );

function getStock( symbol ) {
	const stock = {
		symbol,
		name: s_js__WEBPACK_IMPORTED_MODULE_0___default.a.value( "" ),
		price: s_js__WEBPACK_IMPORTED_MODULE_0___default.a.value( NaN ),
		change: s_js__WEBPACK_IMPORTED_MODULE_0___default.a.value( NaN ),
		history: s_array__WEBPACK_IMPORTED_MODULE_1___default()( [] )
	};
	//sleep( randomInt( 100, 800 ) ).then( () => {
		const stockData = stockForSymbol.get( symbol );
		stock.name( stockData.name );
		stock.price( stockData.price );
		stock.change( stockData.change );
		stock.history.splice( 0, 0, ...stockData.history );
		setInterval( () => {
			stock.history.push( randomInt( 400, 500 ) );
		}, 1000 );
	//} );
	return stock;
}

const stockForSymbol = new Map( data.map( datum => [ datum.symbol, datum ] ) );

//const symbols = SArray( [] );
const symbols = s_array__WEBPACK_IMPORTED_MODULE_1___default()( data.map( datum => datum.symbol ).slice(0,3) );
const stocks = symbols.map( symbol => getStock( symbol ) );

function sleep( duration ) {
	return new Promise( ( resolve, reject ) => setTimeout( resolve, duration ) );
}

function pushCallback( e ) {
	if( stockForSymbol.has( this.value ) ) {
		symbols.push( this.value );
	}
}

const AppView = () =>
	(function () {
    var __, __input1, __insert2;
    __ = surplus__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, null);
    __.id = "AppView";
    __input1 = surplus__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", "card add", __);
    __input1.type = "text";
    __input1.onblur =  pushCallback ;
    __insert2 = surplus__WEBPACK_IMPORTED_MODULE_2__["createTextNode"]('', __)
    surplus__WEBPACK_IMPORTED_MODULE_2__["S"].effect(function (__range) { return surplus__WEBPACK_IMPORTED_MODULE_2__["insert"](__range,  stocks.map( stock => Object(_StockCard_jsx__WEBPACK_IMPORTED_MODULE_3__["StockCard"])( stock ) ) ); }, { start: __insert2, end: __insert2 });
    return __;
})();

/***/ }),

/***/ "./src/CardChart.jsx":
/*!***************************!*\
  !*** ./src/CardChart.jsx ***!
  \***************************/
/*! exports provided: CardChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardChart", function() { return CardChart; });
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! s-js */ "s-js");
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(s_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var s_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! s-array */ "s-array");
/* harmony import */ var s_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(s_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var surplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! surplus */ "surplus");
/* harmony import */ var surplus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(surplus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Math.js */ "./src/Math.js");





const CardChart = ( points, className ) => {
	const viewBox = s_js__WEBPACK_IMPORTED_MODULE_0___default.a.data( "0 0 0 0" );
	const pathData = s_js__WEBPACK_IMPORTED_MODULE_0___default.a.data( "" );
	
	let p0, p1, p2, p3;
	let minX = +Infinity;
	let maxX = -Infinity;
	let minY = +Infinity;
	let maxY = -Infinity;
	let firstCurve;
	let lastCurve;
	let curves = "";
	let numPoints = 0;
	
	s_js__WEBPACK_IMPORTED_MODULE_0___default.a.on( points, () => {
		while( numPoints < points().length ) {
			const point = points()[ numPoints++ ];
			p0 = p1;
			p1 = p2;
			p2 = p3;
			p3 = point;
			
			maxX = point.x;
			minY = Math.min( minY, point.y );
			maxY = Math.max( maxY, point.y );
			if( numPoints === 1 ) {
				minX = point.x;
				continue;
			}
			if( numPoints > 2 ) {
				if( numPoints > 3 ) {
					const curve = _Math_js__WEBPACK_IMPORTED_MODULE_3__["Cubic"].spline( p0, p1, p2, p3 );
					minY = Math.min( minY, curve.p1.y );
					maxY = Math.max( maxY, curve.p1.y );
					minY = Math.min( minY, curve.p2.y );
					maxY = Math.max( maxY, curve.p2.y );
					curves += curve.toString();
				}
				else if( numPoints === 3 ) {
					firstCurve = _Math_js__WEBPACK_IMPORTED_MODULE_3__["Cubic"].spline( p1, p1, p2, p3 ).toString();
				}
				lastCurve = _Math_js__WEBPACK_IMPORTED_MODULE_3__["Cubic"].spline( p1, p2, p3, p3 ).toString();
			}
		}
		
		if( numPoints === 0 ) {
			return;
		}
		
		const pathPrefix = `M${ minX } ${ maxY }V${ points()[ 0 ].y }`;
		const pathSuffix = `V${ maxY }Z`;
		
		if( numPoints < 3 ) {
			pathData( pathPrefix + p2 + p3 + pathSuffix );
		}
		else {
			pathData( pathPrefix + firstCurve + curves + lastCurve + pathSuffix );
		}
		
		viewBox( `${ minX } ${ minY } ${ Object(_Math_js__WEBPACK_IMPORTED_MODULE_3__["roundToPlace"])( maxX - minX, 3 ) } ${ Object(_Math_js__WEBPACK_IMPORTED_MODULE_3__["roundToPlace"])( maxY - minY, 3 ) }` );
	} );
	
	return (
		(function () {
    var __, __path1;
    __ = surplus__WEBPACK_IMPORTED_MODULE_2__["createSvgElement"]("svg", null, null);
    __path1 = surplus__WEBPACK_IMPORTED_MODULE_2__["createSvgElement"]("path", null, __);
    surplus__WEBPACK_IMPORTED_MODULE_2__["S"].effect(function () { surplus__WEBPACK_IMPORTED_MODULE_2__["setAttribute"](__path1, "d",  pathData() ); });
    surplus__WEBPACK_IMPORTED_MODULE_2__["S"].effect(function () {
        surplus__WEBPACK_IMPORTED_MODULE_2__["setAttribute"](__, "class",  `card-chart ${ className() }` );
        surplus__WEBPACK_IMPORTED_MODULE_2__["setAttribute"](__, "preserveAspectRatio", "none");
        surplus__WEBPACK_IMPORTED_MODULE_2__["setAttribute"](__, "viewBox",  viewBox() );
    });
    return __;
})()
	);
};

/***/ }),

/***/ "./src/Math.js":
/*!*********************!*\
  !*** ./src/Math.js ***!
  \*********************/
/*! exports provided: roundToPlace, Point, Cubic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToPlace", function() { return roundToPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubic", function() { return Cubic; });
function roundToPlace( number, place ) {
	const precision = Math.pow( 10, place );
	return Math.round( number * precision ) / precision;
}

class Point {
	constructor( x, y ) {
		this.x = x;
		this.y = y;
	}
	
	transform( callback ) {
		callback( this );
	}

	toString() {
		return `L${this.x},${this.y}`;
	}
}

function line( a, b ) {
	const x = b.x - a.x;
	const y = b.y - a.y;
	return {
		length: Math.hypot( y, x ),
		angle: Math.atan2( y, x )
	}
}

function applyLineToPoint( point, line ) {
	return new Point(
		roundToPlace( point.x + Math.cos( line.angle ) * line.length, 3 ),
		roundToPlace( point.y + Math.sin( line.angle ) * line.length, 3 )
	);
}

const SMOOTHING_FACTOR = 0.2;

class Cubic {
	constructor( p1, p2, p3 ) {
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}
	
	transform( callback ) {
		callback( this.p1 );
		callback( this.p2 );
		callback( this.p3 );
	}

	toString() {
		return `C${this.p1.x},${this.p1.y} ${this.p2.x},${this.p2.y} ${this.p3.x},${this.p3.y}`;
	}
	
	// https://medium.com/@francoisromain/e37b49d46c74
	static spline( p0, p1, p2, p3 ) {
		const line1 = line( p0, p2 );
		line1.length *= SMOOTHING_FACTOR;
		const line2 = line( p1, p3 );
		line2.length *= SMOOTHING_FACTOR;
		line2.angle += Math.PI;
		return new Cubic( applyLineToPoint( p1, line1 ), applyLineToPoint( p2, line2 ), p2 );
	}
}

/***/ }),

/***/ "./src/StockCard.jsx":
/*!***************************!*\
  !*** ./src/StockCard.jsx ***!
  \***************************/
/*! exports provided: StockCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCard", function() { return StockCard; });
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! s-js */ "s-js");
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(s_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var surplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! surplus */ "surplus");
/* harmony import */ var surplus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(surplus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardChart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardChart.jsx */ "./src/CardChart.jsx");
/* harmony import */ var _Math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Math.js */ "./src/Math.js");





function formatNumber( number, decimalPlaces ) {
	if( isNaN( number ) ) {
		return "\u2013 \u2013";
	}
	else {
		return number.toFixed( decimalPlaces );
	}
}

const StockCard = stock => {
	const changeText = s_js__WEBPACK_IMPORTED_MODULE_0___default.a.value( "" );
	const changeClass = s_js__WEBPACK_IMPORTED_MODULE_0___default.a.value( "" );
	
	s_js__WEBPACK_IMPORTED_MODULE_0___default()( () => {
		const change = stock.change();
		let text = formatNumber( change, 2 );
		let className = "neutral";
		
		if( change < 0 ) {
			className = "negative";
		}
		else if( change > 0 ) {
			text = "+" + text;
			className = "positive";
		}
		
		changeText( text );
		changeClass( className );
	} );
	
	const history = stock.history.map( ( price, v, index ) => new _Math_js__WEBPACK_IMPORTED_MODULE_3__["Point"]( index, -price ) );
	
	return (
		(function () {
    var __, __div1, __div1_h31, __div1_strong2, __div1_p3, __div1_p4, __insert2;
    __ = surplus__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", "card stock", null);
    __div1 = surplus__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", "card-details", __);
    __div1_h31 = surplus__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, __div1);
    surplus__WEBPACK_IMPORTED_MODULE_1__["content"](__div1_h31,  stock.symbol , "");
    __div1_strong2 = surplus__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, __div1);
    __div1_p3 = surplus__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, __div1);
    __div1_p4 = surplus__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, __div1);
    __insert2 = surplus__WEBPACK_IMPORTED_MODULE_1__["createTextNode"]('', __)
    surplus__WEBPACK_IMPORTED_MODULE_1__["S"].effect(function (__current) { return surplus__WEBPACK_IMPORTED_MODULE_1__["content"](__div1_strong2,  formatNumber( stock.price(), 2 ) , __current); }, '');
    surplus__WEBPACK_IMPORTED_MODULE_1__["S"].effect(function (__current) { return surplus__WEBPACK_IMPORTED_MODULE_1__["content"](__div1_p3,  stock.name() , __current); }, '');
    surplus__WEBPACK_IMPORTED_MODULE_1__["S"].effect(function (__current) { return surplus__WEBPACK_IMPORTED_MODULE_1__["content"](__div1_p4,  changeText() , __current); }, '');
    surplus__WEBPACK_IMPORTED_MODULE_1__["S"].effect(function () { __div1_p4.className =  `value ${ changeClass() }` ; });
    surplus__WEBPACK_IMPORTED_MODULE_1__["S"].effect(function (__range) { return surplus__WEBPACK_IMPORTED_MODULE_1__["insert"](__range,  Object(_CardChart_jsx__WEBPACK_IMPORTED_MODULE_2__["CardChart"])( history, changeClass ) ); }, { start: __insert2, end: __insert2 });
    return __;
})()
	);
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! s-js */ "s-js");
/* harmony import */ var s_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(s_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppView_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppView.jsx */ "./src/AppView.jsx");



s_js__WEBPACK_IMPORTED_MODULE_0___default.a.root( () => {
	document.body.appendChild( Object(_AppView_jsx__WEBPACK_IMPORTED_MODULE_1__["AppView"])() );
} );

/***/ }),

/***/ "s-array":
/*!*************************!*\
  !*** external "SArray" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = SArray;

/***/ }),

/***/ "s-js":
/*!********************!*\
  !*** external "S" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = S;

/***/ }),

/***/ "surplus":
/*!**************************!*\
  !*** external "Surplus" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Surplus;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map