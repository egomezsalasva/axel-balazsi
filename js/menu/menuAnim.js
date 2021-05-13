/////////////////////
// MENU ANIMATION //
/////////////////////


//Selectors
const hamburgerIcon = document.getElementById("hamburgerIcon")

//Initalize Timeline
const tlMenuAnim = new TimelineMax( {paused: true, reversed: true} )

//Add animations to timeline
tlMenuAnim.to(hamburgerIcon, 0.4, { rotation: 45 })
            .to('.mobileMenu', 0.4, { top: 0 }, "-= 0.4")
            // .to('header', 0.4, { background: "rgba(255,255,255,0.0)" }, "-= 0.4")
            .to('.whiteMenu', 0.8, { top: 0 })
            .to('.footerMenu', 0.8, { opacity: 1 }, "-= 0.4")
        


//Initialize toggle background color header 
// const whiteBackgroundActive = true;

//Make toggle on animation
function toggleAnim(anim){
    anim.reversed() ? anim.play() : anim.reverse();
}

//Event Listeners
hamburgerIcon.addEventListener("click", (e) => {
    //Wait for animation to end before being able to click again
    if(tlMenuAnim.isActive()){
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    //Active toggle on click
    toggleAnim(tlMenuAnim)

})
