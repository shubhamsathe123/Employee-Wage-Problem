class Utility{
    
   attendance_check()
   {
    let Half_day_hr=4;
    let Full_day_hr=8;
    var availability;
     var empCheck = Math.floor(Math.random() * 10 % 3);
     
     switch(empCheck)
     {
       case 0:
           {
             availability=0;
             break;
           }
        case 1:
            {
                availability=Half_day_hr;
                break;
            }
        default:
            {
                availability=Full_day_hr;
                break;
            }

     }
    return availability;
   }

   wage_calculation()
   {  
       const work_day_pm=20;
       const wage_per_hour=20;
       let daily_wage=wage_per_hour * this.attendance_check();
       console.log("daily wage is "+daily_wage);
       let monthly_wage=work_day_pm * daily_wage;
       console.log("monthly wage is"+monthly_wage);
   }


}
module.exports=new Utility();