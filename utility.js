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
      const MAX_MONTHLY_HRS = 100;
      const TOTAL_MONTHLY_DAYS = 20;
       const wage_per_hour=20;
       var day = 0;
       var totalHrs = 0;
       var monthly_Wage=0;
        for(var day =0;day <= TOTAL_MONTHLY_DAYS;day ++)
        { 
         if(totalHrs <= MAX_MONTHLY_HRS ){
            var daily_wage=wage_per_hour * this.attendance_check();  
            monthly_Wage = monthly_Wage + daily_wage;
            console.log("Day:"+day+" | Daily Wage : "+daily_wage+ " | Total Wage : "+monthly_Wage);
            totalHrs = totalHrs + this.attendance_check();
         }
        }
        console.log("monthly wage is"+monthly_Wage);
        console.log("total working hours are:"+totalHrs);
   }


}
module.exports=new Utility();