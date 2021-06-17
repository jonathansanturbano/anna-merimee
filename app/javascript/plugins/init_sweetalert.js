import swal from "sweetalert";

const initSweetalert = (selector) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) {
    swalButton.addEventListener("click", (e) => {
      swal("Etes-vous sûr ?", {
        buttons: ["Non", "Oui"],
        dangerMode: true,
      }).then((value) => {
        if (value == true) {
          const link = document.querySelector("#delete-link");
          link.click();
        }
      });
    });
  }
};

export { initSweetalert };
