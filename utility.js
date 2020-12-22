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
       const wage_per_hour=20;
       let daily_wage=wage_per_hour * this.attendance_check();
       console.log("wage is "+daily_wage);
   }


}
module.exports=new Utility();