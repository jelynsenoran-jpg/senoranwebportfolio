$(document).ready(function () {
  var mt = $("#main-title");
  var pm = $("#profile-message");
  var sic = $("#student-info-container");
  var btnct = $("#change-title-btn");
  var btnh = $("#hide-profile-btn");
  var btns = $("#Show-profile-btn");
  var cs = $("#course-select");
  var cst = $("#course-status");
  var sc = $("#stud-course");
  var stc = $("#student-table-container");
  var st = $("#student-table");
  var tm = $("#table-message");
  var btno = $("#apply-odd-btn");
  var btne = $("#apply-even-btn");
  var btnht = $("#hide-table-btn");
  var btnst = $("#show-table-btn");

  function showPM(msg) {
    pm.text(msg).fadein(200);
  }

  function showTM(msg) {
    tm.text(msg).fadein(200);
  }

  btnct.on("click", function () {
    mt.text("Secret");
    showPM("Title changed to : Secret");
  });

  btnh.on("click", function () {
    sic.hide();
    showPM("You clicked Hide Profile - profile is now visible.");
  });

  btns.on("mouseenter", function () {
    showPM("Mouse entered the Show Profile button.");
  });

  btns.on("mouseleave", function () {
    showPM("Mouse left the Show Profile button.");
  });

  btns.on("click", function () {
    sic.show();
    showPM("You clicked Show Profile-profile is now visible.");
  });

  cs.on("change", function () {
    var sel = $(this).val();
    if (sel === "") {
      cst.text("No course selected.");
      sc.text("BSIT");
      showPM("No course selected.");
    } else {
      cst.text("Selected: " + sel);
      sc.text(sel);
      showPM("Course selected:" + sel);
    }
  });

  btno.on("click", function () {
    st.find("tbody tr").css("backgroud-color", "");

    st.find("tbody tr:odd").css("background-color", "#555");
    showTM("You clicked: Apply Odd Rows");
  });

  btne.on("click", function () {
    st.find("tbody tr").css("background-color", "");

    st.find("tbody tr:even").css("background-color", "#b3c8ff");
    showTM("You clicked: Apply Even Rows");
  });

  btnht.on("click", function () {
    stc.hide();
    showTM("You clicked: Hide Table-table is now hidden.");
  });

  btnst.on("click", function () {
    stc.show();
    showTM("You clicked: Show Table-table is now visible.");
  });
});
