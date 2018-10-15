const { getAllMenuItems, getMenuItemById } = require('../menu');

describe('Menu Database', () => {
    describe('getAllMenuItems', () => {
        test('should return an array of menu items', () => {
            const result = getAllMenuItems();
            expect(result).toHaveProperty('length', 3)
        })
    })

    describe('getMenuItemById', () => {
        test('should return the correct menu item', () => {
            expect(getMenuItemById(1)).toMatchObject({
                id: 1,
                name: 'Cup of black coffee',
            })
        })
        test('should return undefined for an unknown menu item', () => {
            expect(getMenuItemById(50)).toBeUndefined();

        })
    })
})