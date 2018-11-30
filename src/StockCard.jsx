import S from "s-js";
import * as Surplus from "surplus";
import { CardChart } from "./CardChart.jsx";
import { Point } from "./Math.js";

function formatNumber( number, decimalPlaces ) {
	if( isNaN( number ) ) {
		return "\u2013 \u2013";
	}
	else {
		return number.toFixed( decimalPlaces );
	}
}

export const StockCard = stock => {
	const changeText = S.value( "" );
	const changeClass = S.value( "" );
	
	S( () => {
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
	
	const history = stock.history.map( ( price, v, index ) => new Point( index, -price ) );
	
	return (
		<div className="card stock">
			<div className="card-details">
				<h3>{ stock.symbol }</h3>
				<strong>{ formatNumber( stock.price(), 2 ) }</strong>
				<p>{ stock.name() }</p>
				<p className={ `value ${ changeClass() }` }>{ changeText() }</p>
			</div>
			{ CardChart( history, changeClass ) }
		</div>
	);
};