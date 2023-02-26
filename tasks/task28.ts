let ageNum:number=6;
if (ageNum<2) 
{
    console.log("You are a baby");
}
 else if(ageNum>=2 && ageNum<4)
{
    console.log("You are a toddler");
}
else if(ageNum>=4 && ageNum<13)
{
    console.log("You are a Kid");
}
else if(ageNum>=13 && ageNum<20)
{
    console.log("You are a Teenager");
}
else if(ageNum>=20 && ageNum<65)
{
    console.log("You are a adult");
}
else 
{
    console.log("You are a elder");
}