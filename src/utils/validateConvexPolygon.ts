export type Coordinate = [number, number];

function calculateOrientation(p: Coordinate, q: Coordinate, r: Coordinate): number {
    const val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
    if (val === 0) return 0; // collinear
    return (val > 0) ? 1 : 2; // clockwise or counterclockwise
}

function isConvex(points: Coordinate[]): boolean {
    const n = points.length;
    if (n < 3) return false; // Not enough points to form a polygon

    let prevOrientation = 0;
    for (let i = 0; i < n; i++) {
        const orientation = calculateOrientation(points[i], points[(i + 1) % n], points[(i + 2) % n]);
        if (orientation === 0) continue; // Collinear points can be ignored
        if (prevOrientation !== 0 && orientation !== prevOrientation) return false; // Not convex
        prevOrientation = orientation;
    }
    return true; // Convex
}

function areCoordinatesValid(coordinates: Coordinate[]): boolean {
    // Check if there are at least 3 coordinates
    if (coordinates.length < 3) return false;

    // Check if the first and last coordinates are the same
    if (coordinates[0][0] !== coordinates[coordinates.length - 1][0] ||
        coordinates[0][1] !== coordinates[coordinates.length - 1][1]) {
        console.log('First and last coordinates are not the same');
        return false;
    }

    // Check if all points are distinct
    const distinctPoints = new Set<string>();
    for (const coord of coordinates.slice(0, -1)) {
        const strCoord = coord.toString();
        if (distinctPoints.has(strCoord)) {
            console.log('Duplicate coordinates found');
            return false;
        }
        distinctPoints.add(strCoord);
    }

    return true;
}

export function isValidPolygon(coordinates: Coordinate[]): boolean {
    if (!areCoordinatesValid(coordinates)) return false;

    const isConvexPolygon = isConvex(coordinates);
    console.log('Is convex polygon?', isConvexPolygon);

    return isConvexPolygon;
}

// Example usage:
// const coordinates: Coordinate[] = [
//     [40.7128, -74.0060], // New York City
//     [34.0522, -118.2437], // Los Angeles
//     [41.8781, -87.6298], // Chicago
//     [29.7604, -95.3698], // Houston
//     [40.7128, -74.0060] // New York City (closing point)
// ];

// console.log(isValidPolygon(coordinates));

// New York - Dallas - Miami (Valid Convex Polygon)
// [40.708689, -74.013540],
// [32.802027, -96.769347],
// [25.781882, -80.196204],
// [40.708689, -74.013540],

// { latitude: 40.708689, longitude: -74.013540 },
// { latitude: 32.802027, longitude: -96.769347 },
// { latitude: 25.781882, longitude: -80.196204 },
// { latitude: 40.708689, longitude: -74.013540 },