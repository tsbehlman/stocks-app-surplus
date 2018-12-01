import S from "s-js";
import * as Surplus from "surplus";
import { Point, spline, roundToPlace } from "./Math.js";

export const CardChart = ( points, className ) => {
	const viewBox = S.value( "0 0 0 0" );
	const pathData = S.value( "" );
	
	S( () => {
		const newPoints = points();
		
		if( newPoints.length === 0 ) {
			newPoints.push( new Point( 0, 0 ) );
		}
		
		const curve = spline( newPoints );
		
		const minX = newPoints[ 0 ].x;
		const maxX = newPoints[ newPoints.length - 1 ].x;
		let minY = Infinity;
		let maxY = -Infinity;
		
		for( const command of curve ) {
			command.transform( point => {
				minY = Math.min( minY, point.y );
				maxY = Math.max( maxY, point.y );
			} );
		}
		
		viewBox( `${ minX } ${ minY } ${ roundToPlace( maxX - minX, 3 ) } ${ roundToPlace( maxY - minY, 3 ) }` );
		pathData( `M${ minX } ${ maxY }V${ newPoints[ 0 ].y }${ curve.join( "" ) }V${ maxY }Z` );
	} );
	
	return (
		<svg className={ `card-chart ${ className() }` } preserveAspectRatio="none" viewBox={ viewBox() }>
			<path d={ pathData() }/>
		</svg>
	);
};

function statsForVectors( vectors ) {
	let minY = Infinity;
	let maxY = -Infinity;

	for( const vector of vectors ) {
		vector.transform( point => {
			minY = Math.min( minY, point.y );
			maxY = Math.max( maxY, point.y );
			return point;
		} );
	}

	return { minY, maxY };
}