/////////////////////
// SUBMENU ANIMATION //
/////////////////////


//Selectors
const subMenuPlusCross = document.querySelector(".enterSubMenu")
const subMenuPlusCrossIcon = document.querySelectorAll(".enterSubMenu img")

//Initalize Timeline
const tlSubMenuAnim = new TimelineMax( {paused: true, reversed: true} )

//Add animations to timeline
tlSubMenuAnim.to(subMenuPlusCrossIcon, 0.4, { rotation: -45 })
                .to('.optionsSubMenu', 0.4, { display: "block" })
                .fromTo('.optionsSubMenu', 0.4, {  y: "-6.5967vh", opacity: 0 }, { y: 0,  opacity: 1 })
        
//Make toggle on submenu
function toggleSubMenuAnim(anim){
    anim.reversed() ? anim.play() : anim.reverse();
}

//Event Listeners
subMenuPlusCross.addEventListener("click", (e) => {
    //Wait for animation to end before being able to click again
    if(tlSubMenuAnim.isActive()){
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    //Active toggle on click
    toggleSubMenuAnim(tlSubMenuAnim)
})
