
////////////////////////////////
// NEXT PIECE ARROW ANIMATION //
////////////////////////////////

const nextArrowContainer = document.querySelectorAll(".nextButton")
const nextArrow = document.querySelectorAll(".nextButton img")

const tlNextArrowAnim = new TimelineMax( {paused: true} )

tlNextArrowAnim.to(nextArrow, 0.4, { x: 10 })

nextArrowContainer.forEach( arrow => {
    arrow.addEventListener('mouseenter', () => {

        tlNextArrowAnim.play()
    })

    arrow.addEventListener('mouseleave', () => {
        tlNextArrowAnim.reverse()
    })
})



////////////////////////////////
// PREV PIECE ARROW ANIMATION //
////////////////////////////////

const prevArrowContainer = document.querySelectorAll(".prevButton")
const prevArrow = document.querySelectorAll(".prevButton img")

const tlPrevArrowAnim = new TimelineMax( {paused: true} )

tlPrevArrowAnim.to(prevArrow, 0.4, { x: -10 })

prevArrowContainer.forEach( arrow => {
    arrow.addEventListener('mouseenter', () => {

        tlPrevArrowAnim.play()
    })

    arrow.addEventListener('mouseleave', () => {
        tlPrevArrowAnim.reverse()
    })
})