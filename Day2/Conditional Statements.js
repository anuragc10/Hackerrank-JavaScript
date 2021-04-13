function getGrade(grade) {
    let grade1;
    if(grade<=30 && grade>25){
        grade1='A';
    }
    else if((grade<=25) && (grade>20)){
        grade1='B'
    }
    else if(grade<=20 && grade>15){
        grade1='C'
    }
    else if(grade<=15 && grade>10){
        grade1='D'
    }
    else if(grade<=10 && grade>5){
        grade1='E'
    }
    else if(grade<=5 && grade>0){
        grade1='F'
    }
    
    
    
    
    return grade1;
}
