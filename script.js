$(document).ready(function () {
  $("button").click(function () {
    getJSONData($(this).attr("id"));
  });
});

const getJSONData = (id) => {
  $.get("data.json", function (data) {
    const finalData = data.data[`data${id}`].text;
    $(`#content${id}`).text(finalData);
  });
};
