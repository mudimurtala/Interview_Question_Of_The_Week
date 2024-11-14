const data = [7, 4, 5, 11, 15, 9, 2, 18, 20, 12, 25, 16, 14, 25];

let tallest_building_so_far = 0;
let visible_buildings = 0;

data.forEach((item) => {
    if (item > tallest_building_so_far) {
        tallest_building_so_far = item;
        visible_buildings++;
    }
});

console.log(visible_buildings);
