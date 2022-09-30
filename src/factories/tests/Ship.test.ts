import Ship from "../Ship"

describe('Ship', () => {
  let ship: Ship
  
  beforeEach(() => {
    ship = new Ship(3)
  })

  test('Creates and initializes a ship', () => {
    expect(ship).toEqual({ length: 3, hits: [] })
  })

  test('Takes a hit', () => {
    ship.hit(2)
    expect(ship.hits).toContain(2)
  })

  test('Sinks', () => {
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
  })

  test('Prevents hits on the same spot', () => {
    ship.hit(1)
    ship.hit(1)
    ship.hit(1)
    expect(ship.hit.length).toBe(1)
  })
})