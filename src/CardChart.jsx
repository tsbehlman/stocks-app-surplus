import S from "s-js";
import SArray from "s-array";
import * as Surplus from "surplus";
import { Cubic, roundToPlace } from "./Math.js";

export const CardChart = ( points, className ) => {
	const viewBox = S.data( "0 0 0 0" );
	const pathData = S.data( "" );
	
	let p0, p1, p2, p3;
	let minX = +Infinity;
	let maxX = -Infinity;
	let minY = +Infinity;
	let maxY = -Infinity;
	let firstCurve;
	let lastCurve;
	let curves = "";
	
	points.forEach( point => {
		const numPoints = S.sample( points ).length;
		p0 = p1;
		p1 = p2;
		p2 = p3;
		p3 = point;
		
		maxX = point.x;
		minY = Math.min( minY, point.y );
		maxY = Math.max( maxY, point.y );
		if( numPoints === 1 ) {
			minX = point.x;
			return;
		}
		if( numPoints > 2 ) {
			if( numPoints > 3 ) {
				const curve = Cubic.spline( p0, p1, p2, p3 );
				minY = Math.min( minY, curve.p1.y );
				maxY = Math.max( maxY, curve.p1.y );
				minY = Math.min( minY, curve.p2.y );
				maxY = Math.max( maxY, curve.p2.y );
				curves += curve.toString();
			}
			else if( numPoints === 3 ) {
				firstCurve = Cubic.spline( p1, p1, p2, p3 ).toString();
			}
			lastCurve = Cubic.spline( p1, p2, p3, p3 ).toString();
		}
		
		const pathPrefix = `M${ minX } ${ maxY }V${ S.sample( points )[ 0 ].y }`;
		const pathSuffix = `V${ maxY }Z`;
		
		if( numPoints < 3 ) {
			pathData( pathPrefix + p2 + p3 + pathSuffix );
		}
		else {
			pathData( pathPrefix + firstCurve + curves + lastCurve + pathSuffix );
		}
		
		viewBox( `${ minX } ${ minY } ${ roundToPlace( maxX - minX, 3 ) } ${ roundToPlace( maxY - minY, 3 ) }` );
	} );
	
	return (
		<svg className={ `card-chart ${ className() }` } preserveAspectRatio="none" viewBox={ viewBox() }>
			<path d={ pathData() }/>
		</svg>
	);
};