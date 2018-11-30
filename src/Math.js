export function roundToPlace( number, place ) {
	const precision = Math.pow( 10, place );
	return Math.round( number * precision ) / precision;
}

export class Point {
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

	extrapolate( destination ) {
		return new Point(
			roundToPlace( destination.x + destination.x - this.x, 3 ),
			roundToPlace( destination.y + destination.y - this.y, 3 )
		);
	}
}

export class Cubic {
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
}

const SMOOTHING_FACTOR = 0.2;

// https://medium.com/@francoisromain/e37b49d46c74
export class Spline extends Cubic {
	constructor( p0, p1, p2, p3 ) {
		super( ...Spline.getControlPoints( p0, p1, p2, p3 ), p2 );
	}

	static line( a, b ) {
		const x = b.x - a.x;
		const y = b.y - a.y;
		return {
			length: Math.hypot( y, x ),
			angle: Math.atan2( y, x )
		}
	}

	static applyLineToPoint( point, line ) {
		return new Point(
			roundToPlace( point.x + Math.cos( line.angle ) * line.length, 3 ),
			roundToPlace( point.y + Math.sin( line.angle ) * line.length, 3 )
		);
	}

	static getControlPoints( p0, p1, p2, p3 ) {
		const line1 = Spline.line( p0, p2 );
		line1.length *= SMOOTHING_FACTOR;
		const line2 = Spline.line( p1, p3 );
		line2.length *= SMOOTHING_FACTOR;
		line2.angle += Math.PI;
		return [ Spline.applyLineToPoint( p1, line1 ), Spline.applyLineToPoint( p2, line2 ) ];
	}
}

export function spline( points ) {
	if( points.length < 3 ) {
		return points;
	}

	const curves = [ points[ 0 ] ];

	points = [
		points[ 1 ].extrapolate( points[ 0 ] ),
		...points,
		points[ points.length - 2 ].extrapolate( points[ points.length - 1 ] )
	];

	let p0 = null;
	let p1 = points[ 0 ];
	let p2 = points[ 1 ];
	let p3 = points[ 2 ];

	for( let i = 3; i < points.length; i++ ) {
		p0 = p1;
		p1 = p2;
		p2 = p3;
		p3 = points[ i ];
		curves.push( new Spline( p0, p1, p2, p3 ) );
	}

	return curves;
}