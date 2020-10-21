$(document).ready(function(){
  var header = $("<header></header>");
  $("body").append(header);

  var h3 = $("<h3>Numbers & Squares</h3>");
  $("header").append(h3);

  var main = $("<main></main>");
  $("body").append(main);

  var div = $("<div class='container'><div class = 'table-responsive-sm'></div></div>");
  $("main").append(div);

 var table = $("<table class='table table-striped'><thead><tr><th class='scope-col'>Number</th><th class='scope-col sq'>Squares</th></tr></thead></table>");
 $("div.table-responsive-sm").append(table);

  var tbody = $("<tbody></tbody>");
  $("table").append(tbody);
  for (var i=1;i<=10;i++){
      var tr = $("<tr><td>"+i+"<td><td>"+(i*i)+"</td></tr>");
      $("tbody").append(tr);
  }
});
