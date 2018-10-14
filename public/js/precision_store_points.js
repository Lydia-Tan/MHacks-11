
function store_points_variable(){
  store_points_var = true;
}


function stop_storing_points_variable(){
  store_points_var = false;
}

function get_points(){
  var past50 = new Array(2);
  past50[0] = xPast50;
  past50[1] = yPast50;
  return past50;