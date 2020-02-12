const defaultCity={
    city:"武汉"
}
export default(city=defaultCity,action)=>{
    console.log(action)
    switch(action.type){
        case "city_value":
            var newState={...city};
            newState.city=action.value;
            return newState;
        default:
            return city
    }
}