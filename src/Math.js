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