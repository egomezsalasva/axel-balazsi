/////////////////////
// MENU ANIMATION //
/////////////////////


//Selectors
const viewPiecesContainer = document.querySelector(".viewPieces")


//Initalize Timeline
const tlViewPiecesDeviateFromFunction = new TimelineMax( { paused: true } )
const tlViewPiecesTheFlatpackOfEverydayObjects = new TimelineMax( { paused: true } )
const tlViewPiecesThingsAroundUsWeDontSee = new TimelineMax( { paused: true } )

            
//Add animations to timeline         
tlViewPiecesDeviateFromFunction.to(".deviateFromFunctionContainerDesktop .viewPieces h2", 0.4, { y: -140, cursor: "auto" })
            .to(".deviateFromFunctionContainerDesktop .option01", 0.4, { y: -75 })
            .to(".deviateFromFunctionContainerDesktop .option02", 0.4, { y: -25 }, "-=0.4") 
            .to(".deviateFromFunctionContainerDesktop .option03", 0.4, { y: 25 }, "-=0.4") 
            .to(".deviateFromFunctionContainerDesktop .option04", 0.4, { y: 75 }, "-=0.4") 
            .to(".deviateFromFunctionContainerDesktop .linkViewPieces", 0.4, { display: "inline-block" }, "-=0.4") 
            .staggerFromTo(".deviateFromFunctionContainerDesktop .linkViewPieces", 0.8, { y:-7, opacity: 0 }, { y:0, opacity: 1 }, 0.2);

//Add animations to timeline
tlViewPiecesTheFlatpackOfEverydayObjects.to(".theFlatpackOfEverydayObjectsContainerDesktop .viewPieces h2", 0.4, { y: -140, cursor: "auto" })
            .to(".theFlatpackOfEverydayObjectsContainerDesktop .option01", 0.4, { y: -75 })
            .to(".theFlatpackOfEverydayObjectsContainerDesktop .option02", 0.4, { y: -25 }, "-=0.4") 
            .to(".theFlatpackOfEverydayObjectsContainerDesktop .option03", 0.4, { y: 25 }, "-=0.4") 
            .to(".theFlatpackOfEverydayObjectsContainerDesktop .option04", 0.4, { y: 75 }, "-=0.4") 
            .to(".theFlatpackOfEverydayObjectsContainerDesktop .linkViewPieces", 0.4, { display: "inline-block" }, "-=0.4") 
            .staggerFromTo(".theFlatpackOfEverydayObjectsContainerDesktop .linkViewPieces", 0.8, { y:-7, opacity: 0 }, { y:0, opacity: 1 }, 0.2);

//Add animations to timeline
tlViewPiecesThingsAroundUsWeDontSee.to(".thingsAroundUsWeDontSeeContainerDesktop .viewPieces h2", 0.4, { y: -110, cursor: "auto" })
            .to(".thingsAroundUsWeDontSeeContainerDesktop .option01", 0.4, { y: -45 })
            .to(".thingsAroundUsWeDontSeeContainerDesktop .option03", 0.4, {y: 45}, "-=0.4") 
            .to(".thingsAroundUsWeDontSeeContainerDesktop .linkViewPieces", 0.4, { display: "inline-block" }, "-=0.4") 
            .staggerFromTo(".thingsAroundUsWeDontSeeContainerDesktop .linkViewPieces", 0.8, { y:-7, opacity: 0 }, { y:0, opacity: 1 }, 0.2);


//Event Listeners
viewPiecesContainer.addEventListener("click", () => {
    tlViewPiecesDeviateFromFunction.play()
    tlViewPiecesTheFlatpackOfEverydayObjects.play()
    tlViewPiecesThingsAroundUsWeDontSee.play()
})


