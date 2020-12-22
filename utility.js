class Utility{
    
   attendance_check()
   {
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
    var daily_emp_wage=Full_day_hr * wage_per_hr * empCheck;
    console.log("full day employee wage is "+daily_emp_wage);
   }
}

module.exports=new Utility();