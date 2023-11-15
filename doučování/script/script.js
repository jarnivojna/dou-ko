const obrazek_1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBLC8t6JboE29E8wc9m1hpkVdHaloIBKezJ98Y2jcBg&s"
const obrazek_2 = "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt8ed0ddc56697f275/60ee12deaa9be3239e98d9a2/Teemo_0.jpg"
const obrazek_3 = "https://www.billboard.com/wp-content/uploads/media/guardians-of-the-galaxy-billbaord-650.jpg"

function obr1()
{
    let img = document.getElementById("obr");
    
    if (img.src==obrazek_1)
    {
        alert("obrazek_1 už tam je");
    }
    else
    {
        img.src=obrazek_1;
    }
}

function obr2()
{
    let img = document.getElementById("obr");
    
    if (img.src!=obrazek_2)
    {
        img.src=obrazek_2;
    }
    else
    {
        alert("obrazek_2 už tam je");
    }
}

function obr3()
{
    let img = document.getElementById("obr")

    if (img.src==obrazek_3)
    {
        alert ("obrazek už tam je")
    }
    else
    {
        img.src=obrazek_3
    }
}

function zmena()
{
    let input = document.getElementById("input");
    

    if (input.value=="1")
    {
        obr1();
    }
    else if (input.value=="2")
    {
        obr2();
    }
    else if (input.value=="3")
    {
        obr3();
    }

    else
    {
        alert("piš jenom 1, 2, 3")
    }
}
