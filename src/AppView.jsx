import S from "s-js";
import SArray from "s-array";
import * as Surplus from "surplus";
import { StockCard } from "./StockCard.jsx";

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
		name: S.value( "" ),
		price: S.value( NaN ),
		change: S.value( NaN ),
		history: SArray( [] )
	};
	//sleep( randomInt( 100, 800 ) ).then( () => {
		const stockData = stockForSymbol.get( symbol );
		stock.name( stockData.name );
		stock.price( stockData.price );
		stock.change( stockData.change );
		stock.history.splice( 0, 0, ...stockData.history );
		/*setInterval( () => {
			stock.history.push( randomInt( 400, 500 ) );
		}, 2000 );*/
	//} );
	return stock;
}

const stockForSymbol = new Map( data.map( datum => [ datum.symbol, datum ] ) );

//const symbols = SArray( [] );
const symbols = SArray( data.map( datum => datum.symbol ) );
const stocks = symbols.map( symbol => getStock( symbol ) );

function sleep( duration ) {
	return new Promise( ( resolve, reject ) => setTimeout( resolve, duration ) );
}

function pushCallback( e ) {
	if( stockForSymbol.has( this.value ) ) {
		symbols.push( this.value );
	}
}

export const AppView = () =>
	<div id="AppView">
		<input type="text" class="card add" onBlur={ pushCallback }/>
		{ stocks.map( stock => StockCard( stock ) ) }
	</div>;