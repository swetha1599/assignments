var panel1 = document.getElementById("panel-1")
var panel2 = document.getElementById("panel-2")
var panel3 = document.getElementById("panel-3")
var panel4 = document.getElementById("panel-4")
var panel5 = document.getElementById("panel-5")

var panels = document.getElementsByClassName("panel")
function resetActivePanel() {
    // panel1.classList.remove('active')
    // panel2.classList.remove('active')
    // panel3.classList.remove('active')
    // panel4.classList.remove('active')
    // panel5.classList.remove('active')
    for (index = 0; index < panels.length; index++) {
        panels[index].classList.remove("active")
    }

}

function selectPanel(panelId) {
    resetActivePanel()
    console.log(panelId)
    document.getElementById(panelId).classList.add('active')
}