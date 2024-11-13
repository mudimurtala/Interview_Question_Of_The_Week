const data = [3,7,8,3,6,1];

let tallest_building_so_far = 0;
let visible_buildings = 0;

data.forEach((item) => {
    if (item > tallest_building_so_far) {
        tallest_building_so_far = item;
        visible_buildings++;
    }
});

console.log(visible_buildings);
