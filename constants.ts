import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- STARTERS (10 Items) ---
  {
    id: 's1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle oil and mozzarella, served with marinara.',
    price: 345,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Risotto Rice', 'Truffle Oil', 'Mozzarella', 'Breadcrumbs', 'Marinara Sauce'],
    calories: 320
  },
  {
    id: 's2',
    name: 'Spicy Calamari',
    description: 'Fresh squid rings battered and fried, served with lemon aioli and chili flakes.',
    price: 420,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Squid', 'Flour', 'Chili Flakes', 'Lemon', 'Garlic Aioli'],
    calories: 410
  },
  {
    id: 's3',
    name: 'Bruschetta Pomodoro',
    description: 'Toasted ciabatta topped with heirloom tomatoes, fresh basil, garlic, and extra virgin olive oil.',
    price: 240,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Ciabatta', 'Heirloom Tomatoes', 'Basil', 'Garlic', 'Olive Oil'],
    calories: 210
  },
  {
    id: 's4',
    name: 'Buffalo Chicken Wings',
    description: 'Crispy wings tossed in house-made spicy buffalo sauce, served with ranch dip.',
    price: 380,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1527477396000-64bc61b3829b?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Chicken Wings', 'Buffalo Sauce', 'Butter', 'Ranch Dressing', 'Celery'],
    calories: 550
  },
  {
    id: 's5',
    name: 'Vietnamese Spring Rolls',
    description: 'Fresh rice paper rolls filled with shrimp, vermicelli, mint, and served with peanut dip.',
    price: 320,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Rice Paper', 'Shrimp', 'Vermicelli', 'Mint', 'Peanut Sauce'],
    calories: 180
  },
  {
    id: 's6',
    name: 'Garlic Butter Prawns',
    description: 'Tiger prawns sautéed in rich garlic butter and white wine sauce.',
    price: 480,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Tiger Prawns', 'Butter', 'Garlic', 'Parsley', 'White Wine'],
    calories: 340
  },
  {
    id: 's7',
    name: 'Classic Caesar Salad',
    description: 'Crisp romaine lettuce tossed with parmesan, croutons, and signature Caesar dressing.',
    price: 290,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Romaine Lettuce', 'Parmesan', 'Croutons', 'Caesar Dressing', 'Lemon'],
    calories: 250
  },
  {
    id: 's8',
    name: 'Loaded Nachos',
    description: 'Tortilla chips piled high with cheese sauce, jalapeños, guacamole, salsa, and sour cream.',
    price: 360,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Tortilla Chips', 'Cheese Sauce', 'Jalapeños', 'Guacamole', 'Salsa'],
    calories: 680
  },
  {
    id: 's9',
    name: 'Chicken Gyoza',
    description: 'Pan-fried Japanese dumplings filled with minced chicken and vegetables, served with soy dip.',
    price: 280,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1626804475297-411dbe631267?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Chicken Mince', 'Cabbage', 'Ginger', 'Soy Sauce', 'Dumpling Wrapper'],
    calories: 290
  },
  {
    id: 's10',
    name: 'Caprese Salad',
    description: 'Slices of fresh mozzarella and tomatoes, basil leaves, drizzled with balsamic glaze.',
    price: 310,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Mozzarella', 'Tomatoes', 'Basil', 'Balsamic Glaze', 'Olive Oil'],
    calories: 280
  },

  // --- MAINS (14 Items) ---
  {
    id: 'm1',
    name: 'Wagyu Burger',
    description: 'Premium Wagyu beef patty, brioche bun, aged cheddar, caramelized onions, and truffle mayo.',
    price: 650,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Wagyu Beef', 'Brioche Bun', 'Cheddar', 'Onions', 'Truffle Mayo'],
    calories: 850
  },
  {
    id: 'm2',
    name: 'Wild Mushroom Risotto',
    description: 'Creamy arborio rice with porcini, chanterelle, and parmesan crisp.',
    price: 520,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Arborio Rice', 'Wild Mushrooms', 'Parmesan', 'White Wine', 'Butter'],
    calories: 560
  },
  {
    id: 'm3',
    name: 'Grilled Salmon',
    description: 'Atlantic salmon fillet with asparagus and lemon butter sauce.',
    price: 750,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4974?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Salmon', 'Asparagus', 'Butter', 'Lemon', 'Dill'],
    calories: 480
  },
  {
    id: 'm4',
    name: 'Classic Carbonara',
    description: 'Spaghetti with guanciale, pecorino romano, black pepper, and fresh eggs. No cream.',
    price: 490,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1612874747137-79d9e5f9c02b?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Spaghetti', 'Guanciale', 'Pecorino Romano', 'Eggs', 'Black Pepper'],
    calories: 650
  },
  {
    id: 'm5',
    name: 'Margherita Pizza',
    description: 'Wood-fired pizza with San Marzano tomato sauce, buffalo mozzarella, and fresh basil.',
    price: 440,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Pizza Dough', 'San Marzano Tomatoes', 'Buffalo Mozzarella', 'Basil', 'Olive Oil'],
    calories: 780
  },
  {
    id: 'm6',
    name: 'Butter Chicken & Naan',
    description: 'Tender chicken simmered in a creamy tomato curry, served with garlic naan.',
    price: 550,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Chicken', 'Tomato Puree', 'Cream', 'Butter', 'Garlic Naan'],
    calories: 920
  },
  {
    id: 'm7',
    name: 'Filet Mignon',
    description: '8oz tenderloin steak cooked to perfection, served with mashed potatoes and red wine reduction.',
    price: 950,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Beef Tenderloin', 'Potatoes', 'Butter', 'Red Wine', 'Rosemary'],
    calories: 700
  },
  {
    id: 'm8',
    name: 'Pad Thai',
    description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, bean sprouts, and tangy tamarind sauce.',
    price: 460,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Rice Noodles', 'Shrimp', 'Tofu', 'Peanuts', 'Bean Sprouts', 'Tamarind'],
    calories: 580
  },
  {
    id: 'm9',
    name: 'Spicy Beef Tacos',
    description: 'Three soft corn tortillas filled with slow-cooked beef, onion, cilantro, and lime.',
    price: 420,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Corn Tortillas', 'Beef', 'Onion', 'Cilantro', 'Lime', 'Salsa'],
    calories: 450
  },
  {
    id: 'm10',
    name: 'Tonkotsu Ramen',
    description: 'Rich pork bone broth with wheat noodles, chashu pork, soft-boiled egg, and bamboo shoots.',
    price: 510,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Pork Broth', 'Ramen Noodles', 'Chashu Pork', 'Egg', 'Nori', 'Bamboo'],
    calories: 620
  },
  {
    id: 'm11',
    name: 'Fish & Chips',
    description: 'Beer-battered cod fillet served with thick-cut chips, tartare sauce, and mushy peas.',
    price: 580,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1534938665420-4193effeacc4?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Cod Fillet', 'Beer Batter', 'Potatoes', 'Tartare Sauce', 'Peas'],
    calories: 890
  },
  {
    id: 'm12',
    name: 'Vegetable Lasagna',
    description: 'Layers of pasta with roasted vegetables, marinara sauce, béchamel, and melted cheese.',
    price: 450,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1574868468509-0e59e9bbc67b?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Pasta Sheets', 'Zucchini', 'Eggplant', 'Marinara', 'Mozzarella', 'Béchamel'],
    calories: 540
  },
  {
    id: 'm13',
    name: 'Spicy Tuna Roll',
    description: 'Fresh sushi roll with sashimi-grade tuna, spicy mayo, cucumber, and sesame seeds.',
    price: 390,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Sushi Rice', 'Tuna', 'Nori', 'Cucumber', 'Spicy Mayo'],
    calories: 320
  },
  {
    id: 'm14',
    name: 'BBQ Ribs',
    description: 'Slow-cooked pork ribs smothered in smoky BBQ sauce, served with coleslaw and fries.',
    price: 780,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1544025162-d76690b67f11?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    ingredients: ['Pork Ribs', 'BBQ Sauce', 'Coleslaw', 'Fries', 'Spices'],
    calories: 950
  },

  // --- DRINKS (10 Items) ---
  {
    id: 'd1',
    name: 'Artisan Mojito',
    description: 'Classic cuban cocktail with fresh mint, lime, and organic cane sugar.',
    price: 350,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['White Rum', 'Mint', 'Lime', 'Soda Water', 'Cane Sugar'],
    calories: 150
  },
  {
    id: 'd2',
    name: 'Mango Lassi',
    description: 'Rich yogurt-based drink blended with alphonso mango pulp.',
    price: 180,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Yogurt', 'Mango', 'Cardamom', 'Sugar', 'Milk'],
    calories: 220
  },
  {
    id: 'd3',
    name: 'Espresso Martini',
    description: 'Sophisticated cocktail made with vodka, coffee liqueur, and fresh espresso.',
    price: 450,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Vodka', 'Coffee Liqueur', 'Espresso', 'Coffee Beans'],
    calories: 210
  },
  {
    id: 'd4',
    name: 'Berry Lemonade',
    description: 'Refreshing homemade lemonade infused with fresh raspberries and blueberries.',
    price: 220,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1621263760267-5faaf62f2c3a?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Lemons', 'Sugar', 'Water', 'Raspberries', 'Blueberries'],
    calories: 120
  },
  {
    id: 'd5',
    name: 'Craft IPA',
    description: 'Locally brewed Indian Pale Ale with citrus and pine notes.',
    price: 320,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Hops', 'Malt', 'Water', 'Yeast'],
    calories: 180
  },
  {
    id: 'd6',
    name: 'Cabernet Sauvignon',
    description: 'Glass of full-bodied red wine with notes of black currant and cedar.',
    price: 400,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1516559828984-95eaadc4c18a?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Red Grapes'],
    calories: 125
  },
  {
    id: 'd7',
    name: 'Iced Matcha Latte',
    description: 'Premium Japanese matcha whisked with milk and served over ice.',
    price: 260,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e1d3102?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Matcha Powder', 'Milk', 'Ice', 'Sugar Syrup'],
    calories: 140
  },
  {
    id: 'd8',
    name: 'Fresh Orange Juice',
    description: '100% freshly squeezed orange juice, no added sugar.',
    price: 190,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Oranges'],
    calories: 110
  },
  {
    id: 'd9',
    name: 'Old Fashioned',
    description: 'Timeless cocktail with bourbon whiskey, bitters, sugar, and orange twist.',
    price: 480,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Bourbon', 'Angostura Bitters', 'Sugar Cube', 'Orange Peel'],
    calories: 160
  },
  {
    id: 'd10',
    name: 'Strawberry Smoothie',
    description: 'Creamy blend of strawberries, banana, yogurt, and honey.',
    price: 240,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Strawberries', 'Banana', 'Yogurt', 'Honey', 'Milk'],
    calories: 210
  },

  // --- DESSERTS (8 Items) ---
  {
    id: 'ds1',
    name: 'Molten Lava Cake',
    description: 'Warm chocolate cake with a flowing center, served with vanilla bean ice cream.',
    price: 320,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Flour', 'Vanilla Ice Cream'],
    calories: 450
  },
  {
    id: 'ds2',
    name: 'NY Cheesecake',
    description: 'Classic creamy cheesecake on a graham cracker crust, topped with strawberry coulis.',
    price: 290,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Cream Cheese', 'Sugar', 'Eggs', 'Graham Crackers', 'Strawberries'],
    calories: 400
  },
  {
    id: 'ds3',
    name: 'Classic Tiramisu',
    description: 'Italian dessert made of savoiardi dipped in coffee, layered with mascarpone mixture.',
    price: 280,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877751991-b44c77c6da93?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Mascarpone', 'Savoiardi', 'Espresso', 'Cocoa Powder', 'Eggs'],
    calories: 380
  },
  {
    id: 'ds4',
    name: 'Matcha Ice Cream',
    description: 'Authentic Japanese green tea ice cream served with mochi balls.',
    price: 220,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Matcha Powder', 'Milk', 'Cream', 'Sugar', 'Mochi'],
    calories: 250
  },
  {
    id: 'ds5',
    name: 'Berry Pavlova',
    description: 'Crispy meringue shell topped with whipped cream and mixed fresh berries.',
    price: 310,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Egg Whites', 'Sugar', 'Cream', 'Berries', 'Vanilla'],
    calories: 320
  },
  {
    id: 'ds6',
    name: 'Chocolate Brownie',
    description: 'Decadent fudge brownie with walnuts, served warm with a side of cream.',
    price: 260,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Dark Chocolate', 'Walnuts', 'Flour', 'Sugar', 'Butter'],
    calories: 420
  },
  {
    id: 'ds7',
    name: 'Churros',
    description: 'Fried dough pastries dusted with cinnamon sugar, served with thick hot chocolate dip.',
    price: 250,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1624300603538-1207400f7e16?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Flour', 'Cinnamon', 'Sugar', 'Chocolate Dip'],
    calories: 350
  },
  {
    id: 'ds8',
    name: 'Macarons',
    description: 'Assortment of delicate French almond meringue cookies with various fillings.',
    price: 340,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    ingredients: ['Almond Flour', 'Egg Whites', 'Sugar', 'Buttercream'],
    calories: 180
  }
];

export const CATEGORIES = [
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Mains' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Dessert' }
];