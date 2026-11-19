



window.loadTable = (json) => {
const data = JSON.parse(json);

new DataTable("#table", {
  data: data,
  paging: false,
  fixedHeader: true,
  scrollCollapse: true,
  scrollY: "150px",
  order: [[1, 'desc']],
  columns: [{
    title: "Name",
  },
  {
    title: "Company",
  },
  {
    title: "Title",
  },
  {
    title: "Start",
  },
  {
    title: "Current",
  }]
});

};
