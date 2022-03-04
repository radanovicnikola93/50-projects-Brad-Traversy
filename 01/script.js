const panels = document.querySelectorAll('.panel')
const panelsArr = [...panels];

// on click add active class
panelsArr.map(panel => {
    panel.addEventListener('click', () => {
      removeActiveClass();
      panel.classList.add("active");
    })

})


    // when the other panel is clicked remove active from previous
    function removeActiveClass() {
        panelsArr.map(panel => {
            panel.classList.remove('active');
        })   
    }