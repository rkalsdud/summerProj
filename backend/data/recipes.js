const recipes = [
  { 
    id: "recipe001",
    name: "김치찌개",
    ingredients: ["돼지고기", "김치", "대파", "양파", "두부"],
    cookTime: 30,
    difficulty: 2.5,
    nutritionInfo: { calories: 450, protein: 25, carbs: 15, fat: 30 },
    instructions: "1. 돼지고기와 김치를 볶는다.\n2. 물을 넣고 끓인다.\n3. 대파, 양파, 두부를 넣고 더 끓인다."
  },
  // ... (다른 레시피 데이터는 동일)
];

const ingredientMasterData = [
  {
    name: "돼지고기",
    storageTips: "밀봉하여 김치냉장고 또는 냉장실 가장 안쪽에 보관하세요.",
    spoilageInfo: "색이 검게 변하거나 시큼한 냄새가 나면 상한 것입니다.",
    allergyInfo: "돼지고기 알러지가 있는 경우 주의하세요.",
    shelfLife: {
        unopened: { room_temp: 0, fridge: 3, freezer: 90 },
        opened:   { room_temp: 0, fridge: 1, freezer: 30 } // 개봉 후 냉장 1일
    }
  },
  {
    name: "김치",
    storageTips: "공기가 통하지 않도록 꾹꾹 눌러 냉장 보관하세요.",
    spoilageInfo: "표면에 흰색 곰팡이(골마지)가 생길 수 있으나, 걷어내고 드셔도 괜찮습니다. 시큼한 냄새가 너무 심하면 상한 것입니다.",
    allergyInfo: "젓갈류에 알러지가 있는 경우 성분을 확인하세요.",
    shelfLife: {
        unopened: { room_temp: 7, fridge: 180, freezer: 365 },
        opened:   { room_temp: 3, fridge: 90,  freezer: 180 } // 개봉 후 기간 단축
    }
  },
  {
    name: "양파",
    storageTips: "껍질을 까지 않은 채로 서늘하고 건조한 곳에 보관하세요. 깐 양파는 밀폐용기에 담아 냉장 보관하세요.",
    spoilageInfo: "물러지거나 곰팡이가 피면 상한 것입니다.",
    allergyInfo: "",
    shelfLife: {
        unopened: { room_temp: 30, fridge: 21, freezer: 180 },
        opened:   { room_temp: 2,  fridge: 7,  freezer: 180 } // 깐 양파(개봉)는 기간 단축
    }
  },
  {
    name: "계란",
    storageTips: "뾰족한 부분이 아래로 향하게 하여 냉장고 안쪽에 보관하세요. 문 쪽은 온도 변화가 심해 좋지 않습니다.",
    spoilageInfo: "물에 넣었을 때 뜨거나, 흔들었을 때 내용물이 출렁이는 느낌이 들면 상한 계란입니다.",
    allergyInfo: "계란 알러지가 있는 경우 주의하세요.",
    shelfLife: {
        unopened: { room_temp: 7, fridge: 30, freezer: 0 },
        opened:   { room_temp: 1, fridge: 3,  freezer: 0 } // 삶거나 깬 계란(개봉)
    }
  }
];

module.exports = { recipes, ingredientMasterData };
