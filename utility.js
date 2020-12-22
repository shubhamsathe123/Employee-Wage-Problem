class Utility{
    
   attendance_check()
   {
    const Half_Day_hr=4;
    const Full_day_hr=8;
    const wage_per_hr=20;
    var empCheck = Math.floor(Math.random() * 2);
    if(empCheck == 1)
    {
     console.log("employee is present");

    }
    else
    {
        console.log("employee is absent");
    }
    var full_day_wage=Full_day_hr * wage_per_hr * empCheck;
    console.log("full day employee wage is "+full_day_wage);
    var half_day_wage=Half_Day_hr * wage_per_hr * empCheck;
    console.log("part time employee wage for the day is "+half_day_wage);
   }
}

module.exports=new Utility();