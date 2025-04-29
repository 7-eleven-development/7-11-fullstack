let latestTemperature = null;


export const setTemperature = (temperature) => {
        latestTemperature = temperature; 
};

 export const getTemperature = () => {
        return latestTemperature; 
 };
