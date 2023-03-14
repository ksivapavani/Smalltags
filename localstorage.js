function getTheData()
{
    var name = document.getElementById("name").value
    var colour = document.getElementById("col").value
    var favHero = document.getElementById("hero").value
    localStorage.setItem("Name",name)
    localStorage.setItem("Colour",colour)
    localStorage.setItem("FavHero",favHero)
}
function storeTheData()
{
    var name = localStorage.getItem("Name")
    var colour = localStorage.getItem("Colour")
    var favHero = localStorage.getItem("FavHero")
    
    document.getElementById("n").innerHTML=name 
    document.getElementById("fh").innerHTML=favHero

    document.getElementById("n").style.color=colour
    document.getElementById("fh").style.color=colour    
}