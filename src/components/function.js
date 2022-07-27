function differentCategory(array) {
  const uniqueCategory = [];
  const unique = array.filter((e) => {
    const isDuplicate = uniqueCategory.includes(e.category);
    if (!isDuplicate) {
      uniqueCategory.push(e.category);
      return true;
    }
    return false;
  });
  return unique;
}



module.exports = { differentCategory };
