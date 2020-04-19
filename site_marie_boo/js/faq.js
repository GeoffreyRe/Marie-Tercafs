let questionElts = document.getElementsByClassName("Question")
let elt = document.getElementsByClassName("SingleFAQ")
let openList = []
let setTimeoutId = 0
for (let j = 0; j < questionElts.length; j++)
{
    openList.push(false)
}
for (let i = 0; i < questionElts.length; i++)
{
    questionElts[i].addEventListener("click", function(){
    let repElt = questionElts[i].parentNode.children[1]
    let h = parseInt(getComputedStyle(repElt.children[0]).height, 10) + parseInt(getComputedStyle(repElt.children[0]).marginBottom, 10) + "px"
    if (openList[i] === false)
        {
        for (let k = 0; k < openList.length ; k++)
            {
            if (openList[k] === true)
                {
                openList[k] = false
                questionElts[k].className = "Question Close pr-3 pb-1 pt-3 h6"
                window.clearTimeout(setTimeoutId)
                document.getElementsByClassName("Answer")[k].style.height = getComputedStyle(document.getElementsByClassName("Answer")[k]).height
                window.setTimeout(function(){
                    document.getElementsByClassName("Answer")[k].style.height = 0
                    document.getElementsByClassName("Answer")[k].children[0].style.opacity = 0
                }, 1)
                }
            }
        openList[i] = true
        questionElts[i].className = "Question Open pr-3 pb-1 pt-3 h6"
        repElt.style.height = h
        repElt.children[0].style.opacity = 1
        setTimeoutId = window.setTimeout(function(){repElt.style.height = "auto"}, 1200)
        
        }
    else
        {
        window.clearTimeout(setTimeoutId)
        repElt.style.height = getComputedStyle(repElt).height
        openList[i] = false
        questionElts[i].className = "Question Close pr-3 pb-1 pt-3 h6"
        window.setTimeout(function(){
            repElt.style.height = 0
            repElt.children[0].style.opacity = 0
        }, 1)
        }
    })
}
