module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1
  }
  return { ...item };
}

// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5
  } else if (item.enhancement >= 15 && item.enhancement > 16) {
    item.durability -= 10
    item.enhancement -= 1
  } else if (item.enhancement >= 15) {
      item.durability -= 10
  }
  return { ...item };
}

// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
function repair(item) {
  item.durability = 100
  return { ...item };
}

// stretch
function get(item) {
  if (item.enhancement > 0) {
    let points = item.enhancement
    item.name = `[+${points}] ${item.name}`;
  }
  return { ...item };
}
