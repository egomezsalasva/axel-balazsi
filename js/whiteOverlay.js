///////////////////
// WHITE OVERLAY //
///////////////////


//Selectors
const imageWhiteOverlay = document.querySelectorAll(".whiteOverlay")


//Initalize Timeline
const tlWhiteOverlay = new TimelineMax( { paused: true } )

//Add animations to timeline
tlWhiteOverlay.to(imageWhiteOverlay, 0, { zIndex: "600" })
                .to(".whiteOverlayModal", 0.2, { display: "block", opacity: 1 })
                // .to(imageWhiteOverlay, 0.3, { scale: 1.1 }, "-= 0.3")
                        

//Event Listeners
imageWhiteOverlay.forEach(img => {
    img.addEventListener('mouseenter', () => {
        tlWhiteOverlay.play()
    })

    img.addEventListener('mouseleave', () => {
        tlWhiteOverlay.reverse()
    })
})
