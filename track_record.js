
var div = document.getElementById('diet-plan-div')
var para_weight = document.createElement('p')

function get_elem_value(){
    console.log("yes")
    div.style.visibility = "visible"     
    div.append(para_weight);
    para_weight.setAttribute('class', 'about-us-heading')
    para_weight.style.textAlign ="center"
    para_weight.style.fontSize = "34px"
}

function getValue(){
    var p_age = document.getElementById('age').value
    var p_height = document.getElementById('height').value
    var p_weight = document.getElementById('weight').value
    if(p_age<18){
        var para = document.createElement('p');
        para.appendChild(div);
        para.textContent="You are under age"
    }else{
        get_elem_value();
        para_weight.textContent = "You are overweight"
        if((p_height>=58 || p_height<=75) && p_weight>40){
            console.log(p_height)
            var k = 0;
            for(var i in diet_plan_for_weight_loss()){
                var para_diet_plan = document.createElement('p');
                div.append(para_diet_plan)
                para_diet_plan.style.color="#FFFFFF"
                para_diet_plan.style.marginLeft="20px"
                para_diet_plan.style.fontSize = "22px"
                para_diet_plan.innerHTML = day()[k++]+": "+diet_plan_for_weight_loss()[i]+'<br>';
            }
            
        }else{
            get_elem_value()
            para_weight.textContent = "You are under weight"
            var k = 0;
            for(var i in diet_plan_for_weight_loss()){
                var para_diet_plan = document.createElement('p');
                div.append(para_diet_plan)
                para_diet_plan.style.color="#FFFFFF"
                para_diet_plan.style.marginLeft="20px"
                para_diet_plan.style.fontSize = "22px"
                para_diet_plan.innerHTML = day()[k++]+": "+diet_plan_for_weight_gain()[i]+'<br>';
            }
            
        }
    }

}

function diet_plan_for_weight_loss(){
    var diet_plan = {
        Day_one : "Cucumber Detox Water, Oats Porridge in Skimmed Milk",
        Day_two : "Cucumber Detox Water, Mixed Vegetable Salad(1 katori)",
        Day_three : "Cucumber Detox Water, Cut Fruits(1 cup)Buttermilk(1 glass)",
        Day_four : "Cucumber Detox Water, Tea with Less Sugar and Milk(1 teacup)",
        Day_five : "Cucumber Detox Water, Mixed Vegetable Salad(1 katori)", 
        Day_six : "Cucumber Detox Water, Dal(1 katori)Lauki Sabzi(1 katori)"
    }

    return diet_plan;
}

function diet_plan_for_weight_gain(){
    var diet_plan={
        Day_one : "Dalia (Without Sugar)20-50 gms., Black (Sprouted) grams",
        Day_two : "Almonds (5 to 10 piece), Half Glass of Skimmed Milk (Without Sugar)",
        Day_three : "1 Glass of Non Fat Milk, 1-2 Bananas / 2-3",
        Day_four : "1 Glass of fresh juice (No Salt), 2 Boiled potatoes with salad.",
        Day_five : "1 Glass of Juice/Shake/Soup (+) 1-2 Bananas", 
        Day_six : "1-2 Boiled Potatoes/25-50 grams if Raw Cheese with Salad."
    }

    return diet_plan;
}

function day(){
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
    return days
}

window.addEventListener('load', function(){
    btn = document.getElementById('submit')
    btn.addEventListener('click', getValue)
})