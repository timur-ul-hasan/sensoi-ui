const getTree = array => {
  var o = {};
  array.forEach(a => {
    if (o[a.page_id] && o[a.page_id].children) {
      a.children = o[a.page_id] && o[a.page_id].children;
    }
    o[a.page_id] = a;
    o[a.parent_id] = o[a.parent_id] || {};
    o[a.parent_id].children = o[a.parent_id].children || [];
    o[a.parent_id].children.push(a);
  });
  return o.null.children;
};

export default getTree;
