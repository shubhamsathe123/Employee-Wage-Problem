class Utility{
   attendance_check()
   {
    var empCheck = Math.floor(Math.random() * 2);
    if(empCheck == 1)
    {
     console.log("employee is present");
    }
    else
    {
        console.log("employee is absent");
    }
   }
}

module.exports=new Utility();