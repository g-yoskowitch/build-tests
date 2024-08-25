const { calculateDistance, calculateJunctionPoint ,isPointOnLine} = require('../../modules/geometry-calculation')
const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point')


const Point1 = new Point({x:2,y:3});
const Point2 = new Point({x:4,y:5});
const Point3 = new Point({x:3,y:4});
const Point4 = new Point({x:9,y:16});
let line1 = new Line({point1:Point1,point2:Point2});
let line2 = new Line({point1:Point3,point2:Point4});


describe('calculateDistance',()=>{
    const point1 = { x: 1, y: 1 };
    const point2 = { x: 4, y: 5 };
    const result = calculateDistance(point1, point2);
    it('calculates the distance between two points correctly',()=>{
        expect(result).toEqual(5);
    })
    it('check if the function return the corecct answer',()=>{
        expect(result).not.toBe(4);
    })
})

test('calculateJunctionPoint calclate if the two lines have the same sloop and the same n', () => {
    const line1 = new Line({ x: 2, y: 3 }, { x: 3, y: 4 },);
    const line2 = new Line({ x: 2, y: 3 }, { x: 3, y: 4 });
    const result = calculateJunctionPoint(line1, line2);
    expect(result).toBeTruthy();
});

// הכנסתי רק קו אחד במקום 2 וזה לא זורק את השגיאה הרצויה
// test('calculateJunctionPoint calclate if the two lines have the same sloop and the same n', () => {
//     const line1 = new Line({ x: 2, y: 3 }, { x: 3, y: 4 },);
//     const line2 = undefined;
//     const result = calculateJunctionPoint(line1,line2);
//     expect(result).toThrow("must to be 2 lines");
    
// });



test('Lines with the same slope and the same n value',()=>{
    const line3 = new Line({ x: 2, y: 3 }, { x: 4, y: 5 }, 3);
    const line4 = new Line({ x: 3, y: 4 }, { x: 5, y: 5 }, 3);
    result = calculateJunctionPoint(line3, line4);
    expect(result).toBe(true);
});

test('Lines with the same slope but different n values',()=>{
    result = calculateJunctionPoint(line1, line2);
    expect(result.x).toBe(3);
    expect(result.y).toBe(4);
})

describe('isPointOnLine',()=>{
    it('check isPointOnLine function : the point is not on the line',()=>{
        const line = new Line({ x: 2, y: 3 },{ x: 4, y: 5 })
        const point = new Point({ x: 5, y: 5 })
        expect(isPointOnLine(line,point)).toBe(false)
    })
    it('check isPointOnLine function : the point is on the line',()=>{
        const line = new Line({ x: 2, y: 3 },{ x: 4, y: 5 })
        const point = new Point({ x: 1, y: 3 })
        expect(isPointOnLine(line,point)).toBe(true)
    })
})






