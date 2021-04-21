var img=[
    "my faily.jpg",
    "my moter.PNG",
    "my fater.PNG",
    "my sister.png",
    "me.png"  
            ];
    var names= [
    "My family, a pleasure in itself.",
    "That's my mother,Sanjana Takke, a housewife and a very caring mother of two.",
    "That's my father,Sandeep Takke, a hardworking man and a loving father.",
    "That's my sister,Sakshi Takke, a sweet and kind girly girl and the best sister you can have.",
    "And that's me,Shrushtee Takke, the tomboy in the house."
    ];
    var i=0;
    function nextSlide()
    {
    if (i==5)
    {i=0}
    document.getElementById("image").src=img[i];
    document.getElementById("reason").innerHTML=names[i];
    i++
    }