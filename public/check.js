
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            var checkboxId = this.id;
            // console.log(checkboxId)
            var theLabel = document.querySelector('[for="' + checkboxId + '"]');
            theLabel.classList.toggle("labelchecked");
            // var label = lobels.find(label => label.getAttribute('for') === checkbox.id)
            // label.classlist.toggle('labelchecked')

        })
    })