const menu = {
    1: {
      id: 1,
      name: "Cup of black coffee",
      description: 'It looks like tar, but I promise it isn\'t',
      price: 2.20,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8532136e997a0ae408cf6f0a0a83b128&auto=format&fit=crop&w=1534&q=80'
    },
    2: {
      id: 2,
      name: "Cigarette",
      description: 'It doesn\'t look like tar, but I promise it is',
      price: 0.50,
      image: 'https://images.unsplash.com/photo-1527099908998-5b73a5fe2a0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc1be99cb7660fbb8704743276521c7a&auto=format&fit=crop&w=1055&q=80'
    },
    3: {
      id: 3,
      name: "Jim's 'Morning Special'",
      description: 'Cup of black coffee and a cigarette. Not recommended.',
      price: 3.00,
      image: 'https://images.unsplash.com/photo-1527099908998-5b73a5fe2a0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc1be99cb7660fbb8704743276521c7a&auto=format&fit=crop&w=1055&q=80'
    }
  };

function getAllMenuItems() {
    return Object.values(menu);
}

function getMenuItemById(menuItemId) {
    return menu[menuItemId];
}

module.exports = {
    getAllMenuItems,
    getMenuItemById
};