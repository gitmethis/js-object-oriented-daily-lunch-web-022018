let store = {customers:[], meals:[], deliveries:[], employers:[]}


let customerId = 0
class Customer{
  constructor(name, employer_instance){
    this.name = name
    this.id = ++customerId
    this.employerId = employer_instance
    store.customers.push(this)
  }
  
  meals(){
    
  }
  
  deliveries(){
    
  }
  
  totalSpent(){
    
  }
}
let mealId = 0
class Meal{
   constructor(title, price){
     this.title = title
     this.price = price
     this.id = ++mealId
     store.meals.push(this)
   }
   
   deliveries(){
     
   }
   
   customers(){
     
   }
   
   byPrice(){
     
   }
}
let deliveryId = 0
class Delivery{
  constructor(meal, customer){
    this.meal = meal
    this.customer = customer
    this.mealId = meal.id
    this.customerId = customer.id
    this.id = ++deliveryId
    store.deliveries.push(this)
  }
  
  meal(){
    return this.meal
  }
  
  customer(){
    return this.customer
  }
}

let employerId = 0
class Employer{
  constructor(name){
    this.name = name
    this.id = ++employerId
    store.employers.push(this)
  }
  
  employees(){
    
  }
  
  deliveries(){
    
  }
  
  meals(){
    
  }
  
  mealTotals(){
    
  }
  

}





