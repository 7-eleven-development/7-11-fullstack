let latestGasValue = null;


export const setGasValue = (gasValue) => {
    latestGasValue = gasValue; 
};

 export const getGasValue = () => {
        return latestGasValue; 
 };
